// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.0beta2/esri/copyright.txt for details.
//>>built
define("../../../core/declare ../../../request ../../../config ../../../core/urlUtils ./PromiseLightweight ./AsyncQuotaRoundRobinQueue ../webgl-engine/lib/Util".split(" "),function(h,s,n,p,q,t,k){var m=k.assert,e={QUEUED:1,DOWNLOADING:2,CANCELLED:4};h=h(null,{constructor:function(a){this.alreadyLoading={};this.loadQueue=new t(r,this._doneLoadingCallback,this,a)},destroy:function(){for(var a in this.alreadyLoading){for(var c=this.alreadyLoading[a],b=0;b<c.clientPromises.length;b++){var d=c.clientPromises[b];
d.isRejected()||d.reject(c.url,null,c.docType,c.clientMetadata[b])}this._cancelTask(c)}this.loadQueue.clear();this.alreadyLoading=this.loadQueue=null},request:function(a,c,b,d,g){d=d||{};var l=new q.Promise;l.requestURL=a;var f=this.alreadyLoading[a];f?(f.clientPromises.push(l),f.clientMetadata.push(d.metadata)):(f={url:a,docType:c,clientType:b,status:e.QUEUED,clientMetadata:[d.metadata],clientPromises:[l],downloadObj:null,_cancelledInQueue:!1},g&&(f.urlWithToken=g(a)),this.alreadyLoading[a]=f,d.notQueueable?
r(f,this._doneLoadingCallback.bind(this)):this.loadQueue.push(f));return l},isRequested:function(a){return void 0!==this.alreadyLoading[a]},cancel:function(a){var c=this.alreadyLoading[a.requestURL];c&&this._removeRequestPromiseFromTask(c,a)},getRequestedURLs:function(a){var c={},b;for(b in this.alreadyLoading)this.alreadyLoading[b].clientType===a&&(c[b]=!0);return c},cancelBulk:function(a,c){var b;if(k.getFirstObjectValue(a)instanceof q.Promise)for(b in a)this.cancel(a[b]);else{var d=[];for(b in a){var e=
this.alreadyLoading[b];e&&(this._cancelTask(e),d.push(e))}0<d.length&&this.loadQueue.removeTasks(d,c)}},hasPendingDownloads:function(){return!k.objectEmpty(this.alreadyLoading)},_removeRequestPromiseFromTask:function(a,c){var b=a.clientPromises.length;if(1<b){var d=a.clientPromises.indexOf(c);m(-1<d,"request to be cancelled is already cancelled or invalid");a.clientPromises[d]=a.clientPromises[b-1];a.clientPromises.pop();a.clientMetadata[d]=a.clientMetadata[b-1];a.clientMetadata.pop()}else m(a.clientPromises[0]===
c,"request to be cancelled is already cancelled or invalid"),this._cancelTask(a)},_cancelTask:function(a){if(a.status===e.DOWNLOADING){this.loadQueue.workerCancelled(a);if("image"===a.docType){var c=a.downloadObj;c.removeAttribute("onload");c.removeAttribute("onerror");c.removeAttribute("src")}else a.status=e.CANCELLED,a.downloadObj.cancel();a.downloadObj=null}a.status=e.CANCELLED;a.clientPromise=void 0;a.metadata=void 0;delete this.alreadyLoading[a.url]},_doneLoadingCallback:function(a,c){var b;
m(a.status===e.DOWNLOADING);delete this.alreadyLoading[a.url];if(c)for(b=0;b<a.clientPromises.length;b++)a.clientPromises[b].isRejected()||a.clientPromises[b].reject(a.url,c,a.docType,a.clientMetadata[b]);else for(b=0;b<a.clientPromises.length;b++)a.clientPromises[b].done(a.url,a.result,a.docType,a.clientMetadata[b])}});var r=function(a,c){if(a.status===e.CANCELLED)return!1;var b=a.urlWithToken||a.url;0===b.indexOf("//")&&(b=window.location.protocol+b);if("image"===a.docType){var d=new Image;d.onload=
function(){a.status!==e.CANCELLED&&(a.result=d,d.removeAttribute("onload"),d.removeAttribute("onerror"),c(a))};d.onerror=function(){a.status!==e.CANCELLED&&(d.removeAttribute("onload"),d.removeAttribute("onerror"),c(a,{status:404}))};var g=p.hasSameOrigin(b,window.location.href);"data:"===b.substring(0,5)?d.src=b:g||p.canUseXhr(b)?(g||(d.crossOrigin="anonymous"),d.src=b):d.src=(a.urlWithToken||!n.request.proxyUrl?"":n.request.proxyUrl+"?")+b;a.downloadObj=d}else b=s({url:b,handleAs:"binary"===a.docType?
"arraybuffer":"json",failOk:!0}),b.then(function(b){a.duration=k.performance.now()-a.startTime;a.size=0;a.result=b;c(a)},function(b){a.status!==e.CANCELLED&&c(a,b)}),a.downloadObj=b;a.status=e.DOWNLOADING;return!0};h.TaskStatus=e;return h});