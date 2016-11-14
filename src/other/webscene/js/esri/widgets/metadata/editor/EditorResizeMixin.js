define(["../../../core/declare",
        "dojo/_base/lang",
        "dojo/dom-geometry",
        "dojo/dom-style",
        "dojo/has",
        "dojo/window",
        "../../../kernel"],
function(declare, lang, domGeometry, domStyle, has, win, esriKernel) {

  var oThisClass = declare(null, {

    constructor: function(args) {
      lang.mixin(this, args);
    },

    _getMaxCanvasHeight: function(node) {
      var h = 0, editorBox, toolbarBox, validationBox, winBox, nodeBox;
      var validationNode = this.validationPane.domNode;

      if(this.dialogBroker) {
        editorBox = domGeometry.getMarginBox(this.domNode);
        toolbarBox = domGeometry.getMarginBox(this.primaryToolbar.domNode);
        h = (editorBox.h - toolbarBox.h - 75);
        if(validationNode.style.display !== "none") {
          validationBox = domGeometry.getMarginBox(validationNode);
          h = h - validationBox.h;
        }
      } else {
        winBox = win.getBox(this.ownerDocument);
        nodeBox = domGeometry.getMarginBox(node);
        h = (winBox.h - nodeBox.t - 10);
      }
      return h;
    },

    resizeDocument: function(documentPane) {
      var documentNode = documentPane.domNode;
      var h = this._getMaxCanvasHeight(documentNode);
      if(h > 10) {
        domStyle.set(documentNode, "maxHeight", (h - 10) + "px");
      }
    },

    resizeXmlPane: function(documentPane) {
      var xmlAreaNode = this.xmlPane.textAreaNode;
      var h = this._getMaxCanvasHeight(xmlAreaNode);
      if(!this.dialogBroker) {
        h = h - 10;
      }
      if(h > 10) {
        domStyle.set(xmlAreaNode, "height", (h - 10) + "px");
      }
    },

    resize: function() {
      if(this.dialogBroker) {
        var winBox = win.getBox(this.ownerDocument);
        var editorBox = domGeometry.getMarginBox(this.domNode);
        var nDialogContainerNodePadding = editorBox.l;

        var w = Math.round(winBox.w * 0.95) - 100;
        var h = (winBox.h - editorBox.t - nDialogContainerNodePadding - 50);
        domStyle.set(this.domNode, "width", w + "px");
        domStyle.set(this.domNode, "height", h + "px");
      }
      this.resizeDocument(this.editDocumentPane);
      this.resizeDocument(this.viewDocumentPane);
      this.resizeXmlPane();
    }

  });

  

  return oThisClass;
});