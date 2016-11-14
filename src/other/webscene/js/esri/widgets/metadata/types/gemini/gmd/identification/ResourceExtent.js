define(["../../../../../../core/declare", 
        "dojo/_base/lang",
        "dojo/has",
        "../../../../base/Descriptor",
        "../../../../form/iso/AbstractObject",
        "../../../../form/iso/ObjectReference",
        "../extent/GeographicDescription",
        "../extent/GeographicElement",
        "../../gmd/extent/TemporalElement",
        "../../gmd/extent/VerticalElement",
        "dojo/text!./templates/ResourceExtent.html",
        "../../../../../../kernel"],
function(declare, lang, has, Descriptor, AbstractObject, ObjectReference, GeographicDescription, GeographicElement,
  TemporalElement, VerticalElement, template, esriKernel) {

  var oThisClass = declare(Descriptor, {

    templateString: template

  });

  

  return oThisClass;
});