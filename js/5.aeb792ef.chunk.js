(this["webpackJsonpfront-in-react"]=this["webpackJsonpfront-in-react"]||[]).push([[5],{105:function(e,t,s){},109:function(e,t,s){"use strict";s.r(t),s.d(t,"default",(function(){return O}));var c,r=s(39),n=s(37),i=s(13),a=s(0),l=s(74),o=s(40),d=s(110),m=s(73),j=s(111),x=s(90),b=s.n(x),p=s(16),h=s(103),u=(s(104),s(105),s(41)),f=s(1);function O(){var e=Object(l.a)().t,t=Object(a.useState)({}),s=Object(i.a)(t,2),x=s[0],O=s[1],g=Object(a.useState)({}),v=Object(i.a)(g,2),w=v[0],N=v[1],y=Object(a.useState)(""),k=Object(i.a)(y,2),C=k[0],_=k[1],P=Object(a.useState)(""),U=Object(i.a)(P,2),S=U[0],B=U[1],T=Object(a.useState)({}),R=Object(i.a)(T,2),D=R[0],Y=R[1],A=Object(a.useState)(10),E=Object(i.a)(A,2),V=E[0],F=E[1],M=Object(a.useState)(c.ByCoin),z=Object(i.a)(M,2),G=z[0],I=z[1];function J(e){O({}),I(e.target.value)}var L=Object(a.useState)(!1),$=Object(i.a)(L,2),q=$[0],H=$[1],K={responsive:{desktop:{breakpoint:{max:9999,min:769},items:2},mobile:{breakpoint:{max:768,min:0},items:1}}},Q=function(e){var t=e.active,s=e.onClick;return Object(f.jsx)("li",{className:"inline-block",onClick:function(){return s&&s()},children:Object(f.jsx)("label",{className:["cursor-pointer block text-4xl text-white",t||"text-gray-700"].join(" "),children:"\u2022"})})};return Object(o.a)((function(){fetch("/".concat(window.COUNTRY,"/p2p-data?viewType=").concat(c[G])).then((function(e){return e.json()})).then((function(e){var t=Object.values(e).find((function(e){return void 0!==e}));if(t){var s=Object.values(t).find((function(e){return void 0!==e})),c=Object.keys(s.fields.providers).find((function(e){return void 0!==e}));_(c)}O(e)})).catch((function(){return O({})}))}),6e4,G),Object(o.a)((function(){G===c.ByCoin&&S&&-1===["DAI","USDC","USDT","BUSD"].indexOf(S.toUpperCase())?fetch("/".concat(window.COUNTRY,"/coin-stats/").concat(S,"?simple=true")).then((function(e){return e.json()})).then((function(e){return N(e)})).catch((function(){return N({})})):N({})}),6e4,G,S),Object(a.useEffect)((function(){F(G===c.ByCoin?10:4)}),[G]),Object(f.jsxs)(d.a.Group,{onChange:function(e){return B(Object.keys(x)[e])},children:[Object(f.jsxs)(d.a.List,{className:"flex p-1 space-x-1 xl:ml-52 xl:mr-52 bg-gray-800 sticky top-0 z-10 overflow-x-auto no-scrollbar",children:[Object.keys(x).map((function(e,t){return 0===t&&!S&&B(e),Object(f.jsxs)(d.a,{className:function(e){return["min-w-max p-2.5 sm:w-full text-sm font-medium flex justify-center",e.selected&&"border-b-2 border-blue-400"].join(" ")},children:[Object(f.jsx)("img",{src:x[e][Object.keys(x[e])[0]].fields.coin_icon,className:"w-5 h-5 mr-1"}),Object(f.jsx)("p",{children:e.toUpperCase()})]},t)})),0===Object.keys(x).length&&Object(n.a)(Array(5)).map((function(e,t){return Object(f.jsx)("div",{className:"animate-pulse w-screen h-12 bg-gray-700"},t)}))]}),Object(f.jsxs)("h2",{className:"pl-5 pr-5 pt-5 xl:pl-0 xl:pr-0 xl:pt-5 xl:ml-52 xl:mr-52",children:[e("Compara f\xe1cilmente anuncios P2P de Bitcoin en distintas plataformas y elige el m\xe1s conveniente. Para tener una mejor experiencia,",{coin:e(S.toUpperCase())})," ",Object(f.jsx)("a",{className:"underline text-blue-400 hover:text-blue-600",href:"".concat("br"!=window.COUNTRY?"/"+window.COUNTRY:"","/blog/").concat(e("tips-para-operar-p2p")),children:e("te acercamos algunos consejos para operar P2P")}),"."]}),Object(f.jsxs)("p",{onClick:function(){return H(!0)},className:"pt-8 pl-5 xl:pl-0 xl:ml-52 cursor-pointer",children:[Object(f.jsx)(p.a,{className:"inline-block fill-current h-5 w-5 align-text-top mr-1"}),e("Preferencias")]}),Object(f.jsx)(m.a,{appear:!0,show:q,as:a.Fragment,children:Object(f.jsx)(j.a,{as:"div",className:"fixed inset-0 z-10 overflow-y-auto",onClose:function(){return H(!1)},children:Object(f.jsxs)("div",{className:"min-h-screen px-4 text-center",children:[Object(f.jsx)(j.a.Overlay,{className:"fixed inset-0 backdrop-filter backdrop-blur-sm"}),Object(f.jsx)("span",{className:"inline-block h-screen align-middle","aria-hidden":"true",children:"\u200b"}),Object(f.jsx)(m.a.Child,{as:a.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:Object(f.jsxs)("div",{className:"inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-gray-900 shadow-xl",children:[Object(f.jsx)(j.a.Title,{as:"h3",className:"text-lg font-medium leading-6 text-white inline-block",children:e("Preferencias")}),Object(f.jsx)("div",{className:"mt-2 grid grid-flow-row text-white",children:Object(f.jsxs)("div",{className:"grid grid-flow-col",children:[Object(f.jsx)("p",{children:e("Vista")}),Object(f.jsxs)("div",{className:"grid grid-flow-col",children:[Object(f.jsxs)("label",{className:"inline-flex items-center cursor-pointer",children:[Object(f.jsx)("input",{type:"radio",className:"form-radio text-gray-600",value:c.ByCoin,checked:G===c.ByCoin,onChange:J}),Object(f.jsx)("span",{className:"ml-1",children:e("Unificada")})]}),Object(f.jsxs)("label",{className:"inline-flex items-center cursor-pointer",children:[Object(f.jsx)("input",{type:"radio",className:"form-radio text-gray-600",value:c.ByProvider,checked:G===c.ByProvider,onChange:J}),Object(f.jsx)("span",{className:"ml-1",children:e("Por plataforma")})]})]})]})}),Object(f.jsx)("div",{className:"mt-4 text-right",children:Object(f.jsx)("button",{type:"button",className:"inline-flex justify-center px-4 py-2 text-sm font-medium text-black bg-white border border-transparent hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-500",onClick:function(){return H(!1)},children:e("Guardar")})})]})})]})})}),Object(f.jsxs)(d.a.Panels,{className:"mt-2 pb-5",children:[Object.values(x).map((function(t,s){return Object(f.jsx)(d.a.Panel,{children:Object.values(t).filter((function(e){return e.fields.providers[C].ask.length>0||e.fields.providers[C].bid.length>0})).map((function(t,s){return Object(f.jsxs)("div",{className:["flex flex-col xl:ml-52 xl:mr-52 border-2 border-gray-600 overflow-x-auto",s>0?"mt-8":"mt-1"].join(" "),children:[Object(f.jsx)("div",{className:"bg-gray-600",children:Object(f.jsx)("div",{className:"py-3 px-3 sm:px-6 lg:px-8",children:Object(f.jsx)("div",{className:"flex items-center justify-between flex-wrap",children:Object(f.jsx)("div",{className:"w-0 flex-1 flex items-center",children:G===c.ByProvider&&Object(f.jsxs)("span",{className:"text-white flex items-center",children:[Object(f.jsx)("img",{className:"w-5 h-5 mr-1",src:t.fields.icon}),Object(f.jsx)("a",{className:"font-medium",href:t.fields.url,target:"_blank",rel:"sponsored noreferrer",children:t.fields.name.replaceAll(" P2P","")}),t.fields.score&&t.fields.score.count>0&&Object(f.jsxs)("p",{className:"ml-1 font-light text-gray-400",children:[t.fields.score.rating,Object(f.jsx)(p.h,{className:"inline-block fill-current h-5 w-5 align-text-top"}),Object(f.jsx)("a",{className:"ml-1 underline",href:"".concat("br"!=window.COUNTRY?"/"+window.COUNTRY:"","/").concat(e("opiniones"),"/").concat(t.fields.id),children:e("Ver opiniones")})]})]})||Object(f.jsxs)("div",{className:"grid grid-flow-row",children:[Object(f.jsxs)("span",{className:"text-white flex items-center",children:[Object(f.jsx)("img",{className:"w-5 h-5 mr-1",src:t.fields.coin_icon}),Object(f.jsx)("h3",{className:"text-lg",children:t.fields.coin})]}),w.price&&Object(f.jsxs)("div",{className:"flex my-1",children:[Object(f.jsxs)("p",{className:"font-bold",children:["USD $ ",w.price]}),Object(f.jsx)("span",{className:["self-center mx-3 px-2 shadow-md rounded-full font-semibold text-sm",w.price_change_percentage_24h.indexOf("-")>-1?"bg-red-500":"bg-green-500"].join(" "),children:w.price_change_percentage_24h}),Object(f.jsx)("a",{className:"underline",target:"_blank norefeerer",href:"/".concat("br"!=window.COUNTRY?window.COUNTRY:"","/").concat("btc"===S?"bitcoin":"eth"===S?"ethereum":S),children:e("Ver estad\xedsticas")})]})]})})})})}),Object(f.jsx)("div",{className:"py-2 align-middle inline-block",children:Object(f.jsx)("div",{className:"border-gray-200",children:Object(f.jsx)(b.a,{responsive:K.responsive,arrows:!1,showDots:!0,customDot:Object(f.jsx)(Q,{}),children:Object(n.a)(Array("ask","bid")).map((function(s,n){return Object(f.jsx)("div",{className:"overflow-x-auto no-scrollbar",children:Object(f.jsxs)("table",{className:["mt-1 m-auto","bid"===s,0===t.fields.providers[C][s].length&&"flex items-center justify-center mt-5"].join(" "),children:[t.fields.providers[C][s].length>0&&Object(f.jsxs)("thead",{children:[Object(f.jsx)("tr",{children:Object(f.jsx)("th",{children:Object(f.jsx)("span",{className:"ml-1 sm:ml-4 px-2 py-1 text-xs font-bold text-blue-50 bg-blue-400 rounded mb-3",children:"ask"===s&&e("VENDEDORES")||e("COMPRADORES")})})}),Object(f.jsxs)("tr",{children:[Object(f.jsx)("th",{scope:"col",className:"px-1 py-1 sm:px-5 sm:py-3 text-left text-xs font-medium uppercase tracking-wider"}),Object(f.jsx)("th",{scope:"col",className:"px-1 py-1 sm:px-5 sm:py-3 text-left text-xs font-medium uppercase tracking-wider",children:e("PRECIO")}),t.fields.providers[C][s].filter((function(e){return e.limit}))&&Object(f.jsx)("th",{scope:"col",className:"px-1 py-1 sm:px-5 sm:py-3 text-left text-xs font-medium uppercase tracking-wider",children:e("VOLUMEN")})]})]})||Object(f.jsx)("tbody",{children:Object(f.jsx)("tr",{children:Object(f.jsx)("td",{children:Object(f.jsx)("p",{children:e("No hay ".concat("ask"==s?"vendedores":"compradores"," en este momento..."))})})})}),t.fields.providers[C][s].slice(0,!D["".concat(S,"-").concat(t.fields.id,"-").concat(s)]&&V||t.fields.providers[C][s].length).map((function(t,s){return Object(f.jsx)("tbody",{children:Object(f.jsxs)("tr",{children:[Object(f.jsx)("td",{className:"px-1 py-1 sm:px-5 sm:py-3 cursor-pointer min-w-min",onClick:function(){return window.open(t.url)},children:Object(f.jsxs)("div",{className:"grid grid-flow-col",children:[G===c.ByCoin&&Object(f.jsx)("img",{className:"w-7 h-7 pl-1 pl-1 self-center",src:t.provider_icon,"data-tip":!0,"data-for":t.provider_name}),Object(f.jsx)(h.a,{effect:"solid",id:t.provider_name,children:t.provider_name.replaceAll(" P2P","")}),Object(f.jsxs)("div",{className:"w-24 text-sm",children:[Object(f.jsxs)("span",{className:"flex",children:[Object(f.jsx)("p",{className:"truncate hover:overflow-clip hover:whitespace-normal hover:break-words",children:t.name}),t.pro_user&&Object(f.jsx)(p.b,{className:"inline-block fill-current text-yellow-400 h-5 w-5 align-bottom flex-shrink-0"})]}),0!=t.amount_of_orders&&Object(f.jsxs)("span",{className:"text-xs text-gray-400",children:[t.amount_of_orders," ",Object(f.jsx)(u.a,{className:"w-4 inline-block fill-current"})," ",t.success_rate,"%"]})]})]})}),Object(f.jsx)("td",{className:"px-1 py-1 sm:px-5 sm:py-3",children:Object(f.jsxs)("div",{className:"text-sm truncate w-32 grid grid-flow-row",children:[Object(f.jsx)("span",{children:t.price}),Object(f.jsx)("span",{className:"grid grid-flow-col gap-2 justify-start cursor-pointer text-gray-400 text-xs",children:Object(f.jsx)("p",{className:"truncate hover:overflow-clip hover:whitespace-normal hover:break-words",children:t.payment_methods.map((function(e){return e.name})).join(", ")})})]})}),t.limit&&Object(f.jsxs)("td",{className:"px-1 py-1 sm:px-5 sm:py-3 grid grid-flow-row",children:[Object(f.jsxs)("span",{className:"text-sm truncate w-24",children:[t.limit," ",S.toUpperCase()]}),(t.limit_min||t.limit_max)&&Object(f.jsxs)("span",{className:"text-xs truncate hover:overflow-clip hover:whitespace-normal hover:overflow-visible w-24 text-gray-400 cursor-pointer",children:[t.limit_min&&e("M\xedn")+":"+String.fromCharCode(8239)+t.limit_min+" ",t.limit_max&&e("M\xe1x")+":"+String.fromCharCode(8239)+t.limit_max]})]})]})},s)})),t.fields.providers[C][s].length>V&&Object(f.jsx)("tbody",{onClick:function(){D["".concat(S,"-").concat(t.fields.id,"-").concat(s)]=!D["".concat(S,"-").concat(t.fields.id,"-").concat(s)],Y(Object(r.a)({},D))},children:Object(f.jsx)("tr",{children:Object(f.jsx)("td",{className:"px-1 py-1 sm:px-5 sm:py-3 cursor-pointer underline",children:!D["".concat(S,"-").concat(t.fields.id,"-").concat(s)]&&e("Ver m\xe1s")||e("Ver menos")})})})]})},n)}))})})})]},s)}))},s)})),0===Object.values(x).length&&Object(n.a)(Array(3)).map((function(e,t){return Object(f.jsxs)("div",{className:["animate-pulse justify-between flex flex-row xl:ml-52 xl:mr-52 bg-gray-700 overflow-x-auto h-80",t>0?"mt-8":"mt-1"].join(" "),children:[Object(f.jsxs)("div",{children:[Object(f.jsx)("div",{className:"animate-pulse bg-gray-900 w-32 sm:w-96 h-14 ml-12 mt-16"}),Object(f.jsx)("div",{className:"animate-pulse bg-gray-900 w-32 sm:w-96 h-14 ml-12 mt-4"}),Object(f.jsx)("div",{className:"animate-pulse bg-gray-900 w-32 sm:w-96 h-14 ml-12 mt-4"})]}),Object(f.jsxs)("div",{children:[Object(f.jsx)("div",{className:"animate-pulse bg-gray-900 w-32 sm:w-96 h-14 ml-12 mr-12 mt-16"}),Object(f.jsx)("div",{className:"animate-pulse bg-gray-900 w-32 sm:w-96 h-14 ml-12 mr-12 mt-4"}),Object(f.jsx)("div",{className:"animate-pulse bg-gray-900 w-32 sm:w-96 h-14 ml-12 mr-12 mt-4"})]})]},t)}))]})]})}!function(e){e.ByProvider="ByProvider",e.ByCoin="ByCoin"}(c||(c={}))}}]);