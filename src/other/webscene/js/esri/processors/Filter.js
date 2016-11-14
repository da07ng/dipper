// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.0beta2/esri/copyright.txt for details.
//>>built
define(["../core/declare","esri/core/Accessor","esri/core/Collection"],function(b,d,c){return b([d],{declaredClass:"esri.processors.Filter",_changeHandler:null,input:null,_inputSetter:function(a,b){Array.isArray(a)&&(a=new c(a));this._changeHandler&&(this._changeHandler.remove(),this._changeHandler=null);if(a&&a.isInstanceOf(c))this._changeHandler=a.on("change",this.run.bind(this));else return a?b:null},output:null,run:function(a){this.output&&(a.added.length&&this.output.addItems(a.added),a.removed.length&&
this.output.removeItems(a.removed))}})});