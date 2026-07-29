export const initShopHandler = () => {
	const shopButton = document.querySelector(".menu__shop");
	const shopDetails = document.querySelector(".menu__shop-details");

	shopButton.addEventListener("click", () => {
		if (shopDetails.classList.contains("menu__shop-details--closed")) {
			shopDetails.classList.replace(
				"menu__shop-details--closed",
				"menu__shop-details--open",
			);
			shopButton.classList.add("menu__shop--open");
		} else {
			shopDetails.classList.replace(
				"menu__shop-details--open",
				"menu__shop-details--closed",
			);
			shopButton.classList.remove("menu__shop--open");
		}

		console.log("testes");

		document.addEventListener("click", ({ target }) => {
			if (!target.closest(".menu__shop-item")) {
				shopDetails.classList.replace(
					"menu__shop-details--open",
					"menu__shop-details--closed",
				);
				shopButton.classList.remove("menu__shop--open");
			}
		});
		document.addEventListener("scroll", () => {
			shopDetails.classList.replace(
				"menu__shop-details--open",
				"menu__shop-details--closed",
			);
			shopButton.classList.remove("menu__shop--open");
		});
	});
};
