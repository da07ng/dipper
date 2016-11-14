define(["../../../../../../core/declare",
        "dojo/_base/lang",
        "dojo/has",
        "../../../../base/Descriptor",
        "../../../../form/Element",
        "../../../../form/InputSelectOne",
        "../../../../form/Options",
        "../../../../form/Option",
        "dojo/text!./templates/ConformanceDegree.html",
        "../../../../../../kernel"],
function(declare, lang, has, Descriptor, Element, InputSelectOne, Options, Option, template, esriKernel) {

  var oThisClass = declare(Descriptor, {

    templateString : template

  });

  

  return oThisClass;
});