describe("Promises",function(){

    it("should be a test - jasmin must be informed with promise done",function(done){
        "use strict";

        setTimeout(function(){

            done();
        },1000)

    });

    it("basic",function(done){
        "use strict";

        var promise = new Promise(function(resolve,reject){
            resolve();

        });

        promise.then(function(){
            done();
        });
    });

    it("gather data",function(done){
        "use strict";

        var promise = new Promise(function(resolve,reject){
            resolve(1);

        });

        promise.then(function(value){
            expect(value).toBe(1);
            done();
        });
    });


    it("reject",function(done){
        "use strict";

        var promise = new Promise(function(resolve,reject){
            reject("reason");

        });

        promise.then(function(value){
            expect(value).toBe(1);
            done();
        }, function error(why){
            console.log(why);
            done();
        });
    });

    it("reject catch",function(done){
        "use strict";

        var promise = new Promise(function(resolve,reject){
            reject("reason");

        });

        promise.catch(function error(why){
            console.log(why);
            done();
        });
    });

    it("compose when resolved with a promise", function(done){
        "use strict";

        var firstPromise = new Promise(function(resolve,reject){
            resolve(3);
        });

        var second = new Promise(function(resolve,reject){
            resolve(firstPromise);
        });

        second.then(function(value){
            expect(value).toBe(3);
            done();
        });

    });

    it("automatic resolve", function(done){
        "use strict";

        var promise  = Promise.resolve(3);

        promise.then(function(value){
            expect(value).toBe(3);
            done();
        });
    });

    it("automatic reject", function(done){
        "use strict";

        var promise  = Promise.reject(3);

        promise.catch(function(value){
            expect(value).toBe(3);
            done();
        });
    });

    it("should chain sequentially",function(){
        "use strict";

        let getPromise = function(data){
            return new Promise(function(resolve,reject){
                resolve(data);
            });
        };

        getPromise(1).then(function(val){
            console.log(val);
            expect(val).toBe(1);

            return getPromise(2);

        }).then(function(val){
            expect(val).toBe(2);
            console.log(val);

            return  getPromise(3);

        }).then(function(val){
            expect(val).toBe(3);
            console.log(val);

        }).catch(function(ex){
           console.log(ex);
        });
    });

    it("should wait all",function(done){
        "use strict";

        function getCourse(){
            return Promise.resolve(1);
        }

        var course = [1,2,3];
        var promisses = [];
        for(let i in course){
            promisses.push(getCourse(course[i]));
        }
        Promise.all(promisses).then(function(values){
            done();
        });

    });

    it("should wait first",function(done){
        "use strict";
        function getCourse(){
            return Promise.resolve(1);
        }

        var course = [1,2,3];
        var promisses = [];
        for(let i in course){
            promisses.push(getCourse(course[i]));
        }
        Promise.race(promisses).then(function(value){

            done();
        });
    });
});