// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.0beta2/esri/copyright.txt for details.
//>>built
define("../../../../core/declare ./Canvas3DSymbolBase ./Canvas3DGraphic ./Canvas3DSymbolCommonCode ../../support/projectionUtils ../../../../views/3d/lib/glMatrix ../../webgl-engine/Stage ../../webgl-engine/lib/Object3D ../../webgl-engine/lib/Geometry ../../webgl-engine/lib/GeometryUtil ../../webgl-engine/materials/Material ../../webgl-engine/lib/Util".split(" "),function(v,E,F,l,G,z,A,H,I,B,J,C){var w=z.vec3d,D=z.mat4d,K=C.assert,q=w.create(),x={};v=v([E],{_prepareResources:function(){var a="c3dsymbol"+
this.symbol.id,c=this._getMaterialOpacityAndColor(),b=w.create(c),c=c[3],b={diffuse:b,ambient:b,opacity:c,transparent:1>c||this._isPropertyDriven("opacity"),vertexColors:!0};this._material=new J(b,a+"_3dlinemat");this._context.stage.add(A.ModelContentType.MATERIAL,this._material);this.resolve()},destroy:function(){this._context.stage.remove(A.ModelContentType.MATERIAL,this._material.getId())},createCanvas3DGraphic:function(a,c){var b=a.geometry;if("polyline"!==b.type)return this._logWarning("unsupported geometry type for line symbol: "+
b.type),null;var b="polygon"===b.type?"rings":"paths",l="graphic"+a.id,h=this._getGraphicElevationInfo(a);return this._createAs3DShape(a,b,c,h,l,a.id)},layerPropertyChanged:function(a,c,b){if("opacity"===a)return c=this._getMaterialOpacity(),b=1>c||this._isPropertyDriven("opacity"),this._material.setParameterValues({opacity:c,transparent:b}),!0;if("elevationInfo"===a){this._updateElevationInfo();a=this._context.elevationProvider;var s=this._context.renderCoordsHelper,h=l.ELEV_MODES.ABSOLUTE_HEIGHT,
r;for(r in c){var d=c[r],f=d._graphics[b];f&&(d=this._getGraphicElevationInfo(d.graphic),f.elevationAligner=d.mode!==h?y:null,f.elevationInfo.set(d),y(f,a,s))}return!0}return!1},_getPathSize:function(a,c){var b=a.size&&this._isPropertyDriven("size")?l.getSingleSizeDriver(a.size):this.symbol.size||this.symbol.width||1;return b/=this._context.mapCoordsHelper.mapUnitInMeters},_createAs3DShape:function(a,c,b,s,h,r){var d=a.geometry,f=d.hasZ,e=d[c];if(0<e.length){c=[];a=[];var p=[],t=w.create(),q=this._context.renderSpatialReference===
G.SphericalRenderSpatialReference,n=Array(6),x=this._getPathSize(b,this.symbol);b=this._getVertexOpacityAndColor(b);for(var e=l.getGeometryVertexData3D(e,f,d.spatialReference,this._context.renderSpatialReference,this._context.elevationProvider,s),d=e.geometryData.outlines,f=e.eleVertexData,e=e.vertexData,m=0;m<d.length;++m){var k=d[m],g=k.index,u=k.count;if(this._context.clippingExtent&&(l.computeBoundingBox(f,g,u,n),l.boundingBoxClipped(n,this._context.clippingExtent)))continue;l.chooseOrigin(e,
g,u,t);l.subtractCoordinates(e,g,u,t);k=new Float64Array(f.buffer,3*g*f.BYTES_PER_ELEMENT,3*u);g=l.flatArrayToArrayOfArrays(e,g,u);g=B.createTubeGeometry(g,0.5*x,10,q,t);g.getVertexAttr().mapPos={size:3,data:k};g=B.addVertexColors(g,b,!0);k=new I(g,h+"path"+m);k.singleUse=!0;c.push(k);a.push([this._material]);k=D.identity();D.translate(k,t,k);p.push(k)}t=this._context.layer.get("id");h=new H({geometries:c,materials:a,transformations:p,castShadow:!0,metadata:{layerId:t,graphicId:r},idHint:h});r=null;
s.mode!==l.ELEV_MODES.ABSOLUTE_HEIGHT&&(r=y);return new F(this,h,c,null,null,r,s)}this._logWarning("no paths found for line symbol");return null}});var L=C.VertexAttrConstants,y=function(a,c,b){var s=a.stageObject;a=a.elevationInfo;for(var h=s.getGeometryRecords(),r=h.length,d=0;d<r;d++){var f=[h[d].transformation[12],h[d].transformation[13],h[d].transformation[14]],e=h[d].geometry.getData().getVertexAttr(),p=e[L.POSITION].data,t=e.zOffset.data,e=e.mapPos.data,v=e.length/3;K(p.length/3===10*v+2,"unexpected tube geometry");
var n=0,w=0;x.spatialReference=c.spatialReference;for(var m=0;m<v;m++){x.x=e[3*m];x.y=e[3*m+1];x.z=e[3*m+2];var k=l.computeElevation(c,x,a),g=10;(0===m||m===v-1)&&g++;for(var u=0;u<g;u++)q[0]=p[n]+f[0],q[1]=p[n+1]+f[1],q[2]=p[n+2]+f[2],b.setAltitude(k+t[w],q,0),p[n]=q[0]-f[0],p[n+1]=q[1]-f[1],p[n+2]=q[2]-f[2],n+=3,w+=1}s.geometryVertexAttrsUpdated(d)}};return v});