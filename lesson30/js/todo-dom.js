import { TODO_KEYS } from "./constants.js";
import { setTodosToLocalStorage } from "./storage.js";
import { addTask, completeTaskById, deleteTaskById } from "./todo-service.js";

const formElement = document.querySelector(".form");
const inputElement = document.querySelector(".input");
const todosElement = document.querySelector(".todos");

const getTodoTemplate = (text) => {
	return `<div class="todo-text">${text}</div>
          <div class="todo-actions">
            <button class="button-complete button">&#10004;</button>
            <button class="button-delete button">&#10006;</button>
          </div>`;
};

const createTodoElement = (task) => {
	const todo = document.createElement("li");
	todo.classList.add("todo");
	todo.innerHTML = getTodoTemplate(task[TODO_KEYS.TEXT]);
	return todo;
};

export const renderTodos = (todos) => {
	todosElement.innerHTML = "";
	todos.forEach((todo) => {
		const todoElement = createTodoElement(todo);
		if (todo[TODO_KEYS.IS_COMPLETED]) {
			todoElement.classList.add("completed");
		}
		todoElement.dataset.id = todo[TODO_KEYS.ID];
		todosElement.append(todoElement);
	});
};

const handleCreateTodo = (list, text) => {
	const todo = addTask(list, text);
	const todoElement = createTodoElement(todo);
	todoElement.dataset.id = todo[TODO_KEYS.ID];
	setTodosToLocalStorage(list);
	todosElement.append(todoElement);
};

export const initTodoHandlers = (todos) => {
	formElement.addEventListener("submit", (event) => {
		event.preventDefault();
		const text = inputElement.value.trim();
		if (!text) return;
		handleCreateTodo(todos, text);
		inputElement.value = "";
	});

	todosElement.addEventListener("click", ({ target }) => {
		const todo = target.closest(".todo");
		if (!todo) return;

		if (target.matches(".button-delete")) {
			deleteTaskById(todos, Number(todo.dataset.id));
			setTodosToLocalStorage(todos);
			todo.remove();
		}
		if (target.matches(".button-complete")) {
			completeTaskById(todos, Number(todo.dataset.id));
			setTodosToLocalStorage(todos);
			todo.classList.toggle("completed");
		}
	});
};
