import { TODO_KEYS, todoNotFound } from "./constants.js";

const getNewTodoId = (list) =>
	list.reduce((maxId, task) => Math.max(maxId, task[TODO_KEYS.ID]), 0) + 1;

export const addTask = (list, task) => {
	const newTask = {
		[TODO_KEYS.ID]: getNewTodoId(list),
		[TODO_KEYS.TEXT]: task.trim(),
		[TODO_KEYS.IS_COMPLETED]: false,
	};
	list.push(newTask);

	return newTask;
};
export const completeTaskById = (list, id) => {
	const task = list.find((todo) => todo[TODO_KEYS.ID] === id);
	if (task === undefined) {
		todoNotFound(id);
		return null;
	}
	task[TODO_KEYS.IS_COMPLETED] = !task[TODO_KEYS.IS_COMPLETED];

	return task;
};

export const deleteTaskById = (list, id) => {
	const taskIndex = list.findIndex((element) => element[TODO_KEYS.ID] === id);
	if (taskIndex > -1) {
		list.splice(taskIndex, 1);
	} else {
		todoNotFound(id);
		return null;
	}

	return list;
};

export const editTaskById = (list, id, textChange) => {
	const task = list.find((todo) => todo[TODO_KEYS.ID] === id);
	if (task === undefined) {
		todoNotFound(id);
		return null;
	}
	task[TODO_KEYS.TEXT] = textChange;

	return task;
};
