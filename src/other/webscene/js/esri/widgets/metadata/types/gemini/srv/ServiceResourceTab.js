define(["../../../../../core/declare", 
        "dojo/_base/lang",
        "dojo/has",
        "../../../base/Descriptor",
        "../../../form/Tabs",
        "../../inspire/srv/ServiceType",
        "../../iso/srv/OperatesOn",
        "./ContainsOperations",
        "./CouplingType",
        "./ServiceExtent",
		    "dojo/text!./templates/ServiceResourceTab.html",
				"../../../../../kernel"],
function(declare, lang, has, Descriptor, Tabs, ServiceType, OperatesOn, ContainsOperations, CouplingType, ServiceExtent,
  template, esriKernel) {

	var oThisClass = declare(Descriptor, {

		templateString: template

	});

	

	return oThisClass;
});