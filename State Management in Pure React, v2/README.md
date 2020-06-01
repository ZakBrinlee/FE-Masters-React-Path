# State Management in Pure React, v2 - course notes

_[Frontend Masters Course](https://frontendmasters.com/courses/pure-react-state/)_

### TODO: ###
  * [ ] 
    * 
  

### Tips & Tricks: ###
  * `JSON.parse()` - does not like being passed `undefined` or `null`

# Sections

## Intro
  * [Workshop Slides](https://speakerdeck.com/stevekinney/react-state?slide=3)
  * Topics this course covers
    * Deep think into what "state" means in React
    * Inner working of `this.setState`
    * Difference between class-based and hooks state
    * Explore APIs for navigating around prop-drilling
    * Use reducers for advanced state management
    * Write our own custom hooks for managing state
    * Use Local Storage
    * Store state in URL using query parameters
    * Fetch state from a server
  * High Level - React
    * React main job is to take application state and turn it into DOM nodes
  * Types of State
    * *Model Data*: The nouns of your application
    * *View/UI state*: Are those nouns stored in asc or desc?
    * *Session state*: Is user logged in?
    * *Communication*: Are we in the process of fetching the nouns?
    * *Location*: Where are we in the application? Which nouns are we looking at?
  

## Class-Based State
  * React is trying to reduce the amount of re-renders with `this.setState` being asynchronous
  * Calling multiple `setState` will stack them like a queue/batch.
  * `setState` can be passed a function and set rules
  * Able to add a callback function that runs after the state is set
    * the callback does not take in arguments
  * Patterns
    * When working with props, we have PropTypes. *not the case with state*
    * Do not use props when declaring state in constructor
      * eg. `fullName: props.firstName + ' ' + props.lastName`
    * Instead use destructuring in render method.
    * *Don't use state for things you are not going to render*

## Hooks State
  * Hooks allow us to manipulate state in functional components
  * `useState`
    * setting rules in the `set--` function of `useState` does not work like class base state
    * Does not merge state so it will not handle undefined or null in the same way. Should always return something with `useState`
  * `useEffect`
    * Anything that is not the return value is a side effect
      * console logs are side effects
    * `useEffect` is essentially the same as `componentDidUpdate` but it targets a certain prop or every re-render.
    * Gives the ability to define dependencies as well as gives the ability to clean up after itself.
  * In Javascript we pass objects by reference and primitives by value

## Reducers
  * *`useReducer`*
  * If you mutate an object, an array, they are the same reference in memory.
    * React can't tell that it is different just because the keys/values may be difference
  * Very easy to test because it simplifies the mutation
  * `React.memo()`
    * Takes a function component and returns one that will not render it again if it receives the same props
  * `useMemo`
    * It will call the functions as dependencies change
  * `useCallback` 
    * Gives you the function rather than the result
  * General idea is to separate the state from the actual components and all needed was `dispatch`
## Context
  * Context API - allows to solve the problem of prop drilling without needing to use something like Redux or MobX
    * > "Context provides a way to pass data through the component tree without having to pass props down manually at every level" - from Context API docs
  * Prop Drilling - occurs when you have deep component trees
  * `React.createContext()`
    * returns two components - `Provider` & `Consumer`
  * Provides some autonomy for components as components can reach their dependent data from anywhere

## Data Fetching
  * Can create and use an `async` function within `useEffect`
    * `useEffect` itself cannot be async
  * `useReducer` is a great tool for managing the response and any manipulation to the data
  * Custom hooks are a great way to handle fetching

## Thunks
  * What is a *Thunk*?
    *  *thunk (noun):* a function returned from another function
    * Middleware - reducers do not have a concept of async
  * ```javascript
    function definitelyNotAThunk() {
      return function aThunk() {
        console.log('Hello, I am a thunk.')
      }
    }
    ```
  * Major idea - code will be executed later
  * Example uses the `id` of the character in the url as state to read from for fetch call. Same ways done with TPCI Products/Orders


## Wrapping Up

