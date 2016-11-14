define(["../../../core/declare",
        "dojo/_base/lang",
        "dojo/_base/array",
        "dojo/dom-construct",
        "dojo/dom-style",
        "dojo/has",
        "../base/InputBase",
        "../base/OptionsMixin",
        "dojo/text!./templates/InputSelectOne.html",
        "../../../kernel"],
function(declare, lang, array, domConstruct, domStyle, has, InputBase, OptionsMixin, template, esriKernel) {

  var oThisClass = declare([InputBase, OptionsMixin], {

    _wasValueSet: false,
    templateString: template,

    postCreate: function() {
      this.inherited(arguments);
    },

    startup: function() {
      if(this._started) {
        return;
      }
      this.inherited(arguments);
      this.initializeOptions();
    },

    connectXNode: function(parentXNode, isViewOnly) {
      this.inherited(arguments);
      var v = parentXNode.value;
      if(!isViewOnly || parentXNode.fixed) {
        if((typeof v !== "undefined") && (v !== null)) {
          this.setInputValue(v);
        }
      }
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
      if(this.parentXNode && this.parentXNode.gxeDocument && this.parentXNode.gxeDocument.isViewOnly) {
        if(!this._wasValueSet) {
          return null;
        }
      }
      var sel = this.focusNode, opt = this._getSelectedOption();
      if(opt && !opt.xtnIsOther) {
        return sel.options[sel.selectedIndex].label;
      } else if(opt && opt.xtnIsOther) {
        return this.otherNode.value;
      }
      return null;
    },

    getInputValue: function() {
      if(this.parentXNode && this.parentXNode.gxeDocument && this.parentXNode.gxeDocument.isViewOnly) {
        if(!this._wasValueSet) {
          return null;
        }
      }
      var sel = this.focusNode, opt = this._getSelectedOption();
      if(opt && !opt.xtnIsOther) {
        return sel.options[sel.selectedIndex].value;
      } else if(opt && opt.xtnIsOther) {
        return this.otherNode.value;
      }
      return null;
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

    _getSelectedOption: function() {
      var nSel = this.focusNode.selectedIndex;
      if(nSel !== -1) {
        return this.focusNode.options[nSel];
      }
      return null;
    },

    _onChange: function(evt) {
      var opt = this._getSelectedOption();
      if(opt) {
        if(opt.xtnIsOther) {
          domStyle.set(this.otherNode, "display", "");
        } else {
          domStyle.set(this.otherNode, "display", "none");
        }
      } else {
        domStyle.set(this.otherNode, "display", "none");
      }
      this.emitInteractionOccurred();
    },

    _onOtherChange: function(evt) {
      this.emitInteractionOccurred();
    },

    _onOtherKeyup: function(evt) {
      this.emitInteractionOccurred();
    },

    populateOptions: function(optionWidgets) {
      var selectNode = this.focusNode;
      var selectOptions = selectNode.options;
      var hasSelected = false;
      array.forEach(optionWidgets, function(w) {
        var option = null, defaultSelected = false, selected = false;
        if(!hasSelected && w.selected) {
          hasSelected = defaultSelected = selected = true;
        }
        try {
          option = new Option(w.label, w.value, defaultSelected, selected);
          if(w.isOther) {
            option.xtnIsOther = true;
          }
          selectOptions.add(option);
        } catch(ex) {
          console.error(ex);
        }
      });

      // TODO we no longer need the declared gxe/form/Option widgets
      var nd = this.containerNode;
      this.destroyDescendants(false);
      setTimeout(function() {
        domConstruct.destroy(nd);
      }, 5000);
    },

    setInputValue: function(value) {
      this._wasValueSet = true;
      if(typeof value === "undefined") {
        value = null;
      }
      var nSelIdx = -1, nOtherIdx = -1;
      array.some(this.focusNode.options, function(opt, i) {
        if(!opt.xtnIsOther) {
          if(opt.value === value) {
            nSelIdx = i;
            return true;
          }
        } else {
          nOtherIdx = i;
        }
      });
      if((nSelIdx === -1) && (nOtherIdx !== -1)) {
        this.focusNode.selectedIndex = nOtherIdx;
        this.otherNode.value = value;
        domStyle.set(this.otherNode, "display", "");
      } else if(nSelIdx !== -1) {
        this.focusNode.selectedIndex = nSelIdx;
        domStyle.set(this.otherNode, "display", "none");
      } else {
        domStyle.set(this.otherNode, "display", "none");
      }
      this.applyViewOnly();
    }

  });

  

  return oThisClass;
});