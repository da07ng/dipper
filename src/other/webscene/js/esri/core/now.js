// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.0beta2/esri/copyright.txt for details.
//>>built
define([],function(){return function(){var b,a=window.performance||{},c=a.now||a.webkitNow||a.msNow||a.oNow||a.mozNow;if(void 0!==c)return function(){return c.call(a)};b=window.performance&&window.performance.timing&&window.performance.timing.navigationStart?window.performance.timing.navigationStart:Date.now();return function(){return Date.now()-b}}()});