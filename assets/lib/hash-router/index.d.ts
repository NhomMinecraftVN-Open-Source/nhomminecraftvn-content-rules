/**
 * Check type after use `new HashRouter({mode: ""})` if "hash" or "history".
 * 
 * ### Notes
 * - In **hash mode** -> works on any static hosting, no server config needed.
 * - In **history mode** -> you must configure your server to serve `index.html` for **unknown routes** (so that refreshing `/path/params` doesn't 404).
 */
type HashRouterType = "hash" | "history";

interface HashRouterRange {
  /** Get a each value. */
  value: string;
}

interface HashRouterContext {
  path: string;
  query: HashRouterRange;
  params: HashRouterRange;
}

interface HashRouterEach {
  path: string;
  params: object;
  query: object;
}

interface HashRouterData {
  path: string;
  handler: (ctx: HashRouterContext) => void;
}

export default class HashRouter {
  constructor({ routes, notFound, mode }: {
    mode: HashRouterType;
    routes: HashRouterData[];
    notFound: (ctx: HashRouterContext) => void;
  });

  /**
   * Add a route
   * 
   * **Param:**
   * @param path Path name
   * @param handler Handler function
   */
  private add(path: string, handler: (ctx: any) => any): HashRouter;

  /**
   * Register a before hook: receives (ctx, next)
   * 
   * **Param:**
   * @param fn Event function
   */
  public beforeEach(fn: (ctx: HashRouterEach, next: () => Promise<void>) => any): void;

  /**
   * Register a after hook: receives (ctx)
   * 
   * **Param:**
   * @param fn Event function
   */
  public afterEach(fn: (ctx: HashRouterEach) => any): void;

  /**
   * Start listening to hash changes
   */
  public start(): void;

  /**
   * Stop listening to hash changes
   */
  public stop(): void;

  /**
   * Navigate this path
   * 
   * **Param:**
   * @param path 
   */
  private navigate(path: string): void;

  /** 
   * Internal: get location path (after '#') default '/'
   */
  private getLocation(): { raw: string; pathname: string; querystring: string; };

  /**
   * **Param:**
   * @param qs 
   */
  private parseQuery(qs: any): {};

  /**  
   * Internal: compile route path into regex and keys 
   * 
   * **Param:**
   * @param path Path
   */
  private compilePath(path: string): { regex: RegExp; key: any[]; };

  /**
   * Internal: match current pathname to route
   * 
   * **Param:**
   * @param pathname Pathname
   */
  private matchRoute(pathname: string): { route: any; params: {}; } | null;

  /** 
   * Internal: run middleward chain of before hooks
   * 
   * **Param:**
   * @param ctx
   * 
   * @deprecated do not use `runBefore`
   */
  private async runBefore(ctx: any): Promise<void>;

  /**
   * Handle the hash change event
   * 
   * **Returns:**
   * @returns Promise
   */
  private async onChange(): Promise<void>;

  /**
   * Update active links after clicked
   * 
   * **Param:**
   * @param pathname 
   */
  private updateActiveLinks(pathname: string): void;

  /**
   * Enchance anchor clicks to use `navigate()` (keeps hrefs working)
   * 
   * @deprecated do not use `closest()`
   */
  public closest(): (this: GlobalEventHandlers, e: MouseEvent) => void;
}