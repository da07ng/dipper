define(["../../../core/declare",
        "dojo/_base/lang",
        "dojo/_base/array",
        "dojo/dom-class",
        "dojo/has",
        "dojo/window",
        "./Templated",
        "dojo/text!./templates/ValidationMessage.html",
        "../../../kernel"],
function(declare, lang, array, domClass, has, win, Templated, template, esriKernel) {

  var oThisClass = declare([Templated], {

    _isGxeValidationMessage: true,
    message: null,
    inputWidget: null,
    isValid: false,
    templateString: template,
    validationPane: null,

    postCreate: function() {
      this.inherited(arguments);

      if(this.inputWidget) {
        this.own(this.inputWidget.on("interaction-occurred", lang.hitch(this, function(o) {
          this._check();
        })));
      }
      this._updateIcon(this.isValid);
    },

    _check: function() {
      if(!this.inputWidget || !this.inputWidget.parentXNode) {
        return;
      }
      var info = this.inputWidget.parentXNode.validateValue();
      this._updateIcon(info.isValid);
      this.setNodeText(this.messageNode, info.message);
    },

    _ensureInputFocus: function(evt) {
      if(this.inputWidget && this.inputWidget.ensureFocus) {
        this.inputWidget.ensureFocus();
        this._scrollOnClick();
      }
    },

    _onIconClick: function(evt) {
      this._ensureInputFocus();
    },

    _onMessageClick: function(evt) {
      this._ensureInputFocus();
    },

    _scrollOnClick: function() {
      if(!this.validationPane) {
        return;
      }
      var bFoundThis = false, bCurIsAfter = false, prevNode = null, nextNode = null;
      array.forEach(this.validationPane.getChildren(), function(widget) {
        var node = widget.domNode;
        if(widget === this) {
          bFoundThis = true;
          domClass.add(node, "current");
        } else if(widget._isGxeValidationMessage) {
          if(bFoundThis) {
            if(!nextNode) {
              nextNode = node;
            }
            if(domClass.contains(node, "current")) {
              if(bFoundThis) {
                bCurIsAfter = true;
              }
            }
          } else {
            prevNode = node;
          }
          domClass.remove(node, "current");
        }
      }, this);
      if(bCurIsAfter && prevNode) {
        win.scrollIntoView(prevNode);
      } else if(nextNode) {
        win.scrollIntoView(nextNode);
      }
    },

    _updateIcon: function(isValid) {
      var nd = this.iconNode;
      if(isValid) {
        domClass.remove(nd, "gxeIconWarning");
        domClass.add(nd, "gxeIconSuccess");
      } else {
        domClass.remove(nd, "gxeIconSuccess");
        domClass.add(nd, "gxeIconWarning");
      }
    }

  });

  

  return oThisClass;
});