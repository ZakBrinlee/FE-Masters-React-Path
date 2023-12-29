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

## Tailwind CSS

## Advanced React Performance

## Low Priority Re-Rendering

## Typescript

## Redux

## Testing

## Wrapping Up
