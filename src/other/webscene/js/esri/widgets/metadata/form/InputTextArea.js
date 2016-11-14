define(["../../../core/declare",
        "dojo/_base/lang",
        "dojo/_base/array",
        "dojo/has",
        "../base/InputBase",
        "dojo/text!./templates/InputTextArea.html",
        "../../../kernel"],
function(declare, lang, array, has, InputBase, template, esriKernel) {

  var oThisClass = declare([InputBase], {

    templateString: template,

    /* gxe/form/InputTextArea properties, configurable */
    large: false,
    cols: 50,
    rows: 4,

    postCreate: function() {
      this.inherited(arguments);
    },

    postMixInProperties: function() {
      this.inherited(arguments);
      if(this.large) {
        this.cols = 60;
        this.rows = 8;
      }
    },

    connectXNode: function(parentXNode, isViewOnly) {
      this.inherited(arguments);
      var v = parentXNode.value;
      if(!isViewOnly || parentXNode.fixed) {
        if((typeof v !== "undefined") && (v !== null)) {
          this.setInputValue(v);
        }
      }
    },

    getDisplayValue: function() {
      var v = this.focusNode.value, a = [];
      if(v === null) {
        return null;
      }
      v = v.replace(/(\r\n|\r|\n|\n\r)/g, "<br/>");
      var tokens = v.split("<br/>");
      array.forEach(tokens, function(token) {
        var s = lang.trim(token);
        if(s.length > 0) {
          a.push(s);
        }
      });
      if(a.length === 1) {
        return a[0];
      } else if(a.length > 1) {
        return a;
      }
      return null;
    },

    getInputValue: function() {
      return this.focusNode.value;
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