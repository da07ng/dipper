// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.0beta2/esri/copyright.txt for details.
//>>built
define(["../../core/declare","./StudyArea"],function(b,c){return b("esri.tasks.geoenrichment.AddressStudyArea",[c],{address:null,constructor:function(a){a&&a.address&&(this.address=a.address)},toJson:function(){var a=this.inherited(arguments);a.address=this.address;return a},getGeomType:function(){return"point"}})});