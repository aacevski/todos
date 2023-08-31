import * as elements from 'typed-html';

import { Todo } from "../types/todo";
import TodoItem from './todo-item';
import TodoForm from './todo-form';

function TodoList({ todos }: { todos: Todo[] }) {
  return (
    <div class="flex flex-col space-y-3">
      {todos.map(todo => <TodoItem {...todo} />)}
      <TodoForm />
    </div>
  )
}

export default TodoList;