define(["../../../core/declare",
        "dojo/_base/lang",
        "dojo/dom-style",
        "dojo/has",
        "../base/Templated",
        "dojo/text!./templates/XmlPane.html",
        "dojo/i18n!../nls/i18nBase",
        "../../../kernel"],
function(declare, lang, domStyle, has, Templated, template, i18nBase, esriKernel) {

  var oThisClass = declare([Templated], {

    templateString: template,
    xmlString: null,
    xmlTitle: null,

    postCreate: function() {
      this.inherited(arguments);
    },

    setXml: function(xmlString, xmlTitle) {
      if(typeof xmlString === "undefined") {
        xmlString = null;
      } else if(xmlString !== null) {
        xmlString = lang.trim(xmlString);
        if(xmlString.length === 0) {
          xmlString = null;
        }
      }
      if(xmlString === null) {
        domStyle.set(this.textAreaNode, "display", "none");
        this.setNodeText(this.messageNode, i18nBase.editor.noMetadata);
        domStyle.set(this.messageNode, "display", "");
      } else {
        this.messageNode.innerHTML = "";
        domStyle.set(this.messageNode, "display", "none");
        domStyle.set(this.textAreaNode, "display", "");
      }
      this.xmlString = xmlString;
      this.xmlTitle = xmlTitle;
      this.textAreaNode.value = xmlString;
    }

  });

  

  return oThisClass;
});