// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.0beta2/esri/copyright.txt for details.
//>>built
define([],function(){function d(a,b){return-1===a.indexOf(b)}function g(a,b,c){return!a.some(b.bind(null,c))}return{findIndex:function(a,b,c){for(var e=a.length,d,f=0;f<e;f++)if(d=a[f],b.call(c,d,f,a))return f;return-1},equals:function(a,b){if(!a&&!b)return!0;if(!a||!b||a.length!=b.length)return!1;for(var c=0;c<a.length;c++)if(a[c]!==b[c])return!1;return!0},difference:function(a,b,c){var e;c?(e=b.filter(g.bind(null,a,c)),a=a.filter(g.bind(null,b,c))):(e=b.filter(d.bind(null,a)),a=a.filter(d.bind(null,
b)));return{added:e,removed:a}}}});