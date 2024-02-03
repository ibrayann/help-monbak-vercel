/* empty css                          */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, f as renderComponent } from '../astro_WtunJ4P3.mjs';
import 'kleur/colors';
import 'clsx';
import 'cssesc';
import { P as People, E as Editar, S as Search, $ as $$Layout } from './__GkJmC6e4.mjs';
/* empty css                          */

const $$Astro$3 = createAstro();
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Index$1;
  return renderTemplate``;
}, "/Users/brayangatica/vercel/help-monbak-vercel/src/pages/search/index.astro", void 0);

const $$file$1 = "/Users/brayangatica/vercel/help-monbak-vercel/src/pages/search/index.astro";
const $$url$1 = "/search";

const index$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$1,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$2 = createAstro();
const $$Showcase = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Showcase;
  const { showExtra } = Astro2.props;
  await Astro2.glob(/* #__PURE__ */ Object.assign({"../../pages/posts/crítica-al-sabor-de-los-completos-mojados-de-talca-una-experiencia-gustativa-desfavorable.md": () => import('./crítica-al-sabor-de-los-completos-mojados-de-talca-una-experiencia-gustativa-desfavorable_hRY5prag.mjs'),"../../pages/posts/el-café-combustible-esencial-para-la-vida-cotidiana.md": () => import('./el-café-combustible-esencial-para-la-vida-cotidiana_rKE3w1Rw.mjs'),"../../pages/posts/explorando-los-potenciales-terapéuticos-el-uso-medicinal-del-cannabis-sativa.md": () => import('./explorando-los-potenciales-terapéuticos-el-uso-medicinal-del-cannabis-sativa_-5Bi4jn0.mjs'),"../../pages/posts/inteligencia-artificial-en-medicina.md": () => import('./inteligencia-artificial-en-medicina_SwfVK0TW.mjs'),"../../pages/posts/inteligencia-artificial-y-ética.md": () => import('./inteligencia-artificial-y-ética_QQXMlSIS.mjs'),"../../pages/posts/iron-man-el-mejor-vengador.md": () => import('./iron-man-el-mejor-vengador_6KEcix9q.mjs'),"../../pages/posts/telemedicina-y-atención-remota.md": () => import('./telemedicina-y-atención-remota_zXtoFXDz.mjs')}), () => "../../pages/posts/*.md");
  return renderTemplate` ${showExtra && renderTemplate`${maybeRenderHead()}<div class="bg-primary dark:bg-primaryDark h-56 text-center pt-2"><h1 class="text-secondary dark:text-white font-bold text-4xl mb-7">
¿Cómo podemos ayudarte? 🤔
</h1><div class="flex rounded-md py-2 px-2 w-3/4 md:w-2/4 lg:w-1/4 min-h-[40px] my-3 bg-white dark:bg-white text-start mx-auto gap-2"><form class="flex-1"><input class="focus:outline-none w-full" placeholder="Busca algún tema de interés" type="text" name="search" id="search"></form></div><small id="ayuda" class="text-white px-5">
Para recibir ayuda personalizada
<a class="underline" href="login">
ingresa con tu cuenta Monbak
</a></small></div>`}`;
}, "/Users/brayangatica/vercel/help-monbak-vercel/src/components/astroComponents/Showcase.astro", void 0);

const $$Astro$1 = createAstro();
const $$Card = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Card;
  const { title, content, to = "tema", tema, inferior } = Astro2.props;
  const icon = {
    "tema-medicina": "People",
    "tema-programaci\xF3n": "Editar",
    "tema-cocina": "Search"
  };
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(to, "href")}${addAttribute(`bg-[#DDDFE0]  rounded-lg p-7 shadow-md hover:scale-105 transform transition duration-300 ease-in-out  ${inferior && "min-w-[300px] sm:max-w-[500]"}`, "class")}> <div class="bg-white my-2 w-24 h-24 rounded-full mx-auto p-4"> ${icon[tema] === "People" && renderTemplate`${renderComponent($$result, "People", People, {})}`} ${icon[tema] === "Editar" && renderTemplate`${renderComponent($$result, "Editar", Editar, {})}`} ${icon[tema] === "Search" && renderTemplate`${renderComponent($$result, "Search", Search, {})}`} </div> <section${addAttribute(`text-center mt-7 text-ellipsis`, "class")}> <h2 class="text-xl font-bold mb-3 text-center line-clamp-2"> ${title} </h2> <p class="text-gray-700 text-sm line-clamp-3"> ${content} </p> </section> </a>`;
}, "/Users/brayangatica/vercel/help-monbak-vercel/src/components/cards/Card.astro", void 0);

const categorias = [
	{
		categoria: "Medicina",
		slugcategoria: "tema-medicina",
		descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
		subcategorias: [
			"Anatomía",
			"Farmacología",
			"Patología"
		]
	},
	{
		categoria: "Programación",
		slugcategoria: "tema-programación",
		descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
		subcategorias: [
			"JavaScript",
			"Python",
			"Java"
		]
	},
	{
		categoria: "Cocina",
		slugcategoria: "tema-cocina",
		descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
		subcategorias: [
			"Postres",
			"Platos principales",
			"Bebidas"
		]
	}
];

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const Allposts = await Astro2.glob(/* #__PURE__ */ Object.assign({"./posts/crítica-al-sabor-de-los-completos-mojados-de-talca-una-experiencia-gustativa-desfavorable.md": () => import('./crítica-al-sabor-de-los-completos-mojados-de-talca-una-experiencia-gustativa-desfavorable_hRY5prag.mjs'),"./posts/el-café-combustible-esencial-para-la-vida-cotidiana.md": () => import('./el-café-combustible-esencial-para-la-vida-cotidiana_rKE3w1Rw.mjs'),"./posts/explorando-los-potenciales-terapéuticos-el-uso-medicinal-del-cannabis-sativa.md": () => import('./explorando-los-potenciales-terapéuticos-el-uso-medicinal-del-cannabis-sativa_-5Bi4jn0.mjs'),"./posts/inteligencia-artificial-en-medicina.md": () => import('./inteligencia-artificial-en-medicina_SwfVK0TW.mjs'),"./posts/inteligencia-artificial-y-ética.md": () => import('./inteligencia-artificial-y-ética_QQXMlSIS.mjs'),"./posts/iron-man-el-mejor-vengador.md": () => import('./iron-man-el-mejor-vengador_6KEcix9q.mjs'),"./posts/telemedicina-y-atención-remota.md": () => import('./telemedicina-y-atención-remota_zXtoFXDz.mjs')}), () => "./posts/*.md");
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Home", "content": "Homepage", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Showcase", $$Showcase, { "showExtra": true, "data-astro-cid-j7pv25f6": true })} ${maybeRenderHead()}<div class="container mx-auto pb-20" data-astro-cid-j7pv25f6> <section class="px-10 xl:px-60 mt-12" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "CeoTools", null, { "client:only": true, "client:component-hydration": "only", "data-astro-cid-j7pv25f6": true, "client:component-path": "/Users/brayangatica/vercel/help-monbak-vercel/src/components/utilities/CeoTools.jsx", "client:component-export": "default" })} <div class="flex justify-between mb-10" data-astro-cid-j7pv25f6> <h2 class="text-secondary text-3xl" data-astro-cid-j7pv25f6>Explorar todos los temas</h2> <a href="temas" class="my-auto" data-astro-cid-j7pv25f6>Ver todo Version 1.0.14</a> </div> <section class="mx-auto" data-astro-cid-j7pv25f6> <article class="grid md:grid-cols-3 grid-cols-1 gap-10 mx-auto" data-astro-cid-j7pv25f6> ${categorias.slice(0, 3).map((post, index) => renderTemplate`${renderComponent($$result2, "Card", $$Card, { "title": post.categoria, "content": post.descripcion, "to": `/${post.slugcategoria}`, "tema": post.slugcategoria, "data-astro-cid-j7pv25f6": true })}`)} </article> <p class="text-2xl text-secondary my-9" data-astro-cid-j7pv25f6>Populares</p> <article class="grid-cols-3 gap-10 md:grid hidden" data-astro-cid-j7pv25f6> ${Allposts.slice(0, 6).map((post) => renderTemplate`${renderComponent($$result2, "Card", $$Card, { "title": post.frontmatter.titulo, "content": post.rawContent().toString().replace(/[_*]+/g, "").slice(0, 100) + "...", "to": `/${post.frontmatter.slug}`, "tema": post.frontmatter.slugcategoria, "data-astro-cid-j7pv25f6": true })}`)} </article> <article class="containerSlice space-x-10 md:hidden" data-astro-cid-j7pv25f6> ${Allposts.slice(0, 6).map((post) => renderTemplate`${renderComponent($$result2, "Card", $$Card, { "title": post.frontmatter.titulo, "content": post.rawContent().toString().replace(/[_*]+/g, "").slice(0, 100) + "...", "to": `/${post.frontmatter.slug}`, "tema": post.frontmatter.slugcategoria, "inferior": true, "class:list": "item", "data-astro-cid-j7pv25f6": true })}`)} </article> </section> </section> </div> ` })} `;
}, "/Users/brayangatica/vercel/help-monbak-vercel/src/pages/index.astro", void 0);

const $$file = "/Users/brayangatica/vercel/help-monbak-vercel/src/pages/index.astro";
const $$url = "";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { index as a, index$1 as i };
