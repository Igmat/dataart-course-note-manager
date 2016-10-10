# DataArt-course-note-manager 
> Implemantation of DataArt course "React note manager".

## Table of Contents
<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
<!-- END doctoc generated TOC please keep comment here to allow auto update -->

- [Technologies](#technologies)
- [Running](#running)
  - [For Development](#for-development)
  - [For Production](#for-production)
  - [For Tests](#for-tests)
- [License](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Technologies
- This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
- Bundler: [Webpack](https://github.com/webpack/webpack).
- JavaScript: [TypeScript](https://github.com/Microsoft/TypeScript) and [Babel](https://github.com/babel/babel).
- Styles: [LESS](https://github.com/less/less.js) and [PostCSS](https://github.com/postcss/postcss).
- Testing: [Jest](https://github.com/facebook/jest).
- Libraries and framewroks: [React](https://github.com/facebook/react), [React Router](https://github.com/ReactTraining/react-router) and [Redux](https://github.com/reactjs/redux).

## Running
First of all run:
```sh
npm install
```
in `react-practice-backend` and `dataart-course-note-manager`.
### For Development
In `react-practice-backend` run:
```sh
npm start
```
Then in `dataart-course-note-manager` run:
```sh
npm start
```
Then open `localhost:3001` in browser. All requests except assets will be proxied to node backend on `localhost:3000`.  
It will use watch mode with hot reloading enabled. 
### For Production
In `dataart-course-note-manager` run:
```sh
npm run build
```
Then copy content of `dataart-course-note-manager/build` folder to `react-practice-backend/public` and run:
```sh
npm start
```
All assets will be minimized.
### For Tests
In `dataart-course-note-manager` run:
```sh
npm test
```
or for coverage output:
```sh
npm test -- --coverage
```
It will use watch mode.

## License

Copyright (c) Ihor Chulinda.
This source code is licensed under the [MIT license](LICENSE).