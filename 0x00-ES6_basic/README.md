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
