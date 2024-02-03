import 'cookie';
import { bold, red, yellow, dim, blue } from 'kleur/colors';
import './chunks/astro_WtunJ4P3.mjs';
import 'clsx';
import 'cssesc';
import { compile } from 'path-to-regexp';

const dateTimeFormat = new Intl.DateTimeFormat([], {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false
});
const levels = {
  debug: 20,
  info: 30,
  warn: 40,
  error: 50,
  silent: 90
};
function log(opts, level, label, message, newLine = true) {
  const logLevel = opts.level;
  const dest = opts.dest;
  const event = {
    label,
    level,
    message,
    newLine
  };
  if (!isLogLevelEnabled(logLevel, level)) {
    return;
  }
  dest.write(event);
}
function isLogLevelEnabled(configuredLogLevel, level) {
  return levels[configuredLogLevel] <= levels[level];
}
function info(opts, label, message, newLine = true) {
  return log(opts, "info", label, message, newLine);
}
function warn(opts, label, message, newLine = true) {
  return log(opts, "warn", label, message, newLine);
}
function error(opts, label, message, newLine = true) {
  return log(opts, "error", label, message, newLine);
}
function debug(...args) {
  if ("_astroGlobalDebug" in globalThis) {
    globalThis._astroGlobalDebug(...args);
  }
}
function getEventPrefix({ level, label }) {
  const timestamp = `${dateTimeFormat.format(/* @__PURE__ */ new Date())}`;
  const prefix = [];
  if (level === "error" || level === "warn") {
    prefix.push(bold(timestamp));
    prefix.push(`[${level.toUpperCase()}]`);
  } else {
    prefix.push(timestamp);
  }
  if (label) {
    prefix.push(`[${label}]`);
  }
  if (level === "error") {
    return red(prefix.join(" "));
  }
  if (level === "warn") {
    return yellow(prefix.join(" "));
  }
  if (prefix.length === 1) {
    return dim(prefix[0]);
  }
  return dim(prefix[0]) + " " + blue(prefix.splice(1).join(" "));
}
if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}
class Logger {
  options;
  constructor(options) {
    this.options = options;
  }
  info(label, message, newLine = true) {
    info(this.options, label, message, newLine);
  }
  warn(label, message, newLine = true) {
    warn(this.options, label, message, newLine);
  }
  error(label, message, newLine = true) {
    error(this.options, label, message, newLine);
  }
  debug(label, ...messages) {
    debug(label, ...messages);
  }
  level() {
    return this.options.level;
  }
  forkIntegrationLogger(label) {
    return new AstroIntegrationLogger(this.options, label);
  }
}
class AstroIntegrationLogger {
  options;
  label;
  constructor(logging, label) {
    this.options = logging;
    this.label = label;
  }
  /**
   * Creates a new logger instance with a new label, but the same log options.
   */
  fork(label) {
    return new AstroIntegrationLogger(this.options, label);
  }
  info(message) {
    info(this.options, this.label, message);
  }
  warn(message) {
    warn(this.options, this.label, message);
  }
  error(message) {
    error(this.options, this.label, message);
  }
  debug(message) {
    debug(this.label, message);
  }
}

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return toPath;
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/vercel/serverless","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.jwWWtWpa.css"}],"routeData":{"route":"/posts/crítica-al-sabor-de-los-completos-mojados-de-talca-una-experiencia-gustativa-desfavorable","isIndex":false,"type":"page","pattern":"^\\/posts\\/crítica-al-sabor-de-los-completos-mojados-de-talca-una-experiencia-gustativa-desfavorable\\/?$","segments":[[{"content":"posts","dynamic":false,"spread":false}],[{"content":"crítica-al-sabor-de-los-completos-mojados-de-talca-una-experiencia-gustativa-desfavorable","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/posts/crítica-al-sabor-de-los-completos-mojados-de-talca-una-experiencia-gustativa-desfavorable.md","pathname":"/posts/crítica-al-sabor-de-los-completos-mojados-de-talca-una-experiencia-gustativa-desfavorable","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.jwWWtWpa.css"}],"routeData":{"route":"/posts/el-café-combustible-esencial-para-la-vida-cotidiana","isIndex":false,"type":"page","pattern":"^\\/posts\\/el-café-combustible-esencial-para-la-vida-cotidiana\\/?$","segments":[[{"content":"posts","dynamic":false,"spread":false}],[{"content":"el-café-combustible-esencial-para-la-vida-cotidiana","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/posts/el-café-combustible-esencial-para-la-vida-cotidiana.md","pathname":"/posts/el-café-combustible-esencial-para-la-vida-cotidiana","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.jwWWtWpa.css"}],"routeData":{"route":"/posts/explorando-los-potenciales-terapéuticos-el-uso-medicinal-del-cannabis-sativa","isIndex":false,"type":"page","pattern":"^\\/posts\\/explorando-los-potenciales-terapéuticos-el-uso-medicinal-del-cannabis-sativa\\/?$","segments":[[{"content":"posts","dynamic":false,"spread":false}],[{"content":"explorando-los-potenciales-terapéuticos-el-uso-medicinal-del-cannabis-sativa","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/posts/explorando-los-potenciales-terapéuticos-el-uso-medicinal-del-cannabis-sativa.md","pathname":"/posts/explorando-los-potenciales-terapéuticos-el-uso-medicinal-del-cannabis-sativa","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.jwWWtWpa.css"}],"routeData":{"route":"/posts/inteligencia-artificial-en-medicina","isIndex":false,"type":"page","pattern":"^\\/posts\\/inteligencia-artificial-en-medicina\\/?$","segments":[[{"content":"posts","dynamic":false,"spread":false}],[{"content":"inteligencia-artificial-en-medicina","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/posts/inteligencia-artificial-en-medicina.md","pathname":"/posts/inteligencia-artificial-en-medicina","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.jwWWtWpa.css"}],"routeData":{"route":"/posts/inteligencia-artificial-y-ética","isIndex":false,"type":"page","pattern":"^\\/posts\\/inteligencia-artificial-y-ética\\/?$","segments":[[{"content":"posts","dynamic":false,"spread":false}],[{"content":"inteligencia-artificial-y-ética","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/posts/inteligencia-artificial-y-ética.md","pathname":"/posts/inteligencia-artificial-y-ética","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.jwWWtWpa.css"}],"routeData":{"route":"/posts/iron-man-el-mejor-vengador","isIndex":false,"type":"page","pattern":"^\\/posts\\/iron-man-el-mejor-vengador\\/?$","segments":[[{"content":"posts","dynamic":false,"spread":false}],[{"content":"iron-man-el-mejor-vengador","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/posts/iron-man-el-mejor-vengador.md","pathname":"/posts/iron-man-el-mejor-vengador","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.jwWWtWpa.css"}],"routeData":{"route":"/posts/telemedicina-y-atención-remota","isIndex":false,"type":"page","pattern":"^\\/posts\\/telemedicina-y-atención-remota\\/?$","segments":[[{"content":"posts","dynamic":false,"spread":false}],[{"content":"telemedicina-y-atención-remota","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/posts/telemedicina-y-atención-remota.md","pathname":"/posts/telemedicina-y-atención-remota","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.jwWWtWpa.css"}],"routeData":{"route":"/search","isIndex":true,"type":"page","pattern":"^\\/search\\/?$","segments":[[{"content":"search","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/search/index.astro","pathname":"/search","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.l-JsOPk0.js"}],"styles":[{"type":"external","src":"/_astro/index.jwWWtWpa.css"},{"type":"inline","content":".astro-route-announcer{position:absolute;left:0;top:0;clip:rect(0 0 0 0);-webkit-clip-path:inset(50%);clip-path:inset(50%);overflow:hidden;white-space:nowrap;width:1px;height:1px}\n"}],"routeData":{"route":"/search/[...search]","isIndex":false,"type":"page","pattern":"^\\/search(?:\\/(.*?))?\\/?$","segments":[[{"content":"search","dynamic":false,"spread":false}],[{"content":"...search","dynamic":true,"spread":true}]],"params":["...search"],"component":"src/pages/search/[...search].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.H5cTfI34.js"}],"styles":[{"type":"external","src":"/_astro/index.jwWWtWpa.css"},{"type":"inline","content":".containerSlice[data-astro-cid-j7pv25f6]{overflow-x:auto;overflow-y:hidden;display:flex;scroll-snap-type:× mandatory;scroll-padding:0 10px;scrollbar-width:thin;scrollbar-color:transparent transparent}@media (min-width: 768px){.containerSlice[data-astro-cid-j7pv25f6]{overflow:hidden;display:none}}.containerSlice[data-astro-cid-j7pv25f6]::-webkit-scrollbar{width:0}.containerSlice[data-astro-cid-j7pv25f6] .item[data-astro-cid-j7pv25f6]{flex-shrink:0;scroll-snap-align:start}\n.astro-route-announcer{position:absolute;left:0;top:0;clip:rect(0 0 0 0);-webkit-clip-path:inset(50%);clip-path:inset(50%);overflow:hidden;white-space:nowrap;width:1px;height:1px}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/brayangatica/vercel/help-monbak-vercel/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/Users/brayangatica/vercel/help-monbak-vercel/src/pages/search/[...search].astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000noop-middleware":"_noop-middleware.mjs","/src/pages/posts/crítica-al-sabor-de-los-completos-mojados-de-talca-una-experiencia-gustativa-desfavorable.md":"chunks/pages/crítica-al-sabor-de-los-completos-mojados-de-talca-una-experiencia-gustativa-desfavorable_hRY5prag.mjs","/src/pages/posts/el-café-combustible-esencial-para-la-vida-cotidiana.md":"chunks/pages/el-café-combustible-esencial-para-la-vida-cotidiana_rKE3w1Rw.mjs","/src/pages/posts/explorando-los-potenciales-terapéuticos-el-uso-medicinal-del-cannabis-sativa.md":"chunks/pages/explorando-los-potenciales-terapéuticos-el-uso-medicinal-del-cannabis-sativa_-5Bi4jn0.mjs","/node_modules/astro/dist/assets/endpoint/generic.js":"chunks/pages/generic_k4VzJIR6.mjs","/src/pages/posts/inteligencia-artificial-en-medicina.md":"chunks/pages/inteligencia-artificial-en-medicina_SwfVK0TW.mjs","/src/pages/posts/inteligencia-artificial-y-ética.md":"chunks/pages/inteligencia-artificial-y-ética_QQXMlSIS.mjs","/src/pages/posts/iron-man-el-mejor-vengador.md":"chunks/pages/iron-man-el-mejor-vengador_6KEcix9q.mjs","/src/pages/posts/telemedicina-y-atención-remota.md":"chunks/pages/telemedicina-y-atención-remota_zXtoFXDz.mjs","\u0000@astrojs-manifest":"manifest_2X25qrgI.mjs","/Users/brayangatica/vercel/help-monbak-vercel/node_modules/@astrojs/react/vnode-children.js":"chunks/vnode-children_3wEZly-Z.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_XsumRUTy.mjs","\u0000@astro-page:src/pages/posts/crítica-al-sabor-de-los-completos-mojados-de-talca-una-experiencia-gustativa-desfavorable@_@md":"chunks/crítica-al-sabor-de-los-completos-mojados-de-talca-una-experiencia-gustativa-desfavorable_PCfCTj_7.mjs","\u0000@astro-page:src/pages/posts/el-café-combustible-esencial-para-la-vida-cotidiana@_@md":"chunks/el-café-combustible-esencial-para-la-vida-cotidiana_CjFL8bkH.mjs","\u0000@astro-page:src/pages/posts/explorando-los-potenciales-terapéuticos-el-uso-medicinal-del-cannabis-sativa@_@md":"chunks/explorando-los-potenciales-terapéuticos-el-uso-medicinal-del-cannabis-sativa_BRkO_Pjp.mjs","\u0000@astro-page:src/pages/posts/inteligencia-artificial-en-medicina@_@md":"chunks/inteligencia-artificial-en-medicina_PX5GzCUG.mjs","\u0000@astro-page:src/pages/posts/inteligencia-artificial-y-ética@_@md":"chunks/inteligencia-artificial-y-ética_2rKski2A.mjs","\u0000@astro-page:src/pages/posts/iron-man-el-mejor-vengador@_@md":"chunks/iron-man-el-mejor-vengador_Jk07PvEg.mjs","\u0000@astro-page:src/pages/posts/telemedicina-y-atención-remota@_@md":"chunks/telemedicina-y-atención-remota_A6Xo_wy0.mjs","\u0000@astro-page:src/pages/search/index@_@astro":"chunks/index_bawSOPWp.mjs","\u0000@astro-page:src/pages/search/[...search]@_@astro":"chunks/_.._0riLnB1w.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_g5JJEg2o.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.H5cTfI34.js","/Users/brayangatica/vercel/help-monbak-vercel/src/components/utilities/Perfil.jsx":"_astro/Perfil.YUTvHVy0.js","/Users/brayangatica/vercel/help-monbak-vercel/src/components/utilities/CeoTools.jsx":"_astro/CeoTools.X2q_s0GJ.js","/astro/hoisted.js?q=1":"_astro/hoisted.l-JsOPk0.js","@astrojs/react/client.js":"_astro/client.olTvLX7Y.js","astro:scripts/before-hydration.js":""},"assets":["/_astro/monbak-logo.T0Uu8gHl.avif","/_astro/monbak-logo-dark.NF9B6l0R.avif","/_astro/index.jwWWtWpa.css","/favicon.svg","/_astro/CeoTools.X2q_s0GJ.js","/_astro/Perfil.YUTvHVy0.js","/_astro/client.olTvLX7Y.js","/_astro/hoisted.H5cTfI34.js","/_astro/hoisted.l-JsOPk0.js","/_astro/index.LFf77hJu.js","/_astro/jsx-runtime.9YwcPWTT.js"],"buildFormat":"directory"});

export { AstroIntegrationLogger as A, Logger as L, getEventPrefix as g, levels as l, manifest };
