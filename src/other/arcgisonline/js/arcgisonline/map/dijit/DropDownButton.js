// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt for details.
//>>built
define("arcgisonline/map/dijit/DropDownButton",["dijit","dojo","dojox"],function(b,a,c){a.provide("arcgisonline.map.dijit.DropDownButton");a.declare("arcgisonline.map.dijit.DropDownButton",[b.form.DropDownButton],{iconClass:"popupButton popupAddFieldIcon","class":"popupDropDownButton",postMixInProperties:function(){this.inherited(arguments);this.i18n=a.i18n.getLocalization("arcgisonline","arcgisonline").common;a.mixin(this.i18n,a.i18n.getLocalization("arcgisonline","arcgisonline").popupBuilder);this.label=
this.i18n.add+" "+this.i18n.fieldName}})});