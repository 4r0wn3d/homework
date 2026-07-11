export const TODO_KEYS = {
	ID: "id",
	TEXT: "description",
	IS_COMPLETED: "isCompleted",
};

export const todoNotFound = (id) => {
	console.error(`Task with id ${id} not found`);
};
