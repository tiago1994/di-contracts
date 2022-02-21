import './App.css';
import TodosPresentation from './presentation/pages/todolist';
import { makeRemoteTodos } from './main/factories/usecases/todos-factory';

function App() {
  return (
    <TodosPresentation
      todoList={makeRemoteTodos()}
    />
  );
}

export default App;
