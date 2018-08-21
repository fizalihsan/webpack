
A simple 'Hello World' web application using Webpack.

## app01

* Initialize yarn for the app `yarn init -y` which creates `package.json`
* install webpack locally: `yarn add webpack@3.5.5 --dev` which installs webpack under `./node_modules`
* Create app files: `index.html`, `app.js`, `content.js`
* Create webpack configuration file: `webpack.config.js`
* execute the webpack: `./node_modules/.bin/webpack` or `yarn webpack` which takes the input files and generates output files as configured in the config file. 
> [webpack.config.js, app.js, content.js, *.scss] -> [dist/main.js]
* Open `dist/index.html`

* Add HTMLWebPackPlugin to inject the generates sources into the HTML file: `yarn add html-webpack-plugin --dev` and modify webpack.config.js.
* To hot reload changes made during development instead of running `yarn webpack` for every change, run `yarn webpack -- --watch`

## app02

* Add CSS support: `yarn add css-loader style-loader --dev`

## app03

* Add jQuery: `yarn add jquery --dev`

## app04

In app03, `dist/main.js` contains both the application source js code and the vendor jquery code. This app is to demonstrate how to separate them out.

* Create `src/vendor.js` and update `webpack.config.js`
* Add new plugin: CommonsChunkPlugin

## app05

This shows how to transpile typescript to JavaScript using webpack

* install typescript: `yarn add typescript @types/node @types/core-js @types/jquery  --dev`
* create `tsconfig.json`
* install webpack typescript loader: `yarn add awesome-typescript-loader --dev`
* replace `[app,content].js` with `[app,content].ts` and update webpack.config.js

## app06

Adding support for SCSS to CSS transpilation

* install node-sass: `yarn add node-sass sass-loader --dev`
* add loader rules in webpack.config.json
* change message.css to message.scss

> Source: https://www.edc4it.com/blog/web/webpack-tutorial.html