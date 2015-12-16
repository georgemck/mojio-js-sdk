// Generated by CoffeeScript 1.10.0
(function() {
  var MojioRestSDK, MojioSDK, async, nock, should;

  MojioSDK = require('../../src/nodejs/sdk/MojioSDK');

  MojioRestSDK = require('../../src/nodejs/sdk/MojioRestSDK');

  should = require('should');

  async = require('async');

  nock = require('nock');

  nock('https://staging-accounts.moj.io').post("/oauth2/token", authorization).reply(function(uri, requestBody, cb) {
    return cb(null, [
      200, {
        id: 1
      }
    ]);
  });

  describe('Node Mojio Fluent Rest SDK GET calls', function() {
    var client_id, redirect_url, sdk;
    redirect_url = 'http://localhost';
    client_id = 'cacc0d94-b6b4-4da7-9983-3991de197038';
    sdk = new MojioSDK({
      client_id: client_id,
      sdk: MojioPushSDK
    });
    it('can authorize', function(done) {
      var redirect_technology;
      redirect_technology = {
        redirect: (function(url) {
          done();
        })
      };
      return sdk.authorize(redirect_uri).scope(['full']).redirect(redirect_technology);
    });
    it('can get token from redirect', function(done) {
      return sdk.token(redirect_uri).parse(req).callback(function(error, result) {
        var token;
        token = result;
        return done();
      });
    });
    it('can get the current logged in user', function(done) {
      var answers, tests;
      tests = [
        function(cb) {
          return sdk.me().callback(cb);
        }, function(cb) {
          return sdk.get().me().callback(cb);
        }, function(cb) {
          return sdk.user().callback(cb);
        }, function(cb) {
          return sdk.get().user().callback(cb);
        }
      ];
      return answers = ["/me", "/me", "/users", "/users"];
    });
    it('can get a user the current user has access to', function(done) {
      var answers, tests;
      tests = [
        function(cb) {
          return sdk.user({
            id: "otherId"
          }).callback(cb);
        }, function(cb) {
          return sdk.get().user({
            id: "otherId"
          }).callback(cb);
        }
      ];
      return answers = [["GET", "/users/otherId"], ["GET", "/users/otherId"]];
    });
    it("can update a user's details", function(done) {
      var answers, tests;
      tests = [
        function(cb) {
          return sdk.update().user({
            id: "id"
          }).details({
            email: "a@b"
          }).callback(cb);
        }, function(cb) {
          return sdk.update().user("id").details({
            email: "s@b"
          }).callback(cb);
        }
      ];
      return answers = ["/users/otherId", "/users/otherId"];
    });
    it("can get the user's apps", function(done) {
      var answers, tests;
      tests = [
        function(cb) {
          return sdk.get().apps().callback(cb);
        }, function(cb) {
          return sdk.get().user({
            id: "id"
          }).apps().callback(cb);
        }, function(cb) {
          return sdk.user().apps().callback(cb);
        }, function(cb) {
          return sdk.user({
            id: "id"
          }).apps().callback(cb);
        }, function(cb) {
          return sdk.get().apps().callback(cb);
        }, function(cb) {
          return sdk.get().user({
            id: "id"
          }).apps({
            id: "id"
          }).callback(cb);
        }, function(cb) {
          return sdk.user().apps().callback(cb);
        }, function(cb) {
          return sdk.user({
            id: "id"
          }).apps({
            id: "id"
          }).callback(cb);
        }
      ];
      return answers = ["/apps", "/users/id/apps", "/users/id/apps"];
    });
    it("can get a specific app of the user", function(done) {});
    it("can get a specific app of the user by id", function(done) {});
    it("can get a specific app's secret key", function(done) {});
    it("can update a specific apps's details (found by license)", function(done) {});
    it("can get the user's vehicles", function(done) {});
    it("can get a specific vehicle of the user", function(done) {});
    it("can get a specific vehicle of the user by id", function(done) {});
    it("can update a specific vehicle's details (found by license)", function(done) {});
    it("can get a vehicle's location history in a date range", function(done) {});
    it("can get a vehicle's state history in a date range", function(done) {});
    it("can get all the user's trips", function(done) {});
    it("can get 10 of the user's trips on page 2 of 10", function(done) {});
    it("can get 10 of the user's trips within a date range", function(done) {});
    it("can update a specific trip's details (found by date and limit 1)", function(done) {});
    it("can get a trip's vehicle location history in a date range", function(done) {});
    it("can get a trip's vehicle state history in a date range", function(done) {});
    it("can get the user's mojios", function(done) {});
    it("can get a specific mojio of the user by IMEI", function(done) {});
    it("can get a specific mojio of the user by id", function(done) {});
    it("can update a specific mojio's details (found by IMEI)", function(done) {});
    it("can claim a mojio by IMEI", function(done) {});
    it("can unclaim a mojio by IMEI)", function(done) {});
    it("can create a group for a user", function(done) {});
    it("can get the default group for a user", function(done) {});
    it("can get all the groups for a user", function(done) {});
    it("can add a user to a group", function(done) {});
    it("can remove a user from a group", function(done) {});
    it("can update a group", function(done) {});
    it("can delete a group", function(done) {});
    it("can give read permissions to a group to a user", function(done) {});
    it("can give write permissions to a group to a user", function(done) {});
    it("can give share permissions to a group to a user", function(done) {});
    it("can remove read permissions to a group to a user", function(done) {});
    it("can remove write permissions to a group to a user", function(done) {});
    it("can remove share permissions to a group to a user", function(done) {});
    it("can get the user's permissions to a mojio (default group)", function(done) {});
    it("can get the user's permissions to a vehicle (default group)", function(done) {});
    it("can get the user's permissions to a user (default group)", function(done) {});
    it("can get the user's permissions to a trip (default group", function(done) {});
    it("can get the user's permissions to a mojio (specific group)", function(done) {});
    it("can get the user's permissions to a vehicle (specific group)", function(done) {});
    it("can get the user's permissions to a user (specific group)", function(done) {});
    it("can get the user's permissions to a trip (specific group", function(done) {});
    it("can tag a vehicle", function(done) {});
    it("can tag a mojio", function(done) {});
    it("can tag a user", function(done) {});
    it("can tag a trip", function(done) {});
    it("can tag a group", function(done) {});
    it("can upload a app image", function(done) {});
    it("can upload a vehicle image", function(done) {});
    it("can upload a mojio image", function(done) {});
    it("can upload a user image", function(done) {});
    it("can upload a trip image", function(done) {});
    it("can upload a group image", function(done) {});
    it("can delete a app image", function(done) {});
    it("can delete a vehicle image", function(done) {});
    it("can delete a mojio image", function(done) {});
    it("can delete a user image", function(done) {});
    it("can delete a trip image", function(done) {});
    return it("can delete a group image", function(done) {});
  });

}).call(this);

//# sourceMappingURL=cannon_tests.js.map
