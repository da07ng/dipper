define(["../../../../../core/declare", 
        "dojo/_base/lang",
        "dojo/has",
        "../../../base/Descriptor",
        "../../../form/Element",
        "../../../form/Tabs",
        "../../iso/gmd/dataQuality/Quality",
        "../../iso/gmd/distribution/Distribution",
        "../gmd/metadataEntity/MetadataSection",
        "../srv/ServiceIdentification",
        "dojo/text!./templates/ServiceRoot.html",
        "../../../../../kernel"],
function(declare, lang, has, Descriptor, Element, Tabs, Quality, Distribution, MetadataSection, ServiceIdentification,
  template, esriKernel) {

  var oThisClass = declare(Descriptor, {

    templateString: template

  });

  

  return oThisClass;
});