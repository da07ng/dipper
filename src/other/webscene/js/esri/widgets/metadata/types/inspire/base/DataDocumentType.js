define(["../../../../../core/declare",
        "dojo/_base/lang",
        "dojo/has",
        "./InspireDocumentType",
        "./DataRoot",
        "dojo/i18n!../../../nls/i18nInspire",
        "../../../../../kernel"],
function(declare, lang, has, DocumentType, RootDescriptor, i18nInspire, esriKernel) {

  var oThisClass = declare(DocumentType, {

    caption: i18nInspire.documentTypes.data.caption,
    description: i18nInspire.documentTypes.data.description,
    key: "inspire-iso-19115",
    isService: false,
    metadataStandardName: "INSPIRE Metadata Implementing Rules",
    metadataStandardVersion: "Technical Guidelines based on EN ISO 19115 and EN ISO 19119 (Version 1.2)",

    newRootDescriptor: function() {
      return new RootDescriptor();
    }

  });

  

  return oThisClass;
});