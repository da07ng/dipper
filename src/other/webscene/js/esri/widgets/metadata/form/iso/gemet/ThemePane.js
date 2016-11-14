define(["../../../../../core/declare",
        "dojo/_base/lang",
        "dojo/_base/array",
        "dojo/dom-construct",
        "dojo/has",
        "../../../base/Templated",
        "dojo/text!./templates/ThemePane.html",
        "dojo/i18n!../../../nls/i18nBase",
        "dojo/i18n!../../../nls/i18nIso",
        "../../../base/etc/docUtil",
        "./gemet",
        "../../../../../request",
        "../../../../../kernel"],
function(declare, lang, array, domConstruct, has, Templated, template,
         i18nBase, i18nIso, docUtil, gemet, esriRequest, esriKernel) {

  var oThisClass = declare([Templated], {

    checkBoxes: null,
    dialogBroker: null,
    gxeDocument: null,
    initiallySelectedValues: null,
    i18nBase: i18nBase,
    i18nIso: i18nIso,
    templateString: template,

    gemetUrl: null,
    gemetInspireThemeThesaurus: null,
    initialLanguage: null,
    _activePromise: null,

    postCreate: function() {
      this.inherited(arguments);
      this.workingNode.style.display = "none";
      this.checkBoxes = [];
      var gxeContext = this.gxeDocument.gxeContext;
      this.gemetUrl = gxeContext.gemetUrl;
      this.gemetInspireThemeThesaurus = gxeContext.gemetInspireThemeThesaurus;
      gemet.populateLanguages(this.gxeDocument, this.languageSelect);
      this.initialLanguage = gemet.getSelectedLanguage(this.languageSelect);
      this._query();
    },

    _addOption: function(item, index, parentNode) {
      //item.preferredLabel.uri is a key for the theme
      var lbl = "Unknown", dsc = null;
      if(item.preferredLabel) {
        if(typeof item.preferredLabel.string === "string") {
          lbl = lang.trim(item.preferredLabel.string);
        }
      }
      if(item.definition) {
        if(typeof item.definition.string === "string") {
          dsc = lang.trim(item.definition.string);
          if(dsc.length === 0) {
            dsc = null;
          }
        }
      }

      var id = this.id + "_chk" + index;
      var nd = domConstruct.create("div", {"class": "gxeOption"}, parentNode);
      var val = lbl;
      var bSel = array.some(this.initiallySelectedValues, function(v) {
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

      var ndDsc;
      if((dsc !== null ) && (dsc.length > 0)) {
        ndDsc = domConstruct.create("div", {"class": "gxeDescription gxeSmallText"}, nd);
        docUtil.setNodeText(ndDsc, dsc);
      }
    },

    _fetch: function(language, regex) {
      var thesaurusUri = this.gemetInspireThemeThesaurus;
      var url = this.gemetUrl + "/getConceptsMatchingRegexByThesaurus";
      url += "?thesaurus_uri=" + encodeURIComponent(thesaurusUri);
      url += "&language=" + encodeURIComponent(language);
      url += "&regex=" + encodeURIComponent(regex);
      var params = {url: url, handleAs: "json", callbackParamName: "jsonp"};
      return esriRequest(params, {});
    },

    _handleError: function(err) {
      this.workingNode.style.display = "none";
      console.error(err);
      var url = this.gemetUrl;
      var msg = i18nIso.gemet.ioerror.replace("{url}", url);
      domConstruct.empty(this.resultsNode);
      var nd = domConstruct.create("div", {"class": "gxeMessagePane"}, this.resultsNode);
      domConstruct.create("div", {"class": "gxeIcon gxeIconError"}, nd);
      var ndMsg = domConstruct.create("div", {"class": "gxeMessageText"}, nd);
      docUtil.setNodeText(ndMsg, msg);
    },

    _onCancelClick: function(evt) {
      this.onCancelClick(evt);
    },

    onCancelClick: function(evt) {
    },

    _onLanguageChange: function(evt) {
      //console.warn("_onLanguageChange");
      this._query();
    },

    _onOkClick: function(evt) {
      var a = [], curLanguage = null;
      array.forEach(this.checkBoxes, function(cbx) {
        if(cbx.checked) {
          a.push(cbx.value);
        }
      });
      if(a.length > 0) {
        curLanguage = gemet.getSelectedLanguage(this.languageSelect);
        if(this.initialLanguage !== curLanguage) {
          gemet.saveSessionLanguage(curLanguage);
        }
      }
      this.onOkClick(a);
    },

    onOkClick: function(selectedValues) {
    },

    _query: function() {
      var language = gemet.getSelectedLanguage(this.languageSelect);
      var regex = ".";
      if(this._activePromise !== null) {
        return;
      }
      this.workingNode.style.display = "inline-block";
      domConstruct.empty(this.resultsNode);
      var promise = this._activePromise = this._fetch(language, regex);
      promise.then(
        lang.hitch(this, function(response) {
          this._activePromise = null;
          try {
            this._render(response);
          }
          catch(ex) {
            this._handleError(ex);
          }
        }),
        lang.hitch(this, function(err) {
          this._activePromise = null;
          this._handleError(err);
        })
      );
    },

    _render: function(response) {
      var n = 0, parentNode = this.resultsNode;
      domConstruct.empty(parentNode);
      this.checkBoxes = [];
      array.forEach(response, function(item, index) {
        n++;
        this._addOption(item, index, parentNode);
      }, this);
      this.workingNode.style.display = "none";
      var nd, ndMsg;
      if(n === 0) {
        domConstruct.empty(parentNode);
        nd = domConstruct.create("div", {"class": "gxeMessagePane"}, parentNode);
        domConstruct.create("div", {"class": "gxeIcon gxeIconWarning"}, nd);
        ndMsg = domConstruct.create("div", {"class": "gxeMessageText"}, nd);
        docUtil.setNodeText(ndMsg, i18nIso.gemet.noMatch);
      }
    }

  });

  

  return oThisClass;
});