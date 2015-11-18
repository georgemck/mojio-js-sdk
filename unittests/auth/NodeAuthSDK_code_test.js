// Generated by CoffeeScript 1.10.0
(function() {
  var MojioAsyncAwaitStyle, MojioAuthSDK, MojioPromiseStyle, MojioReactiveStyle, MojioSDK, MojioSyncStyle, async, await, nock, should;

  should = require('should');

  MojioSDK = require('../../src/nodejs/sdk/MojioSDK');

  MojioAuthSDK = require('../../src/nodejs/sdk/MojioAuthSDK');

  MojioPromiseStyle = require('../../src/nodejs/styles/MojioPromiseStyle');

  MojioReactiveStyle = require('../../src/nodejs/styles/MojioReactiveStyle');

  MojioAsyncAwaitStyle = require('../../src/nodejs/styles/MojioAsyncAwaitStyle');

  MojioSyncStyle = require('../../src/nodejs/styles/MojioSyncStyle');

  nock = require('nock');

  async = require('asyncawait/async');

  await = require('asyncawait/await');

  describe('Node Mojio Auth SDK password type auth', function() {
    var authorization, call, callback_url, options, setupNock, testErrorResult, timeout;
    call = null;
    timeout = 5000;
    callback_url = "http://localhost:3000/callback";
    authorization = {
      client_id: 'cacc0d94-b6b4-4da7-9983-3991de197038',
      client_secret: '427d5794-5021-4274-a6e8-a38d5d83bf99',
      redirect_uri: 'http://localhost:3000/callback',
      username: 'testing',
      password: 'Test123!',
      grant_type: 'password'
    };
    options = {
      sdk: MojioAuthSDK,
      environment: 'staging',
      accountsURL: 'accounts.moj.io',
      apiURL: 'api.moj.io',
      pushURL: 'push.moj.io',
      client_id: authorization.client_id,
      client_secret: authorization.client_secret,
      styles: [MojioPromiseStyle]
    };
    setupNock = function() {
      if ((process.env.FUNCTIONAL_TESTS != null)) {
        timeout = 3000;
        return {
          done: function() {}
        };
      } else {
        call = nock('https://staging-accounts.moj.io').post("/oauth2/token", authorization).reply(function(uri, requestBody, cb) {
          return cb(null, [
            200, {
              id: 1
            }
          ]);
        });
        return call;
      }
    };
    testErrorResult = function(error, result) {
      (error === null).should.be["true"];
      return (result !== null).should.be["true"];
    };
    it('can authorize with password flow, callback async', function(done) {
      var sdk;
      call = setupNock();
      sdk = new MojioSDK(options);
      return sdk.token(callback_url).credentials('testing', 'Test123!').callback(function(error, result) {
        testErrorResult(error, result);
        if (call != null) {
          call.done();
        }
        return done();
      });
    });
    return it('can authorize with promise', function(done) {
      var promise, sdk;
      call = setupNock();
      sdk = new MojioSDK(options);
      promise = sdk.token(callback_url).credentials('testing', 'Test123!').promise();
      return promise.then(function(result) {
        testErrorResult(null, result);
        if (call != null) {
          call.done();
        }
        return done();
      }, function(error) {
        console.log("");
        console.log("Error with promise: " + error);
        return process.exit(1);
      });
    });
  });

}).call(this);

//# sourceMappingURL=NodeAuthSDK_code_test.js.map
