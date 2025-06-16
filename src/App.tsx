import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import FilterBar from './components/FilterBar'
import SearchBar from './components/SearchBar'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import { useTasks } from './hooks/useTasks'

const App: React.FC = () => {
  const {
    tasks,
    addTask,
    updateTask,
    toggleTask,
    deleteTask,
    setFilter,
    filter,
    setSearch,
    search,
  } = useTasks()

  return (
    <div className='container mt-5' style={{ maxWidth: 600, marginBottom: 30 }}>
      <h2 className='mb-4 text-center'>Task Manager</h2>
      <TaskForm onAdd={addTask} />
      <SearchBar search={search} setSearch={setSearch} />
      <FilterBar filter={filter} setFilter={setFilter} />
      <TaskList
        tasks={tasks}
        onToggle={toggleTask}
        onDelete={deleteTask}
        onUpdate={updateTask}
      />
    </div>
  )
}

export default App
