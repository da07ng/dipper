define(["dojo/_base/lang",
        "dojo/_base/array",
        "dojo/dom-class",
        "dojo/has",
        "../../../../kernel"],
function(lang, array, domClass, has, esriKernel) {

  var oThisObject = {

    applyViewOnly: function(gxeDocument) {
      this._walkNonTabs(gxeDocument.rootDescriptor);
      this._walkTabs(gxeDocument.rootDescriptor);
    },

    hasViewableContent: function(widget) {
      if(widget.hide || widget._isOptionallyOff) {
        return false;
      }
      if(widget._isGxeNode) {
        if(widget.checkXmlValue() !== null) {
          return true;
        }
      }
      return array.some(widget.getChildren(), function(widget2) {
        return this.hasViewableContent(widget2);
      }, this);
    },

    _walkNonTabs: function(widget) {
      var bHasContent;
      var bProcess = (widget._isGxeNode || widget._isGxeMultiplicityHeader);
      if(bProcess) {
        bHasContent = this.hasViewableContent(widget);
        if(!bHasContent) {
          widget.domNode.style.display = "none";
        }
      }
      array.forEach(widget.getChildren(), function(widget2) {
        this._walkNonTabs(widget2);
      }, this);
    },

    _walkTabs: function(widget) {
      var bHasContent, btns = [];
      if(widget._isGxeTabs) {
        array.forEach(widget._tabButtons, function(btn) {
          bHasContent = this.hasViewableContent(btn.tabWgt);
          if(!bHasContent) {
            btn.domNode.style.display = "none";
          } else {
            btns.push(btn);
          }
        }, this);
        if(btns.length > 0) {
          if(!domClass.contains(btns[0].domNode, "current")) {
            widget._activateTab(btns[0]);
          }
        }
        /*
         if (widget._isGxeElementChoice) {
         if (widget.tabsNode) widget.tabsNode.style.display = "none";
         }
         */
      }
      array.forEach(widget.getChildren(), function(widget2) {
        this._walkTabs(widget2);
      }, this);
    }

  };

  

  return oThisObject;
});