import Storage from "../storage/index.js"

export default class BetterWebsite {
  /*=== Sidebar event ===*/  
	static showSidebar(toggleId, sidebarId, useBlur) {
		const toggle = document.getElementById(toggleId);
	  const sidebar = document.getElementById(sidebarId);
    const header = document.querySelector('.header__container');
	  if (toggle && sidebar) {
      let isUseBlur = useBlur;
      let isBlur = 0;

      if (isUseBlur === true) {
        header.classList.remove('unblur');
        header.classList.add('blur');
      } else {
        header.classList.add('unblur')
        header.classList.remove('blur');
      }

	    toggle.onclick = () => {
        if (useBlur === true) {
          isBlur++;
          if (isBlur >= 2) {
            isBlur = 0;
          }

          if (isBlur === 1) {
            header.classList.remove('blur')
            header.classList.add('unblur');
          } else {
            header.classList.remove('unblur')
            header.classList.add('blur');
          }

          // reset when reload page
          window.onload = () => {
            isBlur = 0;
          }
        } else {
          header.classList.add('unblur');
        }
        

        sidebar.classList.toggle('hide-sidebar');
	    }

	  }
	}

	static headerLogoClickEvent() {
    const header = document.querySelector('.header__container');
    const logo = document.querySelector('.header__logo');
    const sidebar = document.getElementById('sidebar');
    
    logo.onclick = () => {
      location.href = '#';
      header.classList.remove('unblur')
      header.classList.add('blur');
      sidebar.classList.add('hide-sidebar');
   	}
	}

  static linkActive() {
    const header = document.querySelector('.header__container');
    const sidebar = document.getElementById('sidebar');
    const sidebarLink = document.querySelectorAll('.sidebar__list a');

    function linkColor() {
      sidebarLink.forEach((link) => {
         header.classList.remove('unblur');
         sidebar.classList.add('hide-sidebar');
      });
    }
   
    sidebarLink.forEach((link) => {
      link.addEventListener('click', linkColor);
    });
  }

  /*=== Dark theme ===*/
	static makeDarkTheme(moon_icon, sun_icon) {
	  const body = document.querySelector('body');
    const themeButton = document.getElementById("theme-button");
    const darkTheme = "dark-theme";
    const iconTheme = sun_icon;
    const selectedTheme = Storage.query("selected-theme");
    const selectedIcon = Storage.query("selected-icon");
 
    function getCurrentTheme() {
      return document.body.classList.contains(darkTheme) ? "dark" : "light";
    }

    function getCurrentIcon() {
      return themeButton.classList.contains(iconTheme) ? moon_icon : sun_icon;
    }

    if (selectedTheme) {
      document.body.classList[selectedTheme === "dark" ? "add" : "remove"](darkTheme);
      themeButton.classList[selectedIcon === moon_icon ? "add" : "remove"](iconTheme);
    }

    themeButton.onclick = () => {
      document.body.classList.toggle(darkTheme);
      themeButton.classList.toggle(iconTheme);
      Storage.insert("selected-theme", getCurrentTheme());
      Storage.insert("selected-icon", getCurrentIcon());
    }
	}

  /*=== Modal ===*/
  static showModal(openButton, modalContent) {
    const openBtn = document.getElementById(openButton);
    const modalContainer = document.getElementById(modalContent);
    if (openBtn && modalContainer) {
      openBtn.onclick = () => {
        modalContainer.classList.add('show-modal');
      }
    }  
  }

  static prepareCloseModal(closeButton) {
    const overlay = document.getElementById('modal-container');
    const closeBtn = document.querySelectorAll(closeButton);

    function closeModal(c) {
      const modalContainer = document.getElementById('modal-container');
      modalContainer.classList.remove('show-modal');
    }

    closeBtn.forEach(c => c.addEventListener('click', closeModal));
  }
}
