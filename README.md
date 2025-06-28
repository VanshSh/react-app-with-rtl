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
  - why prefer Vitest over Jest => refactor above
  -  how Vitest UI can help => refactor above
-  Tasks to do
   -  **create proper readme**
      -  how to run rtl with vitest
      -  what is vitest some important api
      -  live links
      -  explain about the app
      -  how to run the app
      -  how to run the tests
      -  how to run the Vitest UI
      -  [vitest watch mode compare to jest watch mode](https://www.perplexity.ai/search/vitest-run-all-test-in-watch-m-C2xdBzXUQsGD0HInRlB58g)
      -  should include what apis of the RTL are used kind of table what those api do
         -  difference between render and screen and which one to use when
         -  test.only and test.skip
         -  what is vi.fn
         -  what is assert and expect
         -  screen.debug, .....
         -  Explain other react api that i have used
         -  Should use Async test as well
      - why prefer Vitest over Jest => refactor above
      - how Vitest UI can help => refactor above
      - how much percetage of code coverage is achieved
      - what is the right convention to write tests,
        - what to consider while writing tests
        - what to avoid while writing tests
        - what to cover when writing tests
        ```
        Test Structure and Conventions
         Describe blocks: Group related tests with describe.
         Test names: Use clear, descriptive names for what the test does.
         Arrange-Act-Assert: Structure each test to set up, perform actions, and make assertions.
         Use RTL queries: Prefer queries that resemble how users find elements (e.g., getByPlaceholderText, getByRole).
        1. What to Cover When Writing Tests
         For a Simple Input Component (like SearchBar):
         Rendering: Does the component render without crashing?
         Props: Does it display the correct value from props?
         User Interaction: Does it call the callback with the right value when changed?
         Accessibility: Is the input accessible (e.g., has a placeholder or label)?
         Edge Cases: What happens with empty values or special characters?

         What to Consider
         Test behavior, not implementation details.

         Test from the user’s perspective (how the component is used, not how it’s built).

         Keep tests isolated (one concern per test).

         Use mock functions for callbacks.

          What to Avoid
         Don’t test internal state or private functions.

         Don’t rely on class names or test implementation details.

         Don’t write overly broad tests (test one thing per test).

         Don’t use console.log for debugging in tests (use screen.debug() if needed).
        ```
  

  Render a component	render, screen.debug
2	Query elements	getByText, getByRole, getByLabelText, getByPlaceholderText, getByTestId, queryBy..., findBy...
3	User interactions	fireEvent, userEvent
4	Assertions	expect(...).toBeInTheDocument(), toHaveTextContent, toHaveValue, etc. (from @testing-library/jest-dom)
5	Async behavior	waitFor, findBy...
6	Mocking functions/props	Jest/Vitest mocking utilities
7	Accessibility checks	Prefer queries like getByRole, getByLabelText
8	Testing custom hooks	Render hooks with RTL's renderHook (from @testing-library/react-hooks)
9	Edge cases & error states	Test error messages, empty states, etc.