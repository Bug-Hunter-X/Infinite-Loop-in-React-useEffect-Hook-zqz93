# React useEffect Infinite Loop Bug

This repository demonstrates a common error in React applications involving the `useEffect` hook: creating an infinite loop by improperly managing dependencies.

## The Bug
The `bug.js` file contains a `MyComponent` that uses `useEffect` to increment a counter.  However, the effect is missing the `count` variable in the dependency array. This causes the effect to run repeatedly, leading to an infinite loop and causing the browser tab to crash or become unresponsive.

## The Solution
The `bugSolution.js` file shows the corrected version.  By including `count` in the dependency array, the effect only runs when the `count` value changes (which is only once in this particular example because the initial state is not being changed by anything inside the useEffect). This prevents the infinite loop.

## How to Reproduce
1. Clone this repository.
2. Run `npm install` to install dependencies (assuming you're using npm. Use pnpm or yarn if you prefer).
3. Run `npm start` (or the equivalent for your package manager). Observe the error in the browser console, which might vary depending on the React version.