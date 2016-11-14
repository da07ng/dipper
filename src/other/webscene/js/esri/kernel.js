// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.0beta2/esri/copyright.txt for details.
//>>built
define(["dojo/_base/url"],function(a){a=new a(window.location);var b=a.path;a={version:"4.0beta2",_appBaseUrl:a.scheme+"://"+a.host+(null!=a.port?":"+a.port:"")+b.substring(0,b.lastIndexOf(b.split("/")[b.split("/").length-1])),appUrl:a};(a.dijit=a.dijit||{})._arcgisUrl=("file:"===location.protocol?"http:":location.protocol)+"//www.arcgis.com/sharing/rest";return a});