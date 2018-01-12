$traceurRuntime.registerModule("app/es6/mySpec.js", [], function() {
  "use strict";
  var __moduleName = "app/es6/mySpec.js";
  describe("how to run a test", function() {
    it("let", function() {
      var add = function(x, y) {
        return x + y;
      };
      expect(add(5, 3)).toBe(8);
    });
    it("const", function() {
      try {
        var MAX = 1;
        expect().toThrow();
      } catch (e) {
        expect(e).toBeDefined();
        console.log(e);
      }
    });
    it('can destructure arrays', function() {
      var $__18,
          $__19,
          $__20;
      var x = 1;
      var y = 2;
      ($__18 = [y, x], x = ($__19 = $__18[Symbol.iterator](), ($__20 = $__19.next()).done ? void 0 : $__20.value), y = ($__20 = $__19.next()).done ? void 0 : $__20.value, $__18);
      expect(x).toBe(2);
      expect(y).toBe(1);
    });
    it('can destructure arrays 2 ', function() {
      var $__19,
          $__20;
      var $__18 = [1, 2, 3],
          x = ($__19 = $__18[Symbol.iterator](), ($__20 = $__19.next()).done ? void 0 : $__20.value),
          y = ($__20 = $__19.next()).done ? void 0 : $__20.value;
      expect(x).toBe(1);
      expect(y).toBe(2);
    });
    it('can destructure arrays 3 ', function() {
      var $__18 = {
        first: "a",
        second: "b"
      },
          f1 = $__18.first,
          f2 = $__18.second;
      expect(f1).toBe("a");
      expect(f2).toBe("b");
    });
    it('can destructure function param', function() {
      "use strict";
      var doWork = function(url, $__18) {
        var $__19 = $__18,
            data = $__19.data,
            cache = $__19.cache,
            header = $__19.header;
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
      var doWork = function(url, $__18) {
        var $__20;
        var $__19 = $__18,
            data = ($__20 = $__19.data) === void 0 ? "Scott" : $__20;
        return data;
      };
      expect(doWork('asd', {})).toBe("Scott");
      expect(doWork("asd", {data: "data"})).toBe("data");
    });
    it('rest parameters', function() {});
    it('spread parameters', function() {});
    it('template literals', function() {
      var $__19,
          $__20;
      var path = "thePath";
      var url = ("http://apiserver/" + path);
      expect(url).toBe("http://apiserver/thePath");
      var $__18 = [1, 3],
          x = ($__19 = $__18[Symbol.iterator](), ($__20 = $__19.next()).done ? void 0 : $__20.value),
          y = ($__20 = $__19.next()).done ? void 0 : $__20.value;
      expect(("" + (x + y))).toBe('4');
    });
    it('class introduced', function() {
      "use strict";
      var Person = function() {
        function Person(name) {
          this._name = name;
        }
        return ($traceurRuntime.createClass)(Person, {
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
      }();
      var e = new Person("Scott");
      e.name = "elScott";
      expect(e.doWork()).toBe("complete");
      expect(e.getName()).toBe("elScott");
      var Employee = function($__super) {
        function Employee(name, title) {
          $traceurRuntime.superConstructor(Employee).call(this, name);
          this._title = title;
        }
        return ($traceurRuntime.createClass)(Employee, {doWork: function() {
            $traceurRuntime.superGet(this, Employee.prototype, "dowWork").call(this);
            return (this._name + " is working");
          }}, {}, $__super);
      }(Person);
      var emp = new Employee("G");
      expect(emp.doWork()).toBe("complete");
      expect(e.getName()).toBe("G");
    });
    it("arrow functions with array function", function() {
      "use strict";
      var add = function(x, y) {
        return x + y;
      };
      expect(add(1, 2)).toBe(3);
      var sum = 0;
      [1, 2, 3, 4].forEach(function(x) {
        return sum += x;
      });
      expect(sum).toBe(10);
      expect([1, 2, 3, 4].map(function(x) {
        return x + 1;
      })).toEqual([2, 3, 4, 5]);
    });
    it("async without arrows", function(done) {
      "use strict";
      this.name = "a";
      var that = this;
      setTimeout(function() {
        expect(that.name).toBe("a");
        done();
      });
    });
    it("async 2 with arrows - lexical binding to this", function(done) {
      "use strict";
      var $__1 = this;
      this.name = "a";
      setTimeout(function() {
        expect($__1.name).toBe("a");
        done();
      });
    });
    it("iterable - iterator", function() {
      "use strict";
      var ar = [1, 2, 3, 4];
      for (var x = 0; x < ar.length; x++) {
        console.log(ar[x]);
      }
      for (var i in ar) {
        console.log(ar[i]);
      }
      var iterator = ar.values();
      var next = iterator.next();
      while (!next.done) {
        console.log(iterator.next());
      }
      var $__6 = true;
      var $__7 = false;
      var $__8 = undefined;
      try {
        for (var $__4 = void 0,
            $__3 = (ar)[Symbol.iterator](); !($__6 = ($__4 = $__3.next()).done); $__6 = true) {
          var n = $__4.value;
          {
            console.log(n);
          }
        }
      } catch ($__9) {
        $__7 = true;
        $__8 = $__9;
      } finally {
        try {
          if (!$__6 && $__3.return != null) {
            $__3.return();
          }
        } finally {
          if ($__7) {
            throw $__8;
          }
        }
      }
      ar[Symbol.iterator].next();
      var Company = function() {
        var $__2;
        function Company() {}
        return ($traceurRuntime.createClass)(Company, ($__2 = {}, Object.defineProperty($__2, "addEmployees", {
          value: function() {
            for (var names = [],
                $__17 = 0; $__17 < arguments.length; $__17++)
              names[$__17] = arguments[$__17];
            this.employees = this.emplyees.concat(names);
          },
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__2, Symbol.iterator, {
          value: function() {
            return new ArrayIterator(this.employees);
          },
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__2, Symbol.iterator, {
          value: $traceurRuntime.initGeneratorFunction(function $__22() {
            var $__13,
                $__14,
                $__15,
                $__11,
                $__10,
                e,
                $__16;
            return $traceurRuntime.createGeneratorInstance(function($ctx) {
              while (true)
                switch ($ctx.state) {
                  case 0:
                    $__13 = true;
                    $__14 = false;
                    $__15 = undefined;
                    $ctx.state = 24;
                    break;
                  case 24:
                    $ctx.pushTry(10, 11);
                    $ctx.state = 13;
                    break;
                  case 13:
                    $__11 = void 0, $__10 = (this.employees)[Symbol.iterator]();
                    $ctx.state = 9;
                    break;
                  case 9:
                    $ctx.state = (!($__13 = ($__11 = $__10.next()).done)) ? 5 : 7;
                    break;
                  case 4:
                    $__13 = true;
                    $ctx.state = 9;
                    break;
                  case 5:
                    e = $__11.value;
                    $ctx.state = 6;
                    break;
                  case 6:
                    $ctx.state = 2;
                    return e;
                  case 2:
                    $ctx.maybeThrow();
                    $ctx.state = 4;
                    break;
                  case 7:
                    $ctx.popTry();
                    $ctx.state = 11;
                    $ctx.finallyFallThrough = -2;
                    break;
                  case 10:
                    $ctx.popTry();
                    $ctx.maybeUncatchable();
                    $__16 = $ctx.storedException;
                    $ctx.state = 16;
                    break;
                  case 16:
                    $__14 = true;
                    $__15 = $__16;
                    $ctx.state = 11;
                    $ctx.finallyFallThrough = -2;
                    break;
                  case 11:
                    $ctx.popTry();
                    $ctx.state = 22;
                    break;
                  case 22:
                    try {
                      if (!$__13 && $__10.return != null) {
                        $__10.return();
                      }
                    } finally {
                      if ($__14) {
                        throw $__15;
                      }
                    }
                    $ctx.state = 20;
                    break;
                  case 20:
                    $ctx.state = $ctx.finallyFallThrough;
                    break;
                  default:
                    return $ctx.end();
                }
            }, $__22, this);
          }),
          configurable: true,
          enumerable: true,
          writable: true
        }), $__2), {});
      }();
      var ArrayIterator = function() {
        function ArrayIterator(array) {
          this.array = array;
          this.index = 0;
        }
        return ($traceurRuntime.createClass)(ArrayIterator, {next: function() {
            var result = {
              value: undefined,
              done: true
            };
            if (this.index < this.array.length) {
              result.value = this.array[this.index];
              result.done = false;
              this.index++;
            }
            return result;
          }}, {});
      }();
    });
    it("generators", function() {
      "use strict";
      var no = $traceurRuntime.initGeneratorFunction(function $__22() {
        return $traceurRuntime.createGeneratorInstance(function($ctx) {
          while (true)
            switch ($ctx.state) {
              case 0:
                $ctx.state = 2;
                return 1;
              case 2:
                $ctx.maybeThrow();
                $ctx.state = 4;
                break;
              case 4:
                $ctx.state = 6;
                return 2;
              case 6:
                $ctx.maybeThrow();
                $ctx.state = 8;
                break;
              case 8:
                $ctx.state = 10;
                return 3;
              case 10:
                $ctx.maybeThrow();
                $ctx.state = 12;
                break;
              case 12:
                $ctx.state = 14;
                return 4;
              case 14:
                $ctx.maybeThrow();
                $ctx.state = -2;
                break;
              default:
                return $ctx.end();
            }
        }, $__22, this);
      });
      var sum = 0;
      var iterator = no();
      var next = iterator.next();
      while (!next.done) {
        sum += next.value;
        next = iterator.next();
      }
      expect(sum).toBe(10);
      no = $traceurRuntime.initGeneratorFunction(function $__23(start, end) {
        var i;
        return $traceurRuntime.createGeneratorInstance(function($ctx) {
          while (true)
            switch ($ctx.state) {
              case 0:
                i = start;
                $ctx.state = 9;
                break;
              case 9:
                $ctx.state = (i <= end) ? 5 : -2;
                break;
              case 4:
                i++;
                $ctx.state = 9;
                break;
              case 5:
                console.log(i);
                $ctx.state = 6;
                break;
              case 6:
                $ctx.state = 2;
                return i;
              case 2:
                $ctx.maybeThrow();
                $ctx.state = 4;
                break;
              default:
                return $ctx.end();
            }
        }, $__23, this);
      });
      sum = 0;
      iterator = no(1, 4);
      next = iterator.next();
      while (!next.done) {
        sum += next.value;
        next = iterator.next();
      }
      expect(sum).toBe(10);
      sum = 0;
      var $__6 = true;
      var $__7 = false;
      var $__8 = undefined;
      try {
        for (var $__4 = void 0,
            $__3 = (no(1, 4))[Symbol.iterator](); !($__6 = ($__4 = $__3.next()).done); $__6 = true) {
          var n = $__4.value;
          {
            sum += n;
          }
        }
      } catch ($__9) {
        $__7 = true;
        $__8 = $__9;
      } finally {
        try {
          if (!$__6 && $__3.return != null) {
            $__3.return();
          }
        } finally {
          if ($__7) {
            throw $__8;
          }
        }
      }
      var filter = $traceurRuntime.initGeneratorFunction(function $__24(ar, takeMax, predicat) {
        var count,
            $__13,
            $__14,
            $__15,
            $__11,
            $__10,
            n,
            $__16;
        return $traceurRuntime.createGeneratorInstance(function($ctx) {
          while (true)
            switch ($ctx.state) {
              case 0:
                count = 0;
                $__13 = true;
                $__14 = false;
                $__15 = undefined;
                $ctx.state = 30;
                break;
              case 30:
                $ctx.pushTry(16, 17);
                $ctx.state = 19;
                break;
              case 19:
                $__11 = void 0, $__10 = (ar)[Symbol.iterator]();
                $ctx.state = 15;
                break;
              case 15:
                $ctx.state = (!($__13 = ($__11 = $__10.next()).done)) ? 11 : 13;
                break;
              case 6:
                $__13 = true;
                $ctx.state = 15;
                break;
              case 11:
                n = $__11.value;
                $ctx.state = 12;
                break;
              case 12:
                $ctx.state = (predicate(n)) ? 1 : 6;
                break;
              case 1:
                $ctx.state = 2;
                return n;
              case 2:
                $ctx.maybeThrow();
                $ctx.state = 4;
                break;
              case 4:
                count++;
                $ctx.state = 9;
                break;
              case 9:
                $ctx.state = (count >= takeMax) ? 5 : 6;
                break;
              case 5:
                $ctx.state = 17;
                $ctx.finallyFallThrough = -2;
                break;
              case 13:
                $ctx.popTry();
                $ctx.state = 17;
                $ctx.finallyFallThrough = -2;
                break;
              case 16:
                $ctx.popTry();
                $ctx.maybeUncatchable();
                $__16 = $ctx.storedException;
                $ctx.state = 22;
                break;
              case 22:
                $__14 = true;
                $__15 = $__16;
                $ctx.state = 17;
                $ctx.finallyFallThrough = -2;
                break;
              case 17:
                $ctx.popTry();
                $ctx.state = 28;
                break;
              case 28:
                try {
                  if (!$__13 && $__10.return != null) {
                    $__10.return();
                  }
                } finally {
                  if ($__14) {
                    throw $__15;
                  }
                }
                $ctx.state = 26;
                break;
              case 26:
                $ctx.state = $ctx.finallyFallThrough;
                break;
              default:
                return $ctx.end();
            }
        }, $__24, this);
      });
      var $__13 = true;
      var $__14 = false;
      var $__15 = undefined;
      try {
        for (var $__11 = void 0,
            $__10 = (filter(["Alex", "Time", "Alan"], 1, function(a) {
              return a.charAt(0) == "A";
            }))[Symbol.iterator](); !($__13 = ($__11 = $__10.next()).done); $__13 = true) {
          var n$__21 = $__11.value;
          {
            console.log(n$__21);
          }
        }
      } catch ($__16) {
        $__14 = true;
        $__15 = $__16;
      } finally {
        try {
          if (!$__13 && $__10.return != null) {
            $__10.return();
          }
        } finally {
          if ($__14) {
            throw $__15;
          }
        }
      }
      var gen = $traceurRuntime.initGeneratorFunction(function $__25(start, end) {
        var current,
            byHowMuchToIncrementIfSpecifiedAsParamToNext;
        return $traceurRuntime.createGeneratorInstance(function($ctx) {
          while (true)
            switch ($ctx.state) {
              case 0:
                current = start;
                $ctx.state = 9;
                break;
              case 9:
                $ctx.state = (current <= end) ? 1 : -2;
                break;
              case 1:
                $ctx.state = 2;
                return current;
              case 2:
                byHowMuchToIncrementIfSpecifiedAsParamToNext = $ctx.sent;
                $ctx.state = 4;
                break;
              case 4:
                current += byHowMuchToIncrementIfSpecifiedAsParamToNext || 1;
                $ctx.state = 9;
                break;
              default:
                return $ctx.end();
            }
        }, $__25, this);
      });
      var result = [];
      iterator = gen(1, 10);
      var nexy = iterator.next;
      while (!next.done) {
        result.push(next.value);
        var byHowMuchToIncremenet = 2;
        next = iterator.next(byHowMuchToIncremenet);
      }
    });
    it("comprehensions - removd from ES6", function() {
      "use strict";
    });
  });
  return {};
});
//# sourceURL=app/es6/mySpec.js
