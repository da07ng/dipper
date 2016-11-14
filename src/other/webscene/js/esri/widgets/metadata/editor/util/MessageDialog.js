define(["../../../../core/declare",
        "dojo/_base/lang",
        "dojo/dom-class",
        "dojo/dom-construct",
        "dojo/dom-style",
        "dojo/has",
        "../../base/etc/docUtil",
        "dijit/_WidgetBase",
        "dojo/i18n!../../nls/i18nBase",
        "dijit/Dialog",
        "./OkCancelBar",
        "../../../../kernel"],
function(declare, lang, domClass, domConstruct, domStyle, has, docUtil,
         _WidgetBase, i18nBase, Dialog, OkCancelBar, esriKernel) {

  var oThisClass = declare([_WidgetBase], {

    title: "",
    okLabel: null,
    cancelIsProminent: false,
    cancelLabel: null,
    showOk: true,
    showCancel: true,
    showOkCancelBar: true,

    dialog: null,
    messagePane: null,
    iconNode: null,
    messageNode: null,
    okCancelBar: null,

    postCreate: function() {
      this.inherited(arguments);
    },

    hide: function() {
      if(!this.dialog) {
        return;
      }
      this.dialog.hide();
    },

    onCancelClick: function(evt) {
    },

    onOkClick: function(evt) {
    },

    show: function(message, iconClass, errorObject) {
      var nd, content = domConstruct.create("div", {});

      this.messagePane = domConstruct.create("div", {
        "class": "gxePrimaryPane gxeMessagePane"
      }, content);
      this.iconNode = domConstruct.create("div", {
        "class": "gxeIcon"
      }, this.messagePane);
      if(iconClass) {
        domClass.add(this.iconNode, iconClass);
      }
      this.messageNode = domConstruct.create("div", {
        "class": "gxeMessageText"
      }, this.messagePane);
      docUtil.setNodeText(this.messageNode, message);

      if(errorObject && errorObject.message) {
        nd = domConstruct.create("p", {}, this.messagePane);
        //nd.innerHTML = errorObject.message;
        docUtil.setNodeText(nd, errorObject.message);
      }
      /*
       else if (errorObject && errorObject.messages && (errorObject.messages.length > 0)) {
       nd = domConstruct.create("p",{},this.messagePane);
       //nd.innerHTML = errorObject.messages[0];
       docUtil.setNodeText(nd,errorObject.messages[0]);
       }
       */

      var okCancel = this.okCancelBar = new OkCancelBar({
        okLabel: this.okLabel,
        cancelIsProminent: this.cancelIsProminent,
        cancelLabel: this.cancelLabel,
        showOk: this.showOk,
        showCancel: this.showCancel,
        onOkClick: lang.hitch(this, function(evt) {
          if(this.dialog) {
            this.dialog.hide();
          }
          this.onOkClick(evt);
        }),
        onCancelClick: lang.hitch(this, function(evt) {
          if(this.dialog) {
            this.dialog.hide();
          }
          this.onCancelClick(evt);
        })
      }, domConstruct.create("div", {}, content));
      if(!this.showOkCancelBar) {
        domStyle.set(okCancel.domNode, "display", "none");
      }

      var dialog = this.dialog = new Dialog({
        "class": "gxeDialog gxePopupDialog",
        title: this.title,
        content: content,
        autofocus: false
      });
      if(!this.isLeftToRight()) {
        domClass.add(dialog.domNode, "gxeRtl");
      }
      this.own(dialog.on("hide", lang.hitch(this, function() {
        setTimeout(lang.hitch(this, function() {
          okCancel.destroyRecursive(false);
          dialog.destroyRecursive(false);
          this.destroyRecursive(false);
        }), 300);
      })));

      return dialog.show();
    }

  });

  

  return oThisClass;
});