define(["../../../../core/declare",
        "dojo/_base/lang",
        "dojo/_base/array",
        "dojo/dom-class",
        "dojo/dom-construct",
        "dojo/has",
        "dijit/_WidgetBase",
        "dojo/i18n!../../nls/i18nBase",
        "dojo/i18n!../../nls/i18nFgdc",
        "../../base/etc/docUtil",
        "../IsoTopicCategoryOptions",
        "dijit/Dialog",
        "../../editor/util/OkCancelBar",
        "../../../../kernel"],
function(declare, lang, array, domClass, domConstruct, has, _WidgetBase,
         i18nBase, i18nFgdc, docUtil, TopicCategoryOptions, Dialog, OkCancelBar, esriKernel) {

  var oThisClass = declare([_WidgetBase], {

    checkBoxes: null,
    dialogTitle: i18nFgdc.idinfo.keywords.themektIsoTopicDialog,
    values: null,

    postCreate: function() {
      this.inherited(arguments);
      this.checkBoxes = [];
    },

    onChange: function(selectedValues) {
    },

    show: function() {
      var options = new TopicCategoryOptions();
      options.fetchOptionWidgets().then(
        lang.hitch(this, function(optionWidgets) {
          this._showDialog(options, optionWidgets);
        })
      );
    },

    _addOption: function(optionWidget, index, parentNode) {
      var id = this.id + "_chk" + index;
      var nd = domConstruct.create("div", {"class": "gxeOption"}, parentNode);
      var lbl = optionWidget.label;
      var val = optionWidget.value;
      var bSel = array.some(this.values, function(v) {
        if(v === val) {
          return true;
        }
      });

      var params = {id: id, type: "checkbox", value: val};
      if(bSel) {
        params.checked = "checked";
      }
      var cbx = domConstruct.create("input", params, nd);
      this.checkBoxes.push(cbx);
      var ndLbl = domConstruct.create("label", {"for": id}, nd);
      docUtil.setNodeText(ndLbl, lbl);
    },

    _applySelections: function(dialog) {
      var a = [];
      array.forEach(this.checkBoxes, function(cbx) {
        if(cbx.checked) {
          a.push(cbx.value);
        }
      });
      this.onChange(a);
      dialog.hide();
    },

    _showDialog: function(options, optionWidgets) {

      var dialog = null;
      var content = domConstruct.create("div", {});

      var nd = domConstruct.create("div", {"class": "gxeOptions"}, content);
      array.forEach(optionWidgets, function(widget, i) {
        this._addOption(widget, i, nd);
      }, this);

      var okCancel = new OkCancelBar({
        onOkClick: lang.hitch(this, function() {
          if(dialog) {
            this._applySelections(dialog);
          }
        }),
        onCancelClick: lang.hitch(this, function() {
          if(dialog) {
            dialog.hide();
          }
        })
      }, domConstruct.create("div", {}, content));

      dialog = new Dialog({
        "class": "gxeDialog gxePopupDialog gxeIsoTopicDialog",
        title: this.dialogTitle,
        content: content
      });
      if(!this.isLeftToRight()) {
        domClass.add(dialog.domNode, "gxeRtl");
      }

      this.own(dialog.on("hide", lang.hitch(this, function() {
        setTimeout(lang.hitch(this, function() {

          try {
            options.destroyRecursive(false);
            array.forEach(optionWidgets, function(ow) {
              try {
                ow.destroyRecursive(false);
              } catch(ex2) {
                console.error(ex2);
              }
            });
          } catch(ex) {
            console.error(ex);
          }

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