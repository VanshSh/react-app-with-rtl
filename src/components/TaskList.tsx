import React from 'react'
import type { Task } from '../types'
import TaskItem from './TaskItem'

interface Props {
  tasks: Task[]
  onToggle: (id: number) => void
  onDelete: (id: number) => void
  onUpdate: (id: number, todo: string) => void
}

const TaskList: React.FC<Props> = React.memo(
  ({ tasks, onToggle, onDelete, onUpdate }) => (
    <ul className='list-group mb-30 '>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggle={onToggle}
          onDelete={onDelete}
          onUpdate={onUpdate}
        />
      ))}
    </ul>
  )
)
export default TaskList
