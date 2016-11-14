define(["../../../../../core/declare", 
        "dojo/_base/lang",
        "dojo/has",
        "../../../form/Option",
        "dojo/text!./templates/ServiceCategoryOptions.html",
        "dojo/i18n!../../../nls/i18nInspire"],
function(declare, lang, has, Option, template, i18nInspire, esriKernel) {

  var oThisClass = declare(Option, {

    i18nInspire: i18nInspire,
    templateString: template

  });

  

  return oThisClass;
});