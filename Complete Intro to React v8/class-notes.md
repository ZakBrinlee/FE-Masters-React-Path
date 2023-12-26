# Frontend Masters Course

# Complete Intro to React v8

- Started: Sunday December 25th, 2023
- Completed: Sunday December 25th, 2023

### This course is for anyone who wants to know React better

## Links

- [React Error Boundaries documentation](https://legacy.reactjs.org/docs/error-boundaries.html)
- [React Portal documentation](https://react.dev/reference/react-dom/createPortal)

## Top Level Notes

## Introduction

## Setup & Tooling

- One way data flow with props
  -- Children cannot mess with it's parent

## Prettier setup

- Ability to enable `require config` in VSCode user settings
  -- This will enable Prettier automatically if a project has the config files

## ESLint setup

- Config file
  -- `extends` should always have `prettier` last

### Vite Setup

- Live Code Inclusion -> Tree Shaking
  -- Gives the ability to only include the parts of modules you use

## Core React Concepts

### JSX

- JavaScript meant to imitate HTML
- Capitalized JSX components, React reads as a custom component created by developer
- lowercase JSX components, React will pass the name directly to DOM

## React Capabilities

## Special Case React Tools

- Error Boundaries: Useful for handling JS errors in part of the UI that shouldn't break the whole app.
  -- [React Error Boundaries documentation](https://legacy.reactjs.org/docs/error-boundaries.html)
- React Portals
  -- think of the portal as a separate mount point (the actual DOM node which your app is put into) for your React app. A common use case for this is going to be doing modals.
  -- [React Portal documentation](https://react.dev/reference/react-dom/createPortal)

## Wrapping Up
