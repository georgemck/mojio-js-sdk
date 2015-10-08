// Generated by CoffeeScript 1.9.3
(function() {
  var MojioValidator,
    indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

  module.exports = MojioValidator = (function() {
    function MojioValidator() {}

    MojioValidator.prototype.scopes = ['basic', 'full', 'admin', 'read', 'write', 'delete', 'create', 'legacy', 'sandbox', 'restricted'];

    MojioValidator.prototype.validateScope = function(scopes) {
      var i, len, scope;
      for (i = 0, len = scopes.length; i < len; i++) {
        scope = scopes[i];
        if (indexOf.call(this.scopes, scope) < 0) {
          return "Scope is not valid for authentication: " + scope;
        }
      }
      return true;
    };

    MojioValidator.prototype.credentials = function(params) {
      return true;
      if ((params.redirect_url != null) || (typeof params.redirect_uri === "function" ? params.redirect_uri((orparams.redirect != null) || (params.redirectUrl != null) || (params.return_url != null) || (params["return"] != null) || (params.returnUrl != null)) : void 0)) {
        return true;
      }
      if (((params.user != null) || (params.username != null) || (params.email != null) || (params.usernameoremail != null)) && ((params.password != null) || (params.pass != null))) {
        if (params.user != null) {
          params['username'] = params.user;
          delete params.user;
        }
        if (params.email != null) {
          params['username'] = params.email;
          delete params.email;
        }
        if (params.usernameoremail != null) {
          params['username'] = params.usernameoremail;
          delete params.usernameoremail;
        }
        if (params.pass != null) {
          params['password'] = params.pass;
          delete params.pass;
        }
        return true;
      } else {
        throw "Must specify a username or email and a password when using 'password' or 'implicit' type OAuth2 authorization";
      }
    };

    MojioValidator.prototype.OAuthBody = function(params) {
      var haveUser;
      return true;
      if ((params.app_id != null)) {
        params.client_id = params.app_id;
        delete params.app_id;
      }
      if ((params.type != null)) {
        params.response_type = params.type;
        delete params.type;
      }
      switch (params.response_type) {
        case 'code':
          if ((params.redirect_url != null) || (typeof params.redirect_uri === "function" ? params.redirect_uri((orparams.redirect != null) || (params.redirectUrl != null) || (params.return_url != null) || (params["return"] != null) || (params.returnUrl != null)) : void 0)) {
            if (params.redirect_url != null) {
              params['redirect_uri'] = params.redirect_url;
              delete params.redirect_url;
            }
            if (params.redirect != null) {
              params['redirect_uri'] = params.redirect;
              delete params.redirect;
            }
            if (params.redirectUrl != null) {
              params['redirect_uri'] = params.redirectUrl;
              delete params.redirectUrl;
            }
            if (params.return_uri != null) {
              params['redirect_uri'] = params.return_uri;
              delete params.return_uri;
            }
            if (params.return_url != null) {
              params['redirect_uri'] = params.return_url;
              delete params.return_url;
            }
            if (params["return"] != null) {
              params['redirect_uri'] = params["return"];
              delete params["return"];
            }
            if (params.returnUrl != null) {
              params['redirect_uri'] = params.returnUrl;
              delete params.returnUrl;
            }
            return true;
          } else {
            throw "Must specify a return url (returnUrl or redirectUrl) field when using 'code' type OAuth2 authorization";
          }
          break;
        case 'password':
        case 'implicit':
          haveUser = '';
          if ((params.authorization_code != null)) {
            return true;
          }
          if (((params.user != null) || (params.username != null) || (params.email != null) || (params.usernameoremail != null)) && ((params.password != null) || (params.pass != null))) {
            if (params.user != null) {
              params['username'] = params.user;
              delete params.user;
            }
            if (params.email != null) {
              params['username'] = params.email;
              delete params.email;
            }
            if (params.usernameoremail != null) {
              params['username'] = params.usernameoremail;
              delete params.usernameoremail;
            }
            if (params.pass != null) {
              params['password'] = params.pass;
              delete params.pass;
            }
            return true;
          } else {
            throw "Must specify a username or email and a password when using 'password' or 'implicit' type OAuth2 authorization!!";
          }
          break;
        default:
          throw "When authorizing, you must specify response_type = password, implicit, or code authorization.";
      }
    };

    MojioValidator.prototype.validateState = function(params) {
      switch (params.operation) {
        case 'authorize' || 'token':
          return true;
        case 'get' || 'put' || 'post' || 'delete' || 'query' || 'retreive' || 'create' || 'destroy':
          return true;
        default:
          return 'Must Specify an operation: authorize, get, put, post, delete, query, retreive, create, destroy.';
      }
    };

    return MojioValidator;

  })();

}).call(this);

//# sourceMappingURL=MojioValidator.js.map
