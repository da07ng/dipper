define(["../../../../../../core/declare",
        "dojo/_base/lang",
        "dojo/has",
        "../../../../base/Descriptor",
        "../../../../form/iso/ObjectReference",
        "./MI_Platform",
        "dojo/text!./templates/Platform.html",
        "../../../../../../kernel"],
function(declare, lang, has, Descriptor, ObjectReference, MI_Platform, template, esriKernel) {

  var oThisClass = declare(Descriptor, {

    templateString: template

  });

  

  return oThisClass;
});