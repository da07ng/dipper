define(["../../../../../core/declare",
        "dojo/_base/lang",
        "dojo/has",
        "./IsoDocumentType",
        "./GmiRoot",
        "dojo/i18n!../../../nls/i18nIso",
        "../../../../../kernel"],
function(declare, lang, has, DocumentType, RootDescriptor, i18nIso, esriKernel) {

  var oThisClass = declare(DocumentType, {

    caption: i18nIso.documentTypes.gmi.caption,
    description: i18nIso.documentTypes.gmi.description,
    key: "iso-19115-2",
    isService: false,
    isGmi: true,
    metadataStandardName: "ISO 19115-2 Geographic Information - Metadata Part 2 Extensions for imagery and gridded data",
    metadataStandardVersion: "ISO 19115-2:2009(E)",

    initializeNamespaces: function() {
      this.addNamespace("gmi", "http://www.isotc211.org/2005/gmi");
      this.addNamespace("gmd", "http://www.isotc211.org/2005/gmd");
      this.addNamespace("gco", "http://www.isotc211.org/2005/gco");
      this.addNamespace("srv", "http://www.isotc211.org/2005/srv");
      this.addNamespace("gss", "http://www.isotc211.org/2005/gss");
      //this.addNamespace("gml","http://www.opengis.net/gml");
      this.addNamespace("gml", "http://www.opengis.net/gml/3.2");
      this.addNamespace("xlink", "http://www.w3.org/1999/xlink");
    },

    newRootDescriptor: function() {
      return new RootDescriptor();
    }

  });

  

  return oThisClass;
});