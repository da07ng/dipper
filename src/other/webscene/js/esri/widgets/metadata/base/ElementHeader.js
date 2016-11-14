define(["../../../core/declare",
        "dojo/_base/lang",
        "dojo/dom-class",
        "dojo/dom-construct",
        "dojo/has",
        "./Templated",
        "./LabelMixin",
        "dojo/text!./templates/ElementHeader.html",
        "../../../kernel"],
function(declare, lang, domClass, domConstruct, has, Templated, LabelMixin, template, esriKernel) {

  var oThisClass = declare([Templated, LabelMixin], {

    label: null,
    parentElement: null,
    templateString: template,

    postCreate: function() {
      this.inherited(arguments);
    },

    initialize: function(element) {
      this.parentElement = element;
      domConstruct.place(this.domNode, element.containerNode, "before");
      domClass.add(element.domNode, "single gxeIndent");
      this.label = element.getLabelString();
      var bOptional = (element.minOccurs === 0);
      var bPreferOpen = element.preferOpen;
      var labelNode = this.labelNode;
      var containerNode = element.containerNode;
      this.initializeLabel(this.label, bOptional, bPreferOpen, labelNode, containerNode);
    },

    whenOptionalContentToggled: function(isOptionallyOff) {
      this.parentElement._isOptionallyOff = isOptionallyOff;
    }

  });

  

  return oThisClass;
});