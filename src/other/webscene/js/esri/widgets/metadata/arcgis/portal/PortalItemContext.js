define(["../../../../core/declare",
        "dojo/_base/lang",
        "dojo/has",
        "dijit/_WidgetBase",
        "../../../../kernel"],
function(declare, lang, has, _WidgetBase, esriKernel) {

  var oThisClass = declare([_WidgetBase], {

    allowEditMetadata: false,
    allowPullItem: true,
    allowPushToItem: false,
    autoPullItem: true,
    originalXml: null,
    portal: null,

    isForPortalItemPage: false,
    portalItem: null,
    restBaseUrl: null,
    token: null,

    postCreate: function() {
      this.inherited(arguments);
    },

    getAllowEditMetadata: function() {
      return this.allowEditMetadata;
    },

    getAllowDeleteMetadata: function() {
      return this.getAllowEditMetadata();
    },

    getAllowPullItem: function() {
      var item = this.getItem();
      if(!item) {
        return false;
      }
      return this.allowPullItem;
    },

    getAllowPushToItem: function() {
      return this.allowPushToItem;
    },

    getAutoPullItem: function() {
      return this.autoPullItem;
    },

    getItem: function() {
      // can't depend on globals defined in AGOL, pass portalItem into constructor
      //if (this.isForPortalItemPage && itemWidget && itemWidget.item) {
      //  return itemWidget.item;
      //}
      return this.portalItem;
    },

    getItemFolderId: function() {
      var item = this.getItem();
      if(!item) {
        return null;
      }
      if(typeof item.folderId === "undefined") {
        return null;
      }
      return item.folderId;
    },

    getItemId: function() {
      var item = this.getItem();
      if(!item) {
        return null;
      }
      if(typeof item.id === "undefined") {
        return null;
      }
      return item.id;
    },

    getItemOwner: function() {
      var item = this.getItem();
      if(!item) {
        return null;
      }
      if(typeof item.owner === "undefined") {
        return null;
      }
      return item.owner;
    },

    getOriginalXml: function() {
      return this.originalXml;
    },

    getPortal: function() {
      return this.portal;
    },

    getRestBaseUrl: function() {
      // can't depend on globals defined in AGOL, pass restBaseUrl into constructor
      //if (this.isForPortalItemPage && esriGeowConfig) {
      //  return esriGeowConfig.restBaseUrl;
      //}
      return this.restBaseUrl;
    },

    getToken: function() {
      // can't depend on globals defined in AGOL, pass token into constructor
      //var token;
      //if (this.isForPortalItemPage && itemWidget) {
      // token = itemWidget.token;
      // if ((typeof(token) !== "undefined") && (token !== null)) {
      //   if (token.indexOf("?") === 0) {
      //     token = token.substring(1);
      //   }
      //   if (token.indexOf("token=") === 0) {
      //     token = token.substring(6);
      //   }
      //   return token;
      // }
      //}
      return this.token;
    }

  });

  

  return oThisClass;
});