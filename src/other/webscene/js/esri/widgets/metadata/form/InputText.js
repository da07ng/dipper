define(["../../../core/declare",
        "dojo/_base/lang",
        "dojo/has",
        "../base/InputBase",
        "dojo/text!./templates/InputText.html",
        "../../../kernel"],
function(declare, lang, has, InputBase, template, esriKernel) {

  var oThisClass = declare([InputBase], {

    templateString: template,

    /* gxe/form/InputText properties, configurable */
    size: 60,
    small: false,
    maxlength: 2048,
    useUniqueId: false,
    regenerateIfTemplate: false,

    postCreate: function() {
      this.inherited(arguments);
    },

    postMixInProperties: function() {
      this.inherited(arguments);
      if(this.small) {
        this.size = 30;
      }
    },

    connectXNode: function(parentXNode, isViewOnly) {
      this.inherited(arguments);
      var v = parentXNode.value;
      if(!isViewOnly && this.useUniqueId) {
        this.setInputValue(this._generateId());
      }
      if(!isViewOnly || parentXNode.fixed) {
        if((typeof v !== "undefined") && (v !== null)) {
          this.setInputValue(v);
        }
      }
    },

    _generateId: function() {
      var t = null;
      if(typeof Date.now === "function") {
        t = Date.now();
      } else {
        t = (new Date()).getTime();
      }
      var r = ("" + Math.random()).replace("0.", "r");
      return (t + "" + r).replace(/-/g, "");
    },

    getInputValue: function() {
      return this.focusNode.value;
    },

    importValue: function(info, value) {
      if(this.useUniqueId) {
        try {
          if(!(info.asTemplate && this.regenerateIfTemplate)) {
            if((value !== null) && (lang.trim(value).length > 0)) {
              this.setInputValue(value);
            }
          }
        } catch(ex) {
        }
      } else {
        this.setInputValue(value);
      }
    },

    _onChange: function(evt) {
      this.emitInteractionOccurred();
    },

    _onKeyup: function(evt) {
      this.emitInteractionOccurred();
    },

    setInputValue: function(value) {
      if(typeof value === "undefined") {
        value = null;
      }
      this.focusNode.value = value;
      this.emitInteractionOccurred();
      this.applyViewOnly();
    }

  });

  

  return oThisClass;
});