import React, { useCallback, useState } from 'react'
import type { Task } from '../../types'

interface Props {
  task: Task
  onToggle: (id: number) => void
  onDelete: (id: number) => void
  onUpdate: (id: number, todo: string) => void
}

const TaskItem: React.FC<Props> = React.memo(
  ({ task, onToggle, onDelete, onUpdate }) => {
    const [editing, setEditing] = useState(false)
    const [value, setValue] = useState(task.todo)

    const handleUpdate = useCallback(() => {
      if (value.trim()) {
        onUpdate(task.id, value.trim())
        setEditing(false)
      }
    }, [value, onUpdate, task.id])

    return (
      <li className='list-group-item d-flex align-items-center justify-content-between'>
        <div className='d-flex align-items-center'>
          <input
            type='checkbox'
            name='completed'
            checked={task.completed}
            onChange={() => onToggle(task.id)}
            className='form-check-input me-2'
          />
          {editing ? (
            <input
              className='form-control'
              value={value}
              onChange={(e) => setValue(e.target.value)}
              onBlur={handleUpdate}
              onKeyDown={(e) => e.key === 'Enter' && handleUpdate()}
              autoFocus
            />
          ) : (
            <span
              style={{
                textDecoration: task.completed ? 'line-through' : undefined,
                cursor: 'pointer',
              }}
              onDoubleClick={() => setEditing(true)}
            >
              {task.todo}
            </span>
          )}
        </div>
        <button
          className='btn btn-danger btn-sm'
          onClick={() => onDelete(task.id)}
        >
          Delete
        </button>
      </li>
    )
  }
)
export default TaskItem
