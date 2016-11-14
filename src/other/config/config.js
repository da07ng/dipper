var http = "http://";
var https = "https://";
/*------------------部署配置START------------------------------------*/

var hostUrl = "geoplat.lonlat.org";

var portalRoot = 'arcgis';

var projectName = 'portal';

var baseOprUrl = "http://172.20.21.107/poe";

var tagqueryUrl = "http://192.168.0.233/SysRestServices/rest/services/queryServiceCatalogs";

/*------------------部署配置END------------------------------------*/
var platUrl = https + hostUrl + "/" + portalRoot;

var loginSate=0

var configOptions = {
    "proxyUrl": "/proxy/proxy.jsp",
    "loginWinName": "esriOpenAmAuth",
    "loginWinParams": "height=480,width=800,location,resizable,scrollbars,status",
    "signoutPath": https + hostUrl + '/' + portalRoot + '/sharing/rest/oauth2/signout?client_id=arcgisonline&redirect_uri=' + window.location.href,
    "rootPath": "/" + location.pathname.split("/")[1] + '/portal/', //headers 设置相对路径  required js
    "authorInfoKey": "esri_auth",
    "openamKey": "iPlanetDirectoryPro",
    "portalHost": hostUrl,
    "portalUrl": http + hostUrl + '/' + portalRoot, //用于portal api
    "tagqueryUrl": tagqueryUrl,
    "portalRestApiUrl": http + hostUrl + "/" + portalRoot + "/sharing/rest", //用于portal api
    "baseOprUrl": baseOprUrl,
    "cityPlatformDomain":"hy.szhy.cn",
    "validateToken":"http://sso.szhy.cn:8080/UUMS/rest/user/validate4Portal"
};

window.esriCheckOAuthResp = function(url) {

    var query = null;
    var hash = location.hash;
    if (hash) {
        query = esriQueryToObject(hash);
    }

    if (query && query.error) {
        alert("登录失败: ", a.error);
    } else {
        window.location.reload(true);
    }
};

window.esriQueryToObject = function(str) {
    var dec = decodeURIComponent,
        qp = str.split("&"),
        ret = {},
        name, val;
    for (var i = 0, l = qp.length, item; i < l; ++i) {
        item = qp[i];
        if (item.length) {
            var s = item.indexOf("=");
            if (s < 0) {
                name = dec(item);
                val = "";
            } else {
                name = dec(item.slice(0, s));
                val = dec(item.slice(s + 1));
            }
            if (typeof ret[name] == "string") { // inline'd type check
                ret[name] = [ret[name]];
            }

            if (lang.isArray(ret[name])) {
                ret[name].push(val);
            } else {
                ret[name] = val;
            }
        }
    }
    return ret; // Object
};
