import { multiply } from "./multiply"

describe("multiply", () => {

    it("shiold multiply positive numbers", () => {
        const res  = multiply(2,3)
    
        expect(res).toBe(6)
    })

     it("shiold multiply negative numbers", () => {
        const res  = multiply(-2,-3)
    
        expect(res).toBe(6)
    })

     it("shiold multiply positive and negative numbers", () => {
        const res  = multiply(2,-3)
    
        expect(res).toBe(-6)
    })
})
