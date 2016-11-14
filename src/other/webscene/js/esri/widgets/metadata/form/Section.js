define(["../../../core/declare",
        "dojo/_base/lang",
        "dojo/dom-attr",
        "dojo/dom-class",
        "dojo/dom-construct",
        "dojo/has",
        "../base/Templated",
        "dojo/text!./templates/Section.html",
        "../../../kernel"],
function(declare, lang, domAttr, domClass, domConstruct, has, Templated, template, esriKernel) {

  var oThisClass = declare([Templated], {

    templateString: template,

    /* gxe/form/Section properties, configurable */
    label: null,
    showHeader: true,

    postCreate: function() {
      this.inherited(arguments);
    },

    startup: function() {
      if(this._started) {
        return;
      }
      this.initializeSection();
      this.inherited(arguments);
    },

    getLabelString: function() {
      var v = this.label;
      if((typeof(v) !== "undefined") && (v != null)) {
        return v;
      }
      return null;
    },

    initializeSection: function() {
      var sLabel = this.getLabelString();
      if(this.showHeader) {
        this.setLabel(sLabel);
      } else if(this.headerNode) {
        domConstruct.destroy(this.headerNode);
        this.headerNode = null;
        this.labelNode = null;
      }
    },

    setLabel: function(label) {
      if(!this.labelNode) {
        return;
      }
      if(typeof label === "undefined") {
        label = null;
      }
      this.label = label;
      this.setI18nNodeText(this.labelNode, label);
      if(label !== null) {
        domClass.add(this.domNode, "gxeIndent");
      }
    }

  });

  

  return oThisClass;
});