function calculateFinalPrice(basePrice, discount, taxes) {
	const discountPrice = basePrice - discount;
	return discountPrice + discountPrice * taxes;
}
// const basePrice = prompt("Введите цену");
// const discount = prompt("Введите скидку");
// const taxes = prompt("Введите налоговую ставку");
// alert(calculateFinalPrice(basePrice, discount, taxes));

function checkAccess(name, password) {
	if (name === "admin" && password === "123456") {
		return "Доступ разрешен";
	} else {
		return "Доступ запрещен";
	}
}

// const name = prompt("Введите имя пользователя");
// const password = prompt("Введите пароль");
// alert(checkAccess(name, password));

const getTimeOfDay = (time) => {
	switch (true) {
		case time >= 0 && time <= 5:
			return "Ночь";
			break;
		case time >= 6 && time <= 11:
			return "Утро";
			break;
		case time >= 12 && time <= 17:
			return "День";
			break;
		case time >= 18 && time <= 23:
			return "Вечер";
			break;
		default:
			return "Некорректное время";
			break;
	}
};

// const time = prompt("Введите время суток");
// alert(getTimeOfDay(time));

const findFirstEven = (start, end) => {
	for (start; start <= end; start++) {
		if (start % 2 === 0) return start;
	}
	return "Четных чисел нет";
};

// const start = +prompt("Введите начало");
// const end = +prompt("Введите конец");
// alert(findFirstEven(start, end));
