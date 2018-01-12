describe("WeakMap WeakSet",function(){
    "use strict";

    it("WeakSet",function(){


        var set = new WeakSet();
        expect(set.size).toBeUndefined();
        expect(set.entries).toBeUndefined();
        expect(set.values).toBeUndefined();
        expect(set.forEach).toBeUndefined();

        set.add("a");
        set.has("a");
        set.delete("a");
        set.clear();


    });

    it("WeakMap",function(){
        var map = new WeakMap();
        expect(set.size).toBeUndefined();
        expect(set.entries).toBeUndefined();
        expect(set.keys).toBeUndefined();
        expect(set.values).toBeUndefined();
        expect(set.forEach).toBeUndefined();


        map.has("");
        map.get("");
        map.delete();
        map.clear();

    });


});