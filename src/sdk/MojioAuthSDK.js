// Generated by CoffeeScript 1.9.3
(function() {
  var FormUrlencoded, MojioAuthSDK, MojioModelSDK, _,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  FormUrlencoded = require('form-urlencoded');

  _ = require('underscore');

  MojioModelSDK = require('./MojioModelSDK');

  module.exports = MojioAuthSDK = (function(superClass) {
    var defaults;

    extend(MojioAuthSDK, superClass);

    defaults = {
      hostname: 'api2.moj.io',
      version: 'v2'
    };

    function MojioAuthSDK(options) {
      if (options == null) {
        options = {};
      }
      this.configure(options);
      MojioAuthSDK.__super__.constructor.call(this);
    }

    MojioAuthSDK.prototype.configure = function(options) {
      if (options == null) {
        options = {};
      }
      _.extend(this, options);
      _.defaults(this, defaults);
      return this;
    };

    MojioAuthSDK.prototype.authorize = function(authorization) {
      return this;
    };

    MojioAuthSDK.prototype.token = function(response) {
      return "token";
    };

    return MojioAuthSDK;

  })(MojioModelSDK);

}).call(this);

//# sourceMappingURL=MojioAuthSDK.js.map