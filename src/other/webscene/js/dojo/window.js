//>>built
define("./_base/lang ./sniff ./_base/window ./dom ./dom-geometry ./dom-style ./dom-construct".split(" "),function(z,f,s,H,q,C,m){f.add("rtl-adjust-position-for-verticalScrollBar",function(b,f){var d=s.body(f),e=m.create("div",{style:{overflow:"scroll",overflowX:"visible",direction:"rtl",visibility:"hidden",position:"absolute",left:"0",top:"0",width:"64px",height:"64px"}},d,"last"),h=m.create("div",{style:{overflow:"hidden",direction:"ltr"}},e,"last"),g=0!=q.position(h).x;e.removeChild(h);d.removeChild(e);
return g});f.add("position-fixed-support",function(b,f){var d=s.body(f),e=m.create("span",{style:{visibility:"hidden",position:"fixed",left:"1px",top:"1px"}},d,"last"),h=m.create("span",{style:{position:"fixed",left:"0",top:"0"}},e,"last"),g=q.position(h).x!=q.position(e).x;e.removeChild(h);d.removeChild(e);return g});var n={getBox:function(b){b=b||s.doc;var k="BackCompat"==b.compatMode?s.body(b):b.documentElement,d=q.docScroll(b);if(f("touch")){var e=n.get(b);b=e.innerWidth||k.clientWidth;k=e.innerHeight||
k.clientHeight}else b=k.clientWidth,k=k.clientHeight;return{l:d.x,t:d.y,w:b,h:k}},get:function(b){if(f("ie")&&n!==document.parentWindow){b.parentWindow.execScript("document._parentWindow \x3d window;","Javascript");var k=b._parentWindow;b._parentWindow=null;return k}return b.parentWindow||b.defaultView},scrollIntoView:function(b,k){try{b=H.byId(b);var d=b.ownerDocument||s.doc,e=s.body(d),h=d.documentElement||e.parentNode,g=f("ie"),t=f("webkit");if(!(b==e||b==h))if(!f("mozilla")&&(!g&&!t&&!f("opera")&&
!f("trident"))&&"scrollIntoView"in b)b.scrollIntoView(!1);else{var m="BackCompat"==d.compatMode,n=Math.min(e.clientWidth||h.clientWidth,h.clientWidth||e.clientWidth),A=Math.min(e.clientHeight||h.clientHeight,h.clientHeight||e.clientHeight),d=t||m?e:h,p=k||q.position(b),c=b.parentNode,t=function(a){return 6>=g||7==g&&m?!1:f("position-fixed-support")&&"fixed"==C.get(a,"position").toLowerCase()},z=this,D=function(a,b,c){"BODY"==a.tagName||"HTML"==a.tagName?z.get(a.ownerDocument).scrollBy(b,c):(b&&(a.scrollLeft+=
b),c&&(a.scrollTop+=c))};if(!t(b))for(;c;){c==e&&(c=d);var a=q.position(c),E=t(c),B="rtl"==C.getComputedStyle(c).direction.toLowerCase();if(c==d){a.w=n;a.h=A;if(d==h&&(g||f("trident"))&&B)a.x+=d.offsetWidth-a.w;if(0>a.x||!g||9<=g||f("trident"))a.x=0;if(0>a.y||!g||9<=g||f("trident"))a.y=0}else{var u=q.getPadBorderExtents(c);a.w-=u.w;a.h-=u.h;a.x+=u.l;a.y+=u.t;var r=c.clientWidth,v=a.w-r;0<r&&0<v&&(B&&f("rtl-adjust-position-for-verticalScrollBar")&&(a.x+=v),a.w=r);r=c.clientHeight;v=a.h-r;0<r&&0<v&&
(a.h=r)}E&&(0>a.y&&(a.h+=a.y,a.y=0),0>a.x&&(a.w+=a.x,a.x=0),a.y+a.h>A&&(a.h=A-a.y),a.x+a.w>n&&(a.w=n-a.x));var w=p.x-a.x,x=p.y-a.y,F=w+p.w-a.w,G=x+p.h-a.h,l,y;if(0<F*w&&(c.scrollLeft||c==d||c.scrollWidth>c.offsetHeight)){l=Math[0>w?"max":"min"](w,F);if(B&&(8==g&&!m||9<=g||f("trident")))l=-l;y=c.scrollLeft;D(c,l,0);l=c.scrollLeft-y;p.x-=l}if(0<G*x&&(c.scrollTop||c==d||c.scrollHeight>c.offsetHeight))l=Math.ceil(Math[0>x?"max":"min"](x,G)),y=c.scrollTop,D(c,0,l),l=c.scrollTop-y,p.y-=l;c=c!=d&&!E&&c.parentNode}}}catch(I){console.error("scrollIntoView: "+
I),b.scrollIntoView(!1)}}};z.setObject("dojo.window",n);return n});