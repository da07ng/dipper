define(["../../../../../../core/declare",
        "dojo/_base/lang",
        "dojo/has",
        "../../../../base/Descriptor",
        "../../../../form/Element",
        "../../../../form/InputSelectMany",
        "../../../../form/IsoTopicCategoryOptions",
        "dojo/text!./templates/ResourceClassification.html",
        "../../../../../../kernel"],
function(declare, lang, has, Descriptor, Element, InputSelectMany, IsoTopicCategoryOptions, template, esriKernel) {

  var oThisClass = declare(Descriptor, {

    templateString : template

  });

  

  return oThisClass;
});