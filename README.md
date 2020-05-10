# FE-Masters-React-Path
Coursework related to Frontend Masters React learning path

### TODO from course notes: ###
  *Complete Intro to React, v5*
  * [ ] Checkout more in dept ESlint config files
    * `parserOptions`
    * `env`
  * [ ] Look up 'lexically' and understand more about it
    * see reference in section "Context" - 4 minutes into video
  * [ ] Look into context and provider in dept
    * [Context Docs](https://reactjs.org/docs/context.html)

  *Intermediate React, v2*
  * [ ] Understand 'closure' and how it applies to state
    * video by Kyle Simpson on 'closure'
    * [Deep Javascript Foundations v3 \* Closure](https://frontendmasters.com/courses/deep*javascript*v3/origin*of*closure/)
  * [ ] Learn in-dept typescript and configuration
    * Check out default tsl rules and common setups for tsl config files
  * [ ] Gain a better understanding of Istanbul and test-coverage
    * [Istanbul test coverage tool](https://istanbul.js.org/)

### Tips & Tricks from course notes: ###
  *Complete Intro to React, v5*
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

  *Intermediate React, v2*
  * Once a unit test passes, it is good to ensure it will fail correctly as well

  
## Courses

**[X] [Complete Intro To React, V5](https://frontendmasters.com/courses/complete-react-v5/)**

**[X] [Intermediate React, V2](https://frontendmasters.com/courses/intermediate-react-v2/)**

**[ ] [State Management in Pure React, v2](https://frontendmasters.com/courses/pure-react-state/)**

## Elective Coursework ##

**[ ] [Testing React Applications, v2](https://frontendmasters.com/courses/testing-react/)**

**[ ] [Client-Side GraphQL in React](https://frontendmasters.com/courses/client-graphql-react/)**

**[ ] [Introduction to Gatsby](https://frontendmasters.com/courses/gatsby/)**

**[ ] [State Management with Redux & MobX](https://frontendmasters.com/courses/redux-mobx/)**

**[ ] [Data Visualization for React Developers](https://frontendmasters.com/courses/d3-js-react/)**

**[ ] [Firebase with React, v2](https://frontendmasters.com/courses/firebase-react-v2/)**

