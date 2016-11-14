// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.0beta2/esri/copyright.txt for details.
//>>built
define(["../core/declare","dojo/_base/lang","../request","./Task","./support/FindResult"],function(c,d,e,f,g){return c(f,{declaredClass:"esri.tasks.FindTask",gdbVersion:null,_parsedUrlGetter:function(a){var b=this.inherited(arguments);b.path+="/find";return b},execute:function(a){a=this._encode(d.mixin({},this.parsedUrl.query,{f:"json"},a.toJSON()));this.gdbVersion&&(a.gdbVersion=this.gdbVersion);return e({url:this.parsedUrl.path,content:a,callbackParamName:"callback"}).then(this._handleExecuteResponse)},
_handleExecuteResponse:function(a){return(a.results||[]).map(function(a){return g.fromJSON(a)})}})});