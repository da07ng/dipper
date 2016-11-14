define(["../../../../core/declare",
        "dojo/_base/lang",
        "dojo/dom-class",
        "dojo/has",
        "../../base/Templated",
        "dojo/text!./templates/OkCancelBar.html",
        "dojo/i18n!../../nls/i18nBase",
        "dijit/form/Button",
        "../../../../kernel"],
function(declare, lang, domClass, has, Templated, template, i18nBase, Button, esriKernel) {

  var oThisClass = declare([Templated], {

    cancelIsProminent: false,
    cancelLabel: i18nBase.general.cancel,
    isWorking: false,
    okLabel: i18nBase.general.ok,
    showCancel: true,
    showOk: true,
    templateString: template,

    postCreate: function() {
      this.inherited(arguments);
      if(!this.showOk) {
        this.okButton.style.display = "none";
      }
      if(!this.showCancel) {
        this.cancelButton.style.display = "none";
      }
      if(this.cancelIsProminent) {
        domClass.remove(this.okButton, "prominent");
        domClass.add(this.cancelButton, "prominent");
      }
    },

    postMixInProperties: function() {
      this.inherited(arguments);
      if(this.okLabel === null) {
        this.okLabel = i18nBase.general.ok;
      }
      if(this.cancelLabel === null) {
        this.cancelLabel = i18nBase.general.cancel;
      }
    },

    disableOk: function() {
      this.okButton.disabled = true;
    },

    enableOk: function() {
      if(this.showOk) {
        this.okButton.disabled = false;
      }
    },

    hideWorking: function(bEnableOk) {
      this.isWorking = false;
      this.workingNode.innerHTML = "";
      if(bEnableOk) {
        this.enableOk();
      }
    },

    onCancelClick: function(evt) {
    },

    onOkClick: function(evt) {
    },

    showFatalError: function(msg, error) {
      this.disableOk();
      this.hideWorking(false);
      this.setNodeText(this.workingNode, msg);
      if(error) {
        console.error(msg, error);
      } else {
        console.error(msg);
      }
    },

    showWorking: function(msg, bDisableOk) {
      this.isWorking = true;
      if(bDisableOk) {
        this.disableOk();
      }
      this.setNodeText(this.workingNode, msg);
    }

  });

  

  return oThisClass;
});