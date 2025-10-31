//@ts-check
import Layout from "./src/Layout.js";
import ModalData from "./assets/lib/better-website/modalData.js";
import BetterWebsite from "./assets/lib/better-website/script.js";
import { footerYear } from "./src/util/websiteData.js";
import Accordion from "./assets/lib/better-website/accordion.js";

document.title = "Home page"
const main = document.querySelector("main");

function App() {
	const navLogo = document.getElementById("nav-logo");
	const modalRoot = document.getElementById("modal-content-root");
	//footerYear(2020, "NhomMinecraftVN");
}

function BetterWesbiteFrame() {
	BetterWebsite.showSidebar("header-toggle", "sidebar", false);
	BetterWebsite.makeDarkTheme("ri-moon-line", "ri-sun-line");
	BetterWebsite.headerLogoClickEvent();
	BetterWebsite.linkActive();
	// BetterWebsite.showXButton('header-toggle', '.ri-menu-line', 'ri-close-large-line', 'sidebar');
	BetterWebsite.showModal('open-modal', 'modal-container');
	BetterWebsite.prepareCloseModal('.close-modal');
}

App();
BetterWesbiteFrame();
