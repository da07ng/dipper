// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.0beta2/esri/copyright.txt for details.
//>>built
define(["./Util","dojox/xml/parser"],function(a,k){var f=a.assert,b=a.VertexAttrConstants;return function(){for(var a in b)this[b[a]]=b[a];this._parse=function(a){a=k.parse(a).getElementsByTagName("snippet");for(var b=/\$[a-zA-Z0-9]+[ \t]*/,l=/[\$\s]+/g,c=0;c<a.length;c++){var g=a[c].getAttribute("name");f(void 0===this[g]);for(var d=a[c].textContent,e;null!==(e=d.match(b));){var h=this[e[0].replace(l,"")];f(void 0!==h);d=d.replace(e[0],h)}this[g]=d}}}});