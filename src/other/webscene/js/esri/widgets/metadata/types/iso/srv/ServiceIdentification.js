define(["../../../../../core/declare",
        "dojo/_base/lang",
        "dojo/has",
        "../../../base/Descriptor",
        "../../../form/Tabs",
        "../../../form/iso/AbstractObject",
        "../../../form/iso/ObjectReference",
        "../gmd/citation/ResourceCitation",
        "../gmd/citation/ResourceContact",
        "../gmd/constraints/ResourceConstraints",
        "../gmd/identification/ResourceDescription",
        "../gmd/identification/ResourceThumbnail",
        "../gmd/identification/ResourceKeywords",
        "./ServiceResourceTab",
        "dojo/text!./templates/ServiceIdentification.html",
        "../../../../../kernel"],
function(declare, lang, has, Descriptor, Tabs, AbstractObject, ObjectReference, ResourceCitation, ResourceContact,
  ResourceConstraints, ResourceDescription, ResourceThumbnail, ResourceKeywords, ServiceResourceTab, template, esriKernel) {

  var oThisClass = declare(Descriptor, {

    templateString: template

  });

  

  return oThisClass;
});