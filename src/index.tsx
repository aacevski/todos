import { Elysia } from 'elysia';
import todos from './api/todos';
import * as elements from 'typed-html';
import { html } from '@elysiajs/html';
import { createApp } from './elysia/elysia-app';

const BaseHtml = ({ children }: elements.Children) => `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Chad Stack</title>
    <script src="https://unpkg.com/htmx.org@1.9.5" integrity="sha384-xcuj3WpfgjlKF+FXhSQFQ0ZNr39ln+hwjN3npfM9VBnUskLolQAcN80McRIVOPuO" crossorigin="anonymous"></script>
    <script src="https://cdn.tailwindcss.com"></script>
  </head>
  ${children}
</html>
`

const app = createApp()
  .use(html())
  .get('/', ({ html }) => html(
    <BaseHtml>
      <body
        class="flex w-full h-scren justify-center items-center"
        hx-get="/v1/todos"
        hx-trigger="load"
        hx-swap="innerHTML"
      />
    </BaseHtml>
  ))
  .group('/v1', app => app.use(todos))
  .listen(3000);


console.log(`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`);

