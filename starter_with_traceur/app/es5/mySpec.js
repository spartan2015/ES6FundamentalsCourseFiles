"use strict";
describe("how to run a test", function() {
  it("let", function() {
    var add = (function(x, y) {
      return x + y;
    });
    expect(add(5, 3)).toBe(8);
  });
  it("const", function() {
    try {
      try {
        throw undefined;
      } catch (MAX) {
        MAX = 1;
        MAX = 2;
        expect().toThrow();
      }
    } catch (e) {
      expect(e).toBeDefined();
      console.log(e);
    }
  });
  it('can destructure arrays', function() {
    var $__1;
    var x = 1;
    var y = 2;
    ($__1 = [y, x], x = $__1[0], y = $__1[1], $__1);
    expect(x).toBe(2);
    expect(y).toBe(1);
  });
  it('can destructure arrays 2 ', function() {
    var $__1 = [1, 2, 3],
        x = $__1[0],
        y = $__1[1];
    expect(x).toBe(1);
    expect(y).toBe(2);
  });
  it('can destructure arrays 3 ', function() {
    var $__1 = {
      first: "a",
      second: "b"
    },
        f1 = $__1.first,
        f2 = $__1.second;
    expect(f1).toBe("a");
    expect(f2).toBe("b");
  });
  it('can destructure function param', function() {
    "use strict";
    var doWork = function(url, $__1) {
      var data = $__1.data,
          cache = $__1.cache,
          header = $__1.header;
      return data;
    };
    expect(doWork("", {
      data: "data",
      cache: "",
      hhaders: ""
    })).toBe("data");
  });
  it('can default function values', function() {
    "use strict";
    var doWork = function() {
      var data = arguments[0] !== (void 0) ? arguments[0] : "Scott";
      return data;
    };
    expect(doWork()).toBe("Scott");
    expect(doWork("a")).toBe("a");
  });
  it('destructure + defaults', function() {
    "use strict";
    var $__2;
    var doWork = function(url, $__1) {
      var data = ($__2 = $__1.data) === void 0 ? "Scott" : $__2;
      return data;
    };
    expect(doWork('asd', {})).toBe("Scott");
    expect(doWork("asd", {data: "data"})).toBe("data");
  });
  it('rest parameters', function() {});
  it('spread parameters', function() {});
  it('template literals', function() {
    var path = "thePath";
    var url = ("http://apiserver/" + path);
    expect(url).toBe("http://apiserver/thePath");
    var $__1 = [1, 3],
        x = $__1[0],
        y = $__1[1];
    expect(("" + (x + y))).toBe('4');
  });
  it('class introduced', function() {
    "use strict";
    var Person = function Person(name) {
      this._name = name;
    };
    ($traceurRuntime.createClass)(Person, {
      doWork: function() {
        return "complete";
      },
      getName: function() {
        return this._name;
      },
      get name() {
        console.log("someone is getting name");
        return this._name;
      },
      set name(newValue) {
        console.log("someone is setting name: " + newValue);
        this._name = newValue;
      }
    }, {});
    var e = new Person("Scott");
    e.name = "elScott";
    expect(e.doWork()).toBe("complete");
    expect(e.getName()).toBe("elScott");
    var Employee = function Employee() {
      $traceurRuntime.defaultSuperCall(this, $Employee.prototype, arguments);
    };
    var $Employee = Employee;
    ($traceurRuntime.createClass)(Employee, {}, {}, Person);
    var emp = new Employee("G");
    expect(e.getName()).toBe("G");
  });
});

//# sourceMappingURL=mySpec.js.map
