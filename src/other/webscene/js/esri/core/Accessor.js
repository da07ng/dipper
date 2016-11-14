// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.0beta2/esri/copyright.txt for details.
//>>built
define(["./declare","./accessorSupport/Properties"],function(e,f){var d=function(a,b,c){a=void 0!==(a&&a[b[c]])?a[b[c]]:void 0;return!a||c===b.length-1?a:d(a,b,++c)};return e(null,{declaredClass:"esri.core.Accessor","-chains-":{postIntrospection:"after",initialize:"after",destroy:"before"},constructor:function(a){this._accessorProps=new f(this);0<arguments.length&&this.normalizeCtorArgs&&(this._accessorProps.ctorArgs=this.normalizeCtorArgs.apply(this,Array.prototype.slice.call(arguments)))},postscript:function(a){var b=
this._accessorProps;a=b.ctorArgs||a;var c;(c=this.getDefaults?a?this.getDefaults(a):this.getDefaults({}):null)&&Object.getOwnPropertyNames(c).forEach(function(a){b.setDefault(a,c[a])},this);a&&(this.set(a),b.ctorArgs=null);b.initialize();this.initialize()},postIntrospection:function(){},initialize:function(){},destroy:function(){if(this._accessorProps)this._accessorProps.dispatch(),this._accessorProps.destroy(),this._accessorProps=null;else try{throw Error("instance is already destroyed");}catch(a){console.warn(a.stack)}},
get:function(a){return 0<a.indexOf(".")?d(this,a.split("."),0):this[a]},set:function(a,b){if(a&&"object"===typeof a)return a._accessorProps?a.keys().forEach(function(b){this.set(b,a[b])},this):Object.getOwnPropertyNames(a).forEach(function(b){this.set(b,a[b])},this),this;"_"!==a[0]&&(this[a]=b);return this},watch:function(a,b){return this._accessorProps.watch(a,b)},hasOwnProperty:function(a){var b=this._accessorProps;return b&&b.properties[a]?b.cache.has(a)||null!==b.defaults&&b.defaults.has(a):Object.prototype.hasOwnProperty.call(this,
a)},keys:function(){return this._accessorProps.cache.keys()},notifyChange:function(a){this._accessorProps.propertyWillChange(a)}})});