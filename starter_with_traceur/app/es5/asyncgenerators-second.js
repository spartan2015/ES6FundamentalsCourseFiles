$traceurRuntime.registerModule("app/es6/asyncgenerators-second.js", [], function() {
  "use strict";
  var __moduleName = "app/es6/asyncgenerators-second.js";
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
                return getStockPrice();
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
    var sequence;
    var run = function(generator) {
      sequence = generator();
      var next = sequence.next();
    };
    var resume = function(value) {
      sequence.next(value);
    };
    var fail = function(reason) {
      sequence.throw(reason);
    };
    window.async = {
      run: run,
      resume: resume,
      fail: fail
    };
  }());
  function getStockPrice(delay) {
    "use strict";
    setTimeout(function() {
      try {
        console.log('paused for ' + delay + "ms");
        window.async.resume(30);
      } catch (e) {
        window.async.fail(e);
      }
    }, delay);
  }
  function executeTrade() {
    "use strict";
    setTimeout(function() {
      try {
        console.log("trade completed");
        windows.async.resume();
      } catch (e) {
        window.async.fail(e);
      }
    }, 500);
  }
  return {};
});
//# sourceURL=app/es6/asyncgenerators-second.js
