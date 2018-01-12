describe("math",function(){
    "use strict";

    it("new correct values",function(){
        expect(Math.acosh(1)).tobe(0);
        expect(Math.cosh(0)).tobe(1);

        expect(Math.asinh(0)).tobe(0);

        expect(Math.atanh(0)).tobe(0);
        expect(Math.tanh(0)).tobe(0);

        expect(Math.sinh(0)).toBe(0);

    });

    it("mix math function",function(){
        expect(Math.cbrt(27)).tobe(3);

        // no of leading zeroes for 32 bit representation
        expect(Math.clz32(5)).tobe(29);

        //expect(Math.log1p(35)).toBe(3.58351893845611);

        expect(Math.log10(100)).toBe(2);

        expect(Math.log2(32)).toBe(5);

        //expect(Math.expm1(32)).toBe(5);

        expect(Math.hypot(3,4)).toBe(5);

        expect(Math.fround(2.888)).toBe(2.888000011444092);

        expect(Math.sign(10)).toBe(1);
        expect(Math.sign(0)).toBe(0);
        expect(Math.sign(-10)).toBe(-1);

        expect(Math.trunc(2.8)).toBe(2);
        expect(Math.trunc(-2.8)).toBe(-2);
    });

});