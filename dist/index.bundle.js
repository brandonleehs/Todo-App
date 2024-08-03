(()=>{"use strict";var e={475:(e,t,n)=>{n.d(t,{A:()=>u});var r=n(601),a=n.n(r),o=n(314),i=n.n(o),s=n(417),l=n.n(s),d=new URL(n(424),n.b),c=i()(a()),p=l()(d);c.push([e.id,`.sidebar__toggle{--toggle-padding: var(--padding);position:absolute;top:var(--toggle-padding);right:var(--toggle-padding);border:0;padding:0;cursor:pointer}@media only screen and (max-width: 630px){.sidebar__toggle{--toggle-padding: 1rem}}.sidebar__toggle svg{fill:var(--clr-neutral-500)}.sidebar{--layout-gap: 1rem;--content-padding: .25rem 0;--padding: 1rem;--width: 240px;background-color:var(--clr-neutral-200);position:fixed;z-index:1;top:0;left:0;transform:none;width:var(--width);overflow:hidden;height:100%;transition:transform .3s ease-in-out,margin-left .3s ease-in-out}.sidebar.hide{transform:translateX(-100%)}.sidebar__content{display:flex;flex-direction:column;gap:var(--layout-gap);padding:var(--padding);width:100%;height:100%}.sidebar__close{position:absolute;top:1rem;right:1rem;padding:0}@media(hover: hover){.sidebar__close:hover{color:var(--clr-neutral-50);outline:2px solid var(--clr-primary-400);background-color:var(--clr-primary-200)}}.sidebar__close:active{background-color:var(--clr-primary-300)}.sidebar [class*=title]{font-weight:700}.sidebar__title{font-size:1.5rem;text-align:center}.sidebar__add{display:grid}.sidebar__add button{color:inherit;display:inline-flex;gap:.5rem;align-items:center;padding:var(--content-padding);cursor:pointer}.sidebar__projects>*,.sidebar__tasks>*{padding:var(--content-padding)}.sidebar li{position:relative}.sidebar li::after{content:url(${p});position:absolute;right:1rem}.navbar{--layout-gap: 2rem;--content-gap: 1rem;display:flex;gap:var(--layout-gap);padding:var(--padding);align-items:center;font-weight:700}@media(max-width: 530px){.navbar{gap:0;flex-direction:column}}.navbar__title{font-size:3rem}.navbar ul{display:flex;font-size:1.5rem;gap:var(--content-gap)}.home{--home-padding-sm: var(--padding);--home-padding: var(--padding) calc(var(--padding) * 2);--layout-gap: 2rem;display:flex;align-items:center;flex-direction:row-reverse}.home__content{padding:var(--home-padding);gap:var(--layout-gap);display:grid;place-items:center;text-align:center}@media(max-width: 1024px){.home{flex-direction:column}.home__content{padding:var(--home-padding-sm)}}.home picture{margin-inline:var(--padding);box-shadow:rgba(0,0,0,.25) 0px 14px 28px,rgba(0,0,0,.22) 0px 5px 5px;border-radius:3rem;overflow:hidden;max-height:630px}.home__hero{font-size:3rem;font-weight:700}.home__start{width:fit-content;padding:1rem 3rem;border-radius:99rem;box-shadow:0 25px 50px -12px rgba(0,0,0,.25);transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out,-webkit-box-shadow .15s ease-in-out;cursor:pointer}@media(hover: hover){.home__start:hover{color:var(--clr-neutral-50);outline:2px solid var(--clr-primary-400);background-color:var(--clr-primary-200)}}.home__start:active{background-color:var(--clr-primary-300)}:root{--clr-primary-100: #eef2f3;--clr-primary-200: #cdd7dc;--clr-primary-300: #acbcc4;--clr-primary-400: #8ba1ad;--clr-primary-500: #6a8695;--clr-primary-600: #526874;--clr-primary-700: #3b4b53;--clr-primary-800: #232d32;--clr-primary-900: #0c0f11;--clr-neutral-50: white;--clr-neutral-100: #f3f4f6;--clr-neutral-200: #e5e7eb;--clr-neutral-300: #d1d5db;--clr-neutral-400: #9ca3af;--clr-neutral-500: #6b7280;--clr-neutral-600: #4b5563;--clr-neutral-700: #374151;--clr-neutral-800: #1f2937;--clr-neutral-900: #111827}.dark-theme{--clr-primary-400: hsl(293, 44%, 24%);--clr-secondary-400: hsl(328, 49%, 37%);--clr-neutral-400: white}.no-transition,.no-transition *{-webkit-transition:none !important;-moz-transition:none !important;-ms-transition:none !important;-o-transition:none !important;transition:none !important}body{--padding: 2rem;background-color:var(--clr-neutral-100);color:var(--clr-neutral-600);font-size:1.2rem;transition:margin-left .3s ease-in-out}body.body--toggle{margin-left:240px}@media only screen and (max-width: 992px){body.body--toggle{margin-left:0;background-color:rgba(0,0,0,.4)}}button{border:0;background-color:rgba(0,0,0,0);cursor:pointer}ul{padding:0;list-style-type:none}a{text-decoration:none;color:inherit}.contact{padding:var(--padding);font-weight:700;display:inline-flex;align-items:center;gap:.5rem}.contact svg{fill:var(--clr-neutral-500)}.inbox{min-height:65vh;display:grid;justify-items:center}.inbox__project{width:75%;text-align:center;background-color:rgba(205,215,220,.4);border-radius:1rem}.inbox__project-title{font-size:1.5rem;font-weight:700}.inbox__task{border-top:2px solid var(--clr-neutral-500);display:inline-flex;align-items:center;gap:.5rem}.inbox__task button svg{fill:var(--clr-neutral-500)}@media(hover: hover){.inbox__task button svg:hover{color:var(--clr-neutral-50);outline:2px solid var(--clr-primary-400);background-color:var(--clr-primary-200)}}.inbox__task button svg:active{background-color:var(--clr-primary-300)}`,""]);const u=c},430:(e,t,n)=>{n.d(t,{A:()=>s});var r=n(601),a=n.n(r),o=n(314),i=n.n(o)()(a());i.push([e.id,"/*\n  1. Use a more-intuitive box-sizing model.\n*/\n*,\n*::before,\n*::after {\n    box-sizing: border-box;\n}\n\n/*\n    2. Remove default margin\n  */\n* {\n    margin: 0;\n}\n\n/*\n    Typographic tweaks!\n    3. Add accessible line-height\n    4. Improve text rendering\n  */\nbody {\n    line-height: 1.5;\n    -webkit-font-smoothing: antialiased;\n}\n\n/*\n    5. Improve media defaults\n  */\nimg,\npicture,\nvideo,\ncanvas,\nsvg {\n    display: block;\n    max-width: 100%;\n}\n\n/*\n    6. Remove built-in form typography styles\n  */\ninput,\nbutton,\ntextarea,\nselect {\n    font: inherit;\n}\n\n/*\n    7. Avoid text overflows\n  */\np,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n    overflow-wrap: break-word;\n}\n\n/*\n    8. Create a root stacking context\n  */\n#root,\n#__next {\n    isolation: isolate;\n}",""]);const s=i},314:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var l=this[s][0];null!=l&&(i[l]=!0)}for(var d=0;d<e.length;d++){var c=[].concat(e[d]);r&&i[c[0]]||(void 0!==o&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=o),n&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=n):c[2]=n),a&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=a):c[4]="".concat(a)),t.push(c))}},t}},417:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var o={},i=[],s=0;s<e.length;s++){var l=e[s],d=r.base?l[0]+r.base:l[0],c=o[d]||0,p="".concat(d," ").concat(c);o[d]=c+1;var u=n(p),g={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==u)t[u].references++,t[u].updater(g);else{var m=a(g,r);r.byIndex=s,t.splice(s,0,{identifier:p,updater:m,references:1})}i.push(p)}return i}function a(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,a){var o=r(e=e||[],a=a||{});return function(e){e=e||[];for(var i=0;i<o.length;i++){var s=n(o[i]);t[s].references--}for(var l=r(e,a),d=0;d<o.length;d++){var c=n(o[d]);0===t[c].references&&(t[c].updater(),t.splice(c,1))}o=l}}},659:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},540:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},56:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,a&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},113:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},424:(e,t,n)=>{e.exports=n.p+"static/delete.svg"}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var o=t[r]={id:r,exports:{}};return e[r](o,o.exports,n),o.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");if(r.length)for(var a=r.length-1;a>-1&&(!e||!/^http(s?):/.test(e));)e=r[a--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href,n.nc=void 0;var r=n(72),a=n.n(r),o=n(825),i=n.n(o),s=n(659),l=n.n(s),d=n(56),c=n.n(d),p=n(540),u=n.n(p),g=n(113),m=n.n(g),h=n(430),v={};v.styleTagTransform=m(),v.setAttributes=c(),v.insert=l().bind(null,"head"),v.domAPI=i(),v.insertStyleElement=u(),a()(h.A,v),h.A&&h.A.locals&&h.A.locals;var b=n(475),f={};f.styleTagTransform=m(),f.setAttributes=c(),f.insert=l().bind(null,"head"),f.domAPI=i(),f.insertStyleElement=u(),a()(b.A,f),b.A&&b.A.locals&&b.A.locals,n.p;class y{#e;#t;#n;#r;#a;constructor(){this.#e=document.querySelector("body"),this.#t=document.querySelector("main"),this.#o(),window.addEventListener("resize",this.#o)}render(){this.#t.appendChild(this.#i()),this.#n=document.querySelector(".sidebar__toggle"),this.#r=document.querySelector(".sidebar__close"),this.#a=document.querySelector(".sidebar"),this.#s()}#i(){const e=document.createElement("section");return e.className="inbox",e.innerHTML='<ul class="inbox__project">\n                <p class="inbox__project-title">General</p>\n                <li class="inbox__task">\n                    <button type="button"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"\n                            fill="currentColor" class="bi bi-check-square" viewBox="0 0 16 16">\n                            <path\n                                d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />\n                            <path\n                                d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z" />\n                        </svg></button>\n                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus eveniet vitae culpa vel libero,\n                </li>\n            </ul>',e.insertAdjacentHTML("afterbegin",'<button type="button" class="sidebar__toggle">\n        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-list"\n            viewBox="0 0 16 16">\n            <path fill-rule="evenodd"\n                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />\n        </svg>\n    </button>\n    <aside class="sidebar hide">\n        <div class="sidebar__content">\n            <button type="button" class="sidebar__close"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"\n                    fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">\n                    <path\n                        d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />\n                </svg></button>\n            <p class="sidebar__title">TaskTrack</p>\n            <div class="sidebar__add">\n                <button type="button"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"\n                        class="bi bi-plus-circle" viewBox="0 0 16 16">\n                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />\n                        <path\n                            d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />\n                    </svg>Add task</button>\n                <button type="button"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"\n                        class="bi bi-plus-circle" viewBox="0 0 16 16">\n                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />\n                        <path\n                            d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />\n                    </svg>Add project</button>\n            </div>\n            <ul class="sidebar__projects">\n                <p class="sidebar__projects-title">Projects</p>\n                <li>General</li>\n            </ul>\n            <ul class="sidebar__tasks">\n                <p class="sidebar__tasks-title">Tasks</p>\n            </ul>\n        </div>\n    </aside>'),e}#o(){window.vw=Math.max(document.documentElement.clientWidth||0,window.innerWidth||0),window.vh=Math.max(document.documentElement.clientHeight||0,window.innerHeight||0)}#s(){const e=this;e.#n.addEventListener("click",(function(t){e.#e.classList.toggle("body--toggle"),e.#a.classList.toggle("hide")})),e.#r.addEventListener("click",(function(){e.#e.classList.remove("body--toggle"),e.#a.classList.add("hide")})),e.#e.addEventListener("click",(function(t){window.vw<=992&&e.#e.classList.contains("body--toggle")&&!e.#a.contains(t.target)&&(e.#e.classList.remove("body--toggle"),e.#a.classList.add("hide"),t.stopPropagation())}),{capture:!0})}}window.addEventListener("load",(function(){document.querySelector("body").classList.remove("no-transition")})),document.addEventListener("DOMContentLoaded",(function(){(new y).render()}))})();