/*
 * @Author: Esri
 * @Date:   2016-07-04 09:55:15
 * @Last Modified by:   Esri
 * @Last Modified time: 2016-07-05 15:15:01
 */

define([
    "esri/core/declare",
    "dojo/dom",
    "dojo/on",
    "dojo/query",
    "dojo/dom-style",
    "dojo/request",
    "dojo/json",
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    "dojo/text!./template/ShareWebSceneOptions.html",
    "dojo/text!./template/ShareWebSceneGroupItem.html"
], function(declare, dom, on, query, domStyle, request, JSON, _WidgetBase, _TemplatedMixin, template, groupItemTmpl) {
    return declare([_WidgetBase, _TemplatedMixin], {

        sharingInfo: null,
        userGroups: [],
        templateString: template,

        postCreate: function() {
            this.loadConnections();
        },

        loadConnections: function() {
            dojo.subscribe("shareOptionsSetup",
                function() {
                    dojo.style(dojo.byId("share-loading"), "display", "none");
                    domStyle.set(dom.byId('share-everyone-check_div'), 'display', 'block');
                    domStyle.set(dom.byId('share-groups-div'), 'display', 'block');
                });
        },

        show: function() {
            dojo.style(dojo.byId("share-loading"), "display", "block");
            domStyle.set(dom.byId('share-everyone-check_div'), 'display', 'none');
            domStyle.set(dom.byId('share-groups-div'), 'display', 'none');

            this.searchAllGroups().then(dojo.hitch(this, function(resp) {
                if (resp && resp.code === '200') {
                    this.userGroups = resp.data.results;
                    console.log(this.userGroups);
                    var editorReadySignal = setInterval(dojo.hitch(this, function() {
                        if (window.webSceneViewer.editor) {
                            clearInterval(editorReadySignal);
                            this.searchShareInfo().then(dojo.hitch(this, function(resp) {
                                if (resp && resp.code === '200') {
                                    this.sharingInfo = resp.data.sharing;

                                    if (this.sharingInfo.access === 'public') {
                                        this._shareEveryoneCheck.checked = true;
                                    } else {
                                        this._shareEveryoneCheck.checked = false;
                                    }
                                    this.buildGroupList();
                                }
                            }));
                        }
                    }), 1E2);
                }
            }));
        },

        buildGroupList: function() {
            dom.byId('share-groups-list').innerHTML = '';
            this.itemsAreSharedToGroups = ",";

            var sharedGroup;
            for (var i = this.sharingInfo.groups.length - 1; i >= 0; i--) {
                sharedGroup = this.sharingInfo.groups[i];
                this.itemsAreSharedToGroups += sharedGroup + ",";
            }

            var listStr = '';
            var hasGroupChecked = false;
            var groupCheckStatus;
            for (i = this.userGroups.length - 1; i >= 0; i--) {
                var group = this.userGroups[i];
                if (this.itemsAreSharedToGroups.indexOf("," + group.id + ",") > -1) {
                    groupCheckStatus = "checked";
                    hasGroupChecked = true;
                } else {
                    groupCheckStatus = "";
                }

                listStr += dojo.string.substitute(groupItemTmpl, dojo.mixin(group, {
                    index: i,
                    status: groupCheckStatus
                }));
            }

            this._shareGroupList.innerHTML = listStr;
            if (hasGroupChecked) {
                this._shareGroupCheck.checked = true;
            } else {
                this._shareGroupCheck.checked = false;
            }
            on(dom.byId('share-groups-list'), 'click', this.checkGroup);
            on(dom.byId("share-groups-check"), "click", this.checkGroups);
            dojo.publish('shareOptionsSetup');
        },

        checkGroup: function(c) {
            if (true === c.target.checked && -1 < c.target.id.indexOf("group_")) {
                dom.byId('share-groups-check').checked = 'checked';
            }
        },

        checkGroups: function(e) {
            if (true === e.target.checked) {
                query('input:check', dom.byId('share-groups-list')).forEach(function(input) {
                    input.checked = 'checked';
                });
            } else {
                query('input:check', dom.byId('share-groups-list')).forEach(function(input) {
                    input.checked = '';
                });
            }
        },

        searchAllGroups: function() {
            return request.post(window.baseOprUrl + '/portal/searchGroup', {
                data: JSON.stringify({
                    domain: hostUrl + '/' + portalRoot,
                    q: 'ispublic:true AND accountid:0123456789ABCDEF',
                    "start": 1,
                    "num": 100,
                    "sortField": "title",
                    "sortOrder": "asc",
                    "bbox": ""
                }),
                timeout: 10000,
                handleAs: 'json',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            });
        },

        searchShareInfo: function() {
            return request.post(window.baseOprUrl + '/portal/shareItemOfGroup', {
                data: JSON.stringify({
                    "item": window.webSceneViewer.editor.webScene.portalItemProperties.id,
                    "username": window.webSceneViewer.editor.webScene.portalItemProperties.owner,
                    "domain": hostUrl + '/' + portalRoot,
                    "currentFolder": window.webSceneViewer.editor.webScene.portalItemProperties.folderId
                }),
                timeout: 10000,
                handleAs: 'json',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            });
        },

        isEveryoneChecked: function() {
            return !!dom.byId('share-everyone-check').checked;
        },

        getSharedGroups: function() {
            var grouplist = [];

            query('input:check', dom.byId('share-groups-list')).forEach(function(input) {
                if (input.checked) {
                    grouplist.push(input.value);
                }
            });

            return grouplist.join(',');
        },

        getUnsharedGroups: function() {
            var grouplist = [];

            query('input:check', dom.byId('share-groups-list')).forEach(dojo.hitch(this, function(input) {
                if (!input.checked && this.sharingInfo.groups.indexOf(input.value) > -1) {
                    grouplist.push(input.value);
                }
            }));

            return grouplist.join(',');
        }
    });
});
