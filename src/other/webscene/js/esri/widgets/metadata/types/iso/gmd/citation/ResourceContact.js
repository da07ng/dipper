define(["../../../../../../core/declare",
        "dojo/_base/lang",
        "dojo/has",
        "../../../../base/Descriptor",
        "../../../../form/iso/ObjectReference",
        "./CI_ResponsibleParty",
        "dojo/text!./templates/ResourceContact.html",
        "../../../../../../kernel"],
function(declare, lang, has, Descriptor, ObjectReference, CI_ResponsibleParty, template, esriKernel) {

  var oThisClass = declare(Descriptor, {

    templateString: template

  });

  

  return oThisClass;
});