// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.0beta2/esri/copyright.txt for details.
//>>built
define("../core/declare dojo/Deferred dojo/_base/lang ./Processor ../workers/WorkerClient ../layers/FeatureLayer".split(" "),function(p,l,q,r,m,s){return p([r],{declaredClass:"esri.processors.SpatialIndex",index:null,indexType:"rtree",workerCallback:["./scripts/helpers","./scripts/indexInterface","./indexWorker"],autostart:!1,constructor:function(a){a=a||{};var b=!1!==a.autostart;q.mixin(this,a);if(!this.fetchWithWorker){var c=this;this.workerClient=new m("./mutableWorker");this.workerCallback.push("./libs/"+
this.indexType);this.workerClient.importScripts(this.workerCallback).then(function(){c._attachedSystem=!0;b&&c.start()})}this._featCache={}},destroy:function(){this.workerClient&&this.workerClient.terminate()},addLayer:function(a,b){if(a.graphics&&a.graphics.length||b||a.isInstanceOf(s))if(this._attachedSystem)this.inherited(arguments,[a]);else{var c=this.workerClient,e=this;this.inherited(arguments,[a,!0]);c.importScripts("./libs/"+this.indexType).then(function(){e.runProcess(a.graphics,a.id);e._attachedSystem=
!0})}},unsetMap:function(){this.stop();this.workerClient.terminate();this.fetchWithWorker||(this.workerClient=new m(this.workerCallback));this.inherited(arguments);this.start()},removeLayer:function(a){this.inherited(arguments)},runProcess:function(a,b){if(a&&a.length){var c=this,e=this.workerClient,d=a[0]._graphicsLayer;!b&&0!==b&&(b=d?d.id:"rawFeatures_"+Object.keys(this._featCache).length);this._featCache[b]||(this._featCache[b]={});for(var f,g,h=[],k=a.length,n=d&&d.objectIdField;k--;)if(g=a[k],
f=g.attributes&&n?g.attributes[n]:g.id,null==f||!this._featCache[b][f])this._featCache[b][f]=1,g.declaredClass?h.push({id:f,geometry:g.geometry.toJSON(!0),attributes:g.attributes}):h.push(g);e.postMessage({insert:h,system:this.indexType,options:this.indexOptions,idField:d&&d.objectIdField,layerId:b}).then(function(a){d&&d.emit("process-end",{processor:c,results:{insert:a.insert}})});d&&d.emit("process-start",{processor:this})}},_sendFeaturesFromLayer:function(a,b){var c=b.graphic,e=this.workerClient,
d=this,f=c.attributes[a.objectIdField];this._featCache[a.id]||(this._featCache[a.id]={});this._featCache[a.id][f]||(this._featCache[a.id][f]=1,e.postMessage({insert:[{attributes:c.attributes,geometry:c.geometry.toJSON(!0)}],system:this.indexType,options:this.indexOptions,idField:a.objectIdField,layerId:a.id}).then(function(b){a.emit("process-end",{processor:d,results:{insert:b.insert}})}),a.emit("process-start",{processor:d}))},_notifyProcessStart:function(a,b){},_sendFeaturesFromTask:function(a,
b){var c=b.featureSet.features,e=[],d=this.workerClient,f=this,g=c.length,h,k;for(this._featCache[a.id]||(this._featCache[a.id]={});g--;)k=c[g],h=k.attributes[a.objectIdField],this._featCache[a.id][h]||(this._featCache[a.id][h]=1,e.push(k));d.postMessage({insert:e,system:this.indexType,options:this.indexOptions,idField:a.objectIdField,layerId:a.id}).then(function(b){a.emit("process-end",{processor:f,results:{insert:b.insert}})});a.emit("process-start",{processor:f})},get:function(){},intersects:function(a,
b,c,e){return"rtree"!=this.indexType?(console.error("Index.intersects only works with rtree indexes"),a=new l,a.reject({message:"Index.intersects only works with rtree indexes"}),a.promise):this.workerClient.postMessage({search:a,layerId:b,returnNode:c,onlyIds:e})},within:function(a,b,c){if("rtree"!=this.indexType)return console.error("Index.within only works with rtree indexes"),a=new l,a.reject({message:"Index.within only works with rtree indexes"}),a.promise},nearest:function(a){return"kdtree"!=
this.indexType?(console.error("Index.nearest only works with kdtree indexes"),a=new l,a.reject({message:"Index.nearest only works with kdtree indexes"}),a.promise):this.workerClient.postMessage({search:a})}})});