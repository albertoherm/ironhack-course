//Create and use functions in typescritp

// Define a function named calculateSum
function calculateSum(num1: number, num2: number): number {
  return num1 + num2;
}

console.log(calculateSum(4, 4)); // Output: 8
console.log(calculateSum(2, 2)); // Output: 4

// Define a function named isEven
function isEven(num: number): boolean {
  return num % 2 === 0;
}

console.log(isEven(4)); // Output: true
console.log(isEven(7)); // Output: false

// Define a function named reverseString
function reverseString(str: string): string {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

console.log(reverseString("ironhack")); // Output: kcahnori
console.log(reverseString("alberto")); // Output: otrebla
console.log(reverseString("hello world")); // Output: dlrow ollwh

// Define an arrow function named calculateAverage
const calculateAverage = (nums: number[]): number => {
  if (nums.length === 0) {
    return 0;
  }
  const sum = nums.reduce((acc, curr) => acc + curr, 0);
  return sum / nums.length;
};

console.log(calculateAverage([1, 2, 3, 4, 5])); // Output: 3
console.log(calculateAverage([10, 20, 30])); // Output: 20

// Define a function type named MathOperation
type MathOperation = (num1: number, num2: number) => number;

// Declare a variable named multiply with the value of an arrow function that multiplyes two numbers
const multiply: MathOperation = (num1, num2) => num1 * num2;

console.log(multiply(15, 15)); // Output: 225
console.log(multiply(30, 6)); // Output: 180
