(()=>{"use strict";var e={99:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(645),r=n.n(a)()((function(e){return e[1]}));r.push([e.id,"ul{list-style-type:none}ul#games-list li{display:inline-block}.game-name{color:#ff8c00}.game-name:hover{color:orange}.game-snippet{max-width:220px}.game-snippet .game-snippet-container,.game-snippet .game-name{text-align:center}.game-snippet .game-name{max-width:220px;display:-webkit-box;text-overflow:ellipsis;overflow:hidden}",""]);const i=r},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,a){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(a)for(var i=0;i<this.length;i++){var o=this[i][0];null!=o&&(r[o]=!0)}for(var s=0;s<e.length;s++){var c=[].concat(e[s]);a&&r[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),t.push(c))}},t}},379:(e,t,n)=>{var a,r=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),i=[];function o(e){for(var t=-1,n=0;n<i.length;n++)if(i[n].identifier===e){t=n;break}return t}function s(e,t){for(var n={},a=[],r=0;r<e.length;r++){var s=e[r],c=t.base?s[0]+t.base:s[0],l=n[c]||0,d="".concat(c," ").concat(l);n[c]=l+1;var u=o(d),f={css:s[1],media:s[2],sourceMap:s[3]};-1!==u?(i[u].references++,i[u].updater(f)):i.push({identifier:d,updater:v(f,t),references:1}),a.push(d)}return a}function c(e){var t=document.createElement("style"),a=e.attributes||{};if(void 0===a.nonce){var i=n.nc;i&&(a.nonce=i)}if(Object.keys(a).forEach((function(e){t.setAttribute(e,a[e])})),"function"==typeof e.insert)e.insert(t);else{var o=r(e.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}return t}var l,d=(l=[],function(e,t){return l[e]=t,l.filter(Boolean).join("\n")});function u(e,t,n,a){var r=n?"":a.media?"@media ".concat(a.media," {").concat(a.css,"}"):a.css;if(e.styleSheet)e.styleSheet.cssText=d(t,r);else{var i=document.createTextNode(r),o=e.childNodes;o[t]&&e.removeChild(o[t]),o.length?e.insertBefore(i,o[t]):e.appendChild(i)}}function f(e,t,n){var a=n.css,r=n.media,i=n.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=a;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(a))}}var m=null,p=0;function v(e,t){var n,a,r;if(t.singleton){var i=p++;n=m||(m=c(t)),a=u.bind(null,n,i,!1),r=u.bind(null,n,i,!0)}else n=c(t),a=f.bind(null,n,t),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return a(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;a(e=t)}else r()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===a&&(a=Boolean(window&&document&&document.all&&!window.atob)),a));var n=s(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var a=0;a<n.length;a++){var r=o(n[a]);i[r].references--}for(var c=s(e,t),l=0;l<n.length;l++){var d=o(n[l]);0===i[d].references&&(i[d].updater(),i.splice(d,1))}n=c}}}}},t={};function n(a){if(t[a])return t[a].exports;var r=t[a]={id:a,exports:{}};return e[a](r,r.exports,n),r.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e=n(379),t=n.n(e),a=n(99);t()(a.Z,{insert:"head",singleton:!1}),a.Z.locals;(async()=>{await async function(){const e=await(async()=>(await fetch("http://localhost:3000/games")).json())(),t=document.createElement("div");t.setAttribute("id","game-list"),t.setAttribute("class","row"),document.getElementById("games").appendChild(t);for(let t=0;t<e.length;t++){const a=document.createElement("div");a.setAttribute("class","col-6 col-sm-3"),document.getElementById("game-list").appendChild(a).innerHTML=`<div class="game-snippet">\n    <a href="/detail.html?id=${(n=e[t]).id}">\n      <div class="game-snippet-container">\n        <img class="img-thumbnail" id="game-${n.id}" src="${n.image}" alt="Cover of game ${n.name}" />\n      </div>\n      <h3 class="game-name">${n.name}</h3>\n    </a>\n  </div>`}var n}()})()})()})();