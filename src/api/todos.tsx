import { Elysia, t } from "elysia";
import * as elements from "typed-html";
import { Todo } from "../types/todo";
import { html } from "@elysiajs/html";
import TodoItem from "../components/todo-item";
import TodoList from "../components/todo-list";

const db: Todo[] = [
  { id: 1, content: 'Buy milk', completed: false },
  { id: 2, content: 'Buy eggs', completed: false },
];

let lastIndex = db.length;

const todos = new Elysia()
  .use(html())
  // @ts-expect-error https://github.com/elysiajs/elysia/issues/94
  .get('/todos', ({ html }) => html(<TodoList todos={db} />))
  .post('/todos/toggle/:id', ({ params }) => {
    const todo = db.find(todo => todo.id === params.id);
    console.log(todo)
    if (todo) {
      todo.completed = !todo.completed;

      return <TodoItem {...todo} />
    }
  },
    {
      params: t.Object({
        id: t.Numeric()
      })
    })
  .delete(
    '/todos/:id',
    ({ params }) => {
      const todoIndex = db.findIndex(todo => todo.id === params.id);
      if (todoIndex > -1) {
        db.splice(todoIndex, 1);
      }
    },
    {
      params: t.Object({
        id: t.Numeric()
      })
    }
  )
  .post('/todos', ({ body }) => {
    if (body.content.length === 0) {
      throw new Error('Content cannot be empty');
    }

    const newTodo = {
      id: ++lastIndex,
      content: body.content,
      completed: false,
    };
    db.push(newTodo);
    return <TodoItem {...newTodo} />
  }, {
    body: t.Object({
      content: t.String()
    })
  })

export default todos;