// Generated by CoffeeScript 1.10.0
(function() {
  describe('Test Combyne Inversion.', function() {
    return it('return field changes', function() {
      var test, x, y;
      test = function(r) {
        r.a = 1;
        return r;
      };
      x = {
        a: 2
      };
      console.log(JSON.stringify(x));
      y = test(x);
      console.log(JSON.stringify(x));
      return console.log(JSON.stringify(y));
    });
  });

}).call(this);

//# sourceMappingURL=combyne_test.js.map
