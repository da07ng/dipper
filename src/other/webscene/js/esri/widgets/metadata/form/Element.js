define(["../../../core/declare",
        "dojo/_base/lang",
        "dojo/_base/array",
        "dojo/dom-class",
        "dojo/dom-construct",
        "dojo/has",
        "../base/XNode",
        "dojo/text!./templates/Element.html",
        "../base/ElementHeader",
        "../base/MultiplicityHeader",
        "../base/etc/viewOnlyUtil",
        "./InputText",
        "../../../kernel"],
function(declare, lang, array, domClass, domConstruct, has, XNode, template,
         ElementHeader, MultiplicityHeader, viewOnlyUtil, InputText, esriKernel) {

  var oThisClass = declare([XNode], {

    _isGxeElement: true,
    elementHeader: null,
    multiplicityHeader: null,
    templateString: template,

    /* gxe/form/Element properties, configurable */
    label: null,
    target: null,
    minOccurs: 1,
    maxOccurs: 1, // can be "unbounded"
    matchTopNode: null,
    preferOpen: false,
    showHeader: true,
    trackMultiplicity: true,
    useTabs: true,

    postCreate: function() {
      this.inherited(arguments);
    },

    // TODO do multiplicityHeader &&  elementHeader get destroyed
    /*
     destroy: function() {
     console.warn("Element.destroy",this.gxePath);
     this.inherited(arguments);
     },
     */

    startup: function() {
      if(this._started) {
        return;
      }
      this.buildPath();
      if(this.gxeDocument) {
        this.gxeDocument.beforeInitializeElement(this);
      }
      this.initializeElement();
      if(this.gxeDocument) {
        this.gxeDocument.afterInitializeElement(this);
      }
      this.inherited(arguments);
    },

    connectInputWidget: function(considerDefault) {
      var isViewOnly = (this.gxeDocument && this.gxeDocument.isViewOnly);
      var nd, widget = this.findInputWidget();
      if(!widget && considerDefault) {
        if(this.getChildren().length === 0) {
          nd = domConstruct.create("div", {}, this.containerNode);
          widget = new InputText({}, nd);
        }
      }
      if(widget) {
        this.inputWidget = widget;
        widget.parentXNode = this;
        widget.connectXNode(this, isViewOnly);
      }
    },

    findAttributes: function() {
      var attributes = [];
      this._findAttributes(this, attributes);
      return attributes;
    },

    _findAttributes: function(widget, attributes) {
      var recurse = true;
      if(widget._isGxeElement) {
        recurse = (widget === this);
      } else if(widget._isGxeAttribute) {
        recurse = false;
        attributes.push(widget);
      }
      if(recurse) {
        array.forEach(widget.getChildren(), function(widget2) {
          this._findAttributes(widget2, attributes);
        }, this);
      }
    },

    initializeElement: function() {
      var hdr;
      this.getLabelString();
      var isViewOnly = (this.gxeDocument && this.gxeDocument.isViewOnly);
      var inputWidget = this.findInputWidget();
      if((this.maxOccurs !== "unbounded") && (this.maxOccurs <= 1)) {
        this.trackMultiplicity = false;
      } else if(inputWidget && inputWidget._supportsMultipleValues) {
        this.trackMultiplicity = false;
      }
      if(this.showHeader && this.trackMultiplicity) {
        this.multiplicityHeader = hdr = new MultiplicityHeader({
          label: this.getLabelString(),
          target: this.target,
          minOccurs: this.minOccurs,
          maxOccurs: this.maxOccurs,
          preferOpen: this.preferOpen,
          showHeader: this.showHeader,
          useTabs: this.useTabs
        });
        hdr.initialize(this);
        this.connectInputWidget(true);
        if(isViewOnly) {
          if(this.multiplicityHeader.tools) {
            this.multiplicityHeader.tools.domNode.style.display = "none";
          }
        }
      } else if(this.showHeader) {
        this.elementHeader = hdr = new ElementHeader();
        hdr.initialize(this);
        this.connectInputWidget(true);
      } else {
        this.connectInputWidget(true);
      }
    },

    toggleContent: function(bVisible) {
      if(this.hide) {
        return;
      }
      if(this.elementHeader && this.elementHeader.toggleContent) {
        this.elementHeader.toggleContent(bVisible);
      } else if(this.multiplicityHeader && this.multiplicityHeader.toggleContent) {
        this.multiplicityHeader.toggleContent(bVisible);
      }
    }

  });

  

  return oThisClass;
});