import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, test, vi } from 'vitest'
import SearchBar from './SearchBar'

const setup = (search = '', setSearch = vi.fn()) => {
  render(<SearchBar search={search} setSearch={setSearch} />)
  const input = screen.getByPlaceholderText('Search tasks')
  return { input, setSearch }
}

// --> .only and .skip can be used with describe as well <--
describe('SearchBar', () => {
  test('render the input with correct placeholder', () => {
    const { input } = setup()
    expect(input).toBeInTheDocument()
  })

  test('calls setSearch when input changes', () => {
    const setSearch = vi.fn()
    const { input } = setup('hello', setSearch)
    fireEvent.change(input, { target: { value: 'new value' } })
  })
  test.only('shows the values from props', () => {
    const { input } = setup('hello')
    expect(input).toHaveValue('hello')
  })

  // --> use test.only to focus on this test <--
  // test.only('shows the values from props', () => {
  //   const { input } = setup('hello')
  //   expect(input).toHaveValue('hello')
  // })
  // --> use test.skip to skip this test <--
  // test.skip('shows the values from props', () => {
  //   const { input } = setup('hello')
  //   expect(input).toHaveValue('hello')
  // })
})
