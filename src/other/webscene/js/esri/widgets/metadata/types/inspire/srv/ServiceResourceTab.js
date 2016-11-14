define(["../../../../../core/declare", 
        "dojo/_base/lang",
        "dojo/has",
        "../../../base/Descriptor",
        "../../../form/Tabs",
        "../../iso/srv/ContainsOperations",
        "../../iso/srv/CouplingType",
        "../../iso/srv/OperatesOn",
        "../../iso/srv/ServiceExtent",
        "./ServiceType",
        "dojo/text!./templates/ServiceResourceTab.html",
        "../../../../../kernel"],
function(declare, lang, has, Descriptor, Tabs, ContainsOperations, CouplingType, OperatesOn, ServiceExtent, ServiceType, template, esriKernel) {

  var oThisClass = declare(Descriptor, {

    templateString: template

  });

  

  return oThisClass;
});