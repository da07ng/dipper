// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.0beta2/esri/copyright.txt for details.
//>>built
define(["./GeometryStudyArea","./AddressStudyArea","./StandardGeographyStudyArea"],function(b,c,d){return function(a){if(a.geometry)return new b(a);if(a.address)return new c(a);if(a.layer)return new d(a)}});