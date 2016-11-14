define(["../../../core/declare",
        "dojo/_base/lang",
        "dojo/_base/array",
        "dojo/has",
        "./InputTextArea",
        "dojo/i18n!../nls/i18nBase",
        "../../../kernel"],
function(declare, lang, array, has, InputTextArea, i18nBase, esriKernel) {

  var oThisClass = declare([InputTextArea], {

    _supportsMultipleValues: true,

    /* gxe/form/InputDelimitedTextArea common properties, configurable */
    delimiter: ",",
    hint: i18nBase.hints.delimitedTextArea,
    subTarget: null,

    postCreate: function() {
      this.inherited(arguments);
    },

    getDisplayValue: function() {
      var a = [], i, s = "", v = this.focusNode.value;
      this._mergeTokens(a, v);
      if(a.length > 0) {
        for(i = 0; i < a.length; i++) {
          if(s.length > 0) {
            s += this.delimiter;
          }
          s += a[i];
        }
      }
      if(s.length > 0) {
        return s;
      }
      return null;
    },

    getInputValue: function() {
      var a = [], v = this.focusNode.value;
      this._mergeTokens(a, v);
      if(a.length === 1) {
        return a[0];
      }
      else if(a.length > 1) {
        return a;
      }
      return null;
    },

    importValues: function(xmlDomNodes, values) {
      var i, aValues = [], sValues = "";
      for(i = 0; i < values.length; i++) {
        this._mergeTokens(aValues, values[i]);
      }
      for(i = 0; i < aValues.length; i++) {
        if(sValues.length > 0) {
          sValues += this.delimiter;
        }
        sValues += aValues[i];
      }
      this.setInputValue(sValues);
    },

    _mergeTokens: function(values, sValue) {
      var tokens;
      if(sValue != null) {
        sValue = sValue.replace(/(\r\n|\r|\n|\n\r)/g, this.delimiter);
        tokens = sValue.split(this.delimiter);
        array.forEach(tokens, function(token) {
          var s = lang.trim(token);
          if(s.length > 0) {
            values.push(s);
          }
        });
      }
    }

  });

  

  return oThisClass;
});