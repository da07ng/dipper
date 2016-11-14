define(["../../../core/declare",
        "dojo/_base/lang",
        "dojo/_base/array",
        "dojo/dom-class",
        "dojo/dom-construct",
        "dojo/has",
        "./etc/elementRepeater",
        "./Templated",
        "./LabelMixin",
        "dojo/text!./templates/MultiplicityHeader.html",
        "./MultiplicityTools",
        "./MultiplicityTabs",
        "../../../kernel"],
function(declare, lang, array, domClass, domConstruct, has, elementRepeater,
         Templated, LabelMixin, template, MultiplicityTools, MultiplicityTabs, esriKernel) {

  var oThisClass = declare([Templated, LabelMixin], {

    _currentIndex: -1,
    _isGxeMultiplicityHeader: true,
    _tablessElement: null,
    templateString: template,

    /* Mixed in Element properties */
    label: null,
    target: null,
    minOccurs: 1,
    maxOccurs: 1, // can be "unbounded"
    preferOpen: false,
    showHeader: true,
    useTabs: true,

    postCreate: function() {
      this.inherited(arguments);
    },

    adoptElement: function(element, activate) {
      if(!this.useTabs) {
        this._adoptElementTabless(element);
        return;
      }
      element.showHeader = false;
      element.trackMultiplicity = false;
      element._adoptedForMultiplicity = true;
      domConstruct.place(element.domNode, this.containerNode, "last");
      if(!element._started) {
        element.startup();
      }
      this.tabs.ensureTabButton();
      var tabButton = this.tabs.addTabButton();
      if(activate) {
        this.tabs.activateTab(tabButton);
      } else {
        element.domNode.style.display = "none";
      }
    },

    _adoptElementTabless: function(element) {
      var parent = this._tablessElement.getParent();
      var refNode = parent.containerNode;
      var insertIndex = "last";
      array.forEach(parent.getChildren(), function(child) {
        if(this._isMatchingElement(child)) {
          refNode = child.domNode;
          insertIndex = "after";
        }
      }, this);
      domConstruct.place(element.domNode, refNode, insertIndex);
      if(!element._started) {
        element.startup();
      }
      var elements = this.getElements();
      this.tools.updateUI(elements);
      this.tools.updateSiblings(elements);
    },

    ensureActiveTab: function(immediateChild) {
      if(!this.useTabs) {
        return;
      }
      var elements = this.getElements(), btn;
      array.some(elements, function(element, i) {
        if(element === immediateChild) {
          try {
            btn = this.tabs.getTabButton(i);
            this.tabs.activateTab(btn);
          } catch(ex) {
            console.error(ex);
          }
          return true;
        }
      }, this);
    },

    getCurrentIndex: function(elements) {
      if(this.useTabs) {
        return this._currentIndex;
      }
      var index = -1;
      var element = this._tablessElement;
      array.some(elements, function(child, i) {
        if(child === element) {
          index = i;
          return true;
        }
      });
      return index;
    },

    getElements: function() {
      if(this.useTabs) {
        return this.getChildren();
      }

      var parent = this._tablessElement.getParent();
      var elements = [];
      array.forEach(parent.getChildren(), function(child) {
        if(this._isMatchingElement(child)) {
          elements.push(child);
        }
      }, this);
      return elements;
    },

    getMultiplicityInfo: function(elements) {
      if(!elements) {
        elements = this.getElements();
      }
      var currentIndex = this.getCurrentIndex(elements);
      var numElements = elements.length;
      var lastIndex = (numElements - 1);
      var bRepeatable = this.isElementRepeatable();
      var info = {
        canAdd: false,
        canRemove: false,
        canMoveUp: false,
        canMoveDown: false,
        currentIndex: currentIndex,
        elements: elements,
        numElements: numElements,
        isRepeatable: bRepeatable
      };
      if(bRepeatable) {
        if((this.maxOccurs === "unbounded") || (this.maxOccurs > numElements)) {
          info.canAdd = true;
        }
      }
      if(currentIndex !== -1) {
        if(currentIndex > 0) {
          info.canMoveUp = true;
        }
        if(currentIndex < lastIndex) {
          info.canMoveDown = true;
        }
        if((numElements > 1) && (numElements > this.minOccurs)) {
          info.canRemove = true;
        }
      }
      return info;
    },

    initialize: function(element) {
      var containerNode = this.containerNode;
      var bOptional = (element.minOccurs === 0);

      if(this.useTabs) {
        domConstruct.place(this.domNode, element.domNode, "before");
        domConstruct.place(element.domNode, this.containerNode, "first");
        domClass.add(this.domNode, "tabbed gxeIndent");
        if(!bOptional) {
          domClass.add(this.domNode, "open");
        }
      } else {
        containerNode = element.containerNode;
        this._tablessElement = element;
        domConstruct.place(this.domNode, element.containerNode, "before");
        domConstruct.destroy(this.containerNode);
        domClass.add(this.domNode, "tabless");
        domClass.add(element.domNode, "tabless gxeIndent");
        domClass.remove(this.tools.moveElementUpNode, "gxeIconMoveLeft");
        domClass.add(this.tools.moveElementUpNode, "gxeIconMoveUp");
        domClass.remove(this.tools.moveElementDownNode, "gxeIconMoveRight");
        domClass.add(this.tools.moveElementDownNode, "gxeIconMoveDown");
        this.containerNode = null;
      }

      this.tools.initialize(this);
      if(this.useTabs) {
        this.tabs.initialize(this);
      } else {
        this.tabs.destroyRecursive(false);
        this.tabs = null;
      }

      var sLabel = this.label;
      var bPreferOpen = element.preferOpen;
      var labelNode = this.labelNode;
      this.initializeLabel(sLabel, bOptional, bPreferOpen, labelNode, containerNode);
    },

    _isMatchingElement: function(comparisonElement) {
      // TODO: needs to be more robust?
      if(comparisonElement && (comparisonElement._isGxeElement)) {
        return (this.target === comparisonElement.target);
      }
      return false;
    },

    isElementRepeatable: function() {
      if((this.maxOccurs === "unbounded") || (this.maxOccurs > 1)) {
        return true;
      }
      return false;
    },

    /* returns deferred */
    repeatElement: function(element, activate) {
      // TODO check maxOccurs here?
      return elementRepeater.repeatElement(this, element, activate);
    },

    whenOptionalContentToggled: function(isOptionallyOff) {
      if(!this.useTabs) {
        this._tablessElement._isOptionallyOff = isOptionallyOff; // TODO check this
      }
      if(isOptionallyOff) {
        domClass.remove(this.domNode, "open");
        domClass.add(this.domNode, "closed");
        if(this.tools) {
          this.tools.domNode.style.visibility = "hidden";
        }
        if(this.tabs) {
          this.tabs.domNode.style.visibility = "hidden";
        }
      } else {
        domClass.remove(this.domNode, "closed");
        domClass.add(this.domNode, "open");
        if(this.tools) {
          this.tools.domNode.style.visibility = "visible";
        }
        if(this.tabs) {
          this.tabs.domNode.style.visibility = "visible";
        }
      }
    }

  });

  

  return oThisClass;
});