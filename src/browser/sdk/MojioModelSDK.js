// Generated by CoffeeScript 1.10.0
(function() {
  var MojioModelSDK;

  module.exports = MojioModelSDK = (function() {
    function MojioModelSDK() {
      var capital, ies, iesCapital, iesModel, p, s, sCapital, sModel, v;
      for (p in this) {
        v = this[p];
        capital = p.charAt(0).toUpperCase() + p.slice(1);
        this[capital] = this[p];
        ies = p.slice(p.length - 3, p.length);
        s = p[p.length - 1];
        if (ies === 'ies') {
          iesModel = p.slice(0, p.length - 3) + 'y';
          iesCapital = iesModel.charAt(0).toUpperCase() + iesModel.slice(1);
          this[iesModel] = this[p];
          this[iesCapital] = this[p];
        } else if (s === 's') {
          sModel = p.slice(0, p.length - 1);
          sCapital = sModel.charAt(0).toUpperCase() + sModel.slice(1);
          this[sModel] = this[p];
          this[sCapital] = this[p];
        }
      }
    }

    MojioModelSDK.prototype.setup = function(data) {
      this.stateMachine.setEndpoint("api");
      return this.stateMachine.setAction(null);
    };

    MojioModelSDK.prototype.setCriteria = function(data) {
      if (data instanceof Array) {
        return console.log("Not Implemented");
      } else if (typeof data === 'object') {
        return this.stateMachine.setBody_ObjectOrJson(data);
      } else if (typeof data === 'string' || typeof data === 'number') {
        return this.stateMachine.setId(data);
      }
    };

    MojioModelSDK.prototype.users = function(data) {
      this.setup();
      this.setCriteria(data);
      this.stateMachine.setResource('Users');
      return this;
    };

    MojioModelSDK.prototype.vehicles = function(data) {
      this.setup();
      this.setCriteria(data);
      this.stateMachine.setResource('Vehicles');
      return this;
    };

    MojioModelSDK.prototype.mojios = function(data) {
      this.setup();
      this.setCriteria(data);
      this.stateMachine.setResource('Mojios');
      return this;
    };

    MojioModelSDK.prototype.trips = function(data) {
      this.setup();
      this.setCriteria(data);
      this.stateMachine.setResource('Trips');
      return this;
    };

    MojioModelSDK.prototype.apps = function(data) {
      this.setup();
      this.setCriteria(data);
      this.stateMachine.setResource('Apps');
      return this;
    };

    MojioModelSDK.prototype.groups = function(data) {
      this.setup();
      this.setCriteria(data);
      this.stateMachine.setResource('Groups');
      return this;
    };

    MojioModelSDK.prototype.permissions = function(data) {
      this.setCriteria(data);
      this.stateMachine.setAction('Permissions');
      return this;
    };

    MojioModelSDK.prototype.images = function(data) {
      this.setCriteria(data);
      this.stateMachine.setAction('Images');
      return this;
    };

    MojioModelSDK.prototype.tags = function(data) {
      this.setCriteria(data);
      this.stateMachine.setAction('Tags');
      return this;
    };

    MojioModelSDK.prototype.details = function(data) {
      this.setCriteria(data);
      this.stateMachine.setAction('Details');
      return this;
    };

    MojioModelSDK.prototype.histories = function(measurement) {
      if (measurement == null) {
        measurement = null;
      }
      this.stateMachine.setAction('History');
      if (measurement != null) {
        this.stateMachine.setObject(measurement);
      }
      return this;
    };

    MojioModelSDK.prototype.states = function() {
      this.stateMachine.setObject('States');
      return this;
    };

    MojioModelSDK.prototype.locations = function() {
      this.stateMachine.setObject('Locations');
      return this;
    };

    MojioModelSDK.prototype.mock = function() {
      this.stateMachine.mock();
      return this;
    };

    return MojioModelSDK;

  })();

}).call(this);

//# sourceMappingURL=MojioModelSDK.js.map