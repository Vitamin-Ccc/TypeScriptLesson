// Adding colon and data type in front of equal sign, explictly states this is a string, typescript doesn't have to infer.
let myName: string = 'Sky'
let meaningOfLife: number
let isLoading: boolean
let album: any
// this is called a union type, this means it could be a string or a number
let unionType: string | number

myName = 'John'
meaningOfLife = 42
isLoading = true

album = false
album = 23
album = 'Hello'

const sum = (a: number, b: string ) => {
    return a + b
}

let postId: string | number
let isActive: number | boolean

// regular expression that would select all words: /\w+/g
let re: RegExp = /\w+/g