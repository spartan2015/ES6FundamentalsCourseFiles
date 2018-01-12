$traceurRuntime.registerModule("app/es6/numbers.js", [], function() {
  "use strict";
  var __moduleName = "app/es6/numbers.js";
  describe("numbers", function() {
    "use strict";
    it("", function() {
      var a = 10;
      var hexd = 0xa;
      var octal = 57;
      octal = Number("0o71");
      expect(octal).toBe(57);
      var binary = 3;
      binary = Number("0b11");
      expect(binary).toBe(3);
    });
    it("parse", function() {
      expect(Number.parseInt("3")).toBe(3);
    });
    it("should not convert strings when calling Number.isFinite vs global", function() {
      expect(isFinite("1")).toBe(true);
      expect(Number.isFinite("1")).toBe(false);
    });
    it("should not covnert NaN", function() {
      expect(isNaN("NaN")).toBe(true);
      expect(Number.isNaN("NaN")).toBe(false);
    });
    it("isInteger", function() {
      expect(Number.isInteger(1)).toBe(true);
      expect(Number.isInteger(1.0)).toBe(true);
      expect(Number.isInteger(1.1)).toBe(false);
    });
    it("safe integer constants", function() {
      expect(Math.pow(2, 53)).toBe(Math.pow(2, 53) + 1);
      expect(Math.pow(2, 53) + 10).toBe(Math.pow(2, 53) + 1000);
      expect(Number.MAX_SAFE_INTEGER).toBe(Math.pow(2, 53) - 1);
      expect(Number.MIN_SAFE_INTEGER).toBe(Math.pow(2, 53) * -1 + 1);
    });
    it("isSafeInteger", function() {
      expect(Number.isSafeInteger(9007199254740991)).toBe(true);
      expect(Number.isSafeInteger(9007199254740991 + 1)).toBe(false);
    });
    it("", function() {});
  });
  return {};
});
//# sourceURL=app/es6/numbers.js
