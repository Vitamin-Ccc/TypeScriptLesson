"use strict";
// Adding colon and data type in front of equal sign, explictly states this is a string, typescript doesn't have to infer.
let myName = 'Sky';
let meaningOfLife;
let isLoading;
let album;
// this is called a union type, this means it could be a string or a number
let unionType;
myName = 'John';
meaningOfLife = 42;
isLoading = true;
album = false;
album = 23;
album = 'Hello';
const sum = (a, b) => {
    return a + b;
};
let postId;
let isActive;
// regular expression that would select all words: /\w+/g
let re = /\w+/g;
