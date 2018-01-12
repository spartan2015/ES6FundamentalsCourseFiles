$traceurRuntime.registerModule("app/es6/asyncgenerators.js", [], function() {
  "use strict";
  var __moduleName = "app/es6/asyncgenerators.js";
  describe("Promises", function() {
    it("gen", function(done) {
      "use strict";
      var $__1 = $traceurRuntime.initGeneratorFunction(generator);
      console.log("start");
      setTimeout(function() {
        setTimeout(function() {
          console.log("middle");
          setTimeout(function() {
            console.log("end");
          }, 500);
        }, 500);
      }, 500);
      function pause(timeout, callback) {
        setTimeout(function() {
          callback.call();
        }, 500);
      }
      function generator() {
        return $traceurRuntime.createGeneratorInstance(function($ctx) {
          while (true)
            switch ($ctx.state) {
              case 0:
                $ctx.state = 2;
                return pause(500);
              case 2:
                $ctx.maybeThrow();
                $ctx.state = 4;
                break;
              case 4:
                $ctx.state = 6;
                return pause(500);
              case 6:
                $ctx.maybeThrow();
                $ctx.state = 8;
                break;
              case 8:
                $ctx.state = 10;
                return pause(500);
              case 10:
                $ctx.maybeThrow();
                $ctx.state = 12;
                break;
              case 12:
                done();
                $ctx.state = -2;
                break;
              default:
                return $ctx.end();
            }
        }, $__1, this);
      }
      var seq = generator();
      seq.next();
      window.async.run(generator);
    });
  });
  (function() {
    "use strict";
    var sequence;
    var run = function(generator) {
      sequence = generator();
      var next = sequence.next();
    };
    var resume = function() {
      sequence.next();
    };
    window.asyncc = {
      run: run,
      resume: resume
    };
  }());
  function pause(delay) {
    "use strict";
    setTimeout(function() {
      console.log('paused for ' + delay + "ms");
      window.async.resume();
    }, delay);
  }
  return {};
});
//# sourceURL=app/es6/asyncgenerators.js
