define(["../../../core/declare",
        "dojo/_base/lang",
        "dojo/_base/array",
        "dojo/dom-construct",
        "dojo/has",
        "../base/InputBase",
        "../base/OptionsMixin",
        "dojo/text!./templates/InputSelectMany.html",
        "../../../kernel"],
function(declare, lang, array, domConstruct, has, InputBase, OptionsMixin, template, esriKernel) {

  var oThisClass = declare([InputBase, OptionsMixin], {

    _supportsMultipleValues: true,
    checkBoxes: null,
    templateString: template,

    /* gxe/form/InputSelectMany common properties, configurable */
    subTarget: null,

    postCreate: function() {
      this.inherited(arguments);
      this.checkBoxes = [];
    },

    startup: function() {
      if(this._started) {
        return;
      }
      this.inherited(arguments);
      this.initializeOptions();
    },

    addOption: function(optionWidget, index) {
      var oThis = this;
      var id = this.id + "_chk" + index;
      var nd = domConstruct.create("div", {"class": "gxeOption"}, this.optionsNode);
      var lbl = optionWidget.label;
      var val = optionWidget.value;

      var params = {id: id, type: "checkbox", value: val};
      if(optionWidget.selected) {
        params.checked = "checked";
      }
      params.onclick = function() {
        oThis._onClick(this);
      };
      var cbx = domConstruct.create("input", params, nd);
      cbx.xtnLabel = lbl;
      this.checkBoxes.push(cbx);
      var ndLbl = domConstruct.create("label", {"for": id}, nd);
      this.setNodeText(ndLbl, lbl);
    },

    filterOptions: function(optionWidgets) {
      if(!this.parentXNode) {
        return optionWidgets;
      }
      if(!this.parentXNode.optionsFilter) {
        return optionWidgets;
      }
      var tokens = this.parentXNode.optionsFilter.split(",");
      var filtered = array.filter(optionWidgets, function(option) {
        return array.some(tokens, function(sv) {
          return option.value === sv;
        });
      });
      return filtered;
    },

    getDisplayValue: function() {
      var a = [];
      array.forEach(this.checkBoxes, function(checkBox) {
        if(checkBox.checked) {
          a.push(checkBox.xtnLabel);
        }
      });
      if(a.length === 1) {
        return a[0];
      }
      else if(a.length > 1) {
        return a;
      }
      return null;
    },

    getInputValue: function() {
      var a = [];
      array.forEach(this.checkBoxes, function(checkBox) {
        if(checkBox.checked) {
          a.push(checkBox.value);
        }
      });
      if(a.length === 1) {
        return a[0];
      } else if(a.length > 1) {
        return a;
      }
      return null;
    },

    importValues: function(info, values) {
      array.forEach(this.checkBoxes, function(checkBox) {
        var s;
        var b = array.some(values, function(value) {
          if(value != null) {
            s = lang.trim(value);
            return (s === checkBox.value);
          }
        });
        checkBox.checked = b;
      });
      this.applyViewOnly();
    },

    initializeOptions: function() {
      this.fetchOptionWidgets().then(
        lang.hitch(this, function(optionWidgets) {
          var filtered = this.filterOptions(optionWidgets);
          this.populateOptions(filtered);
        }),
        lang.hitch(this, function(error) {
          // TODO handle error
          console.error(error);
        }),
        lang.hitch(this, function(progress) {
          // TODO handle error
        })
      );
    },

    _onClick: function(o) {
      this.emitInteractionOccurred();
    },

    populateOptions: function(optionWidgets) {
      array.forEach(optionWidgets, function(widget, i) {
        this.addOption(widget, i);
      }, this);

      // TODO we no longer need the declared gxe/form/Option widgets
      var nd = this.containerNode;
      this.destroyDescendants(false);
      setTimeout(function() {
        domConstruct.destroy(nd);
      }, 5000);
    }

  });

  

  return oThisClass;
});