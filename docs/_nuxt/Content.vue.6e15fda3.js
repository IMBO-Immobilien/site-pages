import{_ as u}from"./sanity-content.9b310ec4.js";import{_}from"./Links.5a837d86.js";import{d as s,o as n,h as p,w as i,A as r,c,_ as y,J as l,b as f,s as d}from"./entry.333d4a1c.js";const k=s({__name:"InternalLink",props:{slug:{type:String},type:{type:String},href:{type:String}},setup(t){return(e,o)=>{const a=_;return n(),p(a,{class:"internal-link",to:t.slug},{default:i(()=>[r(e.$slots,"default")]),_:3},8,["to"])}}}),h=s({__name:"ExternalLink",props:{href:{type:String}},setup(t){return(e,o)=>{const a=_;return n(),p(a,{to:t.href,target:"_blank"},{default:i(()=>[r(e.$slots,"default")]),_:3},8,["to"])}}}),g={class:"normal"},S=s({__name:"Normal",props:{block:{type:{}},children:{type:Array},style:{type:String,default:""},_type:{type:String},_key:{type:String}},setup(t){return(e,o)=>(n(),c("div",g,[r(e.$slots,"default")]))}}),$={},b={class:"small"};function x(t,e){return n(),c("div",b,[r(t.$slots,"default")])}const C=y($,[["render",x]]),A=s({__name:"BlockContent",props:{block:{type:{}},children:{type:Array},style:{type:String,default:""},_type:{type:String},_key:{type:String}},setup(t){return(e,o)=>(n(),c("div",null,[r(e.$slots,"default")]))}}),w=s({__name:"Content",props:{blocks:{type:Array},cl:{type:String},children:{type:Array}},setup(t){const e={styles:{normal:S,small:C},types:{block:A},marks:{internalLink:l(k),link:l(h)}};return(o,a)=>{const m=u;return n(),c("div",{class:d(t.cl)},[f(m,{blocks:t.blocks,serializers:e},null,8,["blocks"])],2)}}});export{w as _};
