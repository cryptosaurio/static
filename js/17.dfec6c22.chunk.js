(this["webpackJsonpfront-in-react"]=this["webpackJsonpfront-in-react"]||[]).push([[17],{138:function(e,t,n){},139:function(e,t,n){"use strict";var r=n(0),c=n.n(r),a=n(1);function s(e){var t=e.active,n=e.onClick;return Object(a.jsx)("li",{className:"inline-block",onClick:function(){return n&&n()},children:Object(a.jsx)("label",{className:["cursor-pointer block text-4xl text-white",t||"text-gray-700"].join(" "),children:"\u2022"})})}var i=function(e,t){return e.active===t.active};t.a=c.a.memo(s,i)},140:function(e,t,n){"use strict";function r(){return{responsive:{desktop:{breakpoint:{max:9999,min:769},items:2},mobile:{breakpoint:{max:768,min:0},items:1}},fixed:{desktop:{breakpoint:{max:9999,min:0},items:1}}}}n.d(t,"a",(function(){return r}))},143:function(e,t,n){"use strict";var r=n(0),c=n.n(r),a=n(32),s=n(145),i=n.n(s),o=(n(146),n(138),n(34)),l=n(139),b=n(140),d=n(1);function j(e){var t=e.location,n={page:t,country:window.COUNTRY},r=Object(a.useTracking)(n),c=(r.Track,r.trackEvent),s=Object(o.a)(window.COUNTRY,t,"opportunityBanner");return"home"===t&&(s=s.slice(0,1)),(s=s.sort((function(){return.5-Math.random()}))).forEach((function(e){var t={event:"system_action",event_category:"".concat(e.provider,"_").concat(e.location,"_").concat(e.type),event_label:"show"};"production"===window.ENV?c(t):console.log(n,t)})),Object(d.jsx)(i.a,{className:"rolls-carousel",responsive:Object(b.a)().fixed,renderDotsOutside:!0,showDots:s.length>1,infinite:s.length>1,autoPlay:s.length>1,autoPlaySpeed:4e3,customDot:Object(d.jsx)(l.a,{}),arrows:!1,children:s.map((function(e,t){var r={event:"user_action",event_category:"".concat(e.provider,"_").concat(e.location,"_").concat(e.type),event_label:"click"};return Object(d.jsxs)("picture",{onClick:function(){"production"===window.ENV?c(r):console.log(n,r),window.open(e.sponsoredUrl)},children:[Object(d.jsx)("source",{srcSet:e.mobileImgUrl,media:"(max-width: 639px)",width:"400",height:e.mobileImgHeightOverride||"100"}),Object(d.jsx)("source",{srcSet:e.desktopImgUrl,media:"(min-width: 640px)",width:"820",height:e.desktopImgHeightOverride||"100"}),Object(d.jsx)("img",{className:"cursor-pointer mx-auto my-2",src:e.desktopImgUrl,width:"820",height:e.desktopImgHeightOverride||"100"})]},t)}))})}t.a=c.a.memo(j,(function(e,t){return e.location===t.location}))},290:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return _}));var r,c=n(20),a=n(4),s=n(31),i=n(0),o=n(129),l=n(192),b=n(143),d=n(136),j=n(312),u=n(314),m=n(291),h=n(226),g=n(310),f=n(313),x=n(309),O=n(311),p=n(32),v=n(6),y=n(2),w=n(1),N=Object(d.a)(m.a)((function(e){var t,n=e.theme;return t={},Object(s.a)(t,"&.".concat(h.a.head),{backgroundColor:"rgba(75,85,99,var(--tw-bg-opacity))",color:n.palette.common.white}),Object(s.a)(t,"&.".concat(h.a.body),{fontSize:14,color:n.palette.common.white,borderBottom:"none"}),t})),k=Object(d.a)(x.a)((function(e){e.theme;return{"&:nth-of-type(odd), &:nth-of-type(odd) th:first-of-type":{backgroundColor:"rgba(55, 65, 81, var(--tw-bg-opacity))"},"&:nth-of-type(even), &:nth-of-type(even) th:first-of-type":{backgroundColor:"rgba(31, 41, 55, var(--tw-bg-opacity))"},"&:last-child td, &:last-child th":{border:0}}}));function _(){var e={page:"invest",country:window.COUNTRY},t=Object(p.useTracking)(e),n=(t.Track,t.trackEvent),s=Object(o.a)().t,d=Object(y.g)(),m=Object(y.h)().section;Object(i.useEffect)((function(){var t={event:"pageview"};"production"===window.ENV?n(t):console.log(e,t)}),[]);var h=Object(i.useState)(m&&r[m.charAt(0).toUpperCase()+m.slice(1).toLowerCase()]||r.Staking),_=Object(a.a)(h,2),C=_[0],S=_[1],U=Object(i.useState)(null),T=Object(a.a)(U,2),R=T[0],I=T[1],P=Object(i.useState)(null),Y=Object(a.a)(P,2),F=Y[0],L=Y[1],A=Object(i.useState)(null),E=Object(a.a)(A,2),B=E[0],D=E[1],q=Object(i.useState)(null),M=Object(a.a)(q,2),z=M[0],J=M[1],H=Object(i.useState)(null),V=Object(a.a)(H,2),G=V[0],K=V[1],Q=Object(i.useState)(null),W=Object(a.a)(Q,2),X=W[0],Z=W[1];return Object(i.useEffect)((function(){R||C!==r.Staking?z||C!==r.Farming||fetch("br"!==window.COUNTRY?"".concat(window.API_URL,"/").concat(window.COUNTRY,"/farming-rates"):"".concat(window.BR_API_URL,"/farming-rates")).then((function(e){return e.json()})).then((function(e){J(e)})).catch((function(){return J(null)})):fetch("br"!==window.COUNTRY?"".concat(window.API_URL,"/").concat(window.COUNTRY,"/staking-rates"):"".concat(window.BR_API_URL,"/staking-rates")).then((function(e){return e.json()})).then((function(e){I(e),L(Object(c.a)({},e));var t=JSON.parse(JSON.stringify(e.list)),n=Object.values(t).filter((function(e){return e.coins.filter((function(e){return e.best_stable})).length})).sort((function(e,t){return t.coins.filter((function(e){return e.best_stable}))[0].rate-e.coins.filter((function(e){return e.best_stable}))[0].rate}))[0];n.coins=n.coins.filter((function(e){return e.best_stable})),K(n);var r=Object.values(t).filter((function(e){return e.coins.filter((function(e){return e.best_volatile})).length})).sort((function(e,t){return t.coins.filter((function(e){return e.best_volatile}))[0].rate-e.coins.filter((function(e){return e.best_volatile}))[0].rate}))[0];r.coins=r.coins.filter((function(e){return e.best_volatile})),Z(r)})).catch((function(){return I(null)}))}),[C]),Object(w.jsxs)(l.a.Group,{defaultIndex:C,onChange:function(e){S(e),d("".concat(s("/invertir/")).concat(r[e].toLowerCase()))},children:[Object(w.jsx)(l.a.List,{className:"flex px-5 py-1 space-x-1 bg-gray-800 sticky top-0 z-10 overflow-x-auto no-scrollbar",children:[r.Staking,r.Farming].map((function(e,t){return Object(w.jsx)(l.a,{className:function(e){return["min-w-max p-2.5 text-sm font-medium flex justify-center",e.selected&&"border-b-2 border-blue-400"].join(" ")},children:Object(w.jsx)("h2",{children:Object(w.jsx)("a",{target:"_blank",rel:"noreferrer",href:"br"!==window.COUNTRY?"/".concat(window.COUNTRY,"/invertir/").concat(r[t].toLowerCase()):"/investir/".concat(r[t].toLowerCase()),onClick:function(e){return e.preventDefault()},children:r[t]})})},t)}))}),Object(w.jsxs)(l.a.Panels,{className:"mt-2 pb-5 px-5",children:[Object(w.jsxs)(l.a.Panel,{children:[Object(w.jsxs)("h3",{children:[s("Manten tus criptomonedas almacenadas y obten recompensas. Te mostramos el rendimiento anual de las principales plataformas de staking."),"\xa0",Object(w.jsx)("a",{href:"/blog/staking",className:"underline text-blue-400 hover:text-blue-600",target:"_blank",rel:"noreferrer",children:s("Saber m\xe1s sobre Staking")})]}),Object(w.jsxs)("div",{className:"py-4",children:[Object(w.jsxs)("h4",{className:"text-xl flex pb-4 self-center",children:[Object(w.jsx)(v.q,{className:"w-7 h-7 mr-1","aria-hidden":"true"}),s("Mejores rendimientos ahora mismo")]}),Object(w.jsxs)("div",{className:"grid md:grid-cols-4 gap-5 text-center",children:[Object(w.jsxs)("div",{className:"grid grid-flow-row gap-2 bg-gray-700 py-3 px-3 sm:px-6 lg:px-8 rounded-lg col-span-1",children:[Object(w.jsx)("h2",{children:s("Mejor rendimiento con stablecoins")}),G&&Object(w.jsxs)(w.Fragment,{children:[Object(w.jsxs)("p",{className:"text-green-400 font-bold",children:[G.coins[0].rate,"% APY ",s("con")," ",G.coins[0].symbol]}),Object(w.jsx)("a",{href:G.url,target:"_blank",rel:"sponsored noreferrer",children:G.name})]})||Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)("span",{className:"animate-pulse m-auto sm:h-5 h-4 w-32 bg-gray-500 rounded mb-2 sm:mb-0 mt-2 sm:mt-0"}),Object(w.jsx)("span",{className:"animate-pulse m-auto mb-0 sm:-mt-1 sm:h-5 h-4 w-24 bg-gray-500 rounded"})]})]}),Object(w.jsx)("div",{className:"grid grid-flow-row",children:Object(w.jsxs)("div",{className:"grid grid-flow-row gap-2 bg-gray-700 py-3 px-3 sm:px-6 lg:px-8 rounded-lg col-span-1",children:[Object(w.jsx)("h2",{children:s("Mejor rendimiento con criptomonedas vol\xe1tiles")}),X&&Object(w.jsxs)(w.Fragment,{children:[Object(w.jsxs)("p",{className:"text-green-400 font-bold",children:[X.coins[0].rate,"% APY ",s("con")," ",X.coins[0].symbol]}),Object(w.jsx)("a",{href:X.url,target:"_blank",rel:"sponsored noreferrer",children:X.name})]})||Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)("span",{className:"animate-pulse m-auto sm:h-5 h-4 w-32 bg-gray-500 rounded mb-1 mt-1 sm:mb-0"}),Object(w.jsx)("span",{className:"animate-pulse m-auto sm:h-5 h-4 mt-2 sm:mt-1 w-24 bg-gray-500 rounded"})]})]})})]})]}),Object(w.jsx)(b.a,{location:"staking"}),Object(w.jsx)("h4",{className:"text-xl pb-4",children:s("Tabla comparativa de Staking")}),R&&Object(w.jsx)(g.a,{component:O.a,children:Object(w.jsxs)(j.a,{children:[Object(w.jsx)(f.a,{children:Object(w.jsxs)(x.a,{children:[Object(w.jsx)(N,{className:"z-10"}),R.coins.map((function(e,t){return Object(w.jsx)(N,{className:"cursor-pointer",align:"center",onClick:function(){return function(e){if(B===e)I(Object(c.a)({},F)),D(null);else{D(e);var t=Object.keys(R.list).sort((function(t,n){return"-"!==R.list[n].coins.filter((function(t){return t.symbol===e}))[0].rate&&"-"!==R.list[t].coins.filter((function(t){return t.symbol===e}))[0].rate?R.list[n].coins.filter((function(t){return t.symbol===e}))[0].rate>R.list[t].coins.filter((function(t){return t.symbol===e}))[0].rate?1:R.list[n].coins.filter((function(t){return t.symbol===e}))[0].rate<R.list[t].coins.filter((function(t){return t.symbol===e}))[0].rate?-1:0:"-"===R.list[t].coins.filter((function(t){return t.symbol===e}))[0].rate?1:"-"===R.list[n].coins.filter((function(t){return t.symbol===e}))[0].rate?-1:0}));I({list:t.map((function(e){return R.list[e]})),coins:R.coins})}}(e)},children:e},t)}))]})}),Object(w.jsx)(u.a,{children:Object.keys(R.list).map((function(e,t){var n=R.list[e];return Object(w.jsxs)(k,{children:[Object(w.jsx)(N,{component:"th",scope:"row",className:"sticky left-0",children:Object(w.jsxs)("span",{className:"sm:flex inline whitespace-pre",children:[Object(w.jsx)("a",{href:n.url,target:"_blank",rel:"sponsored noreferrer",className:"text-base",children:n.name}),"\xa0",Object(w.jsx)("p",{className:["text-xs self-center","DAILY"===n.paymentFrequency?"text-green-400":"text-gray-400"].join(" "),children:s(n.paymentFrequency)})]})}),n.coins.map((function(e,t){return Object(w.jsx)(N,{align:"center",children:Object(w.jsxs)("p",{className:e.best&&"text-green-400",children:[e.rate,"-"!==e.rate&&"%"]})},t)}))]},t)}))})]})})||Object(w.jsxs)("div",{className:"animate-pulse",children:[Object(w.jsx)("div",{className:"h-4 bg-gray-400 mt-3 mb-6 rounded"}),Object(w.jsx)("div",{className:"h-4 bg-gray-500 mb-6 rounded"}),Object(w.jsx)("div",{className:"h-4 bg-gray-400 mb-6 rounded"}),Object(w.jsx)("div",{className:"h-4 bg-gray-500 mb-6 rounded"}),Object(w.jsx)("div",{className:"h-4 bg-gray-400 mb-6 rounded"}),Object(w.jsx)("div",{className:"h-4 bg-gray-400 mb-6 rounded"}),Object(w.jsx)("div",{className:"h-4 bg-gray-400 mb-6 rounded"})]})]},0),Object(w.jsxs)(l.a.Panel,{children:[Object(w.jsxs)("h3",{children:[s("Deposita tus criptomonedas para dar liquidez y obten\xe9 fees por cada operaci\xf3n que se realice. Te acercamos algunas herramientas donde hacer farming dentro de la red de Binance."),"\xa0",Object(w.jsx)("a",{href:"/blog/binance-smart-chain",className:"underline text-blue-400 hover:text-blue-600",target:"_blank",rel:"noreferrer",children:s("C\xf3mo operar en la red de Binance")})]}),Object(w.jsx)("h4",{className:"text-xl py-4",children:s("Tabla comparativa de Farming")}),z&&Object(w.jsx)(g.a,{component:O.a,children:Object(w.jsxs)(j.a,{children:[Object(w.jsx)(f.a,{children:Object(w.jsxs)(x.a,{children:[Object(w.jsx)(N,{}),Object(w.jsx)(N,{align:"center",children:s("Ganancia")}),Object(w.jsx)(N,{align:"center",children:s("Recompensa en")}),Object(w.jsx)(N,{align:"center",children:s("Plataforma")})]})}),Object(w.jsx)(u.a,{children:z.map((function(e,t){return Object(w.jsxs)(k,{children:[Object(w.jsx)(N,{component:"th",scope:"row",className:"sticky left-0",children:e.coin}),Object(w.jsxs)(N,{align:"center",children:[e.apy>1e5?"\u221e":e.apy," %"]}),Object(w.jsx)(N,{align:"center",children:e.earn.join(", ")}),Object(w.jsx)(N,{align:"center",children:Object(w.jsx)("span",{className:"whitespace-pre",children:Object(w.jsx)("a",{href:e.url,target:"_blank",rel:"sponsored noreferrer",className:"text-base",children:e.name})})})]},t)}))})]})})||Object(w.jsxs)("div",{className:"animate-pulse",children:[Object(w.jsx)("div",{className:"h-4 bg-gray-400 mt-3 mb-6 rounded"}),Object(w.jsx)("div",{className:"h-4 bg-gray-500 mb-6 rounded"}),Object(w.jsx)("div",{className:"h-4 bg-gray-400 mb-6 rounded"}),Object(w.jsx)("div",{className:"h-4 bg-gray-500 mb-6 rounded"}),Object(w.jsx)("div",{className:"h-4 bg-gray-400 mb-6 rounded"}),Object(w.jsx)("div",{className:"h-4 bg-gray-400 mb-6 rounded"}),Object(w.jsx)("div",{className:"h-4 bg-gray-400 mb-6 rounded"})]})]},1)]})]})}!function(e){e[e.Staking=0]="Staking",e[e.Farming=1]="Farming"}(r||(r={}))}}]);