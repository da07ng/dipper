define(["../../../../../core/declare", 
        "dojo/_base/lang",
        "dojo/has",
        "../../../base/Descriptor",
        "../../../form/Element",
        "../../../form/Tabs",
        "../../iso/gmd/dataQuality/Quality",
        "../../iso/gmd/distribution/Distribution",
        "../gmd/identification/DataIdentification",
        "../gmd/metadataEntity/MetadataSection",
        "dojo/text!./templates/DataRoot.html",
        "../../../../../kernel"],
function(declare, lang, has, Descriptor, Element, Tabs, Quality, Distribution, DataIdentification, MetadataSection,
  template, esriKernel) {

  var oThisClass = declare(Descriptor, {

    templateString: template

  });

  

  return oThisClass;
});