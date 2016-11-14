define(["../../../core/declare",
        "dojo/_base/lang",
        "dojo/_base/array",
        "dojo/has",
        "dojo/Deferred",
        "dijit/_WidgetBase",
        "../../../kernel"],
function(declare, lang, array, has, Deferred, _WidgetBase, esriKernel) {

  var oThisClass = declare([_WidgetBase], {

    postCreate: function() {
      this.inherited(arguments);
    },

    afterEditDocumentLoad: function(gxeDocument, xmlDocument, asTemplate, wasFromOriginalXml) {
    },

    afterViewDocumentLoad: function(gxeDocument, wasFromOriginalXml) {
    },

    deleteMetadata: function() {
      var deferred = new Deferred();
      deferred.resolve();
      return deferred;
    },

    getAllowEditMetadata: function() {
      return false;
    },

    getAllowDeleteMetadata: function() {
      return false;
    },

    getAllowPullItem: function() {
      return false;
    },

    getAllowPushToItem: function() {
      return false;
    },

    getOriginalXml: function() {
      return null;
    },

    pullItem: function(gxeDocument) {
      var deferred = new Deferred();
      deferred.resolve();
      return deferred;
    },

    saveXml: function(gxeDocument, xmlString, bPushToItem) {
      var deferred = new Deferred();
      deferred.resolve();
      return deferred;
    }

  });

  

  return oThisClass;
});