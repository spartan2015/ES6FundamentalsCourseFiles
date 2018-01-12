$traceurRuntime.registerModule("app/es6/asyncgenerators-third.js", [], function() {
  "use strict";
  var __moduleName = "app/es6/asyncgenerators-third.js";
  describe("Promises", function() {
    it("gen", function(done) {
      "use strict";
      var $__1 = $traceurRuntime.initGeneratorFunction(generator);
      function generator() {
        var price;
        return $traceurRuntime.createGeneratorInstance(function($ctx) {
          while (true)
            switch ($ctx.state) {
              case 0:
                $ctx.state = 2;
                return setTimeout(function() {
                  async.resume(46);
                }, 500);
              case 2:
                price = $ctx.sent;
                $ctx.state = 4;
                break;
              case 4:
                $ctx.state = (price > 45) ? 5 : 9;
                break;
              case 5:
                $ctx.state = 6;
                return executeTrade();
              case 6:
                $ctx.maybeThrow();
                $ctx.state = 8;
                break;
              case 9:
                console.log("trade not made");
                $ctx.state = 8;
                break;
              case 8:
                done();
                $ctx.state = -2;
                break;
              default:
                return $ctx.end();
            }
        }, $__1, this);
      }
      window.async.run(generator);
    });
    it("gen with error", function(done) {
      "use strict";
      var $__1 = $traceurRuntime.initGeneratorFunction(generator);
      function generator() {
        var price,
            e;
        return $traceurRuntime.createGeneratorInstance(function($ctx) {
          while (true)
            switch ($ctx.state) {
              case 0:
                $ctx.pushTry(12, null);
                $ctx.state = 15;
                break;
              case 15:
                $ctx.state = 2;
                return getStockPrice(500);
              case 2:
                price = $ctx.sent;
                $ctx.state = 4;
                break;
              case 4:
                $ctx.state = (price > 45) ? 5 : 9;
                break;
              case 5:
                $ctx.state = 6;
                return executeTrade();
              case 6:
                $ctx.maybeThrow();
                $ctx.state = 8;
                break;
              case 9:
                console.log("trade not made");
                $ctx.state = 8;
                break;
              case 8:
                $ctx.popTry();
                $ctx.state = 17;
                break;
              case 12:
                $ctx.popTry();
                $ctx.maybeUncatchable();
                e = $ctx.storedException;
                $ctx.state = 18;
                break;
              case 18:
                console.log(e);
                $ctx.state = 17;
                break;
              case 17:
                done();
                $ctx.state = -2;
                break;
              default:
                return $ctx.end();
            }
        }, $__1, this);
      }
      window.async.run(generator);
    });
  });
  ;
  (function() {
    "use strict";
    var run = function(generator) {
      var sequence;
      var process = function(result) {
        result.value.then(function(value) {
          if (!result.done) {
            process(sequence.next(value));
          }
        }, function error(err) {
          if (!result.done) {
            process(sequence.throw(err));
          }
        });
      };
      sequence = generator();
      var next = sequence.next();
      process(next);
    };
    window.async = {run: run};
  }());
  function getStockPrice(delay) {
    "use strict";
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        try {
          console.log('paused for ' + delay + "ms");
          resolve(30);
        } catch (e) {
          window.async.fail(e);
        }
      }, delay);
    });
  }
  function executeTrade() {
    "use strict";
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        try {
          console.log('paused for ' + delay + "ms");
          resolve();
        } catch (e) {
          window.async.fail(e);
        }
      }, delay);
    });
  }
  return {};
});
//# sourceURL=app/es6/asyncgenerators-third.js
