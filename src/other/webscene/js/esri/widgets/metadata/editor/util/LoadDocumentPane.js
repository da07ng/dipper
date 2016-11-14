define(["../../../../core/declare",
        "dojo/_base/lang",
        "dojo/_base/array",
        "dojo/aspect",
        "dojo/dom-class",
        "dojo/dom-construct",
        "dojo/dom-style",
        "dojo/has",
        "../../base/xml/xmlUtil",
        "../../base/xml/XmlInterrogator",
        "../../base/Templated",
        "dojo/text!./templates/LoadDocumentPane.html",
        "dojo/i18n!../../nls/i18nBase",
        "../../base/TabButton",
        "../../../../kernel"],
function(declare, lang, array, aspect, domClass, domConstruct, domStyle, has,
         xmlUtil, XmlInterrogator, Templated, template, i18nBase, TabButton, esriKernel) {

  var oThisClass = declare([Templated], {

    _inputFileNode: null,
    _working: false,
    editor: null,
    dialogBroker: null,
    prompt: null,
    templateString: template,

    postCreate: function() {
      this.inherited(arguments);
      this.fileSection.xtnAsTemplate = false;
      this._initialize();
    },


    onSelect: function(documentType, xmlDocument, asTemplate) {
    },

    onSelectPullItem: function() {
    },

    _addBrowseButton: function() {
      var nd = domConstruct.create("div", {}, this.importNode);
      this._inputFileNode = domConstruct.create("input", {
        "class": "gxeLine",
        "type": "file",
        onchange: lang.hitch(this, function(evt) {
          this._loadXmlFile(evt);
        })
      }, nd);
    },

    _addDocType: function(docType) {
      var nd = domConstruct.create("div", {}, this.typesNode);
      var ndType = domConstruct.create("div", {
        "class": "gxeClickableText gxeLine",
        onclick: lang.hitch(this, function() {
          if(!this._working) {
            this._loadDocType(docType);
          }
        })
      }, nd);
      this.setI18nNodeText(ndType, docType.caption);
    },

    _initialize: function() {
      if(this.prompt !== null) {
        this.setI18nNodeText(this.promptNode, this.prompt);
        this.promptNode.style.display = "";
      }
      var doc = this.editor.getEditDocument();
      var hasFileReader = (window && window.FileReader);
      var allowPullItem = (doc && this.editor.gxeAdaptor.getAllowPullItem());
      var docTypes = this.editor.gxeContext.filterDocumentTypes();
      this._setMode("type");
      array.forEach(docTypes, function(docType) {
        this._addDocType(docType);
      }, this);
      if(hasFileReader) {
        this._addBrowseButton();
      } else {
        domStyle.set(this.fileTab.domNode, "display", "none");
        domStyle.set(this.templateTab.domNode, "display", "none");
      }
      if(!allowPullItem) {
        domStyle.set(this.itemTab.domNode, "display", "none");
      }
    },

    _loadDocType: function(docType) {
      if(!this._working) {
        this.onSelect(docType, null, false);
      }
    },

    _loadXmlFile: function(evt) {
      // TODO handle the non-HTML5 case
      this.importWarningNode.innerHTML = "";
      this.importWarningSection.style.display = "none";

      if(!evt || !evt.target || !evt.target.files) {
        return; // TODO message here?
      }
      if(!FileReader) {
        return; // TODO message here?
      }

      var file = null, files = evt.target.files;
      if(files && (files.length === 1)) {
        file = files[0];
      }
      if(!file) {
        return; // TODO message here?
      }

      // TODO message here?
      //if (file.type !== "text.xml") {}

      //console.log("file",file);
      this._showMessage(i18nBase.editor.load.loading);
      var reader = new FileReader();
      this.own(aspect.after(reader, "onload", lang.hitch(this, function(e) {
        if(e && e.target && e.target.result) {
          //text = e.target.result; // JSHint - variable text not used
          if(!this._working) {
            this._showMessage(i18nBase.editor.load.loading);
            this._parseAndLoad(e.target.result);
          }
        } else {
          this._showUnrecognizedXml(i18nBase.editor.load.warnings.badFile);
        }
      }), true));
      reader.readAsText(file);
    },

    _onFileTabClick: function(tabButton) {
      if(this._working) {
        return;
      }
      this._setMode(tabButton.xtnMode);
    },

    _onItemTabClick: function(tabButton) {
      if(this._working) {
        return;
      }
      this._setMode(tabButton.xtnMode);
    },

    _onPullItemClick: function() {
      if(this._working) {
        return;
      }
      this.onSelectPullItem();
    },

    _onTemplateTabClick: function(tabButton) {
      if(this._working) {
        return;
      }
      this._setMode(tabButton.xtnMode);
    },

    _onTypeTabClick: function(tabButton) {
      if(this._working) {
        return;
      }
      this._setMode(tabButton.xtnMode);
    },

    _parseAndLoad: function(xmlString) {
      var xmlDoc = null;
      try {
        xmlDoc = xmlUtil.parseFromString(xmlString);
      } catch(ex) {
        console.error(ex);
        this._showUnrecognizedXml(i18nBase.editor.load.warnings.badFile);
        return;
      }
      var docTypes = this.editor.gxeContext.filterDocumentTypes();
      var interrogator = new XmlInterrogator();
      var docType = interrogator.interrogate(xmlDoc, docTypes);
      var asTemplate = this.fileSection.xtnAsTemplate;
      if(!docType) {
        this._showUnrecognizedXml(i18nBase.editor.load.warnings.notSupported);
      } else {
        this.onSelect(docType, xmlDoc, asTemplate);
      }
    },

    _setMode: function(mode) {
      var a = [this.typeTab, this.fileTab, this.templateTab, this.itemTab];
      array.forEach(a, function(tab) {
        if(mode === tab.xtnMode) {
          domClass.add(tab.domNode, "current");
        } else {
          domClass.remove(tab.domNode, "current");
        }
      });
      this.fileSection.xtnAsTemplate = (mode === "template");
      if(mode === "type") {
        domStyle.set(this.fileSection, "display", "none");
        domStyle.set(this.itemSection, "display", "none");
        domStyle.set(this.typesSection, "display", "");
      } else if(mode === "item") {
        domStyle.set(this.typesSection, "display", "none");
        domStyle.set(this.fileSection, "display", "none");
        domStyle.set(this.itemSection, "display", "");
      } else {
        if(mode === "file") {
          domStyle.set(this.templatePrompt, "display", "none");
          domStyle.set(this.filePrompt, "display", "");
        } else {
          domStyle.set(this.filePrompt, "display", "none");
          domStyle.set(this.templatePrompt, "display", "");
        }
        domStyle.set(this.typesSection, "display", "none");
        domStyle.set(this.itemSection, "display", "none");
        domStyle.set(this.fileSection, "display", "");
      }
    },

    _showMessage: function(message) {
      if(!this.dialogBroker) {
        return;
      }
      var okCancel = this.dialogBroker.okCancelBar;
      if(okCancel) {
        okCancel.showWorking(message);
      }
    },

    _showUnrecognizedXml: function(message) {
      this.setNodeText(this.importWarningNode, i18nBase.editor.load.importWarning);
      this.importWarningSection.style.display = "block";
      if(this.dialogBroker && this.dialogBroker.okCancelBar) {
        this.dialogBroker.okCancelBar.hideWorking();
      }
    }

  });

  

  return oThisClass;
});