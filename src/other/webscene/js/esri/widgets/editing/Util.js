// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.0beta2/esri/copyright.txt for details.
//>>built
define(["dojo/_base/lang","dojo/_base/array","dojo/has","../../kernel"],function(e,c,g,h){e={};return e={findFeatures:function(d,a,b){var f=a.objectIdField;a=c.filter(a.graphics,function(a){return c.some(d,function(b){return a.attributes[f]===b.objectId})});if(b)b(a);else return a},getSelection:function(d){var a=[];c.forEach(d,function(b){b=b.getSelectedFeatures();c.forEach(b,function(b){a.push(b)})});return a}}});