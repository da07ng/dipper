define(["dojo/_base/lang",
        "dojo/_base/array",
        "dojo/has",
        "../../../../kernel"],
function(lang, array, has, esriKernel) {

  var oThisObject = {

    // XML DOM node types
    nodeTypes: {
      ELEMENT_NODE: 1,
      ATTRIBUTE_NODE: 2,
      TEXT_NODE: 3,
      CDATA_SECTION_NODE: 4,
      ENTITY_REFERENCE_NODE: 5,
      ENTITY_NODE: 6,
      PROCESSING_INSTRUCTION_NODE: 7,
      COMMENT_NODE: 8,
      DOCUMENT_NODE: 9,
      DOCUMENT_TYPE_NODE: 10,
      DOCUMENT_FRAGMENT_NODE: 11,
      NOTATION_NODE: 12
    },

    escape: function(s) {
      if(s === null) {
        return null;
      }
      if(s.length === 0) {
        return s;
      }
      var i, c, sb = "";
      for(i = 0; i < s.length; i++) {
        c = s.charAt(i);
        if(c === "&") {
          sb += "&amp;";
        } else if(c === "<") {
          sb += "&lt;";
        } else if(c === ">") {
          sb += "&gt;";
        } else if(c === "\'") {
          sb += "&apos;";
        } else if(c === "\"") {
          sb += "&quot;";
        } else {
          sb += c;
        }
      }
      return sb;
    },

    getNodeText: function(domNode) {
      var s, text = null;
      var elementNodeType = this.nodeTypes.ELEMENT_NODE;
      var textNodeType = this.nodeTypes.TEXT_NODE;
      if(domNode.nodeType === elementNodeType) {
        // TODO append text node values?
        array.some(domNode.childNodes, function(domChild) {
          if(domChild.nodeType === textNodeType) {
            s = domChild.nodeValue;
            if(s !== null) {
              s = lang.trim(s);
              if(s.length > 0) {
                text = s;
                return true;
              }
            }
          }
        });
      } else {
        // TODO trim?
        text = domNode.nodeValue;
      }
      return text;
    },

    makeGxePrefixesByUri: function(namespaces) {
      var gxePrefixesByUri = {};
      if(namespaces) {
        array.forEach(namespaces, function(ns) {
          if(ns.prefix && ns.uri) {
            gxePrefixesByUri[ns.uri] = ns.prefix;
          }
        });
      }
      return gxePrefixesByUri;
    },

    makeGxeUrisByPrefix: function(namespaces) {
      var gxeUrisByPrefix = {};
      if(namespaces) {
        array.forEach(namespaces, function(ns) {
          if(ns.prefix && ns.uri) {
            gxeUrisByPrefix[ns.prefix] = ns.uri;
          }
        });
      }
      return gxeUrisByPrefix;
    },

    parseFromString: function(xmlString) {
      var dom = null, parser = null;
      if(window.DOMParser) {
        try {
          parser = new DOMParser();
          dom = parser.parseFromString(xmlString, "text/xml");
        } catch(ex) {
        }
      }
      return dom;
    },

    supportsParseFromString: function() {
      if(window.DOMParser) {
        return true;
      }
      return false;
    }

  };

  

  return oThisObject;
});