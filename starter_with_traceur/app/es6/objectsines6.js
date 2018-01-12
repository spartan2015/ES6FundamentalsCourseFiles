describe("objects in es6", function () {
    "use strict";

    it("is function - equivelent of ===", function () {
        // === cannot diff negative 0 and positive 0
        expect(-0 === 0).toBe(true);

        expect(Object.is(-0, 0)).toBe(true);

        expect(Object.is(1, 2)).toBe(false);

    });

    it("should consider Nan to be Nan", function () {
        expect(NaN === NaN).toBe(false);

        expect(Object.is(NaN, NaN)).toBe(true);

    });

    describe("assign function", function () {
        it("should apply mixins to objects", function () {

            var shark = {
                bite: function (target) {
                    target.hurt = true;
                }
            };

            var person = {};

            var laser = {
                pew: function (target) {
                    target.exploded = true;
                }
            }

            // assign to shark object
            Object.assign(shark, laser/*, and many more*/);
            expect(shark.pew).toBeDefined();

        });
    });

    describe("property initz shorthand", function () {
        it("should create properties from local variables", function () {

            var model = 'Ford';
            var year = 1969;
            var Classic = {
                model: model,
                year: year
            }
            // vs

            Classic = {
                model,
                year
            }

        });


        it("method initlz shorthand", function () {
            var server = {
                getPort: function () {
                    return 8080;
                }
            }
            //vs
            server = {
                getPort() {
                    return 8080;
                }
            }
        });

        it("computer property names", function () {
            function createSimpleObject(propName, propValue) {
                var obj = {};
                obj[propName] = propValue;
                return obj;
            }
            //vs
            function createSimpleObject2(propName, propValue) {
               return {
                   [propName] : propValue
               };
            }
            //more
            function createSimpleObject3(first,second,third) {
                return {
                    ['member_'+first.name] : first,
                    ['member_'+second.name] : second,
                    ['member_'+third.name] : third,
                };
            }
        });


    });
});