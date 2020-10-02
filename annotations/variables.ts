// Type annotations: We tell Typescript the type
// Type inference: Typescript guesses the type

let apples = 5;
let speed: string = "fast";
let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

// built in objects
let now: Date = new Date();

// Array
let colors: string[] = ["red", "green", "purple"];
let myNumbers: number[] = [1, 2, 3];
let truths: boolean[] = [true, true, false];

// Classes
class Car {}
let car: Car = new Car();

// Object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

// Function (function annotation use the function signature,
// parameter and the return value)
const logNumber: (i: number) => void = (i) => {
  console.log(i);
};

function logNumber2(i: any) {
  console.log(i);
}

let test = logNumber2;

// When to use annotations
// 1) function that returns the 'any' type
// !: Avoid variables with 'any' at all costs
const json = '{"x": 10, "y": 20}';
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates);

// 2) When we declare a variable on one line
// and initialize it later
let words = ["red", "green", "blue"];
let foundWord: boolean;

for (let index = 0; index < words.length; index++) {
  if (words[index] === "blue") foundWord = true;
}

// 3) Variable whose type that cannot be inferred correctly
let numbers = [-10, -1, 12];
let numberAboveZero: false | number = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}
