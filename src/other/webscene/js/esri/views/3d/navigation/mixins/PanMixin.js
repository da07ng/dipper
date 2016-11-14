// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.0beta2/esri/copyright.txt for details.
//>>built
define(["../../../../core/declare"],function(b){return b([],{declaredClass:"esri.views.3d.navigation.mixins.PanMixin",type:"pan",begin:function(a){this.navigation.begin(this);this.active=!0;this.emit("begin")},update:function(a){this.emit("update")},end:function(a){this.active=!1;this.emit("end");this.navigation.end(this)},beginContinuous:function(a){this.navigation.begin(this);this.active=!0;this.emit("begin")},updateContinuous:function(a){this.continuous&&this.continuous.active&&this.emit("update")},
endContinuous:function(a){this.active=!1;this.emit("end");this.navigation.end(this)}})});