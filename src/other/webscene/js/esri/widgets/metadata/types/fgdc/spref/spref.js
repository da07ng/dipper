define(["../../../../../core/declare",
        "dojo/_base/lang",
        "dojo/has",
        "../../../base/Descriptor",
        "../../../form/Element",
        "../../../form/Tabs",
        "../spref/horizsys",
        "../spref/vertdef",
        "dojo/text!./templates/spref.html",
        "../../../../../kernel"],
function(declare, lang, has, Descriptor, Element, Tabs, horizsys, vertdef, template, esriKernel) {

  var oThisClass = declare(Descriptor, {

    templateString: template

  });

  

  return oThisClass;
});