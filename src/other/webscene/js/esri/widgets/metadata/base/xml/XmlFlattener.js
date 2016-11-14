define(["../../../../core/declare",
        "dojo/_base/lang",
        "dojo/_base/array",
        "dojo/has",
        "./xmlUtil",
        "../../../../kernel"],
function(declare, lang, array, has, xmlUtil, esriKernel) {

  var oThisClass = declare(null, {

    constructor: function(args) {
      lang.mixin(this, args);
    },

    flatten: function(xmlDocument, gxeDocument) {
      var domData = {domIndex: {}, domList: [], nNsPfx: 0, nsPfxByUri: {}, gxePfxByUri: {}};
      if(gxeDocument) {
        domData.gxePfxByUri = this._makeGxePfxByUri(gxeDocument);
      }
      var data = {domData: domData};
      var domNode = xmlDocument.documentElement;
      this._flattenDom(data, domNode, "");
      var flattened = {
        valuesByPath: domData.domIndex,
        paths: domData.domList,
        prefixesByUri: domData.nsPfxByUri
      };
      return flattened;
    },

    flattenNode: function(domNode, gxePfxByUri) {
      var domData = {domIndex: {}, domList: [], nNsPfx: 0, nsPfxByUri: {}, gxePfxByUri: gxePfxByUri};
      var data = {domData: domData};
      this._flattenDom(data, domNode, null);
      return domData.domIndex;
    },

    _flattenDom: function(data, domNode, pathPfx) {
      var domData = data.domData;
      var elementNodeType = xmlUtil.nodeTypes.ELEMENT_NODE;
      //var path = qn = this._flattenDomQN(domData,domNode); // original - JSHint - leaking variable qn
      var path = this._flattenDomQN(domData, domNode);
      var qn = path;
      if(pathPfx != null) {
        path = pathPfx + "/" + qn;
      }
      this._flattenDomValue(domData, domNode, path);
      array.forEach(domNode.attributes, function(domChild) {
        var qnA = this._flattenDomQN(domData, domChild);
        var pathA = path + "/@" + qnA;
        this._flattenDomValue(domData, domChild, pathA);
      }, this);
      array.forEach(domNode.childNodes, function(domChild) {
        if(domChild.nodeType === elementNodeType) {
          this._flattenDom(data, domChild, path);
        }
      }, this);
    },

    _flattenDomQN: function(domData, domNode, gxePfxByUri) {
      //var qn = ln = domNode.localName; // original - JSHint - leaking variable ln
      var ln = domNode.localName;
      var qn = ln;
      var nsPfx = null, nsUri = domNode.namespaceURI;
      if(nsUri) {
        if(nsUri in domData.gxePfxByUri) {
          nsPfx = domData.gxePfxByUri[nsUri];
        } else if(nsUri in domData.nsPfxByUri) {
          nsPfx = domData.nsPfxByUri[nsUri];
        } else {
          domData.nNsPfx++;
          nsPfx = "_" + domData.nNsPfx;
          domData.nsPfxByUri[nsUri] = nsPfx;
        }
        qn = nsPfx + ":" + ln;
      }
      return qn;
    },

    _flattenDomValue: function(domData, domNode, path) {
      var text = this._getDomNodeText(domNode);
      if(path in domData.domIndex) {
        domData.domIndex[path].push(text);
      } else {
        domData.domIndex[path] = [text];
        domData.domList.push(path);
      }
    },

    _getDomNodeText: function(domNode) {
      return xmlUtil.getNodeText(domNode);
    },

    _makeGxePfxByUri: function(gxeDocument) {
      var gxePfxByUri = {};
      if(gxeDocument) {
        array.forEach(gxeDocument.getNamespaces(), function(ns) {
          if(ns.prefix && ns.uri) {
            gxePfxByUri[ns.uri] = ns.prefix;
          }
        });
      }
      return gxePfxByUri;
    }

  });

  

  return oThisClass;
});