// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.0beta2/esri/copyright.txt for details.
//>>built
define(["../core/declare","dojo/Deferred","../core/Accessor","../core/Promise"],function(a,c,d,e){var b={RUNNING:"running",FINISHED:"finished",STOPPED:"stopped"};a=a([d,e],{declaredClass:"esri.views.ViewAnimation",classMetadata:{properties:{state:{}}},constructor:function(){this._dfd=new c;this.addResolvingPromise(this._dfd.promise)},initialize:function(){this.state=b.RUNNING},stop:function(){this.state=b.STOPPED;this._dfd.resolve()},finish:function(){this.state=b.FINISHED;this._dfd.resolve()},state:null,
target:null});a.State=b;return a});