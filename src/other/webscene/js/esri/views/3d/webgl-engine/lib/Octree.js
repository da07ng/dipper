// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.0beta2/esri/copyright.txt for details.
//>>built
define(["./Util"],function(v){var w=v.assert;return function(p,k,l){function x(){return{leafObjects:[],fixedObjects:[],children:Array(8)}}function y(a,c,b){b.maxDepth=Math.max(c,b.maxDepth);var d=a.fixedObjects.length;b.fixedObjects+=d;10<d&&b.nodesWithMoreThan10FixedObjects++;30<d&&b.nodesWithMoreThan30FixedObjects++;100<d&&b.nodesWithMoreThan100FixedObjects++;if(a.leafObjects)b.leafNodes++,b.leafObjects+=a.leafObjects.length;else{b.innerNodes++;for(d=0;8>d;d++)a.children[d]&&y(a.children[d],c+1,
b)}}function z(a){function c(a){return a.getId()}var b={};a.leafObjects&&0<a.leafObjects.length&&(b.leafs=a.leafObjects.map(c));a.fixedObjects&&0<a.fixedObjects.length&&(b.fixed=a.fixedObjects.map(c));for(var d=0;8>d;d++)a.children[d]&&(b["child"+d]=z(a.children[d]));return b}function A(a,c,b){a!==e&&w(!B(a),"Octree validation failed (dangling empty node)");var d=[b[0]-c,b[1]-c,b[2]-c],g=[b[0]+c,b[1]+c,b[2]+c],f=a.fixedObjects.slice();a.leafObjects?f.push.apply(f,a.leafObjects):q(a,c,b,A,{});if(a!==
e)for(a=0;a<f.length;a++){c=f[a].getCenter();b=f[a].getBSRadiusApprox();for(var h=0;3>h;h++)w(c[h]-b>=d[h]&&c[h]+b<=g[h],"Octree validation failed (object outside node bounds)")}return!0}function C(a,c,b,d,g,f){if(0!==a.getBSRadiusApprox()&&b<=0.25*g)if(d.leafObjects){if(d.leafObjects.push(a),d.leafObjects.length>l.maxObjectsInNode&&0.5*g>J){a=Array(3);for(c=0;c<d.leafObjects.length;c++)a[0]=f[0],a[1]=f[1],a[2]=f[2],b=d.leafObjects[c],D(b,b.getCenter(),b.getBSRadiusApprox(),d,g,a);d.leafObjects=void 0}}else D(a,
c,b,d,g,f);else d.fixedObjects.push(a)}function D(a,c,b,d,g,f){var h=E(c,g,f);d.children[h]||(d.children[h]=x());C(a,c,b,d.children[h],0.5*g,f)}function u(a,c,b,d,g,f){if(0!==a.getBSRadiusApprox()&&b<=0.25*g){if(d.leafObjects)return F(d.leafObjects,a);var h=E(c,g,f);return d.children[h]&&u(a,c,b,d.children[h],0.5*g,f)?(B(d.children[h])&&delete d.children[h],!0):!1}return F(d.fixedObjects,a)}function F(a,c){var b=a.indexOf(c);if(0>b)return!1;a.splice(b,1);return!0}function G(a,c,b,d){if(a!==e)for(var g=
0;3>g;g++)if(d.bbLow[g]>b[g]+c||d.bbHigh[g]<b[g]-c)return!0;a.fixedObjects.forEach(d.callback);a.leafObjects?a.leafObjects.forEach(d.callback):q(a,c,b,G,d);return!0}function H(a,c,b,d){if(a!==e&&(r[0]=b[0]-c,r[1]=b[1]-c,r[2]=b[2]-c,s[0]=b[0]+c,s[1]=b[1]+c,s[2]=b[2]+c,!v.rayBoxTest(d.o,d.d,r,s)))return!0;a.fixedObjects.forEach(d.callback);a.leafObjects?a.leafObjects.forEach(d.callback):q(a,c,b,H,d);return!0}function I(a,c,b,d){d.callback(b,0.5*c,c,a.fixedObjects,a.leafObjects?a.leafObjects:[]);q(a,
c,b,I,d);return!0}function E(a,c,b){var d=0;c*=0.25;b[0]<a[0]?(d=1,b[0]+=c):b[0]-=c;b[1]<a[1]?(d|=2,b[1]+=c):b[1]-=c;b[2]<a[2]?(d|=4,b[2]+=c):b[2]-=c;return d}function q(a,c,b,d,g){c*=0.5;for(var f=0.5*c,h=Array(3),e=0;8>e;e++)if(a.children[e]&&(h[0]=b[0]+(e&1?f:-f),h[1]=b[1]+(e&2?f:-f),h[2]=b[2]+(e&4?f:-f),!d(a.children[e],c,h,g)))return!1;return!0}function B(a){if(a.leafObjects){if(0<a.leafObjects.length)return!1}else for(var c=0;8>c;c++)if(a.children[c])return!1;return 0===a.fixedObjects.length}
var J=1;p*=0.5;k=k||[0,0,0];l=l||{};l.maxObjectsInNode=l.maxObjectsInNode||10;l.minBSRadius=l.minBSRadius||1;var e=x();this._getRoot=function(){return e};var m=this.getRootSize=function(){return 2*p},t=[0,0,0],n=this.getRootCenter=function(){t[0]=k[0];t[1]=k[1];t[2]=k[2];return t};this.addObject=function(a){var c=a.getCenter(),b=a.getBSRadiusApprox(),d;if(d=0!==a.getBSRadiusApprox())d=1.5*p,d=c[0]+b>k[0]+d||c[0]-b<k[0]-d?!1:c[1]+b>k[1]+d||c[1]-b<k[1]-d?!1:!(c[2]+b>k[2]+d||c[2]-b<k[2]-d);d?C(a,c,b,
e,m(),n()):e.fixedObjects.push(a)};this.removeObject=function(a){var c=a.getCenter(),b=a.getBSRadiusApprox();return u(a,c,b,e,m(),n())};this.updateObject=function(a,c){return u(a,c.center,c.bsRadius,e,m(),n())?(this.addObject(a),!0):!1};this.forEachObjectInBB=function(a,c,b){G(e,m(),n(),{bbLow:a,bbHigh:c,callback:b})};this.forEachObjectAlongRay=function(a,c,b){H(e,m(),n(),{o:a,d:c,callback:b})};this.forEachNode=function(a){I(e,m(),n(),{callback:a})};this.computeStats=function(){var a={leafObjects:0,
fixedObjects:0,leafNodes:0,innerNodes:0,nodesWithMoreThan10FixedObjects:0,nodesWithMoreThan30FixedObjects:0,nodesWithMoreThan100FixedObjects:0,maxDepth:0};y(e,0,a);a.totalNumObjects=a.leafObjects+a.fixedObjects;a.totalNumNodes=a.leafNodes+a.innerNodes;a.estimatedMemUsage=200*a.totalNumNodes+4*a.totalNumObjects;return a};this.debugDump=function(){return z(e)};this.validate=function(){return A(e,m(),n())};var r=[0,0,0],s=[0,0,0]}});