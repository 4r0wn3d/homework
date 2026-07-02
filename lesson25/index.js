// Задача 4.
// Создайте функцию callAllMethods, которая принимает объект и вызывает все его методы.

// Пример использования:
// const myObject = {
//     method1() {
//         console.log('Метод 1 вызван');
//     },
//     method2() {
//         console.log('Метод 2 вызван');
//     },
//     property: 'Это не метод'
// };
// callAllMethods(myObject);

const me = {
	name: "Илья",
	age: 18,
	height: 175,
};
console.log(me.name, me.age, me.height);

const isEmpty = (obj) => {
	for (const i in obj) {
		return false;
	}
	return true;
};
const notMe = {};

console.log(isEmpty(me), isEmpty(notMe));

const task = {
	title: "homework",
	description: "specifically task 3",
	isCompleted: false,
};
const cloneAndModify = (obj, modification) => {
	const newObject = { ...obj, ...modification };
	return newObject;
};
const modif = {
	isCompleted: true,
	isModified: true,
};
const newTask = cloneAndModify(task, modif);
console.log(newTask);

const methodObject = {
	method1: () => {
		alert("Метод 1");
	},
	method2() {
		console.log("Метод 2");
	},
	description: "There's some methods here",
};

const callAllMethods = (obj) => {
	for (const key in obj) {
		if (typeof obj[key] === "function") {
			obj[key]();
		}
	}
};
