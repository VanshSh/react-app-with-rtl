# React + TypeScript + Vite

A modern, minimal React application bootstrapped with Vite and TypeScript. This project demonstrates a fast development workflow, strict linting, robust testing, and best practices for scalable frontend development.

---

## 🚀 Features

- ⚡️ Fast development with Vite and HMR
- 🛡️ TypeScript for type safety
- 🧪 Unit/component testing with Vitest & React Testing Library (RTL)
- 🧹 Code quality enforced by ESLint
- 🧩 Scalable, modular code structure

---

## 📦 Getting Started

### 1. Install dependencies

```sh
npm install
```

### 2. Run the app

```sh
npm run dev
```
Open the local URL provided in your terminal to view the app.

### 3. Run tests

```sh
npm run test
```

### 4. Run Vitest UI (Interactive Test Runner)

```sh
npm run test:ui
```
Open the provided local URL in your browser to access the Vitest UI.

---

## 📝 About the App

This is a simple Task Management app to practice writing test cases and then add features to the app.

- Component-driven development
- Custom hooks for state management
- Form handling and validation
- List rendering and filtering

---

## 🧰 Testing: Best Practices & Conventions

### Test Structure

- **Describe blocks:** Group related tests.
- **Test names:** Use clear, descriptive names.
- **Arrange-Act-Assert:** Structure each test for clarity.
- **RTL queries:** Prefer queries that resemble user interactions (e.g., `getByRole`, `getByPlaceholderText`).

---

### What to Cover

- **Rendering:** Does the component render without crashing?
- **Props:** Are props displayed/used correctly?
- **States:** Test component rendering based on different states (e.g., loading, error).
- **User Interaction:** Are callbacks called with correct values?
- **Accessibility:** Is the component accessible (labels, roles, etc.)?
- **Edge Cases:** How does the component handle empty values, errors, or special cases?
- **Flow:** Test the overall flow of user interactions, such as adding tasks, filtering, and deleting.

---

### What Not to Cover

- Implementation details (e.g., internal state, private methods).
- Third-party code.
- Code that is not directly related to the user's experience (like helper functions, utility functions, etc.)

---

### What to Avoid

- Don’t test internal state or private functions.
- Don’t rely on class names or implementation details.
- Don’t write overly broad tests.
- Don’t use `console.log` for debugging (use `screen.debug()`).

---

### RTL Queries

Every test generally follows these query patterns:
- Render the component using `render()`.
- Find elements using queries like `getByText`, `getByRole`, `getByLabelText`, etc.
- Assert element states using `expect` methods (e.g., `toBeInTheDocument`, `toHaveTextContent`).

---

### Q: What's the difference between getBy vs queryBy vs findBy?

- **getBy**: Synchronous query that throws an error if the element is not found. Use when you expect the element to be present.
- **queryBy**: Synchronous query that returns `null` if the element is not found. Use when the element may not be present and you want to avoid exceptions.
- **findBy**: Asynchronous query that waits for the element to appear in the DOM. Use when you expect the element to appear after some delay (e.g., after an API call or state change).
- [Detailed answer](https://www.perplexity.ai/search/what-is-difference-between-get-tCZXJT8gREO_49GqtGE8SQ)

---

## 🧑‍💻 Common RTL & Vitest APIs

| Purpose               | API/Method(s)                                                                             | Used In Files                         |
| --------------------- | ----------------------------------------------------------------------------------------- | ------------------------------------- |
| Render a component    | `render`, `screen.debug`                                                                  | TaskList.test.tsx, TaskForm.test.tsx  |
| Query elements        | `getByText`, `getByRole`, `getByLabelText`, `getByPlaceholderText`, `findBy`              | FilterBar.test.tsx, TaskList.test.tsx |
| User interactions     | `fireEvent`, `userEvent`                                                                  | TaskForm.test.tsx, TaskItem.test.tsx  |
| Assertions            | `expect(...).toBeInTheDocument()`, `toHaveTextContent`, `toHaveValue`, `assert`, `expect` | TaskItem.test.tsx, FilterBar.test.tsx |
| Async behavior        | `waitFor`, `findBy...`, `async/await`                                                     | TaskForm.test.tsx, TaskList.test.tsx  |
| Mocking functions     | `vi.fn`, `jest.fn` (Vitest/Jest utilities)                                                | useTasks.test.tsx                     |
| Accessibility checks  | Prefer queries like `getByRole`, `getByLabelText`                                         | FilterBar.test.tsx, TaskItem.test.tsx |
| Testing custom hooks  | `renderHook` (from `@testing-library/react-hooks`)                                        | useTasks.test.tsx                     |
| Edge/error states     | Test error messages, empty states, etc.                                                   | useTasks.test.tsx, TaskForm.test.tsx  |
| Run/skip tests/suites | `test.only`, `test.skip`, `describe.only`, `describe.skip`                                | TaskList.test.tsx                     |
| Debugging             | `screen.debug()`                                                                          | TaskList.test.tsx, FilterBar.test.tsx |
| Get elements          | `findByText`, `queryByRole`, `getByPlaceholderText`                                       | TaskItem.test.tsx, TaskForm.test.tsx  |

---

## 📊 Code Coverage

To check code coverage:

```sh
npm run test:coverage
```

---

## 🖥️ Vitest UI Highlights

- **Interactive Test Runner:** Web-based interface to view, run, and debug tests.
- **Live Updates:** Tests re-run and update in real time as you code.
- **Easy Debugging:** Filter, re-run, and inspect test results in the browser.
- **Visual Feedback:** Instantly see which tests pass/fail and drill into errors.

---

## 🧪 Why Vitest over Jest?

- **Speed:** Vitest is much faster, especially in Vite projects, leveraging native ES modules and HMR.
- **Native ESM support:** Works seamlessly with ES modules (default in Vite).
- **Vite integration:** Shares config/plugins with Vite for consistent dev/test environments.
- **Modern features:** Jest-like API, built-in TypeScript support, and first-class modern frontend workflow support.

---

## 🧩 Setting Up React Testing Library (RTL) with Different Test Runners & Build Tools

### 1. RTL + Vitest + Vite (Recommended)

**Steps:**
1. Install dependencies:
   ```sh
   npm install --save-dev vitest @testing-library/react @testing-library/jest-dom @testing-library/user-event
   ```
2. Add a `setupTests.ts` file (if not present) and include:
   ```ts
   import '@testing-library/jest-dom';
   ```
3. In your `vite.config.ts`, add:
   ```ts
   import { defineConfig } from 'vite';
   import react from '@vitejs/plugin-react';
   import { configDefaults } from 'vitest/config';

   export default defineConfig({
     plugins: [react()],
     test: {
       environment: 'jsdom',
       setupFiles: './src/setupTests.ts',
       globals: true,
       exclude: [...configDefaults.exclude, 'e2e/*']
     },
   });
   ```
4. Add test scripts to `package.json`:
   ```json
   "scripts": {
     "test": "vitest --watch",
     "test:ui": "vitest --ui --watch"
   }
   ```
5. Write tests in `*.test.tsx` files using RTL APIs.

---

### 2. RTL + Jest + Webpack

**Steps:**
1. Install dependencies:
   ```sh
   npm install --save-dev jest @testing-library/react @testing-library/jest-dom @testing-library/user-event babel-jest @babel/preset-env @babel/preset-react
   ```
2. Add a `jest.config.js`:
   ```js
   module.exports = {
     testEnvironment: 'jsdom',
     setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
     moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
     transform: {
       '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
     },
   };
   ```
3. Add a `babel.config.js`:
   ```js
   module.exports = {
     presets: [
       '@babel/preset-env',
       ['@babel/preset-react', { runtime: 'automatic' }],
       '@babel/preset-typescript',
     ],
   };
   ```
4. Add a `setupTests.ts` file:
   ```ts
   import '@testing-library/jest-dom';
   ```
5. Add test scripts to `package.json`:
   ```json
   "scripts": {
     "test": "jest"
   }
   ```
6. Write tests in `*.test.tsx` files using RTL APIs.

---

### 3. RTL + Jest + Vite (Not Recommended, but Possible)

- Vite is not designed to work with Jest, but you can run Jest tests in a Vite project by configuring Jest as above. However, Jest will not use Vite's build pipeline, so you may need to adjust module resolution and transforms for ESM and JSX/TSX files.
- **Caveats:**
  - You may encounter issues with ESM, aliases, or Vite-specific features.
  - Prefer using Vitest for Vite projects for seamless integration and faster tests.

**Steps:**
1. Install Jest and RTL as above.
2. Add Jest and Babel configs as above.
3. Ensure your Jest config handles ESM and JSX/TSX transforms.
4. Use `jest` scripts to run tests, but expect possible compatibility issues.

---

