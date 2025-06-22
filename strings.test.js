import {toUpper, toLower, len} from  './strings';

describe("strings", () => {

    describe("toUpper", () => {
             it.each([
                {input: "lol", expected: "LOL"},
                {input: "---", expected: "---"},
                {input: "LOL", expected: "LOL"},
                {input: "Lol", expected: "LOL"},
             ])("should $input equals $expected", ({input, expected}) => {
        
                const actualdResult  = toUpper(input)
            
                expect(actualdResult).toBe(expected)
            })
    })

    describe("toLower", () => {
            it.each([
                {input: "LOL", expected: "lol"},
                {input: "---", expected: "---"},
                {input: "lol", expected: "lol"},
                {input: "Lol", expected: "lol"},
             ])("should $input equals $expected", ({input, expected}) => {
        
                const actualdResult  = toLower(input)
            
                expect(actualdResult).toBe(expected)
            })
    })

    describe("len", () => {
            it.each([
                {array: '1,2,3', expected: 5},
                {array: '', expected: 0},
                {array: Array.from({ length: 100001 }).toString(), expected: 100000},
             ])("should $len equals $expected", ({array, expected}) => {
        
                const actualdResult  = len(array)
            
                expect(actualdResult).toBe(expected)
            })

            it.each([
                {input: undefined, expected: TypeError},
                {input: undefined, expected: "Cannot read properties of undefined (reading 'length')"},
            ])('should throw $expected when called with $input', ({input, expected}) => {
                expect(() => len(input)).toThrow(expected);
            });

            it('should throw an error when called with null', () => {
                expect(() => len(null)).toThrow();
            });
                })
})
