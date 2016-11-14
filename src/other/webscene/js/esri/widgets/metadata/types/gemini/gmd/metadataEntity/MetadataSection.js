define(["../../../../../../core/declare", 
        "dojo/_base/lang",
        "dojo/has",
        "../../../../base/Descriptor",
        "../../../../form/Tabs",
        "../metadataEntity/MetadataIdentifier",
        "../../../iso/gmd/metadataEntity/MetadataContact",
        "../../../iso/gmd/metadataEntity/MetadataDate",
        "../../../iso/gmd/metadataEntity/MetadataReference",
        "../../../iso/gmd/metadataEntity/MetadataStandard",
        "dojo/text!./templates/MetadataSection.html",
        "../../../../../../kernel"],
function(declare, lang, has, Descriptor, Tabs, MetadataIdentifier, MetadataContact, MetadataDate, MetadataReference,
  MetadataStandard, template, esriKernel) {

  var oThisClass = declare(Descriptor, {

    templateString: template

  });

  

  return oThisClass;
});