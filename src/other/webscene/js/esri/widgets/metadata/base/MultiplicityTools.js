define(["../../../core/declare",
        "dojo/_base/lang",
        "dojo/_base/array",
        "dojo/dom-class",
        "dojo/dom-construct",
        "dojo/has",
        "./Templated",
        "dojo/text!./templates/MultiplicityTools.html",
        "../../../kernel"],
function(declare, lang, array, domClass, domConstruct, has, Templated, template, esriKernel) {

  var oThisClass = declare([Templated], {

    _isGxeMultiplicityTools: true,
    multiplicityHeader: null,
    templateString: template,

    postCreate: function() {
      this.inherited(arguments);
    },

    getCurrentIndex: function(elements) {
      return this.multiplicityHeader.getCurrentIndex(elements);
    },

    _setCurrentIndex: function(index) {
      if(this.multiplicityHeader.useTabs) {
        this.multiplicityHeader._currentIndex = index;
      }
    },

    getElements: function() {
      return this.multiplicityHeader.getElements();
    },

    getMultiplicityInfo: function(elements) {
      return this.multiplicityHeader.getMultiplicityInfo(elements);
    },

    getSiblings: function(elements) {
      if(this.multiplicityHeader.useTabs) {
        return [];
      }
      var siblings = [];
      if(!elements) {
        elements = this.getElements();
      }
      array.forEach(elements, function(element) {
        var tools = null;
        if(element.multiplicityHeader) {
          tools = element.multiplicityHeader.tools;
          if(tools && (tools !== this)) {
            siblings.push(tools);
          }
        }
      }, this);
      return siblings;
    },

    getTabs: function() {
      return this.multiplicityHeader.tabs;
    },

    initialize: function(multiplicityHeader) {
      this.multiplicityHeader = multiplicityHeader;
      var bRepeatable = this.isRepeatable();
      if(bRepeatable) {
        this.domNode.style.display = "inline-block";
      } else {
        this.domNode.style.display = "none";
      }
      this.updateUI(null);
    },

    isRepeatable: function() {
      return this.multiplicityHeader.isElementRepeatable();
    },

    moveElementDownClicked: function() {
      var info = this.getMultiplicityInfo();
      if(!info.canMoveDown) {
        return;
      }

      var tabs = this.getTabs();
      var elements = info.elements;
      var index = info.currentIndex;
      var element = elements[index];
      var refNode = elements[index + 1].domNode;
      domConstruct.place(element.domNode, refNode, "after");
      if(tabs) {
        index++;
        this._setCurrentIndex(index);
        tabs.highlightTab(tabs.getTabButton(index));
      }
      elements = this.getElements();
      this.updateUI(elements);
      if(!tabs) {
        this.updateSiblings(elements);
      }
    },

    moveElementUpClicked: function() {
      var info = this.getMultiplicityInfo();
      if(!info.canMoveUp) {
        return;
      }

      var tabs = this.getTabs();
      var elements = info.elements;
      var index = info.currentIndex;
      var element = elements[index];
      var refNode = elements[index - 1].domNode;
      domConstruct.place(element.domNode, refNode, "before");
      if(tabs) {
        index--;
        this._setCurrentIndex(index);
        tabs.highlightTab(tabs.getTabButton(index));
      }
      elements = this.getElements();
      this.updateUI(elements);
      if(!tabs) {
        this.updateSiblings(elements);
      }
    },

    removeElementClicked: function() {
      var info = this.getMultiplicityInfo();
      if(!info.canRemove) {
        return;
      }

      var siblings = null;
      var tabs = this.getTabs();
      var elements = info.elements;
      var index = info.currentIndex;
      var isLast = (index === (elements.length - 1));
      var element = elements[index];
      if(!tabs) {
        siblings = this.getSiblings(elements);
      }
      element.destroyRecursive(false);
      if(tabs) {
        tabs.getTabButton(index).destroyRecursive(false);
        if(isLast) {
          this._setCurrentIndex(index - 1);
        }
        tabs.sync();
        this.updateUI(null);
      } else {
        array.forEach(siblings, function(tools) {
          tools.updateUI(null);
        });
      }
    },

    repeatElementClicked: function() {
      var info = this.getMultiplicityInfo();
      if(!info.canAdd) {
        return;
      }

      var index = info.currentIndex;
      if(index === -1) {
        index = 0;
      }
      var element = info.elements[index];
      this.multiplicityHeader.repeatElement(element, true);
    },

    updateSiblings: function(elements) {
      if(this.multiplicityHeader.useTabs) {
        return;
      }
      var siblings = this.getSiblings(elements);
      array.forEach(siblings, function(tools) {
        tools.updateUI(elements);
      });
    },

    updateUI: function(elements) {
      var apply = function(nd, bEnabled) {
        if(bEnabled) {
          nd.disabled = false;
          domClass.remove(nd, "gxeDisabledIcon");
        } else {
          nd.disabled = true;
          domClass.add(nd, "gxeDisabledIcon");
        }
      };

      var info = this.getMultiplicityInfo(elements);
      apply(this.repeatElementNode, info.canAdd);
      apply(this.removeElementNode, info.canRemove);
      apply(this.moveElementUpNode, info.canMoveUp);
      apply(this.moveElementDownNode, info.canMoveDown);
    }

  });

  

  return oThisClass;
});