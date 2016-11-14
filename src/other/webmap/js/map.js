require([
    "dojo/topic",
    "dojo/aspect",
    "dojo/request",
    "dojo/query",
    "dojo/io-query",
    "dojo/_base/connect",
    "dojo/on",
    "dojo/dom",
    "dojo/dom-style",
    "mapwidgets/DataResourceCatalog",
    "mapwidgets/FuncToolPane",
    "esri/dijit/Search",
    "mapwidgets/ShareToolPane1",
    "mapwidgets/SaveToolDlg",
    "mapwidgets/_StyledTreeNode",
    "mapwidgets/_StyledTopLevelTreeNode",
    "mapwidgets/_StyledSecondLevelTreeNode",
    "mapwidgets/StorageHelper",
    "mapwidgets/AuthHelper",
    "dojo/domReady!"
], function(topic, aspect, request, query, ioquery, conn, on, dom, domStyle, DataResourceCatalog, FuncToolPane, Search) {

    // 二维地图页面的初始化
    initMapViewer();

    // DOM事件的绑定
    loadConnections();

    var funcPoolStackContainer = new dijit.layout.BorderContainer({
        id: 'funcPoolContentPane',
        containerNode: dom.byId('funcPoolDiv'),
        region: 'center',
        gutters: false,
        isLayoutContainer: true
    });
    /*
    各种DOM的事件绑定初始化
     */
    aspect.after(arcgisonline.map.leftPanel, 'calculateLeftPanelDefaultWidth', function() {
        arcgisonline.map.leftPanel.leftPanelDefaultWidth = 360;
        arcgisonline.map.leftPanel.leftPanelWidth = arcgisonline.map.leftPanel.leftPanelDefaultWidth;
        dojo.style(dom.byId("leftDiv"), "width", arcgisonline.map.leftPanel.leftPanelWidth + "px");
    });

    // 1. 根据当前页面宽度调整左侧leftDiv的width
    dojo.addOnLoad(_initMapViewerConfigurations);
    aspect.after(arcgisonline.map.main, 'checkMinWidthOfPage', _adjustTab);

    topic.subscribe('onMapFullyLoaded', function() {

        _updateLoginStatus();
        aspect.after(arcgisonline.map.main, 'loggedIn', function() {
            _updateLoginStatus();
            var leftTabContainer = dijit.byId('leftTabContainer');
            var children;
            if (leftTabContainer) {
                children = leftTabContainer.getChildren();
                if (children && children.length > 0) {
                    leftTabContainer.selectChild(children[0]);
                }
            }
        });

        _initMapViewer();
        domStyle.set(dom.byId('tocContentHeader'), 'display', 'none');

        if (!arcgisonline.map.esrichina_functoolpane) {
            var dataResCata = new DataResourceCatalog({
                id: 'dataResCata'
            });
            dijit.byId('dataPoolDiv').addChild(dataResCata);
            arcgisonline.map.esrichina_functoolpane = new FuncToolPane({
                containerNode: funcPoolStackContainer
            });

            arcgisonline.map.esrichina_functoolpane.startup();
            arcgisonline.map.esrichina_functoolpane.showFuncPoolItems();
        }

        var objUrl = arcgisonline.sharing.util.urlToObject(document.URL);
        if (objUrl.query.webmap) {
            dijit.byId('leftTabContainer').selectChild(dijit.byId('leftTocContentPane'));
        }
    });

    // 工具栏 - 地图保存
    on(dom.byId('esrichina-tool-save'), 'click', function() {
        mapwidgets.storage.save();
    });

    on(dom.byId('esrichina-tool-measure'), 'click', function() {
        arcgisonline.map.popup.disablePopupHandler();
        if (!dojo.byId("measureToolDiv")) {
            dojo.place(dojo.create("div", {
                id: "measureToolDiv"
            }), "measureDiv", "last");
        }

        if ("block" == dojo.style(dojo.byId("measureDiv"), "display")) {
            arcgisonline.map.main.hideMeasureTool();
        } else {
            arcgisonline.map.main.hideDropdowns();
            arcgisonline.map.main.map.infoWindow.hide();
            var a = dojo.coords(dojo.byId("esrichina-tool-measure"));

            dojo.style(dojo.byId("measureDiv"), 'left', document.body.clientWidth - 110 - 322 + 'px');
            dojo.style(dojo.byId("measureDiv"), "display", "block");
            dojo.style(dojo.byId("measureDiv"), "top", a.y + a.h + 20 + "px");
            if (!arcgisonline.map.main.measureTool) {
                a = esri.symbol.fromJson({
                    name: "Circle",
                    type: "esriSMS",
                    style: "esriSMSCircle",
                    color: [255, 255, 255, 204],
                    size: 6,
                    outline: {
                        color: [102, 102, 102, 255],
                        width: 1
                    }
                });
                arcgisonline.map.main.measureTool = new esri.dijit.Measurement({
                    map: arcgisonline.map.main.map,
                    id: "measureTool",
                    pointSymbol: a,
                    defaultAreaUnit: "english" === arcgisonline.map.main.scaleBarUnits ? esri.Units.SQUARE_MILES : esri.Units.SQUARE_KILOMETERS,
                    defaultLengthUnit: "english" === arcgisonline.map.main.scaleBarUnits ? esri.Units.MILES : esri.Units.KILOMETERS
                }, "measureToolDiv");
                arcgisonline.map.main.measureTool.startup();
            }
            arcgisonline.map.main.measureTool.setTool("area", true);
            arcgisonline.map.main.measureActivated = true;
            if (arcgisonline.map.geocodeReview.geocodeMatchWidget) {
                arcgisonline.map.geocodeReview.geocodeMatchWidget.pauseMapEvents();
            }
            if (arcgisonline.map.main.map.activeDirectionsWidget && arcgisonline.map.main.map.activeDirectionsWidget.active) {
                arcgisonline.map.main.activeDirectionsWidgetIsActive = true;
                arcgisonline.map.main.map.activeDirectionsWidget.deactivate();
            } else {
                arcgisonline.map.main.activeDirectionsWidgetIsActive = false;
            }
        }
    });

    // 工具栏 - 地图分享
    on(dom.byId('esrichina-tool-share'), 'click', function() {
        if (null === arcgisonline.map.save_open.webMapInfo) {
            /*
            未保存的地图不允许分享
             */
            var generalDlg = arcgisonline.sharing.dijit.dialog.GeneralDlg.prototype.statics.getInstance();
            generalDlg.show({
                title: esri.i18nBundle.sharingDlg.sharingDlgTitle,
                message: esri.i18nBundle.viewer.error.cantShare
            });
        } else {
            var hasBing = false,
                hasPresentation = false,
                hasRequiresSubscriptionOrCredits = false;

            if (arcgisonline.map.main.mapLayers[0].layer instanceof esri.virtualearth.VETiledLayer) {
                hasBing = true;
            }

            if (arcgisonline.map.save_open.openedWebMap) {
                if (arcgisonline.map.save_open.openedWebMap.presentation &&
                    arcgisonline.map.save_open.openedWebMap.presentation.slides &&
                    0 < arcgisonline.map.save_open.openedWebMap.presentation.slides.length) {
                    hasPresentation = true;
                }
            }

            dojo.forEach(arcgisonline.map.main.mapLayers, function(a) {
                if (a.itemCard) {
                    if (-1 < dojo.indexOf(a.itemCard.typeKeywords, "Requires Credits") ||
                        -1 < dojo.indexOf(a.itemCard.typeKeywords, "Requires Subscription")) {
                        hasRequiresSubscriptionOrCredits = true;
                    }
                }
            });

            var curUser = arcgisonline.sharing.util.getUser();
            if (!curUser ||
                arcgisonline.map.save_open.webMapInfo.owner !== curUser.email &&
                "admin" !== arcgisonline.map.save_open.webMapInfo.itemControl &&
                "update" !== arcgisonline.map.save_open.webMapInfo.itemControl) {
                mapwidgets.ShareToolPane1.prototype.statics.getInstance()
                    .show(arcgisonline.map.save_open.webMapInfo.id,
                        arcgisonline.map.save_open.webMapInfo.owner,
                        arcgisonline.map.save_open.folderId,
                        arcgisonline.map.save_open.webMapInfo.title,
                        hasBing, hasPresentation, false, hasRequiresSubscriptionOrCredits);
            } else {
                if (null === arcgisonline.map.save_open.folderTitle) {
                    arcgisonline.map.storage.getItemFolder(dojo.hitch(this, function(b, c) {
                        mapwidgets.ShareToolPane1.prototype.statics.getInstance()
                            .show(arcgisonline.map.save_open.webMapInfo.id,
                                arcgisonline.map.save_open.webMapInfo.owner,
                                arcgisonline.map.save_open.folderId,
                                arcgisonline.map.save_open.webMapInfo.title,
                                hasBing, hasPresentation, false, hasRequiresSubscriptionOrCredits);
                    }));
                } else {
                    mapwidgets.ShareToolPane1.prototype.statics.getInstance()
                        .show(arcgisonline.map.save_open.webMapInfo.id,
                            arcgisonline.map.save_open.webMapInfo.owner,
                            arcgisonline.map.save_open.folderId,
                            arcgisonline.map.save_open.webMapInfo.title,
                            hasBing, hasPresentation, false, hasRequiresSubscriptionOrCredits);
                }
            }
        }
    });

    function getCookie(cname) {
        var name = cname + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) === 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }

    /**
     * 页面定制入口：
     * 1. 初始化页面布局
     * 2. 定制arcgisonline内置对象的路径和参数
     * @return {[type]} [description]
     */
    function _initMapViewerConfigurations() {
        _adjustTab();

        // 将TOC菜单切换到我的内容
        var signal = aspect.before(leftPanel, 'showStack_ContentStack', function() {
            signal.remove();
            arcgisonline.map.dijit.TOC.prototype.showLayerDescription = dojo.hitch(leftPanel.tocPanel, _showLayerDescription);
        });

        var user = arcgisonline.sharing.util.getUser();
        if (user) {
            // var signoutSignal = setInterval(function() {
            //     var tokenId = getCookie("iPlanetDirectoryPro");
            //     if (!tokenId || tokenId === 'null') {
            //         clearInterval(signoutSignal);
            //         //这里添加对应的登录超时处理
            //         // confirm("登陆超时，请重新登录！");
            //         //window.location.href = "../user/login.html";
            //         dom.byId('user-logout-link').click();
            //         // window.open($("#login").attr("href"), "_self");
            //         // document.cookie = _self.options.openamKey + "=null;domain=.szhy.cn;expires=Session;path=/";
            //     }
            // }, 5000);
        }

        var redirLegendPopSignal = aspect.after(arcgisonline.map.dijit.renderer._RendererMixin, "showLegendPopup", function() {
            if (mapwidgets.rendererLegendPopupHandler) {
                conn.disconnect(mapwidgets.rendererLegendPopupHandler);
            }

            mapwidgets.rendererLegendPopupHandler = on(arcgisonline.map.main.map, 'resize', function() {
                if (domStyle.get(dom.byId('leftContentPanel'), 'width')) {
                    conn.disconnect(mapwidgets.rendererLegendPopupHandler);
                    return;
                }

                if (dom.byId('rendererLegendPopup')) {
                    domStyle.set(dom.byId('rendererLegendPopup'), 'left', domStyle.get(dom.byId('leftDiv'), 'width') + 20 + 'px');
                }
            });

            if (domStyle.get(dom.byId('leftContentPanel'), 'width')) {
                redirLegendPopSignal.remove();
                return;
            }

            if (!arcgisonline.map.main.rendererLegendPopup) {
                var signal = setInterval(function() {
                    if (!arcgisonline.map.main.rendererLegendPopup) {
                        return;
                    }

                    clearInterval(signal);
                    domStyle.set(dom.byId('rendererLegendPopup'), 'left', domStyle.get(dom.byId('leftDiv'), 'width') + 20 + 'px');
                }, 1E3);
            } else {
                domStyle.set(dom.byId('rendererLegendPopup'), 'left', domStyle.get(dom.byId('leftDiv'), 'width') + 20 + 'px');
            }
        });

        dijit.byId('leftTabContainer').watch("selectedChildWidget", function(name, oval, nval) {
            if (nval.id === 'leftFuncPoolContentPane') {
                if (dijit.byId("webmap-analysis") &&
                    "none" !== dojo.style(dijit.byId("webmap-analysis").domNode, "display")) {
                    arcgisonline.map.esrichina_functoolpane.configureAnalysis();
                }
            }
        });

        topic.subscribe('Analysis/OnExecute', function() {
            arcgisonline.map.leftPanel.openLeftTOCPanel();
            arcgisonline.map.leftPanel.showLeftContentPanel();
            dijit.byId('leftTabContainer').forward();
        });

        // 隐藏TOC菜单中的分析按钮
        aspect.after(arcgisonline.map.dijit.toc.options, 'showTocTools', function() {
            if (arguments && arguments.length > 1) {
                var originalArgu = arguments[1];
                if (originalArgu && originalArgu.length > 1) {
                    var analysisBtn = dom.byId(originalArgu[0] + "_" + originalArgu[1] + "_performAnalysisPlaceholder");
                    if (analysisBtn) {
                        domStyle.set(analysisBtn, 'display', 'none');
                    }
                }
            }
        });
    }

    function _updateLoginStatus() {
        var leftPanel = arcgisonline.map.leftPanel;
        leftPanel.openLeftTOCPanel();
        leftPanel.showLeftContentPanel();

        var user = arcgisonline.sharing.util.getUser();
        if (user) {
            dom.byId('banner-user').innerHTML = user.fullName || user.email;
            domStyle.set(dom.byId('user-login-link'), 'display', 'none');
            domStyle.set(dom.byId('user-logout-link'), 'display', '');
        } else {
            domStyle.set(dom.byId('user-logout-link'), 'display', 'none');
            domStyle.set(dom.byId('link-user-content'), 'display', 'none');
        }

        _adjustTab();
    }

    function _showLayerDescription() {
        var a;
        if (this.isTable) {
            a = this.mapTables[this.menuLayerPos];
        } else {
            a = this.mapLayers[this.menuLayerPos];
        }

        if (a.itemId && a.itemCard) {
            window.open("item.html?id=" + a.itemId + "&activeMenu=dataGallery");
        } else {
            if (a.layer instanceof esri.layers.WMSLayer) {
                window.open(a.url + (-1 < a.url.indexOf("?") ? "\x26" : "?") + "SERVICE\x3dWMS\x26REQUEST\x3dGetCapabilities");
            } else if ("base" === a.type) {
                _showBasemapDescription.apply(this);
            } else {
                this._openServiceUrl();
            }
        }
    }

    function _showBasemapDescription() {
        var a = this.mapLayers[this.menuLayerPos];
        var c;
        var d;

        if (this.basemapGalleryItems) {
            for (c = false, d = 0; d < this.basemapGalleryItems.length; d++)
                if (this.basemapGalleryItems[d].title == a.title) {
                    window.open("item.html?id=" + this.basemapGalleryItems[d].id + '&activeMenu=dataGallery');
                    c = true;
                    break;
                }
            if (!c) {
                this._openServiceUrl();
            }
        } else {
            var e = function(b, c) {
                if (b.results && 0 < b.results.length) {
                    this.basemapGalleryItems = b.results;
                    for (var d = false, e = 0; e < this.basemapGalleryItems.length; e++)
                        if (this.basemapGalleryItems[e].title == a.title) {
                            window.open("item.html?id\x3d" + this.basemapGalleryItems[e].id + '&activeMenu=dataGallery');
                            d = true;
                            break;
                        }
                    if (!d) {
                        this._openServiceUrl();
                    }
                } else {
                    this._openServiceUrl();
                }
            };
            c = function(a, c) {
                if (a && 0 < a.total) {
                    arcgisonline.sharing.geow.Content.search(esriGeowConfig.restBaseUrl + "search", {
                        q: "group:" + a.results[0].id + ' AND (type:"web map" -type:"web mapping application")',
                        num: "50"
                    }, dojo.hitch(this, e), dojo.hitch(this, e));
                } else {
                    this._openServiceUrl();
                }
            };
            arcgisonline.sharing.geow.Community.searchGroups(esriGeowConfig.basemapGalleryGroupQuery, dojo.hitch(this, c), dojo.hitch(this, c));
        }
    }

    function initMapViewer() {
        var destroyOverviewMapTimer = setInterval(function() {
            if (arcgisonline.map.main.overviewMap) {
                clearInterval(destroyOverviewMapTimer);
                arcgisonline.map.main.overviewMap.destroyRecursive();
            }
        }, 1E2);

        request.post(window.configOptions.baseOprUrl + '/platform/query/domain', {
            data: dojo.toJson({
                domain: window.location.host
            }),
            timeout: 10000,
            handleAs: 'json',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=utf-8'
            }
        }).then(function(resp) {
            if (resp.result && resp.code === '200') {
                if (resp.data && resp.data.title) {
                    document.title = resp.data.title;
                    esriGeowConfig.portalName = resp.data.title;
                    dom.byId('sys-brand-text').innerHTML = resp.data.title;
                }
            }
        });
    }

    function loadConnections() {
        on(dom.byId('flapIcon'), 'click', function() {
            if (arcgisonline.map.leftPanel.getLeftContentPanelStack() === 'contentStack') {
                arcgisonline.map.leftPanel.hideLeftContentPanel();
                domStyle.set(dom.byId('flapIconNode'), 'transform', 'rotate(0deg)');
            } else {
                arcgisonline.map.leftPanel.showLeftContentPanel();
                domStyle.set(dom.byId('flapIconNode'), 'transform', 'rotate(180deg)');
            }
        });

        aspect.before(arcgisonline.map.main, 'initMapProperties', function() {
            var token = arcgisonline.sharing.util.getToken();
            var currUser = arcgisonline.sharing.util.getUser();
            var objUrl = arcgisonline.sharing.util.urlToObject(document.URL);
            objUrl.query = objUrl.query || {};
            var openamCookie;

            if (!token) {
                if (objUrl.query.webmap || objUrl.query.layer) {
                    // 用户未登录，重定向到统一认证登录页面
                    openamCookie = getCookie(window.configOptions.openamKey);
                    if (!openamCookie || openamCookie === 'null') {
                        window.location = 'openam_auth.html?returnUrl=' + encodeURIComponent(window.location.href);
                    } else {
                        request.get(window.configOptions.validateToken + "?tokenId=" + openamCookie, {
                            timeout: 10000,
                            handleAs: 'json',
                            sync: true,
                            headers: {
                                'Content-Type': 'application/x-www-form-urlencoded'
                            }
                        }).then(function(resp) {
                            var usertype = resp.type;
                            var portalid = resp.portalId;
                            if (!portalid) {
                                window.location = 'openam_auth.html?returnUrl=' + encodeURIComponent(window.location.href);
                            }
                            var tmpIndex = portalid.lastIndexOf(".");
                            portalid = portalid.substr(0, tmpIndex);
                            var currentDomain = window.location.host;
                            if (currentDomain == portalid) {
                                window.location = 'openam_auth.html?returnUrl=' + encodeURIComponent(window.location.href);
                            } else {
                                if (usertype == 3) {
                                    alert('"权限不足，请在其他系统先退出！"');
                                    window.close();
                                }
                                if (usertype == 2) {
                                    if (portalid == window.configOptions.cityPlatformDomain) {
                                        window.history.back();
                                    } else {
                                        if (currentDomain == window.configOptions.cityPlatformDomain) {
                                            window.location = 'openam_auth.html?returnUrl=' + encodeURIComponent(window.location.href);
                                        } else {
                                            alert('"权限不足，请在其他系统先退出！"');
                                            window.close();
                                        }
                                    }
                                }
                            }
                        });
                    }
                } else {
                    openamCookie = getCookie(window.configOptions.openamKey);
                    if (openamCookie && openamCookie !== 'null') {
                        request.get(window.configOptions.validateToken + "?tokenId=" + openamCookie, {
                            timeout: 10000,
                            handleAs: 'json',
                            sync: true,
                            headers: {
                                'Content-Type': 'application/x-www-form-urlencoded'
                            }
                        }).then(function(resp) {
                            var usertype = resp.type;
                            var portalid = resp.portalId;
                            if (!portalid) {
                                window.location = 'openam_auth.html?returnUrl=' + encodeURIComponent(window.location.href);
                            }
                            var tmpIndex = portalid.lastIndexOf(".");
                            portalid = portalid.substr(0, tmpIndex);
                            var currentDomain = window.location.host;
                            if (currentDomain == portalid) {
                                window.location = 'openam_auth.html?returnUrl=' + encodeURIComponent(window.location.href);
                            } else {
                                if (usertype == 3) {
                                    alert('权限不足，系统将返回首页！');
                                    window.location.href = 'index.html';
                                }
                                if (usertype == 2) {
                                    if (portalid == window.configOptions.cityPlatformDomain) {
                                        window.history.back();
                                    } else {
                                        if (currentDomain == window.configOptions.cityPlatformDomain) {
                                            window.location = 'openam_auth.html?returnUrl=' + encodeURIComponent(window.location.href);
                                        } else {
                                            alert('"权限不足，系统将返回首页！"');
                                            window.location.href = 'index.html';
                                        }
                                    }
                                }
                            }
                        });
                    }
                }
            }
        });

        on(dom.byId('esrichina-toolbar-arrow'), 'click', _showHideExtraTools);
        on(dom.byId('esrichina-tool-new'), 'click', _newWebmap);
        on(dom.byId('esrichina-tool-add-weblayer'), 'click', _addLayerFromWeb);
        on(dom.byId('esrichina-tool-add-filelayer'), 'click', _addLayerFromFile);
        on(dom.byId('esrichina-tool-add-feature'), 'click', _addWebmapFeature);
        on(dom.byId('esrichina-tool-bookmark'), 'click', _showBookmark);
        on(dom.byId('user-login-link'), 'click', _signin);
        on(dom.byId('user-logout-link'), 'click', _signout);
        dom.byId('user-logout-link').href = window.configOptions.signoutPath;
    }

    function _showHideExtraTools() {
        if (domStyle.get(dom.byId('esrichina-toolbar-extra'), 'width') === 0) {
            domStyle.set(dom.byId('esrichina-toolbar-extra'), 'width', '423px');
            domStyle.set(dom.byId('esrichina-toolbar-arrow'), 'background-position', '-48px -10px');
        } else {
            domStyle.set(dom.byId('esrichina-toolbar-extra'), 'width', 0);
            domStyle.set(dom.byId('esrichina-toolbar-arrow'), 'background-position', '-62px -10px');
        }
    }

    function _newWebmap(a) {
        if (a) a.preventDefault();
        var mapViewerUrl = esriGeowConfig.baseUrl + "viewer/mapViewer.html";
        if (arcgisonline.map.main.mapHasChanged) {
            arcgisonline.sharing.dijit.dialog.OpenMapDlg.prototype.statics.getInstance()
                .show(mapViewerUrl, null, arcgisonline.map.main.mapLayers,
                    arcgisonline.map.main.mapTables,
                    arcgisonline.map.save_open.webMapInfo ? arcgisonline.map.save_open.webMapInfo.title : null);
        } else {
            window.location = mapViewerUrl;
        }
    }

    function _addLayerFromWeb() {
        dijit.byId('webmap-add-layer-url').onClick();
    }

    function _addLayerFromFile() {
        dijit.byId('webmap-add-layer-file').onClick();
    }

    function _addWebmapFeature() {
        dijit.byId('leftTabContainer').selectChild('leftTocContentPane');
        dijit.byId('webmap-add-mapnotes').onClick();
    }

    function _showBookmark() {
        var token = arcgisonline.sharing.util.getToken();
        if (!token) {
            arcgisonline.map.main.signIn();
        } else {
            if ("block" == dojo.style(dom.byId("bookmarksDiv"), "display")) {
                arcgisonline.map.main.hideBookmarksTool();
            } else {
                arcgisonline.map.main.hideDropdowns();
                var a = dojo.coords(dojo.byId("esrichina-tool-bookmark"));
                domStyle.set(dom.byId("bookmarksDiv"), "left", document.body.clientWidth - 110 - 247 + 'px');
                domStyle.set(dom.byId("bookmarksDiv"), "display", "block");
                domStyle.set(dom.byId("bookmarksDiv"), "top", a.y + a.h + 20 + "px");
            }
        }
    }

    function _signin() {
        var openamCookie = getCookie(window.configOptions.openamKey);
        if (!openamCookie || openamCookie === 'null') {
            arcgisonline.map.main.signIn();
        } else {
            request.get(window.configOptions.validateToken + "?tokenId=" + openamCookie, {
                timeout: 10000,
                handleAs: 'json',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }).then(function(resp) {
                var usertype = resp.type;
                var portalid = resp.portalId;
                if (!portalid) {
                    arcgisonline.map.main.signIn();
                }
                var tmpIndex = portalid.lastIndexOf(".");
                portalid = portalid.substr(0, tmpIndex);
                var currentDomain = window.location.host;
                if (currentDomain == portalid) {
                    arcgisonline.map.main.signIn();
                } else {
                    if (usertype == 3) {
                        alert("权限不足，请在其他系统先退出！");
                    }
                    if (usertype == 2) {
                        if (portalid == window.configOptions.cityPlatformDomain) {
                            alert("权限不足，请在其他系统先退出！");
                        } else {
                            if (currentDomain == window.configOptions.cityPlatformDomain) {
                                arcgisonline.map.main.signIn();
                            } else {
                                alert("权限不足，请在其他系统先退出！");
                            }
                        }
                    }
                }
            });
        }
    }

    function _signout() {
        document.cookie = window.configOptions.openamKey + "=null;domain=.szhy.cn;expires=Session;path=/";
    }

    /**
     * 根据当前页面宽度调整左侧tab标签的宽度
     * @return {[type]} [description]
     */
    function _adjustTab() {
        var leftWidth = arcgisonline.map.leftPanel.leftPanelWidth,
            tabWidth = Math.floor(leftWidth / 3);

        query('.dijitTabListWrapper .dijitTab', dijit.byId('leftTabContainer').domNode)
            .forEach(function(tab) {
                domStyle.set(tab, "width", tabWidth + 'px');
            });

        // 设置系统标题栏宽度
        var headerWidth = dojo.coords(dom.byId('webmap-header')).w;
        var logoWidth = dojo.coords(dom.byId('navbar-logo')).w;
        var titleWidth = dojo.coords(dom.byId('webmap-title-text')).w;
        var sysTitleWidth = headerWidth - logoWidth - titleWidth - 410 - 30 - 10;
        domStyle.set(dom.byId('navbar-sys-title'), 'width', sysTitleWidth + 'px');
        // END of 设置系统标题栏宽度

        // 设置导航栏宽度
        var userControlWidth = dojo.coords(dom.byId('user-control')).w;
        var naviWidth = headerWidth - userControlWidth - 30 - 10;
        domStyle.set(dom.byId('navbar-navi'), 'width', naviWidth + 'px');
        // END of 设置导航栏宽度
    }

    function _initMapViewer() {
        _setWebmapTitle();
        _initBasemapToggle();
    }

    function _setWebmapTitle() {
        // if (arcgisonline.map.save_open.webMapInfo) {
        //     dom.byId('mapviewer-title').innerHTML = arcgisonline.map.save_open.webMapInfo.title;
        // }
    }

    function _initBasemapToggle() {
        // 工具栏 - 底图
        on(dom.byId('esrichina-tool-basemap'), 'click', function() {
            arcgisonline.map.main.hideDropdowns("basemapGallery");
            dijit.byId("basemap-gallery").groupQuery = esriGeowConfig.basemapGalleryGroupQuery;
            dijit.byId("basemap-gallery").open();

            var coor = dojo.coords(dom.byId('esrichina-toolbar'));
            domStyle.set(dom.byId("basemap-gallery"), "left", document.body.clientWidth - 25 - 387 + "px");
            domStyle.set(dom.byId("basemap-gallery"), "top", coor.y + coor.h + 20 + "px");
        });
    }
});
