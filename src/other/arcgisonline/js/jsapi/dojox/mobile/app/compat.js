//>>built
define("dojox/mobile/app/compat",["dijit","dojo","dojox","dojo/require!dojox/mobile/compat"],function(f,a,b){a.provide("dojox.mobile.app.compat");a.require("dojox.mobile.compat");a.extend(b.mobile.app.AlertDialog,{_doTransition:function(c){console.log("in _doTransition and this \x3d ",this);var e=a.marginBox(this.domNode.firstChild).h,d=this.controller.getWindowSize().h,e=d-e,d=a.fx.slideTo({node:this.domNode,duration:400,top:{start:0>c?e:d,end:0>c?d:e}}),e=a[0>c?"fadeOut":"fadeIn"]({node:this.mask,
duration:400}),d=a.fx.combine([d,e]),b=this;a.connect(d,"onEnd",this,function(){0>c&&(b.domNode.style.display="none",a.destroy(b.domNode),a.destroy(b.mask))});d.play()}});a.extend(b.mobile.app.List,{deleteRow:function(){console.log("deleteRow in compat mode",c);var c=this._selectedRow;a.style(c,{visibility:"hidden",minHeight:"0px"});a.removeClass(c,"hold");var b=a.contentBox(c).h;a.animateProperty({node:c,duration:800,properties:{height:{start:b,end:1},paddingTop:{end:0},paddingBottom:{end:0}},onEnd:this._postDeleteAnim}).play()}});
b.mobile.app.ImageView&&!a.create("canvas").getContext&&a.extend(b.mobile.app.ImageView,{buildRendering:function(){this.domNode.innerHTML="ImageView widget is not supported on this browser.Please try again with a modern browser, e.g. Safari, Chrome or Firefox";this.canvas={}},postCreate:function(){}});b.mobile.app.ImageThumbView&&a.extend(b.mobile.app.ImageThumbView,{place:function(b,e,d){a.style(b,{top:d+"px",left:e+"px",visibility:"visible"})}})});