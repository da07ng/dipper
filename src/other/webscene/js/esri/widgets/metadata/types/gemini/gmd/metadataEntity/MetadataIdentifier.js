define(["../../../../../../core/declare", 
        "dojo/_base/lang",
        "dojo/has",
        "../../../../base/Descriptor",
        "../metadataEntity/MetadataLanguage",
        "../../../iso/gmd/metadataEntity/MetadataFileIdentifier",
        "../../../iso/gmd/metadataEntity/MetadataHierarchy",
        "dojo/text!./templates/MetadataIdentifier.html",
        "../../../../../../kernel"],
function(declare, lang, has, Descriptor, MetadataLanguage, MetadataFileIdentifier, MetadataHierarchy, template, esriKernel) {

  var oThisClass = declare(Descriptor, {

    templateString: template

  });

  

  return oThisClass;
});