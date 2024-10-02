# 0x00. ES6 Basics

## Learning requirements
- What ES6 is
- New features introduced in ES6
- The difference between a constant and a variable
- Block-scoped variables
- Arrow functions and function parameters default to them
- Rest and spread function parameters
- String templating in ES6
- Object creation and their properties in ES6
- Iterators and for-of loops

## Project requirements
- All files will be executed on Ubuntu 18.04 LTS using NodeJS 12.11.x
- Allowed editors: vi, vim, emacs, Visual Studio Code
- All your files should end with a new line
- A README.md file, at the root of the folder of the project, is mandatory
- Your code should use the js extension
- Your code will be tested using the Jest Testing Framework
- Your code will be analyzed using the linter ESLint along with specific rules that we’ll provide
- All of your functions must be exported

### Task 0
- const is used in taskFirst() since the value assigned to task never changes.
- let is used in taskNext() because the value of combination is being updated later in the function.
- let and const are block-scoped while var is function-scoped or globally-scoped
- Because of hoisting, var can be accessed before declarations, unlike let and const
- Unlike var, let and const do not allow re-declaration
- Use let for variables that need to be mutable within a block

### Task 6
- Template literals in ES6 are enclosed by backticks (`) instead of single (') or double (") quotes, and provide a way to embed expressions, create multi-line strings, and work with tagged templates
- Template literals allow you to embed variables and expressions directly within strings using ${}.
```javascript
const name = 'Alice';
const age = 25;
const greeting = `Hello, my name is ${name} and I am ${age} years old.`;

console.log(greeting); // Output: Hello, my name is Alice and I am 25 years old.
```
- They help create multi-line strings without needing to use newline characters (\n) or concatenation.
```javascript
const message = `This is a multi-line
string that spans
across several lines.`;

console.log(message);
/* Output:
This is a multi-line
string that spans
across several lines.
*/
```
- Template literals allow embedding expressions that are evaluated at runtime. This can include mathematical operations, function calls, or any JavaScript expression
```javascript
const a = 10;
const b = 20;
const result = `The sum of a and b is ${a + b}.`;

console.log(result); // Output: The sum of a and b is 30.
```

### Task 7: JavaScript's shorthand syntax for defining object properties
```javascript
export default function getBudgetObject(income, gdp, capita) {
  const budget = {
    income,
    gdp,
    capita,
  };

  return budget;
}
```
- Using the ES6 object shorthand, the object properties are named after the variables income, gdp, and capita.
- The object shorthand works by automatically assigning the variable values to the properties with the same names.

