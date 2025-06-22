import {devide, multiply, sum} from  '../math';

describe("math", () => {

    describe.only("devide", () => {
             it.each([
                {inputA: 6, inputB: 3, expected: 2},
                {inputA: 12, inputB: 3, expected: 4},
                {inputA: 100, inputB: 10, expected: 10},
                {inputA: 10, inputB: 0, expected: Infinity},
                {inputA: 6, inputB: 3, expected: 2},
             ])("should $inputA devided by $inputB equals $expected", ({inputA, inputB, expected}) => {
        
                const actualdResult  = devide(inputA,inputB)
            
                expect(actualdResult).toBe(expected)
            })
    })

    describe("multiply", () => {
            it("should multiply positive numbers", () => {
                const expectedResult = 6
        
                const actualdResult  = multiply(2,3)
            
                expect(actualdResult).toBe(expectedResult)
            })
        
             it("should multiply negative numbers", () => {
                const expectedResult = 6

                const actualdResult  = multiply(-2,-3)
            
                expect(actualdResult).toBe(expectedResult)
            })
        
             it("should multiply positive and negative numbers", () => {
                const expectedResult = -6

                const actualdResult  = multiply(2,-3)
            
                expect(actualdResult).toBe(expectedResult)
            })
    })

    describe("sum", () => {
        it("should sum positive numbers", () => {
                const expectedResult = 6
        
                const actualdResult  = sum(3,3)
            
                expect(actualdResult).toBe(expectedResult)
            })
        
             it("should sum negative numbers", () => {
                const expectedResult = -6

                const actualdResult  = sum(-3,-3)
            
                expect(actualdResult).toBe(expectedResult)
            })
        
             it("should sum positive and negative numbers", () => {
                const expectedResult = -6

                const actualdResult  = sum(-9,3)
            
                expect(actualdResult).toBe(expectedResult)
            })

    })
})
