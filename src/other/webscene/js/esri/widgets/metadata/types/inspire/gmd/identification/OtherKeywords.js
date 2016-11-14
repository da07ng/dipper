define(["../../../../../../core/declare", 
        "dojo/_base/lang",
        "dojo/has",
        "../../../../base/Descriptor",
        "../../../../form/iso/ObjectReference",
        "../../../iso/gmd/identification/MD_Keywords",
        "dojo/text!./templates/OtherKeywords.html",
        "../../../../../../kernel"],
function(declare, lang, has, Descriptor, ObjectReference, MD_Keywords, template, esriKernel) {

  var oThisClass = declare(Descriptor, {

    templateString: template

  });

  

  return oThisClass;
});