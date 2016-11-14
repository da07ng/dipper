define(["../../../../core/declare",
        "dojo/_base/lang",
        "dojo/_base/array",
        "dojo/dom-construct",
        "dojo/has",
        "../../base/Templated",
        "dojo/text!./templates/TransformPane.html",
        "dojo/i18n!../../nls/i18nBase",
        "../../../../kernel"],
function(declare, lang, array, domConstruct, has, Templated, template, i18nBase, esriKernel) {

  var oThisClass = declare([Templated], {

    editor: null,
    dialogBroker: null,
    documentTypes: null,
    prompt: null,
    templateString: template,

    postCreate: function() {
      this.inherited(arguments);
      this._initialize();
    },

    onSelect: function(documentType) {
    },

    _addDocType: function(docType) {
      var nd = domConstruct.create("div", {}, this.typesNode);
      var ndType = domConstruct.create("div", {
        "class": "gxeClickableText gxeLine",
        onclick: lang.hitch(this, function() {
          this._selectDocType(docType);
        })
      }, nd);
      this.setI18nNodeText(ndType, docType.caption);
    },

    _initialize: function() {
      if(this.prompt !== null) {
        this.setI18nNodeText(this.promptNode, this.prompt);
        this.promptNode.style.display = "";
      }
      var docTypes = this.documentTypes;
      array.forEach(docTypes, function(docType) {
        this._addDocType(docType);
      }, this);

    },

    _selectDocType: function(docType) {
      this.onSelect(docType);
    }

  });

  

  return oThisClass;
});