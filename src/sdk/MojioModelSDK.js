// Generated by CoffeeScript 1.9.3
(function() {
  var MojioModelSDK;

  module.exports = MojioModelSDK = (function() {
    function MojioModelSDK() {}

    MojioModelSDK.prototype.configure = function(options) {
      if (options == null) {
        options = {};
      }
      _.extend(this, options);
      return this;
    };

    MojioModelSDK.prototype.users = function(users) {
      state.resource = 'Users';
      state.object = users;
      return this;
    };

    MojioModelSDK.prototype.user = function(user) {
      this.users([user]);
      return this;
    };

    MojioModelSDK.prototype.vehicles = function(vehicles) {
      state.resource = 'Vehicles';
      state.object = vehicles;
      return this;
    };

    MojioModelSDK.prototype.vehicle = function(vehicle) {
      this.vehicles([vehicle]);
      return this;
    };

    MojioModelSDK.prototype.mojios = function(mojios) {
      state.resource = 'Vehicles';
      state.object = vehicles;
      return this;
    };

    MojioModelSDK.prototype.mojio = function(mojio) {
      this.mojios([mojio]);
      return this;
    };

    MojioModelSDK.prototype.trips = function(trips) {
      state.resource = 'Trips';
      state.object = trips;
      return this;
    };

    MojioModelSDK.prototype.groups = function(names, callback) {
      state.resource = 'Groups';
      state.object = names;
      if ((callback != null)) {
        this.callback(callback);
      }
      return this;
    };

    MojioModelSDK.prototype.group = function(name, callback) {
      this.groups([name]);
      if ((callback != null)) {
        this.callback(callback);
      }
      return this;
    };

    MojioModelSDK.prototype.permissions = function(user, callback) {
      if ((callback != null)) {
        this.callback(callback);
      }
      return this;
    };

    MojioModelSDK.prototype.image = function(image) {
      state.action = 'Image';
      state.object = image;
      return this;
    };

    MojioModelSDK.prototype.tags = function(tags) {
      state.action = 'Tags';
      state.object = tags;
      return this;
    };

    MojioModelSDK.prototype.tag = function(tag) {
      tags([tag]);
      return this;
    };

    MojioModelSDK.prototype.name = function(type) {
      if (type == null) {
        type = "resource";
      }
      return state[type];
    };

    MojioModelSDK.prototype.mock = function() {
      return this;
    };

    return MojioModelSDK;

  })();

}).call(this);

//# sourceMappingURL=MojioModelSDK.js.map
