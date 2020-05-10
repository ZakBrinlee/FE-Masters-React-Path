# Intermediate React, v2 - course notes

_[Frontend Masters Course](https://frontendmasters.com/courses/intermediate*react*v2/)_

## TODO:

[ ] Understand 'closure' and how it applies to state
  - video by Kyle Simpson on 'closure'
  - [Deep Javascript Foundations v3 \* Closure](https://frontendmasters.com/courses/deep*javascript*v3/origin*of*closure/)

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
  * completed section commit [Here]()
  * Essential for small application
  * Idea behind not loading everything up front for faster time to paint
  * `lazy` - a placeholder to be used/called when the component is tried to be rendered for the first time
    * think of example of yotpo review tab on PDP page of TPCI project
  * `<Suspense />` - a component with a fallback for when anything in the router is loading
  * uses dynamic import, parcel is smart enough to know to code split the component into a separate bundle
  * Code splitting should be done/targeted at components of 30kb or more
  * Interesting use with `<Modal/>` or `<Snackbar/>`



## Server Side Rendering

## TypeScript with React

## Redux

## Testing React
