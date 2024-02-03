/* empty css                          */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, f as renderComponent } from '../astro_YTknkDH1.mjs';
import 'kleur/colors';
import 'clsx';
import 'cssesc';
import { jsx } from 'react/jsx-runtime';
import 'react';

const Arrow = ({ ...props }) => {
  return /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", ...props, children: /* @__PURE__ */ jsx("path", { d: "M13.1714 12.0007L8.22168 7.05093L9.63589 5.63672L15.9999 12.0007L9.63589 18.3646L8.22168 16.9504L13.1714 12.0007Z" }) });
};
const People = ({ ...props }) => {
  return /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", ...props, children: /* @__PURE__ */ jsx("path", { d: "M17.841 15.659L18.017 15.836L18.1945 15.659C19.0732 14.7803 20.4978 14.7803 21.3765 15.659C22.2552 16.5377 22.2552 17.9623 21.3765 18.841L18.0178 22.1997L14.659 18.841C13.7803 17.9623 13.7803 16.5377 14.659 15.659C15.5377 14.7803 16.9623 14.7803 17.841 15.659ZM12 14V16C8.68629 16 6 18.6863 6 22H4C4 17.6651 7.44784 14.1355 11.7508 14.0038L12 14ZM12 1C15.315 1 18 3.685 18 7C18 10.2397 15.4357 12.8776 12.225 12.9959L12 13C8.685 13 6 10.315 6 7C6 3.76034 8.56434 1.12237 11.775 1.00414L12 1ZM12 3C9.78957 3 8 4.78957 8 7C8 9.21043 9.78957 11 12 11C14.2104 11 16 9.21043 16 7C16 4.78957 14.2104 3 12 3Z" }) });
};
const Search = ({ ...props }) => {
  return /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", ...props, children: /* @__PURE__ */ jsx("path", { d: "M11 2C15.968 2 20 6.032 20 11C20 15.968 15.968 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2ZM11 18C14.8675 18 18 14.8675 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18ZM19.4853 18.0711L22.3137 20.8995L20.8995 22.3137L18.0711 19.4853L19.4853 18.0711Z" }) });
};
const Editar = ({ ...props }) => {
  return /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", ...props, children: /* @__PURE__ */ jsx("path", { d: "M6.41421 15.89L16.5563 5.74786L15.1421 4.33365L5 14.4758V15.89H6.41421ZM7.24264 17.89H3V13.6474L14.435 2.21233C14.8256 1.8218 15.4587 1.8218 15.8492 2.21233L18.6777 5.04075C19.0682 5.43128 19.0682 6.06444 18.6777 6.45497L7.24264 17.89ZM3 19.89H21V21.89H3V19.89Z" }) });
};

const $$Astro$1 = createAstro();
const $$PostBasic = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$PostBasic;
  const { title, description, to } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(`/${to}`, "href")} class="flex max-w-3xl mx-auto lg:p-6 hover:scale-105 transform transition duration-300 ease-in-out"> <div class="text-ellipsis w-11/12"> <h2 class="text-2xl font-bold mb-2 line-clamp-2">${title}</h2> <p class="text-gray-500 text-base line-clamp-2">${description}</p> </div> <div class="flex justify-end my-auto"> <div>${renderComponent($$result, "Arrow", Arrow, { "className": "w-10 h-10" })}</div> </div> </a> <!-- por revisar -->`;
}, "/Users/brayangatica/vercel/help-monbak-vercel/src/components/astroComponents/PostBasic.astro", void 0);

const $$Astro = createAstro();
const prerender = false;
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  console.log(Astro2.url.pathname);
  const params = Astro2.request.url;
  const lastSlashIndex = params.lastIndexOf("/");
  const tags = params.substring(lastSlashIndex + 1).toLowerCase();
  const tagsFiltered = tags.split("%20");
  const busqueda = tags.replace(/%20/g, " ");
  const AllPost = await Astro2.glob(/* #__PURE__ */ Object.assign({"../posts/crítica-al-sabor-de-los-completos-mojados-de-talca-una-experiencia-gustativa-desfavorable.md": () => import('./crítica-al-sabor-de-los-completos-mojados-de-talca-una-experiencia-gustativa-desfavorable_IqqHlM_2.mjs'),"../posts/el-café-combustible-esencial-para-la-vida-cotidiana.md": () => import('./el-café-combustible-esencial-para-la-vida-cotidiana_t-7SLOuA.mjs'),"../posts/explorando-los-potenciales-terapéuticos-el-uso-medicinal-del-cannabis-sativa.md": () => import('./explorando-los-potenciales-terapéuticos-el-uso-medicinal-del-cannabis-sativa_6wGWZ1EV.mjs'),"../posts/inteligencia-artificial-en-medicina.md": () => import('./inteligencia-artificial-en-medicina_uNiCUoIW.mjs'),"../posts/inteligencia-artificial-y-ética.md": () => import('./inteligencia-artificial-y-ética_gjTAzYSU.mjs'),"../posts/iron-man-el-mejor-vengador.md": () => import('./iron-man-el-mejor-vengador_wWdSemvt.mjs'),"../posts/telemedicina-y-atención-remota.md": () => import('./telemedicina-y-atención-remota_1yMnRyo2.mjs')}), () => "../posts/*.md");
  let postsFiltered = AllPost.filter((post) => {
    debugger;
    let postTags = post.frontmatter.tags.toLowerCase().replace(/,/g, " ").split(" ").map((s) => s.trim());
    return tagsFiltered.some(
      (tag) => postTags.includes(tag.trim().toLowerCase())
    );
  });
  return renderTemplate`${maybeRenderHead()}<div class="container mx-auto"> <section class="px-10 xl:px-60 mt-12 space-y-8"> <div class="flex items-center gap-3"> <nav class="flex mt-10" aria-label="Breadcrumb"> <ol class="inline-flex items-center space-x-1 md:space-x-3"> <li class="inline-flex items-center text-secondary hover:text-gray-400 md:ml-2 dark:text-secondary dark:hover:text-gray-400"> <a href="/" class="inline-flex items-center text-sm font-medium">
Home
</a> </li> <li> <div class="flex items-center"> <a href="#" class="ml-1 text-sm font-medium text-secondary hover:text-gray-400 md:ml-2 dark:text-secondary dark:hover:text-gray-400">Resultado de busqueda: ${busqueda}</a> </div> </li> </ol> </nav> </div> ${postsFiltered.length > 0 && postsFiltered.map((post) => renderTemplate`${renderComponent($$result, "PostBasic", $$PostBasic, { "title": post.frontmatter.titulo, "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.", "to": post.frontmatter.slug })}`)} ${postsFiltered.length == 0 && renderTemplate`<div class="flex flex-col items-center justify-center"> <h1 class="text-3xl font-bold text-center text-gray-700 dark:text-gray-200">
No se encontraron resultados
</h1> <p class="text-center text-gray-500 dark:text-gray-400">
Intenta con otra busqueda
</p> </div>`} </section> </div>`;
}, "/Users/brayangatica/vercel/help-monbak-vercel/src/pages/search/[...search].astro", void 0);

const $$file = "/Users/brayangatica/vercel/help-monbak-vercel/src/pages/search/[...search].astro";
const $$url = "/search/[...search]";

const ____search_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { Editar as E, People as P, Search as S, ____search_ as _ };
