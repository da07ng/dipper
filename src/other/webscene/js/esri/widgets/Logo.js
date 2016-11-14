// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.0beta2/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/widgets/Logo/templates/Logo.html":'\x3cdiv tabindex\x3d"0" role\x3d"link" aria-label\x3d"esri"\x3e\x3c/div\x3e\r\n'}});
define(["./Widget","dijit/_TemplatedMixin","dijit/a11yclick","dojo/dom-class","dojo/text!./Logo/templates/Logo.html"],function(b,c,d,e,f){return b.createSubclass([c],{declaredClass:"esri.widgets.Logo",baseClass:"esri-logo",templateString:f,postCreate:function(){this.inherited(arguments);this.on(d,function(){window.open(this._link,"_blank")}.bind(this))},_link:"http://www.esri.com",size:"medium",_setSizeAttr:function(a){"medium"!==a&&"small"!==a||(e.toggle(this.domNode,"is-small","small"===a),this._set("size",
a))}})});