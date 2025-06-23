import React, { useCallback, useState } from 'react'

interface Props {
  onAdd: (todo: string) => void
}

const TaskForm: React.FC<Props> = React.memo(({ onAdd }) => {
  const [input, setInput] = useState('')
  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault()
      if (input.trim()) {
        onAdd(input.trim())
        setInput('')
      }
    },
    [input, onAdd]
  )
  return (
    <form className='mb-3 d-flex' onSubmit={handleSubmit}>
      <input
        className='form-control me-2'
        placeholder='Add new task'
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button className='btn btn-primary' type='submit'>
        Add
      </button>
    </form>
  )
})
export default TaskForm
