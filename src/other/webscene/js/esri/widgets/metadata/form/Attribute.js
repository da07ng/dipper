define(["../../../core/declare",
        "dojo/_base/lang",
        "dojo/_base/array",
        "dojo/dom-class",
        "dojo/dom-construct",
        "dojo/has",
        "../base/XNode",
        "../base/LabelMixin",
        "dojo/text!./templates/Attribute.html",
        "./InputText"],
function(declare, lang, array, domClass, domConstruct, has, XNode, LabelMixin, template, InputText, esriKernel) {

  var oThisClass = declare([XNode, LabelMixin], {

    _isGxeAttribute: true,
    templateString: template,

    /* gxe/form/Attribute properties, configurable */
    label: null,
    target: null,
    fixed: false,
    minOccurs: 0, // 0 or 1
    maxOccurs: 1,
    preferOpen: false,
    showHeader: true,

    postCreate: function() {
      this.inherited(arguments);
    },

    startup: function() {
      if(this._started) return;
      this.buildPath();
      if(this.gxeDocument) {
        this.gxeDocument.beforeInitializeAttribute(this);
      }
      this.initializeAttribute();
      if(this.gxeDocument) {
        this.gxeDocument.afterInitializeAttribute(this);
      }
      this.inherited(arguments);
    },

    connectInputWidget: function(considerDefault) {
      var isViewOnly = (this.gxeDocument && this.gxeDocument.isViewOnly);
      var nd, widget = this.findInputWidget();
      if(!widget && considerDefault) {
        nd = domConstruct.create("div", {}, this.containerNode);
        widget = new InputText({}, nd);
      }
      if(widget) {
        this.inputWidget = widget;
        widget.parentXNode = this;
        widget.connectXNode(this, isViewOnly);
      }
    },

    initializeAttribute: function() {
      var sLabel = this.getLabelString();
      var bOptional = (this.minOccurs === 0);
      var bPreferOpen = this.preferOpen;
      var labelNode = this.labelNode;
      var containerNode = this.containerNode;

      if(this.showHeader) {
        this.initializeLabel(sLabel, bOptional, bPreferOpen, labelNode, containerNode);
      } else {
        this.preferOpen = true;
        this._contentIsOptional = bOptional,
          this._contentNode = containerNode;
        this.toggleContent(this.preferOpen);
        domClass.remove(this.domNode, "gxeIndent");
        if(this.headerNode) {
          domConstruct.destroy(this.headerNode);
          this.headerNode = null;
          this.labelNode = null;
        }
      }
      this.connectInputWidget(true);
    }

  });

  

  return oThisClass;
});