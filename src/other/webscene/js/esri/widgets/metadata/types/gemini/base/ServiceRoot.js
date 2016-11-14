define(["../../../../../core/declare",
        "dojo/_base/lang",
        "dojo/has",
        "../../../base/Descriptor",
        "../../../form/Element",
        "../../../form/Tabs",
        "../gmd/dataQuality/Quality",
        "../gmd/metadataEntity/MetadataSection",
        "../srv/ServiceIdentification",
        "../../iso/gmd/distribution/Distribution",
        "dojo/text!./templates/ServiceRoot.html",
        "../../../../../kernel"],
function(declare, lang, has, Descriptor, Element, Tabs, Quality, MetadataSection, ServiceIdentification, Distribution,
  template, esriKernel) {

  var oThisClass = declare(Descriptor, {

    templateString: template

  });

  

  return oThisClass;
});