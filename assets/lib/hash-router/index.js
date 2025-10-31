export default class HashRouter {
	constructor({ routes = [], notFound = null, mode = 'hash' } = {}) {
		this.routes = [];
		this.beforeHooks = [];
		this.afterHooks = [];
		this.mode = mode;
		if (Array.isArray(routes)) {
			routes.forEach(r => this.add(r.path, r.handler));
		}
		this.notFound = notFound || ((ctx) => {
			document.getElementById('main').innerHTML = `<h2>Page not found.</h2>`;
		});
		this.onChange = this.onChange.bind(this);
	}

	// Add a route
	add(path, handler) {
		const { regex, keys } = this.compilePath(path);
		this.routes.push({ path, regex, keys, handler });
		return this;
	}

	// Register a before hook: receives (ctx, next)
	beforeEach(fn) {
		this.beforeHooks.push(fn);
	}

	// Register a after hook: receives (ctx)
	afterEach(fn) {
		this.afterHooks.push(fn);
	}

	// Start listening to hash changes
	start() {
		if (this.mode === 'hash') {
			window.addEventListener('hashchange', this.onChange);
		} else if (this.mode === 'history') {
			window.addEventListener('popstate', this.onChange);
			document.onclick = (e) => {
				const a = e.target.closest('a[data-link]');
				if (a && a.getAttribute('href').startsWith('/')) {
					e.preventDefault();
					this.naviagte(a.getAttribute('href'));
				}
			}
		}

		// handle initial route
		this.onChange();
	}

	stop() {
		if (this.mode === 'hash') {
			window.removeEventListener('hashchange', this.onChange);
		} else if (this.mode === 'history') {
			window.removeEventListener('popstate', this.onChange);
		}
	}

	naviagte(path) {
		if (this.mode === 'hash') {
			if (!path.startsWith('#')) {
				path = '#' + path;
			}
			location.hash = path;
		} else if (this.mode === 'history') {
			history.pushState({}, '', path);
			this.onChange();
		}
	}

	// Internal: get location path (after '#') default '/'
	getLocation() {
		if (this.mode === 'hash') {
			const raw = location.hash.slice(1) || '/';

			// split path and querystring
			const [pathname, qs] = raw.split('?');
			return { raw, pathname: pathname || '/', queryString: qs || '' };
		} else if (this.mode === 'history') {
			const pathname = location.pathname || '/';
			const qs = location.search.slice(1);
			return { pathname, qs };
		}
	}

	parseQuery(qs) {
		const params = {};
		if (!qs) {
			return params;
		}
		for (const pair of qs.split('&')) {
			if (!pair) {
				continue;
			}
			const [k, v = ''] = pair.split('=');
			try {
				params[decodeURIComponent(k)] = decodeURIComponent(v);
			} catch {
				params[k] = v;
			}
		}
		return params;
	}

	// Internal: compile route path into regex and keys
	compilePath(path) {
		// escape string and replace :param with capture groups
		const keys = [];
		const pattern = path
			.replace(/\/+/g, '/')                         // collapse slashes
			.replace(/\/$/g, path === '/' ? '/' : '')     // remove trailing slash except root
			.replace(/([.+*?=^!:${}()[\]|/\\])/g, '\\$1') // escape regex meta-chars
			.replace(/\\:([A-Za-z0-9_]+)/g, (_, key) => {
				keys.push(key);
				return '([^/]+)'; // named param
			})
			.replace(/\\\*/g, '.*');                      // wildcard: matches anything
		const regex = new RegExp('^' + pattern + '/?$');
		return { regex, keys };
	}

	// Internal: match current pathname to route
	matchRoute(pathname) {
		for (const r of this.routes) {
			const m = pathname.match(r.regex);
			if (m) {
				const params = {};
				r.keys.forEach((k, i) => {
					params[k] = decodeURIComponent(m[i + 1]);
				});
				return { route: r, params };
			}
		}
		return null;
	}

	// Internal: run middleward chain of before hooks
	async runBefore(ctx) {
		let idx = -1;
		const runner = async (i) => {
			if (i <= idx) {
				throw new Error('next() called multiple times');
			}
			idx = i;
			if (i === this.beforeHooks.length) {
				return;
			}
			const hook = this.beforeHooks[i];
			let called = false;
			await hook(ctx, () => { called = true; return runner(i + 1); });
			// if hook didn't call next() then chain stops here
		};
		await runner(0);
	}

	// Handle the hash change event
	async onChange() {
		const { pathname, queryString } = this.getLocation();
		const query = this.parseQuery(queryString);
		const match = this.matchRoute(pathname);
		const ctx = {
			path: pathname,
			query,
			params: match ? match.params : {},
			route: match ? match.route.path : null,
			navigate: (p) => this.naviagte(p),
		};
		for (const hook of this.beforeHooks) {
			let proceed = false;
			await hook(ctx, () => {
				proceed = true;
			});
			if (!proceed) {
				return;
			}
		}
		if (match) {
			await match.route.handler(ctx);
		} else {
			await this.notFound(ctx);
		}
		this.afterHooks.forEach(h => h(ctx));

		// try {
		// 	await this.runBefore(ctx);
		// } catch (except) {
		// 	console.error('Router before hook error:', except);
		// 	return;
		// }
		// if (match) {
		// 	try {
		// 		// call route handler (can be sync or return a Promise)
		// 		await match.route.handler(ctx);
		// 	} catch (except) {
		// 		console.error('Route handler error for', match.route.path, except);
		// 	}
		// } else {
		// 	try {
		// 		await this.notFound(ctx);
		// 	} catch (except) {
		// 		console.error('NotFound handler error', except);
		// 	}
		// }

		// after hooks
		// for (const a of this.afterHooks) {
		// 	try {
		// 		a(ctx);
		// 	} catch (except) {
		// 		console.error('afterEach hook error', except);
		// 	}
		// }

		// optional: update active link classes
		this.updateActiveLinks(pathname);
	}

	updateActiveLinks(pathname) {
		const links = document.querySelectorAll(['a[data-link]']);
		links.forEach(a => {
			const href = (a.getAttribute('href') || '').replace(/^#/, '') || '/';

			// you'd probably want a smarter check for paramized links;
			// here we just match exact pathname or prefix for convenience
			if (href === pathname || (href !== '/' && pathname.startsWith(href))) {
				a.classList.add('activeLink');
			} else {
				a.classList.remove('activeLink');
			}
		});
	}

	closest() {
		return document.onclick = (e) => {
			const a = e.target.closest('a[data-link]');
			if (!a) {
				return;
			}
		};
	}
}
