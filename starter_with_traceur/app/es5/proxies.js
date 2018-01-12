$traceurRuntime.registerModule("app/es6/proxies.js", [], function() {
  "use strict";
  var __moduleName = "app/es6/proxies.js";
  describe("proxies", function() {
    "use strict";
    it("proxy", function() {
      var target = {name: "name"};
      var proxy = new Proxy(target, {
        get: function(target, property) {
          if (property === 'name') {
            return "newName";
          } else {
            return target[property];
          }
        },
        set: function(target, property, value) {
          console.log(property + " = " + value);
          target[property] = value;
        }
      });
      expect(proxy.name).toBe("newName");
    });
    it("should proxy functions", function() {
      var target = {work: function() {
          return "done";
        }};
      var proxy = new Proxy(target.work, {apply: function(target, context, args) {
          if (context !== target) {
            return "locked to object";
          }
          return target.apply(context, args);
        }});
      target.work = proxy;
    });
  });
  return {};
});
//# sourceURL=app/es6/proxies.js
