define(["../../../../../core/declare",
        "dojo/_base/lang",
        "dojo/has",
        "../../../base/Descriptor",
        "../../../form/Tabs",
        "./ContainsOperations",
        "./CouplingType",
        "./OperatesOn",
        "./ServiceType",
        "./ServiceExtent",
        "dojo/text!./templates/ServiceResourceTab.html",
        "../../../../../kernel"],
function(declare, lang, has, Descriptor, Tabs, ContainsOperations, CouplingType, OperatesOn, ServiceType, ServiceExtent,
  template, esriKernel) {

  var oThisClass = declare(Descriptor, {

    templateString: template

  });

  

  return oThisClass;
});