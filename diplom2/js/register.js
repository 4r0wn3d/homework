import { setRegisterDataToLocalStorage } from "./storage.js";

export const initRegisterHandler = (registerData) => {
	const heroSection = document.querySelector(".hero");
	const registerOffer = document.querySelector(".register-discount");
	const news = document.querySelector(".news-subscription");

	if (registerData.isRegistered === false) {
		const registerForm = document.querySelector(".modal-register__form");
		const closeButton = document.querySelector(
			".register-discount__close-button",
		);
		closeButton.addEventListener("click", () => {
			registerOffer.classList.add("register-discount--closed");
			heroSection.classList.replace(
				"hero--register-open",
				"hero--register-closed",
			);
			setTimeout(() => {
				registerOffer.classList.add("register-discount--hidden");
			}, 200);
		});

		registerForm.addEventListener("submit", (event) => {
			registerOffer.classList.add("register-discount--closed");
			heroSection.classList.replace(
				"hero--register-open",
				"hero--register-closed",
			);
			registerData.isRegistered = true;
			setRegisterDataToLocalStorage(registerData);

			setTimeout(() => {
				registerOffer.classList.add("register-discount--hidden");
			}, 200);
		});
	} else {
		registerOffer.remove();
		heroSection.classList.add("hero--registered");
		heroSection.classList.replace(
			"hero--register-open",
			"hero--register-closed",
		);
	}

	if (registerData.isSubscribed === false) {
		const subscriptionForm = news.querySelector(".news-subscription__form");

		subscriptionForm.addEventListener("submit", (event) => {
			event.preventDefault();
			news.classList.add("news-subscription--closed");
			registerData.isSubscribed = true;
			setRegisterDataToLocalStorage(registerData);
			setTimeout(() => {
				news.classList.add("hidden");
			}, 200);
		});
	} else {
		news.remove();
	}
	const loader = document.querySelector(".loader");
	const pageBody = document.querySelector(".page__body");
	loader.classList.add("loader--hidden");
	setTimeout(() => {
		pageBody.classList.remove("page__body--no-scroll");
		loader.remove();
	}, 200);
};
