# 0x01. ES6 Promises

## Learning Objectives
- Promises (how, why, and what)
- How to use the then, resolve, catch methods
- How to use every method of the Promise object
- Throw / Try
- The await operator
- How to use an async function

## Requirements
- All your files will be executed on Ubuntu 18.04 LTS using NodeJS 12.11.x
- Allowed editors: vi, vim, emacs, Visual Studio Code
- All your files should end with a new line
- A README.md file, at the root of the folder of the project, is mandatory
- Your code should use the js extension
- Your code will be tested using Jest and the command npm run test
- Your code will be verified against lint using ESLint
- All of your functions must be exported

## Setup
- In your project directory, install Jest, Babel and ESList by using the supplied `package.json` and run `npm install`
- `uploadPhoto` returns a response with the format:
```
{
  status: 200,
  body: 'photo-profile-1',
}
```
- `createUser` returns a response with the format:
```
{
  firstName: 'Guillaume',
  lastName: 'Salva',
}
```

### Task 6
- Promise.allSettled() is an ES2020 feature that allows you to run multiple promises in parallel and collect the results of all promises, regardless of whether they resolve or reject.
- Unlike Promise.all(), which fails immediately if any of the promises reject, Promise.allSettled() waits for all promises to complete and provides information about both resolved and rejected promises.
- For resolved promises:
```javascript
{ status: 'fulfilled', value: <resolved value> }
```
- For rejected promises:
```javascript
{ status: 'rejected', reason: <error reason> }
```
- No matter what happens (whether the promises fulfill or reject), Promise.allSettled() never rejects. It resolves with an array that gives the results of all the promises.
- It is useful when sending multiple HTTP requests and collecting partial results or when handling independent asynchronous tasks where the failure of one task shouldn't stop the others.
- Promise.all()	Waits for all promises to resolve. If any promise rejects, it rejects the entire operation.
- Promise.race()	Resolves or rejects as soon as the first promise completes (whether fulfilled or rejected).
- Promise.allSettled()	Waits for all promises and returns an array with both resolved and rejected results.
- Promise.any()	Resolves as soon as any one promise fulfills. If all promises reject, it rejects with an AggregateError.
