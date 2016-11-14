define(["../../../../../../core/declare",
        "dojo/_base/lang",
        "dojo/has",
        "../../../../base/Descriptor",
        "./MetadataFileIdentifier",
        "./MetadataLanguage",
        "./MetadataHierarchy",
        "dojo/text!./templates/MetadataIdentifier.html",
        "../../../../../../kernel"],
function(declare, lang, has, Descriptor, MetadataFileIdentifier, MetadataLanguage, MetadataHierarchy, template, esriKernel) {

  var oThisClass = declare(Descriptor, {

    templateString : template

  });

  

  return oThisClass;
});