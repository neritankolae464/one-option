/*
 * Filename: complexCode.js
 * Content: A complex and elaborate JavaScript code that demonstrates various concepts and techniques.
 */

// Define a class for mathematical operations
class MathOperations {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }

  add() {
    return this.a + this.b;
  }

  subtract() {
    return this.a - this.b;
  }

  multiply() {
    return this.a * this.b;
  }

  divide() {
    if (this.b !== 0) {
      return this.a / this.b;
    } else {
      throw new Error('Divide by zero error!');
    }
  }
}

// Create an instance of the MathOperations class
const math = new MathOperations(10, 5);

// Perform some math operations
const sum = math.add();
const difference = math.subtract();
const product = math.multiply();
const quotient = math.divide();

// Print the results
console.log(`Sum: ${sum}`);
console.log(`Difference: ${difference}`);
console.log(`Product: ${product}`);
console.log(`Quotient: ${quotient}`);

// Generate Fibonacci sequence using recursion
function fibonacci(n) {
  if (n <= 1) {
    return n;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

// Print Fibonacci sequence up to the 10th term
console.log('Fibonacci sequence:');
for (let i = 0; i < 10; i++) {
  console.log(fibonacci(i));
}

// Create an array of numbers and perform various array operations
const numbers = [1, 2, 3, 4, 5];
console.log(`Original Array: ${numbers}`);

// Use map to square each number
const squaredNumbers = numbers.map((num) => num ** 2);
console.log(`Squared Numbers: ${squaredNumbers}`);

// Use filter to get even numbers
const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log(`Even Numbers: ${evenNumbers}`);

// Use reduce to find the sum of numbers
const sumOfNumbers = numbers.reduce((acc, num) => acc + num, 0);
console.log(`Sum of Numbers: ${sumOfNumbers}`);

// Sort the array in ascending order
const sortedNumbers = numbers.sort((a, b) => a - b);
console.log(`Sorted Numbers: ${sortedNumbers}`);

// Generate random numbers and find their average
let total = 0;
for (let i = 0; i < 1000; i++) {
  const randomNumber = Math.random() * 100;
  total += randomNumber;
}
const average = total / 1000;
console.log(`Average of Random Numbers: ${average}`);

// Implement a basic linked list data structure
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  print() {
    let current = this.head;
    const elements = [];
    while (current) {
      elements.push(current.value);
      current = current.next;
    }
    console.log(`Linked List: ${elements}`);
  }
}

// Create a linked list and perform operations on it
const linkedList = new LinkedList();
linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
linkedList.append(4);
linkedList.print();

// Perform an asynchronous operation using Promise
function asyncOperation() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Async operation completed!');
    }, 2000);
  });
}

asyncOperation()
  .then((result) => console.log(result))
  .catch((error) => console.error(error));

// Implement an asynchronous generator function
async function* asyncGenerator() {
  let i = 0;
  while (i <= 10) {
    yield await new Promise((resolve) => setTimeout(() => resolve(i++), 1000));
  }
}

// Iterate over the values produced by the asynchronous generator
(async () => {
  for await (const value of asyncGenerator()) {
    console.log(`Async Generator Value: ${value}`);
  }
})();