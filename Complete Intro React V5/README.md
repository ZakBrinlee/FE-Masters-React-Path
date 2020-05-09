# Complete Intro to React, v5  - course notes #

*[Frontend Masters Course](https://frontendmasters.com/courses/complete-react-v5/)*


*[Presentation slides/application](https://btholt.github.io/complete-intro-to-react-v5/)*

## TODO: ##
  * [ ] Checkout more in dept ESlint config files
    * `parserOptions`
    * `env`
  * [ ] Look up 'lexically' and understand more about it
    * see reference in section "Context" - 4 minutes into video
  * [ ] Look into context and provider in dept
    * [Context Docs](https://reactjs.org/docs/context.html)

## Tips & Tricks: ## 
  * ESLint extension in VS Code
  * Prettier extension in VS Code
  * `package.json`
    * "browserlist" - array for telling babel and postcss which browsers to compile code to work for
  * Way to see what is coming in from `props` from router
    * `return( <pre><code?>{JSON.stringify(props, null, 4)}</code></pre>)`
  * You can import Google Analytics into your `"browserlist"`/`preset.env` to transpile specifically for your users.
    * uses the browserlist package
  * Any value that is returned from the DOM is of type string
    * use a `+` in front of anything that comes back from the DOM will turn it into a number
    * it is called a 'unary plus'
    * https://scotch.io/tutorials/javascript-unary-operators-simple-and-useful

# Sections #

## Introduction ##
  * React@16.8.4 - very small react package
    * How to interact - top level methods
  * React-Dom
    * Takes react package and renders to the browser

## Pure React #
  * `React.createElement(string, object, any)` - creates one instance of some component, which gets output to the DOM
    * first argument - creates a dom tag with that string
    * second argument - attributes being passed to the tag/component (id, styles, etc)
    * third argument - content inside of created element (children)
  * `ReactDOM.render()` - takes our rendered app and puts in the DOM.
  * Easy to use props declarations if use {} object destructuring in the props 

## npm, ESLint & Prettier ##
  * `npm init -y` - creates project without the prompts
  * Prettier - assistance to format project consistently
    * `npm i -D prettier`
    * Add calls to the *"scripts"* object of `package.json` for terminal commands
      * `"format": "prettier \"src/**/*.{js,html}\" --write"` command for running prettier on `src` directory
    * use file named `.pretterrc` as config file for specific project in root folder
  * Prettier vs ESLint
    * Prettier is about formatting and more mechanical
    * ESLint is about code and more in dept of the proper code being written
  * ESLint - tool for code analysis such as proper methods being called, syntax errors, etc
    * use file named `.eslintrc.json` as config file for specific project in root folder
    * rules levels - 0 = turn off - 1 = warn - 2 = error
  * gitignore - stuff to be ignore with commits

## Parcel ##
  * Similar to webpack but with less complexity
  * No configuration
  * bundle all code together with one for development and one for production
  * will build the app and run it locally (see script for "dev")
  * does "tree shaking" of modules
  * Live code inclusion, only includes code that could potentially run
  * Can actively install a registered package while app is built and running.  

## JSX ##
  * Translation layer to take JS and create markup
    * `React.createElement("h1", {}, "Zak")` => `<h2>Zal</h2>`
  * `npm install -D ...`
    * `babel-eslint` - allows eslint to be augmented by babel - helps eslint understand react better
    * `eslint-plugin-import` - better rules about import/exporting
    * `eslint-plugin-jsx-a11y` - accessibility catch
    * `eslint-plugin-react` - helps with additional react rules

## Hooks ##
  * React keeps track of hooks by their order in the code
  * `npm i -D eslint-plugin-react-hooks` - official rules from the React team about writing hooks
    * look at ESLint config file for rule additions
  * Every time it changes it runs the `render()` method again
  * map function note:
    * using `key` as a identifer
    * improves performance

## Effects ##
  * `useEffect` - replaces several lifecycle methods
    * componentDidMount
    * componentWillUnmount
    * componentDidUpdate
    * disconnected from when the render happens, it scheduled to run AFTER the first render
    * `[...]` - dependency array to manage when the hook will be ran
    * `[]` - empty dependency array to only run once
  * `useState` - replaces class constructor with state being declared
    * returns value and a method to set the value
  * More in-dept coverage of React Hooks in the Intermediate React course

## Dev Tools ##
  * `NODE_ENV=development`
    * developer tools built in to use when developing
    * Parcel automatically sets this to dev when building but production when you tell it to
  * `<React.StrictMode></React.StrictMode>` - Give additional warning about things you should not be doing
    * Improper uses
    * Things being deprecated
  * React Devtools
    * a must have
  
## Handling Async ##
  * `await` - similar to `.then()` but not needed. Will just return/wait for the response

## Reach Router ##
  * Helpful for single-page-applications
  * See tip/trick for displaying the props object
  * `<Link />` - component used for routing
  * `navigate` - used from '@reach/router' for navigating to outside URL

## Class Components ##
  * `setState()` - is call a 'shallow merge' which may literally be `Object.assign(oldState, newState)`
    * If there are any collisions then the new state will overwrite the old.
  * in a `then()` method using a `function()` will cause `this.` to mean something else
    * eg. `pet.animal(this.props.id).then(function({ animal })) {`
    * this is in place of `then(({ animal }) => {` which is the correct way of doing it
  * arrow functions do NOT create new context
  * *Way to change having to use a constructor for declaring state*
    * Using `state = {key: value}` is possible in React with a change to  babel.config
    * This is a proposed change to JavaScript expect to be officially added in 2019-2020
    * `npm install -D babel-eslint @babel/core @babel/preset-env @babel/plugin-proposal-class-properties @babel/preset-react`
    * will also need to update `.eslintrc.json` file to tell eslint to use babel parser to understand the experimental code
  * Can use `getDerivedStateFromProps()` to separate some of the logic out from using a map straight from props to create a smaller map first.
  * use `bind()` in a class constructor to bind a the context of a DOM function to the class component
    * `this.handleIndexClick = this.handleIndexClick.bind(this);`
  * Also just use an arrow function which does not create new content but gets the state 'lexically'

## Error Boundaries ##
  * Error boundaries allow you to capture errors without crashing app
  * [Error Boundaries Doc](reactjs.org/docs/error-boundaries.html)

## Context ##
  * [Context Docs](https://reactjs.org/docs/context.html)
  * Look into context and provider in dept
  * `useContext` is a hook
  * `<ThemeContext.Consumer />` - reads off of the provider to use the context within it's children

## Portals and Refs ##
  * `createPortal` - interesting function for rendering a component into a different part of app
    * See how it is set up with ref and useEffect for un-mounting

## Conclusion ##
  * Look into Preact
    * smaller, slower app
    * much smaller and good choice when targeting lower power/performance devices
