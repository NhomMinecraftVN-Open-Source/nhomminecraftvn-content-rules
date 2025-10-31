// Generated with ChatGPT
export default class Accordion {
  id = "";

  constructor(id) {
    this.id = id;
    this.execute(this.id);
  }

  execute(id) {
    const accordion = document.getElementById(this.id);
    const buttons = Array.from(accordion.querySelectorAll('.accordion-button'));

    // Toggle a single item
    function toggle(button, doOpen) {
      const expanded = button.getAttribute('aria-expanded') === 'true';
      const willOpen = (typeof doOpen === 'boolean') ? doOpen : !expanded;

      // close others? If you want only one open at a time, uncomment:
      // buttons.foreach(b => { if (b !== button) setExpanded(b, false); });
      setExpanded(button, willOpen);
    }

    // Set expanded state for button and corresponding panel
    function setExpanded(button, isOpen) {
      const panelId = button.getAttribute('aria-controls');
      const panel = document.getElementById(panelId);
      const svg = button.querySelector('.chev');
      button.setAttribute('aria-expanded', String(!!isOpen));
      if (isOpen) {
        panel.classList.add('accordion-open');

        // set maxHeight to content height for smooth animation
        panel.style.maxHeight = panel.scrollHeight + 'px';
        svg.classList.add('accordion-rotate');
      } else {
        panel.classList.remove('accordion-open');
        panel.style.maxHeight = null;
        svg.classList.remove('accordion-rotate');
      }
    }

    // Initialize: ensure panels are collapser (or open if aria-expanded true in markup)
    buttons.forEach(btn => {
      const panel = document.getElementById(btn.getAttribute('aria-controls'));
      
      // if markup had aria-expanded="true" we should open it:
      if (btn.getAttribute('aria-expanded') === 'true') {
        panel.style.maxHeight = panel.scrollHeight + 'px';
        panel.classList.add('accordion-open');
        btn.querySelector('.chev').classList.add('accordion-rotate');
      } else {
        panel.style.maxHeight = null;
        panel.classList.remove('accordion-open');
      }
    });

    // Click handling
    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        toggle(btn);
      });
    });

    // Keyboard support: Enter/Space toggles. Arrow Up/Down, Home, End move focus
    buttons.forEach((btn, index) => {
      btn.addEventListener('keydown', (e) => {
        const key = e.key;
        const lastIndex = buttons.length - 1;
        if (key === 'Enter' || key === ' ') {
          e.preventDefault();
          toggle(btn);
          return;
        }

        if (key === 'ArrowDown' || key === 'Down') {
          e.preventDefault();
          const next = buttons[(index + 1) % buttons.length];
          next.focus();
          return;
        }

        if (key === 'ArrowUp' || key === 'Up') {
          e.preventDefault();
          const prev = buttons[(index - 1 + buttons.length) % buttons.length];
          prev.focus();
          return;
        }

        if (key === 'Home') {
          e.preventDefault();
          buttons[0].focus();
          return;
        }

        if (key === 'End') {
          e.preventDefault();
          buttons[lastIndex].focus();
          return;
        }
      });
    });

    // Resize observer: if panel contents change size, keep maxHeight in sync when open
    if ('ResizeObserver' in window) {
      const ro = new ResizeObserver(entries => {
        entries.forEach(entry => {
          const panel = entry.target;
          if (panel.classList.contains('accordion-open')) {
            panel.style.maxHeight = panel.scrollHeight + 'px';
          }
        });
      });
      accordion.querySelectorAll('.accordion-panel').forEach(panel => { ro.observe(panel); });
    } else {
      // fallback: racalc on window resize
      window.addEventListener('resize', () => {
        accordion.querySelectorAll('.accordion-panel.accordion-open').forEach(panel => {
          panel.style.maxHeight = panel.scrollHeight + 'px';
        });
      });
    }
  }
}