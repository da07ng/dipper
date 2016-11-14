define(["../../../core/declare",
        "dojo/_base/lang",
        "dojo/date/locale",
        "dojo/dom-class",
        "dojo/dom-construct",
        "dojo/has",
        "../base/etc/dateUtil",
        "./InputText",
        "dojo/text!./templates/InputDate.html",
        "dojo/i18n!../nls/i18nBase",
        "dijit/Dialog",
        "../editor/util/OkCancelBar",
        "../../../kernel"],
function(declare, lang, locale, domClass, domConstruct, has, dateUtil, InputText,
         template, i18nBase, Dialog, OkCancelBar, esriKernel) {

  var oThisClass = declare([InputText], {

    _isGxeInputDate: true,
    templateString: template,

    allowTime: false,
    forceTime: false,
    hint: i18nBase.hints.date,
    size: 40,
    useNow: false,

    postCreate: function() {
      this.inherited(arguments);
    },

    postMixInProperties: function() {
      this.inherited(arguments);
      if(this.forceTime && (this.hint === i18nBase.hints.date)) {
        this.hint = i18nBase.hints.dateTime;
      } else if(this.allowTime && (this.hint === i18nBase.hints.date)) {
        this.hint = i18nBase.hints.dateOrDateTime;
      }
    },

    connectXNode: function(parentXNode, isViewOnly) {
      this.inherited(arguments);
      if(!isViewOnly && this.useNow) {
        this.setInputValue(this.formatDate(new Date()));
      }
    },

    formatDate: function(date) {
      return dateUtil.formatDate(date);
    },

    _onCalendarClick: function() {
      this.showCalendar();
    },

    _onStampClick: function() {
      var dt = new Date();
      this.setInputValue(dateUtil.formatDateTime(dt));
    },

    _getDateForCalendar: function() {
      var f = "yyyy-MM-dd";
      var v = this.getInputValue();
      if(v === null) {
        return null;
      }
      v = lang.trim(v);
      if(v.length === 0) {
        return null;
      }
      v = v.split("Z")[0].split("T")[0];
      var p = v.split("-");
      if(p.length === 1) {
        f = "yyyy";
      } else if(p.length === 2) {
        f = "yyyy-MM";
      }
      var d = locale.parse(v, {datePattern: f, selector: "date"});
      return d;
    },

    showCalendar: function() {
      var dialog = null, dialogTitle = i18nBase.calendar.title;
      var dt = this._getDateForCalendar();
      if(dt === null) {
        dt = new Date();
      }

      require(["dijit/Calendar"], lang.hitch(this, function(Calendar) {

        var content = domConstruct.create("div", {});

        var calendar = new Calendar({
          "class": "gxeCenteredCalendar",
          value: dt,
          onChange: lang.hitch(this, function(v) {
            v = this.formatDate(v);
            if(this.forceTime) {
              v += "T00:00:00";
            }
            this.setInputValue(v);
            if(dialog) {
              dialog.hide();
            }
          })
        }, domConstruct.create("div", {}, content));
        calendar.startup();

        var okCancel = new OkCancelBar({
          onOkClick: lang.hitch(this, function() {
            var v = calendar.get("value");
            if(v !== null) {
              v = this.formatDate(v);
              if(this.forceTime) {
                v += "T00:00:00";
              }
              this.setInputValue(v);
              if(dialog) {
                dialog.hide();
              }
            }
          }),
          onCancelClick: lang.hitch(this, function() {
            if(dialog) {
              dialog.hide();
            }
          })
        }, domConstruct.create("div", {}, content));
        domClass.add(okCancel.workingNode, "gxeSmallText");
        okCancel.showWorking(this.formatDate(dt), false);

        dialog = new Dialog({
          "class": "gxeDialog gxePopupDialog",
          title: dialogTitle,
          content: content
        });
        if(!this.isLeftToRight()) domClass.add(dialog.domNode, "gxeRtl");
        this.own(dialog.on("hide", lang.hitch(this, function() {
          setTimeout(lang.hitch(this, function() {
            okCancel.destroyRecursive(false);
            dialog.destroyRecursive(false);
            calendar.destroyRecursive(false);
          }), 300);
        })));
        dialog.show();

      }));
    }

  });

  

  return oThisClass;
});