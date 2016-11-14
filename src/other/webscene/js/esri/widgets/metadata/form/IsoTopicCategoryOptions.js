define(["../../../core/declare",
        "dojo/_base/lang",
        "dojo/has",
        "./Option",
        "dojo/text!./templates/IsoTopicCategoryOptions.html",
        "dojo/i18n!../nls/i18nIso",
        "../../../kernel"],
function(declare, lang, has, Option, template, i18nIso, esriKernel) {

  var oThisClass = declare([Option], {

    i18nIso: i18nIso,
    templateString: template,

    postCreate: function() {
      this.inherited(arguments);
    }

  });

  

  return oThisClass;
});