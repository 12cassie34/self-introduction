(function(e){function t(t){for(var r,o,i=t[0],u=t[1],s=t[2],l=0,p=[];l<i.length;l++)o=i[l],Object.prototype.hasOwnProperty.call(c,o)&&c[o]&&p.push(c[o][0]),c[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);f&&f(t);while(p.length)p.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,o=1;o<n.length;o++){var i=n[o];0!==c[i]&&(r=!1)}r&&(a.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},o={app:0},c={app:0},a=[];function i(e){return u.p+"js/"+({"code-experience":"code-experience","contact-me":"contact-me","my-work":"my-work","other-experience":"other-experience"}[e]||e)+"."+{"code-experience":"03c87bca","contact-me":"66dc264f","my-work":"1c11bc90","other-experience":"0b70884c"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"code-experience":1,"contact-me":1,"my-work":1,"other-experience":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({"code-experience":"code-experience","contact-me":"contact-me","my-work":"my-work","other-experience":"other-experience"}[e]||e)+"."+{"code-experience":"bc056b99","contact-me":"18dd3cf4","my-work":"d1280d54","other-experience":"c2c5a838"}[e]+".css",c=u.p+r,a=document.getElementsByTagName("link"),i=0;i<a.length;i++){var s=a[i],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===c))return t()}var p=document.getElementsByTagName("style");for(i=0;i<p.length;i++){s=p[i],l=s.getAttribute("data-href");if(l===r||l===c)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||c,a=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=r,delete o[e],f.parentNode.removeChild(f),n(a)},f.href=c;var d=document.getElementsByTagName("head")[0];d.appendChild(f)})).then((function(){o[e]=0})));var r=c[e];if(0!==r)if(r)t.push(r[2]);else{var a=new Promise((function(t,n){r=c[e]=[t,n]}));t.push(r[2]=a);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=i(e);var p=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=c[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;p.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",p.name="ChunkLoadError",p.type=r,p.request=o,n[1](p)}c[e]=void 0}};var f=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/self-introduction/",u.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var p=0;p<s.length;p++)t(s[p]);var f=l;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"37a7":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=n("ecee"),c=n("c074"),a=n("f2d1"),i=n("ad3d");o["c"].add(c["a"],a["a"]),r["a"].component("font-awesome-icon",i["a"]);n("d3b7");var u=n("bc3a"),s=n.n(u),l={},p=s.a.create(l);p.interceptors.request.use((function(e){return e}),(function(e){return Promise.reject(e)})),p.interceptors.response.use((function(e){return e}),(function(e){return Promise.reject(e)})),Plugin.install=function(e){e.axios=p,window.axios=p,Object.defineProperties(e.prototype,{axios:{get:function(){return p}},$axios:{get:function(){return p}}})},r["a"].use(Plugin);var f=Plugin,d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("the-nav"),n("transition",{attrs:{name:"slide-fade",mode:"out-in"}},[n("router-view")],1)],1)},h=[],m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[e._v("關於我")]),e._v(" ‧ "),n("router-link",{attrs:{to:{name:"Experience"}}},[e._v("程式工作經驗")]),e._v(" ‧ "),n("router-link",{attrs:{to:{name:"Work"}}},[e._v("作品集")]),e._v(" ‧ "),n("router-link",{attrs:{to:{name:"Other"}}},[e._v("其他工作經驗/技能")]),e._v(" ‧ "),n("router-link",{attrs:{to:{name:"Contact"}}},[e._v("聯絡我")])],1)},v=[],_=n("2877"),g={},b=Object(_["a"])(g,m,v,!1,null,null,null),y=b.exports,w={components:{theNav:y},data:function(){return{route:this.$route.fullPath}}},x=w,k=(n("5c0b"),Object(_["a"])(x,d,h,!1,null,null,null)),C=k.exports,j=(n("3ca3"),n("ddb0"),n("8c4f")),P=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"page-container-dark"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-6 photo"},[r("div",{staticClass:"container"},[r("img",{attrs:{src:n("84ec"),alt:"Shan Yu Lin"}}),r("h1",[e._v("林珊玉 Shan-Yu LIN")]),r("p",[e._v("ineslin35@gmail.com | 0989-191-313")])])]),r("div",{staticClass:"col-6 profile"},[r("div",{staticClass:"container"},[r("h2",[e._v("前端工程師")]),e._m(0),r("div",{staticClass:"vue-package"},[r("ul",[r("li",[r("font-awesome-icon",{attrs:{icon:"check"}}),e._m(1)],1),r("li",[r("font-awesome-icon",{attrs:{icon:"check"}}),e._m(2)],1),r("li",[r("font-awesome-icon",{attrs:{icon:"check"}}),r("p",[e._v("HTML5、CSS3 (SCSS)")])],1),r("li",[r("font-awesome-icon",{attrs:{icon:"check"}}),r("p",[e._v("RWD 響應式網頁開發")])],1),r("li",[r("font-awesome-icon",{attrs:{icon:"check"}}),r("p",[e._v("PHP、MYSQL")])],1)])])])])])])},O=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v(" 語言愛好者，喜愛"),n("b",[e._v("程式語言")]),e._v("和"),n("b",[e._v("自然語言")]),e._v("。 真心相信程式可以產生巨大的影響力，"),n("br"),e._v("每日都在增強自己實力的路上。 ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("Vue 生態系："),n("span",{staticClass:"white-hightlight"},[e._v("Vuex")]),e._v("、 "),n("span",{staticClass:"white-hightlight"},[e._v("Vue Router")]),e._v(" 、Vuelidate、Vue I18n")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("Vanilla JavaScript、"),n("span",{staticClass:"white-hightlight"},[e._v("jQuery")])])}],S=(n("76a9"),{}),E=Object(_["a"])(S,P,O,!1,null,"9522ef0e",null),L=E.exports;r["a"].use(j["a"]);var T=[{path:"/",name:"Home",component:L},{path:"/code-experience",name:"Experience",component:function(){return n.e("code-experience").then(n.bind(null,"9b22"))}},{path:"/my-work",name:"Work",component:function(){return n.e("my-work").then(n.bind(null,"acbe"))}},{path:"/other-experience",name:"Other",component:function(){return n.e("other-experience").then(n.bind(null,"f88a"))}},{path:"/contact-me",name:"Contact",component:function(){return n.e("contact-me").then(n.bind(null,"906f"))}}],$=new j["a"]({mode:"history",routes:T}),N=$;r["a"].config.productionTip=!1,r["a"].use(f),new r["a"]({router:N,render:function(e){return e(C)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";n("9c0c")},"76a9":function(e,t,n){"use strict";n("37a7")},"84ec":function(e,t,n){e.exports=n.p+"img/my-photo.7efbdc6c.jpg"},"9c0c":function(e,t,n){}});
//# sourceMappingURL=app.43015186.js.map