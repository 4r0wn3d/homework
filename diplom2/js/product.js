export const initProductButtonHandler = () => {
	const initProductList = (section) => {
		let visible = window.innerWidth > 1080 ? 4 : 2;
		let step = window.innerWidth > 1080 ? 4 : 2;
		window.addEventListener("resize", () => {
			if (window.innerWidth > 1080) {
				visible = visible < 4 ? 4 : visible === 6 ? 4 : visible;
			} else {
				visible = visible > 4 ? visible : 2;
			}
			step = window.innerWidth > 1080 ? 4 : 2;
			updateList();
		});

		const showAllButton = section.querySelector(".product__button");
		const productList = section.querySelectorAll(".product__item");

		const updateList = () => {
			productList.forEach((product, index) => {
				if (index >= visible) {
					product.classList.add("hidden");
				} else {
					product.classList.remove("hidden");
				}
			});
			if (visible >= productList.length) {
				showAllButton.classList.add("hidden");
			} else {
				showAllButton.classList.remove("hidden");
			}
		};

		updateList();

		showAllButton.addEventListener("click", () => {
			visible += step;
			updateList(productList, showAllButton);
			console.log(visible);
		});
	};
	document.querySelectorAll(".product").forEach(initProductList);
};
