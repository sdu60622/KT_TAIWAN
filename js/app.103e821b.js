(function(t){function e(e){for(var s,n,r=e[0],c=e[1],l=e[2],d=0,u=[];d<r.length;d++)n=r[d],Object.prototype.hasOwnProperty.call(i,n)&&i[n]&&u.push(i[n][0]),i[n]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);p&&p(e);while(u.length)u.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],s=!0,n=1;n<a.length;n++){var r=a[n];0!==i[r]&&(s=!1)}s&&(o.splice(e--,1),t=c(c.s=a[0]))}return t}var s={},n={app:0},i={app:0},o=[];function r(t){return c.p+"js/"+({settings:"settings"}[t]||t)+"."+{settings:"155ce1fa"}[t]+".js"}function c(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(t){var e=[],a={settings:1};n[t]?e.push(n[t]):0!==n[t]&&a[t]&&e.push(n[t]=new Promise((function(e,a){for(var s="css/"+({settings:"settings"}[t]||t)+"."+{settings:"0a64591a"}[t]+".css",i=c.p+s,o=document.getElementsByTagName("link"),r=0;r<o.length;r++){var l=o[r],d=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(d===s||d===i))return e()}var u=document.getElementsByTagName("style");for(r=0;r<u.length;r++){l=u[r],d=l.getAttribute("data-href");if(d===s||d===i)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var s=e&&e.target&&e.target.src||i,o=new Error("Loading CSS chunk "+t+" failed.\n("+s+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=s,delete n[t],p.parentNode.removeChild(p),a(o)},p.href=i;var m=document.getElementsByTagName("head")[0];m.appendChild(p)})).then((function(){n[t]=0})));var s=i[t];if(0!==s)if(s)e.push(s[2]);else{var o=new Promise((function(e,a){s=i[t]=[e,a]}));e.push(s[2]=o);var l,d=document.createElement("script");d.charset="utf-8",d.timeout=120,c.nc&&d.setAttribute("nonce",c.nc),d.src=r(t);var u=new Error;l=function(e){d.onerror=d.onload=null,clearTimeout(p);var a=i[t];if(0!==a){if(a){var s=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src;u.message="Loading chunk "+t+" failed.\n("+s+": "+n+")",u.name="ChunkLoadError",u.type=s,u.request=n,a[1](u)}i[t]=void 0}};var p=setTimeout((function(){l({type:"timeout",target:d})}),12e4);d.onerror=d.onload=l,document.head.appendChild(d)}return Promise.all(e)},c.m=t,c.c=s,c.d=function(t,e,a){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)c.d(a,s,function(e){return t[e]}.bind(null,s));return a},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],d=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var p=d;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var s=a("9085"),n=a.n(s);n.a},"0c38":function(t,e,a){t.exports=a.p+"img/sp3.db85fd42.svg"},"19ca":function(t,e,a){t.exports=a.p+"img/menu04.61e6809f.jpg"},"211c":function(t,e,a){t.exports=a.p+"img/sp1.931902f4.svg"},"216c":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"nav"}},[s("b-navbar",{staticClass:"nav",attrs:{toggleable:"lg",type:"dark"}},[s("b-navbar-brand",[s("a",{attrs:{id:"home",href:"#"}},[s("span",{on:{click:function(e){return t.goto("/")}}},[s("img",{attrs:{src:a("7d68")}})])])]),s("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),s("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[s("b-navbar-nav",[s("b-nav-item",[s("a",{attrs:{href:"#"}},[s("span",{on:{click:function(e){return t.goto("/about")}}},[s("font-awesome-icon",{staticClass:"fa-1x mr-1",attrs:{icon:["fas","home"]}}),t._v(" 關於我們")],1)])]),s("b-nav-item",[s("a",{attrs:{href:"#"}},[s("span",{on:{click:function(e){return t.goto("/menu")}}},[s("font-awesome-icon",{staticClass:"fa-1x mr-1",attrs:{icon:["fas","heart"]}}),t._v("精選菜單")],1)])]),s("b-nav-item",[s("a",{attrs:{href:"#"}},[s("span",{on:{click:function(e){return t.goto("/contact")}}},[s("font-awesome-icon",{staticClass:"fa-1x mr-1",attrs:{icon:["fas","flag"]}}),t._v("加盟專區")],1)])])],1),s("b-navbar-nav",{staticClass:"ml-auto"},[s("b-nav-item-dropdown",{attrs:{text:"Lang",right:""}},[s("b-dropdown-item",{attrs:{href:"#"}},[t._v("CH")]),s("b-dropdown-item",{attrs:{href:"#"}},[t._v("EN")]),s("b-dropdown-item",{attrs:{href:"#"}},[t._v("TW")]),s("b-dropdown-item",{attrs:{href:"#"}},[t._v("TH")])],1),s("b-nav-item",{attrs:{right:""}},[s("span",{on:{click:function(e){return t.goto("/login")}}},[t._v("店家登入")])]),s("b-nav-item",[s("a",{attrs:{href:"#"}},[s("span",{on:{click:function(e){return t.goto("/cart")}}},[t._v("購物車")])])])],1)],1)],1)],1)},n=[],i={components:{},methods:{goto:function(t){this.$route.path!==t&&this.$router.push(t)}}},o=i,r=a("2877"),c=Object(r["a"])(o,s,n,!1,null,null,null);e["a"]=c.exports},"3d5b":function(t,e,a){t.exports=a.p+"img/menu03.f825447f.jpg"},5393:function(t,e,a){t.exports=a.p+"img/banner01.b286afae.jpg"},"56d7":function(t,e,a){"use strict";a.r(e);a("4de4"),a("4160"),a("b64b"),a("159b");var s=a("5530"),n=(a("e623"),a("e379"),a("5dc8"),a("37e1"),a("0cdd"),a("2b0e")),i=a("5f5b");a("ab8b"),a("2dd8");n["default"].use(i["a"]);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view",{staticClass:"h-100 w-100"})],1)},r=[],c={components:{},created:function(){}},l=c,d=(a("034f"),a("2877")),u=Object(d["a"])(l,o,r,!1,null,null,null),p=u.exports,m=a("9483");Object(m["a"])("".concat("","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});a("d3b7");var f=a("8c4f"),v=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"home"}},[s("div",[s("Nav")],1),s("go-top",{attrs:{"max-width":992,size:50,right:100,bottom:50}}),s("div",[s("b-carousel",{staticStyle:{"text-shadow":"1px 1px 2px #333"},attrs:{id:"carousel",interval:3e3,controls:"",indicators:"",background:"#ababab","img-width":"1024","img-height":"480"},on:{"sliding-start":t.onSlideStart,"sliding-end":t.onSlideEnd},model:{value:t.slide,callback:function(e){t.slide=e},expression:"slide"}},[s("b-carousel-slide",{attrs:{"img-src":a("5393")}}),s("b-carousel-slide",{attrs:{"img-src":a("f2e5")}}),s("b-carousel-slide",{attrs:{"img-src":a("720a")}})],1)],1),s("div",{staticStyle:{"padding-top":"10%","padding-bottom":"10%"},attrs:{id:"about"}},[s("div",{staticClass:"special"},[s("div",{staticClass:"container"},[s("div",{staticClass:"col-12 col-lg-12"},[s("span",[s("font-awesome-icon",{staticClass:"fa-2x",attrs:{icon:["fas","home"]}}),t._v(" 關於我們 | About")],1)]),s("div",{staticClass:"special01 text-center"},[t._m(0),s("div",{staticClass:"row"},[s("div",{staticClass:"col-xl-3 col-lg-3 col-md-3 col-6 col-sm-6 pb-3"},[s("u-animate-container",[s("u-animate",{attrs:{name:"fadeInUp",delay:"0s",duration:"1s",iteration:1,offset:0,animateClass:"animated",begin:!1}},[s("img",{staticClass:"pb-2",attrs:{src:a("211c")}}),s("h6",[t._v("INGREDIENTS")]),s("h6",[t._v("嚴選食材")])])],1)],1),s("div",{staticClass:"col-xl-3 col-lg-3 col-md-3 col-6 col-sm-6 pb-3"},[s("u-animate-container",[s("u-animate",{attrs:{name:"fadeInUp",delay:"0s",duration:"1s",iteration:1,offset:0,animateClass:"animated",begin:!1}},[s("img",{staticClass:"pb-2",attrs:{src:a("ab25")}}),s("h6",[t._v("Fragrance")]),s("h6",[t._v("茶香四溢")])])],1)],1),s("div",{staticClass:"col-xl-3 col-lg-3 col-md-3 col-6 col-sm-6 pb-3"},[s("u-animate-container",[s("u-animate",{attrs:{name:"fadeInUp",delay:"0s",duration:"1s",iteration:1,offset:0,animateClass:"animated",begin:!1}},[s("img",{staticClass:"pb-2",attrs:{src:a("0c38")}}),s("h6",[t._v("UNIQUE SAUCE")]),s("h6",[t._v("100%台灣口味")])])],1)],1),s("div",{staticClass:"col-xl-3 col-lg-3 col-md-3 col-6 col-sm-6 pb-3"},[s("u-animate-container",[s("u-animate",{attrs:{name:"fadeInUp",delay:"0s",duration:"1s",iteration:1,offset:0,animateClass:"animated",begin:!1}},[s("img",{staticClass:"pb-2",attrs:{src:a("62a9")}}),s("h6",[t._v("JOIN US")]),s("h6",[t._v("完整加盟體系")])])],1)],1)])])])])]),s("div",{staticClass:"col-12 ",staticStyle:{"padding-top":"10%","padding-bottom":"10%"},attrs:{id:"homemenu"}},[s("div",{staticClass:"container"},[s("div",{staticClass:"col-12 col-lg-12"},[s("span",[s("font-awesome-icon",{staticClass:"fa-2x",attrs:{icon:["fas","heart"]}}),t._v(" 精選菜單 | Menu")],1)]),s("carousel",{staticClass:"owlCarousel pt-5",attrs:{autoplay:!0,margin:20,nav:!1,responsive:{0:{items:1,nav:!1},768:{items:3,nav:!1}}}},[s("div",[s("b-card",{staticClass:"mb-2",staticStyle:{"max-width":"600px"},attrs:{title:"正宗道地台灣鹽酥雞","img-src":a("ec28"),"img-alt":"Image","img-top":"",tag:"article"}},[s("b-card-text",[t._v(" 正宗台灣鹽酥雞,由多種中藥及獨門秘方醃製而成,必點招牌鹽酥雞。 ")]),s("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:function(e){return t.goto("/menu")}}},[t._v("MORE")])],1)],1),s("div",[s("b-card",{staticClass:"mb-2",staticStyle:{"max-width":"600px"},attrs:{title:"飄香茶葉蛋","img-src":a("f463"),"img-alt":"Image","img-top":"",tag:"article"}},[s("b-card-text",[t._v(" 多種中藥煮至入味的茶葉蛋 ")]),s("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:function(e){return t.goto("/menu")}}},[t._v("MORE")])],1)],1),s("div",[s("b-card",{staticClass:"mb-2",staticStyle:{"max-width":"600px"},attrs:{title:"炸甜不辣","img-src":a("3d5b"),"img-alt":"Image","img-top":"",tag:"article"}},[s("b-card-text",[t._v(" 酥脆的甜不辣，讓你一口接一口。 ")]),s("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:function(e){return t.goto("/menu")}}},[t._v("MORE")])],1)],1),s("div",[s("b-card",{staticClass:"mb-2",staticStyle:{"max-width":"600px"},attrs:{title:"台灣雞排","img-src":a("19ca"),"img-alt":"Image","img-top":"",tag:"article"}},[s("b-card-text",[t._v(" 厚切、肉嫩多汁美味雞排。 ")]),s("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:function(e){return t.goto("/menu")}}},[t._v("MORE")])],1)],1)])],1)]),s("div",{attrs:{id:"product"}}),s("div",{attrs:{id:"join"}},[s("div",{staticClass:"container"},[s("div",{staticClass:"col-12 col-lg-12 pt-5 pb-5"},[s("span",[s("font-awesome-icon",{staticClass:"fa-2x",attrs:{icon:["fas","flag"]}}),t._v(" 加盟資訊 | JOIN")],1),s("div",{staticClass:"col-12 text-center pt-5 "},[s("u-animate-container",[s("u-animate",{attrs:{name:"fadeInUp",delay:"0s",duration:"1s",iteration:1,offset:0,animateClass:"animated",begin:!1}},[s("img",{attrs:{src:a("c780")}})])],1)],1),s("div",{staticClass:"col-12 text-center pt-3 join"},[s("u-animate-container",[s("u-animate",{attrs:{name:"fadeInUp",delay:"0s",duration:"1s",iteration:1,offset:0,animateClass:"animated",begin:!1}},[s("a",{attrs:{id:"news",href:"#"}},[s("span",{on:{click:function(e){return t.goto("/contact")}}},[s("font-awesome-icon",{staticClass:"fa-1x mr-1",attrs:{icon:["fas","star"],spin:""}}),t._v(" JOIN US "),s("font-awesome-icon",{staticClass:"fa-1x ml-1",attrs:{icon:["fas","star"],spin:""}})],1)])])],1)],1)])])]),s("div",{staticClass:" pt-4 pb-4",attrs:{id:"follow"}},[s("div",{staticClass:"container"},[t._m(1),s("div",{staticClass:"row "},[s("div",{staticClass:"col-12 text-center pt-1"},[s("a",{attrs:{href:"#"}},[s("font-awesome-icon",{staticClass:"fa-3x mr-5",attrs:{icon:["fab","line"]}})],1),s("a",{attrs:{href:"#"}},[s("font-awesome-icon",{staticClass:"fa-3x mr-5",attrs:{icon:["fab","facebook-square"]}})],1),s("a",{attrs:{href:"#"}},[s("font-awesome-icon",{staticClass:"fa-3x mr-5",attrs:{icon:["fab","instagram"]}})],1),s("a",{attrs:{href:"#"}},[s("font-awesome-icon",{staticClass:"fa-3x",attrs:{icon:["fab","youtube"]}})],1)])]),t._m(2)])])],1)},g=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-lg-12 col-12 pt-5 pb-5"},[a("div",[a("h2",[t._v("品質堅持 ‧ 道道驚喜")])]),a("div",[a("h5",[t._v("ยึดมั่นในคุณภาพ · ทุกรสชาติที่คุณต้องว๊าว")])]),a("div",[a("h5",[t._v("อาหารดีมีคุณภาพ · ")])]),a("div",[a("h5",[t._v("เน้นใส่ใจคุณภาพ · ")])]),a("div",[a("p",{staticClass:"pt-3",staticStyle:{"font-size":"1rem"}},[t._v("嚴謹把關高品質食材、安心油品"),a("br"),t._v("提供合理的價錢讓消費者使用的安心且開心"),a("br"),t._v("從選料、設備到製程標準與台灣同步一致，"),a("br"),t._v("要讓每位顧客在泰國就能感受到一吃就懷念的美味，"),a("br"),t._v("享受到原汁原味的的正宗台灣鹽酥雞！"),a("br"),t._v("เราควบคุมและคัดสรรวัตุดิบที่มีคุณภาพ , ใช้น้ำมันได้มาตราฐานความปลอดภัย ")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-12 text-center"},[a("p",[t._v("FOLLOW")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-12 text-center pt-1"},[a("div",{staticClass:"footer-copyright text-center py-3"},[t._v("Copyright © 2020 KT TAIWAN All rights reserved. ")])])}],h=a("7ec7"),b=a.n(h),_=a("0edc"),C=a.n(_),x=a("49ec"),y=a.n(x),w=a("216c"),P={data:function(){return{slide:0,sliding:null}},methods:{goto:function(t){this.$route.path!==t&&this.$router.push(t)},onSlideStart:function(t){this.sliding=!0},onSlideEnd:function(t){this.sliding=!1}},components:{carousel:b.a,UAnimateContainer:_["UAnimateContainer"],UAnimate:_["UAnimate"],GoTop:y.a,Nav:w["a"]}},k=P,$=Object(d["a"])(k,v,g,!1,null,null,null),O=$.exports,E=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"dashboard"}},[a("div",[a("NavBack"),a("Alert")],1),a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"row"},[a("SlideBar"),a("main",{staticClass:"col-md-9 ml-sm-auto col-lg-10 pt-3 px-4 mt-5 w-100 h-100",attrs:{role:"main"}},[a("router-view")],1)],1)])])},A=[],j=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"navback"}},[a("nav",{staticClass:"navbar navbar-dark fixed-top  flex-md-nowrap p-0 shadow"},[a("a",{staticClass:"navbar-brand col-sm-3 col-md-2 mr-0",attrs:{href:"#"}},[t._v("KT後台")]),a("ul",{staticClass:"navbar-nav px-3"},[a("li",{staticClass:"nav-item text-nowrap"},[a("a",{staticClass:"nav-link",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.signout(e)}}},[t._v("登出")])])])])])},N=[],T={components:{},methods:{goto:function(t){this.$route.path!==t&&this.$router.push(t)},signout:function(){var t="".concat("https://vue-course-api.hexschool.io","/logout"),e=this;this.$http.post(t).then((function(t){t.data.success&&e.$router.push("/login")}))}}},M=T,S=Object(d["a"])(M,j,N,!1,null,null,null),U=S.exports,I=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"message-alert"},t._l(t.messages,(function(e,s){return a("div",{key:s,staticClass:"alert alert-dismissible",class:"alert-"+e.status},[t._v(" "+t._s(e.message)+" "),a("button",{staticClass:"close",attrs:{type:"button","aria-label":"Close"},on:{click:function(e){return t.removeMessage(s)}}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])})),0)},L=[],D=(a("a434"),{name:"Navbar",data:function(){return{messages:[]}},methods:{updateMessage:function(t,e){var a=Math.floor(new Date/1e3);this.messages.push({message:t,status:e,timestamp:a}),this.removeMessageWithTiming(a)},removeMessage:function(t){this.messages.splice(t,1)},removeMessageWithTiming:function(t){var e=this;setTimeout((function(){e.messages.forEach((function(a,s){a.timestamp===t&&e.messages.splice(s,1)}))}),5e3)}},created:function(){var t=this;t.$bus.$on("message:push",(function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"warning";t.updateMessage(e,a)}))}}),K=D,q=(a("82d5"),Object(d["a"])(K,I,L,!1,null,null,null)),F=q.exports,B=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"sidebar"}},[a("nav",{staticClass:"col-md-2 d-none d-md-block bg-light sidebar"},[a("div",{staticClass:"sidebar-sticky"},[t._m(0),a("ul",{staticClass:"nav flex-column"},[a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link active",attrs:{href:"#"}},[a("router-link",{attrs:{to:"/admin/products"}},[a("font-awesome-icon",{staticClass:"fa-1x mr-1",attrs:{icon:["fas","box-open"]}}),t._v("產品列表"),a("span",{staticClass:"sr-only"})],1)],1),a("a",{staticClass:"nav-link active",attrs:{href:"#"}},[a("router-link",{attrs:{to:"/admin/orderlist"}},[a("font-awesome-icon",{staticClass:"fa-1x mr-1",attrs:{icon:["fas","box-open"]}}),t._v("訂單列表"),a("span",{staticClass:"sr-only"})],1)],1)])])])])])},V=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h6",{staticClass:"sidebar-heading d-flex justify-content-between align-items-center\n        px-3 mt-4 mb-1 text-muted"},[a("span",[t._v("管理員")]),a("a",{staticClass:"d-flex align-items-center text-muted",attrs:{href:"#"}},[a("span",{attrs:{"data-feather":"plus-circle"}})])])}],H={},R=Object(d["a"])(H,B,V,!1,null,null,null),W=R.exports,J={components:{NavBack:U,Alert:F,SlideBar:W},methods:{goto:function(t){this.$route.path!==t&&this.$router.push(t)},signout:function(){var t="https://vue-course-api.hexschool.io/logout",e=this;this.$http.post(t).then((function(t){t.data.success&&e.$router.push("/")}))}}},z=J,G=Object(d["a"])(z,E,A,!1,null,null,null),Q=G.exports,X=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("loading",{attrs:{active:t.isLoading},on:{"update:active":function(e){t.isLoading=e}}}),a("div",{staticClass:"text-right mt-4"},[a("button",{staticClass:"btn btn-primary",on:{click:function(e){return t.openModal(!0)}}},[t._v("建立新的產品")])]),a("nav",{attrs:{"aria-label":"Page navigation example"}},[a("ul",{staticClass:"pagination"},[a("li",{staticClass:"page-item",class:{disabled:!t.pagination.has_pre}},[a("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Previous"},on:{click:function(e){return e.preventDefault(),t.getProducts(t.pagination.current_page-1)}}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("«")]),a("span",{staticClass:"sr-only"},[t._v("Previous")])])]),t._l(t.pagination.total_pages,(function(e){return a("li",{key:e,staticClass:"page-item",class:{active:t.pagination.current_page==e}},[a("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.getProducts(e)}}},[t._v(t._s(e))])])})),a("li",{staticClass:"page-item",class:{disabled:!t.pagination.has_next}},[a("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Next"},on:{click:function(e){return e.preventDefault(),t.getProducts(t.pagination.current_page+1)}}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("»")]),a("span",{staticClass:"sr-only"},[t._v("Next")])])])],2)]),a("table",{staticClass:"table mt-4 table-striped"},[t._m(0),a("tbody",t._l(t.products,(function(e){return a("tr",{key:e.id},[a("td",{attrs:{scope:"row"}},[t._v(t._s(e.category))]),a("td",[t._v(t._s(e.title))]),a("td",{staticClass:"text-right"},[t._v(t._s(t._f("currency")(e.origin_price)))]),a("td",{staticClass:"text-right"},[t._v(t._s(t._f("currency")(e.price)))]),a("td",[e.is_enabled?a("span",{staticClass:"text-success"},[t._v("啟用")]):a("span",[t._v("未啟用")])]),a("td",[a("button",{staticClass:"btn btn-outline-primary btn-sm",on:{click:function(a){return t.openModal(!1,e)}}},[t._v("編輯")]),a("button",{staticClass:"btn btn-outline-primary btn-sm",on:{click:function(a){return t.deleteModal(e)}}},[t._v("刪除")])])])})),0)]),a("b-modal",{attrs:{id:"ProductModal",title:"建立新產品",size:"xl","hide-footer":""}},[a("b-container",{attrs:{fluid:""}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-4"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"image"}},[t._v("輸入圖片網址")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.imageUrl,expression:"tempProduct.imageUrl"}],staticClass:"form-control",attrs:{type:"text",id:"image",placeholder:"請輸入圖片連結"},domProps:{value:t.tempProduct.imageUrl},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"imageUrl",e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"customFile"}},[t._v("或 上傳圖片 "),t.status.fileUploading?a("font-awesome-icon",{staticClass:"fa-1x mr-1",attrs:{icon:["fas","spinner"],spin:""}}):t._e()],1),a("input",{ref:"files",staticClass:"form-control",attrs:{type:"file",id:"customFile"},on:{change:t.uploadFile}})]),a("img",{staticClass:"img-fluid",attrs:{img:"https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=828346ed697837ce808cae68d3ddc3cf&auto=format&fit=crop&w=1350&q=80",src:t.tempProduct.imageUrl,alt:""}})]),a("div",{staticClass:"col-sm-8"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"title"}},[t._v("標題")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.title,expression:"tempProduct.title"}],staticClass:"form-control",attrs:{type:"text",id:"title",placeholder:"請輸入標題"},domProps:{value:t.tempProduct.title},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"title",e.target.value)}}})]),a("div",{staticClass:"form-row"},[a("div",{staticClass:"form-group col-md-6"},[a("label",{attrs:{for:"category"}},[t._v("分類")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.category,expression:"tempProduct.category"}],staticClass:"form-control",attrs:{type:"text",id:"category",placeholder:"請輸入分類"},domProps:{value:t.tempProduct.category},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"category",e.target.value)}}})]),a("div",{staticClass:"form-group col-md-6"},[a("label",{attrs:{for:"price"}},[t._v("單位")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.unit,expression:"tempProduct.unit"}],staticClass:"form-control",attrs:{type:"unit",id:"unit",placeholder:"請輸入單位"},domProps:{value:t.tempProduct.unit},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"unit",e.target.value)}}})])]),a("div",{staticClass:"form-row"},[a("div",{staticClass:"form-group col-md-6"},[a("label",{attrs:{for:"origin_price"}},[t._v("原價")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.origin_price,expression:"tempProduct.origin_price"}],staticClass:"form-control",attrs:{type:"number",id:"origin_price",placeholder:"請輸入原價"},domProps:{value:t.tempProduct.origin_price},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"origin_price",e.target.value)}}})]),a("div",{staticClass:"form-group col-md-6"},[a("label",{attrs:{for:"price"}},[t._v("售價")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.price,expression:"tempProduct.price"}],staticClass:"form-control",attrs:{type:"number",id:"price",placeholder:"請輸入售價"},domProps:{value:t.tempProduct.price},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"price",e.target.value)}}})])]),a("hr"),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"description"}},[t._v("產品描述")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.description,expression:"tempProduct.description"}],staticClass:"form-control",attrs:{type:"text",id:"description",placeholder:"請輸入產品描述"},domProps:{value:t.tempProduct.description},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"description",e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"content"}},[t._v("說明內容")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.content,expression:"tempProduct.content"}],staticClass:"form-control",attrs:{type:"text",id:"content",placeholder:"請輸入產品說明內容"},domProps:{value:t.tempProduct.content},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"content",e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("div",{staticClass:"form-check"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.is_enabled,expression:"tempProduct.is_enabled"}],staticClass:"form-check-input",attrs:{type:"checkbox","true-value":1,"false-value":0,id:"is_enabled"},domProps:{checked:Array.isArray(t.tempProduct.is_enabled)?t._i(t.tempProduct.is_enabled,null)>-1:t._q(t.tempProduct.is_enabled,1)},on:{change:function(e){var a=t.tempProduct.is_enabled,s=e.target,n=s.checked?1:0;if(Array.isArray(a)){var i=null,o=t._i(a,i);s.checked?o<0&&t.$set(t.tempProduct,"is_enabled",a.concat([i])):o>-1&&t.$set(t.tempProduct,"is_enabled",a.slice(0,o).concat(a.slice(o+1)))}else t.$set(t.tempProduct,"is_enabled",n)}}}),a("label",{staticClass:"form-check-label",attrs:{for:"is_enabled"}},[t._v(" 是否啟用 ")])])])])]),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button","data-dismiss":"modal"},on:{click:function(e){return t.$bvModal.hide("ProductModal")}}},[t._v("取消")]),a("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.updateProduct}},[t._v("確認")])])])],1),a("b-modal",{attrs:{id:"deleteproductmodal",centered:"",title:"刪除產品","hide-footer":""}},[a("p",{staticClass:"my-4"},[t._v("確認刪除產品嗎?")]),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button","data-dismiss":"modal"},on:{click:function(e){return t.$bvModal.hide("deleteproductmodal")}}},[t._v("取消")]),a("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.confirmDeleteModal}},[t._v("確認")])])])],1)},Y=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",{attrs:{width:"120",scope:"col"}},[t._v("分類")]),a("th",{attrs:{scope:"col"}},[t._v("產品名稱")]),a("th",{attrs:{width:"120",scope:"col"}},[t._v("原價")]),a("th",{attrs:{width:"120",scope:"col"}},[t._v("售價")]),a("th",{attrs:{width:"100",scope:"col"}},[t._v("是否啟用")]),a("th",{attrs:{width:"80",scope:"col"}},[t._v("編輯")])])])}],Z=(a("99af"),{data:function(){return{products:[],pagination:{},tempProduct:{},isNew:!1,isLoading:!1,status:{fileUploading:!1}}},methods:{openModal:function(t,e){t?(this.tempProduct={},this.isNew=!0):(this.tempProduct=Object.assign({},e),this.isNew=!1);var a=this;a.$bvModal.show("ProductModal")},getProducts:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e="".concat("https://vue-course-api.hexschool.io","/api/").concat("kt_taiwan","/products?page=").concat(t),a=this;a.isLoading=!0,this.$http.get(e).then((function(t){a.isLoading=!1,a.products=t.data.products,a.pagination=t.data.pagination}))},updateProduct:function(){var t="".concat("https://vue-course-api.hexschool.io","/api/").concat("kt_taiwan","/admin/product"),e="post",a=this;a.isNew||(t="".concat("https://vue-course-api.hexschool.io","/api/").concat("kt_taiwan","/admin/product/").concat(a.tempProduct.id),e="put"),this.$http[e](t,{data:a.tempProduct}).then((function(t){t.data.success,a.$bvModal.hide("ProductModal"),a.getProducts()}))},deleteModal:function(t){var e=this;this.tempProduct=t,e.$bvModal.show("deleteproductmodal")},confirmDeleteModal:function(){var t=this,e="".concat("https://vue-course-api.hexschool.io","/api/").concat("kt_taiwan","/admin/product/").concat(t.tempProduct.id),a="delete";this.$http[a](e).then((function(e){e.data.success?(t.$bvModal.hide("deleteproductmodal"),t.deleteConfirm=!1,t.getProducts()):(t.$bvModal.hide("deleteproductmodal"),t.getProducts())}))},uploadFile:function(){var t=this,e=this.$refs.files.files[0],a=this,s=new FormData;s.append("file-to-upload",e);var n="".concat("https://vue-course-api.hexschool.io","/api/").concat("kt_taiwan","/admin/upload");a.status.fileUploading=!0,this.$http.post(n,s,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){a.status.fileUploading=!1,e.data.success?a.$set(a.tempProduct,"imageUrl",e.data.imageUrl):t.$bus.$emit("message:push",e.data.message,"danger")}))}},created:function(){this.getProducts()}}),tt=Z,et=(a("decd"),Object(d["a"])(tt,X,Y,!1,null,null,null)),at=et.exports,st=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"orderlist"}},[a("loading",{attrs:{active:t.isLoading},on:{"update:active":function(e){t.isLoading=e}}}),a("nav",{attrs:{"aria-label":"Page navigation example"}},[a("ul",{staticClass:"pagination"},[a("li",{staticClass:"page-item",class:{disabled:!t.pagination.has_pre}},[a("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Previous"},on:{click:function(e){return e.preventDefault(),t.getOrders(t.pagination.current_page-1)}}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("«")]),a("span",{staticClass:"sr-only"},[t._v("Previous")])])]),t._l(t.pagination.total_pages,(function(e){return a("li",{key:e,staticClass:"page-item",class:{active:t.pagination.current_page==e}},[a("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.getOrders(e)}}},[t._v(t._s(e))])])})),a("li",{staticClass:"page-item",class:{disabled:!t.pagination.has_next}},[a("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Next"},on:{click:function(e){return e.preventDefault(),t.getOrders(t.pagination.current_page+1)}}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("»")]),a("span",{staticClass:"sr-only"},[t._v("Next")])])])],2)]),a("table",{staticClass:"table mt-3 table-striped"},[t._m(0),a("tbody",t._l(t.orders,(function(e){return a("tr",{key:e.id},[a("td",[t._v(t._s(t._f("time")(e.create_at)))]),a("td",[a("ul",{staticClass:"list-unstyled"},t._l(e.products,(function(e){return a("li",{key:e.id},[t._v(t._s(e.product.title)+" x "+t._s(e.qty))])})),0)]),a("td",[t._v("$."+t._s(t._f("currencyFilter")(e.total)))]),a("td",[e.is_paid?a("span",{staticClass:"text-primary"},[t._v("已付款")]):a("span",{staticClass:"text-danger"},[t._v("尚未付款")])]),a("td",{staticClass:"text-center"},[a("button",{staticClass:"btn btn-primary",on:{click:function(a){return t.openModal(e)}}},[t._v("查看")])])])})),0)]),a("b-modal",{ref:"my-modal",attrs:{size:"xl","hide-footer":"",title:"訂單詳情"}},[a("div",{staticClass:"d-block text-center"},[a("table",{staticClass:"table "},[t._l(t.tempOrder.products,(function(e){return a("thead",{key:e.id},[a("tr",[a("td",[a("p",[t._v(t._s(e.product.title))])]),a("td",[a("p",[t._v("x"+t._s(e.qty))])]),a("td",[a("p",[t._v("$."+t._s(e.total))])])])])})),a("tbody",[a("tr",{attrs:{scope:"row"}},[a("td"),a("td",[t._v("總計:")]),a("th",[a("p",[t._v("$."+t._s(t.tempOrder.total))])])])])],2),a("p",[t._v("備註:"+t._s(t.tempOrder.message))])])])],1)},nt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",{staticClass:"bg-light"},[a("tr",[a("th",{attrs:{width:"200",scope:"col"}},[t._v("建立時間")]),a("th",{attrs:{scope:"col"}},[t._v("訂單明細")]),a("th",{attrs:{width:"100",scope:"col"}},[t._v("應付金額")]),a("th",{attrs:{width:"100",scope:"col"}},[t._v("狀態")]),a("th")])])}],it={data:function(){return{pagination:{},tempOrder:{},orders:[],isLoading:!1}},components:{},methods:{getOrders:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=this,a="".concat("https://vue-course-api.hexschool.io","/api/").concat("kt_taiwan","/admin/orders?page=").concat(t);e.isLoading=!0,e.$http.get(a).then((function(t){e.orders=t.data.orders,e.pagination=t.data.pagination,e.isLoading=!1}))},openModal:function(t){this.tempOrder=Object(s["a"])({},t),this.$refs["my-modal"].show()}},created:function(){this.getOrders()}},ot=it,rt=Object(d["a"])(ot,st,nt,!1,null,null,null),ct=rt.exports;n["default"].use(f["a"]);var lt=[{path:"/",name:"Home",component:O,meta:{title:"KT TAIWAN"}},{path:"/menu",name:"Menu",component:function(){return a.e("settings").then(a.bind(null,"9a0b"))},meta:{title:"KT | 精選菜單"}},{path:"/payorder",name:"PayOrder",component:function(){return a.e("settings").then(a.bind(null,"8f31"))},meta:{title:"KT | 結帳"}},{path:"/contact",name:"Contact",component:function(){return a.e("settings").then(a.bind(null,"b8fa"))},meta:{title:"KT | 聯絡我們"}},{path:"/about",name:"About",component:function(){return a.e("settings").then(a.bind(null,"f820"))},meta:{title:"KT | 關於KT"}},{path:"/login",name:"Login",component:function(){return a.e("settings").then(a.bind(null,"a55b"))},meta:{title:"KT | 店家登入"}},{path:"/cart",name:"Cart",component:function(){return a.e("settings").then(a.bind(null,"b789"))},meta:{title:"KT | 訂單確認"}},{path:"/ordercheck/:orderId",name:"OrderCheck",component:function(){return a.e("settings").then(a.bind(null,"d349"))},meta:{title:"KT | 訂單確認"}},{path:"/admin",name:"Dashboard",component:Q,meta:{},children:[{path:"products",name:"Products",component:at,meta:{title:"KT | 店家後台",requiresAuth:!0}},{path:"orderlist",name:"OrderList",component:ct,meta:{title:"KT | 店家後台",requiresAuth:!0}}]},{path:"*",redirect:"/"}],dt=new f["a"]({routes:lt});dt.beforeEach((function(t,e,a){document.title=t.meta.title,a()}));var ut=dt,pt=(a("b0c0"),a("2f62")),mt=a("0e44");n["default"].use(pt["a"]);var ft=parseInt(Object({VUE_APP_APIPATH:"https://vue-course-api.hexschool.io",VUE_APP_CUSTOMPATH:"kt_taiwan",NODE_ENV:"production",BASE_URL:""}).VUE_APP_TIMELEFT),vt=parseInt(Object({VUE_APP_APIPATH:"https://vue-course-api.hexschool.io",VUE_APP_CUSTOMPATH:"kt_taiwan",NODE_ENV:"production",BASE_URL:""}).VUE_APP_TIMELEFT_BREAK),gt=new pt["a"].Store({state:{todos:[],current:"",timeleft:ft,alarmSelected:"./alarms/supercar_short.mp3",isbreak:!1},mutations:{todoAdd:function(t,e){t.todos.push({name:e,edit:!1,model:e})},todoDelete:function(t,e){t.todos.splice(e,1)},todoToggleEdit:function(t,e){t.todos[e].edit=!t.todos[e].edit},todoSave:function(t,e){t.todos[e].edit=!1,t.todos[e].name=t.todos[e].model},todoCancel:function(t,e){t.todos[e].edit=!1,t.todos[e].model=t.todos[e].name},todoDrag:function(t,e){t.todos=e},alarmSet:function(t,e){t.alarmSelected=e},setTimeleft:function(t,e){t.timeleft=e},setCurrent:function(t,e){t.current=e},start:function(t){!t.isbreak&&0===t.current.length&&t.todos.length>0?(t.current=t.todos[0].name,t.todos.splice(0,1)):t.isbreak&&(t.current="休息一下")},finish:function(t){t.todos.length>0&&(t.isbreak=!t.isbreak),t.current="",t.timeleft=t.isbreak?vt:ft}},getters:{todos:function(t){return t.todos},alarmSelected:function(t){return t.alarmSelected},current:function(t){return t.current},timeleft:function(t){return t.timeleft},isbreak:function(t){return t.isbreak}},plugins:[Object(mt["a"])()]}),ht=a("9062"),bt=a.n(ht);a("e40d");n["default"].prototype.$bus=new n["default"];a("a9e3"),a("b680"),a("ac1f"),a("5319");var _t=function(t){var e=Number(t);return"$".concat(e.toFixed(0).replace(/./g,(function(t,e,a){var s=e&&"."!==t&&(a.length-e)%3===0?", ".concat(t).replace(/\s/g,""):t;return s})))},Ct=function(t){var e=new Date(1e3*t).toLocaleString(void 0,{day:"numeric",month:"numeric",year:"numeric",hour:"2-digit",minute:"2-digit",hour12:!1});return e},xt=a("ecee"),yt=a("c074"),wt=a("ad3d"),Pt=a("f2d1"),kt=a("f0eb"),$t=a("5886"),Ot=(a("4413"),a("310e")),Et=a.n(Ot),At=(a("fce9"),a("ecb2"),a("00e4")),jt=a("4776"),Nt=a.n(jt),Tt=(a("b15b"),a("bc3a")),Mt=a.n(Tt),St=a("a7fe"),Ut=a.n(St),It=a("7bb1"),Lt=a("4c93");Mt.a.defaults.withCredentials=!0,n["default"].component("ValidationObserver",It["a"]),n["default"].component("ValidationProvider",It["b"]),n["default"].use(Nt.a),n["default"].use(Ut.a,Mt.a),n["default"].use(C.a),n["default"].use(At["a"]),n["default"].use(kt["default"]),n["default"].use($t["a"]),xt["c"].add(yt["b"],yt["q"],yt["d"],yt["a"],yt["r"],yt["k"],yt["c"],yt["i"],yt["l"],yt["j"],yt["p"],yt["h"],yt["e"],Pt["c"],Pt["a"],Pt["b"],Pt["d"],yt["g"],yt["o"],yt["f"],yt["n"],yt["m"]),n["default"].component("font-awesome-icon",wt["a"]),n["default"].component("draggable",Et.a),n["default"].component("Loading",bt.a),n["default"].filter("currency",_t),n["default"].filter("time",Ct),n["default"].config.productionTip=!1,new n["default"]({el:"#app",router:ut,store:gt,render:function(t){return t(p)}}).$mount("#app"),ut.beforeEach((function(t,e,a){if(t.meta.requiresAuth){var s="".concat("https://vue-course-api.hexschool.io","/api/user/check");Mt.a.post(s).then((function(t){t.data.success?a():a({path:"/login"})}))}else a()})),Object(It["c"])("required",Object(s["a"])(Object(s["a"])({},Lt["required"]),{},{message:"此為必填項目"})),Object.keys(Lt).forEach((function(t){Object(It["c"])(t,Lt[t])}))},"5b19":function(t,e,a){},"62a9":function(t,e,a){t.exports=a.p+"img/sp4.70c84e40.svg"},"720a":function(t,e,a){t.exports=a.p+"img/banner03.409e1133.jpg"},"7d68":function(t,e,a){t.exports=a.p+"img/logo1.f3f6840b.png"},"82d5":function(t,e,a){"use strict";var s=a("5b19"),n=a.n(s);n.a},9085:function(t,e,a){},a9af:function(t,e,a){},ab25:function(t,e,a){t.exports=a.p+"img/sp2.cd73e9e8.svg"},c780:function(t,e,a){t.exports=a.p+"img/logo.9165f85c.png"},decd:function(t,e,a){"use strict";var s=a("a9af"),n=a.n(s);n.a},ec28:function(t,e,a){t.exports=a.p+"img/menu01.af67d86c.jpg"},f2e5:function(t,e,a){t.exports=a.p+"img/banner02.1d3deb45.jpg"},f463:function(t,e,a){t.exports=a.p+"img/menu02.cea19e27.jpg"},fce9:function(t,e,a){}});
//# sourceMappingURL=app.103e821b.js.map