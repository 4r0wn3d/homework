export const newsSubscription = `
				<div class="news-subscription__background"></div>
				<div class="container news-subscription__container">
					<h2 class="news-subscription__title">
						БУДЬТЕ В КУРСЕ ВСЕХ ПОСЛЕДНИХ НОВОСТЕЙ
					</h2>
					<form class="news-subscription__form">
						<label class="news-subscription__input" for="email">
							<svg class="news-subscription__input-icon">
								<use href="./img/icons/sprite.svg#mail"></use>
							</svg>
							<input
								class="news-subscription__email"
								required
								type="email"
								name="email"
								id="email"
								placeholder="Ваша почта"
							/>
						</label>
						<button
							class="news-subscription__input news-subscription__button"
						>
							Подписаться на рассылку
						</button>
					</form>
				</div>
		`;

export const registerDiscount = `
				<div class="container register-discount__container">
					<p class="register-discount__text">
						Зарегистрируйтесь и получите скидку 20% на первую покупку.
					</p>
					<button class="register-discount__register-button"
						>Зарегистрироваться сейчас</
					>
					<button
						class="register-discount__close-button"
						title="Закрыть предложение"
						aria-label="Закрыть предложение"
					>
						<svg width="20" height="20">
							<use
								class="register-discount__close-icon"
								href="./img/icons/sprite.svg#discount-cross"
							></use>
						</svg>
					</button>
				</div>
			`;
