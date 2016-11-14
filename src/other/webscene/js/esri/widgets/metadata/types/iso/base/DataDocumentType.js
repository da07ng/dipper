define(["../../../../../core/declare",
        "dojo/_base/lang",
        "dojo/has",
        "./IsoDocumentType",
        "./DataRoot",
        "dojo/i18n!../../../nls/i18nIso",
        "../../../../../kernel"],
function(declare, lang, has, DocumentType, RootDescriptor, i18nIso, esriKernel) {

  var oThisClass = declare(DocumentType, {

    caption: i18nIso.documentTypes.data.caption,
    description: i18nIso.documentTypes.data.description,
    key: "iso-19115",
    isService: false,
    metadataStandardName: "ISO 19139/19115 Metadata for Datasets",
    metadataStandardVersion: "2003",

    newRootDescriptor: function() {
      return new RootDescriptor();
    }

  });

  

  return oThisClass;
});