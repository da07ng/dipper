define(["../../../../../../core/declare", 
        "dojo/_base/lang",
        "dojo/has",
        "../../../../base/Descriptor",
        "../../../../form/Tabs",
        "../../../iso/gmd/metadataEntity/MetadataContact",
        "../../../iso/gmd/metadataEntity/MetadataDate",
        "../../../iso/gmd/metadataEntity/MetadataReference",
        "../../../iso/gmd/metadataEntity/MetadataStandard",
        "./MetadataIdentifier",
        "dojo/text!./templates/MetadataSection.html",
        "../../../../../../kernel"],
function(declare, lang, has, Descriptor, Tabs, MetadataContact, MetadataDate, MetadataReference, MetadataStandard,
  MetadataIdentifier, template, esriKernel) {

  var oThisClass = declare(Descriptor, {

    templateString: template

  });

  

  return oThisClass;
});