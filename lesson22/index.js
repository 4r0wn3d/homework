const EVEN_NUMBER = +prompt("Введите число", 0);

if (isNaN(EVEN_NUMBER)) {
	alert("Ошибка, введите цифровое значение");
} else if (EVEN_NUMBER % 2 === 0) {
	alert("Число четное");
} else {
	alert("Число нечетное");
}

// const age = +prompt("Введите возраст");
// const discount = isNaN(age)
// 	? "ошибка, введено неверное значение"
// 	: age < 18
// 		? "10%"
// 		: age <= 65
// 			? "20%"
// 			: "30%";
// alert(`Ваша скидка: ${discount}`);
const age = +prompt("Введите возраст", 0);
let response;
switch (true) {
	case age < 18:
		response = "Ваша скидка: 10%";
		break;
	case age > 18 && age <= 65:
		response = "Ваша скидка: 20%";
		break;
	case age > 65:
		response = "Ваша скидка: 30%";
		break;
	default:
		response = "Ошибка, введено неверное значение";
		break;
}
alert(response);

const username = prompt(
	'Введите имя пользователя (допустимые значение: "admin" или "user")',
);
const password = prompt('Введите пароль ("123456")');

if ((username === "admin" || username === "user") && password === "123456") {
	alert("Доступ разрешен");
} else {
	alert("Доступ запрещен");
}

const weight = +prompt("Введите вес посылки (в килограммах):", 0);
const type = prompt(
	'Выберите тип доставки (введите "стандарт", "экспресс" или "премиум" в нижнем регистре):',
);

const correctWeight = weight > 0 && !isNaN(weight) ? true : false;
const correctType =
	type === "стандарт" || type === "экспресс" || type === "премиум"
		? true
		: false;

if (correctType && correctWeight) {
	const basePrice = weight < 1 ? 5 : weight >= 1 && weight <= 5 ? 10 : 15;
	const k = type === "стандарт" ? 1 : type === "экспресс" ? 1.5 : 2;
	const totalPrice = basePrice * k;
	alert(`Итоговая стоимость доставки: ${totalPrice}$`);
} else {
	alert("Некорректный вес посылки или неверный тип доставки");
}
