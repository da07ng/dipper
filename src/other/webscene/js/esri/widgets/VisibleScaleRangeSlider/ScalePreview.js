// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.0beta2/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/widgets/VisibleScaleRangeSlider/templates/ScalePreview.html":'\x3cdiv\x3e\r\n  \x3cdiv class\x3d"${css.header}"\x3e${labels.preview}\x3c/div\x3e\r\n  \x3cdiv data-dojo-attach-point\x3d"dap_scalePreviewThumbnail" class\x3d"${css.thumbnail}"\x3e\x3c/div\x3e\r\n\x3c/div\x3e\r\n'}});
define("dijit/_TemplatedMixin dijit/_WidgetBase ../../core/declare dojo/dom-style dojo/i18n!../../nls/jsapi dojo/text!./templates/ScalePreview.html".split(" "),function(c,d,e,b,f,g){return e([d,c],{declaredClass:"esri.widgets.VisibleScaleRangeSlider.ScalePreview",baseClass:"esriScalePreview",templateString:g,labels:f.widgets.visibleScaleRangeSlider,css:{header:"esriHeader",thumbnail:"esriThumbnail"},source:null,_setSourceAttr:function(a){this.source!==a&&(this._set("source",a),b.set(this.dap_scalePreviewThumbnail,
"backgroundImage",a))},backgroundPosition:null,_setBackgroundPositionAttr:function(a){this.backgroundPosition!==a&&(this._set("backgroundPosition",a),b.set(this.dap_scalePreviewThumbnail,"backgroundPosition",a))}})});