import { Header } from '../components/Header'
import { AddTodo } from '../components/AddTodo'
import { TodoListContainer } from './styles'
import { ContentTodo } from '../components/ContentTodo'

export function TodoList() {
  return (
    <>
      <Header />
      <AddTodo />

      <TodoListContainer>
        <ContentTodo />
      </TodoListContainer>
    </>
  )
}
