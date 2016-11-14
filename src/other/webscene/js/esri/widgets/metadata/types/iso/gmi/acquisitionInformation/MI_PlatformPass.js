define(["../../../../../../core/declare",
        "dojo/_base/lang",
        "dojo/has",
        "../../../../base/Descriptor",
        "../../../../form/Attribute",
        "../../../../form/iso/AbstractObject",
        "../../../../form/iso/ObjectReference",
        "../../gmd/identification/SimpleMD_Identifier",
        "dojo/text!./templates/MI_PlatformPass.html",
        "../../../../../../kernel"],
function(declare, lang, has, Descriptor, Attribute, AbstractObject, ObjectReference, SimpleMD_Identifier, template, esriKernel) {

  var oThisClass = declare(Descriptor, {

    templateString: template

  });

  

  return oThisClass;
});