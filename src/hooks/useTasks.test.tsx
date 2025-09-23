// Doing ⏳
import { renderHook, waitFor, act, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { useTasks } from './useTasks'

// Mock fetch for async API call
const mockTasks = [
  { id: 1, todo: 'Test Task 1', completed: false, userId: 1 },
  { id: 2, todo: 'Test Task 2', completed: true, userId: 2 },
]

global.fetch = vi.fn(
  () =>
    Promise.resolve({
      json: () => Promise.resolve({ todos: mockTasks }),
    })
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
) as any

describe('useTasks hook', () => {
  // Rendering: Does the hook initialize without crashing?
  it('should initialize with default values', () => {
    const { result } = renderHook(() => useTasks())
    expect(result.current.tasks).toEqual([])
    expect(result.current.filter).toBe('all')
    expect(result.current.search).toBe('')
  })
  // Async Operations: Should fetch tasks from API
  it('should fetch tasks from API on mount', async () => {
    const { result } = renderHook(() => useTasks())
    await waitFor(() => {
      expect(result.current.tasks).toEqual(mockTasks)
    })
  })
  // States: Should filter tasks by completed
  it('should filter tasks by completed', async () => {
    const { result } = renderHook(() => useTasks())
    await waitFor(() => {
      act(() => {
        result.current.setFilter('completed')
      })
      expect(result.current.tasks).toEqual([mockTasks[1]])
    })
  })
  // States: Should filter tasks by active
  it('should filter tasks by active', async () => {
    const { result } = renderHook(() => useTasks())
    await waitFor(() => {
      act(() => {
        result.current.setFilter('active')
      })
      expect(result.current.tasks).toEqual([mockTasks[0]])
    })
  })
  // States: Should filter tasks by search
  it('should filter tasks by search query', async () => {
    const { result } = renderHook(() => useTasks())
    await waitFor(() => {
      act(() => {
        result.current.setSearch('Task 2')
      })
      expect(result.current.tasks).toEqual([mockTasks[1]])
    })
  })
  // User Interaction: Should add a new task
  it('should add a new task', async () => {
    const { result } = renderHook(() => useTasks())
    await waitFor(() => {
      act(() => {
        result.current.addTask('New Task')
      })
      expect(result.current.tasks[0].todo).toBe('New Task')
      expect(result.current.tasks.length).toBe(mockTasks.length + 1)
    })
  })
  // User Interaction: Should update a task
  it('should update a task', async () => {
    const { result } = renderHook(() => useTasks())
    await waitFor(() => {
      act(() => {
        result.current.updateTask(1, 'Updated Task 1')
      })
      expect(result.current.tasks.find((t) => t.id === 1)?.todo).toBe(
        'Updated Task 1'
      )
    })
  })
  // User Interaction: Should toggle a task's completed state
  it('should toggle a task', async () => {
    const { result } = renderHook(() => useTasks())
    await waitFor(() => {
      act(() => {
        result.current.toggleTask(1)
      })
      expect(result.current.tasks.find((t) => t.id === 1)?.completed).toBe(true)
    })
  })
  // User Interaction: Should delete a task
  it('should delete a task', async () => {
    const { result } = renderHook(() => useTasks())
    await waitFor(() => {
      act(() => {
        result.current.deleteTask(1)
      })
      expect(result.current.tasks.find((t) => t.id === 1)).toBeUndefined()
    })
  })
  // Edge Case: Should handle empty state after deleting all tasks
  it('should handle empty state', async () => {
    const { result } = renderHook(() => useTasks())
    await waitFor(() => {
      act(() => {
        result.current.deleteTask(1)
        result.current.deleteTask(2)
      })

      expect(result.current.tasks).toHaveLength(0)
    })
  })
  // Error Handling: Should handle fetch error gracefully
  it('should handle fetch error', async () => {
    // Save the original fetch
    const originalFetch = global.fetch
    global.fetch = vi.fn().mockRejectedValueOnce(new Error('API Error'))
    const { result } = renderHook(() => useTasks())
    await waitFor(() => {
      expect(result.current.tasks).toEqual([])
    })
    // Restore the original fetch
    global.fetch = originalFetch
  })
})
