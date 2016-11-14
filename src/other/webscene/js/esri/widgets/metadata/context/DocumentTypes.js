define(["../../../core/declare",
        "dojo/_base/lang",
        "dojo/_base/array",
        "dojo/has",
        "dijit/_WidgetBase",
        "../types/fgdc/base/DocumentType",
        "../types/iso/base/DataDocumentType",
        "../types/iso/base/ServiceDocumentType",
        "../types/iso/base/GmiDocumentType",
        "../types/inspire/base/DataDocumentType",
        "../types/inspire/base/ServiceDocumentType",
        "../types/gemini/base/DataDocumentType",
        "../types/gemini/base/ServiceDocumentType",
        "../../../kernel"],
function(declare, lang, array, has, _WidgetBase,
     Fgdc, IsoData, IsoService, IsoDash2, 
     InspireData, InspireService, GeminiData, GeminiService, esriKernel) {

  var oThisClass = declare([_WidgetBase], {

    index: null,
    list: null,

    postCreate: function() {
      this.inherited(arguments);
      this._initializeTypes();
    },

    _initializeTypes: function() {
      var list = this.list = [];
      var index = this.index = {};

      var add = function(type) {
        index[type.key] = type;
        list.push(type);
      };

      add(new Fgdc({
        interrogationRules: [
          {
            path: "/metadata/idinfo/citation/citeinfo/title",
            must: true
          }
        ]
      }));

      add(new IsoData({
        interrogationRules: [
          {
            path: "/gmd:MD_Metadata/gmd:identificationInfo/gmd:MD_DataIdentification",
            must: true
          }
        ]
      }));

      add(new IsoService({
        interrogationRules: [
          {
            path: "/gmd:MD_Metadata/gmd:identificationInfo/srv:SV_ServiceIdentification",
            must: true
          }
        ]
      }));

      add(new IsoDash2({
        interrogationRules: [
          {
            path: "/gmi:MD_Metadata",
            must: true
          }
        ]
      }));

      add(new InspireData({
        interrogationRules: [
          {
            path: "/gmd:MD_Metadata/gmd:identificationInfo/gmd:MD_DataIdentification",
            must: true
          },
          {
            path: "/gmd:MD_Metadata/gmd:metadataStandardName/gco:CharacterString",
            value: "INSPIRE Metadata Implementing Rules"
          },
          {
            path: "/gmd:MD_Metadata/gmd:metadataStandardVersion/gco:CharacterString",
            value: "Technical Guidelines based on EN ISO 19115 and EN ISO 19119 (Version 1.2)"
          }
        ]
      }));


      add(new InspireService({
        interrogationRules: [
          {
            path: "/gmd:MD_Metadata/gmd:identificationInfo/srv:SV_ServiceIdentification",
            must: true
          },
          {
            path: "/gmd:MD_Metadata/gmd:metadataStandardName/gco:CharacterString",
            value: "INSPIRE Metadata Implementing Rules"
          },
          {
            path: "/gmd:MD_Metadata/gmd:metadataStandardVersion/gco:CharacterString",
            value: "Technical Guidelines based on EN ISO 19115 and EN ISO 19119 (Version 1.2)"
          }
        ]
      }));


      add(new GeminiData({
        interrogationRules: [
          {
            path: "/gmd:MD_Metadata/gmd:identificationInfo/gmd:MD_DataIdentification",
            must: true
          },
          {
            path: "/gmd:MD_Metadata/gmd:metadataStandardName/gco:CharacterString",
            value: "UK GEMINI"
          },
          {
            path: "/gmd:MD_Metadata/gmd:metadataStandardVersion/gco:CharacterString",
            value: "2.2"
          }
        ]
      }));

      add(new GeminiService({
        interrogationRules: [
          {
            path: "/gmd:MD_Metadata/gmd:identificationInfo/srv:SV_ServiceIdentification",
            must: true
          },
          {
            path: "/gmd:MD_Metadata/gmd:metadataStandardName/gco:CharacterString",
            value: "UK GEMINI"
          },
          {
            path: "/gmd:MD_Metadata/gmd:metadataStandardVersion/gco:CharacterString",
            value: "2.2"
          }
        ]
      }));

    }

  });

  

  return oThisClass;
});