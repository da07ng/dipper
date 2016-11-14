define(["dojo/_base/lang",
        "dojo/_base/array",
        "dojo/has",
        "dojo/date/locale",
        "dojo/date",
        "dojo/date/stamp",
        "../../../../kernel"],
function(lang, array, has, locale, djDate, stamp, esriKernel) {

  var oThisObject = {

    formatDate: function(date) {
      return locale.format(date, {datePattern: "yyyy-MM-dd", selector: "date"});
    },

    formatDateTime: function(date) {
      var dt = locale.format(date, {datePattern: "yyyy-MM-dd", selector: "date"});
      var time = locale.format(date, {timePattern: "hh:mm:ss.SSS", selector: "time"});
      var zone = locale.format(date, {timePattern: "ZZZZ", selector: "time"});
      zone = zone.replace("GMT", "");
      return (dt + "T" + time + zone);
    }

    /*
    parseDateInfo: function(v) {

      var endsWith = function(sv,sfx) {
        return (sv.indexOf(sfx,(sv.length - sfx.length)) !== -1);
      };
      var trimLast = function(sv) {
        return sv.substring(0,(sv.length - 1));
      };

      var info = {
        original: v,
        datePart: null,
        timePart: null,
        input: null,
        date: null
      };

      var a,s,s2;

      if ((v !== null) && (typeof v === "number")) {
        v = ""+v;
        if (!isFinite(v)) v = null;
        else v = ""+v;
      }

      if ((v !== null) && (typeof v === "string")) {
        v = lang.trim(v);
        if (v.length === 0) {
          v = null;
        } else {
          a = v.split("T");
          a[0] = lang.trim(a[0]);
          if (a[0].length > 0) {
            info.datePart = a[0];
          }
          if (a.length > 1) {
            a[1] = lang.trim(a[1]);
            if (a[1].length > 0) info.timePart = a[1];
          }
        }
      }

      if ((info.datePart !== null) && (info.timePart !== null)) {
        info.input = info.datePart+"T"+info.timePart;
      } else if (info.datePart !== null) {
        s = info.datePart;
        if (!endsWith(s,"Z")) {
          info.input = info.datePart;
        } else {
          s = trimLast(s,"Z");
          a = s.split("-");
          s2 = "T00:00:00.0Z";
          if (a.length === 1) info.input = s+"-01-01"+s2;
          else if (a.length === 2) info.input = s+"-01"+s2;
          else if (a.length === 3) info.input = s+s2;
        }
      }

      if (info.input !== null) {
        info.date = stamp.fromISOString(info.input);
      }

      //console.warn(info.original," = ",info.input," = ",info.date);

      return info;
    }
    */

  };

  

  return oThisObject;
});