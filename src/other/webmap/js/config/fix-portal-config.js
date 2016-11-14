/*
 * @Author: Esri
 * @Date:   2016-04-14 15:15:48
 * @Last Modified by:   Esri
 * @Last Modified time: 2016-05-15 09:55:33
 */

(function() {
    var context = '/arcgis/';
    var DEPLOY_ROOT = 'http://hy.szhy.cn/platform/home/';
    var ESRI_CHINA_DEPLOY_PATH = 'http://hy.szhy.cn/platform/';

    dojoConfig.packages.push({
        name: 'mapwidgets',
        location: document.location.pathname.slice(0, document.location.pathname.lastIndexOf('/')) + '/mapViewer/widgets/'
    });

    window.esriGeowConfig.baseUrl = DEPLOY_ROOT;
    window.esriGeowConfig.dojoBaseUrl = DEPLOY_ROOT + '/js/dojo/';
    window.esriGeowConfig.restBaseUrl = ESRI_CHINA_DEPLOY_PATH + 'sharing/rest/';
    window.esriGeowConfig.reflectorUrl = ESRI_CHINA_DEPLOY_PATH + 'sharing/tools/reflect';
    window.esriGeowConfig.bridgeUrl = ESRI_CHINA_DEPLOY_PATH + '/sharing/tools/bridge';
    window.esriGeowConfig.marketplaceUrl = location.protocol + '//' + 'marketplacedevext.arcgis.com';
    window.esriGeowConfig.openDataUrl = location.protocol + '//' + 'opendatadev.arcgis.com/sites';
    window.esriGeowConfig.kmlService = ESRI_CHINA_DEPLOY_PATH + 'sharing/kml';
    window.esriGeowConfig.geoRSSService = ESRI_CHINA_DEPLOY_PATH + 'sharing/rss';
    window.esriGeowConfig.geoIPService = ESRI_CHINA_DEPLOY_PATH + '/sharing/geoip.jsp';
    window.esriGeowConfig.print = ESRI_CHINA_DEPLOY_PATH + 'sharing/tools/print';
    window.esriGeowConfig.legend = ESRI_CHINA_DEPLOY_PATH + 'sharing/tools/legend';

    configOptions.proxyUrl = 'http://localhost/proxy.ashx';
}());
