# React + TypeScript + Vite

This project is a minimal React application bootstrapped with Vite and TypeScript. It demonstrates how to set up a modern frontend stack with fast development experience, strict linting, and robust testing.

## What will be done in this project?
- Build a simple React application using TypeScript and Vite.
- Write and run unit/component tests for React components using Vitest and Testing Library.
- Enforce code quality with ESLint and recommended plugins.
- Explore best practices for scalable frontend development.

## Why prefer Vitest over Jest?
- **Speed:** Vitest is significantly faster than Jest, especially in Vite projects, because it leverages Vite's native ES module support and lightning-fast HMR.
- **Native ESM support:** Vitest works seamlessly with ES modules, which is the default in Vite, while Jest requires extra configuration for ESM.
- **Vite integration:** Vitest shares the same configuration and plugins as Vite, making it easier to test code exactly as it runs in development.
- **Modern features:** Vitest provides a Jest-like API, built-in TypeScript support, and first-class support for modern frontend workflows.

## How Vitest UI Can Help
- **Interactive Test Runner:** Vitest UI provides a web-based interface to view, run, and debug your tests interactively.
- **Live Updates:** Tests automatically re-run and results update in real time as you change your code or tests.
- **Easy Debugging:** You can filter, re-run, and inspect test results directly in the browser, making it easier to catch and fix issues quickly.
- **Visual Feedback:** See which tests pass or fail at a glance, and drill down into error messages and stack traces for faster troubleshooting.

To start Vitest UI, run:
```sh
npx vitest --ui --watch
```
Then open the provided local URL in your browser to access the UI.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh




----
----
# things to do
- post on
  - why prefer Vitest over Jest
  -  how Vitest UI can help
-  Tasks to do
   - create simple crud app  
   -  **create proper readme**
      -  should include what apis of the RTL are used
         -  screen.debug
      -  Should use Async test as wel
   - 