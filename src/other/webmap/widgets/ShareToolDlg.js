/*
 * @Author: Esri
 * @Date:   2016-04-18 15:31:34
 * @Last Modified by:   Esri
 * @Last Modified time: 2016-04-27 17:24:27
 */

define([
    "dojox",
    "dojo/_base/declare",
    "dijit/_WidgetBase",
    "dojo/dom",
    "dojo/dom-style",
    "dijit/_TemplatedMixin",
    "dijit/_WidgetsInTemplateMixin",
    "dojo/text!./templates/template_tool_share.html"
], function(dojox, declare, _WidgetBase, dom, domStyle, TemplatedMixin, _WidgetsInTemplateMixin, template) {
    return declare('mapwidgets.ShareToolDlg', [_WidgetBase, TemplatedMixin, _WidgetsInTemplateMixin], {

        templateString: template,
        init: false,

        statics: {
            /**
             * Singleton
             * @type {mapwidgets.ShareToolDlg}
             */
            _instance: null,


            getInstance: function() {
                if (!this._instance) {
                    this._instance = new mapwidgets.ShareToolDlg();
                }
                return this._instance;
            }
        },

        postMixInProperties: function() {
            this.inherited(arguments);
            this.i18n = dojo.mixin({}, dojo.i18n.getLocalization("arcgisonline", "arcgisonline").common);
            dojo.mixin(this.i18n, dojo.i18n.getLocalization("arcgisonline", "arcgisonline").saveWebMapDlg);
            dojo.mixin(this.i18n, dojo.i18n.getLocalization("arcgisonline", "arcgisonline").shareMapDlg);
            this.i18n.shareOptions = dojo.i18n.getLocalization("arcgisonline", "arcgisonline").shareOptions;
            this.i18n.shareErrors = dojo.i18n.getLocalization("arcgisonline", "arcgisonline").addItemFrm.errors;
            this.i18n.browseItemsDlg = dojo.i18n.getLocalization("arcgisonline", "arcgisonline").browseItemsDlg;
            this.defaultTextTitle = this.i18n.enterMapTitle;
            this.defaultTextTags = this.i18n.separateTags;
            this.defaultTextSummary = this.i18n.enterSummary;
        },

        postCreate: function() {
            if (!this.init) {
                dojo.byId("share-map-text-not-public-note").innerHTML = esri.substitute({
                    portalName: this._getPortalName()
                }, this.i18n.shareMapNotPublic);
                dojo.byId("share-map-text-findId").innerHTML = esri.substitute({
                    portalName: this._getPortalName()
                }, this.i18n.findId);
                this.loadConnections();
                this.init = true;
                this._stackContainer.selectChild(this._stackEmbed);
                dojo.byId("share-groups-check-label").innerHTML = this.i18n.shareGroupsLabel;
                dojo.byId("appBuilderTab").innerHTML = "Web AppBuilder";
                this._showGalleryTabs(true);
                this._setupBasemapSelector();
                this._setupMapPreview();
                this._setupEmbedHelp();
                this._setupItemPropertiesDlg();
            }
        },

        loadConnections: function() {
            dojo.query(".jevent").connect("onclick", function(evt) { evt.preventDefault(); });
            dojo.query("#button-share-map-embed").connect("onclick", dojo.hitch(this, function() {
                if (!dijit.byId("button-share-map-embed").get("disabled")) {
                    dijit.byId("esrichinaSharingDiv").set("title", this.i18n.embedInWebsite);
                    this._stackContainer.selectChild(this._stackEmbed);
                    this._copiedData = false;
                }
            }));
            dojo.query("#button-share-map-application").connect("onclick", dojo.hitch(this, function() {
                if (!dijit.byId("button-share-map-application").get("disabled")) {
                    dijit.byId("esrichinaSharingDiv").set("title", this.i18n.makeNewWebApp);
                    this._showGalleryTabs(true);
                    this._changeTab();
                    var a = dijit.byId("templatesGallery");
                    if (a && a._groupDoesntExist) {
                        arcgisonline.sharing.dijit.dialog.GeneralDlg.prototype.statics.getInstance().show({
                            title: this.i18n.notice,
                            message: this.i18n.groupDoesntExist
                        });
                    }
                }
            }));
            dojo.connect(this._stackApplicationGallery, "onShow", dojo.hitch(this, function() {
                if (!this._browseItemsDlg) {
                    this._browseItemsDlg = new arcgisonline.sharing.dijit.dialog.BrowseItemsDlg({
                        plugin: "arcgisonline/sharing/dijit/dialog/PluginConfigurableAppsViewer",
                        messageLeft: this.i18n.browseItemsDlg.instructionsLeft,
                        messageRight: this.i18n.browseItemsDlg.instructionsRight,
                        "class": "esriBrowseItemsDlg"
                    }, dojo.create("div", {}, dom.byId("gallery-grid")));
                }
                this._browseItemsDlg.startup();
                this._browseItemstopicHandle =
                    dojo.topic.subscribe("/esri/browseitems/close", dojo.hitch(this, function(a, c) {
                        if ("create-app" === a) {
                            this.onShareMapApplicationNext();
                        } else if ("preview-app" === a) {
                            this.onPreviewApp(c);
                        } else {
                            if ("download-app" === a) {
                                arcgisonline.sharing.util.downloadWebMappingApp(c);
                            }
                        }
                    }));
            }));
            dojo.connect(this._stackAllOptions, "onShow", dojo.hitch(this, function() {
                this._showGalleryTabs(false);
            }));
            dojo.connect(this._stackApplicationPublish, "onShow", dojo.hitch(this, function() {
                if (!this._user) {
                    arcgisonline.map.storage.saveMapInCookie(null, true);
                    var a = arcgisonline.sharing.util.getSecureUrl(esriGeowConfig.baseUrl);
                    window.location = a + "signin.html?returnUrl\x3d" + encodeURIComponent(window.location) + "%26showPublish\x26error\x3d403"
                }
            }));
            dojo.connect(dijit.byId("publish-webmap-button"), "onClick", this, "publishWebMap");
            dojo.connect(dijit.byId("configurableTab"), "onclick", dojo.hitch(this, "_changeTab"));
            dojo.connect(dojo.byId("appBuilderTab"), "onclick", dojo.hitch(this, "_changeTab"));
            dojo.connect(dojo.byId("advOptionsTab"), "onclick", dojo.hitch(this, "_changeEmbedTab"));
            dojo.connect(dojo.byId("addMarkerTab"), "onclick", dojo.hitch(this, "_changeEmbedTab"));
            dojo.mixin(dijit.byId("esrichinaSharingDiv"), {
                onCancel: dojo.hitch(this, function() { this.hide(); })
            });
            dojo.connect(dojo.byId("share-map-url"), "onkeypress", this, "doNothing");
            dojo.connect(dojo.byId("share-map-embed-text"), "onkeydown", this, "listenForCopy");
            dojo.connect(dojo.byId("share-map-embed-text"), "onclick", this, "toggleSelect");
            dojo.connect(dojo.byId("linkType:presentation"), "onclick", dojo.hitch(this, "updateLinkType", "presentation"));
            dojo.connect(dojo.byId("linkType:map"), "onclick", dojo.hitch(this, "updateLinkType", "map"));
            dojo.connect(dojo.byId("share-map-url-extent"), "onclick", dojo.hitch(this, "updateMapUrlExtent"));
            dojo.connect(dojo.byId("share-map-embed-zoom"), "onclick", dojo.hitch(this, "updateEmbedHTML"));
            a.connect(a.byId("share-map-embed-home"), "onclick", a.hitch(this, "updateEmbedHTML"));
            a.connect(a.byId("share-map-embed-scale"), "onclick", a.hitch(this, "updateEmbedHTML"));
            a.connect(a.byId("share-map-embed-legend"), "onclick", a.hitch(this, "updateEmbedHTML"));
            a.connect(a.byId("share-map-embed-description"), "onclick", a.hitch(this, "updateEmbedHTML"));
            a.connect(a.byId("share-map-embed-location"), "onclick",
                a.hitch(this, "updateLocation"));
            a.connect(a.byId("share-map-embed-location-restrict"), "onclick", a.hitch(this, "updateEmbedHTML"));
            a.connect(a.byId("share-map-embed-basemap"), "onclick", a.hitch(this, "updateEmbedHTML"));
            a.connect(a.byId("share-map-embed-largemap"), "onclick", a.hitch(this, "updateEmbedHTML"));
            a.connect(a.byId("share-map-embed-disablezoom"), "onclick", a.hitch(this, "updateEmbedHTML"));
            a.connect(a.byId("mapSize:responsive"), "onclick", a.hitch(this, "updateEmbedHTML"));
            a.connect(a.byId("mapSize:custom:width"),
                "onkeyup", a.hitch(this, "updateMapSize", "custom"));
            a.connect(a.byId("mapSize:custom:height"), "onkeyup", a.hitch(this, "updateMapSize", "custom"));
            a.connect(a.byId("mapSize:responsive"), "click", a.hitch(this, "updateMapSize", "custom"));
            a.subscribe("onShareUpdate", a.hitch(this, function() {
                this.disable(!1);
                this.shortenedUrl = null;
                this.checkUpdatedSharingStatus()
            }));
            arcgisonline.map.role.isAllowed("share_makeWebApp") || a.style(a.byId("share-map-makeApp-option"), "display", "none");
            a.subscribe("onClickEveryone",
                a.hitch(this, function(a) {
                    if (c.byId("share-everyone-check").get("checked") && this._isPrivateOrg) {
                        var e = { title: this.i18n.share, message: '\x3cp class\x3d"esriItemLinks"\x3e' + esri.substitute({ url: '\x3ca href\x3d"' + (this.helpBase + this.helpMap["120000455"]) + '" target\x3d"_blank" \x3e' + this.i18n.shareHelpLinkText + "\x3c/a\x3e" }, this.i18n.shareWithEveryoneMessage) + "\x3c/p\x3e" };
                        this.showError(e)
                    }
                    this.shareWait(a)
                }));
            a.subscribe("onClickAccount", a.hitch(this, function(a) { this.shareWait(a) }));
            a.subscribe("onClickGroup",
                a.hitch(this, function(a) { this.shareWait(a) }))
        },

        onShareMapApplicationNext: function(evt) {
            if (evt) evt.preventDefault();

            this._selectedTemplate = this._browseItemsDlg.get("selection");
            this.content.getItemData(this._selectedTemplate.id, dojo.hitch(this, function(a) {
                this._showGalleryTabs(false);
                this._selectedTemplate.data = a;
                this._stackContainer.selectChild(this._stackApplicationPublish);
            }));
        },

        onPreviewApp: function(a) {
            var c = void 0 !== esriGeowConfig.isMultiTenant && null !== esriGeowConfig.isMultiTenant && !1 === esriGeowConfig.isMultiTenant,
                d = a.url,
                d = 0 === d.indexOf("http") || 0 === d.indexOf("//") ? d : window.location.protocol + "//" + window.location.host + d;
            this.currentUser && !this.currentUser.accountId ? d = c ? this._getPortalPreviewUrl(a, d) : d.replace("/hosted/", "/apps/") : c && (d = this._getPortalPreviewUrl(a, d));
            arcgisonline.map.mapUtil.previewTemplate(d, a.id)
        },

        publishWebMap: function(evt) {
            evt.preventDefault();

            var e = this._selectedTemplate;
            var b = this._selectedTab;
            var d = this._itemPropDlg;
            var l = arcgisonline.sharing.util.getHomeAppContext();
            var g = dojo.mixin(this._itemPropDlg.get("item"), {
                webMapId: this.webMapId,
                shareWithWebMap: true === dijit.byId("publish-webmap-sharing").get("checked")
            });
            var h = dojo.hitch(this, function(b) {
                this._itemPropDlg.set("readOnly", b);
                dojo.query(".share-map-application-publish-config-back").style("color", b ? "#999" : "#21759B");
                dijit.byId("publish-webmap-button").set("disabled", b);
                dijit.byId("publish-webmap-button").set("label", b ? this.i18n.savingAndPublishing : this.i18n.savePublishBtn);
            });

            var p = dojo.hitch(this, function(b) {
                var c = new dojo.Deferred();
                if (g.shareWithWebMap) {
                    c.resolve(b);
                } else {
                    var e = esriGeowConfig.restBaseUrl + "content/items/" + b.id + "/share",
                        d = this.shareOptions.isEveryoneChecked(),
                        l = this.shareOptions.isAccountChecked(),
                        h = this.shareOptions.getSharedGroups();
                    h = dojo.map(h, "return item.id;");
                    d = { f: "json", everyone: d, org: l, groups: h.join(","), items: [b.id] };
                    arcgisonline.sharing.util.request({
                        url: e,
                        content: d
                    }, { usePost: true }).then(dojo.hitch(this, function() { c.resolve(b); }));
                }
                return c;
            });
            h(true);
            if ("appBuilderTab" === b) {
                d._validate().then(dojo.hitch(this, function(a) {
                    this.redirectToAppBuilder(g);
                }), dojo.hitch(this, function(a) {
                    h(false);
                    this.showError(a);
                }));
            } else {
                d._validate().then(dojo.hitch(this, function(b) {
                    if (arcgisonline.sharing.util.isPortal()) {
                        if (e.url && 0 === e.url.indexOf("/") && -1 === e.url.indexOf(l)) {
                            e.url = l + e.url;
                        }
                    }
                    this.createItemUtil.createTemplatedApplication(g, this._selectedTemplate, d._portal)
                        .then(dojo.hitch(this, function(b) {
                            return p(b).then(dojo.hitch(this, function(a) {
                                arcgisonline.map.storage.saveMapInCookie();
                                window.location = a.configureUrl;
                            }));
                        }), dojo.hitch(this, function(a) {
                            h(false);
                            this.showError(a);
                        }))
                }), dojo.hitch(this, function(a) {
                    h(false);
                    this.showError(a);
                }));
            }
        },

        updateEmbedHTML: function() {
            this.updateMapSize(this.size);
        },

        updateMapSize: function(a) {
            this.size = a;
            a = dijit.byId("mapSize:custom:width").get("value");
            var e = dijit.byId("mapSize:custom:height").get("value");
            if(isNaN(a) || isNaN(e)) {
                arcgisonline.sharing.dijit.dialog.GeneralDlg.prototype.statics.getInstance().show({
                title: this.i18n.errorTitle,
                message: this.i18n.invalidWidthHeight
            });
            } else {
                dijit.byId("share-map-embed-text").set("value", this.buildEmbedMapHTML(a, e));
            }
        },

        updateLinkType: function(b) {
            var e = false;
            if ("http:" == location.protocol &&
                esriGeowConfig.bitlyUrl &&
                0 < esriGeowConfig.bitlyUrl.length ||
                "https:" == location.protocol &&
                esriGeowConfig.bitlyUrlSSL &&
                0 < esriGeowConfig.bitlyUrlSSL.length) {
                e = true;
            }
            this.linkType = b;
            switch (b) {
                case "presentation":
                    dojo.style(dojo.byId("share-map-url-extent-div"), "display", "none");
                    if (esriGeowConfig.showSocialMediaLinks && e) {
                        this.shortenedUrl = null;
                        this.useShortenedUrl(this.presentationUrl);
                    } else {
                        c.byId("share-map-url").set("value", n.html.entities.decode(this.presentationUrl));
                    }
                    break;
                case "map":
                    dojo.style(dojo.byId("share-map-url-extent-div"), "display", "");
                    if (esriGeowConfig.showSocialMediaLinks && e) {
                        this.shortenedUrl = null;
                        this.useShortenedUrl(this.viewerUrl);
                    } else {
                        dijit.byId("share-map-url").set("value", dojox.html.entities.decode(this.viewerUrl));
                    }
                    break;
            }
        },

        showError: function(a) {
            if (!this._dlg) {
                this._dlg = arcgisonline.sharing.dijit.dialog.GeneralDlg.prototype.statics.getInstance();
            }

            this._dlg.show({ title: a.title, message: a.message });
        },

        redirectToAppBuilder: function(b) {
            if (b.folderId && "/" !== b.folderId) {
                b.folder = b.folderId;
            }

            var c = window.location.protocol + "//" + window.location.host + arcgisonline.sharing.util.getHomeAppContext() + "/apps/webappbuilder/index.html?";

            c = c + a.objectToQuery({
                title: b.title,
                tags: b.tags,
                summary: b.snippet,
                folder: b.folder,
                sharewithwebmap: b.shareWithWebMap,
                webmap: this.webMapId
            });
            window.location = "https:" === window.location.protocol ? arcgisonline.sharing.util.getSecureUrl(c) : arcgisonline.sharing.util.getHttpUrl(c);
        },

        updateMapUrlExtent: function() {
            if (dijit.byId("share-map-url-extent").get("checked")) {
                this.viewerUrl = esriGeowConfig.baseUrl + "webmap/viewer.html?webmap\x3d" + this.webMapId + "\x26amp;extent\x3d" + this.gcsExtStr;
            } else {
                this.viewerUrl = esriGeowConfig.baseUrl + "webmap/viewer.html?webmap\x3d" + this.webMapId;
            }

            if (esriGeowConfig.showSocialMediaLinks && esriGeowConfig.bitlyUrl && 0 < esriGeowConfig.bitlyUrl.length) {
                this.shortenedUrl = null;
                this.useShortenedUrl(this.viewerUrl);
            } else {
                dijit.byId("share-map-url").set("value", dojox.html.entities.decode(this.viewerUrl));
            }
        },

        /**
         * Display the share dialog
         * @return
         */
        show: function(webmapId, webmapOwner, folderId, webmapTitle,
            hasBing,
            hasPresentation,
            showPublish,
            hasRequiresSubscriptionOrCredits) {
            this.hasPresentation = hasPresentation;
            this.hasBing = hasBing;
            this.showPublish = showPublish;
            this.webMapId = webmapId;
            this.folderId = folderId;
            this.webmapTitle = webmapTitle;
            this.webMapOwner = webmapOwner;
            this._isPublishing = false;
            this.hasRequiresSubscriptionOrCredits = hasRequiresSubscriptionOrCredits;
            dojo.byId("share-map-webmapId").innerHTML = this.webMapId;

            var k = function(a, b) {
                    var c = arcgisonline.map.main.extentToString(a[0]);
                    this.show2(c);
                },
                s = function(a, b) { this.show2(""); },
                mapExtent = arcgisonline.map.main.map.extent;

            if (mapExtent.spatialReference._isWrappable()) {
                esri.geometry.normalizeCentralMeridian([mapExtent], null, dojo.hitch(this, function(b) {
                    if (b[0].rings) {
                        var c = (new esri.geometry.Polygon(m.spatialReference)).addRing(b[0].rings[0]).getExtent();
                        b = (new esri.geometry.Polygon(m.spatialReference)).addRing(b[0].rings[1]).getExtent();
                        mapExtent = c.getWidth() > b.getWidth() ? c : b;
                    } else {
                        mapExtent = b[0];
                    }
                    arcgisonline.map.main.projectExtent(mapExtent, new esri.SpatialReference({ wkid: 4326 }), dojo.hitch(this, k), dojo.hitch(this, s));
                }));
            } else {
                arcgisonline.map.main.projectExtent(mapExtent, new esri.SpatialReference({ wkid: 4326 }), dojo.hitch(this, k), dojo.hitch(this, s));
            }
        },

        show2: function(mapExtStr) {
            this._user = arcgisonline.sharing.util.getUser();
            this._webAppItemCard = dojo.mixin({}, arcgisonline.map.save_open.webMapItemCard);
            this.gcsExtStr = mapExtStr;
            if (!this._webAppItemCard.owner) {
                this._webAppItemCard.owner = arcgisonline.map.save_open.webMapInfo.owner;
                this._webAppItemCard.id = arcgisonline.map.save_open.webMapInfo.id;
                this._webAppItemCard.title = arcgisonline.map.save_open.webMapInfo.title;
                this._webAppItemCard.thumbnail = arcgisonline.map.save_open.webMapInfo.thumbnail;
                this._webAppItemCard.tags = arcgisonline.map.save_open.webMapInfo.tags;
                this._webAppItemCard.snippet = arcgisonline.map.save_open.webMapInfo.snippet;
            }

            if (dijit.byId("share-map-url-extent").get("checked")) {
                this.viewerUrl = esriGeowConfig.baseUrl + "../IntegrationServicePlatform/viewer/mapViewer.html?webmap=" + this.webMapId + "&extent=" +
                    this.gcsExtStr;
            } else {
                this.viewerUrl = esriGeowConfig.baseUrl + "../IntegrationServicePlatform/viewer/mapViewer.html?webmap=" + this.webMapId;
            }

            this.presentationUrl = window.location.protocol + "//" + window.location.host + arcgisonline.sharing.util.getHomeAppContext() + "/apps/presentation/index.html?webmap=" + this.webMapId;
            this.embedMapUrl = window.location.protocol + "//" + window.location.host + arcgisonline.sharing.util.getHomeAppContext() + "/apps/Embed/index.html?webmap=" + this.webMapId + "&extent=" + b;
            dijit.byId("mapSize:custom:width").set("value", "500");
            dijit.byId("mapSize:custom:height").set("value", "400");
            if (this.hasPresentation) {
                domStyle.set(dojo.byId("linkTypeDiv"), "display", "block");
                dojo.byId("share-map-embed-label").innerHTML = this.i18n.sharePresentation;
                domStyle.set(dijit.byId("embedType:presentation").domNode.parentNode, "display", "");
                domStyle.set(dom.byId("embedType:presentation:label").parentNode, 'display', '');
            } else {
                dojo.style(dojo.byId("linkTypeDiv"), "display", "none");
                dojo.byId("share-map-embed-label").innerHTML = this.i18n.shareMap;
                dojo.style(dijit.byId("embedType:presentation").domNode.parentNode, "display", "none");
                dojo.style(dojo.byId("embedType:presentation:label").parentNode, "display", "none");
            }

            // TODO:
            this.clear();

            if (this._itemPropDlg) {
                this._itemPropDlg.set("summary", this._webAppItemCard.snippet);
                this._itemPropDlg.set("title", this._webAppItemCard.title);
                this._itemPropDlg.set("tags", this._webAppItemCard.tags || []);
            }
            this._stackContainer.selectChild(this.showPublish ? this._stackApplicationGallery : this._stackAllOptions);
            dijit.byId("esrichinaSharingDiv").show();

            if (!this.sharingInfo) {
                var e = function() {
                        this.community.getUserGroups(dojo.hitch(this, function(b, c) {
                            this.userGroups = b.groups;
                            dojo.hitch(this, d)();
                        }));
                    },
                    d = function() {
                        var b;
                        if (!this.currentUser || this.webMapOwner != this.currentUser.email && !this.isAdmin) {
                            b = function(b, c) {
                                this.sharingInfo = { access: b.access };
                                if (this.currentUser && 0 < this.userGroups.length) {
                                    this.shareOptions.showGroups([this.item], this.userGroups);
                                    dojo.byId("share-map-text-public-note").innerHTML = this.i18n.mapShared + "\x3cbr/\x3e\x26nbsp;";
                                }
                                this.updateDlgComponents();
                            };
                            arcgisonline.sharing.util.getJson(esriGeowConfig.restBaseUrl + "content/items/" + this.webMapId, dojo.hitch(this, b));
                        } else {
                            b = function(b, c) {
                                this.sharingInfo = b.sharing;
                                if ("private" == this.sharingInfo.access) {
                                    dom.byId("share-map-text-public-note").innerHTML = this.i18n.mapPrivate;
                                    dom.byId("share-map-text-public-note").innerHTML = this.i18n.mapShared + "\x3cbr/\x3e\x26nbsp;";
                                }
                                this.updateDlgComponents();
                                var d = esriGeowConfig.userRole,
                                    e = d && esriGeowConfig.userRole.canUpdateOrgItems(),
                                    l = d && (esriGeowConfig.userRole.canShareItemToGroup() ||
                                        esriGeowConfig.userRole.canShareItemToOrg() ||
                                        esriGeowConfig.userRole.canShareItemToPublic()),
                                    g = function() {
                                        if (this.isAdmin || e && l) {
                                            if (this.item.owner !== this.currentUser.email) {
                                                this.shareOptions.showAdmin([this.item], this.userGroups, this.itemUser, this.adminGroups);
                                            } else {
                                                if (this.currentUser && this.item.owner === this.currentUser.email) {
                                                    this.shareOptions.show([this.item], this.userGroups, null);
                                                } else {
                                                    if (this.currentUser && ("public" === this.item.access || "shared" === this.item.access || "org" === this.item.access && this.currentUser.accountId)) {
                                                        this.shareOptions.showGroups([this.item], this.userGroups);
                                                        dom.byId("share-map-text-public-note").innerHTML = this.i18n.mapShared + "\x3cbr/\x3e\x26nbsp;";
                                                    } else {
                                                        this.shareOptions.show([this.item], this.userGroups, null);
                                                    }
                                                }
                                            }
                                        }

                                        if (this.hasRequiresSubscriptionOrCredits) {
                                            this.displayRequiresSubscriptionOrCredits();
                                        }
                                    };

                                if (this.userGroups) {
                                    dojo.hitch(this, g)();
                                } else {
                                    if (this.isAdmin) {
                                        if (this.item.owner !== this.currentUser.email) {
                                            this.community.getUserGroupsByUser(this.itemUser.username, dojo.hitch(this, function(b, c) {
                                                this.adminGroups = b.groups;
                                                dojo.hitch(this, g)();
                                            }));
                                        } else {
                                            this.adminGroups = this.userGroups;
                                            dojo.hitch(this, g)();
                                        }
                                    } else {
                                        dojo.hitch(this, g)();
                                    }
                                }
                            };
                            var c = esriGeowConfig.restBaseUrl + "content/users/" + this._webAppItemCard.owner;
                            if (this._webAppItemCard.ownerFolder &&
                                this._webAppItemCard.ownerFolder.length &&
                                "/" != this._webAppItemCard.ownerFolder) {
                                c += "/" + this._webAppItemCard.ownerFolder;
                            } else {
                                if (this.folderId && this.folderId.length && "/" != this.folderId) {
                                    c += "/" + this.folderId;
                                }
                            }
                            c += "/items/" + this.webMapId;
                            arcgisonline.sharing.util.getJson(c, dojo.hitch(this, b));
                        }
                    };
                this.currentUser = arcgisonline.sharing.util.getUser();
                if ((this.item = this._webAppItemCard) && this.item.ownerFolder && this.item.ownerFolder.length &&
                    "/" != this.item.ownerFolder) {
                    this.item.folderId = this.item.ownerFolder;
                }
                if (esri.isDefined(this.folderId) &&
                    (this.folderId.length && "/" != this.folderId)) {
                    this.item.folderId = this.folderId;
                }
                this.isAdmin = false;
                if (esriGeowConfig.userRole &&
                    (esriGeowConfig.userRole.isAdmin() ||
                        esriGeowConfig.userRole.isCustom() &&
                        esriGeowConfig.userRole.canUpdateOrgItems())) {
                    this.isAdmin = true;
                    if (this.item.owner !== this.currentUser.email) {
                        this.community.getProfile(this.item.owner, dojo.hitch(this, dojo.hitch(this, function(b, c) {
                            this.itemUser = b;
                            if (this.itemUser.orgId !== this.currentUser.accountId) {
                                this.isAdmin = false;
                            }
                            dojo.hitch(this, e)();
                        })));
                    } else {
                        this.itemUser = this.currentUser;
                        dojo.hitch(this, e)();
                    }
                } else {
                    if (this.currentUser) {
                        this.itemUser = this.currentUser;
                        dojo.hitch(this, e)();
                    } else {
                        dojo.hitch(this, d)();
                    }
                }
            }
        },

        toggleSelect: function(b) {
            b.preventDefault();
            a.byId("share-map-embed-text").select();
            this._copiedData = true;
        },

        doNothing: function(a) {
            if (!a.metaKey && !a.ctrlKey || !("c" === a.keyChar || "a" === a.keyChar)) {
                a.preventDefault();
            }
        },

        listenForCopy: function(a) {
            if ((a.metaKey || a.ctrlKey) && ("c" === a.keyChar || 67 === a.keyCode)) {
                this._copiedData = true;
            } else {
                a.preventDefault();
            }
        },

        hide: function() {
            dijit.byId("share-map-dialog").hide();
            if (this._browseItemsDlg) {
                this._browseItemsDlg.destroy();
                this._browseItemsDlg = null;
                this._browseItemstopicHandle.remove();
            }

            if (9 > dojo.isIE) {
                this._stackContainer.selectChild(this._stackAllOptions);
            }
        },

        clear: function() {
            dijit.byId("esrichinaSharingDiv").set("title", this.i18n.share);
            dojo.style(dojo.byId("share-map-make-public"), "display", "none");
            dojo.style(dojo.byId("share-map-not-public"), "display", "none");
            dojo.style(dojo.byId("share-map-is-public"), "display", "block");
            dojo.style(dojo.byId("share-map-premium"), "display", "none");
            this._setupGeocoder();
            dijit.byId("embedType:map").set("checked", !0);
            dojo.attr(dojo.byId("embed-type-label"), "innerHTML", esri.substitute({ embedType: this.i18n.updates.embedTypeMap }, this.i18n.updates.chooseEmbed));
            dojo.style(dojo.byId("mapOptionsContainer"), "visibility", "visible");
            dijit.byId("share-map-embed-zoom").set("checked", !0);
            dijit.byId("share-map-embed-home").set("checked", !1);
            dijit.byId("share-map-embed-basemap").set("checked", !1);
            dijit.byId("basemapType:gallery").set("checked", !0);
            dijit.byId("share-map-embed-scale").set("checked", !0);
            dijit.byId("share-map-embed-location").set("checked", !1);
            dijit.byId("share-map-embed-location-restrict").set("checked", !0);
            dijit.byId("share-map-embed-description").set("checked", !1);
            dijit.byId("share-map-embed-legend").set("checked", !1);
            dijit.byId("share-map-embed-disablezoom").set("checked", !0);
            dojo.attr(dojo.byId("share-map-embed-location-restrict-label"), "title", this.i18n.showLocationRestrict);
            dijit.byId("basemap:secondBasemap").set("value",
                this._topoTitle);
            this.onBasemapSelectorClicked();
            this.onShareMapActivePanelCheck();
            dijit.byId("embedTheme:light").set("checked", !0);
            dijit.byId("marker-symbol-title").set("value", "");
            dijit.byId("marker-symbol-desc").set("value", "");
            dijit.byId("marker-symbol-url").set("value", "");
            dijit.byId("marker-symbol-url").set("placeHolder", this.i18n.updates.exampleMarkerUrl);
            dijit.byId("marker:search").set("checked", !0);
            dijit.byId("latitude:y").set("value", "");
            dijit.byId("longitude:x").set("value", "");
            if (dojo.byId("advOptionsTab") && dojo.byId("addMarkerTab")) {
                dojo.addClass(dojo.byId("advOptionsTab"), "selected");
                dojo.removeClass(dojo.byId("addMarkerTab"), "selected");
                esri.hide(dojo.byId("addMarkerSymbolTab"));
                esri.show(dojo.byId("advancedOptionsTab"));
            }

            dojo.style(dojo.byId("mapPreview:panel"), "display", "none");
            dojo.style(dojo.byId("mapPreview:details"), "display", "none");
            dojo.style(dojo.byId("mapPreview:legend"), "display", "none");
            dojo.style(dojo.byId("mapPreview:gallery"), "display", "none");
            dojo.style(dojo.byId("mapPreview:toggle"), "display", "none");
            dojo.style(dojo.byId("mapPreview:zoom"), "display", "");
            dojo.style(dojo.byId("mapPreview:zoomhome"),
                "display", "none");
            dojo.style(dojo.byId("mapPreview:search"), "display", "none");
            dojo.style(dojo.byId("mapPreview:scale"), "display", "");
            dojo.query(".share-map-application-publish-config-back").forEach(dojo.hitch(this, function(b) {
                dojo.style(b, "color", "#21759B");
            }));
            dijit.byId("publish-webmap-button").set("disabled", !1);
            dijit.byId("publish-webmap-button").set("label", this.i18n.savePublishBtn);
            dojo.style(dojo.byId("publish-webmap-waiting"), "display", "none");
            this.shortenedUrl = null;
            this._copiedData = false;
        },

        updateDlgComponents: function(b) {
            if (esriGeowConfig.showSocialMediaLinks && esriGeowConfig.bitlyUrl && 0 < esriGeowConfig.bitlyUrl.length) {
                b = c.byId("linkType:presentation").get("checked");
                a.style(a.byId("share-map-url"), "width", "270px");
                if (this.hasPresentation && "public" == this.sharingInfo.access) {
                    if (!b) {
                        this.shortenedUrl = null;
                    }
                    c.byId("linkType:presentation").set("disabled", false);
                    a.style(a.byId("linkType:presentation-label"), "color", "#000000");
                    c.byId("linkType:presentation").set("checked", true);
                    a.style(a.byId("share-map-url-extent-div"), "display", "none");
                    this.useShortenedUrl(this.presentationUrl);
                } else {
                    if (this.hasPresentation && "public" != this.sharingInfo.access) {

                        if (b) {
                            this.shortenedUrl = null;
                        }
                        c.byId("linkType:presentation").set("disabled", false);
                        a.style(a.byId("linkType:presentation-label"), "color", "#000000");
                        c.byId("linkType:map").set("checked", true);
                        a.style(a.byId("share-map-url-extent-div"), "display", "");
                    }

                    this.useShortenedUrl(this.viewerUrl);
                }
            } else {
                a.style(a.byId("share-map-url"), "width", "450px");
                if (this.hasPresentation && "public" == this.sharingInfo.access) {
                    c.byId("linkType:presentation").set("disabled", !1);
                    a.style(a.byId("linkType:presentation-label"), "color", "#000000");
                    c.byId("linkType:presentation").set("checked", !0);
                    a.style(a.byId("share-map-url-extent-div"), "display", "none");
                    c.byId("share-map-url").set("value", n.html.entities.decode(this.presentationUrl));
                } else {
                    if (this.hasPresentation && "public" != this.sharingInfo.access) {
                        c.byId("linkType:presentation").set("disabled", !0);
                        a.style(a.byId("linkType:presentation-label"), "color", "#999999");
                        c.byId("linkType:map").set("checked", !0);
                        a.style(a.byId("share-map-url-extent-div"), "display", "");
                    }
                    c.byId("share-map-url").set("value", n.html.entities.decode(this.viewerUrl));
                }
                c.byId("share-map-url").focus();
                a.style(a.byId("socialNetworkLinks"), "display", "none");
            }

            b = true;
            if (esriGeowConfig.userRole && esriGeowConfig.userRole.isCustom() &&
                !esriGeowConfig.userRole.canShareItemToOrg() &&
                !esriGeowConfig.userRole.canShareItemToGroup() &&
                (!esriGeowConfig.userRole.canShareItemToPublic() || !esriGeowConfig.self.canSharePublic)) {
                b = false;
            }
            c.byId("button-share-map-application").set("disabled", false);
            var e = arcgisonline.sharing.util.getUser();
            if ("public" == this.sharingInfo.access) {
                this.updateMapSize(this.size);
                a.style(a.byId("share-map-not-public"), "display", "none");
                this.currentUser = arcgisonline.sharing.util.getUser();
                if (this.currentUser && b &&
                    (this.userGroups && 0 < this.userGroups.length ||
                        this.webMapOwner == this.currentUser.email || this.isAdmin)) {
                    a.style(a.byId("share-map-make-public"), "display", "block");
                    a.style(a.byId("share-map-is-public"), "display", "none");
                } else {
                    a.style(a.byId("share-map-make-public"), "display", "none");
                    a.style(a.byId("share-map-is-public"), "display", "block");
                }

                c.byId("button-share-map-embed").set("disabled", !1);
                if (esriGeowConfig.showSocialMediaLinks &&
                    (arcgisonline.sharing.util.canSharePublic() && arcgisonline.map.role.isAllowed("share_socialMediaLinks"))) {
                    a.style(a.byId("socialNetworkLinks"), "display", "block");
                }

                a.style(a.byId("share-map-embed"), "display", "none");
            } else {
                if ("shared" == this.sharingInfo.access || "org" == this.sharingInfo.access) {
                    c.byId("button-share-map-embed").set("disabled", !0);
                    if (!e || this.webMapOwner != e.email && !this.isAdmin || !b) {
                        a.style(a.byId("share-map-not-public"), "display", "block");
                        a.style(a.byId("share-map-make-public"), "display", "none");
                        a.style(a.byId("share-map-is-public"), "display", "none");
                    } else {
                        a.style(a.byId("share-map-not-public"), "display", "none");
                        a.style(a.byId("share-map-make-public"), "display", "block");
                        a.style(a.byId("share-map-is-public"), "display", "none");
                        a.style(a.byId("share-map-embed"), "display", "block");
                    }

                    if (esriGeowConfig.showSocialMediaLinks &&
                        (arcgisonline.sharing.util.canSharePublic() && arcgisonline.map.role.isAllowed("share_socialMediaLinks"))) {
                        a.style(a.byId("socialNetworkLinks"), "display", "block");
                    }

                } else {
                    c.byId("button-share-map-embed").set("disabled", !0);
                    if (!e || this.webMapOwner != e.email && !this.isAdmin || !b) {
                        a.style(a.byId("share-map-not-public"), "display", "block");
                        a.style(a.byId("share-map-make-public"), "display", "none");
                        a.style(a.byId("share-map-is-public"), "display", "block");
                    } else {
                        a.style(a.byId("share-map-not-public"), "display", "none");
                        a.style(a.byId("share-map-make-public"), "display", "block");
                        a.style(a.byId("share-map-is-public"), "display", "none");
                    }

                    a.style(a.byId("socialNetworkLinks"), "display", "none");
                    a.style(a.byId("share-map-embed"), "display", "none");
                }
            }

            if (esriGeowConfig.self && "private" === esriGeowConfig.self.access) {
                this._isPrivateOrg = true;
            }

            if (!this.isAdmin && !arcgisonline.sharing.util.canSharePublic()) {
                a.style(a.byId("share-map-advanced-label"), "display", "none");
                a.style(a.byId("share-map-embed-option"), "display", "none");
                a.style(a.byId("share-map-embed"), "display", "none");
            }
            this.helpBase = esriGeowConfig && esriGeowConfig.self.helpBase;
            this.helpMap = esriGeowConfig && esriGeowConfig.self.helpMap && esriGeowConfig.self.helpMap.m;
        },

        _getPortalName: function() {
            return esriGeowConfig.portalName || this.i18n.arcgisCom;
        },

        _showGalleryTabs: function(b) {
            if (b) {
                if (!(b = this._user)) {
                    this._user = arcgisonline.sharing.util.getUser();
                }

                if (esriGeowConfig.webAppBuilderEnabled) {
                    if (b && b.accountId) {
                        esri.show(a.byId("galleryTabs"));
                    }
                }
            } else {
                esri.hide(a.byId("galleryTabs"));
            }
        },

        _setupBasemapSelector: function() {
            this._topoTitle = "";
            this._basemaps = [];
            for (var b in esri.basemaps) {
                if (esri.basemaps.hasOwnProperty(b)) {
                    if ("topo" === b) {
                        this._topoTitle = esri.basemaps[b].title;
                    }

                    this._basemaps.push({ id: b, name: esri.basemaps[b].title });
                }
            }
            c.byId("basemap:secondBasemap").set("store", new a.store.Memory({ data: this._basemaps }));
            c.byId("basemap:secondBasemap").set("value", this._topoTitle);
        },

        _setupMapPreview: function() {
            dojo.create("img", { src: arcgisonline.sharing.util.relativeToExplicitUrl("js/arcgisonline/sharing/dijit/dialog/css/images/preview_background.png") }, dom.byId("mapPreview:basemap"));
            dojo.create("img", { src: arcgisonline.sharing.util.relativeToExplicitUrl("js/arcgisonline/sharing/dijit/dialog/css/images/preview_left-panel.png") }, dom.byId("mapPreview:panel"));
            dojo.create("img", { src: arcgisonline.sharing.util.relativeToExplicitUrl("js/arcgisonline/sharing/dijit/dialog/css/images/preview_map-details-active.png") }, dom.byId("mapPreview:details"));
            dojo.create("img", { src: arcgisonline.sharing.util.relativeToExplicitUrl("js/arcgisonline/sharing/dijit/dialog/css/images/preview_legend-active.png") }, dom.byId("mapPreview:legend"));
            dojo.create("img", { src: arcgisonline.sharing.util.relativeToExplicitUrl("js/arcgisonline/sharing/dijit/dialog/css/images/preview_basemap-gallery.png") }, dom.byId("mapPreview:gallery"));
            dojo.create("img", { src: arcgisonline.sharing.util.relativeToExplicitUrl("js/arcgisonline/sharing/dijit/dialog/css/images/preview_basemap-toggle.png") }, dom.byId("mapPreview:toggle"));
            dojo.create("img", { src: arcgisonline.sharing.util.relativeToExplicitUrl("js/arcgisonline/sharing/dijit/dialog/css/images/preview_zoom.png") }, dom.byId("mapPreview:zoom"));
            dojo.create("img", { src: arcgisonline.sharing.util.relativeToExplicitUrl("js/arcgisonline/sharing/dijit/dialog/css/images/preview_zoom-and-home.png") }, dom.byId("mapPreview:zoomhome"));
            dojo.create("img", { src: arcgisonline.sharing.util.relativeToExplicitUrl("js/arcgisonline/sharing/dijit/dialog/css/images/preview_scale.png") }, dom.byId("mapPreview:scale"));
            dojo.create("img", { src: arcgisonline.sharing.util.relativeToExplicitUrl("js/arcgisonline/sharing/dijit/dialog/css/images/preview_search-field.png") }, dom.byId("mapPreview:search"));
        },

        _setupEmbedHelp: function() {
            dojo.create("img", { src: arcgisonline.sharing.util.relativeToExplicitUrl("js/arcgisonline/css/images/info.png") }, dom.byId("mapSize-help"));
            this._embedHelpTooltip = new dijit.Tooltip({ label: '\x3cdiv style\x3d"max-width:300px;"\x3e' + ("\x3cp\x3e" + this.i18n.updates.setDimensions + "\x3c/p\x3e\x3cp\x3e" + this.i18n.updates.commonSizes + "\x3c/p\x3e\x3cp\x3e" + this.i18n.updates.smallSize + "\x3cbr\x3e" + this.i18n.updates.mediumSize + "\x3cbr\x3e" + this.i18n.updates.largeSize + "\x3c/p\x3e") + "\x3c/div\x3e", connectId: ["mapSize-help"], id: "tooltip_mapSize-help", showDelay: 200 });
        },

        _setupItemPropertiesDlg: function() {
            if (!this._itemPropDlg) {
                this.getUserItemTitles(dojo.hitch(this, function() {
                    this._itemPropDlg = new arcgisonline.sharing.dijit.dialog.ItemPropertiesDlg({
                        typeInfo: "configapp",
                        existingItems: this.allItemNames,
                        showFolders: true,
                        showFile: false,
                        item: dojo.mixin({}, this._webAppItemCard)
                    }, dojo.create("div", {}, this._itemProperties));
                    this._itemPropDlg.startup();
                    if (this._webAppItemCard) {
                        this._itemPropDlg.set("summary", this._webAppItemCard.snippet);
                        this._itemPropDlg.set("title", this._webAppItemCard.title);
                        this._itemPropDlg.set("tags", this._webAppItemCard.tags || []);
                    }
                }));
            }
        },

        _changeEmbedTab: function(b) {
            b = b && b.currentTarget && b.currentTarget.id || this._selectedEmbedTab || "advOptionsTab";
            dojo.query(".selected", dojo.byId("embedTabs")).removeClass("selected");
            dojo.query("#" + b, dojo.byId("embedTabs")).addClass("selected");
            if ("advOptionsTab" === b) {
                esri.hide(a.byId("addMarkerSymbolTab"));
                esri.show(a.byId("advancedOptionsTab"));
            } else {
                esri.hide(a.byId("advancedOptionsTab"));
                esri.show(a.byId("addMarkerSymbolTab"));
            }
        },

        _changeTab: function(b) {
            b = b && b.currentTarget && b.currentTarget.id || this._selectedTab || "configurableTab";

            dojo.query(".selected", dojo.byId("galleryTabs")).removeClass("selected");
            dojo.query("#" + b, dojo.byId("galleryTabs")).addClass("selected");

            if ("appBuilderTab" === b) {
                this._configureSettings = this._getItemProperties();
                this._setItemProperties(this._appBuilderSettings || this._configureSettings);
                if (this._stackContainer.selectedChildWidget !== this._stackAllOptions) {
                    this._lastPane = this._stackContainer.selectedChildWidget;
                } else {
                    this._lastPane = null;
                }
                this._stackContainer.selectChild(this._stackApplicationPublish);
                this._selectedTab = b;
                dijit.byId("publish-webmap-button").set("label", this.i18n.getStartedBtn);
                dojo.query(".configureApp").forEach(esri.hide);
                dojo.query(".appBuilder").forEach(esri.show);
            } else {
                this._appBuilderSettings = this._getItemProperties();
                this._setItemProperties(this._configureSettings || this._appBuilderSettings);
                this._stackContainer.selectChild(this._lastPane || this._stackApplicationGallery);
                this._selectedTab = b;
                dijit.byId("publish-webmap-button").set("label", this.i18n.savePublishBtn);
                dojo.query(".configureApp").forEach(esri.show);
                dojo.query(".appBuilder").forEach(esri.hide);
            }
        },
    });
});
