/*
 * @Author: Esri
 * @Date:   2016-04-15 14:14:55
 * @Last Modified by:   Esri
 * @Last Modified time: 2016-04-15 14:17:17
 */

define([
    "dojo/_base/declare",
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    "dijit/_WidgetsInTemplateMixin",
    "dojo/text!./templates/template_floating_map_toolbar.html"
], function(declare, _WidgetBase, TemplatedMixin, _WidgetsInTemplateMixin, template) {
    return declare("mapwidgets.FloatingMapToolbar", [_WidgetBase, TemplatedMixin, _WidgetsInTemplateMixin], {


        /**
         * templateString
         * @type {String}
         */
        templateString: template,
    });
});
