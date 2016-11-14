/*
 * @Author: Esri
 * @Date:   2016-03-11 09:32:50
 * @Last Modified by:   Esri
 * @Last Modified time: 2016-08-31 17:13:21
 */

define([
    "dojo/_base/declare",
    "dojo/on",
    "dojo/request",
    "dojo/query",
    "dojo/string",
    "dojo/aspect",
    "dojo/dom-style",
    "dojo/dom-class",
    "dojo/dom-construct",
    "dojo/dom-geometry",
    "dijit/TooltipDialog",
    "dijit/popup",
    "dijit/_TemplatedMixin",
    "dijit/_WidgetsInTemplateMixin",
    "dojo/text!./templates/template_styled_treenode.html",
    "dojo/text!./templates/template_styled_treenode_tooltip.html"
], function(declare, on, request, query, string, aspect, domStyle, domClass, domConstruct, domGeometry, TooltipDialog, popup, TemplatedMixin, _WidgetsInTemplateMixin, template, tooltipTemplate) {
    return declare("mapwidgets._StyledTreeNode", [dijit._TreeNode, TemplatedMixin, _WidgetsInTemplateMixin], {

        startup: function() {
            var token;
            this.inherited(arguments);

            this.item.iconUrl = this._getIconUrl();
            this.item.iconTitle = arcgisonline.sharing.geow.Content.changeTypename(this.item, false);
            this.item.canUseAsBasemap = "Map Service" == this.item.type ||
                "Image Service" == this.item.type ||
                "Vector Tile Service" == this.item.type ||
                "WMS" == this.item.type;
            this.item.basemapDisplay = this.item.canUseAsBasemap ? 'display: inline;' : 'display: none;';

            if (this.item.thumbnail) {
                token = arcgisonline.sharing.util.getToken();
                this.item.thumbnailUrl = esriGeowConfig.restBaseUrl + "content/items/" + this.item.id + "/info/" +
                    this.item.thumbnail + (token ? "?token=" + token : "");
            } else {
                this.item.thumbnailUrl = esriGeowConfig.baseUrl + '../portalimages/desktopapp.png';
            }

            if (this.item.type === 'Web Map') {
                domStyle.set(this.addToMap, 'display', 'none');
            } else {
                domStyle.set(this.viewInMap, 'display', 'none');
            }

            dojo.setAttr(this.labelNode, 'innerHTML', this.item.title);
            dojo.setAttr(this.labelNode, 'title', this.item.title);

            domConstruct.create('img', {
                'src': this.item.iconUrl
            }, this.itemIconNode);
            this.resetLabelWidth();

            aspect.after(dijit.byId('leftDataResContentPane'), 'resize', dojo.hitch(this, this.resetLabelWidth));
        },

        templateString: template,

        resetLabelWidth: function() {
            domStyle.set(this.labelNode, 'width', dojo.coords('leftDiv').w - 180 + 'px');
        },

        _getIconUrl: function() {
            return arcgisonline.sharing.geow.Content._getItemIconUrl(this.item);
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

        addLayerToMap: function() {
            var pageUrl = document.location.protocol + '//' + document.location.host + document.location.pathname;
            if (this.item.type === 'Web Map') {
                if (arcgisonline.map.main.mapHasChanged) {
                    arcgisonline.sharing.dijit.dialog.OpenMapDlg.prototype.statics.getInstance().show(pageUrl,
                        null,
                        arcgisonline.map.main.mapLayers,
                        arcgisonline.map.main.mapTables,
                        arcgisonline.map.save_open.webMapInfo ? arcgisonline.map.save_open.webMapInfo.title : null);
                } else {
                    window.location = pageUrl + '?webmap=' + this.item.id;
                }
            } else {
                this._busyIndi.style.opacity = 1;
                this.layerAddedHandler = dojo.subscribe("layerAdded", dojo.hitch(this, "onLayerAdded"));
                this.layerAddFailedHandler = dojo.subscribe("layerAddFailed", dojo.hitch(this, "onLayerAdded"));
                this.layerAddedNoRemoveHandler = dojo.subscribe("layerAddedNoRemove", dojo.hitch(this, "onLayerAdded"));
                arcgisonline.map.save_open.openServiceItemCards(this.item.id, false);
            }
        },

        disconnectHandlers: function() {
            if (this.layerAddedHandler) dojo.unsubscribe(this.layerAddedHandler);
            if (this.layerAddedNoRemoveHandler) dojo.unsubscribe(this.layerAddedNoRemoveHandler);
            if (this.layerAddFailedHandler) dojo.unsubscribe(this.layerAddFailedHandler);
        },

        onLayerAdded: function(d) {
            var e = arcgisonline.map.main.map.getLayer(d);
            if (e && e.type === 'Feature Layer') {
                dijit.byId('tocPanel').smartMappingRenderer(d, null);
            }

            this._busyIndi.style.opacity = 0;
            arcgisonline.map.leftPanel.showLeftContentPanel();
            this.disconnectHandlers();
        },

        closeSummaryPopup: function() {
            popup.close(this.summaryDlg);
        },

        _showPopupSummary: function(evt) {
            var pos = domGeometry.position(this.domNode);

            this.summaryDlg = new TooltipDialog({
                preload: true,
                content: string.substitute(tooltipTemplate, this.item),
                "class": "esriHelpPopup esriHelpPopupWrapper esriAnalyisHelpWindow"
            });
            this.summaryDlg.startup();

            var afterOpenHandler = aspect.after(popup, 'open', dojo.hitch(this, function() {
                query(".tooltipCloseIcon", this.summaryDlg.domNode).on("click", dojo.hitch(this, this.closeSummaryPopup));
                afterOpenHandler.remove();
            }));
            popup.open({
                popup: this.summaryDlg,
                x: pos.x + pos.w + 20,
                y: Math.min(Math.max(160, evt.pageY), document.body.clientHeight - 253),
                onCancel: dojo.hitch(this, function() {
                    this.closeSummaryPopup();
                }),
                onExecute: function() {
                    this.closeSummaryPopup();
                }
            });
        },

        /**
         * 显示图层简介
         * @return {undefined}
         */
        showLayerSummary: function(evt) {
            if (this.summaryDlg) {
                popup.close(this.summaryDlg);
                this.summaryDlg.destroy();
                this.summaryDlg = null;
            }

            this._showPopupSummary(evt);
        },

        /**
         * 显示图层详情
         * @return {undefined}
         */
        showLayerDetails: function() {
            window.open('item.html?id=' + this.item.id + '&activeMenu=dataGallery');
        },

        showToolBtn: function() {
            domStyle.set(this.ellipsis, 'visibility', 'visible');
        },

        hideToolBtn: function() {
            domStyle.set(this.ellipsis, 'visibility', 'hidden');
        },


		showTools: function() {
			domStyle.set(this.toolsContainer, 'visibility', 'visible');
		},

		hideTools: function() {
			domStyle.set(this.toolsContainer, 'visibility', 'hidden');
		}
    });
});
