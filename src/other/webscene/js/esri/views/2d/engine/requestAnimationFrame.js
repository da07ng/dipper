// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.0beta2/esri/copyright.txt for details.
//>>built
define(["dojo/sniff"],function(a){var c=a("ff"),f=a("ie"),g=a("webkit");a=a("opera");var d=(new Date).getTime(),b=window.requestAnimationFrame;b||(b=window[(g&&"webkit"||c&&"moz"||a&&"o"||f&&"ms")+"RequestAnimationFrame"])||(b=function(a){var b=(new Date).getTime(),e=Math.max(0,16-(b-d)),c=window.setTimeout(function(){a(now())},e);d=b+e;return c});return b});