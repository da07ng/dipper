define(["../../../../core/declare",
        "dojo/_base/lang",
        "dojo/has",
        "../InputDate",
        "dojo/i18n!../../nls/i18nBase",
        "../../../../kernel"],
function(declare, lang, has, InputDate, i18nBase, esriKernel) {

  var oThisClass = declare([InputDate], {

    _isFgdcInputDate: true,
    hint: i18nBase.hints.fgdcDate,

    postCreate: function() {
      this.inherited(arguments);
    },

    getXmlValue: function() {
      var v = this.inherited(arguments);
      if((typeof(v) === "string") && (v !== null)) {
        v = v.replace(/-/g, "");
      }
      return v;
    },

    importValue: function(info, value) {

      // FGDC date examples:
      // yyyymmdd or yyyymm or yyyy

      var s, v = null, parts = [];
      if((typeof(value) !== "string") || (value === null)) {
        this.inherited(arguments);
      } else if(value.indexOf("T") !== -1) {
        this.inherited(arguments);
      } else if(value.indexOf("Z") !== -1) {
        this.inherited(arguments);
      } else if(value.indexOf("-") !== -1) {
        this.inherited(arguments);
      } else {
        v = lang.trim(value);
        if(v.length === 8) {
          parts[0] = v.substring(0, 4);
          parts[1] = v.substring(4, 6);
          parts[2] = v.substring(6, 8);
          s = parts[0] + "-" + parts[1] + "-" + parts[2];
          this.setInputValue(s);
        } else if(v.length === 6) {
          parts[0] = v.substring(0, 4);
          parts[1] = v.substring(4, 6);
          s = parts[0] + "-" + parts[1];
          this.setInputValue(s);
        } else {
          this.inherited(arguments);
        }
      }
    }

  });

  

  return oThisClass;
});