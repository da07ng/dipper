define(["../../../core/declare",
        "dojo/_base/lang",
        "dojo/has",
        "./InputText",
        "dojo/i18n!../nls/i18nBase",
        "../../../kernel"],
function(declare, lang, has, InputText, i18nBase, esriKernel) {

  var oThisClass = declare([InputText], {

    _isGxeInputNumber: true,
    hint: i18nBase.hints.number,
    integerOnly: false,
    minValue: null,
    maxValue: null,
    minValueIsExclusive: false,
    maxValueIsExclusive: false,
    small: true,

    postCreate: function() {
      this.inherited(arguments);
    },

    postMixInProperties: function() {
      this.inherited(arguments);
      if(this.integerOnly && (this.hint === i18nBase.hints.number)) {
        this.hint = i18nBase.hints.integer;
      }
    }

  });

  

  return oThisClass;
});