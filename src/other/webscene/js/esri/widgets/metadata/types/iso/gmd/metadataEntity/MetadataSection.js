define(["../../../../../../core/declare",
        "dojo/_base/lang",
        "dojo/has",
        "../../../../base/Descriptor",
        "../../../../form/Tabs",
        "./MetadataIdentifier",
        "./MetadataContact",
        "./MetadataDate",
        "./MetadataStandard",
        "./MetadataReference",
        "dojo/text!./templates/MetadataSection.html",
        "../../../../../../kernel"],
function(declare, lang, has, Descriptor, Tabs, MetadataIdentifier, MetadataContact, MetadataDate, MetadataStandard,
  MetadataReference, template, esriKernel) {

  var oThisClass = declare(Descriptor, {

    templateString : template

  });

  

  return oThisClass;
});