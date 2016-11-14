/*
 * @Author: Esri
 * @Date:   2016-07-04 09:26:53
 * @Last Modified by:   Esri
 * @Last Modified time: 2016-07-05 14:57:58
 */

define([
    "esri/core/declare",
    "dojo/on",
    "dojo/request",
    "dojo/promise/all",
    "dojo/json",
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    "dojo/text!./template/ShareWebSceneDialog.html",
    "websceneshare/ShareWebSceneOptions"
], function(declare, on, request, all, JSON, _WidgetBase, _TemplatedMixin, template, ShareOptions) {

    return declare([_WidgetBase, _TemplatedMixin], {
        templateString: template,

        postCreate: function() {
            this.loadConnections();

            this.shareOpts = new ShareOptions();
            this.shareOpts.startup();
            this.shareOpts.placeAt(this.shareOptionsContainer);
        },

        loadConnections: function() {
            on(this._saveBtn, 'click', dojo.hitch(this, this.shareItemClick));
        },

        shareItemClick: function() {
            all([this.shareItem(), this.unshareItem()]).then(function() {
                window.webSceneViewer.viewer.menu.tabs[2].click();
            });
        },

        show: function() {
            this.shareOpts.show();
        },

        shareItem: function() {
            return request.post(window.baseOprUrl + '/portal/shareItem', {
                data: JSON.stringify({
                    domain: hostUrl + '/' + portalRoot,
                    everyone: this.shareOpts.isEveryoneChecked(),
                    account: undefined,
                    items: window.webSceneViewer.editor.webScene.portalItemProperties.id,
                    groups: this.shareOpts.getSharedGroups(),
                    token: window.webSceneViewer.viewer.portal.getPortalUser().credential.token
                }),
                timeout: 10000,
                handleAs: 'json',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            });
        },

        unshareItem: function() {
            return request.post(window.baseOprUrl + '/portal/unShareItem', {
                data: JSON.stringify({
                    domain: hostUrl + '/' + portalRoot,
                    items: window.webSceneViewer.editor.webScene.portalItemProperties.id,
                    groups: this.shareOpts.getUnsharedGroups(),
                    token: window.webSceneViewer.viewer.portal.getPortalUser().credential.token
                }),
                timeout: 10000,
                handleAs: 'json',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            });
        }
    });
});
