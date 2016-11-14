define(["../../../core/declare",
        "dojo/_base/lang",
        "dojo/_base/array",
        "dojo/dom-class",
        "dojo/dom-construct",
        "dojo/has",
        "./Templated",
        "dojo/text!./templates/MultiplicityTabs.html",
        "./TabButton",
        "../../../kernel"],
function(declare, lang, array, domClass, domConstruct, has, Templated, template, TabButton, esriKernel) {

  var oThisClass = declare([Templated], {

    multiplicityHeader: null,
    templateString: template,

    postCreate: function() {
      this.inherited(arguments);
    },

    activateTab: function(tabButton) {
      if(!tabButton) {
        return;
      }
      this.highlightTab(tabButton);
      var n = tabButton.tabIndex;
      this._setCurrentIndex(n);

      var elements = this.getElements();
      array.forEach(elements, function(element, i) {
        if(i === n) {
          element.domNode.style.display = "block";
        } else {
          element.domNode.style.display = "none";
        }
      });
      this._updateTools(elements);
    },

    addTabButton: function() {
      var currentIndex = this.getCurrentIndex();
      var tabIndex = this.getChildren().length;
      var label = "" + (tabIndex + 1);
      var tabButton = new TabButton({
        label: label,
        tabIndex: tabIndex,
        onClick: lang.hitch(this, function(tabButtonClicked) {
          this.activateTab(tabButtonClicked);
        })
      });
      domConstruct.place(tabButton.domNode, this.containerNode, "last");
      if(currentIndex === -1) {
        this._setCurrentIndex(0);
        domClass.add(tabButton.domNode, "current");
      }
      this.updateUI();
      return tabButton;
    },

    ensureTabButton: function() {
      if(this.getChildren().length === 0) {
        this.addTabButton();
      }
    },

    getCurrentIndex: function() {
      return this.multiplicityHeader._currentIndex;
    },

    _setCurrentIndex: function(index) {
      this.multiplicityHeader._currentIndex = index;
    },

    getElements: function() {
      return this.multiplicityHeader.getElements();
    },

    getMultiplicityInfo: function() {
      return this.multiplicityHeader.getMultiplicityInfo(null);
    },

    getTabButton: function(index) {
      return this.getChildren()[index];
    },

    highlightTab: function(tabButton) {
      array.forEach(this.getChildren(), function(child) {
        domClass.remove(child.domNode, "current");
      });
      domClass.add(tabButton.domNode, "current");
    },

    initialize: function(multiplicityHeader) {
      this.multiplicityHeader = multiplicityHeader;
      this.updateUI();
    },

    sync: function() {
      var index = this.getCurrentIndex();
      var children = this.getChildren();
      array.forEach(children, function(tabButton, i) {
        tabButton.tabIndex = i;
        tabButton.setLabel("" + (i + 1));
        if(i === index) {
          domClass.add(tabButton.domNode, "current");
        } else {
          domClass.remove(tabButton.domNode, "current");
        }
      });
      if(index < children.length) {
        this.activateTab(this.getTabButton(index));
      }
      this.updateUI();
    },

    _updateTools: function(elements) {
      this.multiplicityHeader.tools.updateUI(elements);
    },

    updateUI: function() {
      var info = this.getMultiplicityInfo();
      if(info.numElements > 1) {
        this.domNode.style.display = "inline-block";
      } else {
        this.domNode.style.display = "none";
      }
    }

  });

  

  return oThisClass;
});