(this["webpackJsonpfront-in-react"]=this["webpackJsonpfront-in-react"]||[]).push([[34],{130:function(e,a,i){"use strict";function r(e,a,i){return a in e?Object.defineProperty(e,a,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[a]=i,e}i.d(a,"a",(function(){return r}))},132:function(e,a,i){"use strict";i.d(a,"a",(function(){return n}));var r=i(130);function t(e,a){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),i.push.apply(i,r)}return i}function n(e){for(var a=1;a<arguments.length;a++){var i=null!=arguments[a]?arguments[a]:{};a%2?t(Object(i),!0).forEach((function(a){Object(r.a)(e,a,i[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):t(Object(i)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(i,a))}))}return e}},163:function(e,a,i){"use strict";i.d(a,"a",(function(){return n}));var r=i(132),t={BTC:{name:"Bitcoin",blockchain:["BITCOIN","LIGHTNING_NETWORK","BSC"]},ETH:{name:"Ethereum",blockchain:["ETHEREUM","BSC"]},DAI:{name:"DAI",blockchain:["ETHEREUM","BSC"]},USDC:{name:"USDC",blockchain:["ETHEREUM","BSC"]},USDT:{name:"USDT",blockchain:["ETHEREUM","BSC","TRON"]},UST:{name:"UST",blockchain:["TERRA"]},BNB:{name:"Binance Coin",blockchain:["BSC"]},BUSD:{name:"Binance USD",blockchain:["BSC"]},MATIC:{name:"Matic",blockchain:["POLYGON","BSC"]},UNI:{name:"UNI",blockchain:["ETHEREUM","BSC"]},CAKE:{name:"Cake",blockchain:["BSC"]},LUNA:{name:"Luna",blockchain:["TERRA"],icon:"https://www.cryptosaurio.com/static/img/coins/luna2.webp"},ADA:{name:"Ada",blockchain:["CARDANO","BSC"]},LTC:{name:"Litecoin",blockchain:["LITECOIN"]},SOL:{name:"Sol",blockchain:["SOLANA","BSC"]},DOT:{name:"Polkadot",blockchain:["POLKADOT"]},LINK:{name:"Chainlink",blockchain:["ETHEREUM"]},XRP:{name:"XRP",blockchain:["RIPPLE"]},AXS:{name:"Axie Infinity",blockchain:["ETHEREUM"]},SLP:{name:"Smooth Love Potion",blockchain:["ETHEREUM"]},BCH:{name:"Bitcoin Cash",blockchain:["BITCOINCASH"]},DOGE:{name:"Dogecoin",blockchain:["DOGECOIN"]},NUARS:{name:"nuARS",blockchain:["BSC"],icon:"https://www.cryptosaurio.com/static/img/coins/numars.webp"},AAVE:{name:"AAVE",blockchain:["ETHEREUM"]},BAT:{name:"Basic Attention Token",blockchain:["ETHEREUM"]},CHZ:{name:"Chiliz",blockchain:["CHZ"],icon:"https://svgarchive.com/wp-content/uploads/chiliz-chz-coin.svg"},MANA:{name:"Decentraland",blockchain:["ETHEREUM"]},UBI:{name:"Universal Basic Income",blockchain:["ETHEREUM"],icon:"https://blog.kleros.io/content/images/2021/03/image-3.png"},AVAX:{name:"Avalanche",blockchain:["AVALANCHE"]}};function n(e){var a,i,n="?";if(e&&e.length>2)if(Object.keys(t).indexOf(e.toUpperCase())>-1)a=t[e.toUpperCase()],n=e.toUpperCase();else{var o=e.toLowerCase().split("-").join(" "),c=Object.keys(t).filter((function(e){return t[e].name.toUpperCase()===o.toUpperCase()}));c.length>0&&Object.keys(t).indexOf(c[0].toUpperCase())>-1&&(a=t[c[0]],n=c[0].toUpperCase())}return a?Object(r.a)(Object(r.a)(Object(r.a)({},{code:n}),{icon:"https://images.weserv.nl/?url=farm.army/token/".concat(null===(i=n)||void 0===i?void 0:i.toLowerCase(),".webp")}),a):Object(r.a)(Object(r.a)(Object(r.a)({},{code:n}),{icon:"https://cdn.worldvectorlogo.com/logos/dinosaurio.svg"}),{name:"?",blockchain:["?"]})}},187:function(e,a,i){"use strict";i.d(a,"a",(function(){return t}));var r={ar:{available_cryptos:["BTC","ETH","DAI","USDC","USDT","BUSD","BNB","MATIC","AVAX","SOL","ADA","DOT","LUNA","CAKE","UNI","LTC","LINK","XRP","AXS","SLP","AAVE","BAT","CHZ","MANA","UBI","BCH","DOGE","NUARS"],available_currencies:["ARS","USD"],available_providers:[{id:"argenbtc",name:"ArgenBTC"},{id:"belo",name:"belo"},{id:"binancep2p",name:"Binance P2P"},{id:"bitex",name:"Bitex"},{id:"bitgetp2p",name:"Bitget P2P"},{id:"bitmonedero",name:"Bitmonedero"},{id:"bitso",name:"Bitso"},{id:"buda",name:"Buda Trader"},{id:"buenbit",name:"Buenbit"},{id:"bybitp2p",name:"Bybit P2P"},{id:"calypsop2p",name:"Calypso Exchange"},{id:"coinex",name:"CoinEx"},{id:"copter",name:"Copter"},{id:"criptofacil",name:"CriptoF\xe1cil"},{id:"cryptomkt",name:"CryptoMarket"},{id:"decrypto",name:"Decrypto"},{id:"eluter",name:"Eluter"},{id:"fiwind",name:"Fiwind"},{id:"ftx",name:"FTX"},{id:"hodlhodlp2p",name:"Hodl Hodl P2P"},{id:"huobip2p",name:"Huobi P2P"},{id:"kucoinp2p",name:"KuCoin P2P"},{id:"latamex",name:"Latamex"},{id:"lemoncash",name:"Lemon Cash"},{id:"letsbit",name:"Let'sBit"},{id:"localcryptosp2p",name:"LocalCryptos P2P"},{id:"okexp2p",name:"Okex P2P"},{id:"ripio",name:"Ripio"},{id:"ripio-trade",name:"Ripio Trade"},{id:"satoshitango",name:"Satoshitango"},{id:"sesocio",name:"SeSocio"},{id:"syklop2p",name:"Syklo P2P"},{id:"tiendacrypto",name:"TiendaCrypto"},{id:"universalcoins",name:"Universal Coins"},{id:"vibrant",name:"Vibrant"}]},br:{available_cryptos:["BTC","ETH","DAI","USDC","USDT","BUSD","LTC","BNB","ADA","AAVE","AVAX","BCH","DOT","LINK","LUNA","SOL","UNI","XRP"],available_currencies:["BRL","USD"],available_providers:[{id:"binancep2p",name:"Binance P2P"},{id:"bitcambio",name:"Bitcambio"},{id:"bitcointoyou",name:"BitcoinToYou"},{id:"bitso",name:"Bitso"},{id:"brasilbitcoin",name:"Brasil Bitcoin"},{id:"braziliex",name:"Braziliex"},{id:"bybit",name:"Bybit"},{id:"cryptomkt",name:"CryptoMarket"},{id:"flowbtc",name:"FlowBTC"},{id:"foxbit",name:"Foxbit"},{id:"hodlhodlp2p",name:"Hodl Hodl P2P"},{id:"huobip2p",name:"Huobi P2P"},{id:"kucoinp2p",name:"KuCoin P2P"},{id:"latamex",name:"Latamex"},{id:"localcryptosp2p",name:"LocalCryptos P2P"},{id:"mercadobitcoin",name:"MercadoBitcoin"},{id:"okexp2p",name:"Okex P2P"},{id:"pagcripto",name:"PagCripto"},{id:"ripio",name:"Ripio"},{id:"ripio-trade",name:"Ripio Trade"},{id:"satoshitango",name:"Satoshitango"},{id:"syklop2p",name:"Syklo P2P"}]},cl:{available_cryptos:["BTC","ETH","DAI","USDC","USDT","BUSD","LTC","BCH","BNB","ADA","AAVE","AVAX","DOT","LINK","LUNA","SOL","UNI","XRP"],available_currencies:["CLP","USD"],available_providers:[{id:"binancep2p",name:"Binance P2P"},{id:"bitex",name:"Bitex"},{id:"buda",name:"Buda Trader"},{id:"bybit",name:"Bybit"},{id:"cryptomkt",name:"CryptoMarket"},{id:"hodlhodlp2p",name:"Hodl Hodl P2P"},{id:"huobip2p",name:"Huobi P2P"},{id:"localcryptosp2p",name:"LocalCryptos P2P"},{id:"orionx",name:"Orionx"},{id:"satoshitango",name:"Satoshitango"},{id:"sesocio",name:"SeSocio"},{id:"syklop2p",name:"Syklo P2P"},{id:"vitawallet",name:"Vita Wallet"}]},co:{available_cryptos:["BTC","ETH","DAI","USDC","USDT","BUSD","LTC","BCH","BNB","ADA","AAVE","AVAX","DOT","LINK","LUNA","SOL","UNI","XRP"],available_currencies:["COP","USD"],available_providers:[{id:"binancep2p",name:"Binance P2P"},{id:"buda",name:"Buda Trader"},{id:"bybit",name:"Bybit"},{id:"coinsenda",name:"Coinsenda"},{id:"hodlhodlp2p",name:"Hodl Hodl P2P"},{id:"huobip2p",name:"Huobi P2P"},{id:"localcryptosp2p",name:"LocalCryptos P2P"},{id:"okexp2p",name:"Okex P2P"},{id:"pandaexchange",name:"Panda Exchange"},{id:"sesocio",name:"SeSocio"},{id:"syklop2p",name:"Syklo P2P"}]},mx:{available_cryptos:["BTC","ETH","DAI","USDC","USDT","BUSD","BNB","MATIC","LTC","BCH","DOGE"],available_currencies:["MXN","USD"],available_providers:[{id:"binancep2p",name:"Binance P2P"},{id:"bitrus",name:"Bitrus"},{id:"bitso",name:"Bitso"},{id:"bybit",name:"Bybit"},{id:"domitai",name:"Domitai"},{id:"hodlhodlp2p",name:"Hodl Hodl P2P"},{id:"huobip2p",name:"Huobi P2P"},{id:"kucoinp2p",name:"KuCoin P2P"},{id:"latamex",name:"Latamex"},{id:"localcryptosp2p",name:"LocalCryptos P2P"},{id:"okexp2p",name:"Okex P2P"},{id:"ripio",name:"Ripio"},{id:"satoshitango",name:"Satoshitango"},{id:"syklop2p",name:"Syklo P2P"},{id:"volabit",name:"Volabit"}]},pe:{available_cryptos:["BTC","ETH","DAI","USDC","USDT","BUSD","LTC","BCH","BNB","ADA","AAVE","AVAX","DOT","LINK","LUNA","SOL","UNI","XRP"],available_currencies:["PEN","USD"],available_providers:[{id:"agentebtc",name:"AgenteBTC"},{id:"banexcoin",name:"Banexcoin"},{id:"binancep2p",name:"Binance P2P"},{id:"buda",name:"Buda Trader"},{id:"bybit",name:"Bybit"},{id:"cryptomkt",name:"CryptoMarket"},{id:"decrypto",name:"Decrypto"},{id:"fluyez",name:"Fluyez"},{id:"hodlhodlp2p",name:"Hodl Hodl P2P"},{id:"huobip2p",name:"Huobi P2P"},{id:"localcryptosp2p",name:"LocalCryptos P2P"},{id:"okexp2p",name:"Okex P2P"},{id:"satoshitango",name:"Satoshitango"},{id:"sesocio",name:"SeSocio"},{id:"syklop2p",name:"Syklo P2P"}]},ve:{available_cryptos:["BTC","ETH","DAI","USDT","BUSD","BNB"],available_currencies:["VES","USD"],available_providers:[{id:"binancep2p",name:"Binance P2P"},{id:"localcryptosp2p",name:"LocalCryptos P2P"},{id:"syklop2p",name:"Syklo P2P"}]},us:{available_cryptos:[],available_currencies:[],available_providers:[]}};function t(){return r[window.COUNTRY]}},383:function(e,a,i){"use strict";i.r(a);var r=i(8),t=i(0),n=i.n(t),o=i(187),c=i(163),s=i(129);var l=t.forwardRef((function(e,a){return t.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:a},e),t.createElement("path",{d:"M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z"}))}));var d=t.forwardRef((function(e,a){return t.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:a},e),t.createElement("path",{fillRule:"evenodd",d:"M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z",clipRule:"evenodd"}))}));var p=t.forwardRef((function(e,a){return t.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:a},e),t.createElement("path",{fillRule:"evenodd",d:"M18 3a1 1 0 00-1.447-.894L8.763 6H5a3 3 0 000 6h.28l1.771 5.316A1 1 0 008 18h1a1 1 0 001-1v-4.382l6.553 3.276A1 1 0 0018 15V3z",clipRule:"evenodd"}))}));var m=t.forwardRef((function(e,a){return t.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:a},e),t.createElement("path",{fillRule:"evenodd",d:"M10 1.944A11.954 11.954 0 012.166 5C2.056 5.649 2 6.319 2 7c0 5.225 3.34 9.67 8 11.317C14.66 16.67 18 12.225 18 7c0-.682-.057-1.35-.166-2.001A11.954 11.954 0 0110 1.944zM11 14a1 1 0 11-2 0 1 1 0 012 0zm0-7a1 1 0 10-2 0v3a1 1 0 102 0V7z",clipRule:"evenodd"}))})),b=i(27),h=i(2);function u(){var e=Object(s.a)().t,a=n.a.useState(!1),i=Object(r.a)(a,2),t=i[0],u=i[1],j=n.a.useState(!1),x=Object(r.a)(j,2),O=x[0],y=x[1],v=n.a.useState(!1),w=Object(r.a)(v,2),f=w[0],C=w[1],g=n.a.useState(!1),P=Object(r.a)(g,2),B=P[0],k=P[1];return Object(h.jsxs)(h.Fragment,{children:["us"!==window.COUNTRY&&Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("div",{className:"grid md:grid-cols-2 md:gap-5 bg-gray-850 text-white overflow-auto",children:[Object(h.jsxs)("div",{className:"border border-gray-600 p-5 m-5",children:[Object(h.jsx)("h4",{className:"text-2xl",children:e("\xbfQu\xe9 es Cryptosaurio?")}),Object(h.jsx)("p",{className:"pt-2",children:e("Cryptosaurio es una herramienta para ayudarte a tomar buenas decisiones a la hora de comprar, vender o invertir criptomonedas. Podr\xe1s comparar precios, rendimientos de Staking y Farming, ver oportunidades de arbitraje y mucho m\xe1s.")})]}),Object(h.jsxs)("div",{className:"border border-gray-600 p-5 m-5",children:[Object(h.jsx)("h4",{className:"text-2xl",children:e("\xbfD\xf3nde comprar criptomonedas?")}),Object(h.jsx)("p",{className:"pt-2",children:e("En Cryptosaurio podr\xe1s ver d\xf3nde comprar Bitcoin, Ethereum y otras criptos a precio final y ver el desgloce para entender qu\xe9 te est\xe1n cobrando. Adem\xe1s, podr\xe1s leer las opiniones que van dejando otros usuarios para aprender de su experiencia.")})]})]}),Object(h.jsxs)("div",{className:"grid grid-flow-row md:grid-cols-4 md:gap-5 bg-gray-850 text-white text-xs",children:[Object(h.jsxs)("div",{className:"grid grid-flow-row border border-gray-600 col-span-1 py-5 m-5",children:[Object(h.jsxs)("div",{className:"cursor-pointer",onClick:function(){y(!O),u(!1),C(!1),k(!1)},children:[Object(h.jsx)(l,{className:"mx-auto fill-current text-white h-6 w-6"}),Object(h.jsx)("h4",{className:"text-center pt-2",children:e("\xbfQuieres dejar sugerencias?")})]}),O&&Object(h.jsxs)("p",{className:"text-center pt-2",children:[e("Escr\xedbenos a")," ",Object(h.jsx)("a",{className:"underline",target:"_blank",rel:"noreferrer",href:"mailto:".concat(e("info@cryptosaurio.com")),children:e("info@cryptosaurio.com")})]})]}),Object(h.jsxs)("div",{className:"grid grid-flow-row border border-gray-600 col-span-1 py-5 m-5",children:[Object(h.jsxs)("div",{className:"cursor-pointer",onClick:function(){u(!t),y(!1),C(!1),k(!1)},children:[Object(h.jsx)(d,{className:"mx-auto fill-current text-white h-6 w-6"}),Object(h.jsx)("h4",{className:"text-center pt-2",children:e("\xbfQuieres que mostremos tus precios?")})]}),t&&Object(h.jsx)("p",{className:"text-center pt-2",children:Object(h.jsx)("a",{className:"underline",target:"_blank",rel:"noreferrer",href:e("https://forms.gle/udSSAwudd3UBvqxC7"),children:e("Completa este formulario")})})]}),Object(h.jsxs)("div",{className:"grid grid-flow-row border border-gray-600 col-span-1 py-5 m-5",children:[Object(h.jsxs)("div",{className:"cursor-pointer",onClick:function(){C(!f),u(!1),y(!1),k(!1)},children:[Object(h.jsx)(p,{className:"mx-auto fill-current text-white h-6 w-6"}),Object(h.jsx)("h4",{className:"text-center pt-2",children:e("\xbfQuieres pautar en Cryptosaurio.com?")})]}),f&&Object(h.jsxs)("p",{className:"text-center pt-2",children:[e("Escr\xedbenos a")," ",Object(h.jsx)("a",{className:"underline",target:"_blank",rel:"noreferrer",href:"mailto:".concat(e("marketing@cryptosaurio.com")),children:e("marketing@cryptosaurio.com")})]})]}),Object(h.jsxs)("div",{className:"grid grid-flow-row border border-gray-600 col-span-1 py-5 m-5",children:[Object(h.jsxs)("div",{className:"cursor-pointer",onClick:function(){k(!B),u(!1),y(!1),C(!1)},children:[Object(h.jsx)(m,{className:"mx-auto fill-current text-white h-6 w-6"}),Object(h.jsx)("h4",{className:"text-center pt-2",children:e("\xbfEncontraste un error?")})]}),B&&Object(h.jsxs)("p",{className:"text-center pt-2",children:[e("Reportalo a")," ",Object(h.jsx)("a",{className:"underline",target:"_blank",rel:"noreferrer",href:"mailto:".concat(e("errores@cryptosaurio.com")),children:e("errores@cryptosaurio.com")})]})]})]}),Object(h.jsx)("div",{className:"pb-5 px-5 bg-gray-850 text-white overflow-auto text-sm",children:Object(h.jsxs)("p",{className:"pt-2",children:[e("En {{country}} mostramos los precios de",{country:window.COUNTRY_NAME}),"\xa0",Object(o.a)().available_cryptos.map((function(e,a){return Object(h.jsxs)(n.a.Fragment,{children:[Object(h.jsx)(b.b,{to:"br"!==window.COUNTRY?"/criptomoneda/".concat(Object(c.a)(e).name.split(" ").join("-").toLowerCase()):"/criptomoeda/".concat(Object(c.a)(e).name.split(" ").join("-").toLowerCase()),children:Object(c.a)(e).name}),a<Object(o.a)().available_cryptos.length-2?", ":a<Object(o.a)().available_cryptos.length-1?" y ":""]},a)})),"\xa0",e("de los proveedores"),"\xa0",Object(o.a)().available_providers.map((function(e,a){return Object(h.jsxs)(n.a.Fragment,{children:[Object(h.jsx)("span",{children:e.name}),a<Object(o.a)().available_providers.length-2?", ":a<Object(o.a)().available_providers.length-1?" y ":"."]},a)}))]})})]}),Object(h.jsxs)("div",{className:"flex justify-center",children:[Object(h.jsxs)("div",{className:"flex text-white items-center justify-center pr-5",children:[Object(h.jsx)("a",{target:"_blank",rel:"sponsored noreferrer",href:e("https://twitter.com/cryptosaurioweb"),children:Object(h.jsx)("svg",{className:"fill-current text-white w-7 h-7",viewBox:"0 0 512 512",children:Object(h.jsx)("path",{d:"M459 152l1 13c0 139-106 299-299 299-59 0-115-17-161-47a217 217 0 00156-44c-47-1-85-31-98-72l19 1c10 0 19-1 28-3-48-10-84-52-84-103v-2c14 8 30 13 47 14A105 105 0 0136 67c51 64 129 106 216 110-2-8-2-16-2-24a105 105 0 01181-72c24-4 47-13 67-25-8 24-25 45-46 58 21-3 41-8 60-17-14 21-32 40-53 55z"})})}),Object(h.jsx)("a",{target:"_blank",rel:"sponsored noreferrer",href:e("https://instagram.com/cryptosaurio"),children:Object(h.jsx)("svg",{className:"fill-current text-white w-7 h-7",viewBox:"0 0 448 512",children:Object(h.jsx)("path",{d:"M224 141a115 115 0 100 229 115 115 0 000-229zm0 190a75 75 0 110-150 75 75 0 010 150zm147-195a27 27 0 11-54 0 27 27 0 0154 0zm76 28c-2-36-10-68-37-94-26-27-58-35-93-37-37-2-148-2-185 0-36 2-68 10-94 36S3 129 1 164c-2 37-2 148 0 185 2 36 10 68 37 94s58 35 94 36c37 3 148 3 185 0 35-1 67-9 93-36 27-26 35-58 37-94 2-37 2-147 0-184zm-48 224c-8 20-23 35-43 43-29 11-99 9-132 9s-103 2-132-9c-20-8-35-23-43-43-11-29-9-99-9-132s-2-103 9-132c8-20 23-35 43-43 30-11 100-9 132-9s103-2 132 9c20 8 35 23 43 43 12 29 9 99 9 132s3 103-9 132z"})})}),Object(h.jsx)("a",{target:"_blank",rel:"sponsored noreferrer",href:"https://t.me/cryptosaurio",children:Object(h.jsx)("svg",{className:"fill-current text-white w-7 h-7",viewBox:"0 0 496 512",children:Object(h.jsx)("path",{d:"M248 8a248 248 0 100 496 248 248 0 000-496zm122 170l-41 192c-3 13-11 17-22 10l-62-45-30 28c-3 4-6 6-13 6l5-63 115-103c5-5-1-7-8-3l-142 89-61-19c-14-4-14-13 3-19l239-93c11-4 20 3 17 20z"})})})]}),Object(h.jsxs)("div",{className:"grid grid-rows-2 text-white text-xs pt-5 pb-5",children:[Object(h.jsxs)("p",{children:[e("Cryptosaurio 2020-2022 presente en")," ",Object(h.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://www.cryptosaurio.com/ar",children:"Argentina"}),", ",Object(h.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://www.cryptossauro.com",children:"Brasil"}),", ",Object(h.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://www.cryptosaurio.com/cl",children:"Chile"}),", ",Object(h.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://www.cryptosaurio.com/co",children:"Colombia"}),", ",Object(h.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://www.cryptosaurio.com/mx",children:"M\xe9xico"}),", ",Object(h.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://www.cryptosaurio.com/pe",children:"Per\xfa"})," ",e("y")," ",Object(h.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://www.cryptosaurio.com/ve",children:"Venezuela"}),"."]}),Object(h.jsxs)("div",{className:"text-xs underline grid grid-flow-row sm:grid-flow-col sm:auto-cols-max sm:gap-2 pt-3 sm:pt-0",children:[Object(h.jsx)("a",{href:"".concat("br"!==window.COUNTRY?"/".concat(window.COUNTRY):"","/").concat(e("terminos-y-condiciones")),children:e("Ver t\xe9rminos y condiciones")}),Object(h.jsx)("a",{href:"".concat("br"!==window.COUNTRY?"/".concat(window.COUNTRY):"","/").concat(e("politicas-de-privacidad")),children:e("Ver pol\xedticas de privacidad")})]})]})]})]})}a.default=n.a.memo(u,(function(){return!0}))}}]);