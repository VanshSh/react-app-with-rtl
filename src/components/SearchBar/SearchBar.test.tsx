import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, test, vi } from 'vitest'
import SearchBar from './SearchBar'

const setup = (search = '', setSearch = vi.fn()) => {
  render(<SearchBar search={search} setSearch={setSearch} />)
  const input = screen.getByPlaceholderText('Search tasks')
  return { input, setSearch }
}

describe('SearchBar', () => {
  test('render the input with correct placeholder', () => {
    const { input } = setup()
    expect(input).toBeInTheDocument()
  })
  test('shows the values from props', () => {
    const { input } = setup('hello')
    expect(input).toHaveValue('hello')
  })
  test('calls setSearch when input changes', () => {
    const setSearch = vi.fn()
    const { input } = setup('hello', setSearch)
    fireEvent.change(input, { target: { value: 'new value' } })
    expect(setSearch).toHaveBeenCalledWith('new value')
  })
})
