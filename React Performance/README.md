# Frontend Masters Course - React Performance

## What will be covered
- How React works
- Build a toolset for diagnosing performance issues in React
- Learn best practices when building React applications
- React tools for caching & memoizing components
- Benefits from structure your component heirarchy and application state
- React 18 has a bunch of super cool new concurrency features
-- `useTransition() && useDefferedValue()`

## Questions
- Will React batch together state changes that occur at the same time?
-- React 18+ will always batch together state changes

## Hierarchy when solving performance problems
- 1. If you can solve a problem with how you shape your component hierarchy or state - Do that FIRST
- 2. Memoization is a solid strategy ONLY if the cost of checking pays for itself with the time you save rendering
- 3. Using the Suspense API to progressively load your application is a GOOD IDEA. And, more good stuff will come soon
- 4. The TRANSITION API is there for you when you are REALLY in a pickle

## Basic Performance tips:
- Push State as low as possible. As High as needed, as low as you can get away with

## React Rendering
### Inspect Performance with Dev Tools
- Quick Wins
-- Are you checking in `production` mode
-- Not giving a mapped value a `key` that is not the index of array
- Utilize React Developer Tools extension
  
### React Rendering Cycle
- 3 phase cycle
-- Render Phase -> Commit Phase -> Clean Up Phase
- Render Phase
-- Usually triggered by state change
-- All children will be re-rendered regardless of need

### React Fiber & Rendering Q&A
- A fiber is a fancy word for a very cool data structure that React uses to keep track of component instances.
- When adding, removing, or changing the order of the collection, having unique KEYS allows React to keep track of which is which and ideally avoid having to spend too much effort trying to figure out what changed.
  
## Reducing Renders
### Reducing Rerenders
- Push State as low as possible. As High as needed, as low as you can get away with

### Pulling Content Up
- Ability to pass children through components using React's hierechy
- `memo` to look at props prior to calls of action

### useMemo & useCallback
- `useMemo`: If it was expensive to get this value or it could trigger a render, but it's really no different than last time- then just use the value we had last time.
-- Usefull if you want the value to be persisted
- `useCallback`: Actually don't whip up a new function if nothing has changed.
-- Usefull if you want the same function referenced

## Context
### Context API
- Context is a hidden prop

### Normalizing State
- Keep it normalized in a way that when one object changes, only that object is changed in memory, not all of the state

## Suspense and Transitions
- Suspense -> easy way to get performance gains. Lazy load stuff that is rarely used

### useTransition Hook
- `startTransition()`: is used when triggering an update (ie. `setState` in an event handler)
- `useDeferredValue()`: is used when receiving new data from a parent component (or an earlier hook in the same component).

## Wrapping Up
- If you can solve a problem with how you shape you COMPONENT HEIRARCHY or STATE - do that FIRST
- MEMOIZATION is a solid strategy ONLY if the cost of checking pays for iteself with the time you save rendering.
- Using the `Suspense API` to pregressively load you application is a GOOD IDEA. And, more good stuff will come soon.
- The `Transition API` is there for you when you are REALLY in a pickle.

