/*
 * @Author: Esri
 * @Date:   2016-03-30 12:00:42
 * @Last Modified by:   Esri
 * @Last Modified time: 2016-08-31 15:39:12
 */

define([
    "dojo/dom-style",
    "dojo/_base/declare",
    "mapwidgets/TreeNodeUtils",
    "dijit/_TemplatedMixin",
    "dijit/_WidgetsInTemplateMixin",
    "dojo/text!./templates/template_styled_treenode_secondlevel.html"
], function(domStyle, declare, TreeNodeUtils, TemplatedMixin, _WidgetsInTemplateMixin, template) {

    return declare("mapwidgets._StyledSecondLevelTreeNode", [dijit._TreeNode, TemplatedMixin, _WidgetsInTemplateMixin], {

        /** @type {Boolean} 表示当前节点所表示的标签对应的图层是否已加载 */
        _isLayerLoaded: false,

        startup: function() {
            this.inherited(arguments);
        },

        /**
         * 自定义模板
         * @type {String}
         */
        templateString: template,

        /**
         * [onExpandOrCollapse description]
         * @param  {[type]} evt [description]
         */
        onExpandOrCollapse: function(evt) {
            if (this.isExpanded) {
                domStyle.set(this.angle, 'transform', 'rotate(0deg)');
            } else {
                domStyle.set(this.angle, 'transform', 'rotate(90deg)');
            }
        },

        loadLabledLayers: function() {
            if (this._isLayerLoaded) {
                return;
            }

            if (!mapwidgets.utils) {
                mapwidgets.utils = new TreeNodeUtils();
            }

            mapwidgets.utils.loadMapLayersByTag(this.item.code)
                .then(dojo.hitch(this, function(resp) {
                    this._isLayerLoaded = true;

                    if (resp.results && resp.results.length) {
                        this.setChildItems(resp.results);
                    }
                }));
        }
    });
});
