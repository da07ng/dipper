// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.0beta2/esri/copyright.txt for details.
//>>built
define(["../../core/lang","../../core/JSONSupport"],function(b,c){var a=c.createSubclass({declaredClass:"esri.layers.support.LOD",level:null,levelValue:null,resolution:null,scale:null,clone:function(){return new a({level:this.level,levelValue:this.levelValue,resolution:this.resolution,scale:this.scale})},toJSON:function(){return b.fixJson({level:this.level,levelValue:this.levelValue,resolution:this.resolution,scale:this.scale})}});return a});