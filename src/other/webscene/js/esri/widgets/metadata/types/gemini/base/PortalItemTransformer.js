define(["../../../../../core/declare",
        "dojo/_base/lang",
        "dojo/has",
        "../../inspire/base/PortalItemTransformer",
        "../../../../../kernel"],
function(declare, lang, has, PortalItemTransformer, esriKernel) {

  var oThisClass = declare([PortalItemTransformer], {

    postCreate: function() {
      this.inherited(arguments);
    },

    populateTransformationInfo: function(gxeDocument, portalItem, transformationInfo) {
      this.inherited(arguments);
      var ti = transformationInfo;

      var pfx = gxeDocument.rootElement.gxePath;
      ti.url.path = pfx + "/gmd:distributionInfo/gmd:MD_Distribution/gmd:transferOptions/gmd:MD_DigitalTransferOptions/gmd:onLine/gmd:CI_OnlineResource/gmd:linkage/gmd:URL";

    }

  });

  

  return oThisClass;
});