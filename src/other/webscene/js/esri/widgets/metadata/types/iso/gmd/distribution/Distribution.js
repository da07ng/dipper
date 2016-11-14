define(["../../../../../../core/declare",
        "dojo/_base/lang",
        "dojo/has",
        "../../../../base/Descriptor",
        "../../../../form/iso/AbstractObject",
        "../../../../form/iso/ObjectReference",
        "./DistributionFormat",
        "./TransferOptions",
        "dojo/text!./templates/Distribution.html",
        "../../../../../../kernel"],
function(declare, lang, has, Descriptor, AbstractObject, ObjectReference, DistributionFormat, TransferOptions, template, esriKernel) {

  var oThisClass = declare(Descriptor, {

    templateString : template

  });

  

  return oThisClass;
});