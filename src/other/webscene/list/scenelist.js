/*
 * @Author: Esri
 * @Date:   2016-06-30 15:33:15
 * @Last Modified by:   Esri
 * @Last Modified time: 2016-07-04 09:15:38
 */

define([
    "esri/core/declare",
    "dojo/on",
    "dojo/sniff",
    "dojo/query",
    "dojo/request",
    "dojo/dom-class",
    "dojo/dom-construct",
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    "dojo/text!./template/scenelist.html",
    "dojo/text!./template/sceneitem.html"
], function(declare, on, sniff, query, request, domClass, domConstruct, _WidgetBase, _TemplatedMixin, template, itemTemplate) {
    return declare([_WidgetBase, _TemplatedMixin], {

        open: false,
        baseClass: "sceneList",
        templateString: template,

        loadAllScenes: function() {
            var token;
            var portalUser = this._portal.getPortalUser();
            if (portalUser && portalUser.credential) {
                token = portalUser.credential.token;
            }

            var searchUrl = window.esriGeowConfig.restBaseUrl + 'search';
            if (configOptions) {
                if (-1 == searchUrl.indexOf(location.host)) {
                    searchUrl = configOptions.proxyUrl + '?' + searchUrl;
                }
            }

            if (token) {
                request.post(searchUrl, {
                    data: {
                        num: 100,
                        sortField: 'numviews',
                        sortOrder: 'desc',
                        q: 'orgid:0123456789ABCDEF -type:"CityEngine Web Scene" (type:"Web Scene")',
                        f: 'json',
                        token: token
                    },
                    timeout: 10000,
                    handleAs: 'json',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                }).then(function(resp) {
                    var container = query('div.resultSceneItems')[0];
                    var result;
                    if (container) {
                        container.innerHTML = '';

                        for (var i = resp.results.length - 1; i >= 0; i--) {
                            result = resp.results[i];
                            result.viewSceneUrl = window.esriGeowConfig.baseUrl + 'viewer/scene/viewer.html?webscene=' + result.id;
                            result.sceneThumbnailUrl = window.esriGeowConfig.restBaseUrl + 'content/items/' + result.id + '/info/' + result.thumbnail + '?token=' + token;
                            domConstruct.create('div', {
                                style: 'border-bottom: 1px solid #f3f3f3;',
                                innerHTML: dojo.string.substitute(itemTemplate, result)
                            }, container);
                        }
                    }
                });
            }
        },

        postCreate: function() {
            this._windowListener = on(window, "resize", this._recalculateInnerContentNodeHeight.bind(this));
        },

        _recalculateInnerContentNodeHeight: function() {
            if ((sniff("ff") || sniff("ie") || sniff("trident")) && this.domNode && 0 !== this.domNode.getClientRects().length) {
                var a = this.domNode.getClientRects()[0].height,
                    b = this.contentHeadNode.getClientRects()[0].height + this.navButtonsNode.getClientRects()[0].height;
                this.contentInnerScrollableNode.style.height = a - b - 20 + "px";
                console.log("new height:" + this.contentInnerScrollableNode.style.height);
            }
        },

        _setOpenAttr: function(a) {
            this._set("open", a);
            if (a) {
                this._recalculateInnerContentNodeHeight();
                domClass.remove(this.domNode, "collapsed");
            } else {
                domClass.add(this.domNode, "collapsed");
            }
        },

        _closeBtnNodeClickHandler: function() {
            this.set("open", !this.open);
        }
    });
});
