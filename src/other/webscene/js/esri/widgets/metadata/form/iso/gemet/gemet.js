define(["dojo/_base/lang",
        "dojo/_base/array",
        "dojo/query",
        "dojo/has",
        "dijit/registry",
        "dojo/i18n!../../../nls/i18nIso",
        "../../../../../kernel"],
function(lang, array, query, has, registry, i18nIso, esriKernel) {

  var session = {
    conceptQuery: null,
    language: null
  };

  var languageIndex = {
    bul: "bg",
    cze: "cs",
    dan: "da",
    dut: "nl",
    eng: "en",
    est: "et",
    fin: "fi",
    fre: "fr",
    ger: "de",
    gre: "el",
    hun: "hu",
    gle: "ga",
    ita: "it",
    lav: "lv",
    lit: "lt",
    mlt: "mt",
    pol: "pl",
    por: "pt",
    rum: "ro",
    slo: "sk",
    slv: "sl",
    spa: "es",
    swe: "sv"
  };

  var oThisObject = {

    getSelectedLanguage: function(languageSelect) {
      var nSel = languageSelect.selectedIndex;
      if(nSel !== -1) {
        return languageSelect.options[nSel].value;
      }
      return "en";
    },

    getSessionConceptQuery: function() {
      return session.conceptQuery;
    },

    populateLanguages: function(gxeDocument, languageSelect) {
      var el, nl, path = "/gmd:MD_Metadata/gmd:language/gmd:LanguageCode/@codeListValue";
      //var language = docLanguage = sProp = oProp = null; // JSHint - leaking docLanguage, sProp, oProp variables. oProp unused
      var language = null,
        docLanguage = null,
        sProp = null;
      var sessionLanguage = session.language;

      if((typeof sessionLanguage !== "undefined") && (sessionLanguage !== null)) {
        language = sessionLanguage;
      } else {
        nl = query("[data-gxe-path='" + path + "']", gxeDocument.rootDescriptor.domNode);
        if(nl && (nl.length === 1)) {
          el = registry.byNode(nl[0]);
          if(el && el.inputWidget) {
            docLanguage = el.inputWidget.getInputValue();
            if(docLanguage in languageIndex) {
              language = languageIndex[docLanguage];
            } else {
              for(sProp in languageIndex) {
                if(languageIndex.hasOwnProperty(sProp)) {
                  if(languageIndex[sProp] === docLanguage) {
                    language = docLanguage;
                    break;
                  }
                }
              }
            }
          }
        }
      }
      if((typeof language === "undefined") || (language === null)) {
        // TODO determine language from locale?
        language = "en";
      }

      var selectOptions = languageSelect.options;
      var a = [], b, languages = i18nIso.gemet.languages;
      for(sProp in languages) {
        if(languages.hasOwnProperty(sProp)) {
          b = (sProp === language);
          a.push(new Option(languages[sProp], sProp, false, b));
        }
      }
      a.sort(function(o1, o2) {
        if(o1.label === o2.label) {
          return 0;
        }
        if(o1.label > o2.label) {
          return 1;
        }
        return -1;
      });
      array.forEach(a, function(o) {
        selectOptions.add(o);
      });
    },

    saveSessionConceptQuery: function(conceptQuery) {
      session.conceptQuery = conceptQuery;
    },

    saveSessionLanguage: function(language) {
      session.language = language;
    }

  };

  

  return oThisObject;
});