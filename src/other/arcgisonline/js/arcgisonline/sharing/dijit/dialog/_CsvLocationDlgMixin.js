// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt for details.
//>>built
define("arcgisonline/sharing/dijit/dialog/_CsvLocationDlgMixin",["dijit","dojo","dojox"],function(c,a,b){a.provide("arcgisonline.sharing.dijit.dialog._CsvLocationDlgMixin");a.declare("arcgisonline.sharing.dijit.dialog._CsvLocationDlgMixin",null,{gridInfoAddr:[{width:"210px",field:"name",name:"fieldName"},{width:"205px",field:"locationType",name:"addressFields",select:"addressTypes",editable:"true",type:b.grid.cells.Select}],gridInfoLatLong:[{width:"210px",field:"name",name:"fieldName"},{width:"205px",
field:"locationType",name:"addressFields",select:"locationTypes",editable:"true",type:b.grid.cells.Select}]})});