define(["../../../core/declare",
        "dojo/_base/lang",
        "dojo/_base/array",
        "dojo/dom-class",
        "dojo/dom-style",
        "dojo/has",
        "dojo/i18n!../nls/i18nBase",
        "../base/ValidationTracker",
        "../base/xml/XmlInterrogator",
        "../base/xml/xmlUtil",
        "./util/DownloadXmlDialog",
        "./util/LoadDocumentDialog",
        "./util/MessageDialog",
        "./util/SaveDocumentDialog",
        "./util/TransformDialog",
        "../base/transform/Iso2IsoTransformer",
        "../../../kernel"],
function(declare, lang, array, domClass, domStyle, has, i18nBase, ValidationTracker,
         XmlInterrogator, xmlUtil, DownloadXmlDialog, LoadDocumentDialog, MessageDialog,
         SaveDocumentDialog, TransformDialog, Iso2IsoTransformer, esriKernel) {

  var oThisClass = declare(null, {

    constructor: function(args) {
      lang.mixin(this, args);
    },

    _confirmAndDelete: function() {
      if(!this.editor.gxeAdaptor.getAllowEditMetadata()) {
        return;
      }
      if(!this.editor.gxeAdaptor.getAllowDeleteMetadata()) {
        return;
      }
      var canClose = (this.editor && this.editor.dialogBroker);
      var d = new MessageDialog({
        title: i18nBase.editor.del.dialogTitle,
        okLabel: i18nBase.editor.del.caption,
        onOkClick: lang.hitch(this, function() {
          var d2 = new MessageDialog({
            title: i18nBase.editor.del.dialogTitle,
            showOkCancelBar: false
          });
          d2.show(i18nBase.editor.del.working).then(lang.hitch(this, function() {
            this.editor.gxeAdaptor.deleteMetadata({}).then(
              lang.hitch(this, function() {
                this.lastSavedXml = null;
                setTimeout(lang.hitch(this, function() {
                  d2.hide();
                  if(canClose) {
                    this._close();
                  }
                  //else {
                  //  // TODO this use case isn't defined
                  //}
                }), 1500);
              }),
              lang.hitch(this, function(err) {
                d2.hide();
                var msg = i18nBase.editor.del.errorDeleting;
                this._handleError(msg, err, true);
              })
            );
          }));
        })
      });
      d.show(i18nBase.editor.del.prompt);
    },

    _executeSave: function(gxeDocument, xmlString, isSaveAndClose, bPushToItem) {
      if(!this.editor.gxeAdaptor.getAllowEditMetadata()) {
        return;
      }
      var d = new MessageDialog({
        title: i18nBase.editor.save.dialogTitle,
        showOkCancelBar: false
      });
      d.show(i18nBase.editor.save.working).then(lang.hitch(this, function() {
        this.editor.gxeAdaptor.saveXml(gxeDocument, xmlString, bPushToItem).then(
          lang.hitch(this, function() {
            this.lastSavedXml = xmlString;
            setTimeout(lang.hitch(this, function() {
              d.hide();
              if(isSaveAndClose) {
                this._close();
              }
            }), 1500);
          }),
          lang.hitch(this, function(err) {
            d.hide();
            var msg = i18nBase.editor.save.errorSaving;
            this._handleError(msg, err, true);
          })
        );
      }));
    },

    _download: function(xmlString, documentTitle, isSaveAsDraft) {
      if(documentTitle === null) {
        documentTitle = "metadata";
      }
      var d, s, fileName = documentTitle + ".xml";
      if(window.navigator && window.navigator.msSaveOrOpenBlob) {
        window.navigator.msSaveOrOpenBlob(new Blob([xmlString], {type: "text/xml"}), fileName);
      } else {
        s = i18nBase.editor.download.dialogTitle;
        if(isSaveAsDraft) {
          s = i18nBase.editor.saveDraft.dialogTitle;
        }
        d = new DownloadXmlDialog({dialogTitle: s});
        d.show(xmlString, documentTitle);
      }
    },

    _getTransformationTypes: function(doc) {
      var docTypes = [];
      //var doc = this.editor.getEditDocument(); // JSHint - duplicate variable definition
      doc = this.editor.getEditDocument();
      if(!doc) {
        return docTypes;
      }
      if(!doc.documentType.isIso) {
        return docTypes;
      }
      array.forEach(this.editor.gxeContext.filterDocumentTypes(), function(docType) {
        if(docType.key !== doc.documentType.key) {
          // Just Iso2Iso for now
          if(docType.isIso && doc.documentType.isIso) {
            docTypes.push(docType);
          }
        }
      });
      return docTypes;
    },

    _handleError: function(msg, err, popup) {
      if(err) {
        console.error(err);
      }
      if(!popup) {
        return;
      }
      var d = new MessageDialog({
        title: i18nBase.editor.errorDialog.dialogTitle,
        showOk: false,
        cancelLabel: i18nBase.general.close
      });
      d.show(msg, "gxeIconError", err);
    },

    _initializeView: function() {

      var enableView = lang.hitch(this, function(mode, bNoMetadata) {
        domStyle.set(this.commonToolset, "display", "");
        if(bNoMetadata && this.editor.gxeAdaptor.getAllowEditMetadata()) {
          this._setMode("edit");
          this._fadeIn(lang.hitch(this, function() {
            this._showLoadDialog(i18nBase.editor.load.noMetadata);
          }));
        } else {
          this._setMode(mode);
          this._fadeIn();
        }
      });

      var docPane = this.editor.viewDocumentPane;
      var docType, xmlString = null, xmlDoc;
      var info = this._parseXml(this.editor.gxeAdaptor.getOriginalXml());
      if(info.documentType) {
        docType = info.documentType;
        xmlString = info.xmlString;
        xmlDoc = info.xmlDocument;
      } else {
        if(info.xmlDocument) {
          docPane.showMessage(i18nBase.editor.xmlViewOnly);
          enableView("viewXml");
        } else {
          docPane.showMessage(i18nBase.editor.noMetadata);
          enableView("view", true);
        }
        return;
      }

      this._fadeOut(i18nBase.editor.primaryToolbar.initializing, lang.hitch(this, function() {
        this.editor.loadView(docType, xmlDoc, true).then(
          lang.hitch(this, function(gxedoc) {
            docPane.xmlString = xmlString;
            this.editor.xmlPane.setXml(xmlString, gxedoc.originalTitle);
            enableView("view");
          }),
          lang.hitch(this, function(err) {
            enableView("view");
            var msg = i18nBase.editor.primaryToolbar.errors.errorGeneratingView;
            this._handleError(msg, err, true);
          })
        );
      }));
    },

    _loadEditor: function() {
      if(!this.editor.gxeAdaptor.getAllowEditMetadata()) {
        return;
      }
      var s, info = this._parseXml(this.editor.gxeAdaptor.getOriginalXml());
      if(info.documentType) {
        this._fadeOut(i18nBase.editor.primaryToolbar.startingEditor, lang.hitch(this, function() {
          this.editor.loadEditor(info.documentType, info.xmlDocument, false, true).then(
            lang.hitch(this, function() {
              this._fadeIn();
            }),
            lang.hitch(this, function(err) {
              this._fadeIn();
              var msg = i18nBase.editor.primaryToolbar.errors.errorLoadingDocument;
              this._handleError(msg, err, true);
            })
          );
        }));
      } else {
        s = i18nBase.editor.load.noMetadata;
        if(info.xmlDocument) {
          s = i18nBase.editor.load.unrecognizedMetadata;
        }
        this._showLoadDialog(s);
      }
    },

    _loadView: function() {
      var doc = this.editor.getEditDocument();
      if(!doc) {
        this._setMode("view");
        return;
      }

      var docPane = this.editor.viewDocumentPane;
      var validationTracker = new ValidationTracker({ignoreErrors: true});
      var xmlString = doc.generateXml(validationTracker);
      if(xmlString && (xmlString === docPane.xmlString)) {
        this._setMode("view");
        return;
      }

      domClass.add(this.viewButton.domNode, "current");
      domClass.remove(this.viewXmlButton.domNode, "current");
      domClass.remove(this.editButton.domNode, "current");
      this._fadeOut(i18nBase.editor.primaryToolbar.generatingView, lang.hitch(this, function() {
        this._setMode("view");
        var docType = doc.documentType;
        var xmlDoc = xmlUtil.parseFromString(xmlString);
        this.editor.loadView(docType, xmlDoc, false).then(
          lang.hitch(this, function(gxedoc) {
            docPane.xmlString = xmlString;
            docPane.hideMessage();
            this.editor.xmlPane.setXml(xmlString, gxedoc.originalTitle);
            this._fadeIn();
          }),
          lang.hitch(this, function(err) {
            docPane.hideMessage();
            this._fadeIn();
            var msg = i18nBase.editor.primaryToolbar.errors.errorGeneratingView;
            this._handleError(msg, err, true);
          })
        );
      }));
    },

    _parseXml: function(xmlString) {
      var result = {documentType: null, xmlString: xmlString, xmlDocument: null};
      if(!xmlString) {
        return result;
      }
      var xmlDoc = null;
      try {
        xmlDoc = xmlUtil.parseFromString(xmlString);
      } catch(ex) {
        return result;
      }
      result.xmlDocument = xmlDoc;
      var docTypes = this.editor.gxeContext.filterDocumentTypes();
      var interrogator = new XmlInterrogator();
      result.documentType = interrogator.interrogate(xmlDoc, docTypes);
      return result;
    },

    // var params = {isSaveAsDraft,isSaveAndClose,bPushToItem,showDialog};
    _save: function(params) {
      if(!this.editor.gxeAdaptor.getAllowEditMetadata()) {
        return;
      }
      var d, doc = this.editor.getEditDocument();
      if(!doc) {
        return;
      }
      this.editor.validationPane.clearMessages();
      var validationTracker = new ValidationTracker({
        isSaveAsDraft: params.isSaveAsDraft,
        validationPane: this.editor.validationPane
      });
      var xmlString = doc.generateXml(validationTracker);
      var documentTitle = validationTracker.documentTitle;
      if(validationTracker.hadValidationErrors) {
        return;
      }
      if((documentTitle === null) || (documentTitle.length === 0)) {
        return;
      }

      //params.isSaveAsDraft = false;
      if(params.isSaveAsDraft) {
        this._download(xmlString, documentTitle, true);
      } else if(!params.showDialog) {
        this._executeSave(doc, xmlString, params.isSaveAndClose, params.bPushToItem);
      } else {
        d = new SaveDocumentDialog({
          editor: this.editor,
          gxeDocument: doc,
          onSave: lang.hitch(this, function(dialog, isSaveAndClose2, pushToItem2) {
            dialog.hide();
            this._executeSave(doc, xmlString, isSaveAndClose2, pushToItem2);
          })
        });
        d.show();
      }
    },

    _showLoadDialog: function(prompt) {
      var d = new LoadDocumentDialog({
        editor: this.editor,
        prompt: prompt,
        onSelect: lang.hitch(this, function(dialog, documentType, xmlDocument, asTemplate) {
          dialog.hide();
          this._fadeOut(i18nBase.editor.primaryToolbar.loadingDocument, lang.hitch(this, function() {
            this.editor.loadEditor(documentType, xmlDocument, asTemplate, false).then(
              lang.hitch(this, function() {
                this._fadeIn();
              }),
              lang.hitch(this, function(err) {
                this._fadeIn();
                var msg = i18nBase.editor.primaryToolbar.errors.errorLoadingDocument;
                this._handleError(msg, err, true);
              })
            );
          }));
        }),
        onSelectPullItem: lang.hitch(this, function(dialog) {
          dialog.hide();
          this.editor.gxeAdaptor.pullItem(this.editor.getEditDocument());
          /*
           this._fadeOut(i18nBase.editor.primaryToolbar.updatingDocument,
             lang.hitch(this,function(){
               this.editor.gxeAdaptor.pullItem(this.editor.getEditDocument()).then(
               lang.hitch(this,function(){
               this._fadeIn();
             }),
             lang.hitch(this,function(err){
               this._fadeIn();
               var msg = i18nBase.editor.primaryToolbar.errors.errorLoadingDocument;
               this._handleError(msg,err,true);
             })
           );
           }));
           */
        })
      });
      d.show();
    },

    _showTransformDialog: function(gxeDocument, documentTypes) {
      var prompt = null;
      var d = new TransformDialog({
        editor: this.editor,
        documentTypes: documentTypes,
        prompt: prompt,
        onSelect: lang.hitch(this, function(dialog, documentType) {
          dialog.hide();
          this._fadeOut(i18nBase.editor.transform.working, lang.hitch(this, function() {
            var transformer = new Iso2IsoTransformer({gxeDocument: gxeDocument, toDocumentType: documentType});
            var validationTracker = new ValidationTracker({ignoreErrors: true});
            var xmlString = gxeDocument.generateXml(validationTracker, transformer);
            var xmlDoc = null;
            if(xmlString) {
              //console.clear(); console.warn(xmlString);
              try {
                xmlDoc = xmlUtil.parseFromString(xmlString);
              }
              catch(ex) {
                xmlDoc = null;
                console.error(ex);
              }
            }
            this.editor.loadEditor(documentType, xmlDoc, false, false).then(
              lang.hitch(this, function(gxeDoc) {
                gxeDoc.documentType.afterTransform(gxeDoc, gxeDocument);
                this._fadeIn();
              }),
              lang.hitch(this, function(err) {
                this._fadeIn();
                var msg = i18nBase.editor.transform.errorTransforming;
                this._handleError(msg, err, true);
              })
            );
          }));
        })
      });
      d.show();
    }

  });

  

  return oThisClass;
});