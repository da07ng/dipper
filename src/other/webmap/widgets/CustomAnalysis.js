/*
 * @Author: Esri
 * @Date:   2016-06-01 17:02:37
 * @Last Modified by:   Esri
 * @Last Modified time: 2016-06-01 20:21:41
 */

define([
    "dojo/_base/declare",
    "dojo/_base/lang",
    "dojo/_base/array",
    "dojo/_base/connect",
    "dojo/_base/json",
    "dojo/has",
    "dojo/json",
    "dojo/string",
    "dojo/dom-style",
    "dojo/dom-attr",
    "dojo/dom-construct",
    "dojo/query",
    "dojo/dom-class",
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    "dijit/_WidgetsInTemplateMixin",
    "dijit/_OnDijitClickMixin",
    "dijit/_FocusMixin",
    "dijit/registry",
    "esri/kernel",
    "mapwidgets/CustomAnalysisToolItem",
    "esri/dijit/analysis/utils",
    "dojo/i18n!esri/nls/jsapi",
    "dojo/text!./templates/template_custom_analysis.html"
], function(declare, lang, array, conn, A, q, B, C, g, r, domConstruct, h, D, s, t, u, v, w, k, x, e, utils, n, template) {
    declare("mapwidgets.Analysis", [s, t, u, v, w], {
        templateString: template,
        i18n: null,
        helpFileName: "Analysis",

        constructor: function(b, a) {
            this._pbConnects = [];
        },

        postMixInProperties: function() {
            this.inherited(arguments);
            this.i18n = {};
        },

        startup: function() {
            this.inherited(arguments);
            this.setupTools();
            utils.initHelpLinks(this.domNode);
        },

        destroy: function() {
            this.inherited(arguments);
            array.forEach(this._pbConnects, conn.disconnect);
            delete this._pbConnects;
        },

        setupTools: function() {
            var b = domConstruct.create("div");

            // 点集合
            var a = new e({
                name: '点集合',
                helpTopic: "AggregatePointsTool",
                toolIcon: "aggregateIcon"
            }, domConstruct.create("div", null, b));
            a.set("showComingSoonLabel", false);
            this._connect(a, "onToolSelect", lang.hitch(this, "onToolSelect"));

            // 临近汇总
            a = new e({
                name: '临近汇总',
                helpTopic: "SummarizeNearbyTool",
                toolIcon: "sumNearbyIcon"
            }, domConstruct.create("div", null, b));
            a.set("showComingSoonLabel", false);
            this._connect(a, "onToolSelect", lang.hitch(this, "onToolSelect"));

            // 范围内汇总
            a = new e({
                name: '范围内汇总',
                helpTopic: "SummarizeWithinTool",
                toolIcon: "sumWithinIcon"
            }, domConstruct.create("div", null, b));
            a.set("showComingSoonLabel", false);
            this._connect(a, "onToolSelect", lang.hitch(this, "onToolSelect"));

            // 查找现有位置
            a = new e({
                name: '查找现有位置',
                helpTopic: "FindExistingLocationsTool",
                toolIcon: "findLocationsIcon"
            }, domConstruct.create("div", null, b));
            a.set("showComingSoonLabel", false);
            this._connect(a, "onToolSelect", lang.hitch(this, "onToolSelect"));

            // 派生新位置
            a = new e({
                name: '派生新位置',
                helpTopic: "DeriveNewLocationsTool",
                toolIcon: "findNewLocationsIcon"
            }, domConstruct.create("div", null, b));
            a.set("showComingSoonLabel", false);
            this._connect(a, "onToolSelect", lang.hitch(this, "onToolSelect"));

            // 查找相似位置
            a = new e({
                name: '查找相似位置',
                helpTopic: "FindSimilarLocationsTool",
                toolIcon: "findSimilarLocationsIcon"
            }, domConstruct.create("div", null, b));
            a.set("showComingSoonLabel", false);
            this._connect(a, "onToolSelect", lang.hitch(this, "onToolSelect"));

            // 计算密度
            a = new e({
                name: '计算密度',
                helpTopic: "CalculateDensityTool",
                toolIcon: "createDensitySurfaceIcon"
            }, domConstruct.create("div", null, b));
            a.set("showComingSoonLabel", false);
            this._connect(a, "onToolSelect", lang.hitch(this, "onToolSelect"));

            // 查找热点
            a = new e({
                name: '查找热点',
                helpTopic: "FindHotSpotsTool",
                toolIcon: "findHotSpotsIcon"
            }, domConstruct.create("div", null, b));
            a.set("showComingSoonLabel", false);
            this._connect(a, "onToolSelect", lang.hitch(this, "onToolSelect"));

            // 点插值
            a = new e({
                name: '点插值',
                helpTopic: "InterpolatePointsTool",
                toolIcon: "createInterpolatedSurfaceIcon"
            }, domConstruct.create("div", null, b));
            a.set("showComingSoonLabel", false);
            this._connect(a, "onToolSelect", lang.hitch(this, "onToolSelect"));

            // 创建缓冲区
            a = new e({
                name: '创建缓冲区',
                helpTopic: "CreateBuffersTool",
                toolIcon: "buffersIcon"
            }, domConstruct.create("div", null, b));
            a.set("showComingSoonLabel", false);
            this._connect(a, "onToolSelect", lang.hitch(this, "onToolSelect"));

            // 查找最近点
            a = new e({
                name: '查找最近点',
                helpTopic: "FindNearestTool",
                toolIcon: "findClosestFacilityIcon"
            }, domConstruct.create("div", null, b));
            a.set("showComingSoonLabel", false);
            this._connect(a, "onToolSelect", lang.hitch(this, "onToolSelect"));

            // 融合边界
            a = new e({
                name: '融合边界',
                helpTopic: "DissolveBoundariesTool",
                toolIcon: "dissolveBoundariesIcon"
            }, domConstruct.create("div", null, b));
            a.set("showComingSoonLabel", false);
            this._connect(a, "onToolSelect", lang.hitch(this, "onToolSelect"));

            // 提取数据
            a = new e({
                name: '提取数据',
                helpTopic: "ExtractDataTool",
                toolIcon: "extractDataIcon"
            }, domConstruct.create("div", null, b));
            a.set("showComingSoonLabel", false);
            this._connect(a, "onToolSelect", lang.hitch(this, "onToolSelect"));

            // 合并图层
            a = new e({
                name: '合并图层',
                helpTopic: "MergeLayersTool",
                toolIcon: "mergeLayersIcon"
            }, domConstruct.create("div", null, b));
            a.set("showComingSoonLabel", false);
            this._connect(a, "onToolSelect", lang.hitch(this, "onToolSelect"));

            // 图层叠加
            a = new e({
                name: '图层叠加',
                helpTopic: "OverlayLayersTool",
                toolIcon: "overlayLayersIcon"
            }, domConstruct.create("div", null, b));
            a.set("showComingSoonLabel", false);
            this._connect(a, "onToolSelect", lang.hitch(this, "onToolSelect"));

            this._toolsPane.set("content", b);
        },

        _connect: function(b, a, c) {
            a = conn.connect(b, a, c);
            a._nodeId = b.id;
            this._pbConnects.push(a);
        },

        _getSelectedCategoryAttr: function() {
            return null;
        },

        _getSelectedPaneAttr: function() {
            return null;
        },

        _setSelectedCategoryAttr: function(b) {

        },

        hide: function(b) {

        },
        disable: function(b, a) {

        },
        onToolSelect: function(b) {}
    });
});
