import React, { ReactNode, useState } from 'react'

export interface ITodo {
  id: string
  task?: string
  checked?: boolean
}

export interface ITask {
  task: string
}

interface TodoContextProviderProps {
  children: ReactNode
}

export type TodoContextType = {
  todos: ITodo[]
  createNewTask: (data: ITask) => void
  taskDelete: (task: string) => void
  taskChecked: (state: ITodo) => void
}

export const TodoContext = React.createContext({} as TodoContextType)

export function TodoProvider({ children }: TodoContextProviderProps) {
  const [todos, setTodos] = useState<ITodo[]>([])

  function createNewTask(data: ITask) {
    const newTask: ITodo = {
      id: String(new Date().getTime()),
      task: data.task,
      checked: false,
    }

    setTodos([newTask, ...todos])
  }

  function taskDelete(taskId: any) {
    const deleteTask = todos.filter((state) => {
      return state.id !== taskId
    })

    setTodos(deleteTask)
  }

  function taskChecked(state: ITodo) {
    const findTask = todos.map((task: ITodo) => {
      if (task.id === state.id) task.checked = !task.checked
      return task
    })

    setTodos(findTask)
  }

  return (
    <TodoContext.Provider
      value={{ todos, createNewTask, taskDelete, taskChecked }}
    >
      {children}
    </TodoContext.Provider>
  )
}
