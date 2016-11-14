// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.0beta2/esri/copyright.txt for details.
//>>built
define(["dojo/sniff","./now"],function(b,f){var c=b("ff"),g=b("ie"),h=b("webkit"),k=b("opera"),d=Date.now(),a=window.requestAnimationFrame;a||(a=window[(h&&"webkit"||c&&"moz"||k&&"o"||g&&"ms")+"RequestAnimationFrame"])||(a=function(b){var a=Date.now(),e=Math.max(0,16-(a-d)),c=window.setTimeout(function(){b(f())},e);d=a+e;return c});return a});