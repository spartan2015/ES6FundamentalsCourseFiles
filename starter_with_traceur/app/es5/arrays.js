$traceurRuntime.registerModule("app/es6/arrays.js", [], function() {
  "use strict";
  var __moduleName = "app/es6/arrays.js";
  describe("arrays", function() {
    "use strict";
    it("find", function() {
      expect([1, 2, 3].find(function(i) {
        return i > 1;
      })).toBe(2);
      expect([1, 2, 3].findIndex(function(i) {
        return i > 1;
      })).toBe(1);
      expect([1, 1, 1].fill(2)).toEqual([2, 2, 2]);
      expect([1, 1, 1].fill(2, 1)).toEqual([1, 2, 2]);
      expect([1, 1, 1].fill(2, 1, 2)).toEqual([1, 2, 1]);
    });
    it("copyWithin", function() {
      expect([1, 2, 3, 4].copyWithin(0, 2)).toEqual([3, 4, 3, 4]);
      expect([1, 2, 3, 4].copyWithin(0, 2, 3)).toEqual([3, 2, 3, 4]);
    });
    it("should create a new array", function() {
      expect(new Array(1, 2, 3)).toEqual([1, 2, 3]);
      expect(new Array(3)).toEqual([undefined, undefined, undefined]);
      expect(Array.of(3)).toEqual([3]);
    });
    it("should create a new array from an array-liek object when from is called", function() {
      var arrayLike = document.querySelectorAll("div");
      expect(arrayLike.forEach).toBeUndefined();
      expect(Array.from(arrayLike).forEach).toBeDefined();
    });
    it("should return entries from the entries function", function() {
      var a = ['a', 'b', 'c'];
      var entries = a.entries();
      var firstEntry = entries.next().value;
      expect(firstEntry[0]).toBe(0);
      expect(firstEntry[1]).toBe('a');
      var keys = a.keys();
      expect(keys.next().value).toBe(0);
    });
    it("comprehension not maded to ES6 - was removed", function() {});
  });
  return {};
});
//# sourceURL=app/es6/arrays.js
