import React from 'react'

interface Props {
  search: string
  setSearch: (s: string) => void
}

const SearchBar: React.FC<Props> = React.memo(({ search, setSearch }) => (
  <input
    className='form-control mb-3'
    placeholder='Search tasks'
    value={search}
    onChange={(e) => setSearch(e.target.value)}
  />
))
export default SearchBar
