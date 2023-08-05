// Assertion

type One = string
type Two = string | number
type Three = 'hello'

// convert to more or less specific
let a: One = 'hello'
// assign to a less specific type
let b = a as Two 
// assign to a more specific type
let c = a as Three

// You can also use the angle brackets to assign data type, but they cannot be used in TSX files that you would use in React.
let d = <One>'world'
let e = <string | number>'world'

const addOrConcat = (a: number, b:number, c: 'add' | 'concat'): number | string => {
    if (c === 'add') return a + b
    return '' + a + b
}

// adding as is a way to explicitly tell TypeScript that add or concat
// telling typescript to ignore the warning, we know it's returning a string
let myVal: string = addOrConcat(2,2,'concat') as string

// Be careful! TS sees no problem - but a string is returned.
let nextVal: number = addOrConcat(2,2,'concat') as number

// 10 as string
// This is called Double casting or Force casting because we're using two assertions here
// You know you you are going to cast something specifically, overrule typescript
// unknown is kinda like the any type, you want to avoid that whenever possible but occasionally it is useful to know how to use it.
(10 as unknown) as string

// The DOM
// TypeScript doesn't know what document we're linking our JS to
// Using an exclamation mark is called a non-null assertion
const img = document.querySelector('img')!
const myImg = document.getElementById('#img') as HTMLImageElement
// Once again, this can't be used with React
const nextImg = <HTMLImageElement> document.getElementById('#img')

img.src
myImg.src