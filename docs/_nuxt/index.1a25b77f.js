import{_ as h}from"./Spinner.9ccdeb3d.js";import{g as x,_ as y}from"./lib.211b299d.js";import{d as k,i as E,j as N,k as n,g as o,o as r,h as c,w,e as C}from"./entry.333d4a1c.js";import{u as D,a as B,c as I}from"./queries.db9c3da7.js";import"./Links.5a837d86.js";import"./composables.8128985c.js";import"./site.0140fde5.js";const G=k({__name:"index",setup(S){const{params:a,name:l,matched:m}=E(),{resolve:u}=N(),{fetch:i}=D(),p=x(m[0].path,l,a,u);let e={images:[],currentImageID:"image-0"};const{data:_,error:s,pending:f}=B(`${a.asset}-${a.flat}-plan-collection`,()=>i(I,{asset:a.asset,flat:a.flat,default:e}),{lazy:!0,transform:t=>{if(t.flat.images.length>0)e.images=t.flat.images,e.titleDE=t.nameDE,e.titleEN=t.nameEN,e.slug=t.slug;else throw n({statusCode:404,statusMessage:"No flat plan data"});return e}});if(s!=null&&s.value)throw console.error(s),n({statusCode:404,statusMessage:"Image Not Found"});return(t,v)=>{const g=h,d=y;return o(f)?(r(),c(g,{key:0},{default:w(()=>[C("Spinning")]),_:1})):(r(),c(d,{key:1,collection:o(_),source:o(p)},null,8,["collection","source"]))}}});export{G as default};
