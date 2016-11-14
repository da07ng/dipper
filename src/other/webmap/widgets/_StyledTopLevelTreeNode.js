/*
 * @Author: Esri
 * @Date:   2016-03-11 09:32:50
 * @Last Modified by:   Esri
 * @Last Modified time: 2016-08-31 15:09:59
 */

define([
    "dojo/dom-style",
    "dojo/_base/declare",
    "mapwidgets/TreeNodeUtils",
    "dijit/_TemplatedMixin",
    "dijit/_WidgetsInTemplateMixin",
    "dojo/text!./templates/template_styled_treenode_toplevel.html"
], function(domStyle, declare, TreeNodeUtils, TemplatedMixin, _WidgetsInTemplateMixin, template) {

    return declare("mapwidgets._StyledTopLevelTreeNode", [dijit._TreeNode, TemplatedMixin, _WidgetsInTemplateMixin], {

        /** @type {Boolean} 表示当前节点所表示的标签对应的图层是否已加载 */
        _isLayerLoaded: false,

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
                        this.setChildItems(this._filterHengYangFeatureLayer(resp.results));
                    }
                }));
        },

        /**
         * 衡阳市特殊需求；Server发服务时出现同名对象，
         * 保留Feature Service
         * 去掉Map Service
         * @param  {[type]} dataArr [description]
         * @return {[type]}         [description]
         */
        _filterHengYangFeatureLayer: function(dataArr) {

            var flag = false;
            for (var i = dataArr.length - 1; i >= 0; i--) {
                flag = false;
                for (var j = i - 1; j >= 0; j--) {
                    if (i !== j && dataArr[i].title == dataArr[j].title) {
                        if (dataArr[i].type === 'Feature Service' && dataArr[j].type === 'Map Service') {
                            dataArr.splice(j, 1);
                            i--;
                            flag = true;
                            break;
                        } else if (dataArr[j].type === 'Feature Service' && dataArr[i].type === 'Map Service') {
                            dataArr.splice(i, 1);
                            flag = true;
                            break;
                        }
                    }
                }

                if (flag) {
                    continue;
                }
            }

            return dataArr;
        }
    });
});
