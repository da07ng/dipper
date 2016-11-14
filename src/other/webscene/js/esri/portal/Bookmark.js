// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.0beta2/esri/copyright.txt for details.
//>>built
define(["../Viewpoint","../core/lang","../core/JSONSupport"],function(c,d,e){return e.createSubclass({declaredClass:"esri.arcgis.Bookmark",_viewpointReader:function(a,b){if(b.viewpoint)return c.fromJSON(b.viewpoint)},toJSON:function(){var a={title:this.title,description:this.description,thumbnailSource:this.thumbnailSource,viewpoint:this.viewpoint?this.viewpoint.toJSON():void 0};return d.fixJson(a)}})});