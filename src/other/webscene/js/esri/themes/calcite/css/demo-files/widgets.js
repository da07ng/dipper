require([
    "dojo/_base/array",
    "dojo/dom",
    "dojo/dom-class",
    "dojo/on",
    "dojo/parser",

    "esri/portal/Portal",
    "esri/portal/utils",
    "esri/config",
    "esri/widgets/BasemapGallery",
    "esri/widgets/BasemapToggle",
    "esri/widgets/Bookmarks",
    "esri/widgets/Directions",
    "esri/widgets/editing/AttachmentEditor",
    "esri/widgets/editing/Editor",
    "esri/widgets/editing/TemplatePicker",
    "esri/widgets/Gauge",
    "esri/widgets/Geocoder",
    "esri/widgets/geoenrichment/Infographic",
    "esri/widgets/HomeButton",
    "esri/widgets/LayerSwipe",
    "esri/widgets/Legend",
    "esri/widgets/LocateButton",
    "esri/widgets/Measurement",
    "esri/widgets/OverviewMap",
    "esri/widgets/Print",
    "esri/widgets/Scalebar",
    "esri/widgets/Search",
    "esri/widgets/TimeSlider",
    "esri/widgets/VisibleScaleRangeSlider",
    "esri/geometry/Point",
    "esri/Graphic",
    "esri/layers/ArcGISDynamicLayer",
    "esri/layers/FeatureLayer",
    "esri/Map",
    "esri/geometry/SpatialReference",
    "esri/symbols/SimpleMarkerSymbol",
    "esri/tasks/geoenrichment/GeometryStudyArea",
    "esri/tasks/Locator",
    "esri/tasks/support/PrintTemplate",
    "esri/TimeExtent",
    "esri/core/urlUtils",

    "dojo/domReady!",

    "esri/widgets/HorizontalSlider",
    "esri/widgets/ColorPicker"
  ],
  function (
    arrayUtils, dom, domClass, on, parser,
    arcgisPortal, arcgisUtils, esriConfig, BasemapGallery, BasemapToggle, Bookmarks,
    Directions, AttachmentEditor, Editor, TemplatePicker, Gauge,
    Geocoder, Infographic, HomeButton, LayerSwipe, Legend, LocateButton, Measurement,
    OverviewMap, Print, Scalebar, Search, TimeSlider, VisibleScaleRangeSlider, Point,
    Graphic, ArcGISDynamicMapServiceLayer, FeatureLayer, Map,
    SpatialReference, SimpleMarkerSymbol, GeometryStudyArea, Locator, PrintTemplate,
    TimeExtent, urlUtils
  ) {

    parser.parse();

    //set the theme
    var theme = "calcite";
    var urlObject = urlUtils.urlToObject(document.location.href);
    if (urlObject.query && urlObject.query.theme) {
      theme = urlObject.query.theme.toLowerCase();
    }

    //load the specified theme
    var themeDir = null;
    if (theme === "calcite") {
      themeDir = "css/calcite.css";
    }
    else if (theme === "calcite_dark") {
      themeDir = "css/calcite_dark.css";
    }
    else {
      themeDir = document.location.protocol +
                 "//js.arcgis.com/3.11/dijit/themes/" +
                 theme +
                 "/" +
                 theme +
                 ".css";
    }

    var style = document.createElement("link")
    style.rel = "stylesheet";
    style.href = themeDir;
    document.getElementsByTagName("head")[0].appendChild(style);
    //add class to body
    domClass.add(document.body, theme);
    console.log(theme);

    urlUtils.addProxyRule({
      urlPrefix: "geoenrich.arcgis.com",
      proxyUrl: "http://kelly-mac.esri.com/~kell3008/resource_proxy/proxy.php"
    });
    urlUtils.addProxyRule({
      urlPrefix: "traffic.arcgis.com",
      proxyUrl: "http://kelly-mac.esri.com/~kell3008/resource_proxy/proxy.php"
    });

    urlUtils.addProxyRule({
      urlPrefix: "route.arcgis.com",
      proxyUrl: "http://kelly-mac.esri.com/~kell3008/resource_proxy/proxy.php"
    });
    esriConfig.request.proxyUrl = "http://kelly-mac.esri.com/~kell3008/resource_proxy/proxy.php";
    var map = new Map("mapDiv", {
      center: [-56.049, 38.485],
      zoom: 3,
      basemap: "streets"
    });

    var fl = new FeatureLayer("http://servicesbeta.esri.com/ArcGIS/rest/services/Hurricanes/Hurricanes/MapServer/0",
      {
        "id": "hurricanes",
        "mode": FeatureLayer.MODE_ONDEMAND,
        "outFields": ["OBJECTID", "WINDSPEED", "DAY"]
      });

    var fl2 = new FeatureLayer("http://servicesbeta.esri.com/ArcGIS/rest/services/SanFrancisco/SFStreetTreesRendered/MapServer/0",
      {
        "mode": FeatureLayer.MODE_SNAPSHOT,
        outFields: ["*"]
      });

    map.on("layers-add-result", function () {

      var legend = new Legend({
        map: map
      }, "legendDiv");
      legend.startup();

      var templatePicker = new TemplatePicker({
        map: map,
        featureLayers: [fl]
      }, "templatePickerDiv");
      templatePicker.startup();

      var gaugeParams = {
        "caption": "Hurricane windspeed.",
        "color": "#c0c",
        "dataField": "WINDSPEED",
        "dataFormat": "value",
        "dataLabelField": "EVENTID",
        "layer": fl,
        "maxDataValue": 120,
        "noFeatureLabel": "No name",
        "title": "Atlantic Hurricanes(2000)",
        "unitLabel": "MPH"
      };
      var gauge = new Gauge(gaugeParams, "gaugeDiv");
      gauge.startup();
      gauge.set("value", 60);

    });

    map.addLayers([fl, fl2]);
    map.on("load", function () {

    });

    var map2 = new Map("smallSliderDiv", {
      center: [-56.049, 38.485],
      zoom: 3,
      basemap: "streets",
      sliderStyle: "large"
    });

    function initSlider () {
      var timeSlider = new TimeSlider({
        style: "width: 100%;"
      }, dom.byId("timeSliderDiv"));
      map2.setTimeSlider(timeSlider);

      var timeExtent = new TimeExtent();
      timeExtent.startTime = new Date("1/1/1921 UTC");
      timeExtent.endTime = new Date("12/31/2009 UTC");
      timeSlider.setThumbCount(2);
      timeSlider.createTimeStopsByTimeInterval(timeExtent,
        2,
        "esriTimeUnitsYears");
      timeSlider.setThumbIndexes([0, 1]);
      timeSlider.setThumbMovingRate(2000);
      timeSlider.startup();

      //add labels for every other time stop
      var labels = arrayUtils.map(timeSlider.timeStops, function (timeStop, i) {
        if (i % 2 === 0) {
          return timeStop.getUTCFullYear();
        }
        else {
          return "";
        }
      });

      timeSlider.setLabels(labels);

      timeSlider.on("time-extent-change", function (evt) {
        var startValString = evt.startTime.getUTCFullYear();
        var endValString = evt.endTime.getUTCFullYear();
        dom.byId("daterange").innerHTML = "<i>" +
                                          startValString +
                                          " and " +
                                          endValString +
                                          "<\/i>";
      });
    }

    var opLayer = new ArcGISDynamicMapServiceLayer("http://sampleserver3.arcgisonline.com/ArcGIS/rest/services/Petroleum/KSWells/MapServer");
    opLayer.setVisibleLayers([0]);

    //apply a definition expression so only some features are shown
    var layerDefinitions = [];
    layerDefinitions[0] = "FIELD_KID=1000148164";
    opLayer.setLayerDefinitions(layerDefinitions);

    //add the gas fields layer to the map
    map2.addLayers([opLayer]);

    map2.on("layers-add-result", initSlider);

    //Setup the Attachment Editor
    var map3 = new Map("attachmentMapDiv", {
      center: [-56.049, 38.485],
      zoom: 3,
      basemap: "streets"
    });
    map3.on("load", function () {

      var featureLayer = new FeatureLayer("http://sampleserver3.arcgisonline.com/ArcGIS/rest/services/SanFrancisco/311Incidents/FeatureServer/0",
        {
          mode: FeatureLayer.MODE_ONDEMAND
        });

      map3.infoWindow.setContent("<div id='content' style='width:100%'></div>");
      map3.infoWindow.resize(350, 200);
      var attachmentEditor = new AttachmentEditor({}, dom.byId("content"));
      attachmentEditor.startup();

      featureLayer.on("click", function (evt) {
        map3.infoWindow.setTitle("Attributes");
        attachmentEditor.showAttachments(evt.graphic, featureLayer);
        map3.infoWindow.show(evt.screenPoint,
          map3.getInfoWindowAnchor(evt.screenPoint));
      });

      map3.addLayer(featureLayer);

      //Setup the Editor widget
      var settings = {
        map: map3,
        toolbarVisible: true,
        layerInfos: [{ featureLayer: featureLayer }]
      }

      var editor = new Editor({
        settings: settings
      }, "editorDiv");

      editor.startup();

    });

    //Basemap Gallery widget
    var basemapGallery = new BasemapGallery({
      showArcGISBasemaps: true,
      map: map
    }, "basemapGalleryDiv");
    basemapGallery.startup();

    var basemapToggle = new BasemapToggle({
      map: map,
      visible: true,
      basemap: "hybrid"
    }, basemapToggleDiv);
    basemapToggle.startup();

    var bookmarks = new Bookmarks({
      map: map,
      bookmarks: [
        {
          "extent": {
            "spatialReference": {
              "wkid": 102100
            },
            "xmax": -10983636.8866296,
            "xmin": -14411372.5423473,
            "ymax": 5109691.46502651,
            "ymin": 2707598.58754309
          },
          "name": "Sonara"
        }, {
          "extent": {
            "spatialReference": {
              "wkid": 102100
            },
            "xmax": -11983636.8866296,
            "xmin": -14411372.5423473,
            "ymax": 5209691.46502651,
            "ymin": 2707598.58754309
          },
          "name": "Another Bookmark"
        }, {
          "extent": {
            "spatialReference": {
              "wkid": 102100
            },
            "xmax": -13983636.8866296,
            "xmin": -14411372.5423473,
            "ymax": 5109691.46502651,
            "ymin": 2507598.58754309
          },
          "name": "One more bookmark"
        }
      ]
    }, "bookmarkDiv");

    var directions = new Directions({
      showClearButton: true,
      map: map
    }, "directionsDiv");
    directions.startup();

    //Measurement widget
    var measure = new Measurement({
      map: map
    }, "measureDiv");
    measure.startup();

    //Geocoder widget

    var geocoder = new Geocoder({
      map: map,
      arcgisGeocoder: true,
      autoComplete: true,
      geocoders: [
        {
          url: "http://servicesbeta.esri.com/ArcGIS/rest/services/LocateValveByAssetID/GeocodeServer",
          name: "LocateValveByAssetId",
          placeholder: "enter asset id"
        }
      ]
    }, "geocoderDiv");
    geocoder.startup();

    var mapgeocoder2 = new Map("mapgeocoder2", {
      center: [-56.049, 38.485],
      zoom: 3,
      basemap: "streets"
    });
    var geocoder2 = new Geocoder({
      map: mapgeocoder2,
      arcgisGeocoder: true,
      autoComplete: true,
      geocoders: [
        {
          url: "http://servicesbeta.esri.com/ArcGIS/rest/services/LocateValveByAssetID/GeocodeServer",
          name: "LocateValveByAssetId",
          placeholder: "enter asset id"
        }
      ]
    }, "geocoderDiv2");
    geocoder2.startup();

    var layouts = [
      {
        name: "Letter ANSI A Landscape",
        label: "Landscape (PDF)",
        format: "pdf",
        options: {
          legendLayers: [], // empty array means no legend
          scalebarUnit: "Miles",
          titleText: "Landscape PDF"
        }
      }, {
        name: "Letter ANSI A Portrait",
        label: "Portrait (Image)",
        format: "jpg",
        options: {
          legendLayers: [],
          scaleBarUnit: "Miles",
          titleText: "Portrait JPG"
        }
      }
    ];

    var templates = arrayUtils.map(layouts, function (lo) {
      var t = new PrintTemplate();
      t.layout = lo.name;
      t.label = lo.label;
      t.format = lo.format;
      t.layoutOptions = lo.options;
      return t;
    });

    var printer = new Print({
      map: map,
      templates: templates,
      url: "http://servicesbeta4.esri.com/arcgis/rest/services/Utilities/ExportWebMap/GPServer/Export Web Map Task"
    }, "printDiv");
    printer.startup();

    var scalebar = new Scalebar({
      map: map,
      scalebarUnit: "english"
    }, dom.byId("scalebarDiv"));

    var home = new HomeButton({
      map: map
    }, "homeDiv");
    home.startup();

    var locateButton = new LocateButton({
      map: map
    }, "locateDiv");
    locateButton.startup();

    //Identity Manager

    on(dom.byId("signIn"), "click", function () {
      var portal = new arcgisPortal.Portal("http://www.arcgis.com");
      //portal.signOut();
      portal.signIn();

    });

    //Geoenrichment
    var infomap = new esri.Map("infographicMap", {
      basemap: "topo",
      center: [-117.17, 34.035],
      zoom: 16
    });

    on(infomap, "load", function () {

      var info = new Infographic({
        type: "AgePyramid",
        variables: ["Age.*"],
        returnGeometry: true
      }, "infographicDiv");

      var enrichPoint = new Point(-117.17, 34.035);
      infomap.graphics.add(new Graphic(enrichPoint,
        new SimpleMarkerSymbol().setColor("#ccc")));

      info.set("studyArea", new GeometryStudyArea({ geometry: enrichPoint }));
      info.startup();

    });
    //Popup

    arcgisUtils.createMap("59bdf3f131854da7b58c76886826bb94",
      "popupDiv").then(function (response) {
        var map = response.map;
        map.reposition();
        map.resize();
      });

    //Swipe - scope
    arcgisUtils.createMap("62702544d70648e593bc05d65180fd64",
      "swipeMap").then(function (response) {
        var id;
        var map = response.map;
        var title = "2009 Obesity Rates";
        //loop through all the operational layers in the web map
        //to find the one with the specified title;
        var layers = response.itemInfo.itemData.operationalLayers;
        arrayUtils.some(layers, function (layer) {
          if (layer.title === title) {
            id = layer.id;
            if (layer.featureCollection &&
                layer.featureCollection.layers.length) {
              id = layer.featureCollection.layers[0].id;
            }
            return true;
          }
          else {
            return false;
          }
        });
        //get the layer from the map using the id and set it as the swipe layer.
        if (id) {
          var swipeLayer = map.getLayer(id);
          var swipeWidget = new LayerSwipe({
            type: "scope",  //Try switching to "scope" or "horizontal"
            map: map,
            layers: [swipeLayer]
          }, "swipeDiv");
          swipeWidget.startup();
        }
      });

    //Swipe - horizontal
    arcgisUtils.createMap("62702544d70648e593bc05d65180fd64",
      "swipeMap2").then(function (response) {
        var id;
        var map = response.map;
        var title = "2009 Obesity Rates";
        //loop through all the operational layers in the web map
        //to find the one with the specified title;
        var layers = response.itemInfo.itemData.operationalLayers;
        arrayUtils.some(layers, function (layer) {
          if (layer.title === title) {
            id = layer.id;
            if (layer.featureCollection &&
                layer.featureCollection.layers.length) {
              id = layer.featureCollection.layers[0].id;
            }
            return true;
          }
          else {
            return false;
          }
        });
        //get the layer from the map using the id and set it as the swipe layer.
        if (id) {
          var swipeLayer = map.getLayer(id);
          var swipeWidget = new LayerSwipe({
            type: "vertical",  //Try switching to "scope" or "horizontal"
            map: map,
            layers: [swipeLayer]
          }, "swipeDiv2");
          swipeWidget.startup();
        }
      });

    // ============================================================================================
    // Geocode Search (from http://webninja.esri.com/demos/search-widget/?multiple=true)
    // ============================================================================================

    var mapgeocoder3 = new Map("mapgeocoder3", {
      basemap: "gray",
      center: [-120.435, 46.159], // lon, lat
      zoom: 7
    });

    var layer = new FeatureLayer("http://services.arcgis.com/DO4gTjwJVIJ7O9Ca/arcgis/rest/services/GeoForm_Survey_v11_live/FeatureServer/0",
      {
        outFields: ["*"]
      });

    map.addLayer(layer);

    var s = new Search({
      enableButtonMode: true,
      map: mapgeocoder3
    }, "geocoderDiv3");

    var multiple;
    var myObject = urlUtils.urlToObject(location.href);
    var query = myObject.query;
    if (query && query.multiple) {
      multiple = true;
    }
    multiple = true;
    if (multiple) {
      var sources = s.get("sources");
      sources.push({
        locator: new Locator("//geocodedev.arcgis.com/arcgis/rest/services/World/GeocodeServer"),
        singleLineFieldName: "SingleLine",
        name: "Esri Dev Locator",
        localSearchOptions: {
          minScale: 300000,
          distance: 50000
        },
        placeholder: "Search GeocodeDev",
        maxResults: 3,
        maxSuggestions: 6,
        suggest: true,
        minCharacters: 0
      });
      sources.push({
        featureLayer: new FeatureLayer("http://services.arcgis.com/DO4gTjwJVIJ7O9Ca/arcgis/rest/services/GeoForm_Survey_v11_live/FeatureServer/0",
          {
            outFields: ["*"]
          }),
        searchFields: ["Email", "URL"],
        displayField: "Email",
        exactMatch: false,
        outFields: ["*"],
        name: "A FeatureLayer",
        placeholder: "example: esri",
        maxResults: 6,
        maxSuggestions: 6,
        suggest: true,
        minCharacters: 0
      });
      s.set("sources", sources);
    }

    s.startup();

    on(s, 'search-results', function (e) {
      console.log('search-results', e);
    });

    /*
     s.watch('value', function (a, b, c) {
     console.log('value', c);
     });
     */

    on(s, 'suggest-results', function (e) {
      console.log('suggest-results', e);
    });

    on(s, 'select-result', function (e) {
      console.log('select-result', e);
    });

    // point
    var geo = new Point(-118.15, 33.80, new SpatialReference({
      wkid: 4326
    }));

    // lat/lon
    //geo = [-118.15, 33.80];

    // extent
    //geo = {geometry: new Extent(-122.68,45.53,-122.45,45.60, new SpatialReference({ wkid:4326 }))};

    // point
    //geo = {geometry: new Point(-118.15, 33.80, new SpatialReference({ wkid: 4326 }))};

    // polygon
    var polygonJson = {
      "rings": [
        [
          [
            -122.63,
            45.52
          ],
          [
            -122.57,
            45.53
          ],
          [
            -122.52,
            45.50
          ],
          [
            -122.49,
            45.48
          ],
          [
            -122.64,
            45.49
          ],
          [
            -122.63,
            45.52
          ],
          [
            -122.63,
            45.52
          ]
        ]
      ],
      "spatialReference": {
        "wkid": 4326
      }
    };
    //geo = {geometry: new Polygon(polygonJson)};

    // polyline
    var polylineJson = {
      "paths": [
        [
          [-122.68, 45.53], [-122.58, 45.55],
          [-122.57, 45.58], [-122.53, 45.6]
        ]
      ],
      "spatialReference": {
        "wkid": 4326
      }
    };
    //geo = {geometry: new Polyline(polylineJson)};

    // multipoint
    var mpJson = {
      "points": [[-122.63, 45.51], [-122.56, 45.51], [-122.56, 45.55]],
      "spatialReference": ({
        " wkid": 4326
      })
    };

    initVisibleScaleRangeSlider();

    function initVisibleScaleRangeSlider () {
      var map = new Map("visibleScaleRangeSliderMapDiv", {
        basemap: "gray",
        center: [-106.4649, 31.7713],
        zoom: 9
      });

      var featureLayer = new FeatureLayer("http://sampleserver6.arcgisonline.com/arcgis/rest/services/Wildfire/FeatureServer/2");

      map.addLayer(featureLayer);

      var vsrs = new VisibleScaleRangeSlider({
        map: map,
        layer: featureLayer,
        region: "es-MX"
      }, "visibleScaleRangeSliderDiv");

      vsrs.startup();
    }

    initOverviewMap();

    function initOverviewMap () {
      var map = new Map("overviewMapDiv", {
        basemap: "gray",
        center: [-106.4649, 31.7713],
        zoom: 9
      });

      var om = new OverviewMap({
        map: map,
        height: 200,
        width: 200
      }, "overviewDiv");

      om.startup();
    }

  });
