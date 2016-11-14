define(["../../../../../core/declare", 
        "dojo/_base/lang",
        "dojo/has",
        "../../../base/Descriptor",
        "../../../form/iso/AbstractObject",
        "../../../form/iso/ObjectReference",
        "../gmd/extent/GeographicDescription",
        "../gmd/extent/GeographicElement",
        "../gmd/extent/TemporalElement",
        "../gmd/extent/VerticalElement",
		    "dojo/text!./templates/ServiceExtent.html",
				"../../../../../kernel"],
function(declare, lang, has, Descriptor, AbstractObject, ObjectReference, GeographicDescription, GeographicElement,
	TemporalElement, VerticalElement, template, esriKernel) {

	var oThisClass = declare(Descriptor, {

		templateString: template

	});

	

	return oThisClass;
});