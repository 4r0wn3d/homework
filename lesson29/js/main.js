"use strict";
const TODO_KEYS = {
	ID: "id",
	TEXT: "description",
	IS_COMPLETED: "isCompleted",
};

const todoList = [];

const formElement = document.querySelector(".form");
const inputElement = document.querySelector(".input");
const todosElement = document.querySelector(".todos");

const todoNotFound = (id) => {
	console.error(`Task with id ${id} not found`);
};

const getNewTodoId = (list) =>
	list.reduce((maxId, task) => Math.max(maxId, task[TODO_KEYS.ID]), 0) + 1;

const addTask = (list, task) => {
	const newTask = {
		[TODO_KEYS.ID]: getNewTodoId(list),
		[TODO_KEYS.TEXT]: task.trim(),
		[TODO_KEYS.IS_COMPLETED]: false,
	};
	list.push(newTask);

	return newTask;
};
const completeTaskById = (list, id) => {
	const task = list.find((todo) => todo[TODO_KEYS.ID] === id);
	if (task === undefined) {
		todoNotFound(id);
		return null;
	}
	task[TODO_KEYS.IS_COMPLETED] = !task[TODO_KEYS.IS_COMPLETED];

	return task;
};

const deleteTaskById = (list, id) => {
	const taskIndex = list.findIndex((element) => element[TODO_KEYS.ID] === id);
	if (taskIndex > -1) {
		list.splice(taskIndex, 1);
	} else {
		todoNotFound(id);
		return null;
	}

	return list;
};

const editTaskById = (list, id, textChange) => {
	const task = list.find((todo) => todo[TODO_KEYS.ID] === id);
	if (task === undefined) {
		todoNotFound(id);
		return null;
	}
	task[TODO_KEYS.TEXT] = textChange;

	return task;
};
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
const handleCreateTodo = (list, text) => {
	const todo = addTask(list, text);
	const todoElement = createTodoElement(todo);
	todoElement.dataset.id = todo[TODO_KEYS.ID];
	todosElement.append(todoElement);
};

formElement.addEventListener("submit", (event) => {
	event.preventDefault();
	const text = inputElement.value.trim();
	if (!text) return;
	handleCreateTodo(todoList, text);
	inputElement.value = "";
});

// Начало дз 29

todosElement.addEventListener("click", ({ target }) => {
	const todo = target.closest(".todo");
	if (!todo) return;

	if (target.matches(".button-delete")) {
		deleteTaskById(todoList, Number(todo.dataset.id));
		todo.remove();
	}
	if (target.matches(".button-complete")) {
		completeTaskById(todoList, Number(todo.dataset.id));
		todo.classList.toggle("completed");
	}
});
