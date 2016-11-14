define(["../../../core/declare",
        "dojo/_base/lang",
        "dojo/_base/array",
        "dojo/has",
        "dijit/_WidgetBase",
        "../../../kernel"],
function(declare, lang, array, has, _WidgetBase, esriKernel) {

  var oThisClass = declare([_WidgetBase], {

    caption: null,
    description: null,
    key: null,
    metadataStandardName: null,
    metadataStandardVersion: null,
    namespaces: null,

    postCreate: function() {
      this.inherited(arguments);
      this.namespaces = [];
      this.initialize();
      this.initializeNamespaces();
    },

    addNamespace: function(prefix, uri) {
      this.namespaces.push({prefix: prefix, uri: uri});
    },

    afterInitializeAttribute: function(gxeDocument, attribute) {
    },

    afterInitializeElement: function(gxeDocument, element) {
    },

    afterTransform: function(gxeDocument, originalGxeDocument) {
    },

    beforeInitializeAttribute: function(gxeDocument, attribute) {
    },

    beforeInitializeElement: function(gxeDocument, element) {
    },

    getCaption: function() {
      return null; //i18nExample.documentTypeCaption;
    },

    getKey: function() {
      return this.key;
    },

    getNamespaces: function() {
      return this.namespaces;
    },

    initialize: function() {
    },

    initializeNamespaces: function() {
    },

    newPortalItemTransformer: function(gxeDocument) {
      return null;
    },

    newRootDescriptor: function() {
      return null;
    }

  });

  

  return oThisClass;
});