define(["../../../../../core/declare", 
        "dojo/_base/lang",
        "dojo/has",
        "../../../base/Descriptor",
        "../../../form/Element",
        "../../../form/InputSelectOne",
        "../../../form/Options",
        "../../../form/Option",
        "../../../form/iso/GcoElement",
        "dojo/text!./templates/ServiceType.html",
        "../../../../../kernel"],
function(declare, lang, has, Descriptor, Element, InputSelectOne, Options, Option, GcoElement, template, esriKernel) {

  var oThisClass = declare(Descriptor, {

    templateString: template

  });

  

  return oThisClass;
});