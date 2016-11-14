define(["../../../../../../core/declare", 
        "dojo/_base/lang",
        "dojo/has",
        "../../../../base/Descriptor",
        "../../../../form/Element",
        "../../../../form/InputDelimitedTextArea",
        "../../../../form/iso/AbstractObject",
        "../../../../form/iso/CodeListAttribute",
        "../../../../form/iso/CodeListValueAttribute",
        "../../../../form/iso/CodeListElement",
        "../../../../form/iso/CodeListReference",
        "../../../../form/iso/ObjectReference",
        "../../../../form/iso/gemet/GemetThemeTool",
        "dojo/text!./templates/DataThemeKeywords.html",
        "../../../../../../kernel"],
function(declare, lang, has, Descriptor, Element, InputDelimitedTextArea, AbstractObject, CodeListAttribute,
  CodeListValueAttribute, CodeListElement, CodeListReference, ObjectReference, GemetThemeTool, template, esriKernel) {

  var oThisClass = declare(Descriptor, {

    templateString: template

  });

  

  return oThisClass;
});