define(["../../../../../../core/declare", 
        "dojo/_base/lang",
        "dojo/has",
        "../../../../base/Descriptor",
        "../../../iso/gmd/metadataEntity/MetadataFileIdentifier",
        "../../../iso/gmd/metadataEntity/MetadataHierarchy",
        "./MetadataLanguage",
        "dojo/text!./templates/MetadataIdentifier.html",
        "../../../../../../kernel"],
function(declare, lang, has, Descriptor, MetadataFileIdentifier, MetadataHierarchy, MetadataLanguage, template, esriKernel) {

  var oThisClass = declare(Descriptor, {

    templateString: template

  });

  

  return oThisClass;
});