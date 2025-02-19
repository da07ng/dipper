define(["../../../core/declare",
        "dojo/_base/lang",
        "dojo/_base/array",
        "dojo/dom-attr",
        "dojo/has",
        "./etc/docUtil",
        "./etc/validationUtil",
        "./Templated",
        "../../../kernel"],
function(declare, lang, array, domAttr, has, docUtil, validationUtil, Templated, esriKernel) {

  var oThisClass = declare([Templated], {

    _isGxeAttribute: false,
    _isGxeElement: false,
    _isGxeNode: true,
    _isOptionallyOff: false,
    gxeDocument: null,
    gxePath: null,
    inputWidget: null,
    parentElement: null,

    /* XNode common properties, configurable */
    label: null,
    target: null,  // mandatory
    fixed: false,
    isDocumentTitle: false,
    optionsFilter: null, // comma delimited for InputSelectOne or InputSelectMany
    serializeIfEmpty: false,
    trim: true,
    value: null,
    valueType: null,
    alternateValues: null,  // array of alternate values,

    postCreate: function() {
      this.inherited(arguments);
    },

    buildPath: function() {

      var checkRoot = function(oSelf, widget, top) {
        if(widget._isGxeRootDescriptor && widget.gxeDocument) {
          if(!oSelf.gxeDocument) {
            oSelf.gxeDocument = widget.gxeDocument;
          }
          if(!oSelf.gxeDocument.rootElement && top) {
            oSelf.gxeDocument.rootElement = top;
          }
        }
      };

      if(typeof this.target !== "string") {
        this.target = null;
      }
      if(this.target !== null) {
        this.target = lang.trim(this.target);
        if(this.target.length === 0) {
          this.target = null;
        }
      }

      var top = null, parent = this.getParent(), path = this.target;
      if(this._isGxeAttribute) {
        path = "@" + path;
      }
      if(this._isGxeElement) {
        top = this;
      }
      if(this._isGxeElement) {
        checkRoot(this, this, top);
      }
      while(parent) {
        if(parent._isGxeElement) {
          if(!this.parentElement) {
            this.parentElement = parent;
          }
          if((parent.gxePath !== null) && (parent.gxeDocument !== null)) {
            this.gxePath = parent.gxePath + "/" + path;
            this.gxeDocument = parent.gxeDocument;
            domAttr.set(this.domNode, "data-gxe-path", this.gxePath);
            this._validateTarget();
            return;
          }
          path = parent.target + "/" + path;
          top = parent;
        }
        checkRoot(this, parent, top);
        parent = parent.getParent();
      }
      path = "/" + path;
      this.gxePath = path;
      domAttr.set(this.domNode, "data-gxe-path", this.gxePath);
      this._validateTarget();
    },

    _checkOccurs: function(bIsMax, v) {
      var n = 1, t = typeof(v);
      if(this._isGxeAttribute) {
        if(bIsMax) {
          return 1;
        } else {
          n = 0;
        }
      }
      if((t !== "undefined") && (v !== null)) {
        if(t === "string") {
          v = lang.trim(v).toLowerCase();
          if(bIsMax && (v === "unbounded")) {
            return v;
          }
          if(v.length > 0) {
            v = parseInt(v);
            if(!isNaN(v)) {
              t = typeof(v);
            }
          }
        }
        if(t === "number") {
          if(isFinite(v)) {
            if(v < 0) {
              v = 0;
            }
            n = v;
          }
        }
      }
      return n;
    },

    checkXmlValue: function() {
      var v = this.getXmlValue();
      if(typeof v === "undefined") {
        v = null;
      }
      if(v !== null) {
        if(this.trim && (typeof v === "string")) {
          v = lang.trim(v);
        }
        if(!v.push) {
          v = "" + v;
        }
        if(!this.serializeIfEmpty && (v.length === 0)) {
          v = null;
        }
      }
      return v;
    },

    findInputWidget: function() {
      var widget = null;
      array.some(this.getChildren(), function(child) {
        if(child._isGxeInput) {
          widget = child;
          return true;
        }
      });
      return widget;
    },

    getLabelString: function() {
      var s, v = this.label;
      if((typeof(v) !== "undefined") && (v != null)) {
        return v;
      } else {
        s = this.target;
        if((typeof(s) !== "undefined") && (s != null)) {
          this.label = s;
          return s;
        } else {
          return "No Target";
        }
      }
    },

    getParentElement: function() {
      var parent = this.getParent();
      while(parent) {
        if(parent._isGxeElement) {
          return parent;
        }
        parent = parent.getParent();
      }
      return null;
    },

    getXmlValue: function() {
      if(this.inputWidget) {
        return this.inputWidget.getXmlValue();
      }
      return this.value;
    },

    getValidationLabel: function() {
      if(!this.showHeader && this.parentElement) {
        if(this._isGxeElement && this._adoptedForMultiplicity) {
          return this.getLabelString();
        }
        return this.parentElement.getValidationLabel();
      }
      return this.getLabelString();
    },

    resolveMinOccurs: function() {
      return this.minOccurs;
    },

    _validateTarget: function() {

      var printDescriptor = function(oThis, msg) {
        console.log("*** ", msg);
        var dsc = docUtil.findDescriptor(oThis);
        if(dsc && dsc.templateString) {
          console.log(dsc.templateString);
          console.log(dsc);
        }
      };

      var msg, pfx = "XNode.validateTarget: ", tgt = this.target;
      this.minOccurs = this._checkOccurs(false, this.minOccurs);
      this.maxOccurs = this._checkOccurs(true, this.maxOccurs);

      if(!this.gxeDocument) {
        throw new Error(pfx + "Unable to connect to gxeDocument " + this.target);
      }
      if((typeof tgt !== "string") || (tgt === null) || (tgt.length === 0)) {
        msg = pfx + "The target is empty: " + this.target;
        printDescriptor(this, msg);
        throw new Error(msg);
      }
      if(this.target.indexOf("/") !== -1) {
        msg = pfx + "The target should not contain a forward slash: " + this.target;
        printDescriptor(this, msg);
        throw new Error(msg);
      }
      if(this._isGxeElement && (this.target.indexOf(":") === -1)) {
        if(this.gxeDocument.hasNamespaces()) {
          msg = pfx + "The target has no namespace prefix: " + this.target;
          printDescriptor(this, msg);
        }
      }
    },

    validateValue: function(validationTracker) {
      var status = {
        isValid: true,
        isRequired: false,
        label: null,
        message: "",
        xnodeWidget: this,
        inputWidget: this.inputWidget
      };
      if(this.fixed || !this.inputWidget) {
        return status;
      }
      var minOccurs = this.resolveMinOccurs();
      status.isRequired = (minOccurs > 0);
      status.label = this.getValidationLabel();

      var v = this.inputWidget.getInputValue();
      if(typeof v === "undefined") {
        v = null;
      }
      if(v !== null) {
        if(this.trim && (typeof v === "string")) {
          v = lang.trim(v);
        }
      }
      validationUtil.validateValue(status, v);

      if(!status.isValid && validationTracker) {
        validationTracker.handleValidationError(this, status.message, this.inputWidget);
      }
      return status;
    }

  });

  

  return oThisClass;
});