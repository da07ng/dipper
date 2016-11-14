define(["../../../../core/declare",
        "dojo/_base/lang",
        "dojo/has",
        "./Transformer",
        "../../../../kernel"],
function(declare, lang, has, Transformer, kernel, esriKernel) {

  var oThisClass = declare([Transformer], {

    postCreate: function() {
      this.inherited(arguments);
    },

    checkTarget: function(xNode, target) {
      var endsWith = function(sv, sfx) {
        return (sv.indexOf(sfx, (sv.length - sfx.length)) !== -1);
      };

      var path = xNode.gxePath;
      if(target === "gmd:MD_Metadata") {
        if(this.toDocumentType.isGmi) {
          return "gmi:MI_Metadata";
        }
      } else if(target === "gmi:MI_Metadata") {
        if(!this.toDocumentType.isGmi) {
          return "gmd:MD_Metadata";
        }
      } else if(this.toDocumentType.isService) {
        if(target === "gmd:MD_DataIdentification") {
          return "srv:SV_ServiceIdentification";
        } else if(endsWith(path, "gmd:MD_DataIdentification/gmd:extent")) {
          return "srv:extent";
        }
      } else {
        if(target === "srv:SV_ServiceIdentification") {
          return "gmd:MD_DataIdentification";
        } else if(endsWith(path, "srv:SV_ServiceIdentification/srv:extent")) {
          return "gmd:extent";
        }
      }
      return target;
    }

  });

  

  return oThisClass;
});