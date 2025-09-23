// DONE ✅
import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import TaskList from './TaskList'

// Dummy tasks for testing
const tasks = [
  { id: 1, todo: 'Task One', completed: false, userId: 101 },
  { id: 2, todo: 'Task Two', completed: true, userId: 102 },
]

describe('TaskList', () => {
  // Rendering: Does the component render without crashing?
  it('renders without crashing', () => {
    render(
      <TaskList
        tasks={tasks}
        onToggle={vi.fn()}
        onDelete={vi.fn()}
        onUpdate={vi.fn()}
      />
    )
    // screen.debug() // Uncomment to inspect DOM
    expect(screen.getByRole('list')).toBeInTheDocument()
  })

  //   // Props: Are props displayed/used correctly?
  it('renders all tasks passed as props', () => {
    render(
      <TaskList
        tasks={tasks}
        onToggle={vi.fn()}
        onDelete={vi.fn()}
        onUpdate={vi.fn()}
      />
    )
    expect(screen.getByText('Task One')).toBeInTheDocument()
    expect(screen.getByText('Task Two')).toBeInTheDocument()
  })

  //   // Edge Case: Handles empty task list
  it('renders no items when tasks is empty', () => {
    render(
      <TaskList
        tasks={[]}
        onToggle={vi.fn()}
        onDelete={vi.fn()}
        onUpdate={vi.fn()}
      />
    )
    // Should not find any list items
    expect(screen.queryAllByRole('listitem')).toHaveLength(0)
  })

  it('calls onDelete when a task is deleted', async () => {
    const onDelete = vi.fn()
    render(
      <TaskList
        tasks={tasks}
        onToggle={vi.fn()}
        onDelete={onDelete}
        onUpdate={vi.fn()}
      />
    )
    // Find the delete button (assuming it has role 'button' and text 'Delete')
    const deleteButtons = screen.getAllByRole('button', { name: /delete/i })
    fireEvent.click(deleteButtons[1])
    expect(onDelete).toHaveBeenCalledWith(tasks[1].id)
  })

  //  Accessibility: Is the component accessible (labels, roles, etc.)?
  it('renders list with correct role', () => {
    render(
      <TaskList
        tasks={tasks}
        onToggle={vi.fn()}
        onDelete={vi.fn()}
        onUpdate={vi.fn()}
      />
    )
    expect(screen.getByRole('list')).toBeInTheDocument()
  })

  //  Async Operations: Test with waitFor/findBy
  it('renders tasks asynchronously', async () => {
    render(
      <TaskList
        tasks={tasks}
        onToggle={vi.fn()}
        onDelete={vi.fn()}
        onUpdate={vi.fn()}
      />
    )
    // Use findBy for async rendering
    const item = await screen.findByText('Task One')
    expect(item).toBeInTheDocument()
  })

  //  User Interaction: Are callbacks called with correct values?
  it('calls onToggle when a task is toggled', async () => {
    const onToggle = vi.fn()
    render(
      <TaskList
        tasks={tasks}
        onToggle={onToggle}
        onDelete={vi.fn()}
        onUpdate={vi.fn()}
      />
    )
    // Find the toggle button (assuming it has role 'button' and text 'Toggle')
    const toggleButtons = screen.getAllByRole('checkbox')
    fireEvent.click(toggleButtons[0])
    expect(onToggle).toHaveBeenCalledWith(tasks[0].id)
  })

  // User Interaction for item update
  it('should update task text', () => {
    const onUpdate = vi.fn()
    render(
      <TaskList
        tasks={tasks}
        onToggle={vi.fn()}
        onDelete={vi.fn()}
        onUpdate={onUpdate}
      />
    )

    // Step 1: Double-click to enable editing
    const taskText = screen.getByText('Task One')
    fireEvent.doubleClick(taskText)

    // Step 2: Now the input should appear
    const editInput = screen.getByDisplayValue('Task One')
    fireEvent.change(editInput, { target: { value: 'Updated Task One' } })

    // Step 3: Trigger blur
    // fireEvent.blur(editInput)

    // Step 3 Alternative: Trigger Enter key
    fireEvent.keyDown(editInput, { key: 'Enter', code: 'Enter' })

    // Step 4: Assert update was called
    expect(onUpdate).toHaveBeenCalledWith(tasks[0].id, 'Updated Task One')
  })
})
