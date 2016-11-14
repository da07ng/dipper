// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.0beta2/esri/copyright.txt for details.
//>>built
define("dojo/_base/array ../core/declare dojo/_base/lang dojo/Deferred dojo/io-query ../request ../geometry/support/normalizeUtils ../layers/ArcGISDynamicLayer ../layers/support/MapImage ./Task ./support/DataFile ./support/Date ./support/FeatureSet ./support/GPMessage ./support/GPResultImageLayer ./support/JobInfo ./support/LinearUnit ./support/ParameterValue ./support/RasterData".split(" "),function(l,k,e,m,n,h,p,q,r,s,t,u,v,w,x,g,y,z,A){k=k(s,{declaredClass:"esri.tasks.Geoprocessor",constructor:function(){this._updateTimers=
[];this._handleExecuteResponse=this._handleExecuteResponse.bind(this);this._handleGetResultImageResponse=this._handleGetResultImageResponse.bind(this);this._handleGetResultDataResponse=this._handleGetResultDataResponse.bind(this)},updateDelay:1E3,processSpatialReference:null,outSpatialReference:null,__msigns:[{n:"execute",c:1,a:[{i:0,p:["*"]}],e:2},{n:"submitJob",c:1,a:[{i:0,p:["*"]}],e:3}],_gpEncode:function(a,c,b){for(var d in a){var f=a[d];e.isArray(f)?a[d]=JSON.stringify(l.map(f,function(a){return this._gpEncode({item:a},
!0).item},this)):f instanceof Date&&(a[d]=f.getTime())}return this._encode(a,c,b)},_decode:function(a){var c=a.dataType,b=z.fromJSON(a);if(-1!==l.indexOf(["GPBoolean","GPDouble","GPLong","GPString"],c))return b;if("GPLinearUnit"===c)b.value=y.fromJSON(b.value);else if("GPFeatureRecordSetLayer"===c||"GPRecordSet"===c)b.value=v.fromJSON(b.value);else if("GPDataFile"===c)b.value=t.fromJSON(b.value);else if("GPDate"===c)a=b.value,e.isString(a)?b.value=u.fromJSON({date:a}):b.value=Date.fromJSON(a);else if("GPRasterData"===
c||"GPRasterDataLayer"===c)a=a.value.mapImage,b.value=a?r.fromJSON(a):A.fromJSON(b.value);else if(-1!==c.indexOf("GPMultiValue:")){var d=c.split(":")[1];a=b.value;b.value=l.map(a,function(a){return this._decode({paramName:"_name",dataType:d,value:a}).value},this)}else console.log(this.declaredClass+" : GP Data type not handled. : "+b.dataType),b=null;return b},submitJob:function(a,c){var b=this.outSpatialReference,d=c.assembly,b=this._gpEncode(e.mixin({},this.parsedUrl.query,{f:"json","env:outSR":b?
b.wkid||JSON.stringify(b.toJSON()):null,"env:processSR":this.processSpatialReference?this.processSpatialReference.wkid||JSON.stringify(this.processSpatialReference.toJSON()):null},a),null,d&&d[0]),f=new m,g=this._jobUpdateHandler.bind(this);h({url:this.parsedUrl.path+"/submitJob",content:b,callbackParamName:"callback"}).then(function(a){g(a,f)}).then(null,function(a){f.reject(a)});return f.promise},_jobUpdateHandler:function(a,c){var b=a.jobId,d=g.fromJSON(a),f,e;clearTimeout(this._updateTimers[b]);
this._updateTimers[b]=null;c.progress(d);switch(a.jobStatus){case g.STATUS_SUBMITTED:case g.STATUS_EXECUTING:case g.STATUS_WAITING:case g.STATUS_NEW:f=this._getJobStatus.bind(this);e=this._jobUpdateHandler.bind(this);this._updateTimers[b]=setTimeout(function(){f(b).then(function(a){e(a,c)})},this.updateDelay);break;default:c.resolve(d)}},_getJobStatus:function(a){return h({url:this.parsedUrl.path+"/jobs/"+a,content:e.mixin({},this.parsedUrl.query,{f:"json"}),callbackParamName:"callback"})},getResultData:function(a,
c){return h({url:this.parsedUrl.path+"/jobs/"+a+"/results/"+c,content:e.mixin({},this.parsedUrl.query,{f:"json",returnType:"data"}),callbackParamName:"callback"}).then(this._handleGetResultDataResponse)},_handleGetResultDataResponse:function(a){return this._decode(a)},checkJobStatus:function(a){return h({url:this.parsedUrl.path+"/jobs/"+a,content:e.mixin({},this.parsedUrl.query,{f:"json"}),callbackParamName:"callback"}).then(this._handleCheckJobStatusResponse)},_handleCheckJobStatusResponse:function(a){return g.fromJSON(a)},
cancelJob:function(a){return h({url:this.parsedUrl.path+"/jobs/"+a+"/cancel",content:e.mixin({},this.parsedUrl.query,{f:"json"}),callbackParamName:"callback"})},execute:function(a,c){var b=this.outSpatialReference,d=c.assembly,b=this._gpEncode(e.mixin({},this.parsedUrl.query,{f:"json","env:outSR":b?b.wkid||JSON.stringify(b.toJSON()):null,"env:processSR":this.processSpatialReference?this.processSpatialReference.wkid||JSON.stringify(this.processSpatialReference.toJSON()):null},a),null,d&&d[0]);return h({url:this.parsedUrl.path+
"/execute",content:b,callbackParamName:"callback"}).then(this._handleExecuteResponse)},_handleExecuteResponse:function(a){var c=a.messages||[];return{results:(a.results||[]).map(function(a){return this._decode(a)}),messages:c.map(function(a){return w.fromJSON(a)})}},getResultImage:function(a,c,b){b=this._gpEncode(e.mixin({},this.parsedUrl.query,{f:"json"},b.toJSON()));return h({url:this.parsedUrl.path+"/jobs/"+a+"/results/"+c,content:b,callbackParamName:"callback"}).then(this._handleGetResultImageResponse)},
_handleGetResultImageResponse:function(a){return this._decode(a)},cancelJobStatusUpdates:function(a){clearTimeout(this._updateTimers[a]);this._updateTimers[a]=null},getResultImageLayer:function(a,c,b){if(null==c){var d=this.parsedUrl.path.indexOf("/GPServer/");a=this.parsedUrl.path.substring(0,d)+"/MapServer/jobs/"+a}else a=this.parsedUrl.path+"/jobs/"+a+"/results/"+c;this.parsedUrl.query&&(a+="?"+n.objectToQuery(this.parsedUrl.query));return null==c?new q(a,{imageParameters:b}):new x(a,{imageParameters:b})}});
p._createWrappers(k);return k});