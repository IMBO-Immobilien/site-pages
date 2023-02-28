import{_ as f}from"./Content.vue.6e15fda3.js";import{_ as k}from"./imgSrc.6c5d94f1.js";import{_ as E}from"./Links.5a837d86.js";import{d as v,u as N,o as c,c as l,F as $,r as b,h as u,w as D,a as m,y as C,t as I,b as d,_ as y,g as h,i as S,B}from"./entry.333d4a1c.js";import{u as w}from"./site.0140fde5.js";import{u as F,a as O,g as V}from"./queries.db9c3da7.js";import{u as j}from"./composables.8128985c.js";import"./sanity-content.9b310ec4.js";const q={class:"asset front-grid"},A={class:"asset-name"},H=v({__name:"Overview",props:{overview:{type:Object}},setup(_){const n=N(),i=(e,t)=>{let s=t+"DE",o=t+"EN";switch(n.locale.value){case"de":return e[s];default:return typeof e[o]<"u"?e[o]:e[s]}},a=(e,t)=>{let s=t+"DE",o=t+"EN";switch(n.locale.value){case"de":return e[s];default:return typeof e[o]<"u"?e[o]:e[s]}};return(e,t)=>{const s=k,o=f,p=E;return c(),l("div",null,[(c(!0),l($,null,b(_.overview,r=>(c(),u(p,{class:"asset-overview",key:r.slug.current,to:{name:"assets-asset",params:{asset:r.slug.current}}},{default:D(()=>[m("div",q,[r.overviewImage?(c(),u(s,{key:0,width:300,src:r.overviewImage.url,quality:50,crop:r.overviewImage.crop,dimensions:r.overviewImage.dimensions,fit:"inside",loading:!0,class:"thumb"},null,8,["src","crop","dimensions"])):C("",!0),m("div",A,I(i(r,"name")),1),d(o,{cl:"asset-description",blocks:a(r,"generalShort")},null,8,["blocks"])])]),_:2},1032,["to"]))),128))])}}});const L=y(H,[["__scopeId","data-v-10c77866"]]),T={id:"content",class:"front-container"},Q={class:"presentation"},R=v({__name:"Front",props:{overview:{type:Object}},setup(_){const{getSiteData:n}=w();return(i,a)=>{const e=f,t=L;return c(),l("div",T,[m("h1",Q,[d(e,{cl:"front-grid company",blocks:h(n).companyName},null,8,["blocks"])]),d(t,{overview:_.overview},null,8,["overview"])])}}});const z=y(R,[["__scopeId","data-v-06e74d56"]]),Z=v({__name:"index",async setup(_){let n,i;const{getCanonical:a,getSiteData:e}=w(),{path:t}=S(),{fetch:s}=F(),{error:o,data:p,pending:r}=([n,i]=B(()=>O("asset-overview",()=>s(V),{})),n=await n,i(),n);return o.value&&console.error("error",o.value),j({title:"Home",titleTemplate:g=>`${e.description} | ${g}`,link:[{rel:"canonical",href:a+t}],meta:[{name:"description",content:e.description||e.siteName},{hid:"og:title",property:"og:title",content:e.siteName},{hid:"og:description",property:"og:description",content:e.opengraph.description},{hid:"og:type",property:"og:type",content:"article"},{hid:"og:url",property:"og:url",content:a},{hid:"og:image",property:"og:image",content:`${e.opengraph.image.url}?q=60&w=1200&h=800&fit=max&auto=format}`}]}),(g,G)=>{const x=z;return c(),u(x,{overview:h(p)},null,8,["overview"])}}});export{Z as default};
