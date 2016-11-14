/*
 * @Author: Esri
 * @Date:   2016-06-01 19:59:40
 * @Last Modified by:   Esri
 * @Last Modified time: 2016-07-13 16:06:07
 */

define([
    "dojo/_base/declare",
    "dojo/_base/event",
    "esri/dijit/analysis/AnalysisToolItem",
    "dojo/text!./templates/template_custom_analysis_tool_item.html"
], function(declare, event, AnalysisToolItem, template) {
    return declare([AnalysisToolItem], {

        templateString: template,

        _showdetails: function(evt) {
            event.stop(evt);

            var a = window.open();
            setTimeout(dojo.hitch(this, function() {
                a.location = 'funcdetails.html?type=' + this.helpTopic;
            }), 100);
        }
    });
});
