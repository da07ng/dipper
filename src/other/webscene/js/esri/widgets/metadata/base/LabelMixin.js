define(["../../../core/declare",
        "dojo/_base/lang",
        "dojo/dom-style",
        "dojo/has",
        "./MandatoryLabel",
        "./OptionalLabel",
        "../../../kernel"],
function(declare, lang, domStyle, has, MandatoryLabel, OptionalLabel, esriKernel) {

  var oThisClass = declare(null, {

    _contentIsOptional: false,
    _contentNode: null,
    _isOptionallyOff: false,
    labelWidget: null,

    constructor: function(args) {
      lang.mixin(this, args);
    },

    initializeLabel: function(sLabel, bOptional, bPreferOpen, labelNode, containerNode) {
      this._contentIsOptional = bOptional;
      this._contentNode = containerNode;
      this._isOptionallyOff = false;

      var checkedAttr = "";
      if(bOptional) {
        if(bPreferOpen) {
          checkedAttr = "checked=\"checked\"";
          this.toggleContent(true);
        } else {
          this.toggleContent(false);
        }
        this.labelWidget = new OptionalLabel({
          label: sLabel,
          checkedAttr: checkedAttr,
          onClick: lang.hitch(this, function(checked) {
            this.toggleContent(checked, true);
          })
        }, labelNode);
      } else {
        this.labelWidget = new MandatoryLabel({label: sLabel}, labelNode);
        this.toggleContent(true);
      }
    },

    toggleContent: function(bVisible, bInternal) {
      if(this.hide) {
        return;
      }
      if(!this._contentNode) {
        return;
      }
      if(bVisible) {
        domStyle.set(this._contentNode, "display", "block");
      } else {
        domStyle.set(this._contentNode, "display", "none");
      }
      if(this._contentIsOptional) {
        this._isOptionallyOff = !bVisible;
        if(!bInternal && this.labelWidget && this.labelWidget.checkBoxNode) {
          this.labelWidget.checkBoxNode.checked = bVisible;
        }
        this.whenOptionalContentToggled(!bVisible);
      }
    },

    whenOptionalContentToggled: function(isOptionallyOff) {
    }

  });

  

  return oThisClass;
});