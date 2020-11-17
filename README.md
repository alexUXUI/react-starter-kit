# Create Securian App

## About

Create Securian App is a starting point for developing react apps. 
It is meant to be extended but still come with the "batteries included." 🔋⚡️

## Project dependencies 

Node.js https://nodejs.org/en/download/

## Scripts

```json
{
    "dev": "cross-env NODE_ENV=dev webpack-dev-server --config scripts/webpack.config.js",
    "build": "cross-env NODE_ENV=prod webpack --config scripts/webpack.config.js",
    "serve": "npx http-server dist",
    "test": "jest",
    "test:dev": "jest --watch",
    "test:coverage": "npx http-server dist coverage/lcov-report",
    "analyze": "cross-env NODE_ENV=analyze webpack --config scripts/webpack.config.js"
}
```

1. `dev`: start the app in dev mode
2. `build`: build the app in prod mode
3. `serve`: serves a built version of the app
4. `test`: runs the tests in regular jest mode
5. `test:dev`: starts the test runner in watch mode
6. `test:coverage`: starts the test runner in watch mode
7. `analyze`: starts the app in analze mode

## Starting the App

The following commands will clone the project, download the dependencies, and start the app in development mode.

```shell
$ git clone <repo>
$ cd <repo>
$ npm i 
$ npm run dev
```

## Developing 

To start developing your react app run `npm run dev`. This will start the development server.
The development server will watch your code for changes, and will automatically transpile, and update the web app in your browser. When you first start the server, it will open the app in a new tab in chrome. By default, the development server will run on `port 8080`.

**Configuring the development server:**

The dev server can be configured in the `devServer` options in `scripts/webpack.dev.js`. Here is the current configuration:

```javascript
  devServer: {
    open: true, // opens a new tab in chrome 
    hot: true, // enables hot module replacement
    overlay: true, // shows errors in the browser
  }
```

Other configs can be added to this object to fit your app needs:

```javascript
  devServer: {
    ...devServerConfigs,
    port: 9000, // specify port
  }
```

please see: https://webpack.js.org/configuration/dev-server/ for more dev server config options.

## Building

To build the app, run `npm run build`. This will build the app in production mode. The output of the build will be placed in the `dist` folder. To preview the build run `npm run serve` and got to https://localhost:8080.

## Testing

Jest is used as the test runner. To configure jest, edit the `jest.config.js` file at the root of the project. https://jestjs.io/

Jest can find any test files with `.test` or `.spec` appended to the end of name. It doesn't matter where you place your tests in the project directory as long as file names end in `.test|spec.ts|tsx`. Jest is using babel to transpile the app typescript code and the babel configs can be found in `.babelrc` in the app root.

**Viewing the testng coverage report:**

Jest will generate coverage reports for us. 

1) run `npm run test` to run the tests and generate the report
2) run `npm run test:coverage` and go to http://localhost:8080 to view the report

### Component tests

Testing library react is being used for component tests. See the example usage in `specs/App.component.tsx`. 

For more on testing library react checkout the docs:

https://testing-library.com/docs/react-testing-library/intro/

## Styles

This project is configured for SASS: https://sass-lang.com/

// @TODO talk about and hook up dsg react
All default styling should be consumed through DSG react: Link to project
add certs, etc

## Code Consitency:

- Eslint for code consistency: https://eslint.org/
- Prettier for code formatting: https://prettier.io/
- Husky for dev flow: https://typicode.github.io/husky/#/

## Managing environments

### Environment Variables

CSA provides support for `process.env` in application code using `webpack-dotenv`: 

https://github.com/mrsteele/dotenv-webpack

Set envs in a `.env` file in the root of directory and reference variables in app code as `process.env.ENV_VAR`.

### Adding an environment

This project comes configured for two environments, `dev` and `prod`. To create another environment, go into the `scripts` folder and add a new webpack file. 

For example: to create a staging env, the new file should be named `webpack.staging.js`. 

Next, add some webpack configurations that are specific to your `staging` environment. For example, you can configure your staging env to use a new env file called `.env.staging`. Your `webpack.staging.js` file shohuld now look like: 

```javascript
module.exports = {
  plugins: [
    new Dotenv({
      path: path.resolve(__dir, '..', '.env.staging'), 
    })
  ]
}
```

Then in the `package.json` file add a new script to build the app using the staging env configuration. 

```json
"staging": "cross-env NODE_ENV=staging webpack --config scripts/webpack.config.js",
```

> It is important that the `NODE_ENV` variable be set and that its value is equal to the name of the webpack file that it is calling. For example: if we want to build the app in dev mode, `NODE_ENV` should equal `dev` because the webpack dev config file is named `webpack.dev.js`

## Browser Support

This project supports the current and previous two versions of the following broswers:

Chrome, IE, IE Edge, Safari, and Firefox