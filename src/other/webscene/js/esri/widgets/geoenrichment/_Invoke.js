// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.0beta2/esri/copyright.txt for details.
//>>built
define(["../../core/declare"],function(d){return d("esri.widgets.geoenrichment._Invoke",null,{_invokeTimeoutIDs:null,invoke:function(a,b){if(this._invokeTimeoutIDs){if(this._invokeTimeoutIDs[a]){if(void 0===b)return;clearTimeout(this._invokeTimeoutIDs[a])}}else this._invokeTimeoutIDs={};var c=this;this._invokeTimeoutIDs[a]=setTimeout(function(){c._invokeTimeoutIDs[a]=0;c[a]()},b||0)},pendingInvoke:function(a){return!this._invokeTimeoutIDs?!1:this._invokeTimeoutIDs[a]},cancelInvoke:function(a){if(this._invokeTimeoutIDs){var b=
this._invokeTimeoutIDs[a];b&&(clearTimeout(b),this._invokeTimeoutIDs[a]=0)}}})});