import * as elements from 'typed-html';

function TodoForm() {
  return (
    <form
      hx-post="/v1/todos"
      class="flex flex-row space-x-3"
      hx-swap="beforebegin"
    >
      <div class="bg-white rounded-lg shadow-lg w-72 overflow-hidden mb-4">
        <div class="flex items-center justify-between p-4">
          <input
            type="text"
            placeholder="Add a new todo..."
            hx-target="closest form"
            hx-swap="outerHTML"
            name="content"
            class="w-full bg-gray-100 rounded-lg p-2 text-lg font-semibold text-gray-700 focus:outline-none focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          />

          <button class="ml-4 text-white bg-blue-500 hover:bg-blue-600 rounded-lg p-2 flex items-center justify-center">
            Submit
          </button>
        </div>
      </div>
    </form>
  )
}

export default TodoForm;