import"./hoisted.l-JsOPk0.js";const e=document.querySelector("form");e?.addEventListener("submit",n=>{n.preventDefault();const o=new FormData(e).get("search")?.toString();if(!o||o.length<=0)return;console.log(o);const t=new URL("/search",window.location.origin);t.pathname=`/search/${o}`,console.log(t.href.toString());const r=t.href.toString();window.location.replace(r)});
