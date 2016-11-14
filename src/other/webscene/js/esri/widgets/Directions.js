define([
    "require",
    "../core/declare",
    "dojo/_base/lang",
    "dojo/_base/kernel",
    "dojo/_base/array",
    "dojo/_base/Color",
    "dijit/a11yclick",
    "dijit/_TemplatedMixin",
    "dojo/keys",
    "dojo/has",
    "dojo/on",
    "dojo/mouse",
    "dojo/dom",
    "dojo/dom-geometry",
    "dojo/dom-style",
    "dojo/dom-class",
    "dojo/dom-attr",
    "dojo/query",
    "dojo/number",
    "dojo/i18n!../nls/jsapi",
    "dojo/text!./templates/Directions.html",
    "./Geocoder",
    "dojo/dom-construct",
    "dojo/promise/all",
    "dojo/Deferred",
    "dojo/dnd/Source",
    "../kernel",
    "../Graphic",
    "../geometry/support/units",
    "./../PopupTemplate",
    "../geometry/SpatialReference",
    "../layers/ArcGISDynamicLayer",
    "../geometry/Point",
    "../geometry/Extent",
    "../geometry/Polyline",
    "../geometry/support/mathUtils",
    "../symbols/PictureMarkerSymbol",
    "../symbols/SimpleLineSymbol",
    "../symbols/TextSymbol",
    "../symbols/Font",
    "./Widget",
    "../tasks/support/FeatureSet",
    "../tasks/RouteTask",
    "../tasks/support/RouteParameters",
    "../tasks/GeometryService",
    "../tasks/PrintTask",
    "../tasks/support/PrintParameters",
    "../tasks/support/PrintTemplate",
    "../toolbars/edit",
    "../request",
    "../config",
    "../tasks/support/ProjectParameters",
    "dojo/uacss"
],
function(
    require, declare, lang, kernel, array, Color,
    a11yclick, _TemplatedMixin,
    keys, has, on, mouse, dom, domGeom, domStyle, domClass, domAttr, query, number,
    i18n, template, Geocoder,
    domConstruct, all, Deferred, Source,
    esriKernel, Graphic, esriUnits, PopupTemplate, SpatialReference, ArcGISDynamicLayer, Point, Extent, Polyline, mathUtils,
    PictureMarkerSymbol, SimpleLineSymbol, TextSymbol, Font,
    Widget,
    FeatureSet, RouteTask, RouteParameters, GeometryService, PrintTask, PrintParameters, PrintTemplate, Edit, esriRequest, esriConfig, ProjectParameters
) {
    var Widget = declare("esri.widgets.Directions", [Widget, _TemplatedMixin], {
        // Set template file HTML
        templateString: template,
        //activated flag
        mapClickActive: false,
        //AGOL Travel Modes common for all Orgs
        _tmDrivingTime : "Driving Time",
        _tmTruckingTime : "Trucking Time",
        _tmWalkingTime : "Walking Time",
        _tmDrivingDistance : "Driving Distance",
        _tmTruckingDistance : "Trucking Distance",
        _tmWalkingDistance : "Walking Distance",

        // first lifecycle
        constructor: function(options, srcRefNode) {
            this._css = {
                // widget container
                widgetContainerClass: "esriDirectionsContainer",
                // Stops
                stopsContainerClass: "esriStopsContainer",
                reverseStopsClass: "esriStopsReverse",
                addStopsClass: "esriStopsAdd",
                stopsClass: "esriStops",
                stopsRemovableClass: "esriStopsRemovable",
                stopsButtonContainerClass: "esriStopsButtons",
                stopsOptionsButtonClass: "esriStopsOptionsButton",
                stopsAddDestinationClass: "esriStopsAddDestination",
                stopsAddDestinationBtnClass: "esriStopsAddDestinationBtn",
                stopsGetDirectionsContainerClass: "esriStopsGetDirectionsContainer",
                stopsGetDirectionsClass: "esriStopsGetDirections",
                stopsClearDirectionsClass: "esriStopsClearDirections",
                stopsInnerGeocoderClass: "esriInnerGeocoder",
                // Stops Options
                stopsOptionsOptionsEnabledClass: "esriStopsOptionsEnabled",
                stopsOptionsMenuClass: "esriStopsOptionsMenu",
                stopsFindOptimalOrderClass: "esriFindOptimalOrderOption",
                stopsUseTrafficClass: "esriUseTrafficOption",
                stopsReturnToStartClass: "esriReturnToStartOption",
                stopsOptionsCheckboxesClass: "esriOptionsCheckboxes",
                stopsOptionsToggleContainerClass: "esriOptionsToggleContainer",
                stopsOptionsUnitsContainerClass: "esriOptionsUnitsContainer",
                stopsOptionsUnitsMiClass: "esriOptionsUnitsMi",
                stopsOptionsUnitsKmClass: "esriOptionsUnitsKm",
                stopsOptionsImpedanceContainerClass: "esriOptionsImpedanceContainer",
                stopsOptionsImpedanceTimeClass: "esriOptionsImpedanceTime",
                stopsOptionsImpedanceDistanceClass: "esriOptionsImpedanceDistance",
                // Travel Modes
                travelModesContainerClass: "esriTravelModesContainer",
                stopsTravelModeCarClass: "esriTravelModeCar",
                stopsTravelModeTruckClass: "esriTravelModeTruck",
                stopsTravelModeWalkingClass: "esriTravelModeWalking",
                // stop
                stopClass: "esriStop",
                stopOriginClass: "esriStopOrigin",
                stopDestinationClass: "esriStopDestination",
                stopUnreachedFirstOrLastClass: "esriStopUnreachedFirstOrLast",
                stopUnreachedClass: "esriStopUnreached",
                esriStopGeocoderColumnClass: "esriStopGeocoderColumn",
                esriStopReverseColumnClass: "esriStopReverseColumn",
                stopDnDHandleClass: "esriStopDnDHandle",
                stopDnDHandleClassHidden: "esriStopDnDHandleHidden",
                stopIconColumnClass: "esriStopIconColumn",
                stopIconClass: "esriStopIcon",
                stopIconRemoveColumnClass: "esriStopIconRemoveColumn",
                stopIconRemoveClass: "esriStopIconRemove",
                stopIconRemoveClassHidden: "esriStopIconRemoveHidden",
                // Results
                resultsContainerClass: "esriResultsContainer",
                resultsLoadingClass: "esriResultsLoading",
                resultsPrintClass: "esriResultsPrint",
                resultsSummaryClass: "esriResultsSummary",
                resultsViewFullRouteClass: "esriResultsViewFullRoute",
                resultsRouteNameClass: "esriResultsRouteName",
                resultsRouteButtonContainerClass: "esriResultsButtonsContainer",
                // routes
                routesContainerClass: "esriRoutesContainer",
                routesClass: "esriRoutes",
                routesErrorClass: "esriRoutesError",
                routeClass: "esriRoute",
                routeTextColumnClass: "esriRouteTextColumn",
                routeTextClass: "esriRouteText",
                routeLengthClass: "esriRouteLength",
                routeOriginClass: "esriDMTStopOrigin",
                routeDestinationClass: "esriDMTStopDestination",
                routeLastClass: "esriDMTStopLast",
                routeInfoClass: "esriRouteInfo",
                routeIconColumnClass: "esriRouteIconColumn",
                routeIconClass: "esriRouteIcon",
                infoWindowRouteClass: "esriInfoWindowRoute",
                routeZoomClass: "esriRouteZoom",
                // print
                esriPrintPageClass: "esriPrintPage",
                esriPrintBarClass: "esriPrintBar",
                esriPrintButtonClass: "esriPrintButton",
                esriCloseButtonClass: "esriCloseButton",
                esriPrintMainClass: "esriPrintMain",
                esriPrintHeaderClass: "esriPrintHeader",
                esriPrintLogoClass: "esriPrintLogo",
                esriPrintMapClass: "esriPrintMap",
                esriPrintNameClass: "esriPrintName",
                esriPrintNotesClass: "esriPrintNotes",
                esriPrintLengthClass: "esriPrintLength",
                esriPrintDirectionsClass: "esriPrintDirections",
                esriPrintFooterClass: "esriPrintFooter",
                esriPrintStopLabelClass: "esriPrintStopLabel",
                // misc
                clearClass: "esriClear",
                dndDragBodyClass: "esriDndDragDirection",
                stopsButtonClass: "esriDirectionsButton",
                stopsButtonTabClass: "esriDirectionsTabButton",
                stopsButtonTabLastClass: "esriDirectionsTabLastButton",
                stopsPressedButtonClass: "esriDirectionsPressedButton",
                linkButtonClass: "esriLinkButton",
                activateButtonClass: "esriActivateButton"
            };
            this.options = {
                // changing map after init requires destroy.
                map: null,
                autoSolve: true,
                minStops: 2,
                maxStops: 20,
                theme: "simpleDirections",
                alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
                directions: null,
                returnToStart: false,
                optimalRoute: false,
                routeTaskUrl: location.protocol + "//route.arcgis.com/arcgis/rest/services/World/Route/NAServer/Route_World",
                printTaskUrl: location.protocol + "//utility.arcgisonline.com/arcgis/rest/services/Utilities/PrintingTools/GPServer/Export%20Web%20Map%20Task",
                geometryTaskUrl: location.protocol + "//utility.arcgisonline.com/arcgis/rest/services/Geometry/GeometryServer",
                routeParams: {},
                stops: ["", ""],
                geocoderOptions: {
                    autoComplete: false,
                    autoNavigate: false
                },
                /*
                  Dmitry: Popup template format changed. See following:
                    new PopupTemplate({
                      title: "Route",
                      content: "<div class=\"${maneuverType}\"><div class=\"" + this._css.routeIconClass + " " + this._css.infoWindowRouteClass + "\"><strong>${step}.</strong> ${formattedText}</div></div>"
                    });
                */
                stopsInfoTemplate: new PopupTemplate("Location", "${address}${error}"),
                segmentInfoTemplate: new PopupTemplate("Route", "<div class=\"${maneuverType}\"><div class=\"" + this._css.routeIconClass + " " + this._css.infoWindowRouteClass + "\"><strong>${step}.</strong> ${formattedText}</div></div>"),
                textSymbolFont: new Font("11px", Font.STYLE_NORMAL, Font.VARIANT_NORMAL, Font.WEIGHT_NORMAL, "Arial, Helvetica, sans-serif"),
                textSymbolColor: new Color([255, 255, 255]),
                textSymbolOffset: {
                    x: 0,
                    y: 10.875
                },
                fromSymbol: new PictureMarkerSymbol({
                    "url": require.toUrl("./images/Directions/greenPoint.png"),
                    "height": 21.75,
                    "width": 15.75,
                    "type": "esriPMS"
                }).setOffset(0, 10.875),
                fromSymbolDrag: new PictureMarkerSymbol({
                    "url": require.toUrl("./images/Directions/greenPointMove.png"),
                    "height": 21.75,
                    "width": 15.75,
                    "type": "esriPMS"
                }).setOffset(0, 10.875),
                stopSymbol: new PictureMarkerSymbol({
                    "url": require.toUrl("./images/Directions/bluePoint.png"),
                    "height": 21.75,
                    "width": 15.75,
                    "type": "esriPMS"
                }).setOffset(0, 10.875),
                stopSymbolDrag: new PictureMarkerSymbol({
                    "url": require.toUrl("./images/Directions/bluePointMove.png"),
                    "height": 21.75,
                    "width": 15.75,
                    "type": "esriPMS"
                }).setOffset(0, 10.875),
                toSymbol: new PictureMarkerSymbol({
                    "url": require.toUrl("./images/Directions/redPoint.png"),
                    "height": 21.75,
                    "width": 15.75,
                    "type": "esriPMS"
                }).setOffset(0, 10.875),
                toSymbolDrag: new PictureMarkerSymbol({
                    "url": require.toUrl("./images/Directions/redPointMove.png"),
                    "height": 21.75,
                    "width": 15.75,
                    "type": "esriPMS"
                }).setOffset(0, 10.875),
                unreachedSymbol: new PictureMarkerSymbol({
                    "url": require.toUrl("./images/Directions/grayPoint.png"),
                    "height": 21.75,
                    "width": 15.75,
                    "type": "esriPMS"
                }).setOffset(0, 10.875),
                unreachedSymbolDrag: new PictureMarkerSymbol({
                    "url": require.toUrl("./images/Directions/grayPointMove.png"),
                    "height": 21.75,
                    "width": 15.75,
                    "type": "esriPMS"
                }).setOffset(0, 10.875),
                routeSymbol: new SimpleLineSymbol().setColor(new Color([0, 69, 117, 1])).setWidth(4),
                segmentSymbol: new SimpleLineSymbol().setColor(new Color([0, 122, 194, 1])).setWidth(8),
                printPage: "",
                printTemplate: "",
                autoCenterAtSegmentStart: true,
                focusOnNewStop: true,
                dragging: true,
                canModifyStops: true,
                directionsLengthUnits: null,
                directionsLanguage: null,
                traffic: false,
                trafficLayer: null,
                showPrintPage: true,
                showSegmentPopup: true,
                showSegmentHighlight: true,
                showReverseStopsButton: true,
                showReturnToStartOption: true,
                showOptimalRouteOption: true,
                showTravelModesOption: true,
                showMilesKilometersOption: true,
                showClearButton: false,
                showActivateButton: true
            };
            // mix in settings and defaults
            this.defaults = lang.mixin({}, this.options, options);
            // private variables
            this._sortId = "_dndId_" + this.id;
            this._stopReference = "_dndStop_" + this.id;
            this._i18n = i18n;
            // widget node
            this.domNode = srcRefNode;
        },
        // bind listener for button to action
        postCreate: function() {
            this.inherited(arguments);
            // activate button
            this.own(on(this._activateButtonNode, a11yclick, lang.hitch(this, function() {
                if (this.mapClickActive) {
                    this.deactivate();
                } else {
                    this.activate();
                }
            })));
            // add stop button
            this.own(on(this._addDestinationNode, a11yclick, lang.hitch(this, this._addStopButton)));
            // show options
            this.own(on(this._optionsButtonNode, a11yclick, lang.hitch(this, this._toggleOptionsMenu)));
            // optimal order checkbox
            this.own(on(this._findOptimalOrderNode, a11yclick, lang.hitch(this, this._toggleCheckbox)));
            // return to start checkbox
            this.own(on(this._returnToStartNode, a11yclick, lang.hitch(this, this._toggleCheckbox)));
            // use traffic checkbox
            this.own(on(this._useTrafficNode, a11yclick, lang.hitch(this, this._toggleCheckbox)));
            // use miles radio button
            this.own(on(this._useMilesNode, a11yclick, lang.hitch(this, this._toggleUnits)));
            // use kilometers radio button
            this.own(on(this._useKilometersNode, a11yclick, lang.hitch(this, this._toggleUnits)));
            // use Fastest radio button
            this.own(on(this._useTravelModeTimeNode, a11yclick, lang.hitch(this, this._toggleTravelModeImpedance)));
            // use Shortest radio button
            this.own(on(this._useTravelModeDistanceNode, a11yclick, lang.hitch(this, this._toggleTravelModeImpedance)));
            // use Driving a Car TravelMode
            this.own(on(this._useTravelModeCarNode, a11yclick, lang.hitch(this, this._toggleTravelMode)));
            // use Driving a Truck TravelMode
            this.own(on(this._useTravelModeTruckNode, a11yclick, lang.hitch(this, this._toggleTravelMode)));
            // use Walking TravelMode
            this.own(on(this._useTravelModeWalkingNode, a11yclick, lang.hitch(this, this._toggleTravelMode)));
            // get directions button
            this.own(on(this._getDirectionsButtonNode, a11yclick, lang.hitch(this, this._solveAndZoom)));
            // clear directions button
            this.own(on(this._clearDirectionsButtonNode, a11yclick, lang.hitch(this, function(){
              this.clearDirections();
              this.emit("directions-clear");
            })));
            // set widget properties
            this._setWidgetProperties();
            //activating
            this._activate(this.mapClickActive);
        },
        // start widget
        startup: function() {
            this.inherited(arguments);
            //unique identifier for cases when multiple widgest are present in the application
            this._id = Math.round(Math.random() * 100000000);
            return this._init();
        },
        // destroy widget
        destroy: function() {
            // remove events
            this._disconnectEvents();
            // remove html
            domConstruct.empty(this.domNode);
            // lastly, do all the normal destroy stuff
            this.inherited(arguments);
        },
        // activate widget. when mapClickActive, listens for the mouse clicks
        activate: function(){this.set("mapClickActive", true);},
        deactivate: function(){this.set("mapClickActive", false);},
        _activate: function(){
            var value = this.get("mapClickActive");
            if (this._addStopOnMapClickListener){
                this._addStopOnMapClickListener.remove();
            }
            if (value) {
                if (this.map) {
                    //deactivating another, potentially, mapClickActive instance of the DW
                    if (this.map.activeDirectionsWidget && this.map.activeDirectionsWidget !== this){
                        this.map.activeDirectionsWidget.deactivate();
                    }
                    this.map.activeDirectionsWidget = this;
                    //map-click listener
                    this._addStopOnMapClickListener = on(this.map, 'click', lang.hitch(this, function(e){
                        this.addStop(new Graphic(e.mapPoint)).then(lang.hitch(this, function(){
                            if (this.stopGraphics.length > 1){this.getDirections();}
                        }));
                    }));
                }
                domClass.add(this._activateButtonNode, this._css.stopsPressedButtonClass);
                this.emit("activate");
            }else{
                domClass.remove(this._activateButtonNode, this._css.stopsPressedButtonClass);
                this.emit("deactivate");
            }
            this.emit('map-click-active', {mapClickActive: this.mapClickActive});
        },
        _destroyGeocoders: function() {
            var gs = this.get("geocoders");
            // remove geocoders
            if (gs && gs.length) {
                for (var i = 0; i < gs.length; i++) {
                    if (gs[i]) {
                        gs[i].destroy();
                    }
                }
            }
            this.set("geocoders", []);
        },
        _disconnectEvents: function() {
            // clear all direction info
            this.clearDirections(true);
            // undo all events
            var i;
            if (this._watchEvents && this._watchEvents.length) {
                // unwatch
                for (i = 0; i < this._watchEvents.length; i++) {
                    this._watchEvents[i].unwatch();
                }
            }
            if (this._onEvents && this._onEvents.length) {
                // disconnect all events
                for (i = 0; i < this._onEvents.length; i++) {
                    this._onEvents[i].remove();
                }
            }
            if (this._geocoderFindEvents && this._geocoderFindEvents.length) {
                // disconnect all events
                for (i = 0; i < this._geocoderFindEvents.length; i++) {
                    this._geocoderFindEvents[i].remove();
                }
            }
            if (this._geocoderWatchEvents && this._geocoderWatchEvents.length) {
                // unwatch
                for (i = 0; i < this._geocoderWatchEvents.length; i++) {
                    this._geocoderWatchEvents[i].unwatch();
                }
            }
            if (this._geocoderSelectEvents && this._geocoderSelectEvents.length) {
                // disconnect all events
                for (i = 0; i < this._geocoderSelectEvents.length; i++) {
                    this._geocoderSelectEvents[i].remove();
                }
            }
            // events
            this._onEvents = [];
            this._watchEvents = [];
            this._geocoderSelectEvents = [];
            this._geocoderFindEvents = [];
            this._geocoderWatchEvents = [];
            // disconnect result events
            this._disconnectResults();
            this._destroyGeocoders();
            // remove global geocoder
            this._destroyGlobalGeocoder();
            // destroy Dojo dnd source
            this._destroyDnD();
        },
        clearDirections: function() {
            if (this.get("routeParams") && this.get("routeParams").stops) {
                if (this.get("routeParams").stops.features.length) {
                    this.get("routeParams").stops.features = [];
                }else{
                    if (!arguments.length){
                        //only if it's being called by the user clicking the Clear button
                        this.reset();
                    }
                }
            }
            this.set("directions", null);
            this._clearDisplayBeforeSolve();
            this._clearDisplayAfterSolve();
            this._removeTrafficLayer();
        },
        reset: function() {
            return this._enqueue(function(){
                this._setWidgetProperties();
                return this._init();
            });
        },
        /* ---------------- */
        /* Public Events */
        /* ---------------- */
        emitDirectionsStart: function() {
            this._clearDisplayBeforeSolve();
            this.set("solving", true);
            this.emit("directions-start");
        },
        emitDirectionsFinish: function(result) {
            this.set("solving", false);
            this.emit("directions-finish", {
                result: result
            });
        },
        emitSegmentHighlight: function(graphic) {
            this.emit("segment-highlight", {
                graphic: graphic
            });
        },
        /* ---------------- */
        /* Public Functions */
        /* ---------------- */
        removeStops: function() {
            return this.reset();
        },
        removeStop: function(index) {
            return this._enqueue(function() {
                if (index >= 0 && index < this.stops.length) {
                    this.clearErrors();
                    return this._removeStop(index);
                }else{
                    var def = new Deferred();
                    def.reject();
                    return def.promise;
                }
            });
        },
        updateStops: function(stops) {
            return this._enqueue(function() {
                this.clearErrors();
                return this._updateStops(stops);
            });
        },
        addStops: function(stops, index) {
            return this._enqueue(function(){
                this.clearErrors();
                return this._addStops(stops, index);
            });
        },
        // add a destination
        addStop: function(stop, index) {
            return this._enqueue(function(){
                this.clearErrors();
                return this._addStop(stop, index);
            });
        },
        updateStop: function(stop, index) {
            return this._enqueue(function(){
                this.clearErrors();
                return this._updateStop(stop, index);
            });
        },
        clearErrors: function() {
            this.errors = [];
            if (this._errorNode) {
                this._errorNode.innerHTML = "";
            }
        },
        getDirections: function() {
            return this._enqueue(this._getDirections);
        },
        unhighlightSegment: function() {
            if (this.get("map") && this.get("map").graphics && this.get("showSegmentHighlight")) {
                this.get("map").graphics.remove(this._segmentGraphic);
                this._segmentGraphic = null;
            }
        },
        highlightSegment: function(index) {
            if (typeof index === "undefined") {
                index = 0;
            }
            var segment = this.get("directions").features[index];
            var geometry = new Polyline(segment.geometry);
            var segmentStart = geometry.getPoint(0, 0);
            var segmentEnd = geometry.getPoint(0, 1);
            // get lenght of segment
            var segmentLength = mathUtils.getLength(segmentStart, segmentEnd);
            // if segment length is zero
            if (!segmentLength) {
                // use start of segment as geometry point
                geometry = segmentStart;
            }
            this.unhighlightSegment();
            // create segment graphic
            this._segmentGraphic = new Graphic(geometry, this.get("segmentSymbol"), segment.attributes, this.get("segmentInfoTemplate"));
            if (this._segmentGraphic && this.get("map") && this.get("map").graphics) {
                if (this.get("showSegmentHighlight")) {
                    this.get("map").graphics.add(this._segmentGraphic);
                }
            }
        },
        // Zoom to the appropriate segment when the user clicks a hyperlink in the directions list
        zoomToSegment: function(index) {
            if (typeof index === "undefined") {
                index = 0;
            }
            if (this.get("map")) {
                var segment = this.get("directions").features[index];
                var geometry = segment.geometry;
                var polyline = new Polyline(geometry);
                var extent = polyline.getExtent();
                var extentDeferred = this.get("map").setExtent(extent, true);
                extentDeferred.then(lang.hitch(this, function() {
                    this._showSegmentPopup(segment, index);
                }));
                return extentDeferred.promise;
            }
            return null;
        },
        // Center at the start of the segment
        centerAtSegmentStart: function(index) {
            if (typeof index === "undefined") {
                index = 0;
            }
            if (this.get("map")) {
                var segment = this.get("directions").features[index];
                var geometry = segment.geometry;
                var segmentStart = geometry.getPoint(0, 0);
                var extentDeferred = this.get("map").centerAt(segmentStart);
                extentDeferred.then(lang.hitch(this, function() {
                    this._showSegmentPopup(segment, index);
                }));
            }
        },
        zoomToFullRoute: function() {
            if (this.get("map") && this.get("directions")) {
                this._clearInfoWindow();
                this.unhighlightSegment();
                return this.get("map").setExtent(this.get("directions").extent, true);
            }
            return null;
        },
        setListIcons: function() {
            var i, nodes = this._dnd.getAllNodes();
            // for each list node
            for (i = 0; i < nodes.length; i++) {
                // get icon node
                var icon = query("." + this._css.stopIconClass, nodes[i])[0];
                if (icon) {
                    // set letter
                    icon.innerHTML = this._getLetter(i);
                }
                domClass.remove(nodes[i], this._css.stopOriginClass + " " + this._css.stopDestinationClass + " " + this._css.stopUnreachedClass + " " + this._css.stopUnreachedFirstOrLastClass);
                var status = this.stopGraphics && this.stopGraphics[i] && this.stopGraphics[i].attributes? this.stopGraphics[i].attributes.Status : undefined;
                var unreached = status > 0 && status < 6;
                if (i === 0) {
                    // first stop class
                    domClass.add(nodes[i], unreached? this._css.stopUnreachedFirstOrLastClass : this._css.stopOriginClass);
                } else if (i === (nodes.length - 1) && !this._startReturn) {
                    // last stop class
                    domClass.add(nodes[i], unreached? this._css.stopUnreachedFirstOrLastClass : this._css.stopDestinationClass);
                }else if (unreached){
                    domClass.add(nodes[i], this._css.stopUnreachedClass);
                }
            }
            // remove reverse td
            var reverseBtn = query("[data-reverse-td]", this._dndNode)[0];
            domConstruct.destroy(reverseBtn);
            if (this.get("showReverseStopsButton")) {
                // add reverse td
                domConstruct.create("td", {
                    "data-reverse-td": "true",
                    rowspan: nodes.length,
                    className: this._css.esriStopReverseColumnClass,
                    innerHTML: "<div tabindex=\"0\" role=\"button\" class=\"" + this._css.reverseStopsClass + "\" data-reverse-stops=\"true\" title=\"" + i18n.widgets.directions.reverseDirections + "\"></div>",
                    onmouseover: function(evt){evt.stopPropagation();},
                    onmouseout: function(evt){evt.stopPropagation();}

                }, nodes[0]);
            }
        },
        addRouteSymbols: function() {
            if (this.stopGraphics.length && this.get("map") && this.get("map").graphics) {
                for (var i = 0; i < this.stopGraphics.length; i++) {
                    if (this.stopGraphics[i]) {
                        this.get("map").graphics.add(this.stopGraphics[i]);
                        var stopShape = this.stopGraphics[i].getDojoShape();
                        if (stopShape) {
                            stopShape.moveToFront();
                        }
                        this.get("map").graphics.add(this.textGraphics[i]);
                        var textShape = this.textGraphics[i].getDojoShape();
                        if (textShape) {
                            textShape.moveToFront();
                        }
                    }
                }
            }
        },
        createRouteSymbols: function() {
            this._clearStopGraphics();
            var stops = this.get("stops");
            for (var i = 0; i < stops.length; i++) {
                // set stop
                var stop = stops[i];
                if (stop && stop.feature) {
                    var status = stop.feature.attributes? stop.feature.attributes.Status : undefined;
                    var pointSymbol = this._setStopSymbol(i, stops.length + (this._startReturn? 1 : 0), false, status);
                    var spatialReference = this._defaultSR;
                    if (this.get("map")) {
                        spatialReference = this.get("map").spatialReference;
                    }
                    var point = new Point(stop.feature.geometry.x, stop.feature.geometry.y, spatialReference);
                    // Text
                    var textSymbolText = this._getLetter(i);
                    var textSymbol = new TextSymbol(textSymbolText, this.get("textSymbolFont"), this.get("textSymbolColor"));
                    if (this.get("textSymbolOffset")) {
                        textSymbol.setOffset(this.get("textSymbolOffset").x, this.get("textSymbolOffset").y);
                    }
                    var textGraphic = new Graphic(point, textSymbol);
                    textGraphic._textGraphic = true;
                    textGraphic._index = i;
                    var att = stop.feature.attributes;
                    var pointGraphic = new Graphic(point, pointSymbol, {
                        address : stop.name,
                        Status : status,
                        SourceID : att && att.SourceID? att.SourceID : null,
                        SourceOID : att && att.SourceOID? att.SourceOID : null,
                        PosAlong : att && att.PosAlong? att.PosAlong : null,
                        SideOfEdge : att && att.SideOfEdge? att.SideOfEdge : null
                    }, this.get("stopsInfoTemplate"));
                    pointGraphic._drag = true;
                    pointGraphic._index = i;
                    // set graphics
                    this.stopGraphics[i] = pointGraphic;
                    this.textGraphics[i] = textGraphic;
                }
            }
            // call set
            this.set("stopGraphics", this.stopGraphics);
            this.set("textGraphics", this.textGraphics);
            this.addRouteSymbols();
            this.setListIcons();
        },
        setTravelMode: function(travelModeName){
            var def = new Deferred(),
                sd = this.serviceDescription;
            if (sd && sd.supportedTravelModes && sd.supportedTravelModes.length) {
                var tms = sd.supportedTravelModes,
                    applied = false, found = false;
                for (var i = 0; i < tms.length; i++) {
                    if (tms[i].name === travelModeName) {
                        //turning on well known travel mode
                        //this version of the widget supports only TMs which are common for all AGOL orgs
                        if (tms[i]._nodeTravelMode && tms[i]._nodeImpedance) {
                            found = true;
                            applied = this.travelModeName !== travelModeName;
                            if (applied) {
                                this.set("travelModeName", tms[i].name);
                                this.routeParams.travelMode = tms[i].itemId;
                                on.emit(tms[i]._nodeTravelMode, 'click', {bubbles : false, cancelable : true});
                                on.emit(tms[i]._nodeImpedance, 'click', {bubbles : false, cancelable : true});
                            }
                            break;
                        }
                    }
                }
                if (found){
                    if (applied){
                        this._solveAndZoom().always(function(){
                            def.resolve(travelModeName);
                        });
                    }else {
                        def.resolve(travelModeName);
                    }
                } else {
                    def.reject(travelModeName);
                }
                if (this._useTrafficNode){
                    var ut = travelModeName === this._tmDrivingTime;
                    this._useTrafficNode.disabled = !ut;
                    if (!ut && this._useTrafficNode.checked){
                        this._removeTrafficLayer();
                    }
                }
            }else {
                def.reject(travelModeName);
            }
            return def.promise;
        },
        getSupportedTravelModeNames: function(){
            var res = [],
                sd = this.serviceDescription;
            if (sd && sd.supportedTravelModes && sd.supportedTravelModes.length) {
                var tms = sd.supportedTravelModes;
                for (var i = 0; i < tms.length; i++){
                    res.push(tms[i].name);
                }
            }
            return res;
        },
        setDirectionsLengthUnits: function(){
            var units = arguments.length === 1? arguments[0] : this.get("directionsLengthUnits");
            var def = new Deferred();
            domClass.remove(this._useMilesNode, this._css.stopsPressedButtonClass);
            domClass.remove(this._useKilometersNode, this._css.stopsPressedButtonClass);
            if (units === esriUnits.KILOMETERS) {
                domClass.add(this._useKilometersNode, this._css.stopsPressedButtonClass);
            }else if (units === esriUnits.MILES) {
                domClass.add(this._useMilesNode, this._css.stopsPressedButtonClass);
            }
            if (
                units === esriUnits.KILOMETERS ||
                units === esriUnits.METERS ||
                units === esriUnits.MILES ||
                units === esriUnits.NAUTICAL_MILES
            ) {
                this.directionsLengthUnits = units;
                if (this.autoSolve){
                    this._getDirections().always(function(){
                        def.resolve(units);
                    });
                }else {
                    def.resolve(units);
                }
            }else{
                def.reject(units);
            }
            return def.promise;
        },
        setDirectionsLanguage: function(){
            var locale = arguments.length === 1? arguments[0] : this.get("directionsLanguage");
            var def = new Deferred();
            locale = this._setDirectionsLanguageByLocale(locale);
            if (this.autoSolve){
                this.getDirections().always(function(){
                    def.resolve(locale);
                });
            }else {
                def.resolve(locale);
            }
            return def.promise;
        },
        useMyCurrentLocation: function(stopIndex){
            if (this.geocoders[stopIndex]) {
                return this._createLocateButton(this.geocoders[stopIndex], true, true);
            }else{
                return false;
            }
        },



        /* ---------------- */
        /* Private Functions */
        /* ---------------- */

        _getDirections: function() {
            this._removeEmptyStops();
            this.clearErrors();
            var def = new Deferred();
            // if at least 2 valid stops
            if (this._calculateValidStops() >= this.get("minStops")) {
                // call start event
                this.emitDirectionsStart();
                // sync DND
                this._dnd.sync();
                // sort geocoders
                this._sortGeocoders();
                this._getCandidates(this.get("stops")).then(lang.hitch(this, function (results) {
                    this.stops = results;
                    this._setStops();
                    // validate results are all ok
                    var validate = this._validateStops(results);
                    if (validate.error) {
                        // throw error
                        var errorString = i18n.widgets.directions.error.locator;
                        var geocoder = this.get("geocoders")[validate.index];
                        if (geocoder) {
                            errorString = i18n.widgets.directions.error.unknownStop.replace("<name>", geocoder.get("value"));
                        }
                        this._resultError(errorString);
                        this.set("directions", null);
                        this._clearRouteGraphics();
                        def.reject(errorString);
                        this.emitDirectionsFinish(new Error([errorString]));
                    } else {
                        // solve route
                        this._configureRoute().always(function(res){def.resolve(res);});//(def);
                    }
                }), lang.hitch(this, function (err) {
                    this.set("directions", null);
                    this._clearRouteGraphics();
                    def.reject(err);
                    this.emitDirectionsFinish();
                }));
            } else {
                this.clearDirections(true);
                this.createRouteSymbols();
                def.reject(i18n.widgets.directions.error.notEnoughStops);
            }
            return def.promise;
        },


        _showLoadingSpinner: function(show){
            if (show === undefined){
                show = this._requestQueueTail && !this._requestQueueTail.isFulfilled() && this.loaded;
            }
            if (show) {
                domClass.add(this._widgetContainer, this._css.resultsLoadingClass);
            }else {
                domClass.remove(this._widgetContainer, this._css.resultsLoadingClass);
            }
        },
        _enqueue: function(functor){
            //function wrapping and queueing incoming user requests while DW is being loaded
            var def = new Deferred();
            if (!this._requestQueueTail){
                this._requestQueueTail = new Deferred();
                this._requestQueueTail.resolve();
            }
            this._requestQueueTail.promise.always(lang.hitch(this, function(){
                try {
                    var res = functor.call(this);
                    if (res && typeof(res) === "object" && res.hasOwnProperty("isFulfilled")) {
                        //Deferred was returned, let's wait for resolution
                        res.then(lang.hitch(this, function (result) {
                            def.resolve(result);
                            this._showLoadingSpinner();
                        }), lang.hitch(this, function (err) {
                            def.reject(err);
                            this._showLoadingSpinner();
                        }));
                    } else {
                        def.resolve(res);
                        this._showLoadingSpinner();
                    }
                }catch(err){
                    def.reject(err);
                    this._showLoadingSpinner();
                }
            }));

            //queueing requests
            this._requestQueueTail = def;
            this._showLoadingSpinner();

            return def.promise;
        },
        _createDnD: function() {
            // draggable list
            this._dnd = new Source(this._dndNode, {
                skipForm: true,
                withHandles: true
            });
        },
        _destroyDnD: function() {
            domConstruct.empty(this._dndNode);
            // destroy source
            if (this._dnd) {
                this._dnd.destroy();
                this._dnd = null;
            }
        },
        _usingAGOL: function(){
            return this.get("routeTaskUrl").search((/^(https?:)*\/\/route*[^.]*\.arcgis\.com.*$/i)) > -1;
        },
        _setGeocoderOptions: function() {
            // Geocoder options
            var optionalGeocoderOptions = {
                theme: this.get("theme")
            };
            if (!this.defaults.geocoderOptions.autoComplete) {
                optionalGeocoderOptions.maxLocations = 1;
            }
            var requiredGeocoderOptions = {
                map: this.get("map")
            };
            this.geocoderOptions = lang.mixin(optionalGeocoderOptions, this.defaults.geocoderOptions, requiredGeocoderOptions);
        },
        _setDefaultUnits: function() {
            // default units
            if (!this.get("directionsLengthUnits")) {
                var units = esriUnits.KILOMETERS;
                if (this.defaults.directionsLengthUnits) {
                    units = this.defaults.directionsLengthUnits;
                } else if (this.defaults.directionsLanguage) {
                    units = this.defaults.directionsLanguage === "en" ? esriUnits.MILES : esriUnits.KILOMETERS;
                }
                this.set("directionsLengthUnits", units);
            }else{
                this.setDirectionsLengthUnits(this.directionsLengthUnits);
            }
        },
        _setTrafficOptions: function() {
            // show traffic option
            this.set("showTrafficOption",
                (this.defaults.showTrafficOption || !this.defaults.hasOwnProperty("showTrafficOption")) &&
                this.serviceDescription.trafficSupport === "esriNTSHistoricalAndLive"
            );
            // create traffic layer if necessary
            if (this._usingAGOL() && this.get("showTrafficOption")) {
                if (!this.get("trafficLayer")) {
                    this.set("trafficLayer", new ArcGISDynamicLayer(location.protocol + "//traffic.arcgis.com/arcgis/rest/services/World/Traffic/MapServer", {
                        opacity: 0.4
                    }));
                }
            }
            this._optionsMenu();
        },
        _updateCanModifyStops: function() {
            // if no add destination button
            if (!this.get("canModifyStops")) {
                // hide button
                this._hideAddDestination();
            } else {
                // show button
                this._showAddDestination();
            }
        },
        _setWidgetProperties: function() {
            // stops setting not ready
            this._stopsReady = false;
            // remove events if they exist
            this._disconnectEvents();
            // set unloaded
            this.set("loaded", false);
            // settings
            this.set("map", this.defaults.map);
            this.set("alphabet", this.defaults.alphabet);
            this.set("directions", this.defaults.directions);
            this.set("directionsLanguage", this.defaults.directionsLanguage);
            this.set("routeTaskUrl", this.defaults.routeTaskUrl);
            this.set("printTaskUrl", this.defaults.printTaskUrl);
            this.set("geometryTaskUrl", this.defaults.geometryTaskUrl);
            this.set("stops", []);
            this.set("textSymbolFont", this.defaults.textSymbolFont);
            this.set("textSymbolColor", this.defaults.textSymbolColor);
            this.set("textSymbolOffset", this.defaults.textSymbolOffset);
            this.set("fromSymbol", this.defaults.fromSymbol);
            this.set("fromSymbolDrag", this.defaults.fromSymbolDrag);
            this.set("stopSymbol", this.defaults.stopSymbol);
            this.set("stopSymbolDrag", this.defaults.stopSymbolDrag);
            this.set("toSymbol", this.defaults.toSymbol);
            this.set("toSymbolDrag", this.defaults.toSymbolDrag);
            this.set("unreachedSymbol", this.defaults.unreachedSymbol);
            this.set("unreachedSymbolDrag", this.defaults.unreachedSymbolDrag);
            this.set("routeSymbol", this.defaults.routeSymbol);
            this.set("segmentSymbol", this.defaults.segmentSymbol);
            this.set("showPrintPage", this.defaults.showPrintPage);
            this.set("showSegmentPopup", this.defaults.showSegmentPopup);
            this.set("showSegmentHighlight", this.defaults.showSegmentHighlight);
            this.set("autoCenterAtSegmentStart", this.defaults.autoCenterAtSegmentStart);
            this.set("showReverseStopsButton", this.defaults.showReverseStopsButton);
            this.set("focusOnNewStop", this.defaults.focusOnNewStop);
            this.set("dragging", this.defaults.dragging);
            this.set("canModifyStops", this.defaults.canModifyStops);
            this.set("theme", this.defaults.theme);
            this.set("showReturnToStartOption", this.defaults.showReturnToStartOption);
            this.set("showOptimalRouteOption", this.defaults.showOptimalRouteOption);
            this.set("optimalRoute", this.defaults.optimalRoute);
            this.set("returnToStart", this.defaults.returnToStart);
            this.set("traffic", this.defaults.traffic);
            this.set("trafficLayer", this.defaults.trafficLayer);
            this.set("minStops", this.defaults.minStops);
            this.set("maxStops", this.defaults.maxStops);
            this.set("printPage", this.defaults.printPage);
            this.set("autoSolve", this.defaults.autoSolve);
            this.set("directionsLengthUnits", this.defaults.directionsLengthUnits);
            this.set("directionsLanguage", this.defaults.directionsLanguage);
            this.set("stopsInfoTemplate", this.defaults.stopsInfoTemplate);
            this.set("segmentInfoTemplate", this.defaults.segmentInfoTemplate);
            this.set("geocoders", []);
            this.set("showTravelModesOption", this.defaults.showTravelModesOption);
            this.set("showMilesKilometersOption", this.defaults.showMilesKilometersOption);
            this.set("showClearButton", this.defaults.showClearButton);
            this.set("showActivateButton", this.defaults.showActivateButton);

            // default SR
            this._defaultSR = SpatialReference.WGS84;
            // can the user modify stops
            this._updateCanModifyStops();
        },
        _setStopsAttr: function(value){
            if(this._stopsReady){
                if(!value){
                    value = [];
                }
                this._updateStops(value);
                this._setStops();
            }
            else{
                this._set("stops", value);
            }
        },
        _updateStops: function(stops) {
            if(!this.stops){
                this.stops = [];
            }
            if(!stops){
                stops = [];
            }
            var prevLen = this.stops.length;
            // if we have what we need
            if (stops && stops.length) {
                return this._getCandidates(stops).then(lang.hitch(this, function(e) {
                    // set length of returned stops
                    var newLen = e.length;
                    // vars
                    var i = 0, j = 0;
                    if (newLen === prevLen) {
                        // equal size
                        for (i = 0; i < newLen; i++) {
                            this._updateStopInsert(e[i], i);
                        }
                    } else if (newLen > prevLen) {
                        // more new stops
                        if(prevLen){
                            for (j; j < prevLen; j++) {
                                // update stops
                                this._updateStopInsert(e[j], j);
                            }
                        }
                        for (j; j < newLen; j++) {
                            // add stops
                            this._insertStop(e[j], j);
                        }
                    } else {
                        // less new stops
                        var toRemove = prevLen - newLen;
                        for (i = 0; i < toRemove; i++) {
                            // remove stops
                            this._removeStop();
                        }
                        for (i = 0; i < newLen; i++) {
                            // update stops
                            this._updateStopInsert(e[i], i);
                        }
                    }
                    this._setStops();
                }));
            } else {
                return this._init();
            }
        },
        _removeStop: function(index) {
            var def = new Deferred();
            var stop;
            if (this.stops.length > this.get("minStops")) {
                if (typeof index === "undefined") {
                    index = this.stops.length - 1;
                }
                stop = this.stops.splice(index, 1);
                this._setStops();
                // get list
                var nodes = this._dnd.getAllNodes();
                // node
                var node = nodes[index];
                var gs = this.get("geocoders");
                // destroy geocoder
                gs[index].destroy();
                // remove geocoder object
                gs.splice(index, 1);
                this.set("geocoders", gs);
                // remove events
                this._geocoderSelectEvents[node.id].remove();
                this._geocoderFindEvents[node.id].remove();
                this._geocoderWatchEvents[node.id].unwatch();
                // remove list item
                domConstruct.destroy(node);
                // sync draggable
                this._dnd.sync();
                // check other stuff
                this._stopsRemovable();
                this._optionsMenu();
                this._checkMaxStops();
                this.setListIcons();
                // sort geocoders to nodes
                this._sortGeocoders();
            } else {
                if (index >= 0){
                    stop = this.stops.splice(index, 1);
                    for (var i = index; i < this.get("minStops") - 1; i++){
                        this.geocoders[i].set("value", this.geocoders[i + 1].get("value"));
                    }
                    this.geocoders[i].set("value", "");
                }
            }
            this._solveAndZoom().always(
                function(){def.resolve(stop, index);}
            );
            return def.promise;
        },
        _removeTrafficLayer: function() {
            var trafficLayer = this.get("trafficLayer");
            var map = this.get("map");
            // remove traffic
            if (trafficLayer && map) {
                map.removeLayer(trafficLayer);
            }
            this._trafficLayerAdded = false;
        },
        _addStops: function(stops, index) {
            var def = new Deferred();
            var ds = [];
            for (var i = 0; i < Math.min(stops.length, this.maxStops - this.stopGraphics.length); i++) {
                //enqueuing all the adding of new stop requests so we can treat single geocode failures gracefully
                var d = new Deferred();
                this._addStop(stops[i], index === undefined? index : index + i).always(d.resolve);
                ds.push(d);
            }
            all(ds).then(def.resolve);
            return def.promise;
        },
        _addStop: function(stop, index) {
            var def = new Deferred();
            this._checkMaxStops();
            if (!this.maxStopsReached) {
                // get candidate object
                this._getCandidate(stop).then(
                    lang.hitch(this, function(candidate){
                        index = this._insertStop(candidate, index);
                        this._setStops();
                        def.resolve(candidate, index);
                    }),
                    lang.hitch(this, function(error) {
                        def.reject(error);
                    })
                );
            } else {
                this._resultError(i18n.widgets.directions.error.maximumStops);
                def.reject(i18n.widgets.directions.error.maximumStops);
            }
            return def.promise;
        },
        // if not value, remove stop
        _removeEmptyStops: function() {
            // if more than 2 geocoders
            if (this.stops.length > this.get("minStops")) {
                // for each stop
                for (var i = (this.stops.length - 1); this.stops.length > this.get("minStops") && i > -1; i--) {
                    var stop = this.stops[i];
                    if (!stop || !stop.name) {
                        this._removeStop(i);
                    }
                }
            }
        },
        _setReverseGeocode: function(candidate, digitizedGeometry, index) {
            if (candidate.feature.geometry && index > -1) {
                // new attributes
                var attributes = {
                    address: candidate.name
                };
                if (this.stopGraphics[index]) {
                    // stop graphics
                    this.stopGraphics[index].setAttributes(attributes);
                    this.stopGraphics[index].setGeometry(digitizedGeometry);
                }
                if (this.textGraphics[index]) {
                    // text graphics
                    this.textGraphics[index].setAttributes(attributes);
                    this.textGraphics[index].setGeometry(digitizedGeometry);
                }
                // call set
                this.set("stopGraphics", this.stopGraphics);
                this.set("textGraphics", this.textGraphics);
                if (!this._moveInProgress) {
                    this._unsetDraggableObject(this._dragGraphic);
                }
                if (this.get("geocoders")[index]) {
                    this.get("geocoders")[index].set("value", candidate.name);
                }
                this.stops[index] = candidate;
                this.stops[index].feature.setGeometry(digitizedGeometry);
                this._setStops();
                if (this.get("autoSolve")) {
                    this.getDirections();
                }
            }
        },
        _insertStop: function(candidate, index) {
            var i, gWidget;
            //let's see if there are vacant Geocoder widgets out there
            if (index === undefined) {
                for (i = 0; i < this.geocoders.length; i++) {
                    if (!this.geocoders[i].get("value")) {
                        gWidget = this.geocoders[i];
                        break;
                    }
                }
            }else{
                i = index;
                if (this.geocoders[i] && !this.geocoders[i].get("value")) {
                    gWidget = this.geocoders[i];
                }
            }
            if ( gWidget && (
                index === undefined ||
                index === i
            )) {
                //re-using existing vacant Geocoder widget
                gWidget.set("value", candidate.name);
                //referencing from the stops array
                this.stops[i] = candidate;
                // reference candidate
                gWidget[this._stopReference] = candidate;
            }else{
                //if there is no vacant Geocode widget or index is explicitly specified,
                //we are creating and inserting new Geocoder
                if (index === undefined){
                    index = this.geocoders.length;
                }
                this._createGeocoder(candidate, index);
            }
        },
        _createGeocoder: function(candidate, index){
            var dndNodes = this._dnd.getAllNodes();
            var before = false,
                anchor = false;
            // get length of list
            var dndLength = dndNodes.length;
            // if index is invalid
            if (!dndNodes[index]) {
                anchor = false;
                before = false;
            } else {
                anchor = dndNodes[index];
                before = true;
            }
            var showExtraHandlers = lang.hitch(this, function(tr, show){
                var o = show? this._css.stopDnDHandleClass : this._css.stopDnDHandleClassHidden;
                var n = show? this._css.stopDnDHandleClassHidden : this._css.stopDnDHandleClass;
                domClass.replace(tr.children[0], o, n);
                if (this.geocoders.length > 2){
                    o = show? this._css.stopIconRemoveClass : this._css.stopIconRemoveClassHidden;
                    n = show? this._css.stopIconRemoveClassHidden : this._css.stopIconRemoveClass;
                    domClass.replace(tr.children[3].children[0], o, n);
                }
            });
            // create list item node
            var tr = domConstruct.create("tr", {
                className: this._css.stopClass,
                onmouseover: function(){showExtraHandlers(this, true);},
                onmouseout: function(){showExtraHandlers(this, false);}
            });
            // dnd handle column
            var dndTd = domConstruct.create("td", {
                className: this._css.stopDnDHandleClassHidden + " dojoDndHandle"
            }, tr);
            // icon column
            var stopIconTd = domConstruct.create("td", {
                className: this._css.stopIconColumnClass
            }, tr);
            // create icon node
            domConstruct.create("div", {
                className: this._css.stopIconClass + " dojoDndHandle",
                innerHTML: this._getLetter(dndLength),
                "data-center-at": "true"
            }, stopIconTd);
            // geocoder column
            var gNodeTd = domConstruct.create("td", {
                className: this._css.esriStopGeocoderColumnClass
            }, tr);
            // create geocoder node
            var gNode = domConstruct.create("div", {}, gNodeTd);
            if (this.get("canModifyStops")) {
                // remove column
                var removeIconTd = domConstruct.create("td", {
                    className: this._css.stopIconRemoveColumnClass
                }, tr);
                // create remove button node
                domConstruct.create("div", {
                    className: this._css.stopIconRemoveClassHidden,
                    role: "button",
                    "data-remove": "true"
                }, removeIconTd);
            }
            // insert item as draggable
            this._dnd.insertNodes(false, [tr], before, anchor);
            this.stops.splice(index, 0, candidate);
            var widgetOptions = lang.mixin({}, this.get("geocoderOptions"), {
                value: candidate.name
            });
            var gWidget = new Geocoder(widgetOptions, gNode);
            // reference drag node
            gWidget[this._sortId] = tr.id;
            // reference candidate
            gWidget[this._stopReference] = candidate;
            // get geocoders
            var gs = this.get("geocoders");
            // add geoocder to geocoders list
            gs.splice(index, 0, gWidget);
            gWidget.startup();
            // set geocoders
            this.set("geocoders", gs);

            var addressChange = lang.hitch(this, function(evt) {
                if (evt && (evt.results || evt.result)) {
                    var nodes = this._dnd.getAllNodes();
                    var nodeIndex = array.indexOf(nodes, tr);
                    var doSolve = true;
                    if (evt.results && evt.results.results && evt.results.results.length) {
                        //geocoder address was updated
                        this._setStops();
                        this.stops[nodeIndex] = evt.results.results[0];
                    }else if (evt.result){
                        this._setStops();
                        this.stops[nodeIndex] = evt.result;
                    }else{
                        //no location found
                        this._removeStopButton(nodeIndex);
                        this.set("directions", null);
                        this._resultError(i18n.widgets.directions.error.unknownStop.replace("<name>", evt.detail.widget.get("value")));
                        this._clearRouteGraphics();
                        doSolve = false;
                    }
                    if (doSolve) {
                        this._solveAndZoom();
                    }
                }
            });
            // select event
            var geocoderSelect = gWidget.on("select", addressChange);
            this._geocoderSelectEvents[tr.id] = geocoderSelect;
            // find event
            var findSelect = gWidget.on("find-results", addressChange);
            this._geocoderFindEvents[tr.id] = findSelect;
            // watch value
            var gWatch = gWidget.watch("value", lang.hitch(this, function() {
                var value = arguments[2];
                var nodes = this._dnd.getAllNodes();
                var nodeIndex = array.indexOf(nodes, tr);
                if (this.stops[nodeIndex] && value !== this.stops[nodeIndex].name) {
                    this.stops[nodeIndex] = {
                        name: value
                    };
                    this._setStops();
                }
            }));
            this._geocoderWatchEvents[tr.id] = gWatch;
            // check if max destinations reached
            this._checkMaxStops();
            // fix icon colors/text
            this.setListIcons();
            if (this.get("focusOnNewStop")) {
                // focus on stop
                gWidget.focus();
            }
            // validate stops removable
            this._stopsRemovable();
            this._optionsMenu();
            // sort geocoders to nodes
            this._sortGeocoders();
        },
        _removeLocateButtonVisibilityEvents: function(){
            for (var i = 0; i < this.geocoders.length; i++){
                var g = this.geocoders[i];
                if (g._onMouseEnter) {g._onMouseEnter.remove();}
                if (g._onMouseOut) {g._onMouseOut.remove();}
                if (g._onKeyPress){g._onKeyPress.remove();}
                if (g._locateButton) {
                    if (g._locateButton._onMouseEnter) {g._locateButton._onMouseEnter.remove();}
                    if (g._locateButton._onMouseOut) {g._locateButton._onMouseOut.remove();}
                }
            }
        },
        _setLocateButtonVisibilityEvents: function(){
            this._removeLocateButtonVisibilityEvents();
            var _this = this;
            for (var i = 0; i < this.geocoders.length; i++){
                var g = this.geocoders[i];

                g.inputNode._geocoder = g;
                g._onMouseEnter = on(g.inputNode, [mouse.enter, "focus"], function (evt) {
                    if (evt instanceof FocusEvent){this._geocoder._lbShown_f = true;}else{this._geocoder._lbShown_g = true;}
                    _this._createLocateButton(this._geocoder, true);
                });
                g._onMouseOut = on(g.inputNode, [mouse.leave, "blur"], function (evt) {
                    if (evt instanceof FocusEvent){this._geocoder._lbShown_f = false;}else{this._geocoder._lbShown_g = false;}
                    clearTimeout(this._destroyTimeout);
                    this._destroyTimeout = setTimeout(lang.hitch(this, function () {
                        if (!this._geocoder._lbShown_lb && !this._geocoder._lbShown_f) {
                            _this._destroyLocateButton(this._locateButton);
                        }
                    }), 400);
                });
                g._onKeyPress = on(g.inputNode, "keydown", function (evt) {
                    this._geocoder._lbShown_g = true;
                    clearTimeout(this._destroyTimeout);
                    this._destroyTimeout = setTimeout(lang.hitch(this, function () {
                        if (this.value === "") {
                            _this._createLocateButton(this._geocoder, true);
                        }else{
                            _this._destroyLocateButton(this._locateButton);
                        }
                    }), 400);
                });
                if (g.inputNode._locateButton) {
                    var lb = g.inputNode._locateButton;
                    lb._onMouseEnter = on(lb.domNode, mouse.enter, function () {
                        this._geocoder._lbShown_lb = true;
                        clearTimeout(this._geocoder._destroyTimeout);
                    });
                    lb._onMouseOut = on(lb.domNode, mouse.leave, function () {
                        this._geocoder._lbShown_lb = false;
                        clearTimeout(this._geocoder._destroyTimeout);
                        this._geocoder._destroyTimeout = setTimeout(lang.hitch(this, function () {
                            if (!this._geocoder._lbShown_g && !this._geocoder._lbShown_f) {
                                _this._destroyLocateButton(this._geocoder.inputNode._locateButton);
                            }
                        }), 400);
                    });
                }
            }
        },
        _createLocateButton: function (geocoder, destroyAfterLocate, locateUponInstantiation) {
            var def = new Deferred();
            require(["./LocateButton"], lang.hitch(this, function(LocateButton){
                var g = geocoder;
                this._destroyLocateButton(g.inputNode._locateButton);
                if (g) {
                    var lbContainer = domConstruct.create("div", {}, g.domNode);
                    domClass.add(g.domNode, this._css.stopsInnerGeocoderClass);
                    var lb = new LocateButton({
                        map: this.map,
                        highlightLocation: false,
                        centerAt: false,
                        setScale: false,
                        useTracking: false /*in future releases, the DW might be extend to support tracking and navigation scenarios*/
                    }, lbContainer);
                    lb.startup();
                    g.inputNode._locateButton = lb;
                    lb.domNode._geocoder = g;

                    //visibility rules
                    this._setLocateButtonVisibilityEvents();

                    //while locating
                    var whileLocating = lang.hitch(this, function(){
                        lb._locating = true;
                        g.set("value", "");
                        g.inputNode.placeholder = i18n.widgets.directions.retrievingMyLocation.toUpperCase();
                    });
                    lb._onBeforeLocate = on(lb._locateNode, a11yclick, whileLocating);

                    //once located
                    lb._onLocate = on(lb, "locate", lang.hitch(this, function(location){
                        lb._locating = false;
                        if (location.graphic) {
                            if (destroyAfterLocate) {
                                this._destroyLocateButton(g.inputNode._locateButton);
                            }
                            this.updateStop(new Graphic(location.graphic.geometry), array.indexOf(this.geocoders, g)).then(lang.hitch(this, function () {
                                if (this.stopGraphics.length > 1) {
                                    this._solveAndZoom().then(function(){
                                        def.resolve(location);
                                    });
                                }else{
                                    def.resolve(location);
                                }
                            }));
                        }else{
                            g.set("value", "");
                            g.inputNode.placeholder = i18n.widgets.directions.myLocationError.toUpperCase();
                            console.error(location.error);
                            def.reject(location.error);
                        }
                    }));

                    if (locateUponInstantiation) {
                        whileLocating();
                        lb.locate();
                    }else{
                        def.resolve();
                    }
                }else{
                    def.reject();
                }
            }));
            return def.promise;
        },
        _destroyLocateButton: function(lb){
            if (lb){
                var g = lb.domNode._geocoder;
                clearTimeout(g._destroyTimeout);
                if (lb._locating) {
                    g._destroyTimeout = setTimeout(lang.hitch(this, function () {
                        if (!g._lbShown_lb && !g._lbShown_f) {
                            this._destroyLocateButton(lb);
                        }
                    }), 100);
                }else {
                    lb.clear();
                    lb._onBeforeLocate.remove();
                    lb._onLocate.remove();
                    if (lb._onMouseEnter){lb._onMouseEnter.remove();}
                    if (lb._onMouseOut){lb._onMouseOut.remove();}
                    lb.destroy();
                    if (g.inputNode) {
                        g.inputNode._locateButton = null;
                        g.inputNode.placeholder = "";
                    }
                }
            }
        },
        // make sure each stops have a result
        _validateStops: function(results) {
            if (results) {
                for (var i = 0; i < results.length; i++) {
                    // if no results
                    if (!results[i] || !results[i].feature) {
                        return {
                            error: true,
                            index: i
                        };
                    }
                }
            }
            return {
                error: false
            };
        },
        _sortStops: function() {
            if (this.stops.length) {
                this.stops.sort(lang.hitch(this, function(a, b) {
                    var aNodeIndex, bNodeIndex;
                    for (var i = 0; i < this.get("geocoders").length; i++) {
                        if (this.geocoders[i][this._stopReference] === a) {
                            aNodeIndex = i;
                        } else if (this.geocoders[i][this._stopReference] === b) {
                            bNodeIndex = i;
                        }
                    }
                    return aNodeIndex > bNodeIndex? 1 : bNodeIndex > aNodeIndex? -1 : 0;
                }));
                this._setStops();
            }
        },
        _getCandidate: function(stop) {
            var def = new Deferred();
            var stopType = typeof stop;
            var emptyStop = {
                name: ""
            };
            if (!stop) {
                // stop not defined. Add empty string to end of list (default)
                def.resolve(emptyStop);
            } else if (stopType === "object" && stop.hasOwnProperty("feature") && stop.hasOwnProperty("name")) {
                // stop is good to go
                def.resolve(stop);
            } else if (stopType === "object" && stop.hasOwnProperty("address") && stop.hasOwnProperty("location")) {
                // stop needs to be converted but not geocoded
                var hydrated = this._globalGeocoder._hydrateResult(stop);
                def.resolve(hydrated);
            } else if (stopType === "object" && stop.hasOwnProperty("name") && !stop.name) {
                // stop is empty stop. Has a name but it is null or empty string. we don't want to try and find it.
                def.resolve(emptyStop);
            } else {
                // stop missing geocode info -> convert it to text and geocode it.
                if (stopType === "object" && stop.hasOwnProperty("name")) {
                    stop = stop.name;
                }
                if(this._globalGeocoder){
                    // geocode stop
                    this._globalGeocoder.find(stop).then(lang.hitch(this, function(candidates) {
                        // return stop(s)
                        if (candidates.results && candidates.results.length) {
                            if (
                                stop.geometry && !isNaN(stop.geometry.x) && !isNaN(stop.geometry.y) &&
                                this.map.spatialReference.wkid === stop.geometry.spatialReference.wkid
                            ){
                                candidates.results[0].feature.geometry = stop.geometry;
                                def.resolve(candidates.results[0]);
                            } else if (!candidates.results[0].feature.geometry ||
                                isNaN(candidates.results[0].feature.geometry.x) ||
                                isNaN(candidates.results[0].feature.geometry.y)
                            ){
                                this._resultError(i18n.widgets.directions.error.locator);
                                def.reject(i18n.widgets.directions.error.locator);
                            }else {
                                def.resolve(candidates.results[0]);
                            }
                        } else {
                            this._resultError(i18n.widgets.directions.error.locator);
                            def.reject(i18n.widgets.directions.error.locator);
                        }
                    }), lang.hitch(this, function() {
                        this._decorateUngeocodedStop(stop).then(def.resolve, def.reject);
                    }));
                }else{
                    this._resultError(i18n.widgets.directions.error.locatorUndefined);
                    def.reject(i18n.widgets.directions.error.locatorUndefined);
                }
            }
            return def.promise;
        },
        _updateStopInsert: function(candidate, index){
            if (this.get("geocoders")[index]) {
                this.get("geocoders")[index].set("value", candidate.name);
                // update stops with new candidates
                this.stops[index] = candidate;
                this._setStops();
            }
        },
        _updateStop: function(e, index) {
            var def = new Deferred();
            if (this.stops) {
                if (typeof index === "undefined") {
                    index = this.stops.length - 1;
                }
                this._getCandidate(e).then(lang.hitch(this, function(candidate) {
                    this._updateStopInsert(candidate, index);
                    def.resolve(candidate);
                }), lang.hitch(this, function(error) {
                    def.reject(error);
                }));
            } else {
                def.reject("could not update stop");
            }
            return def.promise;
        },
        _renderDirections: function() {
            var routeDirections = this.get("directions");
            // dom string to add
            var html = "";
            if (this._resultsNode) {
                // Route name
                html += "<div class=\"" + this._css.resultsRouteNameClass + "\">";
                html += routeDirections.routeName;
                html += "</div>";
                html += "<div class=\"" + this._css.clearClass + "\"></div>";
                // set summary
                if (routeDirections.totalLength || routeDirections.totalTime) {
                    var fDistance = this._formatDistance(routeDirections.totalLength, i18n.widgets.directions.units[this._getUnits(this.get("directionsLengthUnits"))].name);
                    var fTime = this._formatTime(routeDirections.totalTime);
                    html += "<div class=\"" + this._css.resultsSummaryClass + "\">";
                    if (fDistance) {
                        html += fDistance;
                    }
                    if (fDistance && fTime) {
                        html += " &middot; ";
                    }
                    if (fTime) {
                        html += fTime;
                    }
                    html += "</div>";
                }
                html += "<div class=\"" + this._css.clearClass + "\"></div>";
                // route buttons
                html += "<div class=\"" + this._css.resultsRouteButtonContainerClass + "\">";
                // full route button
                html += "<div tabindex=\"0\" role=\"button\" class=\"" + this._css.linkButtonClass + " " + this._css.resultsViewFullRouteClass + "\" data-full-route=\"true\">" + i18n.widgets.directions.viewFullRoute + "</div>";
                if (this.get("showPrintPage")) {
                    // print
                    html += "<div tabindex=\"0\" role=\"button\" title=\"" + i18n.widgets.directions.print + "\" class=\"" + this._css.resultsPrintClass + "\" data-print-directions=\"true\"></div>";
                }
                //clear
                html += "<div class=\"" + this._css.clearClass + "\"></div>";
                html += "</div>";
                // route container
                html += "<div class=\"" + this._css.routesClass + "\">";
                //List the directions and create hyperlinks for each route segment
                html += "<table summary=\"" + routeDirections.routeName + "\">";
                html += "<tbody role=\"menu\">";
                var nextStopSequence = function(stops, seq, terminateRecursion){
                    for (var i = 0; i < stops.length; i++){
                        var sa = stops[i].feature.attributes;
                        if (sa && sa.Sequence === seq){
                            if (sa.Status === 0 /*esriNAObjectStatusOK*/ || sa.Status === 6 /*esriNAObjectStatusNotReached*/){
                                return seq;
                            }else{
                                return nextStopSequence(stops, seq + 1);
                            }
                        }
                    }
                    if (!terminateRecursion) {
                        return nextStopSequence(stops, 1, true);
                    }else{
                        return 1;
                    }
                };
                var stopSeq = nextStopSequence(this.stops, 1);
                array.forEach(routeDirections.features, lang.hitch(this, function(feature, i) {
                    var rowClass = this._css.routeClass;
                    if (feature.attributes) {
                        feature.attributes.step = (i + 1);
                    }
                    if (feature.attributes.maneuverType) {
                        rowClass += " " + feature.attributes.maneuverType;
                    }
                    if (i === 0 && stopSeq === 1) {
                        rowClass += " " + this._css.routeOriginClass;
                    } else if (i === routeDirections.features.length - 1){
                        rowClass += " " + this._css.routeDestinationClass;
                    }
                    if (i === routeDirections.features.length - 1) {
                        rowClass += " " + this._css.routeLastClass;
                    }
                    html += "<tr tabindex=\"0\" role=\"menuitem\" class=\"" + rowClass + " " + this._css.routeZoomClass + "\" data-segment=\"" + i + "\">";
                    html += "<td class=\"" + this._css.routeIconColumnClass + "\">";
                    html += "<div class=\"" + this._css.routeIconClass + "\">";
                    if (feature.attributes.maneuverType === "esriDMTDepart") {
                        stopSeq = nextStopSequence(this.stops, stopSeq);
                        html += this._getLetter(stopSeq - 1);
                        stopSeq++;
                    } else if (feature.attributes.maneuverType === "esriDMTStop") {
                        stopSeq = nextStopSequence(this.stops, stopSeq);
                        html += this._getLetter(stopSeq - 1);
                    }
                    html += "</div>";
                    html += "</td>";
                    html += "<td class=\"" + this._css.routeTextColumnClass + "\">";
                    html += "<div class=\"" + this._css.routeInfoClass + "\">";
                    html += "<div class=\"" + this._css.routeTextClass + "\">";
                    var dStrings = routeDirections.strings[i],
                        j;
                    if (dStrings) {
                        var formatted = feature.attributes.text;
                        for (j = 0; j < dStrings.length; j++) {
                            formatted = this._boldText(formatted, dStrings[j].string);
                        }
                        feature.attributes.formattedText = formatted;
                    } else {
                        feature.attributes.formattedText = feature.attributes.text;
                    }
                    html += "<strong>" + number.format(feature.attributes.step) + ".</strong> " + feature.attributes.formattedText;
                    html += "</div>";
                    var length = this._formatDistance(feature.attributes.length, i18n.widgets.directions.units[this._getUnits(this.get("directionsLengthUnits"))].abbr);
                    var time = this._formatTime(feature.attributes.time);
                    if (length) {
                        html += "<div class=\"" + this._css.routeLengthClass + "\">";
                        html += length;
                        if (time) {
                            html += " " + time;
                        }
                        html += "</div>";
                    }
                    html += "</div>";
                    html += "</td>";
                    html += "</tr>";
                }));
                html += "</tbody>";
                html += "</table>";
                html += "</div>";
                if (this._resultsNode) {
                    this._resultsNode.innerHTML = html;
                }
                this._disconnectResults();
                var nodes = query("[data-segment]", this._resultsNode);
                if (nodes && nodes.length) {
                    array.forEach(nodes, lang.hitch(this, function(node) {
                        // mouse hover
                        var mouseEnter = on(node, mouse.enter, lang.hitch(this, function() {
                            var i = parseInt(domAttr.get(node, "data-segment"), 10);
                            this.highlightSegment(i);
                            this.emitSegmentHighlight(routeDirections.features[i]);
                        }));
                        this._resultEvents.push(mouseEnter);
                        // keyboard focus
                        var nodeFocus = on(node, "focusin", lang.hitch(this, function() {
                            var i = parseInt(domAttr.get(node, "data-segment"), 10);
                            this.highlightSegment(i);
                            this.emitSegmentHighlight(routeDirections.features[i]);
                        }));
                        this._resultEvents.push(nodeFocus);
                        // keyboard focus out
                        var nodeFocusOut = on(node, "focusout", lang.hitch(this, function() {
                            this.unhighlightSegment();
                        }));
                        this._resultEvents.push(nodeFocusOut);
                        // mouse leave
                        var mouseLeave = on(node, mouse.leave, lang.hitch(this, function() {
                            this.unhighlightSegment();
                        }));
                        this._resultEvents.push(mouseLeave);
                        if (this.get("autoCenterAtSegmentStart")) {
                            var mouseClick = on(node, "click, keydown", lang.hitch(this, function(e) {
                                if (e && (e.type === "click" || (e.type === "keydown" && e.keyCode === keys.ENTER))) {
                                    var i = parseInt(domAttr.get(node, "data-segment"), 10);
                                    this.centerAtSegmentStart(i);
                                    this.emit("segment-select", {
                                        graphic: routeDirections.features[i]
                                    });
                                }
                            }));
                            this._resultEvents.push(mouseClick);
                        }
                    }));
                }
            }
        },
        _showRoute: function(solveResult) {
            if (this._moveInProgress){
                //User started moving stops on the map already without waiting on results from previous solve.
                //We will not bother then to display outdated result, especially since it can break internal Editor.
                return;
            }
            this.editToolbar.deactivate();
            this._clearDisplayAfterSolve();
            this.set("solveResult", solveResult);
            var routeDirections = solveResult.routeResults[0].directions;
            this.set("directions", routeDirections);
            // returned stops
            var resStops = solveResult.routeResults[0].stops;
            if (resStops && resStops.length) {
                // create new stop results
                var newStopResults = [];
                var i;
                // length of optimized stop results
                var newStopsLength = resStops.length;
                // if we're returning to start
                if (this._startReturn) {
                    // ignore last stop
                    newStopsLength--;
                }
                for (i = 0; i < newStopsLength; i++) {
                    // create new stop
                    var newStop = resStops[i];
                    // create new result
                    var newResult = {
                        extent: new Extent({
                            "xmin": newStop.geometry.x - 0.25,
                            "ymin": newStop.geometry.y - 0.25,
                            "xmax": newStop.geometry.x + 0.25,
                            "ymax": newStop.geometry.y + 0.25,
                            "spatialReference": newStop.geometry.spatialReference
                        }),
                        feature: newStop,
                        name: newStop.attributes.Name
                    };
                    // add new result to stop list
                    newStopResults.push(newResult);
                }
                this.stops = newStopResults;
                // update stops with new optimal order
                for (i = 0; i < this.stops.length; i++) {
                    this._updateStop(this.stops[i], i);
                }
                this._setStops();
            }
            // set merge graphic
            this.set("mergedRouteGraphic", new Graphic(routeDirections.mergedGeometry, this.get("routeSymbol")));
            //Add route to the map
            if (this.get("map") && this.get("map").graphics) {
                var displayedRouteGraphics = [];
                array.forEach(routeDirections.features, lang.hitch(this, function(feature) {
                    feature.setSymbol(this.get("routeSymbol"));
                    this.get("map").graphics.add(feature);
                    displayedRouteGraphics.push(feature);
                    var dojoShape = feature.getDojoShape();
                    if (dojoShape) {
                        dojoShape.moveToBack();
                    }
                }));
                this.set("displayedRouteGraphics", displayedRouteGraphics);
            }
            // set new stop symbols
            this.createRouteSymbols();
            this._renderDirections();
            this.emitDirectionsFinish(solveResult);
        },
        _setGeocodersStopReference: function(){
            if(this.geocoders){
                for (var i = 0; i < this.geocoders.length; i++) {
                    if (this.geocoders[i] && this.stops[i]) {
                        this.geocoders[i][this._stopReference] = this.stops[i];
                    }
                }
            }
        },
        _setStops: function() {
            this._setGeocodersStopReference();
            this.createRouteSymbols();
            this._set("stops", this.stops);
            this.emit("stops-update", {
                stops: this.stops
            });
        },
        _getCandidates: function(stops) {
            var promises = [];
            if (stops && stops.length) {
                // go through each stop
                for (var i = 0; i < stops.length; i++) {
                    promises.push(this._getCandidate(stops[i]));
                }
                // create deferred list from array
                return all(promises);
            } else {
                var def = new Deferred();
                def.resolve([]);
                return def.promise;
            }
        },
        _clearResultsHTML: function() {
            if (this._resultsNode) {
                this._resultsNode.innerHTML = "";
            }
        },
        _showSegmentPopup: function(segment) {
            if (segment && this.get("showSegmentPopup") && this.get("map") && this.get("map").popup) {
                var geometry = segment.geometry;
                var segmentStart = geometry.getPoint(0, 0);
                var segmentGraphic = new Graphic(segmentStart, null, segment.attributes, this.get("segmentInfoTemplate"));
                this.get("map").popup.setFeatures([segmentGraphic]);
                this.get("map").popup.show(segmentStart);
            }
        },
        _removeStopButton: function(index) {
            // if allowed to be removed
            if (this.stops.length > this.get("minStops")) {
                this.removeStop(index);
            }else{
                this._setStops();
                this._clearDisplayBeforeSolve();
                this._clearDisplayAfterSolve();
            }
        },
        _addStopButton: function() {
            this.addStop(undefined, this.stops.length);
        },
        _sortGeocoders: function() {
            // all nodes
            var nodes = this._dnd.getAllNodes();
            // sort geocoders to match nodes
            this.geocoders.sort(lang.hitch(this, function(a, b) {
                return this._sortGeocodersToNodes(a, b, nodes, this._sortId);
            }));
            this._sortStops();

            //adding titles to geocoder nodes for accessibility reasons
            for (var i = 0; i < this.geocoders.length; i++){
                this.geocoders[i].inputNode.title = i18n.widgets.directions.stopNoTitle + (i + 1);
            }

            //reattaching Locate Button Events on first geocoder
            this._setLocateButtonVisibilityEvents();
        },
        // remove all connections for results list
        _disconnectResults: function() {
            if (this._resultEvents && this._resultEvents.length) {
                // disconnect all events
                for (var i = 0; i < this._resultEvents.length; i++) {
                    if (this._resultEvents[i]) {
                        this._resultEvents[i].remove();
                    }
                }
            }
            this._resultEvents = [];
        },
        //Format the time as hours and minutes
        _formatTime: function(time) {
            var hr, min, str = "";
            var rounded = Math.round(time);
            // calculate hours
            hr = Math.floor(rounded / 60);
            // calculate minutes
            min = Math.floor(rounded % 60);
            if (hr) {
                str += hr + " ";
                if (hr > 1) {
                    str += i18n.widgets.directions.time.hours;
                } else {
                    str += i18n.widgets.directions.time.hour;
                }
            }
            if (hr && min) {
                str += " ";
            }
            if (min) {
                str += min + " ";
                if (min > 1) {
                    str += i18n.widgets.directions.time.minutes;
                } else {
                    str += i18n.widgets.directions.time.minute;
                }
            }
            return str;
        },
        //Round the distance to the nearest hundredth of a unit
        _formatDistance: function(dist, units) {
            var d = Math.round(dist * 100) / 100;
            if (d === 0) {
                return "";
            }
            return number.format(d) + " " + units;
        },
        _setMoveSymbol: function(graphic) {
            this._moveSymbolSet = true;
            var symbol = this._setStopSymbol(graphic._index, this.stopGraphics.length, true, graphic.attributes.Status);
            graphic.setSymbol(symbol);
        },
        _unsetMoveSymbol: function(graphic) {
            var symbol = this._setStopSymbol(graphic._index, this.stopGraphics.length, false, graphic.attributes.Status);
            graphic.setSymbol(symbol);
            this._moveSymbolSet = false;
        },
        _removeTextGraphic: function(index) {
            var textGraphic = this.textGraphics[index];
            this.get("map").graphics.remove(textGraphic);
        },
        _setDraggableObject: function(graphic) {
            if (graphic._drag && this.get("map") && this.get("map").graphics) {
                this.get("map")._directionsWidgetDragging = true;
                this._removeTextGraphic(graphic._index);
                this._dragGraphic = graphic;
                this._dragGeometry = graphic.geometry;
                this.editToolbar.activate(Edit.MOVE, graphic);
            }
        },
        _setTextGraphic: function(graphic) {
            if (graphic._drag && this.get("map") && this.get("map").graphics) {
                var textGraphic = this.textGraphics[graphic._index];
                textGraphic.setGeometry(graphic.geometry);
                this.get("map").graphics.add(textGraphic);
                var textShape = textGraphic.getDojoShape();
                if (textShape) {
                    textShape.moveToFront();
                }
            }
        },
        _unsetDraggableObject: function(graphic) {
            if (graphic._drag) {
                this.get("map")._directionsWidgetDragging = false;
                if (this._moveSymbolSet) {
                    this._unsetMoveSymbol(graphic);
                }
                this._setTextGraphic(graphic);
                this.editToolbar.deactivate();
            }
        },
        _isMyStopGraphic: function(graphic){
            return array.indexOf(this.get("stopGraphics"), graphic) > -1 || array.indexOf(this.get("textGraphics"), graphic) > -1;
        },
        _editToolbar: function() {
            if (this.get("map")) {
                this.set("editToolbar", new Edit(this.get("map")));
            } else {
                this.set("editToolbar", null);
            }
        },
        _destroyGlobalGeocoder: function() {
            // remove global geocoder
            if (this._globalGeocoder) {
                this._globalGeocoder.destroy();
                this._globalGeocoder = null;
            }
        },
        _createGlobalGeocoder: function() {
            var def = new Deferred();
            this._globalGeocoder = new Geocoder(this.get("geocoderOptions"), domConstruct.create("div"));
            on.once(this._globalGeocoder, "load", lang.hitch(this, function() {
                def.resolve();
            }, function(err){
                def.reject(err);
            }));
            this._globalGeocoder.startup();
            return def.promise;
        },
        _init: function() {
            var def = new Deferred();
            this.set("loaded", false);
            // if map is in options
            if (this.get("map")) {
                // once map is loaded
                if (this.get("map").loaded) {
                    this._configure().always(def.resolve);
                } else {
                    on.once(this.get("map"), "load", lang.hitch(this, function() {
                        this._configure().always(def.resolve);
                    }));
                }
            } else {
                // lets go
                this._configure().always(def.resolve);
            }
            return def.promise;
        },
        _setDefaultStops: function() {
            var def = new Deferred();
            // set default stops
            if (this.defaults.stops && this.defaults.stops.length) {
                // set the stops
                this._updateStops(this.defaults.stops).then(lang.hitch(this, function() {
                    // focus on first geocoder
                    if (this.get("focusOnNewStop") && this.get("geocoders") && this.get("geocoders").length) {
                        this.get("geocoders")[0].focus();
                    }
                    this._removeEmptyStops();
                    def.resolve();
                }), def.reject);
            }
            else{
                def.resolve();
            }
            return def.promise;
        },
        _configure: function() {
            var def = new Deferred();
            this._createDnD();
            // set geocoder properties
            this._setGeocoderOptions(); // requires map to be loaded
            // create geocoder
            this._createGlobalGeocoder().then(lang.hitch(this, function() {
                // setup edit toolbar
                this._editToolbar();
                // set route task and params
                // part of the process is interrogation of the route service endpoint
                //helper services
                if (!this._usingAGOL()){
                    this.geometryTaskUrl = null;
                    this.printTaskUrl = null;
                }
                this._createGeometryTask();
                this._createPrintTask();
                this._showActivateButton();

                //async initialization
                var initProcs = [
                    this._createRouteTask(),
                    this._setDefaultStops()
                ];
                all(initProcs).then(lang.hitch(this, function(){
                    // set default units
                    this._setDefaultUnits();
                    // set default traffic options
                    this._setTrafficOptions();
                    // setup starting options for routing
                    this._setMenuNodeValues();
                    // setup events
                    this._setupEvents();
                    //setup directions language
                    this._setDirectionsLanguageByLocale(!this.directionsLanguage? kernel.locale.toLowerCase() : this.directionsLanguage);
                    // ready for setting stops
                    this._stopsReady = true;
                    // set loaded
                    this.set("loaded", true);
                    this.emit("load");
                    def.resolve(true);
                }), function(err){
                    def.reject(err);
                });
            }), function(err){
                def.reject(err);
            });
            return def.promise;
        },
        _setDirectionsLanguageByLocale: function(locale){
            //supported directions language lookup
            var ls = this.serviceDescription.directionsSupportedLanguages;
            var lookup = function(l){
                if (ls){
                    for (var i = 0; i < ls.length; i++){
                        //complete match, case insensitive
                        if (ls[i].toLowerCase().substr(0, 2) === l){
                            return ls[i];
                        }
                    }
                }
                return null;
            };
            //try full case insensitive match
            var nasLang = lookup(locale);
            if (!nasLang){
                //let's try partial match using first two characters
                locale = locale.substr(0, 2);
                nasLang = lookup(locale);
            }
            this.directionsLanguage = nasLang;
            this.routeParams.directionsLanguage = nasLang;
            return nasLang;
        },
        // count how many valid stops
        _calculateValidStops: function() {
            var validCount = 0;
            var stops = this.stops;
            for (var i = 0; i < stops.length; i++) {
                if (stops[i] && stops[i].name) {
                    validCount++;
                }
            }
            return validCount;
        },
        _setStopSymbol: function(i, total, move, status) {
            if (status === undefined || status === 0 /*OK*/ || status === 6 /*TW Violation*/) {
                if (i === 0) {
                    return this.get(move? "fromSymbolDrag" : "fromSymbol");
                } else if (i === (total - 1)) {
                    return this.get(move? "toSymbolDrag" : "toSymbol");
                } else {
                    return this.get(move? "stopSymbolDrag" : "stopSymbol");
                }
            }else{
                return this.get(move? "unreachedSymbolDrag" : "unreachedSymbol");
            }
        },
        _addTrafficLayer: function() {
            var trafficLayer = this.get("trafficLayer");
            var map = this.get("map");
            // traffic layer isn't already added to map
            if (map && trafficLayer && !this._trafficLayerAdded) {
                map.addLayer(trafficLayer);
                trafficLayer.show();
                this._trafficLayerAdded = true;
            }
        },
        _toggleUnits: function(e) {
            if (e.target === this._useMilesNode) {
                this.setDirectionsLengthUnits(esriUnits.MILES);
            } else if (e.target === this._useKilometersNode) {
                this.setDirectionsLengthUnits(esriUnits.KILOMETERS);
            }
        },
        _toggleTravelModeImpedance: function(e) {
            domClass.add(e.target, this._css.stopsPressedButtonClass);
            if (e.target === this._useTravelModeTimeNode) {
                domClass.remove(this._useTravelModeDistanceNode, this._css.stopsPressedButtonClass);
            } else if (e.target === this._useTravelModeDistanceNode) {
                domClass.remove(this._useTravelModeTimeNode, this._css.stopsPressedButtonClass);
            }
            this._travelModeImpedanceKey = e.target.attributes["travel-mode-key"].value;
            this.setTravelMode(this._travelModeKey + " " + this._travelModeImpedanceKey);
        },
        _toggleTravelMode: function(e) {
            domClass.add(e.target, this._css.stopsPressedButtonClass);
            if (e.target === this._useTravelModeCarNode) {
                domClass.remove(this._useTravelModeTruckNode, this._css.stopsPressedButtonClass);
                domClass.remove(this._useTravelModeWalkingNode, this._css.stopsPressedButtonClass);
            } else if (e.target === this._useTravelModeTruckNode) {
                domClass.remove(this._useTravelModeCarNode, this._css.stopsPressedButtonClass);
                domClass.remove(this._useTravelModeWalkingNode, this._css.stopsPressedButtonClass);
            } else if (e.target === this._useTravelModeWalkingNode) {
                domClass.remove(this._useTravelModeCarNode, this._css.stopsPressedButtonClass);
                domClass.remove(this._useTravelModeTruckNode, this._css.stopsPressedButtonClass);
            }
            this._travelModeKey = e.target.attributes["travel-mode-key"].value;
            this.setTravelMode(this._travelModeKey + " " + this._travelModeImpedanceKey);
        },
        _toggleCheckbox: function(e) {
            var value = domAttr.get(e.target, "checked");
            if (e.target === this._findOptimalOrderNode) {
                this.set("optimalRoute", value);
            } else if (e.target === this._useTrafficNode) {
                this.set("traffic", value);
            } else if (e.target === this._returnToStartNode) {
                this.set("returnToStart", value);
            }
        },
        _configureRouteOptions: function() {
            var rp = this.get("routeParams");
            if (this.get("directionsLengthUnits")) {
                rp.directionsLengthUnits = this.get("directionsLengthUnits");
            }else{
                this.set("directionsLengthUnits", rp.directionsLengthUnits);
            }
            // if find optimal order
            rp.findBestSequence = this.get("optimalRoute");
            //we need stops always back to see the Status and reuse location fields
            rp.returnStops = true;
            // if use traffic
            if (this.get("traffic")) {
                rp.startTime = new Date();
                rp.startTimeIsUTC = true;
                this._addTrafficLayer();
            } else {
                rp.startTime = null;
                rp.startTimeIsUTC = null;
                this._removeTrafficLayer();
            }
            // if return to start
            if (this.get("returnToStart") && this.stopGraphics.length) {
                var first = new Graphic(this.stopGraphics[0].geometry, null, this.stopGraphics[0].attributes);
                var graphics = this.stopGraphics.slice(0);
                this._startReturn = first;
                graphics.push(first);
                rp.stops.features = graphics;
            } else {
                this._startReturn = null;
                rp.stops.features = this.stopGraphics;
            }
            this.set("routeParams", rp);
        },
        _configureRoute: function(){
            var def = new Deferred();
            this.createRouteSymbols();
            this._configureRouteOptions();
            this.routeTask.solve(this.routeParams, lang.hitch(this, function(response) {
                this._showRoute(response);
                def.resolve(response);
            }), lang.hitch(this, function(error) {
                for (var i = 0; i < this.stops.length; i++){
                    //esriNAObjectStatusNotReached
                    this.stops[i].feature.attributes = lang.mixin(
                        this.stops[i].feature.attributes,
                        {Status : 5}
                    );
                }
                this.set("directions", null);
                this._clearDisplayAfterSolve();
                this.createRouteSymbols();
                this._routeTaskError(error);
                def.reject(error);
            }));
            return def.promise;
        },
        _boldText: function(input, needle) {
            return input.replace(new RegExp("(^|\\s)(" + needle + ")(\\s|$)", "ig"), "$1<strong>$2</strong>$3");
        },
        _clearStopGraphics: function() {
            if (this.stopGraphics && this.stopGraphics.length && this.get("map") && this.get("map").graphics) {
                for (var i = 0; i < this.stopGraphics.length; i++) {
                    this.get("map").graphics.remove(this.stopGraphics[i]);
                    this.get("map").graphics.remove(this.textGraphics[i]);
                }
            }
            this.set("stopGraphics", []);
            this.set("textGraphics", []);
        },
        _clearRouteGraphics: function() {
            var displayedRouteGraphics = this.get("displayedRouteGraphics");
            var map = this.get("map");
            if (displayedRouteGraphics && displayedRouteGraphics.length && map && map.graphics) {
                array.forEach(displayedRouteGraphics, function(feature){
                    map.graphics.remove(feature);
                });
                this.set("displayedRouteGraphics", []);
            }
            this.unhighlightSegment();
        },
        _clearInfoWindow: function() {
            if (this.get("map") && this.get("map").popup) {
                this.get("map").popup.hide();
                if (this.get("map").popup.features) {
                    this.get("map").popup.clearFeatures();
                }
            }
        },
        _clearDisplayBeforeSolve: function(){
            this._clearInfoWindow();
            this._clearResultsHTML();
        },
        _clearDisplayAfterSolve: function(){
            this._clearStopGraphics();
            this._clearRouteGraphics();
            this.clearErrors();
        },
        _getLetter: function(i) {
            var alphabet = this.get("alphabet");
            var res = "";
            if (alphabet && alphabet.length) {
                i = i || 0;
                if (i >= alphabet.length) {
                    res = this._getLetter(Math.floor(i / this.alphabet.length) - 1);
                    i %= this.alphabet.length;
                }
                if (typeof alphabet === "string") {
                    // string alphabet
                    res += alphabet.substr(i, 1);
                } else if (alphabet instanceof Array) {
                    // array alphabet
                    res += alphabet[i];
                }
            }
            return res;
        },
        _solveAndZoom: function() {
            if (this.get("autoSolve")) {
                return this.getDirections().then(lang.hitch(this, function () {
                    this.zoomToFullRoute();
                }));
            }else{
                var def = new Deferred();
                def.resolve();
                return def.promise;
            }
        },
        _setupEvents: function() {
            // reverse click
            var reverseClick = on(this._dndNode, "[data-reverse-stops]:click, [data-reverse-stops]:keydown", lang.hitch(this, function(e) {
                if (e && (e.type === "click" || (e.type === "keydown" && e.keyCode === keys.ENTER))) {
                    this._reverseStops();
                }
            }));
            this._onEvents.push(reverseClick);
            // print click
            var printDirectionsClick = on(this._resultsNode, "[data-print-directions]:click, [data-print-directions]:keydown", lang.hitch(this, function(e) {
                if (e && (e.type === "click" || (e.type === "keydown" && e.keyCode === keys.ENTER))) {
                    this._printDirections();
                }
            }));
            this._onEvents.push(printDirectionsClick);
            // full route click
            var fullRouteClick = on(this._resultsNode, "[data-full-route]:click, [data-full-route]:keydown", lang.hitch(this, function(e) {
                if (e && (e.type === "click" || (e.type === "keydown" && e.keyCode === keys.ENTER))) {
                    this.zoomToFullRoute();
                }
            }));
            this._onEvents.push(fullRouteClick);
            // remove stop
            var removeStop = on(this._dndNode, "[data-remove]:click, [data-remove]:keydown", lang.hitch(this, function(e) {
                if (e && (e.type === "click" || (e.type === "keydown" && e.keyCode === keys.ENTER))) {
                    var items = query("[data-remove]", this._dndNode);
                    var index = array.indexOf(items, e.target);
                    this._removeStopButton(index);
                }
            }));
            this._onEvents.push(removeStop);
            // center at stop
            this._onEvents.push(
                on(this._dndNode, "[data-center-at]:click, [data-center-at]:keydown", lang.hitch(this, function(e){
                    if (e && (e.type === "click" || (e.type === "keydown" && e.keyCode === keys.ENTER))){
                        var items = query("[data-center-at]", this._dndNode);
                        var index = array.indexOf(items, e.target);
                        if (this.stops[index] && this.stops[index].feature &&  this.stops[index].feature.geometry) {
                            this.map.centerAndZoom(this.stops[index].feature.geometry);
                        }
                    }
                }))
            );
            // drag and drop
            var dragAndDrop = on(this._dnd, "Drop", lang.hitch(this, function() {
                // sync DND
                this._dnd.sync();
                // sort geocoders
                this._sortGeocoders();
                // reset icons
                this.setListIcons();
                // if all stops are valid and features are set
                if (this._calculateValidStops() === this.get("geocoders").length && this.get("routeParams").stops.features.length) {
                    this._solveAndZoom();
                }
            }));
            this._onEvents.push(dragAndDrop);
            var dndDragStart = on(this._dnd, "DndStart", lang.hitch(this, function() {
                var body = query("body")[0];
                domClass.add(body, this._css.dndDragBodyClass);
                //removing Locate Button Events from first geocoder
                this._removeLocateButtonVisibilityEvents();
            }));
            this._onEvents.push(dndDragStart);
            var dndDragStop = on(this._dnd, "DndDrop, DndCancel", lang.hitch(this, function() {
                var body = query("body")[0];
                domClass.remove(body, this._css.dndDragBodyClass);
                //reattaching Locate Button Events on first geocoder
                this._setLocateButtonVisibilityEvents();
            }));
            this._onEvents.push(dndDragStop);
            if (this.get("map") && this.get("map").graphics) {
                // mouse over stop
                var mouseOverStop = this.get("map").graphics.on("mouse-over", lang.hitch(this, function(e) {
                    if (this.get("dragging") && !this.get("map")._directionsWidgetDragging) {
                        var editState;
                        if ( this._isMyStopGraphic(e.graphic) ) {
                            if (e.graphic._drag) {
                                editState = this.editToolbar.getCurrentState();
                                if (!editState.graphic) {
                                    this._setDraggableObject(e.graphic);
                                }
                                if (!this._moveSymbolSet) {
                                    this._setMoveSymbol(e.graphic);
                                }
                            } else if (e.graphic._textGraphic) {
                                editState = this.editToolbar.getCurrentState();
                                if (this.stopGraphics[e.graphic._index]) {
                                    if (!editState.graphic) {
                                        this._setDraggableObject(this.stopGraphics[e.graphic._index]);
                                    }
                                    if (!this._moveSymbolSet) {
                                        this._setMoveSymbol(this.stopGraphics[e.graphic._index]);
                                    }
                                }
                            }
                        }
                    }
                }));
                this._onEvents.push(mouseOverStop);
                // mouse out stop
                var mouseOutStop = this.get("map").graphics.on("mouse-out", lang.hitch(this, function(e) {
                    if (this.get("dragging") && this._isMyStopGraphic(e.graphic)) {
                        if (!this._moveInProgress && e.graphic._drag) {
                            this._unsetDraggableObject(e.graphic);
                        }
                    }
                }));
                this._onEvents.push(mouseOutStop);
                // edit toolbar specific events
                this._editToolbarEvents();
            }
            // watch theme
            var themeWatch = this.watch("theme", this._updateThemeWatch);
            this._watchEvents.push(themeWatch);
            // watch modify stops option
            var canModifyStopsWatch = this.watch("canModifyStops", this._updateCanModifyStops);
            this._watchEvents.push(canModifyStopsWatch);
            // show return option
            var showReturnToStartOption = this.watch("showReturnToStartOption", this._optionsMenu);
            this._watchEvents.push(showReturnToStartOption);
            // show optimal route option
            var showOptimalRouteOption = this.watch("showOptimalRouteOption", this._optionsMenu);
            this._watchEvents.push(showOptimalRouteOption);
            // return to start changed
            var returnToStart = this.watch("returnToStart", this._setMenuNodeValues);
            this._watchEvents.push(returnToStart);
            // use optimal route changed
            var optimalRoute = this.watch("optimalRoute", this._setMenuNodeValues);
            this._watchEvents.push(optimalRoute);
            // route task url changed
            var routeTaskUrl = this.watch("routeTaskUrl", lang.hitch(this, function() {
                this._createRouteTask();
                this._setTrafficOptions();
            }));
            this._watchEvents.push(routeTaskUrl);
            // print task url changed
            this._watchEvents.push(this.watch("printTaskUrl", lang.hitch(this, function() {this._createPrintTask();})));
            // geometry service url changed
            this._watchEvents.push(this.watch("geometryTaskUrl", lang.hitch(this, function() {this._createGeometryTask();})));
            // route params changed
            var routeParams = this.watch("routeParams", lang.hitch(this, function() {
                this._createRouteParams();
                this._setDefaultUnits();
            }));
            this._watchEvents.push(routeParams);
            // geocoder options changed
            var geocoderOptions = this.watch("geocoderOptions", lang.hitch(this, function() {
                this._setGeocoderOptions();
                this._createGlobalGeocoder();
            }));
            this._watchEvents.push(geocoderOptions);
            // show reverse stops button
            var showReverseStopsButton = this.watch("showReverseStopsButton", this.setListIcons);
            this._watchEvents.push(showReverseStopsButton);
            // show print page button
            var showPrintPage = this.watch("showPrintPage", this._renderDirections);
            this._watchEvents.push(showPrintPage);
            // traffic layer changed
            var trafficLayer = this.watch("trafficLayer", this._trafficLayerUpdate);
            this._watchEvents.push(trafficLayer);
            // edit toolbar changed
            var et = this.watch("editToolbar", this._editToolbarEvents);
            this._watchEvents.push(et);
            // show Travel Modes
            var showTravelModes = this.watch("showTravelModesOption", this._showTravelModesOption);
            this._watchEvents.push(showTravelModes);
            //show Miles/Kilometers
            var showMilesKilometersOption = this.watch("showMilesKilometersOption", this._showMilesKilometersOption);
            this._watchEvents.push(showMilesKilometersOption);
            //show Clear button
            var showClearButton = this.watch("showClearButton", this._showClearButton);
            this._watchEvents.push(showClearButton);
            //changing directions length units
            var directionsLengthUnits = this.watch("directionsLengthUnits", this.setDirectionsLengthUnits);
            this._watchEvents.push(directionsLengthUnits);
            //changing directions language
            this._watchEvents.push(this.watch("directionsLanguage", this.setDirectionsLanguage));
            //activation
            this._watchEvents.push(this.watch("mapClickActive", this._activate));
            this._watchEvents.push(this.watch("showActivateButton", this._showActivateButton));
        },
        _editToolbarEvents: function(){
            // click on stop
            var stopClick = on(this.editToolbar, "graphic-click", lang.hitch(this, function(e) {
                if (this.get("map") && this.get("map").popup) {
                    this.get("map").popup.setFeatures([e.graphic]);
                    this.get("map").popup.show(e.graphic.geometry);
                }
            }));
            this._onEvents.push(stopClick);
            // move stop start
            var moveStopStart = on(this.editToolbar, "graphic-first-move", lang.hitch(this, function() {
                this._moveInProgress = true;
            }));
            this._onEvents.push(moveStopStart);
            // move stop end
            var moveStopEnd = on(this.editToolbar, "graphic-move-stop", lang.hitch(this, function(e) {
                this._moveInProgress = false;
                this._unsetDraggableObject(e.graphic);
                if (this._dragGeometry !== e.graphic.geometry) {
                    this._currentEditableGraphic = e.graphic;
                    if (this.get("autoSolve")) {
                        this.emitDirectionsStart();
                    }
                    this._globalGeocoder.find(e.graphic.geometry).then(lang.hitch(this, function(response) {
                        if (response && response.results.length) {
                            this._setReverseGeocode(response.results[0], response.geometry, array.indexOf(this.stopGraphics, e.graphic));
                        } else {
                            this._reverseGeocodeError(new Error(i18n.widgets.directions.error.locator));
                        }
                    }), lang.hitch(this, function() {
                        this._decorateUngeocodedStop(e.graphic).then(lang.hitch(this,function(stop){
                            this._setReverseGeocode(stop, stop.feature.geometry, array.indexOf(this.stopGraphics, e.graphic));
                        }));
                    }));
                }
            }));
            this._onEvents.push(moveStopEnd);
        },
        _decorateUngeocodedStop: function(graphic){
            //let's make sure we return <Long, Lat> name for this location
            var def = new Deferred();
            var resolve = function(x, y){
                def.resolve({
                    name : x === undefined? i18n.widgets.directions.unlocatedStop : x.toFixed(6) + " " + y.toFixed(6),
                    feature : graphic
                });
            };
            if (graphic.geometry){
                if (graphic.geometry.spatialReference && graphic.geometry.spatialReference.wkid !== 4326) {
                    if (this.map && this.map.spatialReference && this.map.spatialReference.isWebMercator()) {
                        require(["../geometry/support/webMercatorUtils"], function(webMercatorUtils){
                            var xy = webMercatorUtils.xyToLngLat(graphic.geometry.x, graphic.geometry.y);
                            resolve(xy[0], xy[1]);
                        });
                    }else if(this._geometryService){
                        // geometry service is set and point needs projection
                        // project parameters
                        var params = new ProjectParameters();
                        params.outSR = SpatialReference.WGS84;
                        params.geometries = [graphic.geometry];
                        // project point
                        this._geometryService.project(params).then(lang.hitch(this, function(res) {
                            // if we got a projected point
                            if (res && res.length) {
                                resolve(res[0].x, res[0].y);
                            } else{
                                resolve(graphic.geometry.x, graphic.geometry.y);
                            }
                        }), lang.hitch(this, function(){
                            resolve();
                        }));
                    } else {
                        resolve(graphic.geometry.x, graphic.geometry.y);
                    }
                } else {
                    resolve(graphic.geometry.x, graphic.geometry.y);
                }
            } else{
                resolve();
            }
            return def.promise;
        },
        _trafficLayerUpdate: function() {
            var oldVal = arguments[1];
            var newVal = arguments[2];
            var map = this.get("map");
            // remove old layer
            if (oldVal && map && this._trafficLayerAdded) {
                map.removeLayer(oldVal);
                this._trafficLayerAdded = false;
            }
            // add new layer
            if (newVal && map && this.get("traffic") && !this._trafficLayerAdded) {
                map.addLayer(newVal);
                newVal.show();
                this._trafficLayerAdded = true;
            }
        },
        _reverseGeocodeError: function(error) {
            this.emitDirectionsFinish(error);
            var message = i18n.widgets.directions.error.locator;
            this._resultError(message);
            this._clearRouteGraphics();
            // set attributes
            this._currentEditableGraphic.setAttributes({
                error: message
            });
            // get graphic index
            var index = this._currentEditableGraphic._index;
            // clear geocoder value
            this._updateStop({
                name: ""
            }, index);
        },
        _routeTaskError: function(error) {
            var message = i18n.widgets.directions.error.routeTask;
            var ed = error.details;
            if (ed && ed.length === 1){
                //special error cases; valid for July 2014 release of AGOL only
                if (ed[0] === "The distance between any inputs must be less than 50 miles (80 kilometers) when walking."){
                    message = i18n.widgets.directions.error.maxWalkingDistance;
                }else if (ed[0] === "Driving a truck is currently not supported outside of North America and Central America."){
                    message = i18n.widgets.directions.error.nonNAmTruckingMode;
                }
            }
            this._resultError(message);
            this.emitDirectionsFinish(error);
        },
        _resultError: function(error) {
            var html = "";
            this.errors.push(error);
            html += "<div class=\"" + this._css.routesErrorClass + "\">";
            if (this.errors.length) {
                html += "<ul>";
                for (var i = 0; i < this.errors.length; i++) {
                    html += "<li>" + this.errors[i] + "</li>";
                }
                html += "</ul>";
            }
            html += "</div>";
            if (this._errorNode) {
                this._errorNode.innerHTML = html;
            }
            // error event
            this.emit("error", {
                error: error
            });
        },
        _getUnits: function(unit) {
            switch (unit) {
            case esriUnits.KILOMETERS:
                return "KILOMETERS";
            case esriUnits.METERS:
                return "METERS";
            case esriUnits.NAUTICAL_MILES:
                return "NAUTICAL_MILES";
            default:
                return "MILES";
            }
        },
        _createRouteTask: function() {
            // routing task creation
            var def = new Deferred();
            this.set("routeTask", new RouteTask(this.get("routeTaskUrl")));
            if (this._usingAGOL()){
                this._setTravelModeComponentsVisibility(true);
            }
            this._createRouteParams();
            esriRequest({
                url : this.get("routeTask").url,
                content : {f : "json"},
                handleAs : "json",
                callbackParamName: "callback"
            }).then(
                lang.hitch(this, function(res){
                    if (res.networkDataset){
                        //we are dealing with Route REST endpoint here
                        this.set("serviceDescription", res);
                        //Travel Modes
                        this._showTravelModesOption();
                        if (this._hasAGOLTravelModes) {
                            var stms = this.getSupportedTravelModeNames(),
                                tm = this.travelModeName && stms.length && array.indexOf(stms, this.travelModeName) > -1? this.travelModeName : this._tmDrivingTime,
                                tmKeys = tm.split(" ");
                            this._travelModeKey = tmKeys[0];
                            this._travelModeImpedanceKey = tmKeys[1];
                            this.setTravelMode(tm);
                        }
                        //max stop count, if limited
                        if (res.serviceLimits && res.serviceLimits.Route_MaxStops){
                            this.set("maxStops", res.serviceLimits.Route_MaxStops);
                        }
                        def.resolve();
                    }else{
                        this._resultError(i18n.widgets.directions.error.cantFindRouteServiceDescription);
                        def.reject(i18n.widgets.directions.error.cantFindRouteServiceDescription);
                    }
                }),
                lang.hitch(this, function(){
                    this._resultError(i18n.widgets.directions.error.cantFindRouteServiceDescription);
                    def.reject(i18n.widgets.directions.error.cantFindRouteServiceDescription);
                })
              );
            return def.promise;
        },
        _createPrintTask: function(){
            this.printTaskUrl = this._usingAGOL()? this.printTaskUrl : this.defaults.printTaskUrl;
            this._printService = this.printTaskUrl? new PrintTask(this.printTaskUrl, {async : false}) : null;
            var template = new PrintTemplate();
            template.exportOptions = {
                width: 670,
                height: 750,
                dpi: 96
            };
            template.format = "PNG32";
            template.layout = "MAP_ONLY";
            template.preserveScale = false;
            template.showAttribution = false;
            var params = new PrintParameters();
            params.map = this.map;
            params.outSpatialReference = this.map.spatialReference;
            params.template = template;
            this._printParams = params;
        },
        _createGeometryTask: function(){
            this._geometryService = null;
            if (this._usingAGOL()){
                this._geometryService = new GeometryService(this.geometryTaskUrl);
            }else{
                this._geometryService = this.defaults.geometryTaskUrl? new GeometryService(this.defaults.geometryTaskUrl) : esriConfig.geometryService;
                this.geometryTaskUrl = this._geometryService? this._geometryService.url : null;
            }
        },
        _showTravelModesOption: function(){
            var sd = this.get("serviceDescription");
            var shouldHide = !this.showTravelModesOption || !sd;
            if (sd){
                //let's see if there are standard AGOL Travel modes present in service description
                var tms = sd.supportedTravelModes;
                this._hasAGOLTravelModes = tms && tms.length ? true : false;
                //well known Travel Modes which are common for all AGOL accounts
                var wktms = {};
                wktms[this._tmDrivingTime] = null;
                wktms[this._tmTruckingTime] = null;
                wktms[this._tmWalkingTime] = null;
                wktms[this._tmDrivingDistance] = null;
                wktms[this._tmTruckingDistance] = null;
                wktms[this._tmWalkingDistance] = null;
                if (this._hasAGOLTravelModes) {
                    for (var wktm in wktms) {
                        if (wktms.hasOwnProperty(wktm)) {
                            var found = false;
                            for (var j = 0; j < tms.length; j++) {
                                if (tms[j].name === wktm) {
                                    wktms[wktm] = tms[j].itemId;
                                    tms[j]._nodeTravelMode =
                                            wktm.indexOf("Driving") > -1 ? this._useTravelModeCarNode :
                                            wktm.indexOf("Trucking") > -1 ? this._useTravelModeTruckNode :
                                            this._useTravelModeWalkingNode;
                                    tms[j]._nodeImpedance =
                                            wktm.indexOf("Time") > -1 ? this._useTravelModeTimeNode : this._useTravelModeDistanceNode;
                                    found = true;
                                    break;
                                }
                            }
                            if (!found) {
                                this._hasAGOLTravelModes = false;
                                break;
                            }
                        }
                    }
                }
                shouldHide = shouldHide || !this._hasAGOLTravelModes;
                this.showTravelModesOption = this.showTravelModesOption && this._hasAGOLTravelModes;
            }
            this._setTravelModeComponentsVisibility(!shouldHide);
        },
        _setTravelModeComponentsVisibility: function(show){
            domStyle.set(this._travelModeContainerNode, "display", show? "inline-block" : "none");
            domStyle.set(this._travelModeImpedanceNode, "display", show? "inline-block" : "none");
            //trucking mode and fastest/shortest options get unconditionally switched off for the ArcGIS.com viewer
            domStyle.set(this._useTravelModeTruckNode,  "display", this.hideTruckingMode? "none" : "inline-block");
            domStyle.set(this._travelModeImpedanceNode, "display", this.hideFastestShortestOption? "none" : "inline-block");

        },
        _showMilesKilometersOption: function(){
            domStyle.set(this._travelModeDistanceUnitsNode, "display", this.showMilesKilometersOption? "block" : "none");
        },
        _showClearButton: function(){
            domStyle.set(this._clearDirectionsButtonNode, "display", this.showClearButton? "inline-block" : "none");
        },
        _showActivateButton: function(){
            domStyle.set(this._activateButtonNode, "display", this.showActivateButton? "inline-block" : "none");
            if (!this.showActivateButton){
                this.deactivate();
            }
        },
        _createRouteParams: function() {
            // default route parameters
            var defaultParams = {
                returnRoutes: false,
                preserveFirstStop: true,
                preserveLastStop: true,
                ignoreInvalidLocations: true
            };
            // required route parameters
            var requiredParams = {
                directionsOutputType: "complete",
                stops: new FeatureSet(),
                returnDirections: true,
                doNotLocateOnRestrictedElements: true
            };
            if (this.get("map")) {
                requiredParams.outSpatialReference = this.get("map").spatialReference;
            } else {
                requiredParams.outSpatialReference = this._defaultSR;
            }
            // make sure routeparams is an object
            if (!this.get("routeParams")) {
                this.routeParams = {};
            }
            // mix in route params from options
            var rp = new RouteParameters();
            // set route params
            this.routeParams = lang.mixin(rp, defaultParams, this.get("routeParams"), requiredParams);
        },
        _reverseStops: function() {
            var nodes = this._dnd.getAllNodes();
            if (nodes.length) {
                //removing Locate Button Events from first geocoder
                this._removeLocateButtonVisibilityEvents();

                nodes.reverse();
                this._dnd.clearItems();
                this._dnd.insertNodes(false, nodes);
                this._dnd.sync();
                this._stopsRemovable();
                this._optionsMenu();
                this._checkMaxStops();
                this.setListIcons();
                this._sortGeocoders();
                this._solveAndZoom();
            }
        },
        _sortGeocodersToNodes: function(a, b, nodes, id) {
            // dnd node id for a
            var aId = a[id];
            // dnd node id for b
            var bId = b[id];
            // get parent of stop node a
            var aDnd = dom.byId(aId);
            // get parent of stop node b
            var bDnd = dom.byId(bId);
            // get index of parent a
            var indexA = array.indexOf(nodes, aDnd);
            // get index of parent b
            var indexB = array.indexOf(nodes, bDnd);
            // sort by list nodes
            for (var i = 0; i < nodes.length; i++) {
                if (i === indexA) {
                    // move a lower index
                    return -1;
                } else if (i === indexB) {
                    // move b lower index
                    return 1;
                }
            }
        },
        _setMenuNodeValues: function() {
            // options defaults
            var optimal = this.get("optimalRoute");
            if (this._findOptimalOrderNode) {
                domAttr.set(this._findOptimalOrderNode, "checked", optimal);
            }
            var returntostart = this.get("returnToStart");
            if (this._returnToStartNode) {
                domAttr.set(this._returnToStartNode, "checked", returntostart);
            }
            var traffic = this.get("traffic");
            if (this._useTrafficNode) {
                domAttr.set(this._useTrafficNode, "checked", traffic);
            }
            var units = this.get("directionsLengthUnits");
            switch (units) {
            case esriUnits.KILOMETERS:
                domAttr.set(this._useKilometersNode, "checked", true);
                domAttr.set(this._useMilesNode, "checked", false);
                break;
            case esriUnits.MILES:
                domAttr.set(this._useKilometersNode, "checked", false);
                domAttr.set(this._useMilesNode, "checked", true);
                break;
            }
            this._showMilesKilometersOption();
            this._showClearButton();
        },
        _optionsMenu: function() {
            if (this._useTrafficItemNode) {
                domStyle.set(this._useTrafficItemNode, "display", this.get("showTrafficOption")? "block" : "none");
            }
            if (this._returnToStartItemNode) {
                domStyle.set(this._returnToStartItemNode, "display", this.get("showReturnToStartOption")? "block" : "none");
            }
            if (this._findOptimalOrderItemNode) {
                domStyle.set(this._findOptimalOrderItemNode, "display", this.get("showOptimalRouteOption") && this.stops.length >= 4? "block" : "none");
            }
            // if more than 2 stops
            if (this.stops.length >= this.get("minStops")) {
                domClass.add(this._widgetContainer, this._css.stopsOptionsOptionsEnabledClass);
            } else {
                domClass.remove(this._widgetContainer, this._css.stopsOptionsOptionsEnabledClass);
                if (this._optionsMenuNode) {
                    var display = domStyle.get(this._optionsMenuNode, "display");
                    if (display === "block") {
                        this._toggleOptionsMenu();
                    }
                }
                this._configureRouteOptions();
            }
        },
        _stopsRemovable: function() {
            // if more than 2 stops
            if (this.get("geocoders").length > this.get("minStops")) {
                domClass.add(this._widgetContainer, this._css.stopsRemovableClass);
            } else {
                domClass.remove(this._widgetContainer, this._css.stopsRemovableClass);
            }
        },
        _checkMaxStops: function() {
            // if less than max destinations
            if (this.stops.length < this.get("maxStops")) {
                this._showAddDestination();
                this.set("maxStopsReached", false);
            } else {
                this._hideAddDestination();
                this.set("maxStopsReached", true);
            }
        },
        _updateThemeWatch: function() {
            var oldVal = arguments[1];
            var newVal = arguments[2];
            domClass.remove(this.domNode, oldVal);
            domClass.add(this.domNode, newVal);
        },
        _toggleOptionsMenu: function() {
            if (this._optionsMenuNode) {
                var display = domStyle.get(this._optionsMenuNode, "display");
                if (display === "block") {
                    domStyle.set(this._optionsMenuNode, "display", "none");
                    this._optionsButtonNode.innerHTML = i18n.widgets.directions.showOptions;
                } else {
                    domStyle.set(this._optionsMenuNode, "display", "block");
                    this._optionsButtonNode.innerHTML = i18n.widgets.directions.hideOptions;
                }
            }
        },
        _hideAddDestination: function() {
            domClass.remove(this._widgetContainer, this._css.addStopsClass);
        },
        _showAddDestination: function() {
            domClass.add(this._widgetContainer, this._css.addStopsClass);
        },
        _getAbsoluteUrl: function() {
            var url = require.toUrl(".");
            if (/^https?\:/i.test(url)) {
                // Example: "http://servicesbeta.esri.com/jsapi/arcgis/3.4/js/esri/widgets"
                // http://help.arcgis.com/en/webapi/javascript/arcgis/samples/map_currentextent/index.html
                // Already an absolute link. Nothing to do here.
                return url;
            } else if (/^\/\//i.test(url)) {
                // Example: "//dczpx2rvsugxm.cloudfront.net/cdn/2419/js/esri/widgets"
                // https://devext.arcgis.com/home/webmap/viewer.html?useExisting=1
                return window.location.protocol + url;
            } else if (/^\//i.test(url)) {
                // Example: "/jsapi/src/js/esri/widgets"
                // http://pponnusamy.esri.com:9090/jsapi/mapapps/testing/v34/amd/map-legacy.html
                return window.location.protocol + "//" + window.location.host + url;
            }
        },
        _getManeuverImage: function(maneuver) {
            if (maneuver) {
                var imagePath = this._getAbsoluteUrl() + "/images/Directions/maneuvers/";
                var imageType = ".png";
                if (maneuver === "esriDMTStop" || maneuver === "esriDMTDepart") {
                    return "";
                }
                return imagePath + maneuver + imageType;
            }
            return "";
        },
        _loadPrintDirections: function(hasImage) {
            var template = this.get("printTemplate");
            if(!template){
                // stylesheet urls
                var screenCSS = this._getAbsoluteUrl() + "/css/Directions.css";
                var printCSS = this._getAbsoluteUrl() + "/css/DirectionsPrint.css";
                var printLogo = this._getAbsoluteUrl() + "/images/Directions/print-logo.png";
                var dir;
                // left to right support
                if (domGeom.isBodyLtr()) {
                    dir = "ltr";
                } else {
                    dir = "rtl";
                }
                // template view
                template = "";
                template += "<!DOCTYPE HTML>";
                template += "<html lang=\"en\" class=\"" + this.get("theme") + "\" dir=\"" + dir + "\">";
                template += "<head>";
                template += "<meta charset=\"utf-8\">";
                template += "<meta http-equiv=\"X-UA-Compatible\" content=\"IE=Edge,chrome=1\">";
                template += "<title>" + this.get("directions").routeName + "</title>";
                template += "<link rel=\"stylesheet\" media=\"screen\" type=\"text/css\" href=\"" + screenCSS + "\" />";
                template += "<link rel=\"stylesheet\" media=\"print\" type=\"text/css\" href=\"" + printCSS + "\" />";
                template += "</head>";
                template += "<body class=\"" + this._css.esriPrintPageClass + "\">";
                template += "<div class=\"" + this._css.esriPrintBarClass + "\">";
                template += "<div class=\"" + this._css.esriCloseButtonClass + "\" title=\"" + i18n.common.close + "\" onclick=\"window.close();\">" + i18n.common.close + "</div>";
                template += "<div id=\"printButton\" class=\"" + this._css.esriPrintButtonClass + "\" title=\"" + i18n.widgets.directions.print + "\" onclick=\"window.print();\">" + i18n.widgets.directions.print + "</div>";
                template += "</div>";
                template += "<div class=\"" + this._css.esriPrintMainClass + "\">";
                template += "<div class=\"" + this._css.esriPrintHeaderClass + "\">";
                template += "<img class=\"" + this._css.esriPrintLogoClass + "\" src=\"" + printLogo + "\" />";
                template += "<div class=\"" + this._css.esriPrintNameClass + "\">" + this.get("directions").routeName + "</div>";
                template += "<div class=\"" + this._css.esriPrintLengthClass + "\">" + this._formatDistance(this.get("directions").totalLength, i18n.widgets.directions.units[this._getUnits(this.get("directionsLengthUnits"))].name) + ". " + this._formatTime(this.get("directions").totalTime) + "</div>";
                if (hasImage) {
                    template += "<div id=\"divMap\" class=\"esriPrintMap esriPrintWait\"></div>";
                    template += "<hr class=\"esriNoPrint\"/>";
                }
                template += "<div id=\"print_helper\"></div>";
                template += "<textarea onkeyup=\"document.getElementById('print_helper').innerHTML=this.value;\" id=\"print_area\" class=\"" + this._css.esriPrintNotesClass + "\" placeholder=\"" + i18n.widgets.directions.printNotes + "\"></textarea>";
                template += "<div class=\"" + this._css.clearClass + "\"></div>";
                template += "</div>";
                template += "<div class=\"" + this._css.esriPrintDirectionsClass + "\">";
                template += "<table>";
                template += "<tbody>";
                var stopCount = 0;
                // each direction step
                array.forEach(this.get("directions").features, lang.hitch(this, function(feature, i) {
                    var dStrings = this.get("directions").strings[i],
                        j;
                    if (dStrings) {
                        var formatted = feature.attributes.text;
                        for (j = 0; j < dStrings.length; j++) {
                            formatted = this._boldText(formatted, dStrings[j].string);
                        }
                        feature.attributes.formattedText = formatted;
                    } else {
                        feature.attributes.formattedText = feature.attributes.text;
                    }
                    var rowClass = "";
                    if (this.get("directions").features.length === (i + 1)) {
                        rowClass = this._css.routeLastClass;
                    }
                    if (feature.attributes) {
                        feature.attributes.step = (i + 1);
                    }
                    template += "<tr class=\"" + rowClass + "\">";
                    template += "<td class=\"" + this._css.routeIconColumnClass + "\">";
                    var maneuverImage = this._getManeuverImage(feature.attributes.maneuverType);
                    var letter;
                    if (i === 0) {
                        letter = this._getLetter(stopCount);
                        stopCount++;
                    } else if (feature.attributes.maneuverType === "esriDMTStop") {
                        letter = this._getLetter(stopCount);
                    } else if (feature.attributes.maneuverType === "esriDMTDepart") {
                        letter = this._getLetter(stopCount);
                        stopCount++;
                    }
                    if (maneuverImage) {
                        template += "<img src=\"" + maneuverImage + "\" />";
                    } else if (letter) {
                        template += "<div class=\"" + this._css.esriPrintStopLabelClass + "\">";
                        template += letter;
                        template += "</div>";
                    }
                    template += "</td>";
                    template += "<td class=\"" + this._css.routeTextColumnClass + "\">";
                    template += "<div><strong>" + number.format(feature.attributes.step) + ".</strong> " + feature.attributes.formattedText + "</div>";
                    template += "</td>";
                    template += "<td class=\"" + this._css.routeTextColumnClass + "\">";
                    template += "<div class=\"" + this._css.routeLengthClass + "\">" + this._formatDistance(feature.attributes.length, i18n.widgets.directions.units[this._getUnits(this.get("directionsLengthUnits"))].abbr) + "</div>";
                    template += "</td>";
                    template += "</tr>";
                }));
                template += "</tbody>";
                template += "</table>";
                template += "</div>";
                template += "<div class=\"" + this._css.esriPrintFooterClass + "\">";
                template += "<p>" + i18n.widgets.directions.printDisclaimer + "</p>";
                template += "</div>";
                template += "</div>";
                template += "</body>";
                template += "</html>";
            }
            this._printWindow.document.open("text/html", "replace");
            this._printWindow.document.write(template);
            this._printWindow.document.close();
        },
        _printDirections: function() {
            var w = screen.width / 2;
            var h = screen.height / 1.5;
            var left = (screen.width / 2) - (w / 2);
            var top = (screen.height / 2) - (h / 2);
            var windowOptions = "toolbar=no, location=no, directories=no, status=yes, menubar=no, scrollbars=yes, resizable=yes, width=" + w + ", height=" + h + ", top=" + top + ", left=" + left;
            if (this.get("printPage")) {
                window.directions = this.get("directions");
                window.open(this.get("printPage"), "directions_widget_print", windowOptions, true);
            } else {
                this._printWindow = window.open("", "directions_widget_print", windowOptions, true);
                this._loadPrintDirections(!!this._printService);
                if (this._printService) {

                  var printWindowDoc = this._printWindow.document;
                  var executePrintService = this._printService.execute.bind(this._printService, this._printParams);

                  //generating overview map
                  this.zoomToFullRoute()
                    .then(executePrintService)
                    .then(function(res) {
                            var container = dom.byId("divMap", printWindowDoc);
                            if (container) {
                              domClass.remove(container, "esriPrintWait");
                              domClass.add(container, "esriPageBreak");
                              domConstruct.create("img", {
                                'src': res.url,
                                'class': "esriPrintMapImg"
                              }, container);
                            }
                          },
                          function (err) {
                            var container = dom.byId("divMap", printWindowDoc);
                            if (container) {
                              domClass.remove(container, "esriPrintWait");
                            }

                            console.log('Error while calling print service:\n ' + err);
                          });
                }
            }
        }
    });
    
    return Widget;
});
