import {devide, multiply, sum} from  './math';

describe("math", () => {

    describe("devide", () => {
             it("should devide positive numbers", () => {
                const expectedResult = 6
        
                const actualdResult  = devide(18,3)
            
                expect(actualdResult).toBe(expectedResult)
            })
        
             it("should devide negative numbers", () => {
                const expectedResult = 6

                const actualdResult  = devide(-18,-3)
            
                expect(actualdResult).toBe(6)
            })
        
             it("should devide positive and negative numbers", () => {
                const expectedResult = -6

                const actualdResult  = devide(18,-3)
            
                expect(actualdResult).toBe(expectedResult)
            })
             it("should devide return Infinity dividing by 0", () => {
                const expectedResult = Infinity
        
                const actualdResult  = devide(18,0)
            
                expect(actualdResult).toBe(expectedResult)
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
