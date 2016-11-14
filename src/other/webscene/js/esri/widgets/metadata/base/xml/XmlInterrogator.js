define(["../../../../core/declare",
        "dojo/_base/lang",
        "dojo/_base/array",
        "dojo/has",
        "./XmlFlattener",
        "./xmlUtil",
        "../../../../kernel"],
function(declare, lang, array, has, XmlFlattener, xmlUtil, esriKernel) {

  var oThisClass = declare(null, {

    constructor: function(args) {
      lang.mixin(this, args);
    },

    interrogate: function(xmlDocument, documentTypeList) {
      var flattener = new XmlFlattener();
      var flattened = flattener.flatten(xmlDocument);
      var prefixesByUri = flattened.prefixesByUri;
      var valuesByPath = flattened.valuesByPath;

      var matchIndex = {};
      array.forEach(documentTypeList, function(docType) {
        var rules = docType.interrogationRules;
        if(!rules || (rules.length === 0)) {
          return;
        }
        var gxeUrisByPrefix = xmlUtil.makeGxeUrisByPrefix(docType.getNamespaces());
        var key = docType.key, nRules = rules.length, nRulesMatched = 0, mustViolated = false;
        array.forEach(rules, function(rule) {
          var path = rule.path, transPath, bMatched;
          if(path) {
            transPath = this._transformPath(prefixesByUri, gxeUrisByPrefix, path);
            bMatched = this._evaluateMatch(valuesByPath, transPath, rule);
            if(bMatched) {
              nRulesMatched++;
            } else if(rules.must) {
              mustViolated = true;
              return;
            }
          }
        }, this);
        if(!mustViolated && (nRulesMatched > 0)) {
          matchIndex[key] = {nRules: nRules, nRulesMatched: nRulesMatched};
        }
      }, this);

      var match = {documentType: null, nRules: 0, nRulesMatched: 0};
      array.forEach(documentTypeList, function(docType) {
        var key = docType.key, info = null;
        if(key in matchIndex) {
          info = matchIndex[key];
          if(match.documentType === null) {
            match.documentType = docType;
            match.nRules = info.nRules;
            match.nRulesMatched = info.nRulesMatched;
          } else {
            if((info.nRulesMatched > match.nRulesMatched) && (info.nRules === info.nRulesMatched)) {
              match.documentType = docType;
              match.nRules = info.nRules;
              match.nRulesMatched = info.nRulesMatched;
            }
          }
        }
      });

      return match.documentType;
    },

    _evaluateMatch: function(valuesByPath, transformedPath, rule) {
      var bMatched = false, value = null, values;
      if(typeof rule.value !== "undefined") {
        value = rule.value;
      }
      if(transformedPath in valuesByPath) {
        if(value === null) {
          return true;
        }
        values = valuesByPath[transformedPath];
        bMatched = array.some(values, function(v) {
          return (value === v);
        });
      }
      return bMatched;
    },

    _transformPath: function(prefixesByUri, gxeUrisByPrefix, path) {
      var parts = [], parts2, pfx, uri;
      array.forEach(path.split("/"), function(part) {
        var bAttr = (part.indexOf("@") !== -1);
        parts2 = part.replace("@", "").split(":");
        if(parts2.length === 2) {
          pfx = null;
          uri = gxeUrisByPrefix[parts2[0]];
          if(uri) {
            pfx = prefixesByUri[uri];
          }
          if(pfx) {
            if(bAttr) {
              pfx = "@" + pfx;
            }
            parts.push(pfx + ":" + parts2[1]);
          } else {
            parts.push(part);
          }
        } else {
          parts.push(part);
        }
      });
      return parts.join("/");
    }

  });

  

  return oThisClass;
});