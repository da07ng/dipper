define(["../../../../../core/declare",
        "dojo/_base/lang",
        "dojo/has",
        "../../../base/DocumentType",
        "./Root",
        "./PortalItemTransformer",
        "dojo/i18n!../../../nls/i18nFgdc",
        "../../../../../kernel"],
function(declare, lang, has, DocumentType, RootDescriptor, PortalItemTransformer, i18nFgdc, esriKernel) {

  var oThisClass = declare(DocumentType, {

    caption: i18nFgdc.documentTypes.fgdc.caption,
    description: i18nFgdc.documentTypes.fgdc.description,
    key: "fgdc",
    metadataStandardName: "FGDC Content Standard for Digital Geospatial Metadata",
    metadataStandardVersion: "FGDC-STD-001-1998",

    beforeInitializeElement: function(gxeDocument, element) {
      var p = element.gxePath;

      if((p === "/metadata/idinfo/ptcontac/cntinfo")) {
        element.label = i18nFgdc.idinfo.ptcontac;
      } else if((p === "/metadata/dataqual/lineage/srcinfo/srccite/citeinfo")) {
        element.label = i18nFgdc.dataqual.srcinfo.srccite;
      } else if((p === "/metadata/dataqual/lineage/procstep/proccont/cntinfo")) {
        element.minOccurs = 1;
      } else if((p === "/metadata/distinfo/distrib/cntinfo")) {
        element.minOccurs = 1;
      } else if((p === "/metadata/metainfo/metc/cntinfo")) {
        element.minOccurs = 1;
      } else {
        this.inherited(arguments);
      }
    },

    newPortalItemTransformer: function(gxeDocument) {
      return new PortalItemTransformer();
    },

    newRootDescriptor: function() {
      return new RootDescriptor();
    }

  });

  

  return oThisClass;
});