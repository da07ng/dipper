/*
 * @Author: Esri
 * @Date:   2016-03-11 09:27:45
 * @Last Modified by:   Esri
 * @Last Modified time: 2016-05-03 08:59:11
 */

define([
    "dojo/_base/declare",
    "dijit/Tree"
], function(declare, Tree) {

    return declare("mapwidgets.StyledTree", [Tree], {

        _createTreeNode: function(args) {
            if (args.indent <= 0) {
                return new mapwidgets._StyledTopLevelTreeNode(args);
            } else if (args.item.code) {
                // 当code属性不为空时，表示该节点为标签节点
                // 否则，表示该节点为图层节点
                return new mapwidgets._StyledSecondLevelTreeNode(args);
            } else {
                return new mapwidgets._StyledTreeNode(args);
            }
        }
    });
});
