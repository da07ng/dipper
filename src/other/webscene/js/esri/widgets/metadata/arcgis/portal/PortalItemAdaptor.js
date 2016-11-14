define(["../../../../core/declare",
        "dojo/_base/lang",
        "dojo/_base/array",
        "dojo/has",
        "dojo/Deferred",
        "../../context/GxeAdaptor",
        "../../../../kernel",
        "../../../../request"],
function(declare, lang, array, has, Deferred, GxeAdaptor, esriKernel, esriRequest) {

  var oThisClass = declare([GxeAdaptor], {

    itemRequiresRefresh: false,
    portalItemContext: null,

    postCreate: function() {
      this.inherited(arguments);
    },

    /* GxeAdaptor API ====================================================== */

    afterEditDocumentLoad: function(gxeDocument, xmlDocument, asTemplate, wasFromOriginalXml) {
      var transformer;
      var itemContext = this.getItemContext();
      var item = itemContext.getItem();
      if(!item) {
        return;
      }
      if(!itemContext.getAutoPullItem()) {
        return;
      }
      if(wasFromOriginalXml) {
        return;
      }
      if(!xmlDocument || (xmlDocument && asTemplate)) {
        try {
          transformer = gxeDocument.documentType.newPortalItemTransformer(gxeDocument);
          if(transformer) {
            transformer.pull(gxeDocument, item);
          }
        } catch(ex) {
          console.error(ex);
        }
      }
    },

    afterViewDocumentLoad: function(gxeDocument, wasFromOriginalXml) {
    },

    deleteMetadata: function() {
      var deferred;
      var itemContext = this.getItemContext();
      if(!itemContext.getAllowDeleteMetadata()) {
        deferred = new Deferred();
        deferred.reject("Metadata Adaptor: Delete metadata in not allowed.");
        return deferred;
      }
      return this.writeXml(null);
    },

    getAllowEditMetadata: function() {
      return this.getItemContext().getAllowEditMetadata();
    },

    getAllowDeleteMetadata: function() {
      return this.getItemContext().getAllowDeleteMetadata();
    },

    getAllowPullItem: function() {
      return this.getItemContext().getAllowPullItem();
    },

    getAllowPushToItem: function() {
      return this.getItemContext().getAllowPushToItem();
    },

    getOriginalXml: function() {
      return this.getItemContext().getOriginalXml();
    },

    pullItem: function(gxeDocument) {
      var deferred = new Deferred();
      var transformer;
      var itemContext = this.getItemContext();
      var item = itemContext.getItem();
      if(item && itemContext.getAllowPullItem()) {
        try {
          transformer = gxeDocument.documentType.newPortalItemTransformer(gxeDocument);
          if(transformer) {
            transformer.pull(gxeDocument, item);
          }
        } catch(ex) {
          console.error(ex);
        }
      }
      deferred.resolve();
      return deferred;
    },

    saveXml: function(gxeDocument, xmlString, bPushToItem) {
      var deferred = new Deferred();
      var itemContext = this.getItemContext();
      var item = itemContext.getItem();
      if(!itemContext.getAllowEditMetadata()) {
        deferred.reject("Metadata Adaptor: Write XML in not allowed.");
        return deferred;
      }

      var propsToUpdate = null, transformer;
      if(bPushToItem && itemContext.getAllowPushToItem() && item && window.FormData) {
        try {
          transformer = gxeDocument.documentType.newPortalItemTransformer(gxeDocument);
          if(transformer) {
            propsToUpdate = transformer.generatePush(gxeDocument, item);
          }
        } catch(ex) {
          propsToUpdate = null;
          console.error(ex);
        }
      }
      //console.warn("propsToUpdate",propsToUpdate);

      if(propsToUpdate === null) {
        return this.writeXml(xmlString);
      } else {
        this.writeXml(xmlString).then(
          lang.hitch(this, function() {
            this.updateItem(propsToUpdate).then(
              lang.hitch(this, function() {
                this.itemRequiresRefresh = true;
                deferred.resolve();
              }),
              lang.hitch(this, function(err2) {
                console.error(err2);
                deferred.resolve();
              })
            );
          }),
          lang.hitch(this, function(err) {
            deferred.reject(err);
          })
        );
      }
      return deferred;
    },

    /* ===================================================================== */

    getItemContext: function() {
      return this.portalItemContext;
    },

    makeMultiPartFormData: function(props) {
      if(!window.FormData) {
        return null;
      }
      var oData = new FormData();
      var sProp, oProp = null;
      for(sProp in props) {
        if(props.hasOwnProperty(sProp)) {
          oProp = props[sProp];
          if((sProp === "snippet") || (sProp === "description") || (sProp === "text")) {
            if(oProp == null) {
              oProp = "";
            }
          }
          oData.append(sProp, oProp);
        }
      }
      return oData;
    },

    readXml: function(handleAs) {
      var deferred = new Deferred();
      var itemContext = this.getItemContext();
      var restBaseUrl = itemContext.getRestBaseUrl();
      var token = itemContext.getToken();
      var itemId = itemContext.getItemId();

      if(restBaseUrl === null) {
        deferred.reject("Metadata Adaptor: Unable to read XML, no restBaseUrl");
        return deferred;
      }

      var url = restBaseUrl + "content/items/";
      url += encodeURIComponent(itemId);
      url += "/info/metadata/metadata.xml";

      var content = {};
      var options = {usePost: true};
      if(token !== null) {
        content.token = token;
      }
      var params = {
        url: url,
        content: content,
        handleAs: handleAs,
        preventCache: true
      };
      if(handleAs === "json") {
        params.callbackParamName = "callback";
      }
      var request = esriRequest(params, options);
      request.then(
        function(xml) {
          deferred.resolve(xml);
        },
        function(err) {
          deferred.resolve(null);
        }
      );
      return deferred;
    },

    updateItem: function(itemProperties) {
      var deferred;
      var itemContext = this.getItemContext();
      var restBaseUrl = itemContext.getRestBaseUrl();
      var token = itemContext.getToken();
      var itemId = itemContext.getItemId();
      var owner = itemContext.getItemOwner();
      var folderId = itemContext.getItemFolderId();

      itemProperties.f = "json";
      if(token !== null) {
        itemProperties.token = token;
      }
      var oFormData = this.makeMultiPartFormData(itemProperties);

      if(!itemContext.getAllowPushToItem()) {
        deferred = new Deferred();
        deferred.reject("Metadata Adaptor: Update portal item is not allowed.");
        return deferred;
      }
      if(oFormData === null) {
        deferred = new Deferred();
        deferred.reject("Metadata Adaptor: Unable to update portal item, FormData is not supported on this browser.");
        return deferred;
      }
      if(restBaseUrl === null) {
        deferred = new Deferred();
        deferred.reject("Metadata Adaptor: Unable to update portal item, no restBaseUrl");
        return deferred;
      }

      var url = restBaseUrl + "content/users/";
      url += encodeURIComponent(owner);
      if((typeof(folderId) !== "undefined") && (folderId !== null) && (folderId.length > 0)) {
        url += "/" + encodeURIComponent(folderId);
      }
      url += "/items/" + encodeURIComponent(itemId) + "/update";

      var options = {usePost: true};
      var params = {
        url: url,
        form: oFormData,
        handleAs: "json",
        callbackParamName: "callback",
        preventCache: true
      };
      return esriRequest(params, options);
    },

    writeXml: function(xmlString) {
      var deferred;
      var itemContext = this.getItemContext();
      var restBaseUrl = itemContext.getRestBaseUrl();
      var token = itemContext.getToken();
      var itemId = itemContext.getItemId();
      var owner = itemContext.getItemOwner();
      var folderId = itemContext.getItemFolderId();

      if(!itemContext.getAllowEditMetadata()) {
        deferred = new Deferred();
        deferred.reject("Metadata Adaptor: Write XML in not allowed.");
        return deferred;
      }
      if(restBaseUrl === null) {
        deferred = new Deferred();
        deferred.reject("Metadata Adaptor: Unable to write XML, no restBaseUrl");
        return deferred;
      }

      var url = restBaseUrl + "content/users/";
      url += encodeURIComponent(owner);
      if((typeof(folderId) !== "undefined") && (folderId !== null) && (folderId.length > 0)) {
        url += "/" + encodeURIComponent(folderId);
      }
      url += "/items/" + encodeURIComponent(itemId) + "/update";
      url += "/info/metadata/metadata.xml";

      var sBoundary = "387F8C2A-CFAB-443C-863B-B180E79B05F4";
      var aData = [];
      aData.push("--" + sBoundary, "Content-Disposition: form-data; name=\"f\"", "", "json");
      aData.push("--" + sBoundary, "Content-Disposition: form-data; name=\"overwrite\"", "", "true");
      if(token != null) {
        aData.push("--" + sBoundary, "Content-Disposition: form-data; name=\"token\"", "", token);
      }

      aData.push("--" + sBoundary,
        "Content-Disposition: form-data; name=\"metadata\"; filename=\"metadata.xml\"",
        "Content-Type: text/xml", "", xmlString);
      aData.push("--" + sBoundary + "--", "");
      var sData = aData.join("\r\n");

      var options = {usePost: true};
      var params = {
        url: url,
        handleAs: "json",
        callbackParamName: "callback",
        preventCache: true,
        headers: {"Content-Type": "multipart/form-data; boundary=" + sBoundary},
        postData: sData
      };
      return esriRequest(params, options);
    }

  });

  

  return oThisClass;
});