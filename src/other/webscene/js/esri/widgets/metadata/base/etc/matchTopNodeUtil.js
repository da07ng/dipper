define(["dojo/_base/lang",
        "dojo/_base/array",
        "dojo/has",
        "../xml/xmlUtil",
        "../xml/XmlFlattener",
        "../../../../kernel"],
function(lang, array, has, xmlUtil, XmlFlattener, esriKernel) {

  var oThisObject = {

    evaluateDomMatch: function(element, domNodes, gxePrefixesByUri) {
      //console.warn("hasConditions",element.target,this.hasMatchConditions(element));
      if(!this.hasMatchConditions(element)) {
        return domNodes;
      }
      var flattener = new XmlFlattener();
      var matches = [], nConditions = element.matchTopNode.length;
      array.forEach(domNodes, function(domNode) {
        var nMatched = 0;
        array.forEach(element.matchTopNode, function(condition) {
          var valuesByPath = flattener.flattenNode(domNode, gxePrefixesByUri);
          var bMatches = this._evaluateDomNode(element, domNode, valuesByPath, condition);
          if(bMatches) {
            nMatched++;
          }
        }, this);
        if(nMatched === nConditions) {
          matches.push(domNode);
        }
      }, this);
      return matches;
    },

    evaluateXNodeMatch: function(element, clonedElement) {
      if(!this.hasMatchConditions(element)) {
        return true;
      }
      var nMatched = 0, nConditions = element.matchTopNode.length;
      array.forEach(element.matchTopNode, function(condition) {
        var widget = this._findXNode(clonedElement, condition.qPath, null);
        if(!widget) {
          return;
        }
        var bMatches = this._evaluateXNode(widget, condition);
        if(bMatches) {
          nMatched++;
        } else {
          return;
        }
      }, this);
      return (nMatched === nConditions);
    },

    hasMatchConditions: function(element) {
      if(element.matchTopNode && element.matchTopNode.push && (element.matchTopNode.length > 0)) {
        return true;
      }
      return false;
    },

    _evaluateDomNode: function(element, domNode, valuesByPath, condition) {
      // TODO string vs number consideration?
      var value = null, values = null;
      var path = element.target + "/" + condition.qPath;
      if(path in valuesByPath) {
        values = valuesByPath[path];
        if(values && (values.length > 0)) {
          value = values[0];
        }
      } else {
        if(condition.qMode !== "mustNot") {
          return false;
        }
      }
      var bSame = (condition.qValue === null) || (value === condition.qValue);
      if(condition.qMode === "mustNot") {
        return !bSame;
      }
      return bSame;
    },

    _evaluateXNode: function(widget, condition) {
      // TODO string vs number consideration?
      var value = widget.getXmlValue();
      var bSame = (condition.qValue === null) || (value === condition.qValue);
      if(condition.qMode === "mustNot") {
        return !bSame;
      }
      return bSame;
    },

    _findXNode: function(widget, targetPath, currentPath) {
      var foundWidget = null, recurse = true;
      if(widget._isGxeElement) {
        if(currentPath === null) {
          currentPath = "";
        } else {
          if(currentPath.length > 0) {
            currentPath += "/";
          }
          currentPath += widget.target;
          if(targetPath === currentPath) {
            return widget;
          } else {
            recurse = false;
            if(targetPath.indexOf(currentPath) === 0) {
              recurse = true;
            }
          }
        }
      } else if(widget._isGxeAttribute) {
        recurse = false;
        if(currentPath !== null) {
          if(currentPath.length > 0) {
            currentPath += "/";
          }
          currentPath += "@" + widget.target;
          if(targetPath === currentPath) {
            return widget;
          }
        }
      }
      if(recurse) {
        array.some(widget.getChildren(), function(child) {
          foundWidget = this._findXNode(child, targetPath, currentPath);
          if(foundWidget) {
            return true;
          }
        }, this);
      }
      return foundWidget;
    }

  };

  

  return oThisObject;
});