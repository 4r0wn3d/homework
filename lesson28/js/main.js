"use strict";
const TODO_KEYS = {
	ID: "id",
	TEXT: "description",
	IS_COMPLETED: "isCompleted",
};

let todoList = [];

// Дз 28

const form = document.querySelector(".form");
const input = document.querySelector(".input");
const todos = document.querySelector(".todos");

const createTodoElement = (text) => {
	const todo = document.createElement("li");
	todo.classList.add("todo");
	todo.innerHTML = `<div class="todo-text">${text}</div>
          <div class="todo-actions">
            <button class="button-complete button">&#10004;</button>
            <button class="button-delete button">&#10006;</button>
          </div>`;
	todos.insertAdjacentElement("beforeEnd", todo);
};
const handleCreateTodo = (list, text) => {
	createTodoElement(text);
	addTask(list, text);
};

// Конец дз 28

const todoNotFound = (id) => {
	console.error(`Task with id ${id} not found`);
};

const getNewTodoId = (list) =>
	list.reduce((maxId, task) => Math.max(maxId, task[TODO_KEYS.ID]), 0) + 1;

const addTask = (list, task) => {
	const newTask = {
		[TODO_KEYS.ID]: getNewTodoId(list),
		[TODO_KEYS.TEXT]: task,
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
	const taskIndex = list.findIndex((element) => element[TODO_KEYS.ID] == id);
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

handleCreateTodo(todoList, "Задача 2");
