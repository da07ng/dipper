/*
 * @Author: Esri
 * @Date:   2016-06-01 16:45:19
 * @Last Modified by:   Esri
 * @Last Modified time: 2016-06-02 09:24:09
 */

define([
    "dojo/_base/declare",
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    "dijit/_WidgetsInTemplateMixin",
    "dojo/text!./templates/template_custom_analysis_category.html",
    "mapwidgets/CustomAnalysis"
], function(declare, _WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin, template) {
    declare("mapwidgets.analysisCategory", [_WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin], {

        i18n: null,
        analysisTool: null,
        featureLayers: null,
        analysisLayer: null,

        /**
         * templateString
         * @type {String}
         */
        templateString: template,

        constructor: function(b, a) {
            if (null !== b) {
                if (b.featureLayers) {
                    this.featureLayers = b.featurelayers;
                }

                if (b.containerNode) {
                    this.container = b.containerNode;
                }

                if (b.analysisLayer) {
                    this.analysisLayer = b.analysisLayer;
                }

                if (b.selectedCategory) {
                    this.selectedCategory = b.selectedCategory;
                }

                if (b.analysisType) {
                    this.analysisType = b.analysisType;
                }

                this._pbConnects = [];
            }
        },

        postMixInProperties: function() {
            this.inherited(arguments);
            this.i18n = {};
            dojo.mixin(this.i18n, dojo.i18n.getLocalization("arcgisonline", "arcgisonline").common);
            dojo.mixin(this.i18n, dojo.i18n.getLocalization("arcgisonline", "arcgisonline").tocPanel);
        },

        postCreate: function() {
            this.inherited(arguments);
            this.container.addChild(dijit.byId(this.id));
        },

        startup: function() {
            this.inherited(arguments);

            this.analysisTool = new mapwidgets.Analysis({}, this.aggregateCtr);
            this.analysisTool.startup();

            if (this.selectedCategory) {
                this.analysisTool.set("selectedCategory", this.selectedCategory);
            }
            if (!arcgisonline.map.dijit.toc.analysis.canPerformDriveAnalysis()) this.analysisTool.hide("CreateDriveTimeAreasTool");
            if (!arcgisonline.map.dijit.toc.analysis.canPerformPlanRoutesAnalysis()) this.analysisTool.hide("PlanRoutesTool");
            if (!arcgisonline.map.dijit.toc.analysis.canPerformODAnalysis()) this.analysisTool.hide("ConnectOriginsToDestinationsTool");
            if (!arcgisonline.map.dijit.toc.analysis.canPerformGeoEnrichment()) this.analysisTool.hide("EnrichLocationsCategory");
            if (!arcgisonline.map.dijit.toc.analysis.canPerformElevationAnalysis()) {
                this.analysisTool.hide("TraceDownstreamTool");
                this.analysisTool.hide("CreateWatershedsTool");
                this.analysisTool.hide("CreateViewshedTool");
            }

            this.analysisTool.disable("ExtractDataTool", 0 === this.featureLayers.length && !this.analysisLayer);
            this.analysisTool.disable("MergeLayersTool", 2 > this.featureLayers.length && !this.analysisLayer);
            this._loadConnections();
            this.adjustHeight();
        },

        destroy: function() {
            this.inherited(arguments);
            dojo.forEach(this._pbConnects, dojo.disconnect);
            delete this._pbConnects;
        },

        clear: function() {
            dojo.query(".esriAnalyisHelpWindow").forEach(function(b) {
                dijit.popup.close(dijit.byNode(b));
            });
        },

        _loadConnections: function() {
            this._connect(dijit.byId("leftContentPanel"), "resize", dojo.hitch(this, this.adjustHeight));
            this._connect(this.analysisTool, "onToolSelect", dojo.hitch(this, this._handleToolSelect));
        },

        _connect: function(b, d, c) {
            this._pbConnects.push(dojo.connect(b, d, c));
        },

        _onClose: function(b) {
            b.preventDefault();
            this.analysisContentPane.scrollTop = 0;
            arcgisonline.map.leftPanel.openLeftTOCPanel();
        },

        adjustHeight: function(b) {
            if (!("undefined" == typeof leftPanel || "analysisStack" != leftPanel.visibleStack)) {
                b = dojo.coords(dojo.byId("leftPanelDiv")).h;
                var d = dojo.coords(this.analysisContentHeader.domNode).h,
                    c = dojo.coords(dojo.byId("analysisSiteFooter_links")).h + 10;
                dojo.style(dojo.byId("analysisContentFooter"), "height", c + "px");
                dojo.style(this.analysisContentPane.domNode, "height", b - (d + c) + "px");
            }
        },

        _handleToolSelect: function(b) {
            var a = {};
            a.featureLayers = this.featureLayers;
            b.helpTopic = b.helpTopic.replace("Tool", "");
            b.helpTopic = b.helpTopic.replace("-", "");
            a.toolName = b.helpTopic;
            a.analysisLayer = this.analysisLayer;
            if (this.analysisType) a.analysisType = this.analysisType;
            // arcgisonline.map.leftPanel.openAnalysisToolPanel(a);
            arcgisonline.map.esrichina_functoolpane.show_tool(a);
        }
    });
});
