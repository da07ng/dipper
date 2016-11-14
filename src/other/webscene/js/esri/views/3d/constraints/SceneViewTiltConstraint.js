// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.0beta2/esri/copyright.txt for details.
//>>built
define(["../../../core/declare","../../../core/Accessor","../support/mathUtils"],function(a,b,c){a=a([b],{declaredClass:"esri.views.3d.constraints.SceneViewTiltConstraint",constructor:function(){this._max=0.5},max:0.5,mode:"auto",autoUpdate:function(a){"auto"===this.mode&&this._max!==a&&(this._max=a,this.notifyChange("max"))},_maxSetter:function(a){this.mode="manual";this._max=c.clamp(a,0.5,179.5)},_maxGetter:function(){return this._max},scale:function(a){}});a.MAX_DEFAULT=0.5;a.MIN_DEFAULT=179.5;
return a});