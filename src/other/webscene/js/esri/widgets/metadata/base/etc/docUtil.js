define(["dojo/_base/lang",
        "dojo/_base/array",
        "dojo/has",
        "../../../../kernel"],
function(lang, array, has, esriKernel) {

  var oThisObject = {

    ensureVisibility: function(widget) {
      var previous = widget;
      var parent = widget.getParent();
      while(parent) {
        if(parent._isGxeTabs) {
          parent.ensureActiveTab(previous);
        } else if(parent._isGxeMultiplicityHeader) {
          if(parent.useTabs) {
            parent.ensureActiveTab(previous);
          }
        }
        previous = parent;
        parent = parent.getParent();
      }
    },

    findElementChoice: function(widget, ensureActive) {
      var p, previous = widget;
      var parent = widget.getParent();
      while(parent) {
        if(parent._isGxeElementChoice) {
          if(ensureActive) {
            parent.ensureActiveTab(previous);
            p = parent.getParent();
            if(p && p.toggleContent) {
              p.toggleContent(true);
            }
          }
          return parent;
        }
        previous = parent;
        parent = parent.getParent();
      }
      return null;
    },

    findDescriptor: function(widget) {
      //if (widget._isGxeDescriptor) return widget;
      var parent = widget.getParent();
      while(parent) {
        if(parent._isGxeDescriptor) {
          return parent;
        }
        parent = parent.getParent();
      }
      return null;
    },

    findDescriptorAndPath: function(widget) {
      var r = {descriptor: null, path: ""};
      if(widget._isGxeNode) {
        r.path = "" + widget.target;
      }
      var parent = widget.getParent();
      while(parent) {
        if(parent._isGxeElement) {
          r.path = parent.target + "/" + r.path;
        }
        if(parent._isGxeDescriptor) {
          r.descriptor = parent;
          break;
        }
        parent = parent.getParent();
      }
      return r;
    },

    findGxeContext: function(widget) {
      if(widget.gxeContext) {
        return widget.gxeContext;
      }
      var parent = widget.getParent();
      while(parent) {
        if(parent.gxeContext) {
          return parent.gxeContext;
        }
        parent = parent.getParent();
      }
      return null;
    },

    findGxeDocument: function(widget) {
      if(widget.gxeDocument) {
        return widget.gxeDocument;
      }
      var parent = this.getParent();
      while(parent) {
        if(parent.gxeDocument) {
          return parent.gxeDocument;
        }
        parent = parent.getParent();
      }
      return null;
    },

    setI18nNodeText: function(nd, text) {
      if(typeof text === "undefined") {
        text = null;
      }
      nd.innerHTML = "";
      if(text !== null) {
        nd.appendChild(document.createTextNode(text));
      }
    },

    setNodeText: function(nd, text) {
      if(typeof text === "undefined") {
        text = null;
      }
      nd.innerHTML = "";
      if(text !== null) {
        nd.appendChild(document.createTextNode(text));
      }
    }

  };

  

  return oThisObject;
});