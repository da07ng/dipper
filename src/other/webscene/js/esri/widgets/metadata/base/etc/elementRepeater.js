define(["dojo/_base/lang",
        "dojo/_base/array",
        "dojo/has",
        "dojo/Deferred",
        "./docUtil",
        "./matchTopNodeUtil",
        "../../../../kernel"],
function(lang, array, has, Deferred, docUtil, matchTopNodeUtil, esriKernel) {

  var oThisObject = {

    _findClonedElement: function(element, clonedWidget, targetPath, clonedPath) {
      var foundElement = null, recurse = true, bMatchTopOk;
      if(clonedWidget._isGxeElement) {
        if(clonedPath != null) {
          clonedPath += "/";
        } else {
          clonedPath = "";
        }
        clonedPath += clonedWidget.target;
        if(targetPath === clonedPath) {
          recurse = false;
          bMatchTopOk = matchTopNodeUtil.evaluateXNodeMatch(element, clonedWidget);
          if(bMatchTopOk) {
            return clonedWidget;
          }
        } else {
          recurse = false;
          if(targetPath.indexOf(clonedPath) === 0) {
            recurse = true;
          }
        }
      } else if(clonedWidget._isGxeAttribute) {
        recurse = false;
      } else if(clonedWidget._isGxeDescriptor) {
        if(clonedPath != null) {
          recurse = false;
        }
      }
      if(recurse) {
        array.some(clonedWidget.getChildren(), function(child) {
          foundElement = this._findClonedElement(element, child, targetPath, clonedPath);
          if(foundElement) {
            return true;
          }
        }, this);
      }
      return foundElement;
    },

    repeatElement: function(multiplicityHeader, element, activate) {
      var deferred = new Deferred();
      if(!element._isGxeElement) {
        deferred.resolve(null);
        return deferred;
      }

      var info = docUtil.findDescriptorAndPath(element);
      if(!info.descriptor) {
        console.error("repeatElement: Unable to locate parent Descriptor for: ", element);
        deferred.resolve(null);
        return deferred;
      }
      var descriptor = info.descriptor, path = info.path;

      var newDescriptor = descriptor.newInstance();
      if(!newDescriptor) {
        console.error("repeatElement: Cannot create a new Descriptor was null: ", element);
        deferred.resolve(null);
        return deferred;
      }

      var foundElement = this._findClonedElement(element, newDescriptor, info.path, null);
      if(!foundElement) {
        console.error("repeatElement: Unable to locate new element instance for: ", path, element);
        deferred.resolve(null);
      } else {
        multiplicityHeader.adoptElement(foundElement, activate);
        deferred.resolve(foundElement);
      }

      return deferred;
    }

  };

  

  return oThisObject;
});