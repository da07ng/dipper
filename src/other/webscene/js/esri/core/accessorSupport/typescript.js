// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.0beta2/esri/copyright.txt for details.
//>>built
define(["../declare","../typescript","../JSONSupport","dojo/_base/lang"],function(k,g,l,m){function h(c,b){if(!c)return b;if(!b)return c;for(var a in b){var d=c[a],e=b[a];Array.isArray(e)&&Array.isArray(d)?c[a]=d.concat(e):c[a]="object"===typeof e&&"object"===typeof d?h(d,e):e}return c}return{subclass:function(c,b){return function(a){a=g.declareDefinition(a,c);b&&(a.instanceMembers.classMetadata=h(b,a.instanceMembers.classMetadata));var d=a.instanceMembers.classMetadata;if(d&&d.properties)for(var e in d.properties){var f=
d.properties[e];f&&(!f.reader&&f.type&&-1!==f.type._meta.bases.indexOf(l))&&(f.reader=function(a){return function(b){return a.fromJSON(b)}}(f.type))}return m.mixin(k(a.bases,a.instanceMembers),a.classMembers)}},shared:g.shared,property:function(c){return function(b,a){b.classMetadata=b.classMetadata||{};b.classMetadata.properties=b.classMetadata.properties||{};b.classMetadata.properties[a]=c||{}}}}});