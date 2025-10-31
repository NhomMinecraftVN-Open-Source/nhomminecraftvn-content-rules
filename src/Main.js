import ModalData from "../assets/lib/better-website/modalData.js";
import BetterWebsite from "../assets/lib/better-website/script.js";

export function Home() {
  return hero() /*+ stat() + faq()*/;
}

export function AboutNhomMinecraftVN() {
	return (`
		<style>
			.nmv {
        margin-top: -.5rem;
        padding: 1rem;
      }
		</style>
		<div class="nmv">
      
    </div>
	`)
}

export function actionBar() {
	let editable = false;
	editable == false ? editable = `class="linkDisable" id="open-modal" title="Editing for this page has been disabled to prevent vandalism."` : editable = ''

  return (`
    <style>
      .nmvHeader {
        height: 1rem;
        display: flex;
        justify-content: initial;
        align-items: center;
      }

      .navMenu {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        width: 100%;
				background-color: var(--container-color);
        padding: 1rem 1rem;
				box-shadow: 0 -5px 10px 0 #00000006
      }

      .navLink {
        color: var(--text-color);
      }

			.linkDisable {
				color: var(--text-color-light);
			}
				
			.navLinkR {
				color: var(--text-color);
				margin-left: 5.8rem;
			}
    </style>
    <nav class="nmvHeader">
      <div class="navMenu">
        <ul class="navList">
          <a href="contents.CommunityGroupsRule" ${editable}> <i class="ri-pencil-line"></i> <span>Edit this page</span> </a> 
					<a href="contents.CommunityGroupsRule" class="navLinkR">  <span>Select language</span> <i class="ri-translate-2"></i> </a> 
        </ul>
      </div>
    </nav>
  `);
}

function hero() {
  return (`
    <section class="home section" id="home">
			<div class="home__container container">
				<div class="home__data">
					<h1 class="home__title">Content Rules</h1>
					<p class="home__description">
						What do you want to learn?
					</p>
					<a href="#contents?value=CommunityGroupsRule" class="button" data-link><i class="ri-scales-3-fill"></i> Community/Groups Rule</a>
					<a href="#contents?value=ProcessViolationRule" class="button" data-link><i class="ri-scales-3-fill"></i> Process Violation Rule</a>
					<a href="#contents?value=SafetyForChildrenTeenRule" class="button" data-link><i class="ri-scales-3-fill"></i> Safety for Children/Teen Rule</a>
				</div>
			</div>
		</section>
  `);
}

function stat() {
  return (`
    <section class="stats section">
			<div class="stats__container container grid">
				<h1 class="stats__title">Rules Statistics</h1>
				<article class="stats__card">
					<i class="ri-pen-nib-line"></i>
					<h3 class="stats__title">0</h3>
					<p class="stats__description">section rule has written</p>
				</article>
			</div>
		</section>
  `);
}

function faq() {
  return (`
    <section class="faq section">
			<h2 class="section__title">FAQ</h2>
			<div class="faq__container container">
				<div class="accordion" id="faqAccordion">
					<section class="accordion-item">
						<div class="accordion-header">
							<h3 id="acc1-heading">
								<button class="accordion-button" aria-expanded="false" aria-controls="acc1-panel" id="acc1-button" type="button">
									<span>
										How it works?
										<div class="accordion-sub"></div>
									</span>
									<svg class="chev" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
										<path fill="currentColor" d="M9 18l6-6-6-6"></path>
									</svg>
								</button>
							</h3>
						</div>
						<div id="acc1-panel" class="accordion-panel" role="region" aria-labelledby="acc1-button">
							Content 1
						</div>
					</section>
					
					<section class="accordion-item">
						<div class="accordion-header">
							<h3 id="acc1-heading">
								<button class="accordion-button" aria-expanded="false" aria-controls="acc1-panel" id="acc1-button" type="button">
									<span>
										Content 2
										<div class="accordion-sub"></div>
									</span>
									<svg class="chev" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
										<path fill="currentColor" d="M9 18l6-6-6-6"></path>
									</svg>
								</button>
							</h3>
						</div>
						<div id="acc1-panel" class="accordion-panel" role="region" aria-labelledby="acc1-button">
							Content 2
						</div>
					</section>
				</div>
			</div>
		</section>
  `);
}