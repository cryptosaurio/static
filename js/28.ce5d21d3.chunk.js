(this["webpackJsonpfront-in-react"]=this["webpackJsonpfront-in-react"]||[]).push([[28],{132:function(e,t,o){"use strict";o.r(t),o.d(t,"default",(function(){return b}));var c=o(147),n=o(12),r=o(0),a=o.n(r),s=o(138),i=o(160),l=o(1),d=o(217),p=o(199),u=o(205),m=o(187),g=o(2);function b(){var e={page:"provider-technical-data",country:window.COUNTRY},t=Object(i.useTracking)(e).trackEvent,o=Object(s.a)().t,b=Object(l.h)().providerId;Object(r.useEffect)((function(){var o={event:"pageview"};"production"===window.ENV?t(o):console.log(e,o)}),[]);var h=Object(r.useState)(null),j=Object(n.a)(h,2),O=j[0],f=j[1],x=Object(r.useState)(null),N=Object(n.a)(x,2),w=N[0],v=N[1],y=Object(r.useState)(null),R=Object(n.a)(y,2),A=R[0],C=R[1],I=Object(r.useRef)(null),T=Object(r.useState)(!1),E=Object(n.a)(T,2),S=E[0],k=E[1];return Object(r.useEffect)((function(){fetch("br"!==window.COUNTRY?"".concat(window.BARNEY_API_URL,"/").concat(window.COUNTRY,"/provider/").concat(b):"".concat(window.BARNEY_BR_API_URL,"/provider/").concat(b)).then((function(e){return e.json()})).then((function(e){f(e)})).catch((function(){f(null)}))}),[]),Object(r.useEffect)((function(){fetch("br"!==window.COUNTRY?"".concat(window.BARNEY_API_URL,"/").concat(window.COUNTRY,"/get-provider-technical-data/").concat(b):"".concat(window.BARNEY_BR_API_URL,"/get-provider-technical-data/").concat(b)).then((function(e){return e.json()})).then((function(e){C(Object(c.a)(new Set(Object.values(e.metadata.crypto.available).flatMap((function(e){return e.available_deposits_blockchains,e.available_withdrawals_blockchains})))).filter((function(e){return Object(p.c)(e)}))),v(e.data)})).catch((function(){C(null)}))}),[]),Object(g.jsxs)(g.Fragment,{children:[O&&Object(g.jsx)(d.a,{page:"providerReviews",providerId:O.id}),Object(g.jsx)("div",{className:"mx-5 mt-5",children:Object(g.jsxs)("span",{className:"mt-5 items-center",children:[Object(g.jsxs)("div",{className:"flex flex-row",children:[Object(g.jsx)("a",{className:"flex-shrink-0",href:O&&O.url,target:"_blank",rel:"sponsored noreferrer",children:Object(g.jsx)("img",{ref:function(e){return I.current=e},onLoad:function(){return k(!0)},src:O&&O.icon,className:["rounded-full mx-5 w-16 h-16",!S&&"animate-pulse bg-gray-600 p-8"].join(" "),alt:O&&O.name})}),Object(g.jsxs)("div",{className:"grid grid-flow-row",children:[Object(g.jsx)("div",{className:"grid grid-flow-col text-2xl",children:Object(g.jsx)("h1",{className:["font-bold",O?"sm:w-max":"animate-pulse bg-gray-600 w-36 h-7"].join(" "),children:O&&Object(g.jsx)("a",{href:O.url,target:"_blank",rel:"sponsored noreferrer",children:O.name})})}),Object(g.jsx)("div",{className:"flex flex-wrap",children:O&&A&&A.map((function(e,t){return Object(g.jsxs)(a.a.Fragment,{children:[Object(g.jsx)(u.a,{html:!0,place:"right",className:"w-52",effect:"solid",id:"".concat(e),children:o("{{providerName}} te permite operar con la red de {{blockchainName}}.",{providerName:O.name,blockchainName:Object(p.a)(e).name})}),Object(g.jsx)("img",{loading:"lazy",src:Object(p.a)(e).icon,className:"mr-1 w-4 h-4 self-center ".concat(e," cursor-pointer"),alt:Object(p.a)(e).name,"data-tip":!0,"data-for":"".concat(e)})]},t)}))||Object(c.a)(Array(5)).map((function(e,t){return Object(g.jsx)("div",{className:"mr-1 w-4 h-4 bg-gray-600 animate-pulse self-center shadow-md rounded-full"},t)}))})]})]}),O&&Object(g.jsx)("h2",{className:"text-lg sm:text-xl py-5",children:o("Comisiones, l\xedmites y otros datos a tener en cuenta a la hora de operar en {{providerName}}",{providerName:O.name})})||Object(g.jsx)("div",{className:"my-6 animate-pulse bg-gray-600 h-5 w-72"}),Object(g.jsx)("div",{className:"grid md:grid-cols-2 grid-flow-row gap-10 pb-5 overflow-x-auto",children:w&&w.map((function(e,t){return Object(g.jsxs)("table",{className:"text-left bg-gray-700 rounded-b-lg",children:[Object(g.jsx)("caption",{className:"text-left font-bold pb-2 border-b-2 border-gray-500 bg-gray-700 rounded-t-lg p-3 text-lg",children:e.title}),!m.isMobile&&Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("thead",{children:Object(g.jsx)("tr",{children:e.content.map((function(e,t){return Object(g.jsx)("th",{className:"py-1.5 px-3",children:Object(g.jsx)("p",{children:e.title})},t)}))})}),Object(g.jsx)("tbody",{children:Object(g.jsx)("tr",{children:e.content.map((function(e,t){return Object(g.jsx)("td",{className:"pb-1.5 px-3",children:e.content.indexOf("https")>-1?Object(g.jsx)("a",{href:e.content,target:"_blank",rel:"sponsored noreferrer",className:"text-blue-400 truncate overflow-clip whitespace-normal break-all",children:e.content}):Object(g.jsx)("p",{className:"text-blue-400",children:e.content})},t)}))})})]})||e.content.map((function(e,t){return Object(g.jsxs)("tr",{children:[Object(g.jsx)("th",{className:"py-1.5 px-3",children:Object(g.jsx)("p",{children:e.title})}),Object(g.jsx)("td",{className:"py-1.5 px-3",children:e.content.indexOf("https")>-1?Object(g.jsx)("a",{href:e.content,target:"_blank",rel:"sponsored noreferrer",className:"text-blue-400 truncate overflow-clip whitespace-normal break-all",children:e.content}):Object(g.jsx)("p",{className:"text-blue-400",children:e.content})})]},t)}))]},t)}))||Object(c.a)(Array(8)).map((function(e,t){return!m.isMobile&&Object(g.jsxs)("table",{className:"text-left bg-gray-700 rounded-b-lg",children:[Object(g.jsx)("caption",{className:"text-left font-bold pb-2 border-b-2 border-gray-500 bg-gray-700 rounded-t-lg p-3 text-lg",children:Object(g.jsx)("div",{className:"my-1 animate-pulse bg-gray-600 h-5 w-32"})}),Object(g.jsx)("thead",{children:Object(g.jsx)("tr",{children:Object(c.a)(Array(3)).map((function(e,t){return Object(g.jsx)("th",{className:"py-1.5 px-3",children:Object(g.jsx)("div",{className:"my-1 animate-pulse bg-gray-600 h-4 w-32"})},t)}))})}),Object(g.jsx)("tbody",{children:Object(g.jsx)("tr",{children:Object(c.a)(Array(3)).map((function(e,t){return Object(g.jsx)("td",{className:"pb-1.5 px-3",children:Object(g.jsx)("div",{className:"my-1 animate-pulse bg-gray-600 h-4 max-w-44"})},t)}))})})]},t)||Object(g.jsxs)("table",{className:"text-left bg-gray-700 rounded-b-lg",children:[Object(g.jsx)("caption",{className:"text-left font-bold pb-2 border-b-2 border-gray-500 bg-gray-700 rounded-t-lg p-3 text-lg",children:Object(g.jsx)("div",{className:"my-1 animate-pulse bg-gray-600 h-5 w-32"})}),Object(c.a)(Array(3)).map((function(e,t){return Object(g.jsxs)("tr",{children:[Object(g.jsx)("th",{className:"py-1.5 px-3",children:Object(g.jsx)("div",{className:"my-1 animate-pulse bg-gray-600 h-4 w-32"})}),Object(g.jsx)("td",{className:"py-1.5 px-3",children:Object(g.jsx)("div",{className:"my-1 animate-pulse bg-gray-600 h-4 w-32"})})]},t)}))]},t)}))})]})})]})}},147:function(e,t,o){"use strict";o.d(t,"a",(function(){return a}));var c=o(26);var n=o(178),r=o(22);function a(e){return function(e){if(Array.isArray(e))return Object(c.a)(e)}(e)||Object(n.a)(e)||Object(r.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},178:function(e,t,o){"use strict";function c(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}o.d(t,"a",(function(){return c}))},199:function(e,t,o){"use strict";o.d(t,"a",(function(){return n})),o.d(t,"b",(function(){return r})),o.d(t,"c",(function(){return a}));var c={BITCOIN:{code:"BITCOIN",name:"Bitcoin",icon:"https://farm.army/token/btc.webp"},ETHEREUM:{code:"ETHEREUM",name:"Ethereum",icon:"https://farm.army/token/eth.webp"},LIGHTNING_NETWORK:{code:"LIGHTNING_NETWORK",name:"Lightning",icon:"https://upload.wikimedia.org/wikipedia/commons/5/5a/Lightning_Network.svg"},BSC:{code:"BSC",name:"Binance Smart Chain",icon:"https://cdn.worldvectorlogo.com/logos/binance-logo.svg"},BSC_OLD:{code:"BSC_OLD",name:"Binance Beacon Chain",icon:"https://cdn.worldvectorlogo.com/logos/binance-logo.svg"},TERRA:{code:"TERRA",name:"Terra",icon:"https://cryptologos.cc/logos/terra-luna-luna-logo.svg?v=014"},POLYGON:{code:"POLYGON",name:"Polygon",icon:"https://cryptologos.cc/logos/polygon-matic-logo.svg"},TRON:{code:"TRON",name:"TRON",icon:"https://cryptologos.cc/logos/tron-trx-logo.svg"},STELLAR:{code:"STELLAR",name:"Stellar",icon:"https://cryptologos.cc/logos/stellar-xlm-logo.svg"},CARDANO:{code:"CARDANO",name:"Cardano",icon:"https://cryptologos.cc/logos/cardano-ada-logo.svg"},SOLANA:{code:"SOLANA",name:"Solana",icon:"https://cryptologos.cc/logos/solana-sol-logo.svg"},POLKADOT:{code:"POLKADOT",name:"Polkadot",icon:"https://cryptologos.cc/logos/polkadot-new-dot-logo.svg"},RIPPLE:{code:"RIPPLE",name:"Ripple",icon:"https://cryptologos.cc/logos/xrp-xrp-logo.svg"},LITECOIN:{code:"LITECOIN",name:"Litecoin",icon:"https://cryptologos.cc/logos/litecoin-ltc-logo.svg"},BITCOINCASH:{code:"BITCOINCASH",name:"Bitcoin Cash",icon:"https://cryptologos.cc/logos/bitcoin-cash-bch-logo.svg"},BITCOIN_CASH:{code:"BITCOIN_CASH",name:"Bitcoin Cash",icon:"https://cryptologos.cc/logos/bitcoin-cash-bch-logo.svg"},DOGECOIN:{code:"DOGECOIN",name:"Dogecoin",icon:"https://cryptologos.cc/logos/dogecoin-doge-logo.svg"},OPTIMISM_PBC:{code:"OPTIMISM_PBC",name:"Optimism",icon:"https://gateway.optimism.io/favicon.ico"},ARBITRUM:{code:"ARBITRUM",name:"Arbitrum One",icon:"https://portal.arbitrum.one/wp-content/uploads/2021/10/favicon.png"},RSK:{code:"RSK",name:"RSK",icon:"https://www.rsk.co/img/favicons/favicon-32x32.png"},AVAX:{code:"AVAX",name:"Avalanche",icon:"https://cryptologos.cc/logos/avalanche-avax-logo.svg"},AVALANCHE:{code:"AVALANCHE",name:"Avalanche",icon:"https://cryptologos.cc/logos/avalanche-avax-logo.svg"},MONERO:{code:"MONERO",name:"Monero",icon:"https://cryptologos.cc/logos/monero-xmr-logo.svg"},OMNI:{code:"OMNI",name:"Omni",icon:"https://cryptologos.cc/logos/omni-omni-logo.svg"}};function n(e){try{c[e.toUpperCase()]||window.Rollbar.warning("Blockchain not found Exception: "+e)}catch(t){}return c[e.toUpperCase()]||{code:e.toUpperCase(),name:"?",icon:"https://cdn.worldvectorlogo.com/logos/dinosaurio.svg"}}function r(){return c}function a(e){return void 0!==c[e.toUpperCase()]}},217:function(e,t,o){"use strict";var c=o(12),n=o(0),r=o.n(n),a=o(156),s=o(160),i={ar:{sesocio:{title:"Gan\xe1 con nuestro referido",description:"Registrate con nuestro referido, carg\xe1 saldo y particip\xe1 de un sorteo mensual.",url:"https://www.sesocio.com/referrals/Y3J5cHRvc2F1cmlvMDBAZ21haWwuY29t?s=c"},buenbit:{title:"Gan\xe1 con nuestro referido",description:"Registrate con nuestro c\xf3digo IQNKVKP, invert\xed desde 50 USD por 30 d\xedas y gan\xe1 15 DAI.",url:"https://www.buenbit.com/"},letsbit:{title:"Gan\xe1 con nuestro referido",description:"Registrate con nuestro referido, verific\xe1 tu cuenta a nivel 3 y particip\xe1 de un sorteo mensual.",url:"https://letsbit.io/register/IDF37AE929E9"},cryptomkt:{title:"Gan\xe1 con nuestro referido",description:"Al registrate con nuestro referido y comprar criptomonedas en CryptoMarket por ARS $ 20.000 o m\xe1s gan\xe1s 10 USDT.",url:"https://www.cryptomkt.com/account/register?ref=215813"},satoshitango:{title:"Gan\xe1 con nuestro referido",description:"Registrate con nuestro referido y obten\xe9 10 d\xedas para operar criptomonedas sin comisi\xf3n.",url:"https://www.satoshitango.com/gift/40OTRX9K"},ftx:{title:"Gan\xe1 con nuestro referido",description:"Registrate con nuestro referido para tener un 5% de descuento en costos de operaci\xf3n.",url:"https://ftx.com/referrals#a=cryptosaurio"}}},l={ar:{tools:{title:"20% OFF para comprar tu Ledger",description:"Us\xe1 nuestro c\xf3digo FRIEND-XDNVBSR al momento de hacer la compra y disfrut\xe1 el descuento.",url:"https://go.referralcandy.com/recommend/XDNVBSR"}},br:{tools:{title:"20% DE DESCONTO para comprar seu Ledger",description:"Use nosso c\xf3digo FRIEND-XDNVBSR na hora da compra e aproveite o desconto.",url:"https://go.referralcandy.com/recommend/XDNVBSR"}},any:{tools:{title:"20% OFF para comprar tu Ledger",description:"Usa nuestro c\xf3digo FRIEND-XDNVBSR al momento de hacer la compra y disfruta el descuento.",url:"https://go.referralcandy.com/recommend/XDNVBSR"}}};var d=o(2);function p(e){var t,o=e.page,r=e.providerId,p={page:"provider-reviews",country:window.COUNTRY},u=Object(s.useTracking)(p).trackEvent,m={event:"user_action",event_category:"".concat(o,"_").concat(r?"".concat(r,"_"):"","referalNotification"),event_label:"click"},g={event:"user_action",event_category:"".concat(o,"_").concat(r?"".concat(r,"_"):"","referalNotification"),event_label:"close"},b=Object(n.useState)(!1),h=Object(c.a)(b,2),j=h[0],O=h[1];return(t=r?function(e){return window.COUNTRY in i&&Object.keys(i[window.COUNTRY]).length>0?i[window.COUNTRY][e]:null}(r):function(e){return window.COUNTRY in l&&Object.keys(l[window.COUNTRY]).length>0?l[window.COUNTRY][e]:"any"in l&&Object.keys(l.any).length>0?l.any[e]:null}(o))&&!j&&t&&Object(d.jsxs)("div",{className:"bg-white rounded-lg border-gray-300 border p-3 shadow-lg absolute top-5 right-5 cursor-pointer z-30",children:[Object(d.jsxs)("div",{className:"grid grid-flow-col items-center",onClick:function(){"production"===window.ENV?u(m):console.log(p,m),window.open(t.url)},children:[Object(d.jsx)("p",{className:"text-4xl",children:"\ud83c\udf81"}),Object(d.jsxs)("div",{className:"ml-2 mr-6 text-xs w-44",children:[Object(d.jsx)("p",{className:"font-semibold text-black",children:t.title}),Object(d.jsx)("p",{className:"block text-gray-500",children:t.description})]})]}),Object(d.jsx)(a.E,{className:"w-5 h-5 absolute top-2 right-2 cursor-pointer text-gray-600","aria-hidden":"true",onClick:function(e){e.preventDefault(),"production"===window.ENV?u(g):console.log(p,g),O(!0)}})]})||null}var u=function(e,t){return e.providerId===t.providerId};t.a=r.a.memo(p,u)}}]);