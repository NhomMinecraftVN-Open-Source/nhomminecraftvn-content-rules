export default class HashRouter {
  constructor({ routes = [], notFound = null, mode = 'auto' } = {}) {
    this.routes = [];
    this.beforeHooks = [];
    this.afterHooks = [];

    // Determine routing mode
    if (mode === 'auto') {
      this.mode = !!(window.history && history.pushState) ? 'history' : 'hash';
    } else {
      this.mode = mode;
    }

    if (Array.isArray(routes)) {
      routes.forEach(r => this.add(r.path, r.handler));
    }
    this.notFound = notFound || ((context) => {
      document.getElementById('main').innerHTML = `<h2>Page not found.</h2>`;
    });
    this.onChange = this.onChange.bind(this);
  }

  add(path, handler) {
    const { regex, keys } = this.compilePath(path);
    this.routes.push({ path, regex, keys, handler });
    return this;
  }

  beforeEach(fn) {
    this.beforeHooks.push(fn);
  }

  afterEach(fn) {
    this.afterHooks.push(fn);
  }

  start() {
    if (this.mode === 'hash') {
      window.addEventListener('hashchange', this.onChange);
    } else {
      window.addEventListener('popstate', this.onChange);
      document.addEventListener('click', (e) => {
        const a = e.target.closest('a[data-link]');
        if (a && a.getAttribute('href').startsWith('/')) {
          e.preventDefault();
          this.navigate(a.getAttribute('href'));
        }
      });
    }
    this.onChange()
  }

  stop() {
    if (this.mode === 'hash') {
      window.removeEventListener('hashchange', this.onChange);
    } else {
      window.removeEventListener('popstate', this.onChange);
    }
  }

  navigate(path) {
    if (this.mode === 'hash') {
      if (!path.startsWith('#')) { 
        path = '#' + path;
      }
      location.hash = path;
    } else {
      history.pushState({}, '', path);
      this.onChange();
    }
  }

  getLocation() {
    if (this.mode === 'hash') {
      const raw = location.hash.slice(1) || '/';
      const [pathname, qs] = raw.split('?');
      return { pathname: pathname || '/', qs: qs || '' };
    } else {
      const pathname = location.pathname || '/';
      const qs = location.search.slice(1);
      return { pathname, qs };
    }
  }

  parseQuery(qs) {
    const params = { };
    if (!qs) {
      return params;
    }
    for (const pair of qs.split('&')) {
      if (!pair) {
        continue;
      }
      const [k, v = ''] = pair.split('=');
      params[decodeURIComponent(k)] = decodeURIComponent(v);
    }
    return params;
  }

  compilePath(path) {
    const keys = [];
    const pattern = path
      .replace(/\/+/g, '/')
      .replace(/\/$/g, path === '/' ? '/' : '')
      .replace(/([.+?^=!:${}()[\]|/\\])/g, '\\$1')
      .replace(/\\:([A-Za-z0-9_]+)/g, (_, key) => {
        keys.push(key);
        return '([^/]+)';  
      })
      .replace(/\\\*/g, '(.*)');
    const regex = new RegExp('^' + pattern + '/?$');
    return { regex, keys };
  }

  matchRoutes(pathname) {
    for (const r of this.routes) {
      const m = pathname.match(r.regex);
      if (m) {
        const params = {};
        r.keys.forEach((k, i) => {
          params[k] = decodeURIComponent(m[i + 1]);
        });

        // If wildcard present, capture last group
        if (r.path.includes('*') && m[m.length - 1]) {
          params['wildcard'] = decodeURIComponent(m[m.length - 1]);
        }
        return { route: r, params };
      }
    }
    return null;
  }

  async onChange() {
    const { pathname, qs } = this.getLocation();
    const query = this.parseQuery(qs);
    const match = this.matchRoutes(pathname);
    const context = { 
      path: pathname,
      query,
      params: match ? match.params : {},
      navigate(p) { this.navigate(p) }
    };
    for (const hook of this.beforeHooks) {
      let proceed = false;
      await hook(context, () => { proceed = true });
      if (!proceed) {
        return;
      }
    }
    if (match) {
      await match.route.handler(context);
    } else {
      await this.notFound(context);
    }
    this.afterHooks.forEach(h => h(context));
    this.updateActiveLinks(pathname);
  }

  updateActiveLinks(pathname) {
    document.querySelectorAll('a[data-link]').forEach(a => {
      const href = a.getAttribute('href');
      console.log(JSON.stringify(href))
      console.log(JSON.stringify(pathname))
      if (href === pathname) {
        a.classList.add('activeLink');
      } else {
        a.classList.remove('activeLink');
      }
    });
  }
}