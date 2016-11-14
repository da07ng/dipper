define(["../../../core/declare",
        "dojo/_base/lang",
        "dojo/_base/array",
        "dojo/dom-attr",
        "dojo/dom-class",
        "dojo/dom-construct",
        "dojo/has",
        "./etc/docUtil",
        "./Templated",
        "../../../kernel"],
function(declare, lang, array, domAttr, domClass, domConstruct, has, docUtil, Templated, esriKernel) {

  var oThisClass = declare([Templated], {

    _isGxeInput: true,
    _supportsMultipleValues: false,
    parentXNode: null,

    /* InputBase common properties, configurable */
    hint: null,

    postCreate: function() {
      this.inherited(arguments);
    },

    applyHint: function() {
      var v = this.hint;
      if(!this.hintNode || (typeof v === "undefined") || (v === null)) {
        return;
      }
      if(!this.parentXNode || !this.parentXNode.gxeDocument || this.parentXNode.gxeDocument.isViewOnly) {
        return;
      }
      v = lang.trim(v);
      if(v.length === 0) {
        return;
      }
      this.setNodeText(this.hintNode, v);
      domClass.add(this.hintNode, "populated");
    },

    applyViewOnly: function() {
      if(!this.viewOnlyNode) {
        return;
      }
      if(!this.parentXNode || !this.parentXNode.gxeDocument || !this.parentXNode.gxeDocument.isViewOnly) {
        return;
      }
      var v = this.getDisplayValue();
      if((typeof v === "undefined") || (v === null)) {
        return;
      }
      if(v.push && (v.length === 1)) {
        v = v[0];
      }
      if(v.push) {
        this.viewOnlyNode.innerHTML = "";
        array.forEach(v, function(v2) {
          var nd = domConstruct.create("div", {"class": "gxeParagraph"}, this.viewOnlyNode);
          this.setNodeText(nd, v2);
        }, this);
        domClass.add(this.viewOnlyNode, "populated");
      } else {
        this.setNodeText(this.viewOnlyNode, v);
        domClass.add(this.viewOnlyNode, "populated");
      }
    },

    connectXNode: function(parentXNode, isViewOnly) {
      // TODO: validate subTarget
      if(isViewOnly) {
        if(this.focusNode) {
          this.focusNode.disabled = true;
        }
      } else {
        this.applyHint();
      }
      if(this.focusNode && parentXNode && parentXNode.fixed) {
        this.focusNode.disabled = true;
      }
      if(parentXNode && parentXNode.gxePath) {
        if(this.focusNode) {
          domAttr.set(this.focusNode, "data-gxe-for", parentXNode.gxePath);
        } else {
          domAttr.set(this.domNode, "data-gxe-for", parentXNode.gxePath);
        }
      }
    },

    emitInteractionOccurred: function(params) {
      if(!params) {
        params = {inputWidget: this};
      }
      this.emit("interaction-occurred", params);
    },

    ensureFocus: function() {
      docUtil.ensureVisibility(this);
      if(this.focusNode) {
        this.focusNode.focus();
      }
    },

    getDisplayValue: function() {
      return this.getInputValue();
    },

    getInputValue: function() {
      return null;
    },

    getXmlValue: function() {
      return this.getInputValue();
    },

    importValue: function(info, value) {
      this.setInputValue(value);
    },

    importValues: function(info, values) {
    },

    setInputValue: function(value) {
    }

  });

  

  return oThisClass;
});