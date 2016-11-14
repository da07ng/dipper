/*
 * @Author: Esri
 * @Date:   2016-05-25 08:46:57
 * @Last Modified by:   Esri
 * @Last Modified time: 2016-05-26 11:37:16
 */

define([
    "dojo/_base/declare"
], function(declare) {
    declare("mapwidgets.authHelper", [], {

        signinWin: null,
        handlerAttached: false,
        oauth2Url: '',

        popupAndSave: function() {
            var portalUrl = esriGeowConfig.restBaseUrl.substring(0, esriGeowConfig.restBaseUrl.indexOf("/", 8)).replace("http://", "https://");
            if (esriGeowConfig.self.portalHostname) {
                portalUrl = "https://" + esriGeowConfig.self.portalHostname;
            }

            var oauthParams = {
                appId: "arcgisonline",
                portalUrl: portalUrl,
                minTimeUntilExpiration: 525949,
                forceLogin: true,
                locale: dojo.locale,
                popup: true,
                popupCallbackUrl: "http://hy.szhy.cn/platform/portal/viewer/viewer_oauth-callback.html",
                popupWindowFeatures: "height=480,width=800,location,resizable,scrollbars,status",
                msg: esri.i18nBundle.viewer.main.oAuthSignInMsg
            };

            var g = {
                    client_id: oauthParams.appId,
                    response_type: "token",
                    state: dojo.json.stringify({ portalUrl: oauthParams.portalUrl }),
                    expiration: esriGeowConfig.tokenExpiration,
                    locale: oauthParams.locale,
                    force_login: oauthParams.forceLogin,
                    redirect_uri: oauthParams.popup ? esri.getAbsoluteUrl(oauthParams.popupCallbackUrl) : window.location.href.replace(/#.*$/, "")
                },
                l = oauthParams.portalUrl.replace(/^http:/i, "https:") + "/sharing/oauth2/authorize",
                m = l + "?" + dojo.objectToQuery(g);
            this.signinWin = window.open(esri.getAbsoluteUrl('mapViewer/oauth-signin.html').replace("http://", "https://"),
                'esriOpenAmAuth', oauthParams.popupWindowFeatures);
            this.oauth2Url = m;

            if (!this.handlerAttached) {
                if (typeof window.addEventListener != 'undefined') {
                    window.addEventListener('message', dojo.hitch(this, this.postOAuthPageUrl), false);
                } else if (typeof window.attachEvent != 'undefined') {
                    window.attachEvent('onmessage', dojo.hitch(this, this.postOAuthPageUrl));
                }
                this.handlerAttached = true;
            }
        },

        postOAuthPageUrl: function(e) {
            if (e.data == 'ready') {
                this.signinWin.postMessage(this.oauth2Url, document.location.origin.replace('http://', 'https://'));
            }
        }
    });
});
