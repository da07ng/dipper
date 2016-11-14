define(["../../../../../core/declare",
        "dojo/_base/lang",
        "dojo/has",
        "./GeminiDocumentType",
        "./DataRoot",
        "dojo/i18n!../../../nls/i18nGemini",
        "../../../../../kernel"],
function(declare, lang, has, DocumentType, RootDescriptor, i18nGemini, esriKernel) {

  var oThisClass = declare(DocumentType, {

    caption: i18nGemini.documentTypes.data.caption,
    description: i18nGemini.documentTypes.data.description,
    key: "gemini-iso-19115",
    isService: false,
    metadataStandardName: "UK GEMINI",
    metadataStandardVersion: "2.2",

    newRootDescriptor: function() {
      return new RootDescriptor();
    }

  });

  

  return oThisClass;
});