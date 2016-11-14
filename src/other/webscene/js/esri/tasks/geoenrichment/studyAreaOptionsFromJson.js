// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.0beta2/esri/copyright.txt for details.
//>>built
define(["./RingBuffer","./DriveBuffer","./IntersectingGeographies"],function(b,c,d){return function(a){if(a){switch(a.areaType){case "DriveTimeBuffer":return new c(a);case "StandardGeography":return new d(a)}switch(a.type){case "DriveTime":return new c(a);case "StdGeo":return new d(a)}return new b(a)}return new b}});