//@ts-check
import SidebarFrame from "./util/sidebarFrame.js"


export default function Sidebar() {
  const rootSb = new SidebarFrame({key: "root", title: "Main", links: {
 		1: {name: "Home", link: "#", icon: "ri-home-line"}, 
  }});
  rootSb.displayTitle()

	return (`
		<nav class="sidebar hide-sidebar" id="sidebar">
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