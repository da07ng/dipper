define(["../../../../../core/declare",
        "dojo/_base/lang",
        "dojo/has",
        "./InspireDocumentType",
        "./ServiceRoot",
        "dojo/i18n!../../../nls/i18nInspire"],
function(declare, lang, has, DocumentType, RootDescriptor, i18nInspire, esriKernel) {

  var oThisClass = declare(DocumentType, {

    caption: i18nInspire.documentTypes.service.caption,
    description: i18nInspire.documentTypes.service.description,
    key: "inspire-iso-19119",
    isService: true,
    metadataStandardName: "INSPIRE Metadata Implementing Rules",
    metadataStandardVersion: "Technical Guidelines based on EN ISO 19115 and EN ISO 19119 (Version 1.2)",

    newRootDescriptor: function() {
      return new RootDescriptor();
    }

  });

  

  return oThisClass;
});