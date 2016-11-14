define(["../../../core/declare",
        "dojo/_base/lang",
        "dojo/_base/array",
        "dojo/has",
        "./DocumentTypes",
        "./Logger",
        "../../../kernel"],
function (declare, lang, array, has, DocumentTypes, Logger, esriKernel) {

  var oThisClass = declare(null, {

    // allowed document type keys
    allowedTypeKeys: ["arcgis", "fgdc", "iso-19115", "iso-19119", "iso-19115-2",
      "inspire-iso-19115", "inspire-iso-19119", "gemini-iso-19115", "gemini-iso-19119"],

    // GeoExtent configuration
    arcgisGeocoder: null,
    basemap: "streets",
    showMapAttribution: false,
    showMapLogo: true,
    wrapAround180: false,

    // GEMET configuration
    gemetUrl: "http://www.eionet.europa.eu/gemet",
    gemetConceptThesaurus: "http://www.eionet.europa.eu/gemet/concept/",
    gemetInspireThemeThesaurus: "http://inspire.ec.europa.eu/theme/",

    documentTypes: null,
    logger: null,
    session: null,

    constructor: function(args) {
      lang.mixin(this, args);
      this.session = {};
      this.documentTypes = new DocumentTypes();
      this.logger = new Logger({debugEnabled: true});
    },

    filterDocumentTypes: function() {
      var list = [];
      array.forEach(this.documentTypes.list, function(docType) {
        array.some(this.allowedTypeKeys, function(key) {
          if(docType.key === key) {
            list.push(docType);
            return true;
          }
        });
      }, this);
      return list;
    },

    setAllowedTypeKeys: function(keys) {
      var aKeys = [], list = [];
      if((typeof keys === "undefined") || (keys === null)) {
        return;
      }
      if(typeof keys === "string") {
        aKeys = keys.split(",");
      } else if(keys.push) {
        aKeys = keys;
      }
      array.forEach(this.documentTypes.list, function(docType) {
        array.some(aKeys, function(key) {
          if(docType.key === lang.trim(key)) {
            list.push(docType.key);
            return true;
          }
        });
      });
      if(list.length > 0) {
        this.allowedTypeKeys = list;
      }
    }

  });

  

  return oThisClass;
});