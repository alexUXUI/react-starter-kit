# React Starter Kit

## About

This project is a tool to get teams up and running with react in a matter of minutes rather than hours. It includes configuration for tools commonly used in front-end development.

## Starting the App

```shell
$ git clone <repo>
$ cd <repo>
$ npm i 
$ npm run dev
```

This will download the dependencies and start the react app. 

## Scripts

```json
{
    "dev": "cross-env NODE_ENV=development webpack-dev-server",
    "build:prod": "cross-env NODE_ENV=production webpack",
    "build:dev": "cross-env NODE_ENV=development webpack",
    "start": "serve dist",
    "test": "jest",
    "test:dev": "jest --watch",
    "test:ci": "jest --bail"
}
```

1. `dev`: start the app in development mode
2. `build:prod`: build the app in production mode
3. `build:dev`: builds the app in development mode
4. `start`: serves a built version of the app
5. `test`: runs the tests in regular jest mode
6. `test:dev`: starts the test runner in watch mode
7. `test:ci`: starts the tests in CI mode

## Technologies

This project is built on:

1. React + React-dom
2. Webpack V5
3. CSS
4. TypeScript

## How it works

Because browsers dont understand typescript, jsx, or some modern js features, we must transpile our application code into html/css/javascript. This project handles the transpilation of your app code using webpack and babel so that you can focus on feature development. With that in mind, webpack is being used as our dev server and bundler, and babel is being used as our transpiler. Babel is responsible for transpiling our typescript as well as our jsx. Babel does not have support for type-checking so please use an IDE such as vscode, which will provide static anaylsis of your code in the editor.

## What it includes

- Eslint for code consistency
- Prettier for code formatting
- Husky for dev flow

## Browser Support

This project needs to support the current and previous two versions of the following broswers:

Chrome, IE, IE Edge, Safari, and Firefox


