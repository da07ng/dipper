define(["../../../../../core/declare",
        "dojo/_base/lang",
        "dojo/has",
        "../../../base/Descriptor",
        "../../../form/iso/AbstractObject",
        "../../../form/iso/ObjectReference",
        "../gmd/extent/GeographicElement",
        "../gmd/extent/TemporalElement",
        "dojo/text!./templates/ServiceExtent.html",
        "../../../../../kernel"],
function(declare, lang, has, Descriptor, AbstractObject, ObjectReference, GeographicElement, TemporalElement, template, esriKernel) {

  var oThisClass = declare(Descriptor, {

    templateString: template

  });

  

  return oThisClass;
});