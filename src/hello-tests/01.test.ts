import {multiply, sum} from "./01";

let a:number;
let b:number;
let c:number;

beforeEach(()=>{
    a=1
    b=2
    c=10
})

test("sum of two numbers should be correct", ()=>{

    const result = sum(a, b);
    const result2 = sum(a, c);

    expect(result).toBe(3)
    expect(result2).toBe(11)
})

test("multiply of two numbers should be correct", ()=>{

    const result = multiply(a, b);
    const result2 = multiply(a, c);

    expect(result).toBe(2)
    expect(result2).toBe(10)
})