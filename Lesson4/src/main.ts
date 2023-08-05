// Type Aliases
// We are creating type aliases for our typescript types
type stringOrNumber = string | number

type stringOrNumberArray = (string | number)[]

type Guitarists = {
    name?: string,
    active: boolean,
    // The code below can be replaced by type aliases.
    // albums: (string | number)[]
    albums: stringOrNumberArray
}

type UserId = stringOrNumber

// This is not going to work because interface is more as an object or a class
// interface PostId = stringOrNumber

// Literal types: this is a specific assignment
let myName: 'Sky'
// This is not going to work because it's a specific assignment, 'Sky' is the type of this variable and you can't assign it to something else
// myName = "John"

let userName: "Sky" | "John" | "Amy"
userName = 'Amy'

// functions
const add = (a: number, b: number): number => {
    return a + b
}

// A void type is for functions that don't return anything
const logMsg = (message: any): void => {
    console.log(message)
}

logMsg("Hello!")
logMsg(add(2,3))
// logMsg(add("a", 3))

let subtract = function (c: number, d: number): number {
    return c - d
}

type mathFunction = (a: number, b: number) => number

let multiply: mathFunction = function (c, d) {
    return c * d
}

const divide: mathFunction = (a, b) => {
    return a / b
}

logMsg(multiply(2,3))
logMsg(divide(6,3))

interface mathFunction2 {
    (a: number, b: number): number
}

// Optional Parameters: needs to be at the last, your required parameters do need to come first
const addAll = (a: number, b: number, c?: number): number => {
    if (typeof c !=='undefined'){
        return a + b + c
    }
    return a + b
}

// Default Parameter value
// We can not use type aliases or interface for default values
const sumAll = (a: number = 10, b: number, c: number = 2): number => {  
    return a + b + c
}

logMsg(addAll(2,3,2))
logMsg(addAll(2,3))
// We have a 10 as the default value for a so we have to put undefined for you to run the below function
logMsg(sumAll(undefined, 3))

// Rest Parameters
// ... is the rest operator
const total = (a: number, ...nums: number[]): number => {
    return a + nums.reduce((prev, curr) => prev + curr)
}

logMsg(total(10,2,3,4));

// never type is for functions that explicitly throw errors or function that has an infinite or endless loop inside.
const createError = (errMsg: string): never => {
    throw new Error(errMsg)
}

const infinite = () => {
    let i: number = 1
    while (true){
        i++
        if (i > 100) break
    }
}

const isNumber = (value: any): boolean => {
    return typeof value === 'number'
        ? true : false
}

const numberOrString = (value: number | string): string => {
    if (typeof value === 'string') return 'string'
    if (typeof value === 'number') return 'number'
    return createError('This should never happen')
}