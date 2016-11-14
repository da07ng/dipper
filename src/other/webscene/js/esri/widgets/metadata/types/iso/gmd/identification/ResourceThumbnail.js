define(["../../../../../../core/declare",
        "dojo/_base/lang",
        "dojo/has",
        "../../../../base/Descriptor",
        "../../../../form/iso/ObjectReference",
        "./MD_BrowseGraphic",
        "dojo/text!./templates/ResourceThumbnail.html",
        "../../../../../../kernel"],
function(declare, lang, has, Descriptor, ObjectReference, MD_BrowseGraphic, template, esriKernel) {

  var oThisClass = declare(Descriptor, {

    templateString : template

  });

  

  return oThisClass;
});