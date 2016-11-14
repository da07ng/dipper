define(["../../../../core/declare",
        "dojo/_base/lang",
        "dojo/has",
        "../InputText",
        "dojo/i18n!../../nls/i18nBase",
        "../../../../kernel"],
function(declare, lang, has, InputText, i18nBase, esriKernel) {

  var oThisClass = declare([InputText], {

    _isFgdcInputTime: true,
    hint: i18nBase.hints.fgdcTime,
    small: true,

    postCreate: function() {
      this.inherited(arguments);
    },

    getXmlValue: function() {
      var v = this.inherited(arguments);
      if((typeof(v) === "string") && (v !== null)) {
        v = v.replace(/:/g, "");
        v = v.replace(/\./g, "");
      }
      return v;
    },

    importValue: function(info, value) {

      // (hours minutes seconds) examples: hh hhmm hhmmss
      // (offset from GMT) examples: hh+hhmm hhmmss-hhmm
      // (suffixed with Z for Zulu time) examples: hhZ hhmmZ hhmmssZ
      // (decimal seconds are ssssssss)

      var i, s, v = null, part, parts = [], left = "", right = "";
      if((typeof(value) !== "string") || (value === null)) {
        this.inherited(arguments);
      } else if(value.indexOf("T") !== -1) {
        this.inherited(arguments);
      } else if(value.indexOf(":") !== -1) {
        this.inherited(arguments);
      } else if(value.indexOf(".") !== -1) {
        this.inherited(arguments);
      } else {
        v = lang.trim(value);
        if(v.indexOf("+") !== -1) {
          parts = v.split("+");
          right = "+";
        } else if(v.indexOf("-") !== -1) {
          parts = v.split("-");
          right = "-";
        } else if(v.indexOf("Z") !== -1) {
          parts = v.split("Z");
          right = "Z";
          parts[1] = "";
        } else {
          parts[0] = v;
          parts[1] = "";
        }
        if(parts.length !== 2) {
          this.inherited(arguments);
        } else {
          part = parts[0];
          for(i = 0; i < part.length; i++) {
            if(left.length === 2) {
              left += ":";
            } else if(left.length === 5) {
              left += ":";
            } else if(left.length === 8) {
              left += ".";
            }
            left += part[i];
          }
          part = parts[1];
          for(i = 0; i < part.length; i++) {
            if(right.length === 3) {
              right += ":";
            }
            right += part[i];
          }
          s = left + right;
          this.setInputValue(s);
        }
      }
    }

  });

  

  return oThisClass;
});