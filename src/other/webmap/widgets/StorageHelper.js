/*
 * @Author: Esri
 * @Date:   2016-05-11 15:42:53
 * @Last Modified by:   Esri
 * @Last Modified time: 2016-07-19 15:10:55
 */

define([
    "dojo/request"
], function(request) {
    mapwidgets.storage = {
        saveMapInCookie: function(b, c, l, a, g) {
            if (arcgisonline.map.main.map && arcgisonline.map.main.map.extent) {
                var f = arcgisonline.sharing.util.getUser(),
                    d = new Date();
                if (c || !(arcgisonline.map.storage.lastCookieSave && 5E3 > d.getTime() - arcgisonline.map.storage.lastCookieSave.getTime())) {
                    arcgisonline.map.storage.lastCookieSave = d;
                    var k = arcgisonline.map.storage.buildWebMapText(true),
                        h = [];
                    dojo.forEach(arcgisonline.map.main.mapLayers, function(a) {
                        if (a.editTrackingFilter && (a.editTrackingFilter.user || a.editTrackingFilter.time)) {
                            h.push({
                                id: a.id,
                                filter: a.editTrackingFilter
                            });
                            k.editTrackingFilter = h;
                        }
                    });
                    var m = [];
                    dojo.forEach(arcgisonline.map.main.mapLayers, function(a) {
                        if (a.layer && "esri.layers.FeatureLayer" == a.layer.declaredClass &&
                            a.layer.url && (arcgisonline.sharing.util.isHostedService(a.layer.url) ||
                                10.1 <= a.layer.version) &&
                            !a.layer.queryPagination && !a.featureLimitExceededHandler) {
                            m.push({
                                id: a.id
                            });
                            k.featureLimitReachedDlgDisabled = m;
                        }
                    });
                    d = arcgisonline.map.main.map.extent;
                    if (null !== arcgisonline.map.main.mapLods) {
                        d = d.expand(0.9);
                    }
                    k.e1 = d.xmin;
                    k.e2 = d.ymin;
                    k.e3 = d.xmax;
                    k.e4 = d.ymax;
                    k.mapLods = arcgisonline.map.main.mapLods;
                    k.i = arcgisonline.map.save_open.webMapInfo;

                    if (k.i && (k.i.description && 0 < k.i.description.length)) {
                        k.i.description = "_r_";
                    }
                    k.f = arcgisonline.map.save_open.folderId;
                    k.t = document.getElementById("webmap-title-text").innerHTML;
                    if (k.t == esri.i18nBundle.viewer.defaultMapTitle) {
                        k.t = "";
                    }
                    k.p = arcgisonline.map.leftPanel.getLeftContentPanelStack();
                    if ("popupStack" === k.p) {
                        k.pi = {};
                        k.pi.type = "view";
                        k.pi.layerId = dijit.byId("popupPanel").layerId;
                        k.pi.subLayerId = dijit.byId("popupPanel").subLayerId;
                    }
                    k.pw = dojo.style(dojo.byId("leftDiv"), "width");
                    if ("addContentStack" == k.p) {
                        k.pt = dijit.byId("addContentSearchFrom").get("value");
                        k.pu = dijit.byId("addContentSearchURL").get("value");
                        k.px = dijit.byId("addContentSearchText").get("value");
                        if (k.px == esri.i18nBundle.addContentPanel.keywordSample) {
                            k.px = "";
                        }
                        k.pe = dijit.byId("addContentPanel").queryExecuted;
                    }
                    k.l = arcgisonline.map.geocode.getValue() || "";
                    if (!f && ("save" == b || "saveAs" == b)) k.s = b;
                    k.c = arcgisonline.map.main.mapHasChanged;
                    if ((b = arcgisonline.sharing.util.urlToObject(document.URL).query) && b.timeExtent) {
                        k.timeExtent = b.timeExtent;
                    }
                    k.geocoderIndex = arcgisonline.map.geocode.getActiveSource();
                    b = arcgisonline.map.dijit.toc.analysis.getJobsList();
                    if (esri.isDefined(b) && 0 < b.length) {
                        k.runningAnalysisJobs = b;
                    }
                    k.modifyMapAllowed = "none" === dojo.style(dojo.byId("header_map_modifyMap"), "display");
                    var n = function(a) {
                            if (a) {
                                q();
                            } else {
                                g();
                            }
                        },
                        q = function(a) {
                            if (!a && arcgisonline.map.main.mapHasChanged)
                                if (arcgisonline.sharing.util.getUser()) {
                                    a = arcgisonline.sharing.dijit.dialog.ChoiceDlg.prototype.statics.getInstance();
                                    a.show({
                                        title: esri.i18nBundle.viewer.webMap,
                                        message: esri.i18nBundle.viewer.save_open.leavingPageWarningSignedIn,
                                        choiceOneTitle: esri.i18nBundle.viewer.save_open.leavingPageWarningSignedInYesBtn,
                                        choiceOneHandler: dojo.hitch(this, function() {
                                            g();
                                        }),
                                        choiceTwoTitle: esri.i18nBundle.viewer.save_open.leavingPageWarningSignedInNoBtn,
                                        choiceTwoHandler: dojo.hitch(this, function() {})
                                    });
                                } else {
                                    a = arcgisonline.sharing.dijit.dialog.GeneralDlg.prototype.statics.getInstance();
                                    var b = dojo.connect(a, "onOkClick", dojo.hitch(this, function() {
                                        dojo.disconnect(b);
                                        g();
                                    }));
                                    a.show({
                                        title: esri.i18nBundle.viewer.webMap,
                                        message: esri.i18nBundle.viewer.save_open.leavingPageWarning
                                    });
                                }
                            else g();
                        };
                    b = dojo.json.stringify(k);
                    (dojo.isIE && 4864E3 < b.length || 5101E3 < b.length) && c ? arcgisonline.map.main.mapHasChanged && arcgisonline.map.save_open.webMapInfo && f && f.email && arcgisonline.map.save_open.webMapInfo.owner === f.email ? (arcgisonline.sharing.dijit.dialog.ChoiceDlg.prototype.statics.getInstance().show({
                                title: esri.i18nBundle.viewer.save_open.saveWebMapTitle,
                                message: esri.i18nBundle.viewer.save_open.wantToLeave,
                                choiceOneTitle: esri.i18nBundle.viewer.save_open.saveChangesBtn,
                                choiceOneHandler: dojo.hitch(this, function() {
                                    var a;
                                    if (arcgisonline.map.save_open.webMapInfo.owner ==
                                        f.email) {
                                        a = dojo.subscribe("onSaveExistingWebMap", function(b) {
                                            dojo.unsubscribe(a);
                                            if (b == arcgisonline.map.save_open.webMapInfo.id && l) {
                                                l();
                                            }
                                            if (b == arcgisonline.map.save_open.webMapInfo.id && g) {
                                                n();
                                            }
                                        });
                                        arcgisonline.map.storage.saveExistingWebMap(true);
                                    } else {
                                        a = dojo.subscribe("onWebMapSave", function(b) {
                                            dojo.unsubscribe(a);
                                            if (b == arcgisonline.map.save_open.webMapInfo.id && l) {
                                                l();
                                            }
                                            if (b == arcgisonline.map.save_open.webMapInfo.id && g) {
                                                n();
                                            }
                                        });
                                        arcgisonline.map.storage.canSaveWithBing();
                                        mapwidgets.SaveToolDlg.prototype.statics.getInstance().addWebMapItem(
                                            arcgisonline.map.main.mapLayers,
                                            arcgisonline.map.main.map.extent,
                                            arcgisonline.map.save_open.folderId,
                                            arcgisonline.map.save_open.webMapInfo);
                                    }
                                }),
                                choiceTwoTitle: esri.i18nBundle.viewer.save_open.dontSaveChangesBtn,
                                choiceTwoHandler: dojo.hitch(this, function() {
                                    k.webMapId = arcgisonline.map.save_open.webMapInfo.id;
                                    delete k.operationalLayers;
                                    delete k.baseMap;
                                    delete k.widgets;
                                    delete k.version;
                                    delete k.p;
                                    var b = dojo.json.stringify(k);
                                    arcgisonline.map.storage.deleteMapStorageNoFeedback();
                                    sessionStorage.setItem("Esri_webmap", b);
                                    if (a) {
                                        a(true);
                                    }
                                    if (g) {
                                        q(true);
                                    }
                                })
                            }),
                            c = esri.i18nBundle.viewer.save_open.saveChangesBtn.length + esri.i18nBundle.viewer.save_open.dontSaveChangesBtn.length, dojo.style(dojo.byId("choice-dialog"), "width", Math.min(10 * c + 150, 650) + "px")) : arcgisonline.map.save_open.webMapInfo && f && arcgisonline.map.save_open.webMapInfo.owner === f.email ? (k.webMapId = arcgisonline.map.save_open.webMapInfo.id, delete k.operationalLayers, delete k.baseMap, delete k.widgets, delete k.version, b = dojo.json.stringify(k), arcgisonline.map.storage.deleteMapStorageNoFeedback(), sessionStorage.setItem("Esri_webmap",
                            b), l && l(), g && n()) : arcgisonline.map.save_open.webMapInfo ? (k.webMapId = arcgisonline.map.save_open.webMapInfo.id, delete k.operationalLayers, delete k.baseMap, delete k.widgets, delete k.version, b = dojo.json.stringify(k), arcgisonline.map.storage.deleteMapStorageNoFeedback(), sessionStorage.setItem("Esri_webmap", b), c = !1, arcgisonline.map.main.mapHasChanged && (c = !0), l && l(c), g && n(c)) : arcgisonline.map.main.mapHasChanged ? (a && a(), g && q()) : (l && l(), g && n()) : dojo.isIE && 4864E3 < b.length || 5101E3 < b.length ? arcgisonline.map.save_open.webMapInfo ?
                        (k.webMapId = arcgisonline.map.save_open.webMapInfo.id, delete k.operationalLayers, delete k.baseMap, delete k.widgets, delete k.version, b = dojo.json.stringify(k), arcgisonline.map.storage.deleteMapStorageNoFeedback(), sessionStorage.setItem("Esri_webmap", b), c = !1, arcgisonline.map.main.mapHasChanged && (c = !0), l && l(c), g && n(c)) : (a && a(), g && q()) : (arcgisonline.map.storage.deleteMapStorageNoFeedback(), sessionStorage.setItem("Esri_webmap", b), l && l(), g && n());
                }
            }
        },

        saveWebMapClick: function(b, c, l) {
            var dialog;
            if (arcgisonline.sharing.util.isLoggedIn()) {
                mapwidgets.storage.saveMapInCookie(b, false);
                var e = arcgisonline.sharing.util.getUser();
                if (!arcgisonline.map.save_open.webMapInfo ||
                    arcgisonline.map.save_open.webMapInfo.owner !== e.email &&
                    "admin" !== arcgisonline.map.save_open.webMapInfo.itemControl &&
                    "update" !== arcgisonline.map.save_open.webMapInfo.itemControl) {
                    arcgisonline.map.storage.canSaveWithBing();
                    dialog = mapwidgets.SaveToolDlg.prototype.statics.getInstance();
                    dojo.subscribe("onWebMapSave", null, dojo.hitch(arcgisonline.map.storage, "onWebMapSave"));
                    dialog.addWebMapItem(arcgisonline.map.main.mapLayers,
                        arcgisonline.map.main.map.extent,
                        arcgisonline.map.save_open.folderId,
                        arcgisonline.map.save_open.webMapInfo, c, l);
                } else {
                    arcgisonline.map.storage.saveExistingWebMap(null, c, l);
                }
            } else {
                var openamCookie = this.getCookie(window.configOptions.openamKey);
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
        },

        onWebStorageHelperSaved: function() {

        },

        getCookie: function(cname) {
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
        },

        save: function() {
            this.saveWebMapClick('save');
        }
    };
});
