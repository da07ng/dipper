// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.0beta2/esri/copyright.txt for details.
//>>built
define(["../lib/glMatrix"],function(n){var g=n.vec3d,h=n.mat4d,m=g.create(),l=h.create(),f={deg2rad:function(a){return a*Math.PI/180},rad2deg:function(a){return 180*a/Math.PI},asin:function(a){return Math.asin(1<a?1:-1>a?-1:a)},acos:function(a){return Math.acos(1<a?1:-1>a?-1:a)},fovx2fovy:function(a,b,c){return 2*Math.atan(c*Math.tan(0.5*a)/b)},fovy2fovx:function(a,b,c){return 2*Math.atan(b*Math.tan(0.5*a)/c)},lerp:function(a,b,c){return a+(b-a)*c},slerp:function(a,b,c,d){d||(d=a);var e=g.length(a),
k=g.length(b),f=g.dot(a,b)/e/k;0.999999999999>f&&(g.cross(a,b,m),h.identity(l),h.rotate(l,c*Math.acos(f),m),h.multiplyVec3(l,a,d));g.scale(d,((1-c)*e+c*k)/e)},slerpOrLerp:function(a,b,c,d,e){var k=g.length(a),f=g.length(b);g.cross(a,b,m);g.length(m)/k/f>e?(b=Math.acos(g.dot(a,b)/k/f),h.identity(l),h.rotate(l,c*b,m),h.multiplyVec3(l,a,d),g.scale(d,((1-c)*k+c*f)/k)):g.lerp(a,b,c,d)},clamp:function(a,b,c){return a<b?b:a>c?c:a},makePiecewiseLinearFunction:function(a){var b=a.length;return function(c){var d=
0;if(c<=a[0][0])return a[0][1];if(c>=a[b-1][0])return a[b-1][1];for(;c>a[d][0];)d++;var e=a[d][0];c=(e-c)/(e-a[d-1][0]);return c*a[d-1][1]+(1-c)*a[d][1]}},vectorEquals:function(a,b){if(null==a||null==b)return a!==b;if(a.length!==b.length)return!1;for(var c=0;c<a.length;c++)if(a[c]!==b[c])return!1;return!0},floatEqualRelative:function(a,b,c){void 0===c&&(c=1E-6);if(isNaN(a)||isNaN(b))return!1;if(a===b)return!0;var d=Math.abs(a-b),e=Math.abs(a),f=Math.abs(b);if(0===a||0===b||1E-12>e&&1E-12>f){if(d>
0.01*c)return!1}else if(d/(e+f)>c)return!1;return!0},floatEqualAbsolute:function(a,b,c){void 0===c&&(c=1E-6);return isNaN(a)||isNaN(b)?!1:(a>b?a-b:b-a)<=c},Cyclical:function(a,b){this.min=a;this.max=b;this.range=b-a;this.ndiff=function(a,d){d=d||0;return Math.ceil((a-d)/this.range)*this.range+d};this._normalize=function(a,d,b,f){f=f||0;b-=f;b<a?b+=this.ndiff(a-b):b>d&&(b-=this.ndiff(b-d));return b+f};this.normalize=function(a,b){return this._normalize(this.min,this.max,a,b)};this.clamp=function(c,
d){d=d||0;return f.clamp(c-d,a,b)+d};this.monotonic=function(a,b,e){return a<b?b:b+this.ndiff(a-b,e)};this.minimalMonotonic=function(a,b,e){return this._normalize(a,a+this.range,b,e)};this.center=function(a,b,e){b=this.monotonic(a,b,e);return this.normalize((a+b)/2,e)};this.diff=function(a,b,e){return this.monotonic(a,b,e)-a};this.contains=function(a,b,e){b=this.minimalMonotonic(a,b);e=this.minimalMonotonic(a,e);return e>a&&e<b}}};f.cyclical2PI=new f.Cyclical(0,2*Math.PI);f.cyclicalPI=new f.Cyclical(-Math.PI,
Math.PI);f.cyclicalDeg=new f.Cyclical(0,360);return f});