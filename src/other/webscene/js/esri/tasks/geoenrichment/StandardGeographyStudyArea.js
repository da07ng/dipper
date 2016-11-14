// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.0beta2/esri/copyright.txt for details.
//>>built
define(["../../core/declare","./StudyArea"],function(c,d){return c("esri.tasks.geoenrichment.StandardGeographyStudyArea",[d],{countryID:null,geographyLayerID:null,ids:null,constructor:function(a){if(a){var b=a.sourceCountry||a.countryID;b&&(this.countryID=b);if(b=a.layer||a.geographyLayerID)this.geographyLayerID=b;a.ids&&(this.ids=a.ids)}},toJson:function(){var a=this.inherited(arguments);this.countryID&&(a.sourceCountry=this.countryID);this.geographyLayerID&&(a.layer=this.geographyLayerID);this.ids&&
(a.ids=this.ids);return a},getGeomType:function(){return"polygon"}})});