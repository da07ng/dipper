define(["../../../../../core/declare",
        "dojo/_base/lang",
        "dojo/has",
        "../../../base/Descriptor",
        "../../../form/Element",
        "../../../form/Tabs",
        "../idinfo/idinfo",
        "../dataqual/dataqual",
        "../spref/spref",
        "../eainfo/eainfo",
        "../distinfo/distinfo",
        "../metainfo/metainfo",
        "dojo/text!./templates/Root.html",
        "../../../../../kernel"],
function(declare, lang, has, Descriptor, Element, Tabs, idinfo, dataqual, spref, eainfo, distinfo, metainfo, template, esriKernel) {

  var oThisClass = declare(Descriptor, {

    templateString: template

  });

  

  return oThisClass;
});