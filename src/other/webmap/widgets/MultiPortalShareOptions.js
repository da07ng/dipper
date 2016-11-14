/*
 * @Author: Esri
 * @Date:   2016-04-28 09:02:10
 * @Last Modified by:   Esri
 * @Last Modified time: 2016-06-07 15:20:42
 */

define([
    "dojo/_base/declare",
    "arcgisonline/sharing/dijit/ShareOptions",
    "dijit/_TemplatedMixin",
    "dijit/_WidgetsInTemplateMixin",
    "dojo/text!./templates/template_tool_shareopts.html"
], function(declare, ShareOptions, TemplatedMixin, _WidgetsInTemplateMixin, template) {
    return declare("mapwidgets.MultiPortalShareOptions", [ShareOptions, TemplatedMixin, _WidgetsInTemplateMixin], {

        templateString: template,

        postMixInProperties: function() {
            this.inherited(arguments);
            this.i18n.theseGroups = '以下的工作组：';
        },

        checkForAccount: function(c) {
            this.user = this.util.getUser();
            if (this.user && this.user.accountId && !this.organization) {
                arcgisonline.sharing.geow.Account.getSelf(dojo.hitch(this, function(b) {
                    if (b && !b.code && !b.message) {
                        this.organization = b;
                        this._setRoleFlags();
                        dojo.byId("img_share-account-check-label").innerHTML = '组织'; // this.organization.name
                        dojo.byId("share-account-check-label").innerHTML = '组织'; // this.organization.name
                        if (!this.isMultiTenant) {
                            dojo.attr(dojo.byId("share-everyone-check-label"), "innerHTML", this.i18n.everyonePortal);
                        }
                        if (this._isCustomRole && !this._roleCanShareToOrg) {
                            dojo.style(dojo.byId("share-account-check_div"), "display", "none");
                        }

                    } else {
                        a.style(a.byId("share-account-check_div"), "display", "none");
                    }
                    if (c) {
                        c();
                    }
                }));
            } else {
                a.style(a.byId("share-account-check_div"), "display", "none");
                if (c) {
                    c();
                }
            }
        },
    });
});
