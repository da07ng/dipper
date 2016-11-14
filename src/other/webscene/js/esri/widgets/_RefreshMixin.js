// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.0beta2/esri/copyright.txt for details.
//>>built
define("../core/declare dojo/_base/lang dojo/_base/Deferred dojo/on dojo/has ../kernel".split(" "),function(b,c,g,d,h,k){function e(a){"object"!==typeof a&&(a=Error(a));a.grid=this;d.emit(this.domNode,"dgrid-error",{grid:this,error:a,cancelable:!0,bubbles:!0})&&console.error(a)}return b(null,{_trackError:function(a){var f;"string"===typeof a&&(a=c.hitch(this,a));try{f=a()}catch(b){e.call(this,b)}return g.when(f,c.hitch(this,function(){d.emit(this.domNode,"refresh",{cancelable:!0,bubbles:!0})}),c.hitch(this,
e))}})});