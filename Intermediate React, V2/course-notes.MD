# Intermediate React, v2

_[Frontend Masters Course](https://frontendmasters.com/courses/intermediate*react*v2/)_

## TODO:

- Understand 'closure' and how it applies to state
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

## Hooks In\*Depth

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

-

## Code Splitting

## Server Side Rendering

## TypeScript with React

## Redux

## Testing React
