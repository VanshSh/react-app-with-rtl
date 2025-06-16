import { render, screen } from '@testing-library/react'
import { describe, expect, test } from 'vitest'
import App from './App'

describe('TestingComponent', () => {
  test('renders the TestingComponent text', () => {
    render(<App />)
    screen.debug()
    expect(screen.getByText('Hello Vansh')).toBeInTheDocument()
  })
})
