// Generated by CoffeeScript 1.10.0
(function() {
  var MojioPushSDK, MojioRestSDK,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  MojioRestSDK = require('./MojioRestSDK');

  module.exports = MojioPushSDK = (function(superClass) {
    var defaultTransports, defaults;

    extend(MojioPushSDK, superClass);

    defaults = {
      pushURL: 'push.moj.io'
    };

    defaultTransports = {
      signalr: {},
      httpPost: {}
    };

    function MojioPushSDK(transports, options) {
      var property, value;
      if (options == null) {
        options = {};
      }
      for (property in transports) {
        value = transports[property];
        this[property] = value;
      }
      MojioPushSDK.__super__.constructor.call(this, options);
    }

    MojioPushSDK.prototype.observe = function(key) {
      return this;
    };

    MojioPushSDK.prototype.fields = function(fields) {
      return this;
    };

    MojioPushSDK.prototype.where = function(clause) {
      return this;
    };

    MojioPushSDK.prototype.transport = function(transport) {
      return this;
    };

    MojioPushSDK.prototype.throttle = function(throttle) {
      return this;
    };

    MojioPushSDK.prototype.debounce = function(debounce) {
      return this;
    };

    MojioPushSDK.prototype.timing = function(state) {
      return this;
    };

    return MojioPushSDK;

  })(MojioRestSDK);

}).call(this);

//# sourceMappingURL=MojioPushSDK.js.map
