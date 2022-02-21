import React from 'react'
import TodosPresentation from '../../../../presentation/pages/todolist'
import { makeRemoteTodos } from '../../usecases/todos-factory'

export const makeTodos: React.FC = () => {
  return (
    <TodosPresentation
      todoList={makeRemoteTodos()}
    />
  )
}