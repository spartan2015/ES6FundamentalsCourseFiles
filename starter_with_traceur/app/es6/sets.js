describe("sets",function(){
    "use strict";


    it("set",function(){

        var set = new Set();
        expect(set.size).toBe(0);

        set.add("1");
        set.add("2");
        set.add(3); // turned to string

        expect(set.has("1")).toBe(true);
        expect(set.has("2")).toBe(true);
        expect(set.has("3")).toBe(true);

        set = new Set([1,2,3]);

        set.clear();
        set.add(1);
        set.add(1);
        expect(set.size).toBe(1);

        set.delete(1);
        expect(set.size).toBe(0);

        set.add(1);

        for(let x of set){
            console.log(x);
        }

        var entries = set.entries();
        var fistEntry = entries.next();
        expect(firstEntry[0]).toBe(1);
        expect(firstEntry[1]).toBe(1);


    });

});