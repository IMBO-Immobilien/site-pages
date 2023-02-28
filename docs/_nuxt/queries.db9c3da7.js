import{C as w,l as h,k as D,D as P,E as b,z as v,G as C,g as S,$ as N,H as I,I as $}from"./entry.333d4a1c.js";const O=()=>null;function j(...n){var p;const s=typeof n[n.length-1]=="string"?n.pop():void 0;typeof n[0]!="string"&&n.unshift(s);let[e,l,t={}]=n;if(typeof e!="string")throw new TypeError("[nuxt] [asyncData] key must be a string.");if(typeof l!="function")throw new TypeError("[nuxt] [asyncData] handler must be a function.");t.server=t.server??!0,t.default=t.default??O,t.lazy=t.lazy??!1,t.immediate=t.immediate??!0;const a=w(),c=()=>a.isHydrating?a.payload.data[e]:a.static.data[e],m=()=>c()!==void 0;a._asyncData[e]||(a._asyncData[e]={data:h(c()??((p=t.default)==null?void 0:p.call(t))??null),pending:h(!m()),error:h(a.payload._errors[e]?D(a.payload._errors[e]):null)});const r={...a._asyncData[e]};r.refresh=r.execute=(u={})=>{if(a._asyncDataPromises[e]){if(u.dedupe===!1)return a._asyncDataPromises[e];a._asyncDataPromises[e].cancelled=!0}if(u._initial&&m())return c();r.pending.value=!0;const o=new Promise((i,f)=>{try{i(l(a))}catch(x){f(x)}}).then(i=>{if(o.cancelled)return a._asyncDataPromises[e];t.transform&&(i=t.transform(i)),t.pick&&(i=R(i,t.pick)),r.data.value=i,r.error.value=null}).catch(i=>{var f;if(o.cancelled)return a._asyncDataPromises[e];r.error.value=i,r.data.value=S(((f=t.default)==null?void 0:f.call(t))??null)}).finally(()=>{o.cancelled||(r.pending.value=!1,a.payload.data[e]=r.data.value,r.error.value&&(a.payload._errors[e]=D(r.error.value)),delete a._asyncDataPromises[e])});return a._asyncDataPromises[e]=o,a._asyncDataPromises[e]};const d=()=>r.refresh({_initial:!0}),y=t.server!==!1&&a.payload.serverRendered;{const u=P();if(u&&!u._nuxtOnBeforeMountCbs){u._nuxtOnBeforeMountCbs=[];const i=u._nuxtOnBeforeMountCbs;u&&(b(()=>{i.forEach(f=>{f()}),i.splice(0,i.length)}),v(()=>i.splice(0,i.length)))}y&&a.isHydrating&&m()?r.pending.value=!1:u&&(a.payload.serverRendered&&a.isHydrating||t.lazy)&&t.immediate?u._nuxtOnBeforeMountCbs.push(d):t.immediate&&d(),t.watch&&C(t.watch,()=>r.refresh());const o=a.hook("app:data:refresh",i=>{if(!i||i.includes(e))return r.refresh()});u&&v(o)}const g=Promise.resolve(a._asyncDataPromises[e]).then(()=>r);return Object.assign(g,r),g}function R(n,s){const e={};for(const l of s)e[l]=n[l];return e}const B="api.sanity.io",L="apicdn.sanity.io",_=encodeURIComponent;function Q(n,s={}){const e=`?query=${_(n)}`;return Object.keys(s).reduce((l,t)=>`${l}&${_(`$${t}`)}=${_(JSON.stringify(s[t]))}`,e)}const H=n=>encodeURI(n).split(/%..|./).length;function E(n){const{useCdn:s,projectId:e,dataset:l,apiVersion:t="1",withCredentials:a,token:c}=n,m={credentials:a?"include":"omit",headers:{...c?{Authorization:`Bearer ${c}`}:{},Accept:"application/json"}};return{clone:()=>E({useCdn:s,projectId:e,dataset:l,apiVersion:t,withCredentials:a,token:c}),async fetch(r,d){const y=Q(r,d),g=H(y)>9e3,u=`https://${e}.${s&&!g?L:B}/v${t}/data/query/${l}`,{result:o}=g?await N(u,{method:"post",body:{query:r,params:d}}):await N(`${u}${y}`,m);return o}}}const k=n=>{const s={...n};let e=E(s);return{client:e,config:s,fetch:(...l)=>e.fetch(...l),setToken(l){s.token=l,e=E(s)}}},A=(n="default")=>{var a;const s=w();if((a=s._sanity)!=null&&a[n])return s._sanity[n];s._sanity=s._sanity||{};const e=I(),{additionalClients:l={},...t}=$(e.sanity,e.public.sanity);return!t.disableSmartCdn&&s.$preview&&(t.useCdn=!1),n==="default"?(s._sanity.default=k(t),s._sanity.default):(s._sanity[n]=k($(l[n],t)),s._sanity[n])},M=`*[_type == "assets"]{
    menuName,
    nameDE,
    nameEN,

    generalShortDE,
    generalShortEN,

    "generalRawDE": pt::text(generalShortDE),
    "generalRawEN": pt::text(generalShortEN),

    slug,

    "overviewImage": overviewImage {
        crop,
        hotspot,
        slug,
        alt,
        "url": asset->url,
        "dimensions": asset->metadata.dimensions,
        author->{ name }
    },
}`,q=`*[_type == "assets" && slug.current == $asset][0]{
    slug,
    nameDE, nameEN,
    "flat": flats[slug.current == $flat][0] {
        ...,
        "flatlist": ^.flats[] {
            flatNumber,
            rooms,
            taken,
            "slug": slug.current
        },
        "images": images[] {
            title,
            titleEN,
            slug,
            "url": image.asset->url,
            "dimensions": image.asset->metadata.dimensions,
            author->{ name }
        },
        "plans": floorPlans[] {
            title,
            titleEN,
            slug,
            "url": image.asset->url,
            "dimensions": image.asset->metadata.dimensions,
            author->{ name }
        }
    }
}`,T=`*[_type == "assets" && slug.current == $asset][0]{
    // ...,
    nameDE,
    nameEN,
    slug,
    "images": outsideImages[] {
        title,
        titleEN,
        slug,
        "url": image.asset->url,
        "dimensions": image.asset->metadata.dimensions,
        author->{ name }
    }
}`,U=`*[_type == "assets" && slug.current == $asset][0]{
    nameDE, 
    nameEN,
    slug,
    "flat": flats[slug.current == $flat][0] {
        slug,
        titleDE, 
        titleEN,
        "images": images[] {
            title,
            titleEN,
            slug,
            "url": image.asset->url,
            "dimensions": image.asset->metadata.dimensions,
            author->{ name }
        }
    }
}`,F=`*[_type == "assets" && slug.current == $asset][0]{
    nameDE, 
    nameEN,
    slug,
    "flat": flats[slug.current == $flat][0] {
        slug,
        titleDE, 
        titleEN,
        "images": floorPlans[] {
            title,
            titleEN,
            slug,
            "url": image.asset->url,
            "dimensions": image.asset->metadata.dimensions,
            author->{ name }
        }
    }
}`,G=`*[_type == "assets" && slug.current == $asset][0]{
    ...,
    "flats": flats[] {
        ...,
        "plans": floorPlans[] {
            title,
            titleEN,
            slug,
            "url": image.asset->url,
            "dimensions": image.asset->metadata.dimensions,
            author->{ name }
        }
    },

    "generalRawDE": pt::text(generalShortDE),
    "generalRawEN": pt::text(generalShortEN),

    "generalDE": generalDE[] {
        ...,
        markDefs[]{
            ...,
            _type == "internalLink" => {
                // ...,
                "type": @.reference->_type,
                "slug": @.reference->slug.current
            },

            _type == "externalLink" => {
                ...,
                "url": file.url -> url
            }
        }
    },
    "generalEN": generalEN[] {
        ...,
        markDefs[]{
            ...,
            _type == "internalLink" => {
                // ...,
                "type": @.reference->_type,
                "slug": @.reference->slug.current
            },

            _type == "externalLink" => {
                ...,
                "url": file.url -> url
            }
        }
    },
    "architectureDE": architectureDE[] {
        ...,
        markDefs[]{
            ...,
            _type == "internalLink" => {
                // ...,
                "type": @.reference->_type,
                "slug": @.reference->slug.current
            },

            _type == "externalLink" => {
                ...,
                "url": file.url -> url
            }
        }
    },
    "architectureEN": architectureEN[] {
        ...,
        markDefs[]{
            ...,
            _type == "internalLink" => {
                // ...,
                "type": @.reference->_type,
                "slug": @.reference->slug.current
            },

            _type == "externalLink" => {
                ...,
                "url": file.url -> url
            }
        }
    },

    "form": formDownload {
        ...,
        "url": file.asset->url
    },

    "images": outsideImages[] {
        title,
        titleEN,
        slug,
        "url": image.asset->url,
        "dimensions": image.asset->metadata.dimensions,
        author->{ name }
    },
}`;export{j as a,q as b,F as c,T as d,G as e,U as f,M as g,A as u};
