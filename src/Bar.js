import SidebarFrame from "./util/sidebarFrame.js"

export default function Navbar() {
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

		${Sidebar(1)}
	`);
}

function Sidebar(isOpen) {
	var rootSb = new SidebarFrame({key: "root", title: "Main", links: {
 		1: {name: "Home", link: "#", icon: "ri-home-line"}, 
  }});

	return (`
		<nav class="sidebar ${isOpen == 0 ? "hide-sidebar" : ""}" id="sidebar">
			<div class="sidebar__container">
				<div class="sidebar__content">
					<div>
						<h3 class="sidebar__title">${rootSb.displayTitle("root")}</h3>
						<div class="sidebar__list">
							${rootSb.displayLink("root")}
						</div>
					</div>
				</div>
			</div>
		</nav>
	`);
}
