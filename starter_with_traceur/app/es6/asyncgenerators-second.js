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
                var price = yield getStockPrice();

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
    var sequence;
    var run = function (generator) {
        sequence = generator();
        var next = sequence.next();
    }
    var resume = function (value) {
        sequence.next(value);
    }

    var fail = function (reason) {
        sequence.throw(reason);
    }

    window.async = {
        run: run,
        resume: resume,
        fail: fail
    }
}());

function getStockPrice(delay) {
    "use strict";
    setTimeout(function () {
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
    setTimeout(function () {
        try {
            console.log("trade completed");
            windows.async.resume();
        } catch (e) {
            window.async.fail(e);
        }
    }, 500);
}