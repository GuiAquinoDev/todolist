import React from 'react'
import { ThemeProvider } from 'styled-components'
import { TodoProvider } from './context/TodoContext'
import { TodoList } from './pages'
import { GlobalStyles } from './styles/global'
import { defaultTheme } from './styles/themes/default'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <TodoProvider>
        <TodoList />
      </TodoProvider>
    </ThemeProvider>
  )
}

export default App
