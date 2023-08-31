import * as elements from 'typed-html';

import { Todo } from "../types/todo";

function TodoItem({ id, content, completed }: Todo) {
  return (
    <div class="bg-white rounded-lg shadow-lg w-72 overflow-hidden" hx-id="parent-div">
      <div class="flex items-center justify-between p-4">
        <div class="flex items-center">
          <input
            hx-post={`/v1/todos/toggle/${id}`}
            hx-target="#parent-div"
            hx-swap="outerHTML"
            type="checkbox"
            id="todo-item"
            class="form-checkbox h-5 w-5 text-blue-600 rounded focus:ring focus:ring-opacity-50"
          />
          <label for="todo-item" class="ml-2 text-lg font-semibold text-gray-700">{content}</label>
        </div>

        <button
          hx-delete={`/v1/todos/${id}`}
          hx-target="closest div"
          hx-swap="outerHTML"
          class="text-white bg-red-500 hover:bg-red-600 rounded-full h-8 w-8 flex items-center justify-center"
        >
          X
        </button>
      </div>
    </div>
  );
}

{/* <p>{content}</p>
      <input type="checkbox"
        checked={completed}
        hx-post={`/v1/todos/toggle/${id}`}
        hx-target="closest div"
        hx-swap="outerHTML"
      />
      <button
        class="text-red-500"
        hx-delete={`/v1/todos/${id}`}
        hx-target="closest div"
        hx-swap="outerHTML"
      >
        X
      </button> */}

export default TodoItem;