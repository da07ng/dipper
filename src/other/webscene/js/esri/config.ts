/**
 * @classdesc
 * Configure global properties of the library.
 *
 * The value of this module is an object with the following properties.
 *
 * @module esri/config
 * @amdalias esriConfig
 * @since 4.0
 *
 * @example
 * require(["esri/config"], function(esriConfig) {
 *   esriConfig.request.proxyUrl = "/resource-proxy/Java/proxy.jsp";
 * });
 */

/**
 * @lends module:esri/config
 */
const config = {

  // TODO
  // Remove this property in favor of esri/core/screenUtils.DPI.
  screenDPI: 96,

  /**
   * TODO
   * Geometry service used by various widgets and classes, typically to project
   * features between different coordinate systems.
   *
   * Widgets that...
   *
   * @type {module:esri/tasks/GeometryService}
   * @default null
   * @ignore
   */
  geometryService: <any> null,

  /**
   * TODO
   * URL for the utility service used by GeoRSSLayer to convert GeoRSS documents.
   *
   * @type {string}
   * @default null
   * @ignore
   */
  geoRSSServiceUrl: <string> null,

  /**
   * TODO
   * URL for the utility service used by KMLLayer to convert KML documents.
   *
   * @type {string}
   * @default null
   * @ignore
   */
  kmlServiceUrl: <string> null,

  /**
   * An object with properties that control various aspects of communication
   * between the library and web servers.
   *
   * @type {Object}
   * @instance
   *
   * @property {boolean}  corsDetection
   *
   * Indicates whether the library automatically detects if
   * [CORS](http://enable-cors.org/) (Cross-Origin Resource Sharing) specification
   * is supported by ArcGIS Servers used in your
   * application.
   *
   * Upon successful detection, the server will be added to `corsEnabledServers`
   * list. CORS detection will not be performed for a server if it is already
   * listed in `corsEnabledServers`.
   *
   * Default value:
   *
   *  `true` if your application is running in a web browser.
   *
   *  `false` if your application is running on [Apache Cordova](https://cordova.apache.org/)
   *  platform.
   *
   * @property {number}   corsDetectionTimeout
   *
   * Number of seconds to wait for response from the ArcGIS Server during
   * CORS detection. If the detection is not complete before this time expires,
   * then it is assumed that the server does not support CORS.
   *
   * Default value: `15`
   *
   * Applicable when `corsDetection` is true.
   *
   * @property {string[]} corsEnabledServers
   *
   * List of servers known to support CORS specification.
   *
   * Out of the box, this list includes many Esri hosted servers that are known
   * to support CORS - and it is updated at every release as the list grows. The
   * library is also capable of automatically detecting CORS support for servers
   * used in an application (see `corsDetection`), but if you are already aware
   * that a server supports CORS, go ahead and add it to this list. Since the API
   * includes some servers by default it's important to add items onto this array
   * rather than overwriting it.
   *
   * At version 4.0, the list includes the following servers by default:
   * * elevation3d.arcgis.com
   * * geocode.arcgis.com
   * * geoenrich.arcgis.com
   * * server.arcgisonline.com
   * * services.arcgis.com
   * * services.arcgisonline.com
   * * services1.arcgis.com
   * * services2.arcgis.com
   * * services3.arcgis.com
   * * services4.arcgis.com
   * * services5.arcgis.com
   * * static.arcgis.com
   * * tiles.arcgis.com
   * * tiles1.arcgis.com
   * * tiles2.arcgis.com
   * * tiles3.arcgis.com
   * * tiles4.arcgis.com
   * * utility.arcgisonline.com
   * * www.arcgis.com
   *
   * Example:
   * ```js
   * // Add a known server to the list.
   * require(["esri/config"], function(esriConfig) {
   *   esriConfig.request.corsEnabledServers.push("<hostname>.<domain>:<port>");
   * });
   * ```
   *
   * @property {boolean}  forceProxy
   *
   * Indicates whether the proxy specified in `proxyUrl` is used for all AJAX
   * requests made using {@link module:esri/request esri/request} and images
   * added using `<img>` element.
   *
   * Default value: `false`
   *
   * @property {number}   maxUrlLength
   *
   * Maximum number of characters allowed in the URL for HTTP GET requests
   * made by {@link module:esri/request esri/request}. If this limit is
   * exceeded, HTTP POST method will be used.
   *
   * Default value: `2000`
   *
   * @property {string}   proxyUrl
   *
   * Resource proxy for your application. It is used by the library when
   * communicating with a web server hosted on a domain that is different
   * from the domain where your application is hosted.
   *
   * The library may or may not use the proxy depending on the type of request
   * made, whether the server support CORS, whether the application is being
   * run on older versions of browsers etc. To keep it simple, it is
   * recommended that you always configure a resource proxy for your application.
   *
   * You can download the resource proxy from this
   * [GitHub repo](https://github.com/Esri/resource-proxy).
   *
   * Default value: `null`
   *
   * ```js
   * require(["esri/config"], function(esriConfig) {
   *   esriConfig.request.proxyUrl = "/resource-proxy/Java/proxy.jsp";
   * });
   * ```
   *
   * @property {number}   timeout
   *
   * Number of milliseconds {@link module:esri/request esri/request} will wait
   * for response from a server. If a server fails to respond before this time
   * expires, then the request is considered to have encountered an error.
   *
   * Default value: `60000` (one minute)
   *
   * @property {boolean}  useCors
   *
   * Indicates whether the library should use [CORS](http://enable-cors.org/)-enabled
   * requests when communicating with a web server hosted on a domain
   * that is different from the domain where your application is hosted.
   *
   * Default value: `true`
   *
   * @todo request.corsStatus
   * @todo request.maxWorkers
   * @todo request.useWorkers
   * @todo request.proxyRules
   * @todo request.webTierAuthServers
   * @todo Need more info for proxy and CORS story.
   */
  request: {
    corsDetection: !(window && (<any> window).cordova),

    // Cors detection timeout in seconds
    corsDetectionTimeout: 15,

    // Array of servers that have CORS support enabled
    // See: http://mediawikidev.esri.com/index.php/JSAPI/Research/Cross-Origin_Resource_Sharing
    corsEnabledServers: [
      "dev.arcgis.com",
      "devext.arcgis.com",

      "elevation3d.arcgis.com",
      "elevation3ddev.arcgis.com",

      "js.arcgis.com",
      "jsdev.arcgis.com",
      "jsqa.arcgis.com",

      "geocode.arcgis.com",
      "geocodedev.arcgis.com",
      "geocodeqa.arcgis.com",
      "geoenrich.arcgis.com",
      "geoenrichdev.arcgis.com",
      "geoenrichqa.arcgis.com",

      "qaext.arcgis.com",

      "server.arcgisonline.com",
      "services.arcgis.com",
      "services.arcgisonline.com",
      "services1.arcgis.com",
      "services2.arcgis.com",
      "services3.arcgis.com",
      "services4.arcgis.com",
      "services5.arcgis.com",
      "servicesdev.arcgis.com",
      "servicesdev1.arcgis.com",
      "servicesdev2.arcgis.com",
      "servicesdev3.arcgis.com",
      "servicesqa.arcgis.com",
      "servicesqa1.arcgis.com",
      "servicesqa2.arcgis.com",
      "servicesqa3.arcgis.com",
      "static.arcgis.com",
      "staticdev.arcgis.com",

      "tiles.arcgis.com",
      "tiles1.arcgis.com",
      "tiles2.arcgis.com",
      "tiles3.arcgis.com",
      "tiles4.arcgis.com",
      "tilesdevext.arcgis.com",
      "tilesqa.arcgis.com",

      "utility.arcgisonline.com",
      "www.arcgis.com"
    ],

    // Note that servers don't have protocol - implies CORS enabled
    // for both HTTP and HTTPS

    corsStatus: {
      // "<host:port?>": -1/1/2
      // -1 indicates ServerInfo request is in-flight
      //  1 indicates CORS support not available
      //  2 indicates CORS support available
    },

    forceProxy: false,

    maxUrlLength: 2000,

    /*limit the number of concurrent unique callback-bound RequestClient instances
     Default is 5
     */
    maxWorkers: 5,

    proxyRules: <{proxyUrl: string; urlPrefix: string}[]> [
      /*
       * {
       *   "proxyUrl" : "<String>",
       *   "urlPrefix": "<String>"
       * }
       */
    ],

    proxyUrl: <string> null,

    timeout: 60000,

    // true: make direct AJAX requests to servers that support CORS
    // false: do not make direct requests. A proxy will be used if available
    useCors: true,
    // Note: developers can still override this when calling esri.request
    // via crossOrigin option

    /*use io workers only when requested by default
     valid values are:
     - false - NEVER use, no matter what other options are used
     - true - always try to use if possible
     - "on-request" (default) - used when requested by other options
     */
    useWorkers: "on-request",

    webTierAuthServers: <string[]> []
  },

  /**
   * Description.
   *
   * @type {boolean}
   * @default false
   * @ignore
   */
  useSpatialIndex: !!(window && (<any> window).Worker && false) //once kinks are ironed out this can be true
};

export = config;
