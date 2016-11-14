
var pathRegex = new RegExp(/\/[^\/]+$/);
var locationPath = location.pathname.replace(pathRegex, '');
 var rootPath = "/" + location.pathname.split("/")[1];
//var rootPath = "/" + location.pathname.split("/")[1] + '/' + location.pathname.split("/")[2] ;//todo:merge to config.js
var apiUrl = 'http://192.168.100.118:8080/3.8/';//
//require.js config
require({
	parseOnLad: true,
	paths: {
		wangEditor: '../libs/wangEditor-2.1.12/js/wangEditor'
	},
	shim: {
		// 'esri-leaflet': [locationPath + '/libs/leaflet-0.7.3/leaflet.js']
	},
	packages: [{
		name: "application",
		location: rootPath + '/viewer/application'
	}, {
		name: "cloudSerivce",
		location: rootPath + '/viewer/cloudSerivce'
	}, {
		name: "dataGallery",
		location: rootPath + '/dataGallery'
	}, {
		name: "initalize",
		location: rootPath + '/viewer/initalize'
	}, {
		name: "personalProfile",
		location: rootPath + '/viewer/personalProfile'
	}, {
		name: "card",
		location: rootPath + '/viewer/card'
	}, {
		name: "exShareCatalog",
		location: rootPath + '/viewer/exShareCatalog'
	}, {
		name: "login",
		location: rootPath + '/viewer/login'
	}, {
		name: "header",
		location: rootPath + '/viewer/header'
	}, {
		name: "functionGallery",
		location: rootPath + '/viewer/functionGallery'
	}, {
		name: "mapViewer",
		location: rootPath + '/viewer/mapViewer'
	}, {
		name: "modal",
		location: rootPath + '/js/modal/js'
	}, {
		name: "item",
		location: rootPath + '/viewer/item/js'
	}, {
		name: "shareCenter",
		location: rootPath + '/viewer/shareCenter/js'
	}, {
		name: "header",
		location: rootPath + '/viewer/header/js'
	}, {
		name: "login",
		location: rootPath + '/viewer/login/js'
	}, {
		name: "footer",
		location: rootPath + '/viewer/footer/js'
	}, {
		name: "platformApplication",
		location: rootPath + '/viewer/platformApplication'
	}, {
		name: "userContent",
		location: rootPath + '/viewer/userContent'
	}, {
		name: "helpCenter",
		location: rootPath + '/viewer/helpCenter'
	}, {
		name: "proxy",
		location: rootPath + '/proxy'
	}, {
		name: "utils",
		location: rootPath + '/js/utils'
	}, {
		name: "portal",
		location: rootPath + '/portal'
	}, {
		name: "notice",
		location: rootPath + '/viewer/noticeboard'
	}]
});
