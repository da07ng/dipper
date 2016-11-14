define(["../../../../../../core/declare",
        "dojo/_base/lang",
        "dojo/has",
        "../../../../base/Descriptor",
        "../../../../form/Tabs",
        "../../../../form/iso/AbstractObject",
        "../../../../form/iso/ObjectReference",
        "../citation/ResourceCitation",
        "../citation/ResourceContact",
        "../constraints/ResourceConstraints",
        "./ResourceDescription",
        "./ResourceThumbnail",
        "./ResourceKeywords",
        "./DataResourceTab",
        "dojo/text!./templates/DataIdentification.html",
        "../../../../../../kernel"],
function(declare, lang, has, Descriptor, Tabs, AbstractObject, ObjectReference, ResourceCitation, ResourceContact,
  ResourceConstraints, ResourceDescription, ResourceThumbnail, ResourceKeywords, DataResourceTab, template, esriKernel) {

  var oThisClass = declare(Descriptor, {

    templateString : template

  });

  

  return oThisClass;
});