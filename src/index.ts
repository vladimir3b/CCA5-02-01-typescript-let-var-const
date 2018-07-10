/**
 *  *********************************************************************
 *
 *     CodeCraft - Angular 5:
 * 
 *     02 - ES6 JavaScript & TypeScript - let vs var vs const:
 *      
 *     - https://codecraft.tv/courses/angular/es6-typescript/let/
 *     - https://codecraft.tv/courses/angular/es6-typescript/const/ 
 *
 * **********************************************************************
 */

"use strict";

// Write Javascript code!
function consoleToHTML(text: any): void {
  const appDiv = document.getElementById("app");
  if (appDiv) {
    appDiv.innerHTML += text + "<br>";
  }
}
function line() {
  consoleToHTML("--------------------------------------------------------");
}


var a: number = 2;
let b: number = 2; // these are global variables

function sum(c: number): number {
  // a, b are accessible within the body of a function
  return a + b + c;
}

consoleToHTML(`${a} + ${b} + ${3} = ${sum(3)}`);

// but

var a1: number = 2;
if (true) {
  let b1: number = 3;
}

//consoleToHTML(`${b1}`); // b1 is not accessible
// This should return an error, however it doesn't. This is maybe because
// code is transpiled to ES5 even if there are ES6/TS errors. Anyway, this
// is strange...

// function sum1(c1: number): number {
//   // a1 is accessible within the body of a function
//   // b1 is not
//   return a1 + b1 + c1; // this will throw an error
// }

// consoleToHTML(`${a1} + ${b1} + ${3} = ${sum1(3)}`);

{
  var a2: number = 1;
}

consoleToHTML(`${a2}`);

{
  let b2: number = 3;
}

//consoleToHTML(b2);
line();
// use IIFE - Immediately Invoked Function Expression to simulate block scope

function something() {
  var a: string = "John is a big boy, now.";

  if (true) {
    var a: string = "John is too young to candidate to an election";
  } // a will be changed in the entire scope of the function

  consoleToHTML(a);
}
something();
line();
function something1() {
  var a: string = "John is a big boy, now.";
  if (true) {
    (function () {
      var a: string = "John is too young to candidate to an election";
    })(); // a will NOT be changed in the entire scope of the function
  }
  consoleToHTML(a);
}
something1();
line();

function something2() {
  var a: string = "John is a big boy, now.";
  if (true) {
    let a: string = "John is too young to candidate to an election";
  } // a will NOT be changed in the entire scope of the function
  consoleToHTML(a);
}
something2();
line();

// JS interview question - what will be printed by this statement?
var functions: Array<Function> = [];
for (var i: number = 0; i <= 10; i++) {
  var y: number = i;
  functions.push(function () {
    return y;
  });
}
functions.forEach(function (func: Function) {
  consoleToHTML(func());
});
line();
// y is a global variable, in the global scope, so it is changed
// 11 times, from 0 to 10 and when the functions are invoked y is 10

// but

var functions1: Array<Function> = [];
for (var i: number = 0; i <= 10; i++) {
  let y: number = i;
  functions1.push(function () {
    return y;
  });
}
functions1.forEach(function (func: Function) {
  consoleToHTML(func());
});
line();

// now y is defined within the scope of each body of the for statement
// in ES5 to simulate this we use closures:

var functions2: Array<Function> = [];
for (var i: number = 0; i <= 10; i++) {
  (function () {
    // This is a IIFE
    var y: number = i;
    functions2.push(function () {
      return y;
    });
  })();
}
functions2.forEach(function (func: Function) {
  consoleToHTML(func());
});
line();

// this is equivalent with:

var functions3: Array<Function> = [];
for (let i: number = 0; i <= 10; i++) {
  functions3.push(function () {
    return i;
  });
}
functions3.forEach(function (func: Function) {
  consoleToHTML(func());
});
line();

const con1: number = 702;
consoleToHTML(con1);
//con1 = 51;
// again this should throw an error but...
//consoleToHTML(con1);

if (true) {
  const VALUE: number = 705;
}

//consoleToHTML(VALUE);
// this throws an error because VALUE only exists
//in the context of if block
line();

const object1: any = {
  name: "box",
  color: "blue"
};

consoleToHTML(`${object1.name} -> ${object1.color}`);

// object1 = {};
// this will throw an error but this...

object1.price = "55$"; // will be ok

consoleToHTML(`${object1.name} -> ${object1.color} -> ${object1.price}`);

// to completely block an object use Object.freeze

const object2 = Object.freeze({
  name: "box",
  color: "blue"
});

consoleToHTML(`${object2.name} -> ${object2.color}`);

// object1 = {};
// this will throw an error but this...

//object2.price = "55$";
// will also throw an error

consoleToHTML(`${object2.name} -> ${object2.color} -> ${object2.price}`);
// object2.price will be undefined
line();
