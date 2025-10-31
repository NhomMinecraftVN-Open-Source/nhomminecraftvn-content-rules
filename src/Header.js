export default function Header() {
	var brand = "Insert Logo here"

	return (`
		<header class="header" id="header">
			<div class="header__container">
				<button class="header__toggle" id="header-toggle">
					<i class="ri-menu-line"></i>
				</button>
				<a hrer="#" class="header__logo">
					<i class="ri-image-line"></i>
					<span>${brand}</span>
				</a>
			</div>
		</header>
	`);
}
