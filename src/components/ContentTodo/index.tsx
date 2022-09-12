import {
  ContentFormButtonDelete,
  ContentFormCheckbox,
  ContentFormEmpty,
  ContentFormStyle,
  ContentListStatus,
  ContentListStatusStrong,
} from './styles'
import * as Checkbox from '@radix-ui/react-checkbox'
import { Check, Trash } from 'phosphor-react'
import Clipboard from '../../assets/Clipboard.svg'
import { useContext } from 'react'
import { TodoContext, ITodo } from '../../context/TodoContext'

export function ContentTodo() {
  const { todos, taskDelete, taskChecked } = useContext(TodoContext)

  const doneTaskCount = todos.filter((state: ITodo) => {
    return state.checked === true
  }).length

  return (
    <>
      <ContentListStatus>
        <ContentListStatusStrong variant="created">
          Tarefas criadas <span>{todos ? todos.length : 0}</span>
        </ContentListStatusStrong>

        <ContentListStatusStrong variant="completed">
          Concluídas{' '}
          <span>
            {todos.length ? `${doneTaskCount} de ${todos.length}` : '0'}
          </span>
        </ContentListStatusStrong>
      </ContentListStatus>

      {!todos.length ? (
        <ContentFormEmpty>
          <img src={Clipboard} alt="" />
          <strong>Você ainda não tem tarefas cadastradas</strong>
          <span>Crie tarefas e organize seus itens a fazer</span>
        </ContentFormEmpty>
      ) : (
        todos.map((state) => (
          <ContentFormStyle
            key={state.id}
            variant={state.checked ? 'checked' : 'unchecked'}
          >
            <ContentFormCheckbox onClick={() => taskChecked(state)}>
              <Checkbox.Indicator>
                <Check size={12} />
              </Checkbox.Indicator>
            </ContentFormCheckbox>

            <span>{state.task}</span>

            <ContentFormButtonDelete onClick={() => taskDelete(state.id)}>
              <Trash size={24} />
            </ContentFormButtonDelete>
          </ContentFormStyle>
        ))
      )}
    </>
  )
}
