$traceurRuntime.registerModule("app/es6/maps.js", [], function() {
  "use strict";
  var __moduleName = "app/es6/maps.js";
  describe("maps", function() {
    "use strict";
    it("maps", function() {
      var $__9,
          $__10;
      var map = new Map();
      expect(map.size).toBe(0);
      map.set("age", 35);
      expect(map.size).toBe(1);
      expect(map.get("age")).toBe(35);
      var randomObject = {someProp: "someVla"};
      map.set(randomObject, "value");
      expect(map.get(randomObject)).toBe("value");
      map = new Map([["key", 21], ["key2", 22]]);
      expect(map.get("key")).toBe(21);
      expect(map.get("key2")).toBe(22);
      map.delete("key2");
      expect(map.has("key2")).toBe(false);
      map.clear;
      expect(map.size).toBe(0);
      map.put("a", "a").forEach(function(value, key) {
        console.log(key + " = " + value);
      });
      var $__4 = true;
      var $__5 = false;
      var $__6 = undefined;
      try {
        for (var $__2 = void 0,
            $__1 = (map)[Symbol.iterator](); !($__4 = ($__2 = $__1.next()).done); $__4 = true) {
          var $__8 = $__2.value,
              key = ($__9 = $__8[Symbol.iterator](), ($__10 = $__9.next()).done ? void 0 : $__10.value),
              value = ($__10 = $__9.next()).done ? void 0 : $__10.value;
          {}
        }
      } catch ($__7) {
        $__5 = true;
        $__6 = $__7;
      } finally {
        try {
          if (!$__4 && $__1.return != null) {
            $__1.return();
          }
        } finally {
          if ($__5) {
            throw $__6;
          }
        }
      }
      var items = map.entries();
      var first = items.next();
      expect(first[0]).toBe("a");
      expect(first[1]).toBe("a");
      var values = map.values();
      var first = values.next().value;
      expect(first).toBe("a");
      var keys = map.keys();
      var firstKey = keys.next().value;
      expect(firstKey).toBe("a");
    });
  });
  return {};
});
//# sourceURL=app/es6/maps.js
