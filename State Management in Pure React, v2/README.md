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
    * 
## Hooks State


## Reducers


## Context
  

## Data Fetching
  

## Thunks

## Wrapping Up

