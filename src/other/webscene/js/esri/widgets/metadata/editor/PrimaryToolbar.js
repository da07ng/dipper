define(["../../../core/declare",
        "dojo/_base/lang",
        "dojo/_base/array",
        "dojo/Deferred",
        "dojo/_base/fx",
        "dojo/dom-class",
        "dojo/dom-style",
        "dojo/has",
        "dojo/query",
        "../base/Templated",
        "./PrimaryToolbarMixin",
        "dojo/text!./templates/PrimaryToolbar.html",
        "dojo/i18n!../nls/i18nBase",
        "../base/TabButton",
        "../base/ValidationTracker",
        "./util/MessageDialog",
        "../../../kernel"],
function(declare, lang, array, Deferred, fx, domClass, domStyle, has, query,
         Templated, PrimaryToolbarMixin, template, i18nBase, TabButton, ValidationTracker, MessageDialog, esriKernel) {

  var oThisClass = declare([Templated, PrimaryToolbarMixin], {

    _disabled: true,
    _mode: null,
    editor: null,
    lastSavedXml: null,
    templateString: template,

    canDownloadFiles: false,

    postCreate: function() {
      this.inherited(arguments);
      //domStyle.set(this.saveAndCloseButton,"display","none");
    },

    initialize: function() {
      var allowEdit = this.editor.gxeAdaptor.getAllowEditMetadata();
      if(!allowEdit) {
        domStyle.set(this.editButton.domNode, "display", "none");
      }
      this.updateUI();
    },

    initializeView: function() {
      this._initializeView();
    },

    _checkForChanges: function(title, okLabel) {
      var deferred = new Deferred();
      var doc = this.editor.getEditDocument();
      if(!doc) {
        deferred.resolve(true);
        return deferred;
      }
      var validationTracker = new ValidationTracker({ignoreErrors: true});
      var xmlString = doc.generateXml(validationTracker);
      if(xmlString === this.lastSavedXml) {
        deferred.resolve(true);
        return deferred;
      }
      var d = new MessageDialog({
        title: title,
        okLabel: okLabel,
        cancelIsProminent: true,
        onOkClick: function(evt) {
          deferred.resolve(true);
        },
        onCancelClick: function(evt) {
          deferred.resolve(false);
        }
      });
      d.show(i18nBase.editor.changesNotSaved.prompt);
      return deferred;
    },

    _close: function() {
      if(this.editor.dialogBroker && this.editor.dialogBroker.dialog) {
        this.editor.dialogBroker.hide();
      }
    },

    _fadeIn: function(fCallback) {
      domStyle.set(this.messageArea, "display", "none");
      domStyle.set(this.workingIcon, "display", "none");
      this.workingNode.innerHTML = "";
      fx.fadeIn({
        node: this.editor.canvasNode,
        onEnd: lang.hitch(this, function() {
          this._disabled = false;
          this.updateUI();
          if(fCallback) {
            fCallback();
          }
        })
      }).play();
    },

    _fadeOut: function(message, fCallback) {
      this._disabled = true;
      domStyle.set(this.messageArea, "display", "inline-block");
      //domStyle.set(this.workingIcon,"display","inline-block");
      this.setNodeText(this.workingNode, message);
      array.forEach(query("button", this.domNode), function(nd) {
        nd.disabled = true;
      });
      fx.fadeOut({
        node: this.editor.canvasNode,
        onEnd: lang.hitch(this, function() {
          if(fCallback) {
            fCallback();
          }
        })
      }).play();
    },

    _onCloseClick: function() {
      if(this._disabled) {
        return;
      }
      var title = i18nBase.editor.changesNotSaved.dialogTitle;
      var okLabel = i18nBase.editor.changesNotSaved.closeButton;
      this._checkForChanges(title, okLabel).then(
        lang.hitch(this, function(bContinue) {
          if(bContinue) {
            this._close();
          }
        })
      );
    },

    _onDeleteClick: function() {
      if(this._disabled) {
        return;
      }
      this._confirmAndDelete();
    },

    _onDownloadClick: function() {
      if(this._disabled) {
        return;
      }
      var xmlString = this.editor.xmlPane.xmlString;
      var xmlTitle = this.editor.xmlPane.xmlTitle;
      if(xmlString != null) {
        this._download(xmlString, xmlTitle, false);
      }
    },

    _onEditClick: function(tabButton) {
      if(this._disabled) {
        return;
      }
      var doc = this.editor.getEditDocument();
      this._setMode("edit");
      if(!doc) {
        this._loadEditor();
      }
    },

    _onLoadClick: function() {
      if(this._disabled) {
        return;
      }
      this._showLoadDialog(null);
    },

    _onSaveClick: function() {
      if(this._disabled) {
        return;
      }
      var allowPushToItem = this.editor.gxeAdaptor.getAllowPushToItem();
      var params = {isSaveAsDraft: false, isSaveAndClose: false, bPushToItem: false, showDialog: false};
      if(allowPushToItem) {
        params.bPushToItem = true;
      }
      this._save(params);
    },

    _onSaveAndCloseClick: function() {
      if(this._disabled) {
        return;
      }
      var allowPushToItem = this.editor.gxeAdaptor.getAllowPushToItem();
      var params = {isSaveAsDraft: false, isSaveAndClose: true, bPushToItem: false, showDialog: false};
      if(allowPushToItem) {
        params.bPushToItem = true;
      }
      this._save(params);
    },

    _onSaveDraftClick: function() {
      if(this._disabled) {
        return;
      }
      var params = {isSaveAsDraft: true, isSaveAndClose: false, bPushToItem: false, showDialog: false};
      this._save(params);
    },

    _onTransformClick: function() {
      if(this._disabled) {
        return;
      }
      var doc = this.editor.getEditDocument();
      if(!doc) {
        return;
      }
      var docTypes = this._getTransformationTypes(doc);
      if(docTypes.length > 0) {
        this._showTransformDialog(doc, docTypes);
      }
    },

    _onViewClick: function() {
      if(this._disabled) {
        return;
      }
      this._loadView();
    },

    _onViewXmlClick: function() {
      if(this._disabled) {
        return;
      }
      var doc = this.editor.getEditDocument();
      if(!doc) {
        this._setMode("viewXml");
        return;
      }
      var validationTracker = new ValidationTracker({ignoreErrors: true});
      var xmlString = doc.generateXml(validationTracker);
      this.editor.xmlPane.setXml(xmlString, validationTracker.documentTitle);
      this._setMode("viewXml");
      this.updateUI();
    },

    _setMode: function(mode) {
      if(mode === "view") {
        domClass.add(this.viewButton.domNode, "current");
        domClass.remove(this.viewXmlButton.domNode, "current");
        domClass.remove(this.editButton.domNode, "current");
        domStyle.set(this.editToolset, "display", "none");
        domStyle.set(this.viewToolset, "display", "");
        this.editor.validationPane.clearMessages();
        domStyle.set(this.editor.xmlPane.domNode, "display", "none");
        domStyle.set(this.editor.editDocumentPane.domNode, "display", "none");
        domStyle.set(this.editor.viewDocumentPane.domNode, "display", "");
        this.editor.resizeDocument(this.editor.viewDocumentPane);
      } else if(mode === "viewXml") {
        domClass.add(this.viewXmlButton.domNode, "current");
        domClass.remove(this.viewButton.domNode, "current");
        domClass.remove(this.editButton.domNode, "current");
        domStyle.set(this.editToolset, "display", "none");
        domStyle.set(this.viewToolset, "display", "");
        this.editor.validationPane.clearMessages();
        domStyle.set(this.editor.viewDocumentPane.domNode, "display", "none");
        domStyle.set(this.editor.editDocumentPane.domNode, "display", "none");
        domStyle.set(this.editor.xmlPane.domNode, "display", "");
        this.editor.resizeXmlPane();
      } else if(mode === "edit") {
        domClass.add(this.editButton.domNode, "current");
        domClass.remove(this.viewButton.domNode, "current");
        domClass.remove(this.viewXmlButton.domNode, "current");
        domStyle.set(this.viewToolset, "display", "none");
        domStyle.set(this.editToolset, "display", "");
        domStyle.set(this.editor.viewDocumentPane.domNode, "display", "none");
        domStyle.set(this.editor.xmlPane.domNode, "display", "none");
        domStyle.set(this.editor.editDocumentPane.domNode, "display", "");
        this.editor.resizeDocument(this.editor.editDocumentPane);
      }
      this._mode = mode;
      this.updateUI();
    },

    updateUI: function() {

      var enableDisable = function(node, enabled) {
        node.disabled = !enabled;
        if(enabled) {
          domStyle.set(node, "display", "");
        } else {
          domStyle.set(node, "display", "none");
        }
      };

      var xmlString = this.editor.xmlPane.xmlString;
      var xmlTitle = this.editor.xmlPane.xmlTitle;
      var doc = this.editor.getEditDocument();
      var transformationTypes = this._getTransformationTypes(doc);

      var hasDoc = (doc !== null);
      var allowEdit = this.editor.gxeAdaptor.getAllowEditMetadata();
      var allowDelete = this.editor.gxeAdaptor.getAllowDeleteMetadata();
      var canDownload = ((xmlString !== null) && (xmlTitle !== null));
      var canSave = (allowEdit && hasDoc);
      var canTransform = (transformationTypes.length > 0);
      var canDelete = (allowDelete && (this.lastSavedXml !== null));
      var canClose = (this.editor && this.editor.dialogBroker);

      enableDisable(this.downloadButton, canDownload);
      enableDisable(this.saveButton, canSave);
      enableDisable(this.saveAndCloseButton, (canSave && canClose));
      enableDisable(this.saveDraftButton, hasDoc);
      enableDisable(this.loadButton, true);
      enableDisable(this.transformButton, canTransform);
      enableDisable(this.deleteButton, canDelete);
      enableDisable(this.closeButton, canClose);
    }

  });

  

  return oThisClass;
});