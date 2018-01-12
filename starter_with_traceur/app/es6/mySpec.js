describe("how to run a test", function () {

    it("let", function () {

        let add = (x, y) => x + y;
        expect(add(5, 3)).toBe(8);



    });

    it("const", function () {
        try {
             const MAX = 1;
                //MAX = 2;
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
            constructor(name, title){
                super(name);
                this._title = title;
            }

            doWork(){
                super.dowWork(); /*super call 1*/
                //super(); /*super call 2*/ -- not working
                return `${this._name} is working`;
            }
        }

        let emp = new Employee("G");
        expect(emp.doWork()).toBe("complete");
        expect(e.getName()).toBe("G");


    });


    it("arrow functions with array function",function(){
        "use strict";
        let add = (x,y)=>x+y;
        expect(add(1,2)).toBe(3);

        let sum = 0;
        [1,2,3,4].forEach(x=>sum+=x);
        expect(sum).toBe(10);

        expect([1,2,3,4].map(x => x+1)).toEqual([2,3,4,5]);



    });


    it("async without arrows",function(done){
        "use strict";
        this.name = "a";
        let that = this;
        setTimeout(function(){
            expect(that.name).toBe("a");
            done(); /*jasmine callback*/
        });

    });

    it("async 2 with arrows - lexical binding to this",function(done){
        "use strict";
        this.name = "a";

        setTimeout(()=>{
            expect(this.name).toBe("a");
            done(); /*jasmine callback*/
        });
    });

    it("iterable - iterator", function(){
        "use strict";

        var ar = [1,2,3,4];

        // classic for
        for(var x = 0 ; x < ar.length; x++){
            console.log(ar[x]);
        }

        // for in
        for (var i in  ar){
            console.log(ar[i]);
        }

        //iterator
        let iterator = ar.values();
        let next = iterator.next();
        while(!next.done){
            console.log(iterator.next());
        }

        // for of
        for(let n of ar){
            console.log(n);
        }
        //based onf Symbol.iterator
        ar[Symbol.iterator].next();

        //define your iterator
        class Company{
            addEmployees(...names){
                this.employees = this.emplyees.concat(names);
            }
            [Symbol.iterator](){
                return new ArrayIterator(this.employees);
                }

            // or us a generator
            *[Symbol.iterator](){
                for(let e of this.employees){ // concise iterator declaration
                    yield e;
                }
            }
        }

        class ArrayIterator{
            constructor(array){
                this.array=array;
                this.index=0;
            }
            next(){
                var result =  {
                    value : undefined,
                    done : true
                };
                if(this.index < this.array.length){
                    result.value = this.array[this.index];
                    result.done = false;
                    this.index++;
                }
                return result;
            }
        }




    });


    it("generators",function(){
        "use strict";

        let no = function*(){
            yield 1;
            yield 2;
            yield 3;
            yield 4;
        }

        let sum = 0;
        let iterator = no();
        let next = iterator.next();
        while(!next.done){
            sum+=next.value;
            next = iterator.next();
        }

        expect(sum).toBe(10);

        no = function*(start,end){
            for(let i = start; i <= end; i++){
                console.log(i);
                yield i;
            }
        }

        sum = 0;
        iterator = no(1,4);
        next = iterator.next();
        while(!next.done){
            sum+=next.value;
            next = iterator.next();
        }

        expect(sum).toBe(10);

        // using the generator with for of - so generator is a Iterator
        sum=0;
        for(let n of no(1,4)){
            sum+=n;
        }


        let filter = function*(ar, takeMax, predicat){
            let count = 0;
            for(let n of ar){
                if (predicate(n)){
                    yield n;
                    count++;
                    if (count >= takeMax){
                        return;
                    }
                }
            }

            /*
            or yield* [for (a of ar) if (predicat(a)) a];
            * */
        }

        for(let n of filter(["Alex", "Time", "Alan"],1, a=>a.charAt(0)=="A")){
            console.log(n);
        }



        let gen = function*(start,end){
            let current = start;
            while(current <=end){
                let byHowMuchToIncrementIfSpecifiedAsParamToNext = yield current;
                current += byHowMuchToIncrementIfSpecifiedAsParamToNext || 1;
            }
        }

        let result =[];
        iterator = gen(1,10);
        let nexy =iterator.next;
        while(!next.done){
            result.push(next.value);
            let byHowMuchToIncremenet = 2;
            next = iterator.next(byHowMuchToIncremenet);
        }



    });

    it("comprehensions - removd from ES6",function(){
        "use strict";
/*
        var no = [for ( n of [1,2,3]) n + 1];
        expect(no).toEqual([2,3,4]);

        // equivallent of
        no = [];
        for(let n of [1,2,3]){
            no.push(n+1);
        }
        expect(no).toEqual([2,3,4]);

        // filter rewritten
        let filter = function*(ar, takeMax, predicat){
            yield* [for (a of ar) if (predicat(a)) a];
        }
*/
    });

});