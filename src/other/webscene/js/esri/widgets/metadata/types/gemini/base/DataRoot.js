define(["../../../../../core/declare",
        "dojo/_base/lang",
        "dojo/has",
        "../../../base/Descriptor",
        "../../../form/Element",
        "../../../form/Tabs",
        "../gmd/dataQuality/Quality",
        "../gmd/identification/DataIdentification",
        "../gmd/metadataEntity/MetadataSection",
        "../../iso/gmd/distribution/Distribution",
        "dojo/text!./templates/DataRoot.html",
        "../../../../../kernel"],
function(declare, lang, has, Descriptor, Element, Tabs, Quality, DataIdentification, MetadataSection, Distribution, template, esriKernel) {

  var oThisClass = declare(Descriptor, {

    templateString: template

  });

  

  return oThisClass;
});