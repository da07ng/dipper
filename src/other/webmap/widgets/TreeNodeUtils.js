/*
 * @Author: Esri
 * @Date:   2016-05-03 09:17:48
 * @Last Modified by:   Esri
 * @Last Modified time: 2016-07-20 10:08:24
 */

define([
    "dojo/_base/declare",
    "dojo/request",
    "dojo/Deferred",
    "dojo/query"
], function(declare, request, Deferred, query) {
    return declare(null, {

        _qType: ' AND NOT owner:{esri TO esri_zzzzz}  NOT type:"Application" (type: "Web Map" OR type: "Feature Service" OR type: "Image Service" OR type: "Map Service")',
        layerAddedIds: [],

        _getSearchUrl: function() {
            if (configOptions) {
                var searchUrl = window.esriGeowConfig.restBaseUrl + 'search';

                if (-1 < searchUrl.indexOf(location.host)) {
                    return searchUrl;
                } else {
                    return configOptions.proxyUrl + '?' + searchUrl;
                }
            }
        },

        loadMapLayersByTag: function(tag) {
            var deferred = new Deferred();

            request.post(this._getSearchUrl(), {
                data: {
                    num: 100,
                    start: 1,
                    sortField: 'numviews',
                    sortOrder: 'desc',
                    q: 'tags:' + tag + this._qType,
                    f: 'json',
                    token: arcgisonline.sharing.util.getToken()
                },
                timeout: 10000,
                handleAs: 'json',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }).then(dojo.hitch(this, function(resp) {
                if (resp && resp.total <= resp.num) {
                    deferred.resolve(resp);
                } else if (resp && resp.num < resp.total) {
                    request.post(this._getSearchUrl(), {
                        data: {
                            num: 100,
                            start: 101,
                            sortField: 'numviews',
                            sortOrder: 'desc',
                            q: 'tags:' + tag + this._qType,
                            f: 'json',
                            token: arcgisonline.sharing.util.getToken()
                        },
                        timeout: 10000,
                        handleAs: 'json',
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded'
                        }
                    }).then(function(resp1) {
                        if (resp1 && resp1.results) {
                            resp.results = resp.results.concat(resp1.results);
                        }

                        deferred.resolve(resp);
                    });
                }
            }));

            return deferred.promise;
        },

        loadTagTreeDataSource: function(rootTag) {
            return request.post(window.tagqueryUrl, {
                data: {
                    catalogparentid: rootTag
                },
                handleAs: 'json',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            });
        },

        _getTagQueryUrl: function() {
            var queryUrl = window.tagqueryUrl;
            if (queryUrl) {
                if (-1 < queryUrl.indexOf(location.host)) {
                    return queryUrl;
                } else {
                    return configOptions.proxyUrl + '?' + queryUrl;
                }
            }
        },

        disconnectHandlers: function() {
            this.layerAddedIds = [];
            if (this.layerAddedHandler) dojo.unsubscribe(this.layerAddedHandler);
            if (this.layerAddedNoRemoveHandler) dojo.unsubscribe(this.layerAddedNoRemoveHandler);
            if (this.layerAddFailedHandler) dojo.unsubscribe(this.layerAddFailedHandler);
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

        addLayer: function(id, type, evt) {
            if (evt && evt.preventDefault) {
                evt.preventDefault();
            }
            this.disconnectHandlers();

            var pageUrl = document.location.protocol + '//' + document.location.host + document.location.pathname;
            if (type === 'Web Map') {
                if (arcgisonline.map.main.mapHasChanged) {
                    arcgisonline.sharing.dijit.dialog.OpenMapDlg.prototype.statics.getInstance().show(pageUrl,
                        null,
                        arcgisonline.map.main.mapLayers,
                        arcgisonline.map.main.mapTables,
                        arcgisonline.map.save_open.webMapInfo ? arcgisonline.map.save_open.webMapInfo.title : null);
                } else {
                    window.location = pageUrl + '?webmap=' + id;
                }
            } else {
                if (evt) {
                    evt.target.parentNode.innerHTML = "<div style='margin-right: 10px;' class='dataressearch circularLoadingIcon esriFloatTrailing'></div>";
                }
                this.layerAddedHandler = dojo.subscribe("layerAdded", dojo.hitch(this, "onLayerAdded"));
                this.layerAddFailedHandler = dojo.subscribe("layerAddFailed", dojo.hitch(this, "onLayerAddFailed", id));
                this.layerAddedNoRemoveHandler =
                    dojo.subscribe("layerAddedNoRemove", dojo.hitch(this, "onLayerAddedNoRemove", id));
                arcgisonline.map.save_open.openServiceItemCards(id, false);
            }
        },

        onLayerAdded: function(d) {
            var e = arcgisonline.map.main.map.getLayer(d),
                c;
            if (e) {
                c = arcgisonline.map.main.getParameterList(e);
                if (e.type === 'Feature Layer')
                    dijit.byId('tocPanel').smartMappingRenderer(d, null);
            } else
                for (e = 0; e < arcgisonline.map.main.mapTables.length; e++) {
                    var b = arcgisonline.map.main.mapTables[e];
                    if (b.id === d) c = b;
                }
            if (c && (c = c.itemId)) {
                this.layerAddedIds.push(d);
                var idList = this.layerAddedIds;
                query('div.circularLoadingIcon.dataressearch').forEach(function(node, i, nl) {
                    node.parentNode.innerHTML =
                        '<a class="filter-item-remove" href="JavaScript:void(0);" onclick="JavaScript:mapwidgets.utils.removeLayer(\'' + c + '\',\'' +
                        idList.toString().replace(/\'/g, "\\'") + '\', event);"></a>';
                });
            }
            arcgisonline.map.leftPanel.showLeftContentPanel();
        },

        onLayerAddFailed: function(d) {
            if (0 === this.layerAddedIds.length) {
                query('div.circularLoadingIcon.dataressearch').forEach(function(node, i, nl) {
                    node.parentNode.innerHTML =
                        "<span style='color: #999;'>不可用</span>";
                });
            }
            this.disconnectHandlers();
        },

        onLayerAddedNoRemove: function(d, e) {
            query('div.circularLoadingIcon.dataressearch').forEach(function(node, i, nl) {
                node.parentNode.innerHTML =
                    '\x3ca style="position: relative; bottom: 26px; right: 20px;" href\x3d"JavaScript:void(0);" onclick="JavaScript:mapwidgets.utils.addLayer(\'' + d + "', event);\"\x3e\x3c/A\x3e";
            });
            this.disconnectHandlers();
        },

        removeLayer: function(d, e, c) {
            if (c && c.preventDefault) {
                c.preventDefault();
            }
            this.disconnectHandlers();
            e = e.split(",");
            for (var i = 0; i < e.length; i++) {
                arcgisonline.map.layer.removeCompleteLayer(e[i]);
            }
            var type = '';
            dojo.forEach(dijit.byId('dataResCata').searchResultData, function(data) {
                if (data.id === d) {
                    type = data.type;
                }
            });

            c.target.parentNode.innerHTML = '<a class="filter-item-add" href="JavaScript:void(0);" onclick="JavaScript:mapwidgets.utils.addLayer(\'' + d + "','" + type + "',event);\"\x3e\x3c/A\x3e";
        }
    });
});
