// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.0beta2/esri/copyright.txt for details.
//>>built
define(["esri/core/declare"],function(b){return b(null,{id:null,title:null,content:null,buttons:null,actionButton:null,backButton:!1,constructor:function(a){a=a||{};this.id=a.id;this.title=a.title;this.content=a.content;this.buttons=a.buttons||[];this.actionButton=a.actionButton;this.backButton=a.hasOwnProperty("backButton")&&a.backButton},addNavButton:function(a,b){this.buttons.push({title:a,targetPane:b});return this},addNavButtonTo:function(a){this.addNavButton(a.title,a)},onPaneSelected:function(){this.emit("layer-found-visible",
{clear:!0,hide:!0})}})});