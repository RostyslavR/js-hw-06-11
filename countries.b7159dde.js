function n(n){return n&&n.__esModule?n.default:n}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},i=e.parcelRequire2177;null==i&&((i=function(n){if(n in t)return t[n].exports;if(n in o){var e=o[n];delete o[n];var i={id:n,exports:{}};return t[n]=i,e.call(i.exports,i,i.exports),i.exports}var a=new Error("Cannot find module '"+n+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(n,e){o[n]=e},e.parcelRequire2177=i);var a;function r(n,e,t){var o,i,a,r,l;function u(){var s=Date.now()-r;s<e&&s>=0?o=setTimeout(u,e-s):(o=null,t||(l=n.apply(a,i),a=i=null))}null==e&&(e=100);var s=function(){a=this,i=arguments,r=Date.now();var s=t&&!o;return o||(o=setTimeout(u,e)),s&&(l=n.apply(a,i),a=i=null),l};return s.clear=function(){o&&(clearTimeout(o),o=null)},s.flush=function(){o&&(l=n.apply(a,i),a=i=null,clearTimeout(o),o=null)},s}r.debounce=r,a=r;var l=i("iQIUW");function u(n){return fetch(`https://restcountries.com/v3.1/name/${n}?fields=name,capital,population,flags,languages`).then((n=>n.json()))}const s=document.querySelector("#search-box"),c=document.querySelector(".country-list"),f=document.querySelector(".country-info");function p(n){const e=n.length;c.innerHTML="",f.innerHTML="",e?e>10?l.Notify.info("Too many matches found. Please enter a more specific name."):1!==e?e<11&&e>1&&(c.innerHTML=function(n){const e=[];return n.forEach((({name:n,flags:t})=>{e.push(`\n    <li>\n    <img src = ${t.svg} width = 40 />\n    <span class="list__name"> ${n.official}<span>\n    </li>\n    `)})),e.join("")}(n)):f.innerHTML=function(n){const{name:e,capital:t,population:o,flags:i,languages:a}=n;return`\n  <img src = ${i.svg} width = 80 />\n  <span class="info__name">${e.official}</span>\n  <p>Capital: <span>${t[0]}</span></p>\n  <p>Population: <span>${o}</span></p>\n  <p>Languages: <span>${Object.values(a).join(",")}</span></p>\n  `}(n[0]):l.Notify.failure("Oops, there is no country with that name")}function d(n){l.Notify.failure("Error !!!"),console.log(n)}l.Notify.init({position:"center-top"}),s.addEventListener("input",n(a)((function(n){u(n.target.value.trim()).then(p).catch(d)}),300));
//# sourceMappingURL=countries.b7159dde.js.map