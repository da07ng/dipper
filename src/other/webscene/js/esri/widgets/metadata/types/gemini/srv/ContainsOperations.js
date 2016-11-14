define(["../../../../../core/declare",
				"dojo/_base/lang",
				"dojo/has",
        "../../../base/Descriptor",
        "../../../form/Attribute",
        "../../../form/Element",
		    "dojo/text!./templates/ContainsOperations.html",
				"../../../../../kernel"],
function(declare, lang, has, Descriptor, Attribute, Element, template, esriKernel) {

	var oThisClass = declare(Descriptor, {

		templateString: template

	});

	

	return oThisClass;
});