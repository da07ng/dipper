define(["../../../../../core/declare",
        "dojo/_base/lang",
        "dojo/has",
        "../../../base/Descriptor",
        "../../../form/Attribute",
        "../../../form/Element",
        "dojo/text!./templates/OperatesOn.html",
        "../../../../../kernel"],
function(declare, lang, has, Descriptor, Attribute, Element, template, esriKernel) {

  var oThisClass = declare(Descriptor, {

    templateString: template

  });

  

  return oThisClass;
});