define(["../../../../core/declare",
        "dojo/_base/lang",
        "dojo/aspect",
        "dojo/dom-class",
        "dojo/dom-construct",
        "dojo/has",
        "dijit/_WidgetBase",
        "dojo/i18n!../../nls/i18nBase",
        "dijit/Dialog",
        "./OkCancelBar",
        "../../base/etc/docUtil",
        "../../../../kernel"],
function(declare, lang, aspect, domClass, domConstruct, has, _WidgetBase, i18nBase,
         Dialog,  OkCancelBar, docUtil, esriKernel) {

  var oThisClass = declare([_WidgetBase], {

    dialog: null,
    dialogTitle: i18nBase.editor.download.dialogTitle,

    postCreate: function() {
      this.inherited(arguments);
    },

    show: function(xml, documentTitle) {
      var fileName = documentTitle + ".xml";
      var blob = new Blob([xml], {type: "text/xml"});
      var content = domConstruct.create("div", {});

      var pane = domConstruct.create("div", {
        "class": "gxePrimaryPane gxeDownloadPane"
      }, content);


      var link = domConstruct.create("a", {
        "class": "gxeClickableText gxeBold gxeLine",
        onclick: lang.hitch(this, function() {
          if(this.dialog) {
            this.dialog.hide();
          }
        })
      }, pane);
      docUtil.setNodeText(link, i18nBase.editor.download.prompt);

      var reader = new FileReader();
      this.own(aspect.after(reader, "onload", lang.hitch(this, function(e) {
        var dataUrl = null;
        if(e && e.target && e.target.result) {
          dataUrl = e.target.result;
          link.href = dataUrl;
          link.download = fileName;
        }
      }), true));
      reader.readAsDataURL(blob);

      var okCancel = new OkCancelBar({
        showOk: false,
        onCancelClick: lang.hitch(this, function() {
          if(this.dialog) {
            this.dialog.hide();
          }
        })
      }, domConstruct.create("div", {}, content));

      var dialog = this.dialog = new Dialog({
        "class": "gxeDialog  gxePopupDialog",
        title: this.dialogTitle,
        content: content
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
      dialog.show();
    }

  });

  

  return oThisClass;
});