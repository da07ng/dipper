define(["../../../../core/declare",
        "dojo/_base/lang",
        "dojo/_base/array",
        "dojo/has",
        "../etc/docUtil",
        "../etc/matchTopNodeUtil",
        "./XmlFlattener",
        "./xmlUtil",
        "../../../../kernel",
        "dojo/sniff"],
function(declare, lang, array, has, docUtil, matchTopNodeUtil, XmlFlattener, xmlUtil, esriKernel) {

  var oThisClass = declare(null, {

    constructor: function(args) {
      lang.mixin(this, args);
    },

    importDocument: function(gxeDocument, xmlDocument, asTemplate) {
      var rootElement = gxeDocument.rootElement;
      var data = {
        asTemplate: asTemplate,
        considerGML3andGML32: true,
        gxeDocument: gxeDocument,
        xmlDocument: xmlDocument,
        gxeData: {
          nsUrisByPrefix: xmlUtil.makeGxeUrisByPrefix(gxeDocument.getNamespaces()),
          nsPrefixesByUri: xmlUtil.makeGxePrefixesByUri(gxeDocument.getNamespaces())
        }
      };
      this._walk(data, rootElement, null);
    },

    _findMatchingDomAttribute: function(data, target, domNode) {
      var match = null;
      array.some(domNode.attributes, function(domChild) {
        if(this._isMatching(data, target, domChild)) {
          match = domChild;
          return true;
        }
      }, this);
      return match;
    },

    _findMatchingDomElements: function(data, target, domNode) {
      var matches = null, nodeType = xmlUtil.nodeTypes.ELEMENT_NODE;
      array.forEach(domNode.childNodes, function(domChild) {
        if(domChild.nodeType === nodeType) {
          if(this._isMatching(data, target, domChild)) {
            if(matches === null) {
              matches = [];
            }
            matches.push(domChild);
          }
        }
      }, this);
      return matches;
    },

    _findMatchingSubTarget: function(data, subTarget, domNode) {
      var match = null, nodeType = xmlUtil.nodeTypes.ELEMENT_NODE;
      array.some(domNode.childNodes, function(domChild) {
        if(domChild.nodeType === nodeType) {
          if(this._isMatching(data, subTarget, domChild)) {
            match = domChild;
            return true;
          }
        }
      }, this);
      return match;
    },

    _isMatching: function(data, target, domNode) {
      var a, bMatches = false, targetNS = null;
      var nsUrisByPrefix = data.gxeData.nsUrisByPrefix;
      var pfx, name = target;
      if(name.indexOf(":") !== -1) {
        a = name.split(":");
        pfx = a[0];
        name = a[1];
        if(pfx in nsUrisByPrefix) {
          targetNS = nsUrisByPrefix[pfx];
        } else {
          // TODO throw configuration warning
          console.log("Warning: namespace prefix was not configured: " + target);
        }
      }
      if(has("ie") <= 8) {
        targetNS = "";
      }

      var bCheckGML = data.considerGML3andGML32;
      var bNSMatches = (domNode.namespaceURI === targetNS);
      if(!bNSMatches && bCheckGML) {
        if(targetNS === "http://www.opengis.net/gml/3.2") {
          bNSMatches = (domNode.namespaceURI === "http://www.opengis.net/gml");
        } else if(targetNS === "http://www.opengis.net/gml") {
          bNSMatches = (domNode.namespaceURI === "http://www.opengis.net/gml/3.2");
        }
      }
      if(bNSMatches) {
        if(name === domNode.localName) {
          bMatches = true;
        }
      }
      return bMatches;
    },

    _getDomNodeText: function(domNode) {
      return xmlUtil.getNodeText(domNode);
    },

    _getDomNodeTextValues: function(data, domNodes, subTarget) {
      var values = [], text, subNode;
      array.forEach(domNodes, function(domNode) {
        text = null;
        if(!subTarget) {
          text = this._getDomNodeText(domNode);
        } else {
          subNode = this._findMatchingSubTarget(data, subTarget, domNode);
          if(subNode) {
            text = this._getDomNodeText(subNode);
          }
        }
        if(text != null) {
          values.push(text);
        }
      }, this);
      return values;
    },

    _printGxeReferences: function(elementReference) {
      var i, pfx = "";
      for(i = 0; i < elementReference.depth; i++) {
        pfx += "  ";
      }
      console.log(pfx + elementReference.widget.target);
      array.forEach(elementReference.attributeRefs, function(ref) {
        console.log(pfx + "    @" + ref.widget.target);
      });
      array.forEach(elementReference.elementRefs, function(ref) {
        this._printGxeReferences(ref);
      }, this);
    },

    _updateAttribute: function(data, widget, domNode) {
      if(widget.fixed) {
        return;
      }
      var text, attr = this._findMatchingDomAttribute(data, widget.target, domNode);
      if(attr) {
        text = this._getDomNodeText(attr);
        this._updateXNode(data, widget, attr, text);
      }
    },

    _updateElementText: function(data, widget, domNode) {
      if(widget.fixed) {
        return;
      }
      var text = this._getDomNodeText(domNode);
      this._updateXNode(data, widget, domNode, text);
    },

    _updateXNode: function(data, widget, domNode, text) {
      if((text === null) || !widget.inputWidget) {
        return;
      }
      if(widget.isDocumentTitle) {
        data.gxeDocument.originalTitle = text;
        if(data.asTemplate) {
          return;
        }
      }
      widget.inputWidget.importValue({domNode: domNode, asTemplate: data.asTemplate}, text);
      if(!widget.hide && widget.toggleContent) {
        widget.toggleContent(true);
      }
    },

    _walk: function(data, widget, domNode) {
      if(widget.fixed) {
        return;
      }
      var bRecurse = true, matches = null, parent, parent2, parent3, values;
      if(!domNode) {
        domNode = data.xmlDocument.documentElement;
        if(this._isMatching(data, widget.target, domNode)) {
          matches = [domNode];
        } else {
          throw new Error("The XML root element does not match the editor definition.");
        }
      } else if(widget._isGxeElement) {
        matches = this._findMatchingDomElements(data, widget.target, domNode);
      } else if(widget._isGxeAttribute) {
        bRecurse = false;
        this._updateAttribute(data, widget, domNode);
      }
      if(matches && (matches.length > 0)) {
        matches = matchTopNodeUtil.evaluateDomMatch(widget, matches, data.gxeData.nsPrefixesByUri);
      }

      var supportsMultipleValues = (widget.inputWidget && widget.inputWidget._supportsMultipleValues);
      var multiplicityHeader = widget.multiplicityHeader;
      if(matches && (matches.length > 0)) {

        if(widget.toggleContent) {
          widget.toggleContent(true);
        }
        parent = widget.getParent();
        if(parent && parent._isGxeElementChoice) {
          parent.ensureActiveTab(widget);
        } else if(parent) {
          parent2 = parent.getParent();
          if(parent2 && parent2._isGxeElementChoice) {
            parent2.ensureActiveTab(parent);
          } else if(parent2) {
            parent3 = parent2.getParent();
            if(parent3 && parent3._isGxeElementChoice) {
              parent3.ensureActiveTab(parent2);
            }
          }
        }

        if(supportsMultipleValues) {
          bRecurse = false;
          values = this._getDomNodeTextValues(data, matches, widget.inputWidget.subTarget);
          widget.inputWidget.importValues({domNodes: matches}, values);
        } else if(matches.length === 1) {
          domNode = matches[0];
          this._updateElementText(data, widget, domNode);
        } else if(multiplicityHeader) {
          domNode = matches[0];
          this._updateElementText(data, widget, matches[0]);
          array.forEach(matches, function(domNode2, i) {
            if(i > 0) {
              if(widget.maxOccurs !== "unbounded") {
                if(i === widget.maxOccurs) {
                  return;
                }
              }
              // TODO is this delay ok, should we process the nodes from a stack??
              //setTimeout(lang.hitch(this,function(){
              multiplicityHeader.repeatElement(widget, false).then(
                lang.hitch(this, function(widget2) {
                  if(widget2) {
                    this._updateElementText(data, widget2, domNode2);
                    array.forEach(widget2.getChildren(), function(widget3) {
                      this._walk(data, widget3, domNode2);
                    }, this);
                  }
                }), function(err) {
                  console.error(err);
                }
              );
              //}),100);
            }
          }, this);

        } else {
          // TODO is this correct?
          domNode = matches[0];
          this._updateElementText(data, widget, domNode);
        }
      }

      if(bRecurse) {
        array.forEach(widget.getChildren(), function(widget2) {
          this._walk(data, widget2, domNode);
        }, this);
      }
    }

  });

  

  return oThisClass;
});