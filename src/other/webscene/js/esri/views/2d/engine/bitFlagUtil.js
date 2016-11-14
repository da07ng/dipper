// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.0beta2/esri/copyright.txt for details.
//>>built
define([],function(){return{isSet:function(a,b){return b==(a&b)},set:function(a,b,c){if(c){if((a&b)===b)return a;a|=b}else{if(0===(a&b))return a;a&=~b}return a}}});