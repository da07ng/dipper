define(["../../../core/declare",
        "dojo/_base/lang",
        "dojo/dom-style",
        "dojo/has",
        "./etc/docUtil",
        "dijit/_WidgetBase",
        "dijit/_TemplatedMixin",
        "dijit/_WidgetsInTemplateMixin",
        "dojo/i18n!../nls/i18nBase",
        "../../../kernel"],
function(declare, lang, domStyle, has, docUtil, _WidgetBase, _TemplatedMixin,
         _WidgetsInTemplateMixin, i18nBase, esriKernel) {

  var oThisClass = declare([_WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin], {

    _destroyWasCalled: false,

    i18nBase: i18nBase,
    templateString: "<div data-dojo-attach-point='containerNode'></div>",

    /* Templated properties, configurable */
    hide: false,

    postCreate: function() {
      this.inherited(arguments);
      if(this.hide) {
        domStyle.set(this.domNode, "display", "none");
      }

      // This is useful during dev to ensure that everything is getting destroyed
      /*
       setTimeout(lang.hitch(this,function(){
       if (!this._destroyWasCalled) {
         console.warn("Destroy not called",this);
       } else {
         console.warn("Destroy was called.");
       }
       }),1000*60*1);
       */

    },

    destroy: function() {
      this._destroyWasCalled = true;
      this.inherited(arguments);
    },

    setI18nNodeText: function(nd, text) {
      docUtil.setI18nNodeText(nd, text);
    },

    setNodeText: function(nd, text) {
      docUtil.setNodeText(nd, text);
    }

  });

  

  return oThisClass;
});