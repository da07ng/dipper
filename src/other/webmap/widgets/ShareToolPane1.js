/*
 * @Author: Esri
 * @Date:   2016-04-27 14:50:54
 * @Last Modified by:   Esri
 * @Last Modified time: 2016-06-07 15:40:39
 */

define([
    "dojo/_base/declare",
    "arcgisonline/sharing/dijit/dialog/ShareMapDlg",
    "dijit/_TemplatedMixin",
    "dijit/_WidgetsInTemplateMixin",
    "dojo/text!./templates/template_tool_share.html",
    "mapwidgets/MultiPortalShareOptions"
], function(declare, ShareMapDlg, TemplatedMixin, _WidgetsInTemplateMixin, template) {
    return declare("mapwidgets.ShareToolPane1", [ShareMapDlg, TemplatedMixin, _WidgetsInTemplateMixin], {

        templateString: template,

        statics: {
            _instance: null,

            getInstance: function() {
                if (!this._instance) {
                    this._instance = new mapwidgets.ShareToolPane1();
                }
                return this._instance;
            }
        },

        postMixInProperties: function() {
            this.inherited(arguments);
            this.i18n.chooseWhoCanView = '将项目分享给:';
            this.i18n.shareGroupsLabel = '以下的工作组:';
            this.i18n.share = '分享';
        }
    });
});
