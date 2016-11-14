define(["../../../../../../core/declare", 
        "dojo/_base/lang",
        "dojo/has",
        "../../../../base/Descriptor",
        "../../../../form/Tabs",
        "../../../../form/iso/AbstractObject",
        "../../../../form/iso/CodeListReference",
        "../../../../form/iso/ObjectReference",
        "../../../iso/gmd/citation/ResourceCitation",
        "../../../iso/gmd/citation/ResourceContact",
        "../../../iso/gmd/identification/ResourceDescription",
        "../../../iso/gmd/identification/ResourceThumbnail",
        "../../../iso/gmd/maintenance/MD_MaintenanceFrequencyCode",
        "../../../inspire/gmd/identification/DataResourceKeywords",
        "../../../inspire/gmd/constraints/ResourceConstraints",
        "./DataResourceTab",
        "dojo/text!./templates/DataIdentification.html",
        "../../../../../../kernel"],
function(declare, lang, has, Descriptor, Tabs, AbstractObject, CodeListReference, ObjectReference, ResourceCitation,
  ResourceContact, ResourceDescription, ResourceThumbnail, MD_MaintenanceFrequencyCode, DataResourceKeywords,
  ResourceConstraints, template, esriKernel) {

  var oThisClass = declare(Descriptor, {

    templateString: template

  });

  

  return oThisClass;
});