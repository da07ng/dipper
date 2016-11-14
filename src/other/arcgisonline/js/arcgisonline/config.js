(function(){

  /***************************************
   * Modify this path based on your setup
   ***************************************/
  var context = window.location.href.substring(window.location.href.indexOf(window.location.host) + window.location.host.length + 1, window.location.href.indexOf("/dipper"));
  if (context != "/") {
    context = "/" + context + "/";
  }
  var DEPLOY_ROOT = location.protocol + '//' + location.host + context + 'dipper/';

  // var PORTAL_URL = location.protocol + '//' + location.host + context;
  var PORTAL_URL = 'http://geoplat.lonlat.org/arcgis/';

  window.esriGeowConfig = {

    /***************************************
     * Basics
     ***************************************/
    baseUrl: DEPLOY_ROOT,
    webmapViewerPath: 'webmap/viewer.html',
    dojoBaseUrl: DEPLOY_ROOT + '/js/dojo/',
    proxyUrl: '',
    proxyServer: PORTAL_URL + 'sharing/proxy',
    restBaseUrl: PORTAL_URL + 'sharing/rest/',
    reflectorUrl: PORTAL_URL + 'sharing/tools/reflect',
    bridgeUrl: PORTAL_URL + '/sharing/tools/bridge',
    marketplaceUrl: location.protocol + '//' + 'marketplacedevext.arcgis.com',
    openDataUrl: location.protocol + '//' + 'opendatadev.arcgis.com/sites',
    kmlService: PORTAL_URL + 'sharing/kml',
    geoRSSService: PORTAL_URL + 'sharing/rss',
    geoIPService: PORTAL_URL + '/sharing/geoip.jsp',
    print: PORTAL_URL + 'sharing/tools/print',
    legend: PORTAL_URL + 'sharing/tools/legend',
    isRightToLeft: false,
    cdnServerUrl: ".",

    // services with these domains will be switched to https if the map viewer is running under https and also count as federated servers with AGOL
    httpsDomains: ["arcgis.com","arcgisonline.com","esrikr.com","premiumservices.blackbridge.com","esripremium.accuweather.com","gbm.digitalglobe.com","firstlook.digitalglobe.com","msi.digitalglobe.com"],
    // these AGOL services can be used for Offline
    agolServicesWithExportTilesAllowed: ["NatGeo_World_Map","Ocean_Basemap","USA_Topo_Maps","World_Imagery","World_Street_Map","World_Terrain_Base","World_Topo_Map","Canvas/World_Light_Gray_Base","Canvas/World_Light_Gray_Reference","Ocean/World_Ocean_Base","Ocean/World_Ocean_Reference","Reference/World_Boundaries_and_Places","Reference/World_Reference_Overlay","Reference/World_Transportation"],
    // whitelist of domains an embedded viewer accepts postMessages from, other than its own; e.g. ["mydomain.com","mydomain2.com"]
    embeddedViewerWhitelist: null,

    /***************************************
     * ArcGIS portal settings
     ***************************************/
    portalName: "Portal for ArcGIS", // used as the initial default name during page load
    portalHeaderImage: null,
    explorerName: null,
    tokenExpiration: 120,
    longTokenExpiration: 20160,
    esriGlobalAccount: null,
    useDefaultIdentityStore: true,
    signin: 'signin.html',
    signup: 'signup.html',
    createAccount: 'createaccount.html',
    showSignUp: true,
    webSearchEnabled: true,
    showSocialMediaLinks: false,
    addContentSecurityText: null,
    showCoachMarksTours: true,
    classificationBanner: false,
    bingMapsKey: null,
    contentPageHiddenTypes: ["Featured Items",null],
    showOrganizationInviteUsers: true,
    showForgotUsername: false,
    isMultiTenant: false,
    publishTilesFromFeaturesEnabled: true,
    federatedServerConfigEnabled: true,
    hostedServerConfigEnabled: true,
    enterpriseLoginConfigEnabled: true,
    openDataConfigEnabled: false,
    manageLicensesEnabled: true,
    findFeaturesWebMapEnabled: true,
    webAppBuilderEnabled: true,
    webAppBuilderDownload: true,
    sceneViewerEnabled: true,
    restrictOrganizationPageToAdmin: false,
    geocodeAutoComplete: true, // enable suggest [true|false]
    showCalculate: true, // show Calculate Field option for Feature layers in Table
    multiFactorEnabled: false,
    metadataEnabled: true, // hide/show any metadata related UI in the app
    passwordPolicyEnabled: true, // hide/show password policy UI
    portalAGOConfigEnabled: true, // on-premise hybrid Portal feature, should be false for AGO and disconnected Portal environments
    creditBudgetingEnabled: false, // hide/show credit budgeting related UI in the app
    systemUsers: ["esri_nav","system_publisher"], // on-premise Portal list of system users to filter out of user searches

    //*** parameters for new account creation via ECAS REST API
    //*** to turn on: comment out account_registration and uncomment accountApi, accountApiKey, and accountAppKey
    accountApi: "https://ecasapi.esri.com/1.0/accounts",
    accountApiKey: "",
    accountAppKey: "",

    /***************************************
     * Links
     ***************************************/
    bitlyUrl: null,
    bitlyUrlSSL: null,
    gcsBasemapService: location.protocol + "//services.arcgisonline.com/ArcGIS/rest/services/ESRI_Imagery_World_2D/MapServer",
    extentService: location.protocol + "//server.arcgisonline.com/ArcGIS/rest/services/ESRI_StreetMap_World_2D/MapServer",
    account_registration: "https://webaccounts.esri.com/cas/index.cfm?fuseaction=Registration.ShowForm&ReturnURL=https%3A%2F%2Fwww.arcgis.com%2Fhome%2Fsignup.html&FailURL=http%3A%2F%2Fwww.arcgis.com&appId=RC10SB959G",
    account_edit: "https://webaccounts.esri.com/CAS/index.cfm?fuseaction=Profile.showForm",
    forgotPwd: "https://webaccounts.esri.com/cas/index.cfm?fuseaction=Login.ForgotPwd.ShowForm&appId=RC10SB959G&FailURL=http%3A%2F%2Fwww.arcgis.com&ReturnURL=https%3A%2F%2Fwww.arcgis.com%2Fhome%2Fsignin.html",
    signInHelp: null, // set this URL to override the "Need help signing in?" link on the sign in page
    forums: "http://forums.arcgis.com/forums/30-ArcGIS-Online",
    blog: "http://blogs.esri.com/esri/arcgis/category/arcgis-online/",
    esriCommunityLink: "https://geonet.esri.com",
    myEsriLink: "https://my.esri.com",
    learnArcGIS: "http://learn.arcgis.com",
    footerLinks: [],

    /***************************************
     * Specific groups and owners
     ***************************************/
    //*** Esri user names
    publisherESRI: "(owner:esri OR owner:esri_webapi OR owner:arcgis_explorer OR owner:SLDevTeam OR owner:ArcGISMobileDevTeam OR owner:iOSDevelopmentTeam)",

    /*******************************************************************************
     * The following parameters come from the /sharing/accounts/self resource and
     * are no longer defined in this file:
     *******************************************************************************
     * rotatorPanels
     * homePageFeaturedContentCount
     * homePageFeaturedContent
     * featuredItemsGroupQuery
     * basemapGalleryGroupQuery
     * templatesGroupQuery
     * layerTemplatesGroupQuery
     * symbolSetsGroupQuery
     * colorSetsGroupQuery
     * featuredGroups
     * defaultBasemap
     * defaultExtent
     * help (helpBase)
     * helpBase
     ******************************************************************************/

    /*******************************************************************************
     *******************************************************************************
     * DO NOT MODIFY these following parameters
     *******************************************************************************
     *******************************************************************************/
    userInfo: "",

    googleServiceSearchString: 'inurl:rest inurl:services "Supported Interfaces" -"Folders" -"KMZ" -"GlobeServer" -"NAServer" -"GPServer" -"GeocodeServer" -"GeoDataServer" -"GeometryServer"',

    contentModeCookieName: "contentModePrefs",

    //*** search modes (all content, web content only)
    viewQueries: {
      web: " -type:\"Layer\" -type: \"Map Document\" -type:\"Map Package\" -type:\"Basemap Package\" -type:\"Mobile Basemap Package\" -type:\"Mobile Map Package\" -type:\"ArcPad Package\" -type:\"Project Package\" -type:\"Project Template\" -type:\"Desktop Style\" -type:\"Pro Map\" -type:\"Layout\" -type:\"Explorer Map\" -type:\"Globe Document\" -type:\"Scene Document\" -type:\"Published Map\" -type:\"Map Template\" -type:\"Windows Mobile Package\" -type:\"Layer Package\" -type:\"Explorer Layer\" -type:\"Geoprocessing Package\" -type:\"Desktop Application Template\" -type:\"Code Sample\" -type:\"Geoprocessing Package\" -type:\"Geoprocessing Sample\" -type:\"Locator Package\" -type:\"Workflow Manager Package\" -type:\"Windows Mobile Package\" -type:\"Explorer Add In\" -type:\"Desktop Add In\" -type:\"File Geodatabase\" -type:\"Feature Collection Template\"",
      gis: " -type:\"Code Attachment\" -type:\"Featured Items\" -type:\"Symbol Set\" -type:\"Color Set\" -type:\"Windows Viewer Add In\" -type:\"Windows Viewer Configuration\" ",
      none: " -type:\"Code Attachment\" -type:\"Featured Items\" -type:\"Symbol Set\" -type:\"Color Set\" -type:\"Windows Viewer Add In\" -type:\"Windows Viewer Configuration\" "
    },

    //*** key-value pairs or pre-defined query filters on search results page
    filterQueries: {
      "all": {
        focus: null,
        t: "content",
        f: ""
      },
      "maps": {
        focus: "maps",
        t: "content",
        f: "-type:\"web mapping application\" -type:\"Layer Package\" (type:\"Project Package\" OR type:\"Windows Mobile Package\" OR type:\"Map Package\" OR type:\"Basemap Package\" OR type:\"Mobile Basemap Package\" OR type:\"Mobile Map Package\" OR type:\"Pro Map\" OR type:\"Project Package\" OR type:\"Web Map\" OR type:\"CityEngine Web Scene\" OR type:\"Map Document\" OR type:\"Globe Document\" OR type:\"Scene Document\" OR type:\"Published Map\" OR type:\"Explorer Map\" OR type:\"ArcPad Package\" OR type:\"Map Template\")"
      },
      "scenes": {
        focus: "scenes",
        t: "content",
        f: "-type:\"CityEngine Web Scene\" (type:\"Web Scene\")"
      },
      "layers": {
        focus: "layers",
        t: "content",
        f: "-type:\"web mapping application\" -type:\"Geodata Service\" (type:\"Scene Service\" OR type: \"Feature Collection\" OR type:\"Layer\" OR type: \"Explorer Layer\" OR type: \"Tile Package\" OR type:\"Vector Tile Package\" OR type: \"Scene Package\" OR type:\"Layer Package\" OR type:\"Feature Service\" OR type:\"Stream Service\" OR type:\"Map Service\" OR type:\"Vector Tile Service\" OR type:\"Image Service\" OR type:\"WMS\" OR type:\"KML\" OR typekeywords:\"OGC\" OR typekeywords:\"Geodata Service\" OR type:\"Globe Service\" OR type:\"CSV\" OR type: \"Shapefile\" OR type: \"GeoJson\" OR type: \"Service Definition\" OR type: \"File Geodatabase\" OR type: \"CAD Drawing\")"
      },
      "applications": {
        focus: "applications",
        t: "content",
        f: "(type:\"Code Sample\" OR type:\"Web Mapping Application\" OR type:\"Mobile Application\" OR type:\"Application\" OR type:\"Desktop Application Template\" OR type:\"Desktop Application\" OR type:\"Operation View\" OR type:\"Operations Dashboard Extension\")"
      },
      "tools": {
        focus: "tools",
        t: "content",
        f: "-type:\"KML\" (typekeywords:\"tool\" OR type:\"Raster function template\" OR type:\"Geodata Service\" OR type: \"Workflow Manager Package\" OR type:\"Rule Package\" OR type:\"Operations Dashboard Add In\" OR type:\"Workflow Manager Service\")"
      },
      "files": {
        focus: "files",
        t: "content",
        f: "(typekeywords:\"Document\" OR type:\"Image\" OR type:\"Layout\" OR type:\"Desktop Style\" OR type:\"Project Template\") -type:\"Map Document\" -type:\"Image Service\" -type:\"Explorer Document\" -type:\"Explorer Map\" -type:\"Globe Document\" -type:\"Scene Document\""
      },
      "maps-webmaps": {
        focus: "maps",
        t: "content",
        f: "(type:\"Web Map\" OR type:\"CityEngine Web Scene\") -type:\"Web Mapping Application\" -(owner:\"esri\" tags:\"basemap\")"
      },
      "maps-mapfiles": {
        focus: "maps",
        t: "content",
        f: "(type:\"Map Document\" OR type:\"Windows Mobile Package\" OR type:\"Globe Document\" OR type:\"Scene Document\"  OR type:\"Published Map\" OR type:\"Explorer Map\" OR type:\"ArcPad Package\" OR type:\"Map Package\" OR type:\"Basemap Package\" OR type:\"Mobile Basemap Package\" OR type:\"Mobile Map Package\" OR type:\"Pro Map\" OR type:\"Project Package\" OR type:\"Map Template\")"
      },
      "maps-mapservices": {
        focus: "maps",
        t: "content",
        f: "(type:\"WMS\" OR type:\"KML\" OR type:\"Map Service\" OR type:\"Image Service\" OR type:\"Feature Service\" OR type:\"Globe Service\")"
      },
      "maps-packages": {
        focus: "maps",
        t: "content",
        f: "(type:\"Layer Package\" OR type:\"Map Package\" OR type:\"Basemap Package\" OR type:\"Mobile Basemap Package\" OR type:\"Mobile Map Package\" OR type:\"Project Package\" OR type:\"Tile Package\" OR type:\"Scene Package\")"
      },
      "maps-others": {
        focus: "maps",
        t: "content",
        f: "(type:\"Shapefile\" OR type:\"GeoJson\" OR type:\"CSV\" OR type:\"Explorer Map\" OR type:\"Map Document\" OR type:\"Globe Document\" OR type:\"Scene Document\" OR type:\"Layer\" OR type:\"Explorer Layer\" OR type:\"Explorer Map\" OR type:\"Published Map\" OR type:\"CAD Drawing\") -type:\"Layer Package\""
      },
      "maps-packages-layer": {
        focus: "maps",
        t: "content",
        f: "type:\"Layer Package\""
      },
      "maps-packages-map": {
        focus: "maps",
        t: "content",
        f: "type:\"Map Package\""
      },
      "layers-weblayers": {
        focus: "layers",
        t: "content",
        f: "(type:\"Feature Collection\" OR type:\"Feature Service\" OR type:\"Image Service\" OR type:\"Map Service\" OR type:\"Vector Tile Service\" OR type:\"Scene Service\" OR type:\"Stream Service\" OR type: \"WMS\" OR type: \"KML\") -type:\"Web Map\" -type:\"Web Mapping Application\" -type:\"Shapefile\""
      },
      "layers-weblayers-features": {
        focus: "layers",
        t: "content",
        f: "(type:\"Feature Collection\" OR type:\"Feature Service\" OR type:\"Stream Service\") -typekeywords:\"Table\""
      },
      "layers-weblayers-imagery": {
        focus: "layers",
        t: "content",
        f: "(type:\"Image Service\")"
      },
      "layers-weblayers-tiles": {
        focus: "layers",
        t: "content",
        f: "(type:\"Map Service\" OR type:\"Vector Tile Service\") (typekeywords: \"Hosted\" OR typekeywords:\"Tiled\")"
      },
      "layers-weblayers-mapimage": {
        focus: "layers",
        t: "content",
        f: "(type:\"Map Service\"  OR type: \"WMS\") -typekeywords:\"Tiled\" -typekeywords:\"Hosted\" -type:\"Web Map\" -type:\"Web Mapping Application\" -type:\"Shapefile\""
      },
      "layers-layerfiles": {
        focus: "layers",
        t: "content",
        f: "(type: \"Layer\" OR type: \"Explorer Layer\" OR type: \"Tile Package\" OR type:\"Vector Tile Package\" OR type: \"Scene Package\" OR type:\"Layer Package\" OR type:\"CSV\" OR type: \"Shapefile\" OR type: \"GeoJson\" OR type: \"Service Definition\" OR type: \"File Geodatabase\" OR type: \"CAD Drawing\") -type:\"Explorer Maps\" -type:\"Map Documents\""
      },
      "layers-weblayers-scenelayers": {
        focus: "layers",
        t: "content",
        f: "(type:\"Scene Service\")"
      },
      "layers-weblayers-tables": {
        focus: "layers",
        t: "content",
        f: "(typekeywords:\"Table\")"
      },
      "applications-web": {
        focus: "applications",
        t: "content",
        f: "(type:\"Web Mapping Application\")"
      },

      "applications-web-flex": {
        focus: "applications",
        t: "content",
        f: "(type:\"Web Mapping Application\" typekeywords:\"Flex\")"
      },
      "applications-web-flex-readytouse": {
        focus: "applications",
        t: "content",
        f: "(type:\"Web Mapping Application\" AND typekeywords:\"Flex\" AND typekeywords:\"Ready To Use\")"
      },
      "applications-web-flex-configurable": {
        focus: "applications",
        t: "content",
        f: "(type:\"Web Mapping Application\" AND typekeywords:\"Flex\" AND typekeywords:\"Configurable\")"
      },
      "applications-web-flex-codesample": {
        focus: "applications",
        t: "content",
        f: "(type:\"Web Mapping Application\" AND typekeywords:\"Flex\" AND typekeywords:\"Code Sample\")"
      },

      "applications-web-javascript": {
        focus: "applications",
        t: "content",
        f: "(type:\"Web Mapping Application\" AND typekeywords:\"Javascript\")"
      },
      "applications-web-javascript-readytouse": {
        focus: "applications",
        t: "content",
        f: "(type:\"Web Mapping Application\" AND typekeywords:\"Javascript\" AND typekeywords:\"Ready To Use\")"
      },
      "applications-web-javascript-configurable": {
        focus: "applications",
        t: "content",
        f: "(type:\"Web Mapping Application\" AND typekeywords:\"Javascript\" AND typekeywords:\"Configurable\")"
      },
      "applications-web-javascript-codesample": {
        focus: "applications",
        t: "content",
        f: "(type:\"Web Mapping Application\" AND typekeywords:\"Javascript\" AND typekeywords:\"Code Sample\")"
      },

      "applications-web-silverlight": {
        focus: "applications",
        t: "content",
        f: "(type:\"Web Mapping Application\" AND typekeywords:\"Silverlight\")"
      },
      "applications-web-silverlight-readytouse": {
        focus: "applications",
        t: "content",
        f: "(type:\"Web Mapping Application\" AND typekeywords:\"Silverlight\" AND typekeywords:\"Ready To Use\")"
      },
      "applications-web-silverlight-configurable": {
        focus: "applications",
        t: "content",
        f: "(type:\"Web Mapping Application\" AND typekeywords:\"Silverlight\" AND typekeywords:\"Configurable\")"
      },
      "applications-web-silverlight-codesample": {
        focus: "applications",
        t: "content",
        f: "(type:\"Web Mapping Application\" AND typekeywords:\"Silverlight\" AND typekeywords:\"Code Sample\")"
      },

      "applications-mobile": {
        focus: "applications",
        t: "content",
        f: "type:\"Mobile Application\""
      },

      "applications-mobile-android": {
        focus: "applications",
        t: "content",
        f: "(type:\"Mobile Application\" AND typekeywords:\"ArcGIS for Android\")"
      },
      "applications-mobile-android-readytouse": {
        focus: "applications",
        t: "content",
        f: "(type:\"Mobile Application\" AND typekeywords:\"ArcGIS for Android\" AND typekeywords:\"Ready To Use\")"
      },
      "applications-mobile-android-configurable": {
        focus: "applications",
        t: "content",
        f: "(type:\"Mobile Application\" AND typekeywords:\"ArcGIS for Android\" AND typekeywords:\"Configurable\")"
      },
      "applications-mobile-android-codesample": {
        focus: "applications",
        t: "content",
        f: "(type:\"Mobile Application\" AND typekeywords:\"ArcGIS for Android\" AND typekeywords:\"Code Sample\")"
      },

      "applications-mobile-iphone": {
        focus: "applications",
        t: "content",
        f: "(type:\"Mobile Application\" AND typekeywords:\"ArcGIS for iPhone\")"
      },
      "applications-mobile-iphone-readytouse": {
        focus: "applications",
        t: "content",
        f: "(type:\"Mobile Application\" AND typekeywords:\"ArcGIS for iPhone\" AND typekeywords:\"Ready To Use\")"
      },
      "applications-mobile-iphone-configurable": {
        focus: "applications",
        t: "content",
        f: "(type:\"Mobile Application\" AND typekeywords:\"ArcGIS for iPhone\" AND typekeywords:\"Configurable\")"
      },
      "applications-mobile-iphone-codesample": {
        focus: "applications",
        t: "content",
        f: "(type:\"Mobile Application\" AND typekeywords:\"ArcGIS for iPhone\" AND typekeywords:\"Code Sample\")"
      },

      "applications-mobile-windowsmobile": {
        focus: "applications",
        t: "content",
        f: "(type:\"Mobile Application\" AND typekeywords:\"Windows Mobile\")"
      },
      "applications-mobile-windowsmobile-readytouse": {
        focus: "applications",
        t: "content",
        f: "(type:\"Mobile Application\" AND typekeywords:\"Windows Mobile\" AND typekeywords:\"Ready To Use\")"
      },
      "applications-mobile-windowsmobile-configurable": {
        focus: "applications",
        t: "content",
        f: "(type:\"Mobile Application\" AND typekeywords:\"Windows Mobile\" AND typekeywords:\"Configurable\")"
      },
      "applications-mobile-windowsmobile-codesample": {
        focus: "applications",
        t: "content",
        f: "(type:\"Mobile Application\" AND typekeywords:\"Windows Mobile\" AND typekeywords:\"Code Sample\")"
      },

      "applications-mobile-windowsphone": {
        focus: "applications",
        t: "content",
        f: "(type:\"Mobile Application\" AND typekeywords:\"Windows Phone\")"
      },
      "applications-mobile-windowsphone-readytouse": {
        focus: "applications",
        t: "content",
        f: "(type:\"Mobile Application\" AND typekeywords:\"Windows Phone\" AND typekeywords:\"Ready To Use\")"
      },
      "applications-mobile-windowsphone-configurable": {
        focus: "applications",
        t: "content",
        f: "(type:\"Mobile Application\" AND typekeywords:\"Windows Phone\" AND typekeywords:\"Configurable\")"
      },
      "applications-mobile-windowsphone-codesample": {
        focus: "applications",
        t: "content",
        f: "(type:\"Mobile Application\" AND typekeywords:\"Windows Phone\" AND typekeywords:\"Code Sample\")"
      },

      "applications-mobile-android": {
        focus: "applications",
        t: "content",
        f: "(type:\"Mobile Application\" AND typekeywords:\"Android\")"
      },
      "applications-mobile-android-readytouse": {
        focus: "applications",
        t: "content",
        f: "(type:\"Mobile Application\" AND typekeywords:\"Android\" AND typekeywords:\"Ready To Use\")"
      },
      "applications-mobile-android-configurable": {
        focus: "applications",
        t: "content",
        f: "(type:\"Mobile Application\" AND typekeywords:\"Android\" AND typekeywords:\"Configurable\")"
      },
      "applications-mobile-android-codesample": {
        focus: "applications",
        t: "content",
        f: "(type:\"Mobile Application\" AND typekeywords:\"Android\" AND typekeywords:\"Code Sample\")"
      },

      "applications-mobile-javascript": {
        focus: "applications",
        t: "content",
        f: "(type:\"Mobile Application\" AND typekeywords:\"JavaScript\")"
      },
      "applications-mobile-javascript-readytouse": {
        focus: "applications",
        t: "content",
        f: "(type:\"Mobile Application\" AND typekeywords:\"JavaScript\" AND typekeywords:\"Ready To Use\")"
      },
      "applications-mobile-javascript-configurable": {
        focus: "applications",
        t: "content",
        f: "(type:\"Mobile Application\" AND typekeywords:\"JavaScript\" AND typekeywords:\"Configurable\")"
      },
      "applications-mobile-javascript-codesample": {
        focus: "applications",
        t: "content",
        f: "(type:\"Mobile Application\" AND typekeywords:\"JavaScript\" AND typekeywords:\"Code Sample\")"
      },

      "applications-mobile-flex": {
        focus: "applications",
        t: "content",
        f: "(type:\"Mobile Application\" AND typekeywords:\"Flex\")"
      },
      "applications-mobile-flex-readytouse": {
        focus: "applications",
        t: "content",
        f: "(type:\"Mobile Application\" AND typekeywords:\"Flex\" AND typekeywords:\"Ready To Use\")"
      },
      "applications-mobile-flex-configurable": {
        focus: "applications",
        t: "content",
        f: "(type:\"Mobile Application\" AND typekeywords:\"Flex\" AND typekeywords:\"Configurable\")"
      },
      "applications-mobile-flex-codesample": {
        focus: "applications",
        t: "content",
        f: "(type:\"Mobile Application\" AND typekeywords:\"Flex\" AND typekeywords:\"Code Sample\")"
      },

	  "applications-desktop": {
        focus: "applications",
        t: "content",
        f: "(type:\"Desktop Application\" -type:\"Desktop Application Template\")"
      },

	  "applications-desktop-java": {
        focus: "applications",
        t: "content",
        f: "(type:\"Desktop Application\" AND typekeywords:\"Java\")"
      },

	  "applications-desktop-dotnet": {
        focus: "applications",
        t: "content",
        f: "(type:\"Desktop Application\" AND typekeywords:\".NET-Windows Desktop\")"
      },

	  "applications-desktop-osx": {
        focus: "applications",
        t: "content",
        f: "(type:\"Desktop Application\" AND typekeywords:\"OS X\")"
      },

	  "applications-desktop-qt": {
        focus: "applications",
        t: "content",
        f: "(type:\"Desktop Application\" AND typekeywords:\"Qt\")"
      },

	  "applications-desktop-wpf": {
        focus: "applications",
        t: "content",
        f: "(type:\"Desktop Application\" AND typekeywords:\"WPF\")"
      },

      "tools-locators": {
        focus: "tools",
        t: "content",
        f: "(type:\"Geocoding Service\" OR type:\"Locator Package\")"
      },
      "tools-geodatabase": {
        focus: "tools",
        t: "content",
        f: "type:\"Geodata Service\""
      },
      "tools-geometric": {
        focus: "tools",
        t: "content",
        f: "type:\"Geometry Service\""
      },
      "tools-geoprocessing": {
        focus: "tools",
        t: "content",
        f: "(type:\"Geoprocessing Service\" OR type:\"Geoprocessing Package\" OR type:\"Geoprocessing Sample\")"
      },
      "tools-network": {
        focus: "tools",
        t: "content",
        f: "type:\"Network Analysis Service\""
      },
      "files-document": {
        focus: "files",
        t: "content",
        f: "(typekeywords:\"Document\") -type:\"PDF\""
      },
      "files-pdf": {
        focus: "files",
        t: "content",
        f: "(type:\"PDF\")"
      },
      "files-image": {
        focus: "files",
        t: "content",
        f: "(type:\"Image\") -type:\"Image Service\""
      }
    }
  };

  window.dojoConfig = {
    parseOnLoad: true,
    isDebug: false,
    addOnLoad: function() {
       esriGeowConfig.cdnServerUrl = dojo.baseUrl.substring(0,dojo.baseUrl.indexOf("/js"));
       console.log("cdn server url: ", esriGeowConfig.cdnServerUrl);
    },
    packages: [
      {
        name: "dojo",
        location: "../../jsapi/dojo"
      },
      {
        name: "dojox",
        location: "../../jsapi/dojox"
      },
      {
        name: "dijit",
        location: "../../jsapi/dijit"
      },
      {
        name: "esri",
        location: "../../jsapi/esri"
      },
      {
        name: "dgrid",
        location: "../../jsapi/dgrid"
      },
      {
        name: "put-selector",
        location: "../../jsapi/put-selector"
      },
      {
        name: "xstyle",
        location: "../../jsapi/xstyle"
      },
      {
        name: "arcgisonline",
        location: "../../arcgisonline"
      }
    ]

  };

}());



//anonymous function call for reading locale cookie and setting rtl logic
(function() {

  //esriGeowConfig.testLocale = "ar"; // this is the test locale response from self resource call

  //reading locale
  var nameEQ = "arcgisLocale" + "=";
  var sessionCookie = "esri_auth" + "=";
  var ca = document.cookie.split(';');
  var locale = navigator.language? navigator.language : navigator.userLanguage;  //default dojoConfig.locale to browser language when no cookie present
  var rtlLocales = ["ar", "he"];
  var i = 0;

  if (locale) {
    window.dojoConfig.locale = locale.toLowerCase();
  }
  loop1:
  for(i=0; i<ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0)==' ') {
        c = c.substring(1,c.length);
      }
      if (c.indexOf(sessionCookie) == 0)  {
        var sValue =  unescape(c.substring(sessionCookie.length,c.length));
        var userObj = eval('(' + sValue+ ')');
        locale = userObj.culture;
        if (locale) {
          window.dojoConfig.locale = locale; // change dojoConfig.locale to the cookie locale when cookie is present
        }
        break loop1;
      }
      if (c.indexOf(nameEQ) == 0)  {
        locale =  c.substring(nameEQ.length,c.length);
        if (locale) {
          window.dojoConfig.locale = locale; // change dojoConfig.locale to the cookie locale when cookie is present
        }
      }
  }

  for(i = 0; i<rtlLocales.length; i++) {
    var rLocale = rtlLocales[i];
    if (window.dojoConfig.locale && window.dojoConfig.locale.indexOf(rLocale) !== -1) {
      if(window.dojoConfig.locale.indexOf("-")!== -1) {
        if(window.dojoConfig.locale.indexOf(rLocale + "-") !== -1) {
          esriGeowConfig.isRightToLeft = true;
        }
      }
      else {
        esriGeowConfig.isRightToLeft = true; // esriGeowConfig.isRightToLeft property setting to true when the locale is 'ar'
      }
    }
  };

  //setting the document dir type to RTL when esriGeowConfig.isRightToLeft is true
  var dirNode = document.getElementsByTagName("html")[0];
  if (esriGeowConfig.isRightToLeft) {
    dirNode.setAttribute("dir", "rtl");
    dirNode.className += " esriRtl";
    dirNode.className += " " + window.dojoConfig.locale + " " + (window.dojoConfig.locale.indexOf("-")!== -1? window.dojoConfig.locale.split("-")[0] : "");
  }
  else {
    dirNode.setAttribute("dir", "ltr");
    dirNode.className += " esriLtr";
    dirNode.className += " " + window.dojoConfig.locale + " " + (window.dojoConfig.locale.indexOf("-")!== -1? window.dojoConfig.locale.split("-")[0] : "");
  }
})();
