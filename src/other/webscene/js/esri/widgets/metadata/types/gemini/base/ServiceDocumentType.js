define(["../../../../../core/declare",
        "dojo/_base/lang",
        "dojo/has",
        "./GeminiDocumentType",
        "./ServiceRoot",
        "dojo/i18n!../../../nls/i18nGemini",
        "../../../../../kernel"],
function(declare, lang, has, DocumentType, RootDescriptor, i18nGemini, esriKernel) {

  var oThisClass = declare(DocumentType, {

    caption: i18nGemini.documentTypes.service.caption,
    description: i18nGemini.documentTypes.service.description,
    key: "gemini-iso-19119",
    isService: true,
    metadataStandardName: "UK GEMINI",
    metadataStandardVersion: "2.2",

    newRootDescriptor: function() {
      return new RootDescriptor();
    }

  });

  

  return oThisClass;
});