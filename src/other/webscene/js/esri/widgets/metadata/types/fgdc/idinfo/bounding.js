define(["../../../../../core/declare",
        "dojo/_base/lang",
        "dojo/has",
        "../../../base/Descriptor",
        "../../../form/Element",
        "../../../form/InputNumber",
        "../../../form/fgdc/GeoExtentTool",
        "dojo/text!./templates/bounding.html",
        "../../../../../kernel"],
function(declare, lang, has, Descriptor, Element, InputNumber, GeoExtentTool, template, esriKernel) {

  var oThisClass = declare(Descriptor, {

    templateString: template

  });

  

  return oThisClass;
});