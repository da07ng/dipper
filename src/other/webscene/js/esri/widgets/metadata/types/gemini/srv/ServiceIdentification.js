define(["../../../../../core/declare", 
        "dojo/_base/lang",
        "dojo/has",
        "../../../base/Descriptor",
        "../../../form/Tabs",
        "../../../form/iso/AbstractObject",
        "../../../form/iso/ObjectReference",
        "../../iso/gmd/citation/ResourceCitation",
        "../../iso/gmd/citation/ResourceContact",
        "../../iso/gmd/identification/ResourceDescription",
        "../../iso/gmd/identification/ResourceThumbnail",
        "../../inspire/gmd/constraints/ResourceConstraints",
        "../../inspire/srv/ServiceResourceKeywords",
        "./ServiceResourceTab",
		    "dojo/text!./templates/ServiceIdentification.html",
				"../../../../../kernel"],
function(declare, lang, has, Descriptor, Tabs, AbstractObject, ObjectReference, ResourceCitation, ResourceContact,
	ResourceDescription, ResourceThumbnail, ResourceConstraints, ServiceResourceKeywords, ServiceResourceTab, template, esriKernel) {

	var oThisClass = declare(Descriptor, {

		templateString: template

	});

	

	return oThisClass;
});