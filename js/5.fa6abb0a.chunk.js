(this["webpackJsonpfront-in-react"]=this["webpackJsonpfront-in-react"]||[]).push([[5],{102:function(e,t,s){},106:function(e,t,s){"use strict";s.r(t),s.d(t,"default",(function(){return u}));var c=s(37),n=s(36),a=s(13),r=s(0),i=s(71),l=s(38),o=s(107),m=s(87),d=s(88),j=s.n(d),p=s(16),x=(s(101),s(102),s(39)),b=s(1);function u(){var e=Object(i.a)().t,t=Object(r.useState)({}),s=Object(a.a)(t,2),d=s[0],u=s[1],f=Object(r.useState)(""),h=Object(a.a)(f,2),O=h[0],y=h[1],g=Object(r.useState)(""),v=Object(a.a)(g,2),w=v[0],N=v[1],k=Object(r.useState)({}),C=Object(a.a)(k,2),P=C[0],_=C[1],R={responsive:{desktop:{breakpoint:{max:9999,min:769},items:2},mobile:{breakpoint:{max:768,min:0},items:1}}},U=function(e){var t=e.active,s=e.onClick;return Object(b.jsx)("li",{className:"inline-block",onClick:function(){return s&&s()},children:Object(b.jsx)("label",{className:["cursor-pointer block text-4xl text-white",t||"text-gray-700"].join(" "),children:"\u2022"})})};return Object(l.a)((function(){fetch("/".concat(window.COUNTRY,"/p2p-data")).then((function(e){return e.json()})).then((function(e){var t=Object.values(e).find((function(e){return void 0!==e}));if(t){var s=Object.values(t).find((function(e){return void 0!==e})),c=Object.keys(s.fields.providers).find((function(e){return void 0!==e}));y(c)}u(e)})).catch((function(){return u({})}))}),6e4),Object(b.jsxs)(o.a.Group,{onChange:function(e){return N(Object.keys(d)[e])},children:[Object(b.jsxs)(o.a.List,{className:"flex p-1 space-x-1 xl:ml-52 xl:mr-52 bg-gray-800 sticky top-0 z-10 overflow-x-auto no-scrollbar",children:[Object.keys(d).map((function(e,t){return 0===t&&!w&&N(e),Object(b.jsxs)(o.a,{className:function(e){return["min-w-max p-2.5 sm:w-full text-sm font-medium flex justify-center",e.selected&&"border-b-2 border-blue-400"].join(" ")},children:[Object(b.jsx)("img",{src:d[e][Object.keys(d[e])[0]].fields.coin_icon,className:"w-5 h-5 mr-1"}),Object(b.jsx)("p",{children:e.toUpperCase()})]},t)})),0===Object.keys(d).length&&Object(n.a)(Array(5)).map((function(e,t){return Object(b.jsx)("div",{className:"animate-pulse w-screen h-12 bg-gray-700"},t)}))]}),Object(b.jsxs)("h2",{className:"pl-5 pr-5 pt-5 xl:pl-0 xl:pr-0 xl:pt-5 xl:ml-52 xl:mr-52",children:[e("Compara f\xe1cilmente anuncios P2P de Bitcoin en distintas plataformas y elige el m\xe1s conveniente. Para tener una mejor experiencia,",{coin:e(w.toUpperCase())})," ",Object(b.jsx)("a",{className:"underline text-blue-400 hover:text-blue-600",href:"".concat("br"!=window.COUNTRY?"/"+window.COUNTRY:"","/").concat(e("tips-para-operar-p2p")),children:e("te acercamos algunos consejos para operar P2P")}),"."]}),Object(b.jsxs)(o.a.Panels,{className:"mt-2 pb-5",children:[Object.values(d).map((function(t,s){return Object(b.jsx)(o.a.Panel,{children:Object.values(t).filter((function(e){return e.fields.providers[O].ask.length>0||e.fields.providers[O].bid.length>0})).map((function(t,s){return Object(b.jsxs)("div",{className:"flex flex-col xl:ml-52 xl:mr-52 mt-8 border-2 border-gray-600 overflow-x-auto",children:[Object(b.jsx)("div",{className:"bg-gray-600",children:Object(b.jsx)("div",{className:"py-3 px-3 sm:px-6 lg:px-8",children:Object(b.jsx)("div",{className:"flex items-center justify-between flex-wrap",children:Object(b.jsx)("div",{className:"w-0 flex-1 flex items-center",children:Object(b.jsxs)("span",{className:"text-white flex items-center",children:[Object(b.jsx)("img",{className:"w-5 h-5 mr-1",src:t.fields.icon}),Object(b.jsx)("a",{className:"font-medium",href:t.fields.url,target:"_blank",rel:"sponsored noreferrer",children:t.fields.name.replaceAll(" P2P","")}),t.fields.score&&t.fields.score.count>0&&Object(b.jsxs)("p",{className:"ml-1 font-light text-gray-400",children:[t.fields.score.rating,Object(b.jsx)(p.f,{className:"inline-block fill-current h-5 w-5 align-text-top"}),Object(b.jsx)("a",{className:"ml-1 underline",href:"".concat("br"!=window.COUNTRY?"/"+window.COUNTRY:"","/").concat(e("opiniones"),"/").concat(t.fields.id),children:e("Ver opiniones")})]})]})})})})}),Object(b.jsx)("div",{className:"py-2 align-middle inline-block",children:Object(b.jsx)("div",{className:"border-gray-200",children:Object(b.jsx)(j.a,{responsive:R.responsive,arrows:!1,showDots:!0,customDot:Object(b.jsx)(U,{}),children:Object(n.a)(Array("ask","bid")).map((function(s,n){return Object(b.jsx)("div",{className:"overflow-x-auto no-scrollbar ml-2.5 mr-2.5",children:Object(b.jsxs)("table",{className:["mt-1 m-auto","bid"===s,0===t.fields.providers[O][s].length&&"flex items-center justify-center mt-5"].join(" "),children:[t.fields.providers[O][s].length>0&&Object(b.jsxs)("thead",{children:[Object(b.jsx)("tr",{children:Object(b.jsx)("th",{children:Object(b.jsx)("span",{className:"ml-1 sm:ml-4 px-2 py-1 text-xs font-bold text-blue-50 bg-blue-400 rounded mb-3",children:"ask"===s&&e("VENDEDORES")||e("COMPRADORES")})})}),Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{scope:"col",className:"px-2 py-1 sm:px-5 sm:py-3 text-left text-xs font-medium uppercase tracking-wider"}),Object(b.jsx)("th",{scope:"col",className:"px-2 py-1 sm:px-5 sm:py-3 text-left text-xs font-medium uppercase tracking-wider",children:e("PRECIO")}),t.fields.providers[O][s][0].limit&&Object(b.jsx)("th",{scope:"col",className:"px-2 py-1 sm:px-5 sm:py-3 text-left text-xs font-medium uppercase tracking-wider",children:e("VOLUMEN")})]})]})||Object(b.jsx)("tbody",{children:Object(b.jsx)("tr",{children:Object(b.jsx)("td",{children:Object(b.jsx)("p",{children:e("No hay ".concat("ask"==s?"vendedores":"compradores"," en este momento..."))})})})}),t.fields.providers[O][s].slice(0,P["".concat(w,"-").concat(t.fields.id,"-").concat(s)]?t.fields.providers[O][s].length:4).map((function(e,s){return Object(b.jsx)("tbody",{children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{className:"px-2 py-1 sm:px-5 sm:py-3 cursor-pointer",onClick:function(){return window.open(e.url)},children:Object(b.jsxs)("div",{className:"truncate w-28",children:[Object(b.jsx)("p",{className:"truncate",children:e.name}),0!=e.amount_of_orders&&Object(b.jsxs)("div",{className:"text-sm text-gray-400",children:[e.amount_of_orders," ",Object(b.jsx)(x.a,{className:"w-4 inline-block fill-current"})," ",e.success_rate,"%"]})]})}),Object(b.jsx)("td",{className:"px-2 py-1 sm:px-5 sm:py-3",children:Object(b.jsxs)("div",{className:"text-sm truncate w-32 grid grid-flow-row",children:[Object(b.jsx)("span",{children:e.price}),Object(b.jsxs)("span",{className:"grid grid-flow-col gap-2 justify-start cursor-pointer text-gray-400",children:[Object(b.jsx)("p",{"data-tip":!0,"data-for":"".concat(t.fields.name,"-").concat(e.name,"-").concat(s),className:"truncate",children:e.payment_methods.map((function(e){return e.name})).join(", ")}),e.payment_methods.map((function(e){return e.name})).join(", ").length>14&&Object(b.jsx)("p",{"data-tip":!0,"data-for":"".concat(t.fields.name,"-").concat(e.name,"-").concat(s),className:"flex justify-center items-center overflow-ellipsis",children:"+"}),e.payment_methods.map((function(e){return e.name})).join(", ").length>14&&Object(b.jsx)(m.a,{id:"".concat(t.fields.name,"-").concat(e.name,"-").concat(s),"aria-haspopup":"true",place:"top",effect:"solid",children:e.payment_methods.map((function(e,t){return Object(b.jsx)("p",{children:e.name},t)}))})]})]})}),e.limit&&Object(b.jsx)("td",{className:"px-2 py-1 sm:px-5 sm:py-3",children:Object(b.jsx)("div",{className:"text-sm truncate w-24",children:e.limit})})]})},s)})),t.fields.providers[O][s].length>4&&Object(b.jsx)("tbody",{onClick:function(){P["".concat(w,"-").concat(t.fields.id,"-").concat(s)]=!P["".concat(w,"-").concat(t.fields.id,"-").concat(s)],_(Object(c.a)({},P))},children:Object(b.jsx)("tr",{children:Object(b.jsx)("td",{className:"px-2 py-1 sm:px-5 sm:py-3 cursor-pointer underline",children:!P["".concat(w,"-").concat(t.fields.id,"-").concat(s)]&&e("Ver m\xe1s")||e("Ver menos")})})})]})},n)}))})})})]},s)}))},s)})),0===Object.values(d).length&&Object(n.a)(Array(3)).map((function(e,t){return Object(b.jsxs)("div",{className:"animate-pulse justify-between flex flex-row xl:ml-52 xl:mr-52 mt-8 bg-gray-700 overflow-x-auto h-80",children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{className:"animate-pulse bg-gray-900 w-32 sm:w-96 h-14 ml-12 mt-16"}),Object(b.jsx)("div",{className:"animate-pulse bg-gray-900 w-32 sm:w-96 h-14 ml-12 mt-4"}),Object(b.jsx)("div",{className:"animate-pulse bg-gray-900 w-32 sm:w-96 h-14 ml-12 mt-4"})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{className:"animate-pulse bg-gray-900 w-32 sm:w-96 h-14 ml-12 mr-12 mt-16"}),Object(b.jsx)("div",{className:"animate-pulse bg-gray-900 w-32 sm:w-96 h-14 ml-12 mr-12 mt-4"}),Object(b.jsx)("div",{className:"animate-pulse bg-gray-900 w-32 sm:w-96 h-14 ml-12 mr-12 mt-4"})]})]},t)}))]})]})}}}]);