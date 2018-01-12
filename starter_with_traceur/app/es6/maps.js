describe("maps",function(){
    "use strict";

    it("maps",function(){

        var map = new Map();
        expect(map.size).toBe(0);

        map.set("age",35);
        expect(map.size).toBe(1);

        expect(map.get("age")).toBe(35);

        var randomObject = { someProp:"someVla"};
        map.set(randomObject,"value");
        expect(map.get(randomObject)).toBe("value");

        map = new Map([["key",21],["key2",22]]);
        expect(map.get("key")).toBe(21);
        expect(map.get("key2")).toBe(22);

        map.delete("key2");
        expect(map.has("key2")).toBe(false);

        map.clear;
        expect(map.size).toBe(0);

        map.put("a","a").forEach(function(value, key){
           console.log(key + " = " + value);
        });

        for(var [key,value] of map){

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