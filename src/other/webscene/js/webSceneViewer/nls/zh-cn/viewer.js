// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.0beta2/esri/copyright.txt for details.
//>>built
define({defaultWebSceneName:"\u6211\u7684\u573a\u666f",menu:{titleLayers:"\u56fe\u5c42",titleEnvironmentSettings:"\u73af\u5883",titleSearch:"\u641c\u7d22",titleBasemap:"\u5e95\u56fe",errorSceneServiceLoad:"\u573a\u666f\u670d\u52a1\u52a0\u8f7d\u9519\u8bef",errorLayerName:"\u56fe\u5c42\u540d\u79f0:",titleLegend:"\u56fe\u4f8b",titleSettings:"\u8bbe\u7f6e",titleShare:"\u5171\u4eab",moreTools:"\u66f4\u591a\u5de5\u5177"},dialogs:{webscene:"Web \u573a\u666f",addLayer:"\u6dfb\u52a0\u56fe\u5c42",layerDidNotDrawCompletely:"\u56fe\u5c42\u672a\u5b8c\u5168\u7ed8\u5236",
webglCheck:"WebGL \u6821\u9a8c",browserCheck:"\u6d4f\u89c8\u5668\u68c0\u67e5",browserFail:"\u6b64\u573a\u666f\u67e5\u770b\u5668\u65e0\u6cd5\u5728\u60a8\u7684\u6d4f\u89c8\u5668\u4e2d\u6253\u5f00\u3002",unsupportedBasemap:"\u5e95\u56fe\u4e0d\u53d7\u652f\u6301"},messages:{addLayerFailed:"\u65e0\u6cd5\u6dfb\u52a0\u56fe\u5c42",layerAddedSuccess:"\u5df2\u6210\u529f\u6dfb\u52a0\u56fe\u5c42\u3002",layerDidNotDrawCompletely:"\u672a\u5b8c\u5168\u7ed8\u5236\uff0c\u56e0\u4e3a\u5df2\u8d85\u51fa ${limit} \u4e2a\u8981\u7d20\u7684\u670d\u52a1\u5668\u4f20\u8f93\u9650\u5236\u3002",
layerTypeNotSupported:"\u56fe\u5c42\u7c7b\u578b\u4e0d\u53d7\u652f\u6301:",onlyTiledLayerSupported:"\u4ec5\u652f\u6301\u5207\u7247\u5730\u56fe\u56fe\u5c42\u3002",layerItemTypeNotSupported:"\u4e0d\u53d7\u652f\u6301\u7684\u56fe\u5c42\u9879\u76ee\u7c7b\u578b:",layerItemPropertiesFromMapServer:"\u4e0d\u652f\u6301\u4fdd\u5b58\u5728\u5730\u56fe\u56fe\u5c42\u9879\u76ee\u4e2d\u7684\u663e\u793a\u5c5e\u6027\u3002",layerItemPropertiesNotApplied:"\u672a\u5e94\u7528\u4fdd\u5b58\u5728\u56fe\u5c42\u9879\u76ee\u4e2d\u7684\u663e\u793a\u5c5e\u6027\u3002",
itemId:"\u9879\u76ee ID:",itemType:"\u9879\u76ee\u7c7b\u578b:",websceneLoadFail:"\u65e0\u6cd5\u52a0\u8f7d Web \u573a\u666f\u3002",websceneLoadFailNoVersion:"Web \u573a\u666f\u4e2d\u672a\u627e\u5230\u4efb\u4f55\u7248\u672c\u3002",websceneLoadFailBadVersion:"Web \u573a\u666f\u4e2d\u7684\u7248\u672c ${websceneVersion} \u65e0\u6548\u3002",websceneLoadFailIncompatVersion:"Web \u573a\u666f\u7248\u672c ${websceneVersion} \u4e0e\u6b64\u67e5\u770b\u5668\u4e0d\u517c\u5bb9",websceneVersionRequires:"(\u9700\u8981 ${websceneRequiredVersion})",
websceneVersionMoreRecent:"Web \u573a\u666f (\u7248\u672c ${websceneVersion}) \u6bd4\u67e5\u770b\u5668\u7248\u672c {$viewerVersion} \u66f4\u65b0\u3002",webscenePotentiallyUnsupported:"Web \u573a\u666f\u7684\u90e8\u5206\u5185\u5bb9\u53ef\u80fd\u4e0d\u652f\u6301\u4e14\u65e0\u6cd5\u6309\u9884\u671f\u663e\u793a\u3002",websceneGlobalSR:"\u5168\u5c40 Web \u573a\u666f\u9700\u8981\u4f7f\u7528 Web Mercator \u6295\u5f71\u3002",websceneGlobalEmbeddedSR:"\u5168\u5c40 Web \u573a\u666f\u4e2d\u7684\u7a7a\u95f4\u53c2\u8003\u9700\u8981\u4f7f\u7528 Web Mercator \u6216 WGS84 GCS\u3002",
websceneLocalSRGCS:"\u4e0d\u652f\u6301\u5730\u7406\u5750\u6807\u4e2d\u7684\u672c\u5730 Web \u573a\u666f\u3002",tiledMapServicesMinVersion:"\u4e0d\u652f\u6301 10.2.2 \u7248\u4e4b\u524d\u7684\u670d\u52a1\u5668\u4e0a\u7684\u5207\u7247\u5730\u56fe\u56fe\u5c42\u3002",tiledMapServicesMinVersionPatch:"\u53ea\u6709\u5728\u5e94\u7528\u4e86\u6240\u6709\u670d\u52a1\u5668\u66f4\u65b0\u7684\u60c5\u51b5\u4e0b\uff0c\u624d\u652f\u6301 10.2.2 \u7248\u670d\u52a1\u5668\u4e2d\u7684\u5207\u7247\u5730\u56fe\u56fe\u5c42\u3002",
sceneLayerVersion:"\u573a\u666f\u56fe\u5c42\u7248\u672c\u4e0d\u53d7\u652f\u6301\u3002",sceneLayerSRWM:"\u573a\u666f\u56fe\u5c42\u9700\u8981\u4f7f\u7528 Web Mercator \u6295\u5f71\u3002",sceneLayerSR:"\u573a\u666f\u56fe\u5c42\u9700\u8981\u4e0e\u573a\u666f\u7a7a\u95f4\u53c2\u8003\u5339\u914d\u3002",sceneLayerSRGCS:"\u672c\u5730\u573a\u666f\u4e2d\u4e0d\u652f\u6301\u5730\u7406\u5750\u6807\u7cfb\u4e2d\u7684\u573a\u666f\u56fe\u5c42\u3002",tiledMapServicesSR:"\u5207\u7247\u5730\u56fe\u56fe\u5c42\u9700\u8981\u4f7f\u7528 Web Mercator \u6295\u5f71\u3002",
tiledMapServicesSRGeneric:"\u5207\u7247\u5730\u56fe\u56fe\u5c42\u9700\u8981\u4e0e\u573a\u666f\u7a7a\u95f4\u53c2\u8003\u548c\u5207\u9762\u65b9\u6848\u5339\u914d\u3002",tiledMapServiceSRGCS:"\u4e0d\u652f\u6301\u5730\u7406\u5750\u6807\u7cfb\u4e2d\u7684\u5207\u7247\u5730\u56fe\u56fe\u5c42\u3002",tiledImageServicesSRGeneric:"\u5207\u7247\u5f71\u50cf\u56fe\u5c42\u9700\u8981\u4e0e\u573a\u666f\u7a7a\u95f4\u53c2\u8003\u548c\u5207\u9762\u65b9\u6848\u5339\u914d\u3002",tiledImageServiceSRGCS:"\u4e0d\u652f\u6301\u5730\u7406\u5750\u6807\u7cfb\u4e2d\u7684\u5207\u7247\u5f71\u50cf\u56fe\u5c42\u3002",
tiledElevationServicesSRGeneric:"\u9ad8\u7a0b\u56fe\u5c42\u9700\u8981\u4e0e\u573a\u666f\u7a7a\u95f4\u53c2\u8003\u548c\u5207\u9762\u65b9\u6848\u5339\u914d\u3002",tilingSchemePowerOfTwo:"\u4e0d\u517c\u5bb9\u7684\u5207\u7247\u65b9\u6848: \u6bcf\u4e2a\u6bd4\u4f8b\u5fc5\u987b\u6b63\u597d\u662f\u5904\u7406\u7ea7\u522b\u6bd4\u4f8b\u7684\u4e00\u534a\u3002",tilingSchemeTileSize:"\u4e0d\u517c\u5bb9\u7684\u5207\u7247\u65b9\u6848: \u53ea\u652f\u6301\u5bbd\u548c\u9ad8\u4e3a 256 \u7684\u5207\u7247\u3002",tilingSchemeGaps:"\u4e0d\u517c\u5bb9\u7684\u5207\u7247\u65b9\u6848: \u4e0d\u652f\u6301\u7ea7\u522b\u95f4\u7684\u95f4\u9699\u3002",
tilingSchemeGeneric:"\u4e0d\u517c\u5bb9\u7684\u5207\u7247\u65b9\u6848\u3002",patchRequired:"\u5fc5\u9700\u56fe\u9762:",elevationImageServicesSR:"\u9ad8\u7a0b\u56fe\u5c42\u9700\u8981\u4f7f\u7528 Web Mercator \u6295\u5f71\u3002",imageServicesSR:"\u5207\u7247\u5f71\u50cf\u56fe\u5c42\u9700\u8981\u4f7f\u7528 Web Mercator \u6295\u5f71\u3002",tiledMapServicesTilingScheme:"\u5207\u7247\u5730\u56fe\u56fe\u5c42\u9700\u8981\u9075\u5faa ArcGIS Online \u5207\u7247\u65b9\u6848\u3002",tiledImageServicesTilingScheme:"\u5207\u7247\u5f71\u50cf\u56fe\u5c42\u9700\u8981\u9075\u5faa ArcGIS Online \u5207\u7247\u65b9\u6848\u3002",
elevationImageServicesTilingScheme:"\u9ad8\u7a0b\u56fe\u5c42\u9700\u8981\u9075\u5faa ArcGIS Online \u5207\u7247\u65b9\u6848\u3002",imageServicesCached:"\u4ec5\u652f\u6301\u7f13\u5b58\u5f71\u50cf\u670d\u52a1\u5668\u3002",elevationImageServicesCached:"\u4ec5\u652f\u6301\u91c7\u7528 LERC \u7f16\u7801\u7684\u7f13\u5b58\u5f71\u50cf\u670d\u52a1\u5668\u3002",elevationBasemapTitle:"\u65e0\u6cd5\u6dfb\u52a0\u9ed8\u8ba4\u9ad8\u7a0b\u56fe\u5c42",elevationBasemapSR:"\u9ad8\u7a0b\u56fe\u5c42\u7a7a\u95f4\u53c2\u8003\u4e0e\u5e95\u56fe\u7a7a\u95f4\u53c2\u8003\u4e0d\u5339\u914d\u3002",
elevationBasemapTS:"\u9ad8\u7a0b\u56fe\u5c42\u5207\u7247\u65b9\u6848\u4e0e\u5e95\u56fe\u5207\u7247\u65b9\u6848\u4e0d\u517c\u5bb9\u3002",featureServiceNotSupportedTable:"\u4e0d\u652f\u6301\u7c7b\u578b\u8868\u3002",featureServiceNotSupportedMultipatch:"\u4e0d\u652f\u6301\u591a\u9762\u4f53\u8981\u7d20\u670d\u52a1\u3002",featureServiceNotSupportedNoRenderer:"\u4e0d\u652f\u6301\u4e0d\u542b\u6e32\u67d3\u5668\u7684\u670d\u52a1\u3002",featureServiceNotSupportedRendererType:"\u4e0d\u53d7\u652f\u6301\u7684\u6e32\u67d3\u5668\u7c7b\u578b:",
featureServiceNotSupportedMaxFeatures:"\u8981\u7d20\u670d\u52a1\u8d85\u51fa\u6700\u5927\u8981\u7d20\u9650\u5236:",featureServiceNotSupportedMaxVertices:"\u8981\u7d20\u670d\u52a1\u8d85\u51fa\u6700\u5927\u6298\u70b9\u9650\u5236:",splashSignInToEdit:"\u767b\u5f55\u4ee5\u5728 3D \u6a21\u5f0f\u4e0b\u63a2\u7d22\u4e16\u754c\u5e76\u6dfb\u52a0\u6765\u81ea Esri \u53ca\u7ec4\u7ec7\u4e2d\u7684\u56fe\u5c42\u6765\u521b\u5efa\u65b0\u573a\u666f\u3002",splashShowThisOnStart:"\u5728\u542f\u52a8\u65f6\u663e\u793a\u6b64\u5185\u5bb9",
splashNewToArcGIS:"\u9996\u6b21\u4f7f\u7528 ArcGIS? \u7acb\u5373\u6ce8\u518c\u4ee5\u83b7\u53d6\u8bd5\u7528\u8ba2\u9605\u3002",splashLookAtOtherScenes:"\u4ee5\u4e0b\u662f\u60a8\u53ef\u4ee5\u63a2\u7d22\u7684\u4e00\u4e9b\u573a\u666f\u3002",selectedBasemapMismatchTitle:"\u65e0\u6cd5\u4f7f\u7528\u6240\u9009\u5e95\u56fe",selectedBasemapMismatch:"\u5e95\u56fe\u7684\u7a7a\u95f4\u53c2\u8003\u548c\u5207\u7247\u65b9\u6848\u4e0e\u573a\u666f\u4e0d\u517c\u5bb9\u3002\n\u521b\u5efa\u65b0\u573a\u666f\u4ee5\u4f7f\u7528\u8be5\u5e95\u56fe\u3002",
serviceName:"\u670d\u52a1\u540d\u79f0",basemapDrop:"\u56fe\u5c42\u5177\u6709\u4e0e\u5e95\u56fe\u4e0d\u540c\u7684\u7a7a\u95f4\u53c2\u8003\u548c\u5207\u7247\u65b9\u6848\u3002\x3cBR\x3e\u662f\u5426\u8981\u5220\u9664\u5e95\u56fe\u4ee5\u6dfb\u52a0\u56fe\u5c42?",basemapDropConfirm:"\u5220\u9664\u5e95\u56fe",basemapDropTitle:"\u6570\u636e\u4e0d\u5339\u914d",BasemapDropWarningTitle:"\u5df2\u5220\u9664\u5e95\u56fe",BasemapDropWarning:"\u5e95\u56fe\u7684\u7a7a\u95f4\u53c2\u8003\u548c\u5207\u7247\u65b9\u6848\u4e0e\u56fe\u5c42\u4e0d\u5339\u914d\uff0c\u56e0\u6b64\u4e88\u4ee5\u5220\u9664\u3002",
sceneRejectTitle:"\u65e0\u6cd5\u5bfc\u5165\u573a\u666f",sceneRejectG2L:"\u5168\u5c40\u573a\u666f\u65e0\u6cd5\u5bfc\u5165\u5230\u672c\u5730\u573a\u666f\u3002",sceneRejectL2G:"\u672c\u5730\u573a\u666f\u65e0\u6cd5\u5bfc\u5165\u5230\u5168\u5c40\u573a\u666f\u3002",sceneRejectSRTS:"\u6240\u9009\u573a\u666f\u7684\u7a7a\u95f4\u53c2\u8003\u4e0e\u5f53\u524d\u573a\u666f\u7a7a\u95f4\u53c2\u8003\u4e0d\u5339\u914d\u3002",unsupportedSymbolType:"\u7b26\u53f7\u4e0d\u53d7\u652f\u6301",unsupportedSymbolLayerType:"\u7b26\u53f7\u56fe\u5c42\u4e0d\u53d7\u652f\u6301",
unsupportedSymbology:"\u7b26\u53f7\u7cfb\u7edf\u7684\u90e8\u5206\u4e0d\u53d7\u652f\u6301",layerDisplaysWithServiceSymbology:"\u56fe\u5c42\u901a\u8fc7\u670d\u52a1\u7b26\u53f7\u7cfb\u7edf\u663e\u793a\u3002",layerDisplaysWithItemSymbology:"\u56fe\u5c42\u901a\u8fc7\u9879\u76ee\u7b26\u53f7\u7cfb\u7edf\u663e\u793a\u3002",layerDisplaysWithDefaultSymbology:"\u56fe\u5c42\u901a\u8fc7\u9ed8\u8ba4\u7b26\u53f7\u7cfb\u7edf\u663e\u793a\u3002",layerDisplaysWithFallbackSymbology:"\u56fe\u5c42\u901a\u8fc7\u56de\u9000\u7b26\u53f7\u7cfb\u7edf\u663e\u793a\u3002",
layerCreationErrorGeneric:"\u521b\u5efa\u56fe\u5c42\u65f6\u51fa\u9519\u3002",layerDisplaysNotAsExpected:"\u56fe\u5c42\u53ef\u80fd\u65e0\u6cd5\u6309\u9884\u671f\u663e\u793a\u3002",byReferenceRendererUnsupported:"\u65e0\u6cd5\u521b\u5efa\u53c2\u8003\u6e32\u67d3\u5668",geometryServiceUnavailableTitle:"\u51e0\u4f55\u670d\u52a1\u51fa\u73b0\u95ee\u9898",geometryServiceUnavailable:"\u51e0\u4f55\u670d\u52a1\u65e0\u54cd\u5e94\u6216\u914d\u7f6e\u4e0d\u6b63\u786e\u3002\u573a\u666f\u4e2d\u7684\u5149\u7167\u53ef\u80fd\u4e0d\u6b63\u786e\u3002",
invalidUrl:"URL \u65e0\u6548",unsupportedUrl:"\u4e0d\u652f\u6301\u7684 URL"},webglMessages:{badhardware:"\u65e0\u6cd5\u521b\u5efa WebGL \u4e0a\u4e0b\u6587\u3002\x3cbr\x3e\u53ef\u80fd\u60a8\u7684\u6d4f\u89c8\u5668\u4e2d\u7981\u7528\u4e86 WebGL\uff0c\u6216\u786c\u4ef6\u4e0d\u652f\u6301 WebGL\u3002",troubleshoot:'\u8bf7\u5728 \x3ca href\x3d"http://get.webgl.org" target\x3d"_blank"\x3eget.webgl.org\x3c/a\x3e \u4e2d\u6392\u9664\u95ee\u9898',badbrowser:"\u60a8\u7684\u6d4f\u89c8\u5668\u4f3c\u4e4e\u4e0d\u652f\u6301 WebGL\u3002",
help:"\u5e2e\u52a9",mobile:"\u79fb\u52a8\u8bbe\u5907\u4e0d\u652f\u6301 Web \u573a\u666f\u67e5\u770b\u5668\u3002",learnMore:"\u4e86\u89e3\u8be6\u7ec6\u4fe1\u606f",layerInfo:"${Author}\u5236\u4f5c\u7684${LayerType}"},buttons:{signIn:"\u767b\u5f55",tryArcGIS:"\u8bd5\u7528 ArcGIS",visitGallery:"\u8bbf\u95ee\u56fe\u5e93",fullScreen:"\u5168\u5c4f",exitFullScreen:"\u9000\u51fa\u5168\u5c4f"},appName:"3D \u573a\u666f\u67e5\u770b\u5668"});