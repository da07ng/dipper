define(["../../../core/declare",
        "dojo/_base/lang",
        "dojo/_base/array",
        "dojo/dom-class",
        "dojo/dom-construct",
        "dojo/dom-style",
        "dojo/has",
        "../base/Templated",
        "dojo/text!./templates/Tabs.html",
        "../base/TabButton",
        "../base/TabRadio",
        "../../../kernel"],
function(declare, lang, array, domClass, domConstruct, domStyle, has,
         Templated, template, TabButton, TabRadio, esriKernel) {

  var oThisClass = declare([Templated], {

    _activeTabButton: null,
    _isGxeTabs: true,
    _tabButtons: null,
    templateString: template,

    /* gxe/form/Section properties, configurable */
    useRadios: false,

    postCreate: function() {
      this.inherited(arguments);
      this._tabButtons = [];
    },

    startup: function() {
      if(this._started) {
        return;
      }
      this.inherited(arguments); // Let the children start first.
      this._buildTabs();
    },

    _activateTab: function(tabButton) {
      var useRadios = this.useRadios;
      array.forEach(this._tabButtons, function(btn) {
        if(btn === tabButton) {
          domClass.add(btn.domNode, "current");
          domStyle.set(btn.tabWgt.domNode, "display", "block");
          if(useRadios) {
            btn.tabWgt._isOptionallyOff = false;
          }
        } else {
          domClass.remove(btn.domNode, "current");
          domStyle.set(btn.tabWgt.domNode, "display", "none");
          if(useRadios) {
            btn.tabWgt._isOptionallyOff = true;
          }
        }
      });
    },

    _addTab: function(widget) {
      var label = this._getLabel(widget);
      domStyle.set(widget.domNode, "display", "none");

      var btn = null, radioName = this.id + "_radios";
      if(this.useRadios) {
        btn = new TabRadio({
          label: label,
          tabWgt: widget,
          radioName: radioName,
          onClick: lang.hitch(this, function(btn2) {
            this._activateTab(btn2);
          })
        });
      } else {
        btn = new TabButton({
          label: label,
          tabWgt: widget,
          onClick: lang.hitch(this, function(btn2) {
            this._activateTab(btn2);
          })
        });
      }
      if(widget.hide) {
        domStyle.set(btn.domNode, "display", "none");
      }
      domConstruct.place(btn.domNode, this.tabsNode, "last");
      this._tabButtons.push(btn);
      return btn;
    },

    _buildTabs: function() {
      var btn = null;
      array.forEach(this.getChildren(), function(child) {
        this._addTab(child);
      }, this);
      if(this._tabButtons.length > 0) {
        btn = this._tabButtons[0];
        if(btn.radioName) {
          btn.setChecked(true);
        }
        this._activateTab(btn);
        domStyle.set(this.domNode, "display", "block");
      }
    },

    ensureActiveTab: function(immediateChild) {
      array.some(this._tabButtons, function(btn) {
        if(btn.tabWgt === immediateChild) {
          this._activateTab(btn);
          if(this.useRadios) {
            if(btn.setChecked) {
              btn.setChecked(true);
            }
          }
          return true;
        }
      }, this);
    },

    _getLabel: function(widget) {
      if(typeof widget.getLabelString === "function") {
        return widget.getLabelString();
      } else if(typeof widget.label === "string") {
        return widget.label;
      }
      return "Untitled";
    }

  });

  

  return oThisClass;
});