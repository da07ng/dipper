define(["../../../core/declare",
        "dojo/_base/lang",
        "dojo/has",
        "dojo/i18n!../nls/i18nFgdc",
        "dojo/i18n!../nls/i18nIso",
        "dojo/i18n!../nls/i18nInspire",
        "dojo/i18n!../nls/i18nGemini",
        "../../../kernel"],
function(declare, lang, has, i18nFgdc, i18nIso, i18nInspire, i18nGemini, esriKernel) {

  var oThisClass = declare(null, {

    i18nFgdc: i18nFgdc,
    i18nIso: i18nIso,
    i18nInspire: i18nInspire,
    i18nGemini: i18nGemini,

    codeListPrefix: "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#",
    inspireCodeListPrefix: "http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/Codelist/ML_gmxCodelists.xml#",

    constructor: function(args) {
      lang.mixin(this, args);
    }

  });

  

  return oThisClass;
});