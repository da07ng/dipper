define(["../../../core/declare",
        "dojo/_base/lang",
        "dojo/_base/array",
        "dojo/dom-class",
        "dojo/dom-construct",
        "dojo/dom-style",
        "dojo/has",
        "../base/Templated",
        "../base/ValidationMessage",
        "dojo/text!./templates/ValidationPane.html",
        "../../../kernel"],
function(declare, lang, array, domClass, domConstruct, domStyle, has,
         Templated, ValidationMessage, template, esriKernel) {

  var oThisClass = declare([Templated], {

    editor: null,
    templateString: template,

    postCreate: function() {
      this.inherited(arguments);
    },

    _addChild: function(message, inputWidget, isValid) {
      var nd = domConstruct.create("div", {}, this.containerNode);
      new ValidationMessage({
        message: message,
        inputWidget: inputWidget,
        isValid: isValid,
        validationPane: this
      }, nd);
    },

    addWarning: function(message, inputWidget) {
      this._addChild(message, inputWidget);
      this._toggleClear(true);
      this._toggleVisibility(true);
      if(this.editor && this.editor.editDocumentPane) {
        domClass.add(this.editor.editDocumentPane.domNode, "gxeRepairMode");
      }
    },

    clearMessages: function() {
      array.forEach(this.getChildren(), function(widget) {
        if(widget._isGxeValidationMessage) {
          widget.destroyRecursive(false);
        }
      });
      this._toggleClear(false);
      this._toggleVisibility(false);
      try {
        this.containerNode.scrollTop = 0; // TODO This doesn't work in Firefox
      } catch(ex) {
      }

    },

    _onClearClick: function(evt) {
      this.clearMessages();
    },

    _toggleClear: function(bVisible) {
      var nd = this.clearNode;
      if(bVisible) {
        domStyle.set(nd, "display", "inline-block");
      } else {
        domStyle.set(nd, "display", "none");
      }
    },

    _toggleVisibility: function(bVisible) {
      var nd = this.domNode;
      if(bVisible) {
        domStyle.set(nd, "display", "block");
      } else {
        domStyle.set(nd, "display", "none");
      }
      if(this.editor && this.editor.editDocumentPane) {
        domClass.remove(this.editor.editDocumentPane.domNode, "gxeRepairMode");
        this.editor.resizeDocument(this.editor.editDocumentPane);
      }
    },

    whenComplete: function() {
      if(!this.editor || !this.editor.editDocumentPane) {
        return;
      }
      if(domClass.contains(this.editor.editDocumentPane.domNode, "gxeRepairMode")) {
        this.editor.resizeDocument(this.editor.editDocumentPane);
      }
    }

  });

  

  return oThisClass;
});