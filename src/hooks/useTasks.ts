import { useCallback, useEffect, useMemo, useState } from 'react'
import type { Task } from '../types'

export type FilterType = 'all' | 'completed' | 'active'

export function useTasks() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [filter, setFilter] = useState<FilterType>('all')
  const [search, setSearch] = useState('')

  useEffect(() => {
    fetch('https://dummyjson.com/todos?limit=10')
      .then((res) => res.json())
      .then((data) => setTasks(data.todos))
      .catch(() => setTasks([]))
  }, [])

  const filteredTasks = useMemo(() => {
    let filtered = tasks
    if (filter !== 'all') {
      filtered = filtered.filter((task) =>
        filter === 'completed' ? task.completed : !task.completed
      )
    }
    if (search.trim()) {
      filtered = filtered.filter((task) =>
        task.todo.toLowerCase().includes(search.toLowerCase())
      )
    }
    return filtered
  }, [tasks, filter, search])

  const addTask = useCallback((todo: string) => {
    setTasks((ts) => [
      {
        id: Date.now(),
        todo,
        completed: false,
        userId: 0,
      },
      ...ts,
    ])
  }, [])

  const updateTask = useCallback((id: number, newTodo: string) => {
    setTasks((ts) =>
      ts.map((task) => (task.id === id ? { ...task, todo: newTodo } : task))
    )
  }, [])

  const toggleTask = useCallback((id: number) => {
    setTasks((ts) =>
      ts.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    )
  }, [])

  const deleteTask = useCallback((id: number) => {
    setTasks((ts) => ts.filter((task) => task.id !== id))
  }, [])

  return {
    tasks: filteredTasks,
    addTask,
    updateTask,
    toggleTask,
    deleteTask,
    setFilter,
    filter,
    setSearch,
    search,
  }
}
