describe("Promises", function () {

    it("gen", function (done) {
        "use strict";

        //naive approach
        console.log("start");
        setTimeout(function(){
            setTimeout(function(){
                console.log("middle");
                setTimeout(function(){
                    console.log("end");
                },500)
            },500)
        },500)

        function pause(timeout, callback){
            setTimeout(function(){
               callback.call();
            },500)
        }

        function*generator(){
            yield pause(500);
            yield pause(500);
            yield pause(500);

            done();
        }

        var seq = generator();
        seq.next();

        // or
        window.async.run(generator);

    });
});

(function(){
    "use strict";
    var sequence;
    var run = function(generator){
        sequence = generator();
        var next = sequence.next();
    }
    var resume = function(){
        sequence.next();
    }

    window.asyncc = {
        run : run,
        resume : resume
    }
}());

function pause(delay){
    "use strict";
    setTimeout(function(){
        console.log('paused for ' + delay + "ms");
        window.async.resume();
    },delay);
}