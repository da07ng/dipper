/*
 * @Author: Esri
 * @Date:   2016-09-10 15:41:43
 * @Last Modified by:   Esri
 * @Last Modified time: 2016-09-10 16:10:23
 */

define([
  "dojo/dom-style",
  "dojo/_base/declare",
  "dijit/_TemplatedMixin",
  "dijit/_WidgetsInTemplateMixin",
  "dojo/text!./templates/template_styled_treenode_checkbox.html"
], function(domStyle, declare, TemplatedMixin, _WidgetsInTemplateMixin, template) {

  return declare("mapwidgets._StyledCheckboxTreeNode", [dijit._TreeNode, TemplatedMixin, _WidgetsInTemplateMixin], {

    /**
     * 自定义模板
     * @type {String}
     */
    templateString: template,

    setSelected: function(selected) {
      if (selected) {
        this.nodeCheck.checked = 'checked';
      } else {
        this.nodeCheck.checked = '';
      }
    }
  });
});
