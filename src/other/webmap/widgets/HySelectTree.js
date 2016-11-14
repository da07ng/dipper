/*
 * @Author: Esri
 * @Date:   2016-09-10 15:44:34
 * @Last Modified by:   Esri
 * @Last Modified time: 2016-09-10 16:02:44
 */

define([
  "dojo/_base/declare",
  "dijit/Tree"
], function(declare, Tree) {

  return declare("mapwidgets.HySelectTree", [Tree], {

    _createTreeNode: function(args) {

      if (args.item.children && args.item.children.length > 0) {
        return new dijit._TreeNode(args);
      } else {
        return new mapwidgets._StyledCheckboxTreeNode(args);
      }
    }
  });
});
