// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.0beta2/esri/copyright.txt for details.
//>>built
define(["dojo/on","dojo/query","dijit/Tooltip"],function(b,e,c){var a=null;return function(d){b(d,".TrimWithEllipses:mouseover",function(){this!==a&&this.offsetWidth<this.scrollWidth&&(a=this,c.show(a.textContent,a,["above","below"]),b.once(a,"mouseleave, mousedown, touchstart",function(){c.hide(a);a=null}))})}});