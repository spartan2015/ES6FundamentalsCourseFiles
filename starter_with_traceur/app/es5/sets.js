$traceurRuntime.registerModule("app/es6/sets.js", [], function() {
  "use strict";
  var __moduleName = "app/es6/sets.js";
  describe("sets", function() {
    "use strict";
    it("set", function() {
      var set = new Set();
      expect(set.size).toBe(0);
      set.add("1");
      set.add("2");
      set.add(3);
      expect(set.has("1")).toBe(true);
      expect(set.has("2")).toBe(true);
      expect(set.has("3")).toBe(true);
      set = new Set([1, 2, 3]);
      set.clear();
      set.add(1);
      set.add(1);
      expect(set.size).toBe(1);
      set.delete(1);
      expect(set.size).toBe(0);
      set.add(1);
      var $__3 = true;
      var $__4 = false;
      var $__5 = undefined;
      try {
        for (var $__1 = void 0,
            $__0 = (set)[Symbol.iterator](); !($__3 = ($__1 = $__0.next()).done); $__3 = true) {
          var x = $__1.value;
          {
            console.log(x);
          }
        }
      } catch ($__6) {
        $__4 = true;
        $__5 = $__6;
      } finally {
        try {
          if (!$__3 && $__0.return != null) {
            $__0.return();
          }
        } finally {
          if ($__4) {
            throw $__5;
          }
        }
      }
      var entries = set.entries();
      var fistEntry = entries.next();
      expect(firstEntry[0]).toBe(1);
      expect(firstEntry[1]).toBe(1);
    });
  });
  return {};
});
//# sourceURL=app/es6/sets.js
