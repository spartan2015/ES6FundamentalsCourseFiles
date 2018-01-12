$traceurRuntime.registerModule("app/es6/objectsines6.js", [], function() {
  "use strict";
  var __moduleName = "app/es6/objectsines6.js";
  describe("objects in es6", function() {
    "use strict";
    it("is function - equivelent of ===", function() {
      expect(-0 === 0).toBe(true);
      expect(Object.is(-0, 0)).toBe(true);
      expect(Object.is(1, 2)).toBe(false);
    });
    it("should consider Nan to be Nan", function() {
      expect(NaN === NaN).toBe(false);
      expect(Object.is(NaN, NaN)).toBe(true);
    });
    describe("assign function", function() {
      it("should apply mixins to objects", function() {
        var shark = {bite: function(target) {
            target.hurt = true;
          }};
        var person = {};
        var laser = {pew: function(target) {
            target.exploded = true;
          }};
        Object.assign(shark, laser);
        expect(shark.pew).toBeDefined();
      });
    });
    describe("property initz shorthand", function() {
      it("should create properties from local variables", function() {
        var model = 'Ford';
        var year = 1969;
        var Classic = {
          model: model,
          year: year
        };
        Classic = {
          model: model,
          year: year
        };
      });
      it("method initlz shorthand", function() {
        var server = {getPort: function() {
            return 8080;
          }};
        server = {getPort: function() {
            return 8080;
          }};
      });
      it("computer property names", function() {
        function createSimpleObject(propName, propValue) {
          var obj = {};
          obj[propName] = propValue;
          return obj;
        }
        function createSimpleObject2(propName, propValue) {
          var $__1;
          return ($__1 = {}, Object.defineProperty($__1, propName, {
            value: propValue,
            configurable: true,
            enumerable: true,
            writable: true
          }), $__1);
        }
        function createSimpleObject3(first, second, third) {
          var $__1;
          return ($__1 = {}, Object.defineProperty($__1, 'member_' + first.name, {
            value: first,
            configurable: true,
            enumerable: true,
            writable: true
          }), Object.defineProperty($__1, 'member_' + second.name, {
            value: second,
            configurable: true,
            enumerable: true,
            writable: true
          }), Object.defineProperty($__1, 'member_' + third.name, {
            value: third,
            configurable: true,
            enumerable: true,
            writable: true
          }), $__1);
        }
      });
    });
  });
  return {};
});
//# sourceURL=app/es6/objectsines6.js
