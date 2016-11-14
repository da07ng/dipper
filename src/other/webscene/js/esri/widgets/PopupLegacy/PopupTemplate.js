// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.0beta2/esri/copyright.txt for details.
//>>built
define("../../core/declare dojo/_base/lang dojo/has dojo/dom-construct ../../kernel ./InfoTemplate ./PopupInfo ./PopupRenderer".split(" "),function(c,d,k,e,l,f,g,h){return c([f,g],{declaredClass:"esri.widgets.PopupTemplate","-chains-":{constructor:"manual"},chartTheme:null,constructor:function(a,b){d.mixin(this,b);this.initialize(a,b)},getTitle:function(a){var b;this.info&&(b=this.titleHasRelatedFields?"":this._getPopupValues(a,!0).title);return b||""},getContent:function(a){return this.info?(new h({template:this,
graphic:a,chartTheme:this.chartTheme},e.create("div"))).domNode:""}})});