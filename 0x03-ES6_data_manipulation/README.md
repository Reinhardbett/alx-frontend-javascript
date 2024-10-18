# 0x03. ES6 data manipulation

## Learning objectives
- How to use map, filter and reduce on arrays
- Typed arrays
- The Set, Map, and Weak link data structures

## Requirements
- All files will be executed on Ubuntu 18.04 LTS using NodeJS 12.11.x
- Allowed editors: vi, vim, emacs, Visual Studio Code
- All files should end with a new line
- A README.md file, at the root of the folder of the project, is mandatory
- Your code should use the js extension
- Your code will be tested using Jest and the command npm run test
- Your code will be verified against lint using ESLint
- Your code needs to pass all the tests and lint. You can verify the entire project running npm run full-test
- All of your functions must be exported

## Setup
- Install NodeJS 12.11.x (Make sure to have at least 500MB of disk space)
- In home directory:
```
curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y
```
```
$ nodejs -v
v12.11.1
$ npm -v
6.11.3
```
- In your project directory, install Jest, Babel and ESList by using the supplied package.json and run `npm install`.

# Task 0
- default exports and named exports are two ways to export modules (functions, objects, variables, etc.) so they can be imported and used in other files
- A default export allows you to export a single value from a module.
- When importing a default export, you can give it any name you want.
- A module can only have one default export.
```javascript
// myModule.js
export default function greet() {
  console.log('Hello, world!');
}
```
```javascript
// main.js
import greetFunction from './myModule.js';

greetFunction(); // Output: Hello, world!
```
- A named export allows you to export multiple values from a module.
- You must import named exports using the same name (or alias them explicitly).
- A module can have multiple named exports.
```javascript
// myModule.js
export function greet() {
  console.log('Hello, world!');
}

export const PI = 3.14;
```
```javascript
// main.js
import { greet, PI } from './myModule.js';

greet(); // Output: Hello, world!
console.log(PI); // Output: 3.14
```
