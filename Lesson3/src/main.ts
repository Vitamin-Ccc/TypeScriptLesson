let stringArr = ['one', 'hey', 'Sky']

let guitars = ['Strat', 'Les Paul', 5150]

let mixedData = ['EVH', 1984, true]

stringArr[0] = "John"
stringArr.push('hey')

guitars[0] = 1984
guitars.unshift('Jim')

// can't do it the other way around because stringArr only accepts string data type
guitars = stringArr
mixedData = guitars

let test = []
let bands: string[] = []
bands.push('Van Halen')

// Tuple
let myTuple: [string, number, boolean] = ['Sky', 37, false]

let mixed = ['John', 1, true]

// This is not going to work because the mixed array is not required to have only three elements in the array. TypeScript understands that there's a posibility that mixed may not have three elements, so you can't assign to a Tuple that requries three elements.
// myTuple = mixed

// This is Ok because mixed is a type of array with Union type that accepts string, number, and boolean. That's what the Tuple has.
mixed = myTuple

// This is not going to work because the fourth element in the myTuple array is not defined.
// myTuple[3] = 42

// Objects
let myObj: object
myObj = []
console.log(typeof myObj)
myObj = bands
myObj = {}

const exampleObj = {
    prop1: 'Sky',
    prop2: true,
}

exampleObj.prop1 = "Edward"

type Guitarist = {
    name: string,
    // To make the active property optional, add a question mark in front of the colon
    active?: boolean,
    // active: boolean,
    albums: (string | number)[]
}

// If this is going to be a Guitarist type, it needs to have all the properties inside Guitarist type. Missing any of the properties (name or active or albums) will throw an error.
let evh: Guitarist = {
    name: "Eddie",
    active: false,
    albums: [1984, 5150, "OU812"]
}

let jp = {
    name: "Jimmy",
    albums: ['I', "II", "IV"]
}

// This is not going to work because jp is not a type guitarist and it's missing the active property.
// evh = jp

// This is not going to work because we can't just add another property that doesn't exist on the guitarist type that was predefined
// evh.years = 40

const greetGuitarist = (guitarist: Guitarist) => {
    return `Hello ${guitarist.name}!`
}

console.log(greetGuitarist(evh))

// interface and type should work the same way.
interface Guitarists {
    name?: string,
    active: boolean,
    albums: (string | number)[]
}

let evh2: Guitarist = {
    name: "Eddie",
    active: false,
    albums: [1984, 5150, "OU812"]
}

let jp2: Guitarist = {
    name: "Jimmy",
    active: true,
    albums: ['I', "II", "IV"]
}

const greetGuitarist2 = (guitarists: Guitarists) => {
    if (guitarists.name) {
        return `Hello ${guitarists.name.toUpperCase()}!`
    }
    return "Hello!"
    // It's possible that the guitarists doesn't have a name property. One way to fix this error is to make the name property in this function optional as well. So by adding a question mark after name
    // return `Hello ${guitarists.name.toUpperCase()}!`
    // return `Hello ${guitarists.name?.toUpperCase()}!`
}

// Enums
// "Unlike most TypeScript features, Enums are not a type-level addition to JS but something added to the language and runtime."
// Enumerated and they start at position 0

// Assign U to 1, the enum went ahead and advanced all of these by 1, so it starts at one and it keeps them in order one through five instead of zero through four.
enum Grade {
    U = 1,
    D,
    C,
    B,
    A,
}

console.log(Grade.U)