// Generated by CoffeeScript 1.10.0
(function() {
  var Module, MojioPushSDK, MojioSDK, MojioSDKState,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  MojioSDKState = require('../state/MojioSDKState');

  MojioPushSDK = require('./MojioPushSDK');

  Module = require('../helpers/Module');

  module.exports = MojioSDK = (function(superClass) {
    var defaults;

    extend(MojioSDK, superClass);

    defaults = {
      sdk_env: 'nodejs',
      test: false
    };

    function MojioSDK(options) {
      var i, len, ref, style;
      if (options == null) {
        options = {};
      }
      this.include(options.sdk ? options.sdk : MojioPushSDK);
      if (options.styles) {
        ref = options.styles;
        for (i = 0, len = ref.length; i < len; i++) {
          style = ref[i];
          this.include(style);
        }
      }
      delete options.sdk;
      delete options.styles;
      this.configure(options, defaults);
      this.stateMachine = new MojioSDKState(options);
      MojioSDK.__super__.constructor.call(this);
    }

    MojioSDK.prototype.configure = function(options, defaults) {
      var property, value;
      if (options == null) {
        options = {};
      }
      if (defaults == null) {
        defaults = {};
      }
      for (property in options) {
        value = options[property];
        this[property] = value;
      }
      for (property in defaults) {
        value = defaults[property];
        if (this[property] == null) {
          this[property] = value;
        }
      }
      return this;
    };

    MojioSDK.prototype.sync = function() {
      var result;
      this.stateMachine.initiate(function(error, result) {});
      result = true;
      return result;
    };

    MojioSDK.prototype.callback = function(callback) {
      console.log(this.stateMachine.url());
      return this.stateMachine.initiate(callback);
    };

    MojioSDK.prototype.redirect = function(redirectClass) {
      if (redirectClass == null) {
        redirectClass = null;
      }
      this.stateMachine.redirect(redirectClass);
      return this;
    };

    MojioSDK.prototype.url = function() {
      return this.stateMachine.url();
    };

    MojioSDK.prototype.show = function() {
      return this.stateMachine.show();
    };

    return MojioSDK;

  })(Module);

}).call(this);

//# sourceMappingURL=MojioSDK.js.map
