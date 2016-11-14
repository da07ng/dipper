// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.0beta2/esri/copyright.txt for details.
//>>built
define(["../core/lang","dojo/_base/Deferred","dojo/_base/kernel","dojo/_base/lang"],function(h,e,f,g){var d=function(a){function b(c){a[c]||(a[c]=function(){var b=arguments;return e.when(a,function(a){Array.prototype.unshift.call(b,a.features||a);return d(f[c].apply(f,b))})})}if(!a)return a;a.then&&(a=g.delegate(a));a.total||(a.total=e.when(a,function(a){return h.isDefined(a.total)?a.total:a.length||0}));b("forEach");b("filter");b("map");b("some");b("every");return a};g.setObject("dijit.FeatureLayerQueryResult",
d);return d});