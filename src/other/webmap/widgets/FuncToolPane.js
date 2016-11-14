/*
 * @Author: Esri
 * @Date:   2016-03-31 17:29:38
 * @Last Modified by:   Esri
 * @Last Modified time: 2016-11-01 10:10:40
 */

define([
    "dojo/_base/declare",
    "dijit/_WidgetBase",
    "mapwidgets/FuncToolItems",
    "mapwidgets/CustomAnalysisCategory"
], function(declare, _WidgetBase) {
    return declare("mapwidgets.FuncToolPane", [_WidgetBase], {

        _currentSelectedTool: null,

        startup: function() {
            this._buildStack();
        },

        _buildStack: function() {
            this.sc = new dijit.layout.StackContainer({
                id: 'funcPoolContentStack',
                style: 'width: 100%; border: none; height: 100%; margin: 0; padding: 0;',
                region: 'center',
                isLayoutContainer: true
            });
            dijit.byId('funcPoolContentPane').addChild(this.sc);
        },

        setCurrentTool: function(toolname) {
            this._currentSelectedTool = toolname;
        },

        showFuncPoolItems: function() {
            if (!this.itemsStack) {
                this.itemsStack = new dijit.layout.BorderContainer({
                    id: "itemsStack",
                    region: "top",
                    isLayoutContainer: true,
                    style: "margin:0; padding:0; overflow-y: scroll;"
                });
                this.sc.addChild(this.itemsStack);
                var funcToolItems = new mapwidgets.FuncToolItems({
                    id: "funcPoolItemsPane",
                    region: 'top',
                    onselect: dojo.hitch(this, this.onFuncPoolItemSelect)
                });
                funcToolItems.placeAt(this.itemsStack);
            }
            this.sc.startup();
            this.sc.selectChild(this.itemsStack);
            this.sc.resize();
        },

        onFuncPoolItemSelect: function(evt, tool) {
            this._currentSelectedTool = tool;

            if (!esri.dijit.analysis.utils.i18n) {
                esri.dijit.analysis.utils.initI18n();
            }

            var n = esri.dijit.analysis.utils.i18n;
            var token = arcgisonline.sharing.util.getToken();
            if (!token) {
                arcgisonline.sharing.dijit.dialog.GeneralDlg.prototype.statics.getInstance().show({
                    title: n.errorTitle,
                    message: '请先登录'
                });
                return;
            }


            // var msg;
            // var e = tool.charAt(0).toLowerCase() + tool.substring(1);

            // if (-1 !== dojo.indexOf(["CreateDriveTimeAreas", "PlanRoutes", "ConnectOriginsToDestinations"], tool)) {
            //     msg = dojo.string.substitute(n.selectPointLayer, { toolName: n[e] });
            // } else if ("AggregatePoints" === tool || "InterpolatePoints" === tool) {
            //     msg = dojo.string.substitute(n.selectPointLayer, { toolName: n[e] });
            // } else if ("CalculateDensity" === tool) {
            //     msg = dojo.string.substitute(n.areaFeatureInvalidMsg, { toolName: n[e] });
            // } else if ("FindHotSpots" === tool) {
            //     msg = dojo.string.substitute(n.hotspotsLineFeatureMsg, { toolName: n[e] });
            // } else if (-1 !== dojo.indexOf(['OverlayLayers', 'AggregatePoints', 'SummarizeWithin', 'SummarizeNearby', 'FindNearest', 'MergeLayers'], tool)) {
            //     msg = dojo.string.substitute(n.overlayValidationMsg, { toolName: n[e] });
            // } else if ("ConnectOriginsToDestinations" === tool) {
            //     msg = dojo.string.substitute(n.odPointMsg, { toolName: n[e] });
            // } else if ("AggregatePoints" === tool) {
            //     msg = dojo.string.substitute(n.aggregatePolyMsg, { toolName: n[e] });
            // } else if ("MergeLayers" === tool) {
            //     msg = dojo.string.substitute(n.mergeValidationMsg, { toolName: n[e] });
            // } else if ("SummarizeWithin" === tool || "DissolveBoundaries" === tool) {
            //     msg = dojo.string.substitute(n.selectPolyLayer, { toolName: n[e] });
            // } else if ("ExtractData" === tool) {
            //     msg = dojo.string.substitute(n.extractValidationMsg, { toolName: n[e] });
            // } else if ("ConnectOriginsToDestinations" === tool) {
            //     msg = dojo.string.substitute(n.odPointMsg, { toolName: n[e] });
            // }

            arcgisonline.sharing.dijit.dialog.GeneralDlg.prototype.statics.getInstance().show({
                title: n.errorTitle,
                message: '地图中未包含任何指定的图层，请先添加图层'
            });
        },

        configureAnalysis: function() {
            var c = [],
                g, m,
                r = [],
                e = arcgisonline.map.dijit.toc.analysis.mapLayer;
            arcgisonline.map.dijit.toc.analysis.clear();
            arcgisonline.map.dijit.toc.analysis._setAnalysisHandlers();
            dojo.forEach(arcgisonline.map.main.mapLayers.slice(0), function(a) {
                if (arcgisonline.map.dijit.toc.analysis.isAnalysisLayer(a)) {
                    r.push(arcgisonline.map.dijit.toc.analysis._getLayers(a));
                }
            });
            (new dojo.promise.all(r)).then(function(f) {
                d = dojo.mixin([], f.reverse());

                dojo.forEach(f, function(a) {
                    e && a.id === e.id && (g = a);
                });
                dojo.forEach(d, function(a, c) {
                    var e = arcgisonline.sharing.util.getUser(),
                        f = "mapNotes" === a.type,
                        h = a.layer instanceof esri.layers.GeoRSSLayer,
                        n = a.layer instanceof esri.layers.CSVLayer,
                        q = arcgisonline.map.featColl.isFeatureCollection(a) && !f;
                    if (arcgisonline.map.dijit.toc.analysis.isHostedFeatureLayer(a)) {
                        if (a.layer && a.layer.fields) {
                            var r = arcgisonline.map.popup.getPopupInfo(a, null);
                            dojo.forEach(a.layer.fields, function(a) {
                                a.alias = arcgisonline.map.dijit.toc.analysis.getLabelFromPopup(r, a.name) || a.alias;
                            });
                        }

                        h || n ? (a.userIsAdmin = !0,
                            a.layer.capabilities ? -1 === a.layer.capabilities.indexOf("Extract") && (a.layer.capabilities += ",Extract") : a.layer.capabilities = "Extract") : f || q ? (a.userIsAdmin = !0,
                            a.layers && 0 < a.layers.length ? a.layers = b.map(a.layers, function(a) {
                                a.capabilities ? -1 === a.capabilities.indexOf("Extract") && (a.capabilities += ",Extract") : a.capabilities = "Extract";
                                return a
                            }) : (a.userIsAdmin = !0,
                                a.layer.capabilities ? -1 === a.layer.capabilities.indexOf("Extract") && (a.layer.capabilities += ",Extract") :
                                a.layer.capabilities = "Extract")) : esriGeowConfig.userRole.isAdmin() && a.url && -1 < a.url.indexOf("/" + e.accountId + "/") ? (a.userIsAdmin = !0,
                            a.layer.capabilities ? -1 === a.layer.capabilities.indexOf("Extract") && (a.layer.capabilities += ",Extract") : a.layer.capabilities = "Extract") : e && (a.itemCard && a.itemCard.owner && a.itemCard.owner === e.email && -1 < a.url.indexOf("/" + e.accountId + "/")) && (a.userIsAdmin = !0,
                            a.layer.capabilities ? -1 === a.layer.capabilities.indexOf("Extract") && (a.layer.capabilities += ",Extract") : a.layer.capabilities =
                            "Extract");
                        g && g.id === a.id && (g = dojo.mixin({}, a),
                            q && (g.layers && 0 < g.layers.length) && (g.layer = g.layers[arcgisonline.map.dijit.toc.analysis.menuSubLayerPos],
                                delete g.layers))
                    } else if (a.layer instanceof esri.layers.KMLLayer && arcgisonline.map.dijit.toc.analysis._kmlFcollbycurfolder && 0 < arcgisonline.map.dijit.toc.analysis._kmlFcollbycurfolder.length && arcgisonline.map.dijit.toc.analysis._kmlAnalysisLayer && arcgisonline.map.dijit.toc.analysis._kmlAnalysisLayer.id === a.id) {
                        var s = [];
                        b.forEach(arcgisonline.map.dijit.toc.analysis._kmlFcollbycurfolder,
                            function(c, d) {
                                var e, f;
                                e = new esri.layers.FeatureLayer(b.clone(c), {
                                    mode: esri.layers.FeatureLayer.MODE_SNAPSHOT
                                });
                                arcgisonline.map.dijit.toc.analysis._isKmlNetworkLinkFolder ? (e.name = arcgisonline.map.dijit.toc.analysis._kmlAnalysisLayer.name,
                                    e.id = a.id) : (f = a.layer.folders[arcgisonline.map.dijit.toc.analysis.menuSubLayerPos],
                                    e.name = a.title + "_" + f.name,
                                    e.id = f.name);
                                s.push(e)
                            });
                        dojo.forEach(s, function(b, e) {
                            1 < s.length && b.geometryType === m && g.id === a.id ? (g = {},
                                    g.layer = b,
                                    g.title = b.name,
                                    a = g,
                                    d.splice(c, 1, g)) : g.id ===
                                a.id && 0 === e && (g = {},
                                    g.layer = s[0],
                                    g.title = s[0].name,
                                    a = g,
                                    d.splice(c, 1, g))
                        })
                    }
                });
                if (arcgisonline.map.dijit.toc.analysis._kmlFcollbycurfolder &&
                    (0 < arcgisonline.map.dijit.toc.analysis._kmlFcollbycurfolder.length &&
                        arcgisonline.map.dijit.toc.analysis._kmlAnalysisLayer)) {
                    d = b.filter(d, function(a) {
                        return !(a.layer instanceof esri.layers.KMLLayer);
                    });
                }
                c = {
                    analysisLayer: g,
                    featureLayers: d
                };

                if (m) {
                    c.analysisType = m;
                }
                // a && a.showSelectedCategory && (c.showSelectedCategory = a.showSelectedCategory);
                // arcgisonline.map.leftPanel.openLeftAnalysisPanel(c)
                arcgisonline.map.esrichina_functoolpane.showCustomAnalysisCategory(c);
            });
        },

        showCustomAnalysisCategory: function(a) {
            window.require(["arcgisonline/analysis"], dojo.hitch(this, function() {
                if (!this.analysisStack) {
                    this.analysisStack = new dijit.layout.BorderContainer({
                        id: "analysisStack1",
                        region: "top",
                        style: "margin:0; padding:0; overflow-y: auto;",
                        splitter: false,
                        gutters: false
                    });
                    this.sc.addChild(this.analysisStack);
                }

                if (this.analysisPanel) {
                    if (a.showSelectedCategory) {
                        this._prevSelectedCategory = this.analysisPanel.analysisTool.get("selectedCategory");
                    }
                    this.analysisPanel.destroy();
                }
                var b = {
                    id: "analysisPanel1",
                    containerNode: this.analysisStack,
                    analysisLayer: a.analysisLayer,
                    featureLayers: a.featureLayers,
                    region: "top"
                };
                if (a.showSelectedCategory && this._prevSelectedCategory) {
                    b.selectedCategory = this._prevSelectedCategory;
                }

                if (a.analysisType) {
                    b.analysisType = a.analysisType;
                }
                this.analysisPanel = new mapwidgets.analysisCategory(b);
                this.sc.startup();
                this.sc.selectChild(this.analysisStack);
                this.sc.resize();
                this.analysisPanel.adjustHeight();
                dijit.byId("webmap-details").set("checked", false);
                dijit.byId("webmap-add").set("checked", false);
                dijit.byId("webmap-edit").set("checked", false);
            }));
        },

        show_tool: function(a) {
            require(["arcgisonline/analysis"], dojo.hitch(this, function() {
                this.toolStack || (this.toolStack = new dijit.layout.BorderContainer({
                    id: "funcToolStack",
                    isLayoutContainer: true,
                    region: "top",
                    style: "margin:0; padding:0;",
                    splitter: !1,
                    gutters: !1
                }));
                var funcPoolContainer = dijit.byId('funcPoolContainer'),
                    c = [],
                    d = [],
                    e = 0,
                    f = [],
                    g,
                    that = this;
                dojo.forEach(a.featureLayers, function(a) {
                    var e = a.layer instanceof esri.layers.ArcGISDynamicMapServiceLayer;
                    a.layer instanceof esri.layers.ArcGISTiledMapServiceLayer || e ? (a.flayers = dojo.map(a.flayers,
                                function(b) {
                                    b.name && -1 === b.name.indexOf("-") && (b.name = a.title + "-" + b.name);
                                    return b
                                }),
                            c = c.concat(a.flayers)) : a.layers && 0 < a.layers.length ? (d = dojo.filter(a.layers, function(b) {
                                b.graphics && 0 < b.graphics.length && (b.name && -1 === b.name.indexOf("(")) && (b.name = a.title + " (" + b.name + ")");
                                b.timeInfo && (a.serviceInfo && a.serviceInfo.useStandardizedQueries) && (b._useStandardizedQueries = a.serviceInfo.useStandardizedQueries);
                                return b.graphics && 0 < b.graphics.length
                            }),
                            c = c.concat(d)) : a.layer instanceof esri.layers.GeoRSSLayer ?
                        (e = a.layer.getFeatureLayers(),
                            e = dojo.filter(e, function(b) {
                                if (b.graphics && 0 < b.graphics.length && (!b.name || b.name && -1 === b.name.indexOf("(")))
                                    b.name = a.title + " (" + (b.name ? b.name : "esriGeometryPoint" === b.geometryType ? '点' : "esriGeometryPolygon" === b.geometryType ? '区域' : '线') + ")"; - 1 !== a.layer.capabilities.toLowerCase().indexOf("extract") && (b.capabilities = 0 < b.capabilities.length ? b.capabilities + ",Extract" : "Extract");
                                return b.graphics && 0 < b.graphics.length
                            }, this),
                            c = c.concat(e)) : (a.layer.name =
                            a.title,
                            a.layer && (a.layer.timeInfo && a.serviceInfo && a.serviceInfo.useStandardizedQueries) && (a.layer._useStandardizedQueries = a.serviceInfo.useStandardizedQueries),
                            c.push(a.layer))
                }, this);
                this.toolPanel || (this.toolPanel = new arcgisonline.map.dijit.AnalysisTool({
                    id: "funcToolPanel",
                    isLayoutContainer: true,
                    containerNode: this.toolStack,
                    region: "center",
                    featureLayers: c,
                    _onClose: function() {
                        arcgisonline.map.dijit.AnalysisTool.prototype._onClose.apply(this);
                        arcgisonline.map.leftPanel.openLeftTOCPanel();
                        arcgisonline.map.leftPanel.showLeftContentPanel();
                        that.sc.selectChild(that.analysisStack);
                    }
                }));
                this.toolPanel.get("currentTool") && esri.hide(this.toolPanel.get("currentTool").domNode);
                var n = {
                        toolName: a.toolName,
                        featureLayers: c,
                        analysisLayer: g
                    },
                    q = arcgisonline.sharing.util.isPortal();
                a.analysisType && (n.analysisType = a.analysisType);
                if ((n && n.analysisLayer && !q || q) && !this.toolPanel.isValidAnalysisLayer(n)) return false;
                this.toolPanel.set('currentTool', n);
                this.sc.addChild(this.toolStack);
                this.sc.selectChild(this.toolStack);
                this.sc.resize();
                var funcToolPanelCoor = dojo.coords(dojo.byId("funcPoolDiv")).h;
                var footerLinkCoor = dojo.coords(dojo.byId("aggrfooter_links")).h + 10;
                dojo.style(this.toolPanel.aggrFooterPane.domNode, "height", footerLinkCoor + "px");
                dojo.style(this.toolPanel.aggregateToolContentPane.domNode, "height", funcToolPanelCoor - footerLinkCoor + "px");
            }));
        }
    });
});
