(this["webpackJsonpfront-in-react"]=this["webpackJsonpfront-in-react"]||[]).push([[6],{106:function(e,t,s){},111:function(e,t,s){"use strict";s.r(t),s.d(t,"default",(function(){return g}));var c,r=s(20),n=s(39),i=s(7),a=s(0),l=s(74),o=s(41),d=s(80),m=s(112),j=s(73),b=s(113),x=s(91),p=s.n(x),u=s(16),f=s(104),h=(s(105),s(106),s(42)),O=s(1);function g(){var e=Object(d.useTracking)({}),t=(e.Track,e.trackEvent),s=Object(l.a)().t,x=Object(a.useState)({}),g=Object(i.a)(x,2),w=g[0],v=g[1],y=Object(a.useState)({}),N=Object(i.a)(y,2),k=N[0],_=N[1],C=Object(a.useState)(""),P=Object(i.a)(C,2),U=P[0],B=P[1],S=Object(a.useState)(""),T=Object(i.a)(S,2),R=T[0],D=T[1],Y=Object(a.useState)({}),E=Object(i.a)(Y,2),A=E[0],V=E[1],F=Object(a.useState)(10),M=Object(i.a)(F,2),z=M[0],G=M[1],I=Object(a.useState)(c.ByCoin),J=Object(i.a)(I,2),L=J[0],$=J[1],q=Object(a.useState)([]),H=Object(i.a)(q,2),K=H[0],Q=H[1],W=Object(a.useState)([]),X=Object(i.a)(W,2),Z=X[0],ee=X[1];function te(e){v({}),$(e.target.value)}function se(e){e=e.target.value;var t=Z.indexOf(e);-1!==t?t>-1&&ee(Z.filter((function(t){return t!==e}))):ee([].concat(Object(n.a)(Z),[e]))}var ce=Object(a.useState)(!1),re=Object(i.a)(ce,2),ne=re[0],ie=re[1],ae={responsive:{desktop:{breakpoint:{max:9999,min:769},items:2},mobile:{breakpoint:{max:768,min:0},items:1}}},le=function(e){var t=e.active,s=e.onClick;return Object(O.jsx)("li",{className:"inline-block",onClick:function(){return s&&s()},children:Object(O.jsx)("label",{className:["cursor-pointer block text-4xl text-white",t||"text-gray-700"].join(" "),children:"\u2022"})})};function oe(){return"br"!==window.COUNTRY&&Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("img",{onClick:function(){t({event:"user_action",event_category:"huobi_p2p_banner",event_label:"click"}),window.open("https://www.huobi.com/es-la/register/?inviter_id=11336010")},className:"cursor-pointer mx-auto my-2 sm:hidden",src:"https://www.cryptosaurio.com/static/img/sponsored/huobi-p2p-mobile.webp"}),Object(O.jsx)("img",{onClick:function(){t({event:"user_action",event_category:"huobi_p2p_banner",event_label:"click"}),window.open("https://www.huobi.com/es-la/register/?inviter_id=11336010")},className:"cursor-pointer mx-auto my-2 hidden sm:block",src:"https://www.cryptosaurio.com/static/img/sponsored/huobi-p2p-desktop.webp"})]})||null}return Object(o.a)((function(){fetch("/".concat(window.COUNTRY,"/p2p-data?viewType=").concat(c[L])).then((function(e){return e.json()})).then((function(e){Q(e.providers),e=e.offers;var t=Object.values(e).find((function(e){return void 0!==e}));if(t){var s=Object.values(t).find((function(e){return void 0!==e})),c=Object.keys(s.fields.providers).find((function(e){return void 0!==e}));B(c)}v(e)})).catch((function(){return v({})}))}),6e4,L),Object(o.a)((function(){L===c.ByCoin&&R&&-1===["DAI","USDC","USDT","BUSD"].indexOf(R.toUpperCase())?fetch("/".concat(window.COUNTRY,"/coin-stats/").concat(R,"?simple=true")).then((function(e){return e.json()})).then((function(e){return _(e)})).catch((function(){return _({})})):_({})}),6e4,L,R),Object(a.useEffect)((function(){G(L===c.ByCoin?10:4)}),[L]),"br"!==window.COUNTRY&&t({event:"system_action",event_category:"huobi_p2p_banner",event_label:"show"}),Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(oe,{}),Object(O.jsxs)(m.a.Group,{onChange:function(e){return D(Object.keys(w)[e])},children:[Object(O.jsxs)(m.a.List,{className:"flex p-1 space-x-1 xl:ml-52 xl:mr-52 bg-gray-800 sticky top-0 z-10 overflow-x-auto no-scrollbar",children:[Object.keys(w).map((function(e,t){return 0===t&&!R&&D(e),Object(O.jsxs)(m.a,{className:function(e){return["min-w-max p-2.5 sm:w-full text-sm font-medium flex justify-center",e.selected&&"border-b-2 border-blue-400"].join(" ")},children:[Object(O.jsx)("img",{src:w[e][Object.keys(w[e])[0]].fields.coin_icon,className:"w-5 mr-1"}),Object(O.jsx)("p",{children:e.toUpperCase()})]},t)})),0===Object.keys(w).length&&Object(n.a)(Array(5)).map((function(e,t){return Object(O.jsx)("div",{className:"animate-pulse w-screen h-12 bg-gray-700"},t)}))]}),Object(O.jsxs)("h2",{className:"pl-5 pr-5 pt-5 xl:pl-0 xl:pr-0 xl:pt-5 xl:ml-52 xl:mr-52",children:[s("Compara f\xe1cilmente anuncios P2P de {{coin}} en distintas plataformas y elige el m\xe1s conveniente. Para tener una mejor experiencia,",{coin:s(R.toUpperCase())})," ",Object(O.jsx)("a",{target:"_blank",rel:"noreferrer",className:"underline text-blue-400 hover:text-blue-600",href:"".concat("br"!=window.COUNTRY?"/"+window.COUNTRY:"","/blog/").concat(s("tips-para-operar-p2p")),children:s("te acercamos algunos consejos para operar P2P")}),"."]}),Object(O.jsxs)("p",{onClick:function(){return ie(!0)},className:"mt-8 pl-5 xl:pl-0 xl:ml-52 cursor-pointer inline-flex items-center",children:[Object(O.jsx)(u.a,{className:"inline-block fill-current w-5 h-full align-text-top mr-1"}),s("Preferencias")]}),Object(O.jsx)(j.a,{appear:!0,show:ne,as:a.Fragment,children:Object(O.jsx)(b.a,{as:"div",className:"fixed inset-0 z-10 overflow-y-auto",onClose:function(){return ie(!1)},children:Object(O.jsxs)("div",{className:"min-h-screen px-4 text-center",children:[Object(O.jsx)(b.a.Overlay,{className:"fixed inset-0 backdrop-filter backdrop-blur-sm"}),Object(O.jsx)("span",{className:"inline-block h-screen align-middle","aria-hidden":"true",children:"\u200b"}),Object(O.jsx)(j.a.Child,{as:a.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:Object(O.jsxs)("div",{className:"inline-block w-full max-w-lg p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-gray-900 shadow-xl",children:[Object(O.jsx)(b.a.Title,{as:"h3",className:"text-lg font-medium leading-6 text-white inline-block",children:s("Preferencias")}),Object(O.jsxs)("div",{className:"mt-2 flex flex-col gap-3 text-white",children:[Object(O.jsxs)("div",{className:"flex flex-row",children:[Object(O.jsx)("p",{className:"w-32 pr-5",children:s("Vista")}),Object(O.jsxs)("div",{className:"flex flex-col sm:flex-row w-full gap-2",children:[Object(O.jsxs)("label",{className:"inline-flex items-center cursor-pointer",children:[Object(O.jsx)("input",{type:"radio",className:"form-radio text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-700",value:c.ByCoin,checked:L===c.ByCoin,onChange:te}),Object(O.jsx)("span",{className:"ml-1",children:s("Unificada")})]}),Object(O.jsxs)("label",{className:"inline-flex items-center cursor-pointer",children:[Object(O.jsx)("input",{type:"radio",className:"form-radio text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-700",value:c.ByProvider,checked:L===c.ByProvider,onChange:te}),Object(O.jsx)("span",{className:"ml-1",children:s("Por plataforma")})]})]})]}),K.length>0&&Object(O.jsxs)("div",{className:"flex flex-row",children:[Object(O.jsx)("p",{className:"w-32",children:s("Plataformas")}),Object(O.jsx)("div",{className:"flex flex-row w-full flex-wrap",children:K.map((function(e,t){return Object(O.jsxs)("label",{className:"inline-flex items-center cursor-pointer p-1",children:[Object(O.jsx)("input",{type:"checkbox",className:"form-radio text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-700",value:e.id,onChange:se,checked:-1===Z.indexOf(e.id)}),Object(O.jsx)("span",{className:"ml-1",children:e.name})]},t)}))})]})]}),Object(O.jsx)("div",{className:"mt-4 text-right",children:Object(O.jsx)("button",{type:"button",className:"inline-flex justify-center px-4 py-2 text-sm font-medium text-black bg-white border border-transparent hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-500",onClick:function(){return ie(!1)},children:s("Guardar")})})]})})]})})}),Object(O.jsxs)(m.a.Panels,{className:"mt-2 pb-5",children:[Object.values(w).map((function(e,t){return Object(O.jsx)(m.a.Panel,{children:Object.values(e).filter((function(e){return L===c.ByProvider&&-1===Z.indexOf(e.fields.id)||L===c.ByCoin})).filter((function(e){return e.fields.providers[U].ask.length>0||e.fields.providers[U].bid.length>0})).map((function(e,t){return Object(O.jsxs)("div",{className:["flex flex-col xl:ml-52 xl:mr-52 border-2 border-gray-600 overflow-x-auto",t>0?"mt-8":"mt-1"].join(" "),children:[Object(O.jsx)("div",{className:"bg-gray-600",children:Object(O.jsx)("div",{className:"py-3 px-3 sm:px-6 lg:px-8",children:Object(O.jsx)("div",{className:"flex items-center justify-between flex-wrap",children:Object(O.jsx)("div",{className:"w-0 flex-1 flex items-center",children:L===c.ByProvider&&Object(O.jsxs)("span",{className:"text-white flex items-center",children:[Object(O.jsx)("img",{className:"w-5 mr-1",src:e.fields.icon}),Object(O.jsx)("a",{className:"font-medium",href:e.fields.url,target:"_blank",rel:"sponsored noreferrer",children:e.fields.name&&e.fields.name.replaceAll(" P2P","")}),e.fields.score&&e.fields.score.count>0&&Object(O.jsxs)("p",{className:"ml-1 font-light text-gray-400",children:[e.fields.score.rating,Object(O.jsx)(u.h,{className:"inline-block fill-current w-5 h-full align-text-top"}),Object(O.jsx)("a",{className:"ml-1 underline",href:"".concat("br"!=window.COUNTRY?"/"+window.COUNTRY:"","/").concat(s("opiniones"),"/").concat(e.fields.id),children:s("Ver opiniones")})]})]})||Object(O.jsxs)("div",{className:"grid grid-flow-row",children:[Object(O.jsxs)("span",{className:"text-white flex items-center",children:[Object(O.jsx)("img",{className:"w-5 mr-1",src:e.fields.coin_icon}),Object(O.jsx)("h3",{className:"text-lg",children:e.fields.coin})]}),k.price&&Object(O.jsxs)("div",{className:"flex my-1",children:[Object(O.jsxs)("p",{className:"font-bold",children:["USD $ ",k.price]}),Object(O.jsx)("span",{className:["self-center mx-3 px-2 shadow-md rounded-full font-semibold text-sm",k.price_change_percentage_24h.indexOf("-")>-1?"bg-red-500":"bg-green-500"].join(" "),children:k.price_change_percentage_24h}),Object(O.jsx)("a",{className:"underline",target:"_blank norefeerer",href:"/".concat("br"!=window.COUNTRY?window.COUNTRY:"","/").concat("btc"===R?"bitcoin":"eth"===R?"ethereum":R),children:s("Ver estad\xedsticas")})]})]})})})})}),Object(O.jsx)("div",{className:"py-2 align-middle inline-block",children:Object(O.jsx)("div",{className:"border-gray-200",children:Object(O.jsx)(p.a,{responsive:ae.responsive,arrows:!1,showDots:!0,customDot:Object(O.jsx)(le,{}),children:Object(n.a)(Array("ask","bid")).map((function(t,n){return Object(O.jsx)("div",{className:"overflow-x-auto no-scrollbar",children:Object(O.jsxs)("table",{className:["mt-1 m-auto","bid"===t,0===e.fields.providers[U][t].length&&"flex items-center justify-center mt-5"].join(" "),children:[e.fields.providers[U][t].length>0&&Object(O.jsxs)("thead",{children:[Object(O.jsx)("tr",{children:Object(O.jsx)("th",{children:Object(O.jsx)("span",{className:"ml-1 sm:ml-4 px-2 py-1 text-xs font-bold text-blue-50 bg-blue-400 rounded mb-3",children:"ask"===t&&s("VENDEDORES")||s("COMPRADORES")})})}),Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{scope:"col",className:"px-1 py-1 sm:px-5 sm:py-3 text-left text-xs font-medium uppercase tracking-wider"}),Object(O.jsx)("th",{scope:"col",className:"px-1 py-1 sm:px-5 sm:py-3 text-left text-xs font-medium uppercase tracking-wider",children:s("PRECIO")}),e.fields.providers[U][t].filter((function(e){return e.limit})).length>0&&Object(O.jsx)("th",{scope:"col",className:"px-1 py-1 sm:px-5 sm:py-3 text-left text-xs font-medium uppercase tracking-wider",children:s("VOLUMEN")})]})]})||Object(O.jsx)("tbody",{children:Object(O.jsx)("tr",{children:Object(O.jsx)("td",{children:Object(O.jsx)("p",{children:s("No hay ".concat("ask"==t?"vendedores":"compradores"," en este momento..."))})})})}),e.fields.providers[U][t].slice(0,!A["".concat(R,"-").concat(e.fields.id,"-").concat(t)]&&z||e.fields.providers[U][t].length).filter((function(e){return L===c.ByCoin&&-1===Z.indexOf(e.provider_id)||L===c.ByProvider})).map((function(e,t){return Object(O.jsx)("tbody",{children:Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{className:"px-1 py-1 sm:px-5 sm:py-3 cursor-pointer min-w-min",children:Object(O.jsxs)("a",{className:"grid grid-flow-col",href:e.url,target:"_blank",rel:"noreferrer",children:[L===c.ByCoin&&Object(O.jsx)("img",{className:"w-5 sm:w-7 mr-2 self-center",src:e.provider_icon,"data-tip":!0,"data-for":e.provider_name}),Object(O.jsx)(f.a,{effect:"solid",id:e.provider_name,children:e.provider_name.replaceAll(" P2P","")}),Object(O.jsxs)("div",{className:"w-24 text-sm self-center",children:[Object(O.jsxs)("span",{className:"flex",children:[Object(O.jsx)("p",{className:"truncate hover:overflow-clip hover:whitespace-normal hover:break-words",children:e.name}),e.pro_user&&Object(O.jsx)(u.b,{className:"inline-block fill-current text-yellow-400 w-5 h-full align-bottom flex-shrink-0"})]}),0!=e.amount_of_orders&&Object(O.jsxs)("span",{className:"text-xs text-gray-400",children:[e.amount_of_orders," ",Object(O.jsx)(h.a,{className:"w-4 inline-block fill-current"})," ",e.success_rate,"%"]})]})]})}),Object(O.jsx)("td",{className:"px-1 py-1 sm:px-5 sm:py-3",children:Object(O.jsxs)("div",{className:"text-sm truncate w-32 grid grid-flow-row",children:[Object(O.jsx)("span",{children:e.price}),Object(O.jsx)("span",{className:"grid grid-flow-col gap-2 justify-start cursor-pointer text-gray-400 text-xs",children:Object(O.jsx)("p",{className:"truncate hover:overflow-clip hover:whitespace-normal hover:break-words",children:e.payment_methods.map((function(e){return e.name})).join(", ")})})]})}),e.limit&&Object(O.jsxs)("td",{className:"px-1 py-1 sm:px-5 sm:py-3 grid grid-flow-row",children:[Object(O.jsxs)("span",{className:"text-sm truncate w-24",children:[e.limit," ",R.toUpperCase()]}),(e.limit_min||e.limit_max)&&Object(O.jsxs)("span",{className:"text-xs truncate hover:overflow-clip hover:whitespace-normal hover:overflow-visible w-24 text-gray-400 cursor-pointer",children:[e.limit_min&&s("M\xedn")+":"+String.fromCharCode(8239)+e.limit_min+" ",e.limit_max&&s("M\xe1x")+":"+String.fromCharCode(8239)+e.limit_max]})]})]})},t)})),e.fields.providers[U][t].length>z&&Object(O.jsx)("tbody",{onClick:function(){A["".concat(R,"-").concat(e.fields.id,"-").concat(t)]=!A["".concat(R,"-").concat(e.fields.id,"-").concat(t)],V(Object(r.a)({},A))},children:Object(O.jsx)("tr",{children:Object(O.jsx)("td",{className:"px-1 py-1 sm:px-5 sm:py-3 cursor-pointer underline",children:!A["".concat(R,"-").concat(e.fields.id,"-").concat(t)]&&s("Ver m\xe1s")||s("Ver menos")})})})]})},n)}))})})})]},t)}))},t)})),0===Object.values(w).length&&Object(n.a)(Array(3)).map((function(e,t){return Object(O.jsxs)("div",{className:["animate-pulse justify-between flex flex-row xl:ml-52 xl:mr-52 bg-gray-700 overflow-x-auto h-80",t>0?"mt-8":"mt-1"].join(" "),children:[Object(O.jsxs)("div",{children:[Object(O.jsx)("div",{className:"animate-pulse bg-gray-900 w-32 sm:w-96 h-14 ml-12 mt-16"}),Object(O.jsx)("div",{className:"animate-pulse bg-gray-900 w-32 sm:w-96 h-14 ml-12 mt-4"}),Object(O.jsx)("div",{className:"animate-pulse bg-gray-900 w-32 sm:w-96 h-14 ml-12 mt-4"})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("div",{className:"animate-pulse bg-gray-900 w-32 sm:w-96 h-14 ml-12 mr-12 mt-16"}),Object(O.jsx)("div",{className:"animate-pulse bg-gray-900 w-32 sm:w-96 h-14 ml-12 mr-12 mt-4"}),Object(O.jsx)("div",{className:"animate-pulse bg-gray-900 w-32 sm:w-96 h-14 ml-12 mr-12 mt-4"})]})]},t)}))]})]})]})}!function(e){e.ByProvider="ByProvider",e.ByCoin="ByCoin"}(c||(c={}))}}]);