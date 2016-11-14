// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.0beta2/esri/copyright.txt for details.
//>>built
define(["../core/declare","dojo/_base/lang"],function(a,b){return a([],{declaredClass:"esri.arcgis.PortalComment",constructor:function(a){b.mixin(this,a);this.url=this.item.itemUrl+"/comments/"+this.id;this.created=this.created?new Date(this.created):null}})});