# Frontend Masters Course

# Intermediate React v3

- Started: Thursday December 28th, 2023
- Completed: December, 2023

## Links

- [Course Website](https://react-v8.holt.courses/lessons/intermediate-react-v5/welcome-to-intermediate-react-v5)
- []() -
- []() -
- []() -
- []() -
- []() -
- []() -

## Top Level Notes
- Think about a metric to measure your app by to check performance. What is an acceptable time to load for your audience, app type, etc
- Do not use the `useMemo` hook before having an actual performance problem to solve for

## Questions

-

## Introduction

## Hooks in Depth

- useRef
  -- Ability to interact with the actual DOM
  -- Allows a container that will maintain the same value between renders
- useMemo
  -- Allows React to keep track and not rerender if the props being passed in are the same
  -- Gurantees no rerender if function props are the same
- useCallback
  -- The component you are passing into `useCallback` must have been wrapped with `memo`
  -- Ability to memoize a callback so the same function is given every single time
- useReducer
  -- Simple function that takes in state, an action and gives back a new state
  -- Elegant way to handle complex interaction that changes state over time
- useLayoutEffect
  -- Happens syncronizously after the thing has been rendered
  -- Useful to measure a component on rerender
- useId
  -- Unique identifer per instanciant of a component is consistent. SSR and CSR
- [Other Hooks](https://react-v8.holt.courses/lessons/hooks-in-depth/others) - Deeper summaries for the following hooks
  -- useImperativeHandle
  -- useDebugValue
  -- useDefferedValue
  -- useTransition
  -- useSyncExternalStore
  -- useInsertionEffect

## Tailwind CSS

## Advanced React Performance
### Code Splitting
- React is 40kb(ish) just for the framework
- Allows framework (vite) to identify spots where code can be separated and loaded later. 
- Load the bare minimum to load and let the user see what is needed, then load the rest later
- `chunk_**` files in network tab is React splitting code into smaller chunks with just what is needed
## Low Priority Re-Rendering
- `useDefferredValue`
-- useDeferredValue takes in a value and gives you a cached version of it: that cached version may be current or it may a stale one as it works through a re-render. Evenutally it will be the current one
-- then need to use that cached version. So we use `useMemo` to make a version of the component that can be used and won't change until the deferredPets value changes (otherwise it'll just re-render every time anyway)
## Typescript
- Great setup config for React/Typescript and linter
-- https://react-v8.holt.courses/lessons/typescript/typescript-and-eslint
## Redux

## Testing

## Wrapping Up

