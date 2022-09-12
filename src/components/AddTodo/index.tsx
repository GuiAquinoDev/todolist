import { PlusCircle } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { CreateFormContainer } from './styles'
import { zodResolver } from '@hookform/resolvers/zod'
import { TodoContext } from '../../context/TodoContext'
import * as zod from 'zod'
import { useContext } from 'react'

const newTaskFormValidationSchema = zod.object({
  task: zod.string().min(2, 'Informe a tarefa'),
})

// Validação do Input Controlado
type NewTaskType = zod.infer<typeof newTaskFormValidationSchema>

export function AddTodo() {
  const { createNewTask } = useContext(TodoContext)
  const { register, handleSubmit, reset } = useForm<NewTaskType>({
    resolver: zodResolver(newTaskFormValidationSchema),
  })

  function handleCreateNewTask(data: NewTaskType) {
    createNewTask(data)
    reset()
  }

  return (
    <CreateFormContainer onSubmit={handleSubmit(handleCreateNewTask)}>
      <input
        type="text"
        placeholder="Adicione uma nova tarefa"
        {...register('task')}
      />
      <button type="submit">
        Criar
        <PlusCircle size={16} />
      </button>
    </CreateFormContainer>
  )
}
