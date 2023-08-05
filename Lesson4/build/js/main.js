"use strict";
// This is not going to work because interface is more as an object or a class
// interface PostId = stringOrNumber
// Literal types: this is a specific assignment
let myName;
// This is not going to work because it's a specific assignment, 'Sky' is the type of this variable and you can't assign it to something else
// myName = "John"
let userName;
userName = 'Amy';
// functions
const add = (a, b) => {
    return a + b;
};
// A void type is for functions that don't return anything
const logMsg = (message) => {
    console.log(message);
};
logMsg("Hello!");
logMsg(add(2, 3));
// logMsg(add("a", 3))
let subtract = function (c, d) {
    return c - d;
};
let multiply = function (c, d) {
    return c * d;
};
const divide = (a, b) => {
    return a / b;
};
logMsg(multiply(2, 3));
logMsg(divide(6, 3));
// Optional Parameters: needs to be at the last, your required parameters do need to come first
const addAll = (a, b, c) => {
    if (typeof c !== 'undefined') {
        return a + b + c;
    }
    return a + b;
};
// Default Parameter value
// We can not use type aliases or interface for default values
const sumAll = (a = 10, b, c = 2) => {
    return a + b + c;
};
logMsg(addAll(2, 3, 2));
logMsg(addAll(2, 3));
// We have a 10 as the default value for a so we have to put undefined for you to run the below function
logMsg(sumAll(undefined, 3));
// Rest Parameters
// ... is the rest operator
const total = (a, ...nums) => {
    return a + nums.reduce((prev, curr) => prev + curr);
};
logMsg(total(10, 2, 3, 4));
// never type is for functions that explicitly throw errors or function that has an infinite or endless loop inside.
const createError = (errMsg) => {
    throw new Error(errMsg);
};
const infinite = () => {
    let i = 1;
    while (true) {
        i++;
        if (i > 100)
            break;
    }
};
const isNumber = (value) => {
    return typeof value === 'number'
        ? true : false;
};
const numberOrString = (value) => {
    if (typeof value === 'string')
        return 'string';
    if (typeof value === 'number')
        return 'number';
    return createError('This should never happen');
};
