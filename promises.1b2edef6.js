!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},n=e.parcelRequire2177;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var i={id:e,exports:{}};return t[e]=i,n.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){o[e]=t},e.parcelRequire2177=n);var i=n("h6c0i");const r=document.querySelector(".form"),l=document.querySelectorAll("input");function u(e,t){return new Promise(((o,n)=>{const i={position:e,delay:t};Math.random()>.3?o(i):n(i)}))}l[0].value=700,l[1].value=300,l[2].value=10,i.Notify.init({useIcon:!1,position:"center-top"}),r.addEventListener("submit",(function(e){let t={};e.preventDefault();for(let e of l)t[e.name]=Number(e.value);const{delay:o,step:n,amount:r}=t;for(let e=0;e<r;e+=1){u(e+1,n*e+o).then((({position:e,delay:t})=>{setTimeout(i.Notify.success,t,`✅ Fulfilled promise ${e} in ${t}ms`)})).catch((({position:e,delay:t})=>{setTimeout(i.Notify.failure,t,`❌ Rejected promise ${e} in ${t}ms`)}))}}))}();
//# sourceMappingURL=promises.1b2edef6.js.map
