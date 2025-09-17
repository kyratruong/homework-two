// idk
// var total = 100;
//     if (total > )

console.log("file");

//Boolean

let isTrue = true;
let isFalse = false;

console.log(isTrue, isFalse);

let isRaining = false;
console.log("isRaining = ", isRaining);

let age = 18;

let isAdult = age >= 18;
console.log("isAdult = ", isAdult);

let isChild = age < 13;
console.log("isChild = ", isChild);

// Logical Operators
// AND && OR || NOT !

// && = AND
let idoldEnough = age > 21 && age < 65;
console.log("idoldEnough = ", idoldEnough);

// 0 : false
// 1 : true

// age >age 21 && age < 65

// 0 && 0 = 0
// 0 && 1 = 0
// 1 && 0 = 0
// 1 && 1 = 1

// || = OR
let Aid = age > 21 || age > 65;
console.log("isoldEnough = ", Aid);

// 0 : false
// 1 : true

// age >age 21 || age < 65

// 0 || 0 = 0
// 0 || 1 = 1
// 1 || 0 = 1
// 1 || 1 = 1

//Condition
if (age >= 18) {
  console.log("You are an adult");
}

if (age < 21) {
  console.log("You are a voter");
} else {
  console.log("You are not a voter");
}

// ! = NOT

// 0 : false
// 1 : true

// !isMissing

// !0 = 1
// !1 = 0

let isMissing = false;
if (!isMissing) {
  console.log("You are not missing");
} else {
  console.log("You are missing");
}

if (age == 19) {
  console.log("You are 19");
} else {
  console.log("You are not 19");
}

if (age != 19) {
  console.log("You are not 19");
} else {
  console.log("You are 19");
}

// == : compare value
// === : compare value and type
// != : compare value not equal
// !== : compare value and type not equal

console.log(1 == "1");
// true (compare value only)
console.log(1 === "1");
// false (compare value and type)
// both Has to be in string to be true

// FUNCTION ====================================================

function sayHello() {
  console.log("Hello");
}

sayHello();

function sum(a, b) {
  return a + b;
}

console.log(sum(1, 2));

// console.log(sum);

// Greet User Practice =========================================
function greetUser(name) {
  console.log("Hello " + name);
}

// FUnction Sum =================================================
greetUser("John");

function sum(a, b) {
  return a + b;
}

console.log(sum(1, 2));
console.log(sum);

// FUnciton Multiply ==========================================
function multiply(a, b) {
  return a * b;
}
console.log(multiply(3, 4));

let result = multiply(1, 2);
console.log(result);

// FUnction hello john ==========================================
function greetUser1(name = "John") {
  console.log("Hello " + name);
}
greetUser1();

// Nested Funtion ==========================================
function outside() {
  console.log("Outside");
  function inside() {
    console.log("Inside");
  }
  inside();
}

outside();

let g = "global";

function Local() {
  let l = "Local";
  console.log(g);
  console.log(l);
}

Local();
// console.log(l);
