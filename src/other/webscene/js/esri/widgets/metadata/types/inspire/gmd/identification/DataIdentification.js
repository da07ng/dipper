define(["../../../../../../core/declare", 
        "dojo/_base/lang",
        "dojo/has",
        "../../../../base/Descriptor",
        "../../../../form/Tabs",
        "../../../../form/iso/AbstractObject",
        "../../../../form/iso/ObjectReference",
        "../../../iso/gmd/citation/ResourceCitation",
        "../../../iso/gmd/identification/ResourceDescription",
        "../../../iso/gmd/identification/ResourceThumbnail",
        "../citation/ResourceContact",
        "../constraints/ResourceConstraints",
        "../identification/DataResourceKeywords",
        "../identification/DataResourceTab",
        "dojo/text!./templates/DataIdentification.html",
        "../../../../../../kernel"],
function(declare, lang, has, Descriptor, Tabs, AbstractObject, ObjectReference, ResourceCitation, ResourceDescription,
  ResourceThumbnail, ResourceContact, ResourceConstraints, DataResourceKeywords, DataResourceTab, template, esriKernel) {

  var oThisClass = declare(Descriptor, {

    templateString: template

  });

  

  return oThisClass;
});