"use strict";

const users = [
	{ name: "Alex", age: 24, isAdmin: false },
	{ name: "Bob", age: 13, isAdmin: false },
	{ name: "John", age: 31, isAdmin: true },
	{ name: "Jane", age: 20, isAdmin: false },
];

users.push(
	{ name: "Ann", age: 19, isAdmin: false },
	{ name: "Jack", age: 43, isAdmin: true },
);
console.log(users);

const getUserAverageAge = (array) => {
	let totalAge = 0;
	for (let i = 0; i < array.length; i++) {
		totalAge += array[i].age;
	}
	const averageAge = totalAge / array.length;
	return averageAge;
};
console.log(getUserAverageAge(users));

const getAllAdmins = (array) => {
	const admins = [];
	for (let i = 0; i < array.length; i++) {
		if (array[i].isAdmin === true) {
			admins.push(array[i]);
		}
	}
	return admins;
};

console.log(getAllAdmins(users));

const first = (array, n) => {
	const firstArray = [];
	if (n == undefined) {
		firstArray.push(array[0]);
	} else {
		for (let i = 0; i < n; i++) {
			firstArray.push(array[i]);
		}
	}

	return firstArray;
};

console.log(first(users));
