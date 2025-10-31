import HashRouter from "./assets/lib/hash-router/index.js";
import { contentRules, SafetyForChildrenTeenRules } from "./src/ContentRules.js";
import { Home } from "./src/Main.js";

const main = document.getElementById('main');

// router
const router = new HashRouter({
  mode: 'hash',
  routes: [
    { path: '', handler(ctx) { main.innerHTML = Home() } },
    { path: 'contents', handler(ctx) {
      if (ctx.query.value === "CommunityGroupsRule") {
        main.innerHTML = contentRules();
      } else if (ctx.query.value === "SafetyForChildrenTeenRule") {
        main.innerHTML = SafetyForChildrenTeenRules();
      } else {
        main.innerHTML = `<h3>Content value error</h3> <div class="code__box"><code>can't get query value: reading '${JSON.stringify(ctx)}'</code></div>`
      }
    } }
  ],
  notFound(ctx) {
    main.innerHTML = `<h2>Page not found.</h2>`
  }
});

router.beforeEach(async (ctx, next) => {
  await next();
});

router.afterEach(ctx => {
  //console.log(ctx);
});

// Start the router
router.start();