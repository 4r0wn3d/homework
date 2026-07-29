export const initSearchHandler = () => {
	const searchButton = document.querySelector(".header__search-button");
	const searchWrapper = document.querySelector(".header__search-wrapper");
	const searchForm = document.querySelector(".header__search-form");

	searchForm.addEventListener("submit", (event) => {
		event.preventDefault();
	});

	if (window.innerWidth <= 1092) {
		searchWrapper.classList.add("header__search-wrapper--closed");
	}

	window.addEventListener("resize", () => {
		if (window.innerWidth > 1092) {
			searchWrapper.classList.remove("header__search-wrapper--closed");
			searchWrapper.classList.remove("header__search-wrapper--open");
		} else {
			searchWrapper.classList.add("header__search-wrapper--closed");
			searchButton.classList.remove("header__search-button--open");
		}
	});

	searchButton.addEventListener("click", () => {
		searchButton.classList.toggle("header__search-button--open");

		if (searchWrapper.classList.contains("header__search-wrapper--closed")) {
			searchWrapper.classList.replace(
				"header__search-wrapper--closed",
				"header__search-wrapper--open",
			);
		} else if (
			searchWrapper.classList.contains("header__search-wrapper--open")
		) {
			searchWrapper.classList.replace(
				"header__search-wrapper--open",
				"header__search-wrapper--closed",
			);
		}
	});

	document.addEventListener("click", ({ target }) => {
		if (
			!target.closest(".header__search-button") &&
			!target.closest(".header__search-wrapper")
		) {
			searchWrapper.classList.replace(
				"header__search-wrapper--open",
				"header__search-wrapper--closed",
			);
			searchButton.classList.remove("header__search-button--open");
		}
	});
	document.addEventListener("scroll", () => {
		searchWrapper.classList.replace(
			"header__search-wrapper--open",
			"header__search-wrapper--closed",
		);
		searchButton.classList.remove("header__search-button--open");
	});
};
