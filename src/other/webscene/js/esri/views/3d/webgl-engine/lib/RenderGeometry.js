// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.0beta2/esri/copyright.txt for details.
//>>built
define(["./gl-matrix"],function(a){var e=a.vec3d,c=a.mat4d;a=function(a,b,c,d,f,g,h,k,l,m,n){this.data=a;this.boundingInfo=b;this.material=c;this.origin=null;this.center=e.create();this.bsRadius=0;this.transformation=null;d&&this.updateTransformation(d,f);this.castShadow=g;this.singleUse=h;this.name=k;this.uniqueName=l;this.idx=m;this.canBeMerged=!0;this.componentIdx=n;this.instanceParameters=this.displayedIndexRange=void 0};a.prototype.updateTransformation=function(a,b){b=b||c.maxScale(a);this.transformation=
a;c.multiplyVec3(a,this.boundingInfo.getCenter(),this.center);this.bsRadius=this.boundingInfo.getBSRadius()*b};return a});