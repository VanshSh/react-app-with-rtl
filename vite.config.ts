import react from '@vitejs/plugin-react'
import { defineConfig } from 'vitest/config'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    include: ['src/**/*.test.{ts,tsx}'],
    setupFiles: ['src/setupTests.ts'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html', 'json'], // output formats
      reportsDirectory: './coverage', // output directory
      include: ['src/**/*.{js,ts,jsx,tsx}'], // adjust as needed
      exclude: ['src/test/**/*.{js,ts,jsx,tsx}'], // adjust as needed
    },
  },
})
