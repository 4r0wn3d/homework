import { getTodosFromLocalStorage } from "./storage.js";
import { renderTodos, initTodoHandlers } from "./todo-dom.js";
import { editTaskById } from "./todo-service.js";

const todoList = getTodosFromLocalStorage() || [];

document.addEventListener("DOMContentLoaded", () => {
	renderTodos(todoList);
	initTodoHandlers(todoList);
});
