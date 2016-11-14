// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.0beta2/esri/copyright.txt for details.
//>>built
define(["dojo/_base/declare","./accessorSupport/introspect"],function(e,h){var d=[],g=function(a,c){for(var f=a._meta.bases,b=f.length-1;0<b;b--)if(f[b].prototype.declaredClass===c)return!0;return!1},k=function(a,c){Array.isArray(a)||"function"==typeof a||(c=a,a=void 0);c=c||{};a=a||[];return b([this].concat(a),c)},b=function(a,c,b){a=e(a,c,b);a.createSubclass=k;if(g(a,"esri.core.Accessor")){h(a);c=0;for(b=d.length;c<b;c++)d[c](a)}return a};b.hasMixin=g;b.after=function(a){d.push(a)};b.safeMixin=
e.safeMixin;return b});