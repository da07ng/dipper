define(["../../../../../core/declare", 
        "dojo/_base/lang",
        "dojo/has",
        "../../../base/Descriptor",
        "../../../form/Element",
        "../../../form/Tabs",
        "../gmd/dataQuality/Quality",
        "../gmd/distribution/Distribution",
        "../gmd/identification/DataIdentification",
        "../gmd/metadataEntity/MetadataSection",
        "../gmi/acquisitionInformation/Acquisition",
        "dojo/text!./templates/GmiRoot.html",
        "../../../../../kernel"],
function(declare, lang, has, Descriptor, Element, Tabs, Quality, Distribution, DataIdentification, MetadataSection,
  Acquisition, template, esriKernel) {

  var oThisClass = declare(Descriptor, {

    templateString: template

  });

  

  return oThisClass;
});