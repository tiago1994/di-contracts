import React, { useEffect, useState } from 'react';
import { TodoList } from "../../domain/usecases"

type Props = {
  todoList: TodoList
}

const TodosPresentation: React.FC<Props> = ({ todoList }: Props) => {
  const [state, setState] = useState({
    todos: [] as TodoList.Model[],
    error: '',
    reload: false
  })

  useEffect(() => {
    todoList.list()
      .then(todos => setState({ ...state, todos }))
  }, [state, todoList])

  return (
    <div>
      TESTE
      {state.todos.map((todo, key) => (
        <div key={key}>
          <b>{todo.id} / {todo.userId}</b> - {todo.title} ({todo.completed})
        </div>
      ))}
    </div>
  )
}

export default TodosPresentation