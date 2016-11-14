define(["../../../../../core/declare",
        "dojo/_base/lang",
        "dojo/_base/array",
        "dojo/on",
        "dojo/keys",
        "dojo/dom-construct",
        "dojo/has",
        "../../../base/Templated",
        "dojo/text!./templates/ConceptPane.html",
        "dojo/i18n!../../../nls/i18nBase",
        "dojo/i18n!../../../nls/i18nIso",
        "../../../base/etc/docUtil",
        "./gemet",
        "../../../../../request",
        "../../../../../kernel"],
function(declare, lang, array, on, keys, domConstruct, has, Templated, template,
         i18nBase, i18nIso, docUtil, gemet, esriRequest, esriKernel) {

  var oThisClass = declare([Templated], {

    dialogBroker: null,
    gxeDocument: null,
    initialValue: null,
    i18nBase: i18nBase,
    i18nIso: i18nIso,
    templateString: template,

    gemetUrl: null,
    gemetConceptThesaurus: null,
    initialLanguage: null,
    _activePromise: null,

    postCreate: function() {
      this.inherited(arguments);
      this.workingNode.style.display = "none";
      var gxeContext = this.gxeDocument.gxeContext;
      this.gemetUrl = gxeContext.gemetUrl;
      this.gemetConceptThesaurus = gxeContext.gemetConceptThesaurus;
      gemet.populateLanguages(this.gxeDocument, this.languageSelect);
      this.initialLanguage = gemet.getSelectedLanguage(this.languageSelect);
      this.searchText.value = gemet.getSessionConceptQuery();
      this._query();

      this.own(on(this.searchText, "keyup", lang.hitch(this, function(evt) {
        if(evt.keyCode == keys.ENTER) {
          this._query();
        }
      })));
    },

    _addOption: function(item, index, parentNode) {
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

      var val = lbl, oThis = this;
      var nd = domConstruct.create("div", {"class": "gxeOption"}, parentNode);
      var ndLbl = domConstruct.create("div", {
        "class": "gxeClickableText",
        onclick: function() {
          oThis._onSelect(val);
        }
      }, nd);
      docUtil.setNodeText(ndLbl, lbl);

      var ndDsc;
      if((dsc !== null ) && (dsc.length > 0)) {
        ndDsc = domConstruct.create("div", {"class": "gxeDescription gxeSmallText"}, nd);
        docUtil.setNodeText(ndDsc, dsc);
      }
    },

    _fetch: function(language, regex) {
      var thesaurusUri = this.gemetConceptThesaurus;
      var url = this.gemetUrl + "/getConceptsMatchingRegexByThesaurus";
      url += "?thesaurus_uri=" + encodeURIComponent(thesaurusUri);
      url += "&language=" + encodeURIComponent(language);
      url += "&regex=" + encodeURIComponent(regex);
      var params = {url: url, handleAs: "json", callbackParamName: "jsonp"};
      return esriRequest(params, {});
    },

    _getSearchText: function() {
      var s = lang.trim(this.searchText.value);
      return s;
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
      this._query();
    },

    _onSearchClick: function(evt) {
      this._query();
    },

    _onSelect: function(selectedValue) {
      var curLanguage = gemet.getSelectedLanguage(this.languageSelect);
      if(this.initialLanguage !== curLanguage) {
        gemet.saveSessionLanguage(curLanguage);
      }
      this.onSelect(selectedValue);
    },

    onSelect: function(selectedValue) {
    },

    _query: function() {
      var language = gemet.getSelectedLanguage(this.languageSelect);
      var text = this._getSearchText();
      if((text === null) || (text.length === 0)) {
        return;
      }
      if(this._activePromise !== null) {
        return;
      }
      this.workingNode.style.display = "inline-block";
      domConstruct.empty(this.resultsNode);
      var promise = this._activePromise = this._fetch(language, text);
      promise.then(
        lang.hitch(this, function(response) {
          this._activePromise = null;
          try {
            this._render(response, text);
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

    _render: function(response, searchText) {
      var n = 0, parentNode = this.resultsNode;
      domConstruct.empty(parentNode);
      array.forEach(response, function(item, index) {
        n++;
        this._addOption(item, index, parentNode);
      }, this);
      this.workingNode.style.display = "none";
      var nd, ndMsg;
      if(n === 0) {
        domConstruct.empty(parentNode);
        nd = domConstruct.create("div", {"class": "gxeMessagePane"}, this.resultsNode);
        domConstruct.create("div", {"class": "gxeIcon gxeIconWarning"}, nd);
        ndMsg = domConstruct.create("div", {"class": "gxeMessageText"}, nd);
        docUtil.setNodeText(ndMsg, i18nIso.gemet.noMatch);
      } else {
        gemet.saveSessionConceptQuery(searchText);
      }
    }

  });

  

  return oThisClass;
});