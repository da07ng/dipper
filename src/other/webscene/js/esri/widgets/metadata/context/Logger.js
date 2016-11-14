define(["../../../core/declare",
        "dojo/_base/lang",
        "dojo/has",
        "../../../kernel"],
function(declare, lang, has, esriKernel) {

  var oThisClass = declare(null, {

    debugEnabled: true,

    constructor: function(args) {
      lang.mixin(this, args);
      //this._test();
    },

    debug: function() {
      if(!window.console) {
        return;
      }
      if(this.debugEnabled) {
        if(console.debug) {
          console.debug(arguments);
        } else if(console.log) {
          console.log(arguments);
        }
      }
    },

    error: function(err) {
      if(!window.console) {
        return;
      }
      if(console.error) {
        if(err) {
          console.error(err);
        } else {
          console.error(arguments);
        }
      } else if(console.log) {
        console.log(arguments);
      }
    },

    info: function() {
      if(!window.console) {
        return;
      }
      if(console.info) {
        console.info(arguments);
      } else if(console.log) {
        console.log(arguments);
      }
    },

    log: function() {
      if(!window.console) {
        return;
      }
      if(console.log) {
        console.log(arguments);
      }
    },

    warn: function() {
      if(!window.console) {
        return;
      }
      if(console.warn) {
        console.warn(arguments);
      } else if(console.log) {
        console.log(arguments);
      }
    },

    _test: function() {
      this.debug("Debug message.");
      this.log("Log message.");
      this.info("Info message.");
      this.warn("Warn message.");
      this.error(new Error("Error message."), "additionalArgument");
      console.error(new Error("Error2 message2."), "additionalArgument");
    }

  });

  

  return oThisClass;
});