// Basic Class in TypeScript
// Inside of the class, properties and methods are called members
// class Coder {
//     // You do need the property to exist in the class as a member and then you also need to name it in the Constructor.
//     name: string
//     music: string
//     age: number
//     lang: string
//     // We need to have a constructor
//     constructor(
//         name: string, 
//         music: string, 
//         age: number, 
//         lang: string
//         ) {
//         this.name = name
//         this.music = music
//         this.age = age
//         this.lang = lang
//     }
// }

// Visibility Modifiers or Data Modifiers or Access Modifiers or Visibility Members
class Coder {
    // Adding ! means we know what we are doing, we're not going to initialize this right away
    secondLang!: string

    constructor(
        public readonly name: string,
        public music: string,
        // Private can only be accessed inside of this class
        private age: number,
        // Setting a default value for this so you could leave it empty
        // Protected can be accessed inside of the class but it could also be accessed inside of derived classes if we were to extend this to a subclass, we could still access lang
        protected lang: string = 'TypeScript'
    ) {
        // Assignments in the body of the constructor are not required here. It is not an error if you leave them , but it's not required.
        this.name = name
        this.music = music
        this.age = age
        this.lang = lang
    }

    public getAge() {
        return `Hello, I'm ${this.age}`
    }
}

const Dave = new Coder('Dave', 'Rock', 42)
console.log(Dave.getAge())
// console.log(Dave.age)
// console.log(Dave.lang)

class WebDev extends Coder {
    constructor(
        public computer: string,
        name: string,
        music: string,
        age: number,
    ) {
        super(name, music, age)
        this.computer = computer
    }
}