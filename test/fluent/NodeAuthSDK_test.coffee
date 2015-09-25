should = require('should')
MojioSDK = require '.././fluent/MojioSDK'
MojioAuthSDK = require '.././fluent/MojioAuthSDK'
nock = require 'nock'

describe 'Node Mojio Fluent Auth SDK', ->
    sdk = new MojioSDK({sdk: MojioAuthSDK, test: true})

    testErrorResult = (error, result) ->
        (error==null).should.be.true
        (result!=null).should.be.true

    it 'can authorize with callback', (done) ->
        @.timeout(2000)
        nock('https://accounts.moj.io')
        .get("oauth2/authorize")
        .reply((uri, requestBody, cb) ->
            cb(null, [200, { id: 1}]))
        sdk
        .authorize({type: "token", user: "unittest@moj.io", password: "mojioRocks" })
        .callback(
            (error, result) ->
                testErrorResult(error, result)
                done()
        )
    it 'can authorize with promise', (done) ->
        @.timeout(2000)
        nock('https://accounts.moj.io')
        .get("oauth2/authorize")
        .reply((uri, requestBody, cb) ->
            cb(null, [200, { id: 1}]))
        promise = sdk
        .authorize({type: "code", user: "unittest@moj.io", password: "mojioRocks" })
        .submit()
        promise
        .then(
            (result) ->
                testErrorResult(null, result)
                done()
        )
        .catch(
            # Rejected promises are passed on by Promise.prototype.then(onFulfilled)
            (error) ->
                console.log('Handle rejected promise ('+error+') here.');
                (error==null).should.be.true
                done()
        )

    it 'can authorize with stream', (done) ->
        @.timeout(2000)
        nock('https://accounts.moj.io')
        .get("oauth2/authorize")
        .reply((uri, requestBody, cb) ->
            cb(null, [200, { id: 1}]))
        observer = sdk
        .authorize({type: "token", user: "unittest@moj.io", password: "mojioRocks" })
        .stream()

    it 'can authorize with sync', (done) ->
        @.timeout(2000)
        nock('https://accounts.moj.io')
        .get("oauth2/authorize")
        .reply((uri, requestBody, cb) ->
            cb(null, [200, { id: 1}]))
        result = sdk
        .authorize({type: "token", user: "unittest@moj.io", password: "mojioRocks" })
        .sync()