define(["../../../../../../core/declare",
        "dojo/_base/lang",
        "dojo/has",
        "../../../../base/Descriptor",
        "../../../../form/iso/ObjectReference",
        "./MD_Keywords",
        "dojo/text!./templates/ResourceKeywords.html",
        "../../../../../../kernel"],
function(declare, lang, has, Descriptor, ObjectReference, MD_Keywords, template, esriKernel) {

  var oThisClass = declare(Descriptor, {

    templateString : template

  });

  

  return oThisClass;
});