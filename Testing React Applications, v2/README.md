# Testing React Applications, v2 - course notes

_[Frontend Masters Course](https://frontendmasters.com/courses/testing-react/)_

### TODO: ###
  * [ ] Check out and do the example code provided for building an assertion library in JS framework
    * Inside the `/whats-a-test` folder - follow instructions starting with `todo.js`
  

### Tips & Tricks: ###


# Sections

## Intro
  * [Course Slides](https://slides.com/kentcdodds/testing-react-apps#/)
  * What this course is
    * Learn fundamentals of what a test is and what role testing frameworks play
    * Configure jest for CSR React project
    * Learn what code coverage is and how to properly use the metric
    * Write unit tests for JS utilities and React components
    * Learn what snapshot testing is and how to use it effectively
    * Write integration tests for a React application
    * Configure Cypress for a web application
    * Write E2E (end-to-end) tests with Cypress
  * Will not be using Enzyme
  * * Testing Fundamentals *
    * Suggestion - Static Code Analysis like ESLint
    * Integration tests - Renders entire app with router - usually takes more work
      * more coverage but can be slower and harder to set up
    * E2E test - Simulates user actions such as filling out forms and mouse events
  * General test format
    * Arrange - setup code and what is needed with correct state for test
    * Act - Perform changes to simulate use
    * Assert - declare what is the expected outcome of the test
  * Heavy reliance on DOM methods/attributes

## Test Configurations
  * Jest has built in regex for test matching
    * `testMatch: **/__tests__/**/*.[jt]s?(x), **/?(*.)+(spec|test).[tj]s?(x)`
  * Babel configuration should be set to transpile everything * except imports *
    * This is because there is more than one syntax that Webpack supports
    * Webpack supports ES6 modules for 'tree shaking'
  * Can change `.babelrc` to a JS file by using "presets" in `package.json`

## Unit Testing React Components


## Snapshot Testing


## Integration Testing Pages
  

## Configuring Cypress
  

## Wrapping Up

