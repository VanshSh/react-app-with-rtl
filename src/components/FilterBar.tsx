import React from 'react'
import type { FilterType } from '../hooks/useTasks'

interface Props {
  filter: FilterType
  setFilter: (f: FilterType) => void
}

const FilterBar: React.FC<Props> = React.memo(({ filter, setFilter }) => (
  <div className='btn-group mb-3'>
    <button
      className={`btn btn-outline-primary${filter === 'all' ? ' active' : ''}`}
      onClick={() => setFilter('all')}
    >
      All
    </button>
    <button
      className={`btn btn-outline-primary${
        filter === 'active' ? ' active' : ''
      }`}
      onClick={() => setFilter('active')}
    >
      Active
    </button>
    <button
      className={`btn btn-outline-primary${
        filter === 'completed' ? ' active' : ''
      }`}
      onClick={() => setFilter('completed')}
    >
      Completed
    </button>
  </div>
))
export default FilterBar
