define(["../../../../../core/declare",
        "dojo/_base/lang",
        "dojo/has",
        "../../../base/Descriptor",
        "../../../form/Element",
        "../../../form/Tabs",
        "../dataqual/procstep",
        "../dataqual/srcinfo",
        "dojo/text!./templates/lineage.html",
        "../../../../../kernel"],
function(declare, lang, has, Descriptor, Element, Tabs, procstep, srcinfo, template, esriKernel) {

  var oThisClass = declare(Descriptor, {

    templateString: template

  });

  

  return oThisClass;
});