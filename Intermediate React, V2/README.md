# Intermediate React, v2 - course notes

_[Frontend Masters Course](https://frontendmasters.com/courses/intermediate*react*v2/)_

## TODO:

[ ] Understand 'closure' and how it applies to state
  - video by Kyle Simpson on 'closure'
  - [Deep Javascript Foundations v3 \* Closure](https://frontendmasters.com/courses/deep*javascript*v3/origin*of*closure/)
[ ] Learn in-dept typescript and configuration
  * ^ Added at beginning of typescript section
  * Check out default tsl rules and common setups for tsl config files
  * 


## Tips & Tricks:

# Sections

## Basic Hooks

- Link to sandbox used in example [Here](https://codesandbox.io/s/github/btholt/react*hooks*examples/tree/master/)
- `useState`
  - returns an array of two object
    - First is current value
    - Second object is function to set the value
- `useEffect`
  - Does not run immediately \* it runs after the first render
  - uses a dependency array `[]` to listen to specific dependents to the `useEffect` function
  - use a cleanup function with `return () => .....`
- `useContext`
  - Solves the problem of 'prop drilling' where passing elements child to child gets tedious
  - Covers application level state
  - Context component usually has state then returns with a Provider

## Hooks In-Depth

- `useRef`
  - `.current` of ref will always be the value of that ref in current time
  - useful if you have a problem of multiple closures and you need to hold onto the same state
- `useReducer`
  - same usage as a Redux reducer
  - a function that takes in old state, an action and returns new state based on the action
  - needs to be provided an initial object to start
  - easy to test the data mutation since it has clarity with what the returned state should be
- `useMemo` - good for performance optimizations
  - `memo` is a pure react component for heavy computations to be used with class components
  - give it a function of how to compute something and it's dependencies
  - very similar to useEffect, there to handle larger computations
- `useCallback`
  - works nearly the same as `useMemo`
- `useLayoutEffect`
  - Anytime there is a render, the effect is called
  - similar to media queries
  - synchronous right after render
- `useImperativeHandle`
  - used to have a child control the parent by reversing the data flow

## CSS in JS
- completed section commit [Here](https://github.com/ZakBrinlee/FE-Masters-React-Path/commit/693e910d7e2ff73084853a76eeb8a2622666a378)
* [Emotion](https://emotion.sh/docs/introduction)
  * `npm install @emotion/core @emotion/babel-preset-css-prop`
  * requires some configuration with babel config
  * library designed for writing css styles with JavaScript
  * uses in element styling
  * interesting use for making code more modular
  * if you delete a component then you delete the styling with it, useful for not having unused css code

## Code Splitting
  * completed section commit [Here](https://github.com/ZakBrinlee/FE-Masters-React-Path/commit/4df2f5c5c6b58e2aa90979e1063cd639a0abca42)
  * Essential for small application
  * Idea behind not loading everything up front for faster time to paint
  * `lazy` - a placeholder to be used/called when the component is tried to be rendered for the first time
    * think of example of yotpo review tab on PDP page of TPCI project
  * `<Suspense />` - a component with a fallback for when anything in the router is loading
  * uses dynamic import, parcel is smart enough to know to code split the component into a separate bundle
  * Code splitting should be done/targeted at components of 30kb or more
  * Interesting use with `<Modal/>` or `<Snackbar/>`

## Server Side Rendering
  * completed section commit [Here](https://github.com/ZakBrinlee/FE-Masters-React-Path/commit/437bbd224a834db6019df70c666d9c5b07364813)
  * Why SSR
    * Allows all of the application to be written in React, pre-render everything with markup and wait for React to take over once loaded
  * `hydrate()` - expects markup and doesn't re-render when js loads
  * `npm install babel-cli express`
    * `babel-cli` - because React needs to run through babel since Nodejs doesn't speak JSX
    * `express` - one of many node frameworks
    * see addition to "scripts" for "build" and "start"
  * `npm install express @babel/node`
  * able to define all route in client side but node is still able to understand and use them
  * `renderToNodeStream()` - a kind of progressive loading, loads and sends chunks at a time

## TypeScript with React
  * completed section commit [Here](https://github.com/ZakBrinlee/FE-Masters-React-Path/commit/e7c8c79a41dd80d7769cd821214393d37404281f)
  * saves you from runtime production errors due to types
  * inline documentation as writing code using the `.`
  * Install and configure *TypeScript* for React
    * `npm install -D typescript`
    * `npx TypeScript --init` - npx: runs npm binaries for you - TypeScript: TypeScript compiler - --init: starts a TypeScript project
  * `TypeScriptonfig.json` - TypeScript settings
  * Packages like *React* are not written in TypeScript
    * [DefinetelyTyped](https://definitelytyped.org/)
      * Allows people to write types for libraries they don't control
      * `npm install -D @types/react @types/react-dom @types/reach__router`
  * By default tps does not check `.js` files
    * Telling it with the right stuff so it knows which rules to apply. eg. *HTMLELEMENT type will have the rules and properties of that type applied*
  * ESLint vs TSLint
    * plans to get rid of TSLint and move everything/everyone over to ESLint
    * TSLint is better at working with tps than ESLint
  * `npm uninstall eslint babel-eslint eslint-config-prettier eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks`
    * removes all of preinstalled ESLint from previous exercises to be replaced with TSLint
  * `npm install -D tslint tslint-react tslint-config-prettier`
  * If something is declared as `private` - tps will catch it and not allow
  * [Advanced Types](https://www.typescriptlang.org/docs/handbook/advanced-types.html)
    * Type refinement
    * more advanced ways to model types
  * Con of TypeScript is it something forces defensive programming to a level where it is not necessary
  
## Redux
  * Why - Central repository for state in an application
    * Every step is testable - able to observe how the state changes clearly
    * Very small library
  * Becoming less popular with solid context API and hooks like `useReducer`
  * Sagas help with multiple asynchronous calls and maintaining their order
    * [Advanced State Management in React (feat. Redux and MobX)](https://frontendmasters.com/courses/react-state/)
  * `npm i redux react-redux`
  * Reducers - simple i/o for how state should change depending on action being provided
    * Required - every action *must* have a `type`
    * [Document about how actions should look](https://github.com/redux-utilities/flux-standard-action)
      * Written by a co-creator of Redux
  * Can use redux dev tools to generate unit tests for redux

## Testing React
