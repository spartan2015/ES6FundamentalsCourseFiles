describe("Promises", function () {

    it("gen", function (done) {
        "use strict";

        function* generator() {
            // so the start of generator will the first yield
            // and the timeout will call next yield
            // price will be set with param from resume;
            // and would be usable in the next call to generator yield.

            var price = yield setTimeout(function () {
                async.resume(46);
            }, 500);

            if (price > 45) {
                yield executeTrade();
            } else {
                console.log("trade not made");
            }

            done();
        }

        window.async.run(generator);

    });

    it("gen with error", function (done) {
        "use strict";

        function* generator() {
            // so the start of generator will the first yield
            // and the timeout will call next yield
            // price will be set with param from resume;
            // and would be usable in the next call to generator yield.
            try {
                var price = yield getStockPrice(500);

                if (price > 45) {
                    yield executeTrade();
                } else {
                    console.log("trade not made");
                }
            }
            catch (e) {
                console.log(e);
            }
            done();
        }

        window.async.run(generator);

    });
})
;

(function () {
    "use strict";
    var run = function (generator) {
        var sequence;
       var process = function(result){
           result.value.then(function(value){
               if (!result.done){
                   process(sequence.next(value));
               }

           }, function error(err){
               if (!result.done){
                   process(sequence.throw(err));
               }
           });
       }
       sequence = generator();
       var next = sequence.next();
       process(next);
    }

    window.async = {
        run: run
    }
}());

function getStockPrice(delay) {
    "use strict";
    return new Promise(function(resolve,reject){
        setTimeout(function () {
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
    return new Promise(function(resolve,reject){
        setTimeout(function () {
            try {
                console.log('paused for ' + delay + "ms");
                resolve();
            } catch (e) {
                window.async.fail(e);
            }
        }, delay);
    });
}