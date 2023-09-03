import { Elysia } from 'elysia';
import * as elements from "typed-html";

export function createApp() {
  return new Elysia<"", { store: {}; request: { html(v: string): Response, sanitize: typeof elements }; schema: {}; error: {}; meta: { schema: {}; defs: {}; exposed: {}; }; }>()
}
