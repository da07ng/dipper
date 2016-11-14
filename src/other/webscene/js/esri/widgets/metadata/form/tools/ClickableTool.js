define(["../../../../core/declare",
        "dojo/_base/lang",
        "dojo/has",
        "../../base/Templated",
        "dojo/text!./templates/ClickableTool.html",
        "../../../../kernel"],
function(declare, lang, has, Templated, template, esriKernel) {

  var oThisClass = declare([Templated], {

    _isGxeInputTool: true,
    templateString: template,

    /* ClickableTool Properties, configurable */
    label: "",

    postCreate: function() {
      this.inherited(arguments);
    },

    findInputWidget: function(evt) {
      var widget = null;
      var parent = this.getParent();
      while(parent) {
        if(parent._isGxeInput) {
          return parent;
        } else if(parent._isGxeElement) {
          widget = parent;
          break;
        }
        if(parent._isGxeAttribute) {
          widget = parent;
          break;
        }
        parent = parent.getParent();
      }
      if(widget && widget.inputWidget) {
        return widget.inputWidget;
      }
      return null;
    },

    _onToolClick: function(evt) {
      var inputWidget = this.findInputWidget(evt);
      this.whenToolClicked(evt, inputWidget);
    },

    whenToolClicked: function(evt, inputWidget) {
    }

  });

  

  return oThisClass;
});