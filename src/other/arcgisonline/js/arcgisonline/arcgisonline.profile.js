var profile = (function () {
  var testResourceRe = /^esri\/tests\//,

    jsRe = /\.js$/i,
    onlineFolderRe = /^arcgisonline\//i

    copyOnly = function (filename, mid) {
      var list = {
        "arcgisonline/package.json": 1,
        "arcgisonline/arcgisonline.profile": 1,
        "arcgisonline/config": 1
      };

      return (mid in list);
    },

    legacyModules = {
      "arcgisonline": 1
    };

  return {
    resourceTags: {
      test: function (filename, mid) {
        return testResourceRe.test(mid) || (mid.search(/\.17$/) !== -1);
      },

      copyOnly: function (filename, mid) {
        return copyOnly(filename, mid);
      },

      amd: function (filename, mid) {
        return jsRe.test(filename) && !copyOnly(filename, mid) && (
          /^arcgisonline\/sharing\/dijit\/FeatureLayerQueryResult/i.test(mid) ||
          /^arcgisonline\/coachmarks\/tours/i.test(mid) || !(
          (mid in legacyModules) || onlineFolderRe.test(mid)
          )
          );
      }
    }
  };
}());
