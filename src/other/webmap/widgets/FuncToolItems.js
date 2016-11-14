/*
 * @Author: Esri
 * @Date:   2016-04-05 16:27:13
 * @Last Modified by:   Esri
 * @Last Modified time: 2016-07-13 15:53:48
 */

define([
    "dojo/_base/declare",
    "dojo/on",
    "dojo/_base/event",
    "dojo/query",
    "esri/dijit/analysis/utils",
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    "dijit/_WidgetsInTemplateMixin",
    "dojo/text!./templates/template_functool_items.html"
], function(declare, on, event, query, analysisUtils, _WidgetBase, TemplatedMixin, _WidgetsInTemplateMixin, template) {
    return declare("mapwidgets.FuncToolItems", [_WidgetBase, TemplatedMixin, _WidgetsInTemplateMixin], {

        /**
         * templateString
         * @type {String}
         */
        templateString: template,

        startup: function() {
            query('span.helpContainer', this.domNode).forEach(function(span) {
                analysisUtils.initHelpLinks(span, true, {
                    isSingleTenant: true,
                    helpFileName: 'Analysis'
                });
            });

            query('[detailstopic]', this.domNode).forEach(function(detail) {
                on(detail, 'click', function(evt) {
                    event.stop(evt);
                    var a = window.open();
                    setTimeout(function() {
                        a.location = 'funcdetails.html?type=' + dojo.getAttr(detail, 'detailstopic');
                    }, 100);
                });
            });
        },

        onselect: function(a, b) {},

        _triggerSelect: function(evt, toolName) {
            this.onselect(evt, toolName);
        },

        /**
         * 聚合点
         * @return {undefined}
         */
        showTool_AggregatePoints: function(evt) {
            this._triggerSelect(evt, 'AggregatePoints');
        },

        /**
         * 临近汇总
         * @return {undefined}
         */
        showTool_SummarizeNearby: function(evt) {
            this._triggerSelect(evt, 'SummarizeNearby');
        },

        /**
         * 范围内汇总
         * @return {undefined}
         */
        showTool_SummarizeWithin: function(evt) {
            this._triggerSelect(evt, 'SummarizeWithin');
        },

        /**
         * 查找现有位置
         * @return {undefined}
         */
        showTool_FindExistingLocations: function(evt) {
            this._triggerSelect(evt, 'FindExistingLocations');
        },

        /**
         * 派生新位置
         * @return {undefined}
         */
        showTool_DeriveNewLocations: function(evt) {
            this._triggerSelect(evt, 'DeriveNewLocations');
        },

        /**
         * 查找相似位置
         * @return {undefined}
         */
        showTool_FindSimilarLocations: function(evt) {
            this._triggerSelect(evt, 'FindSimilarLocations');
        },

        /**
         * 计算密度
         * @return {undefined}
         */
        showTool_CalculateDensity: function(evt) {
            this._triggerSelect(evt, 'CalculateDensity');
        },

        /**
         * 查找热点
         * @return {undefined}
         */
        showTool_FindHotSpots: function(evt) {
            this._triggerSelect(evt, 'FindHotSpots');
        },

        /**
         * 点插值
         * @return {undefined}
         */
        showTool_InterpolatePoints: function(evt) {
            this._triggerSelect(evt, 'InterpolatePoints');
        },


        /**
         * 创建缓冲区
         * @return {undefined}
         */
        showTool_CreateBuffers: function(evt) {
            this._triggerSelect(evt, 'CreateBuffers');
        },

        /**
         * 查找最近点
         * @return {undefined}
         */
        showTool_FindNearest: function(evt) {
            this._triggerSelect(evt, 'FindNearest');
        },

        /**
         * 融合边界
         * @return {undefined}
         */
        showTool_DissolveBoundaries: function(evt) {
            this._triggerSelect(evt, 'DissolveBoundaries');
        },

        /**
         * 提取数据
         * @return {undefined}
         */
        showTool_ExtractData: function(evt) {
            this._triggerSelect(evt, 'ExtractData');
        },

        /**
         * 合并图层
         * @return {undefined}
         */
        showTool_MergeLayers: function(evt) {
            this._triggerSelect(evt, 'MergeLayers');
        },

        /**
         * 图层叠加
         * @return {undefined}
         */
        showTool_OverlayLayers: function(evt) {
            this._triggerSelect(evt, 'OverlayLayers');
        }
    });
});
