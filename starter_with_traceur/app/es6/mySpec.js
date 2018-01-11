describe("how to run a test", function () {

    it("let", function () {

        let add = (x, y) => x + y;
        expect(add(5, 3)).toBe(8);



    });

    it("const", function () {
        try {
             const MAX = 1;
                MAX = 2;
                expect().toThrow();
        }catch(e){
            expect(e).toBeDefined();
            console.log(e);
        }
    });


    it('can destructure arrays', function(){
        let x = 1;
        let y = 2;
        [x,y]=[y,x];
        expect(x).toBe(2);
        expect(y).toBe(1);
    });

    it('can destructure arrays 2 ', function(){
        let [x,y]=[1,2,3];
        expect(x).toBe(1);
        expect(y).toBe(2);
    });

    it('can destructure arrays 3 ', function(){
        let {first : f1, second  : f2} = { first : "a", second : "b"}
        expect(f1).toBe("a");
        expect(f2).toBe("b");
    });

    it('can destructure function param', function(){
        "use strict";
        let doWork = function(url,{data,cache,header}){
            return data;
        }

        expect(doWork("",{data : "data", cache: "", hhaders: ""})).toBe("data");
    });

    it('can default function values', function(){
        "use strict";
        let doWork = function(data ="Scott"){
            return data;
        }

        expect(doWork()).toBe("Scott");
        expect(doWork("a")).toBe("a");
    });

    it('destructure + defaults', function(){
        "use strict";
        let doWork = function(url, {data = "Scott"}){ /** !NOTICE*/
            return data;
        }

        expect(doWork('asd',{})).toBe("Scott");
        expect(doWork("asd",{data: "data"})).toBe("data");
    });

    it('rest parameters', function(){
/*
        let f = function(){
            let result = 0;
            for(let i = 0; i < arguments.length; i++){
                result+=arguments[i];
            }
            return result;
        }

        let f1 = function(...numbers){
            let result = 0;
            numbers.forEach(n=>result+=n);
            return result;
        }

        expect(f(1,2,3)).toBe(6);
        expect(f1(1,2,3)).toBe(6);
  */
    });

    it('spread parameters', function(){
        /*
       let f = function(x,y,z){
           return x+y+z;
       }

       var r = f(...[1,2,3]);
       expect(r).toBe(6);
        */
    });

    it('template literals', function(){
        let path = "thePath";

        let url = `http://apiserver/${path}`;

        expect(url).toBe("http://apiserver/thePath");

        let [x,y]=[1,3];
        expect(`${x+y}`).toBe('4');
    });

    it('class introduced', function(){
        "use strict";
    /*
        var Person = function(){};
        Person.prototype={
            doWork : function(){
                return "complete";
            }
        }
        var p = new Person();
        expect(p.doWork()).toBe("complete");
*/


        class Person {
            constructor(name){
              this._name = name;
            }
            doWork (){
                return "complete";
            }
            getName(){
                return this._name;
            }

            get name(){/* executes even on e.name*/
                console.log("someone is getting name");
                return this._name;
            }

            set name(newValue){/* executes even on e.name=newName*/
                console.log("someone is setting name: " + newValue);
                this._name = newValue;
            }
        }
        let e = new Person("Scott");
        e.name = "elScott";
        expect(e.doWork()).toBe("complete");
        expect(e.getName()).toBe("elScott");


        /* inheritance*/
        class Employee extends Person{

        }

        let emp = new Employee("G");
        expect(e.getName()).toBe("G");


    });


});