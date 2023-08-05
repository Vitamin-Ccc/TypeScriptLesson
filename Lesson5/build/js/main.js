"use strict";
// Assertion
// convert to more or less specific
let a = 'hello';
// assign to a less specific type
let b = a;
// assign to a more specific type
let c = a;
// You can also use the angle brackets to assign data type, but they cannot be used in TSX files that you would use in React.
let d = 'world';
let e = 'world';
const addOrConcat = (a, b, c) => {
    if (c === 'add')
        return a + b;
    return '' + a + b;
};
// adding as is a way to explicitly tell TypeScript that add or concat
// telling typescript to ignore the warning, we know it's returning a string
let myVal = addOrConcat(2, 2, 'concat');
// Be careful! TS sees no problem - but a string is returned.
let nextVal = addOrConcat(2, 2, 'concat');
// 10 as string
// This is called Double casting or Force casting because we're using two assertions here
// You know you you are going to cast something specifically, overrule typescript
// unknown is kinda like the any type, you want to avoid that whenever possible but occasionally it is useful to know how to use it.
10;
// The DOM
// TypeScript doesn't know what document we're linking our JS to
// Using an exclamation mark is called a non-null assertion
const img = document.querySelector('img');
const myImg = document.getElementById('#img');
// Once again, this can't be used with React
const nextImg = document.getElementById('#img');
img.src;
myImg.src;
