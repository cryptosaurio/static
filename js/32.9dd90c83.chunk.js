(this["webpackJsonpfront-in-react"]=this["webpackJsonpfront-in-react"]||[]).push([[32],{151:function(e,a,i){"use strict";i.d(a,"a",(function(){return o}));var n=i(33);function t(e,a){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),i.push.apply(i,n)}return i}function o(e){for(var a=1;a<arguments.length;a++){var i=null!=arguments[a]?arguments[a]:{};a%2?t(Object(i),!0).forEach((function(a){Object(n.a)(e,a,i[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):t(Object(i)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(i,a))}))}return e}},175:function(e,a,i){"use strict";i.d(a,"a",(function(){return o}));var n=i(151),t={BTC:{name:"Bitcoin",blockchain:["BITCOIN","LIGHTNING_NETWORK","BSC"]},ETH:{name:"Ethereum",blockchain:["ETHEREUM","BSC"]},DAI:{name:"DAI",blockchain:["ETHEREUM","BSC"]},USDC:{name:"USDC",blockchain:["ETHEREUM","BSC"]},USDT:{name:"USDT",blockchain:["ETHEREUM","BSC","TRON"]},UST:{name:"UST",blockchain:["TERRA"]},BNB:{name:"Binance Coin",blockchain:["BSC"]},BUSD:{name:"Binance USD",blockchain:["BSC"]},MATIC:{name:"Matic",blockchain:["POLYGON","BSC"]},UNI:{name:"UNI",blockchain:["ETHEREUM","BSC"]},CAKE:{name:"Cake",blockchain:["BSC"]},LUNA:{name:"Luna",blockchain:["TERRA"]},ADA:{name:"Ada",blockchain:["CARDANO","BSC"]},LTC:{name:"Litecoin",blockchain:["LITECOIN"]},SOL:{name:"Sol",blockchain:["SOLANA","BSC"]},DOT:{name:"Polkadot",blockchain:["POLKADOT"]},LINK:{name:"Chainlink",blockchain:["ETHEREUM"]},XRP:{name:"XRP",blockchain:["RIPPLE"]},AXS:{name:"Axie Infinity",blockchain:["ETHEREUM"]},SLP:{name:"Smooth Love Potion",blockchain:["ETHEREUM"]},BCH:{name:"Bitcoin Cash",blockchain:["BITCOINCASH"]},DOGE:{name:"Dogecoin",blockchain:["DOGECOIN"]},NUARS:{name:"nuARS",blockchain:["BSC"],icon:"https://www.cryptosaurio.com/static/img/coins/numars.webp"},AAVE:{name:"AAVE",blockchain:["ETHEREUM"]},BAT:{name:"Basic Attention Token",blockchain:["ETHEREUM"]},CHZ:{name:"Chiliz",blockchain:["CHZ"],icon:"https://svgarchive.com/wp-content/uploads/chiliz-chz-coin.svg"},MANA:{name:"Decentraland",blockchain:["ETHEREUM"]},UBI:{name:"Universal Basic Income",blockchain:["ETHEREUM"],icon:"https://blog.kleros.io/content/images/2021/03/image-3.png"},AVAX:{name:"Avalanche",blockchain:["AVALANCHE"]}};function o(e){var a,i,o="?";if(e&&e.length>2)if(Object.keys(t).indexOf(e.toUpperCase())>-1)a=t[e.toUpperCase()],o=e.toUpperCase();else{var r=e.toLowerCase().split("-").join(" "),c=Object.keys(t).filter((function(e){return t[e].name.toUpperCase()===r.toUpperCase()}));c.length>0&&Object.keys(t).indexOf(c[0].toUpperCase())>-1&&(a=t[c[0]],o=c[0].toUpperCase())}return a?Object(n.a)(Object(n.a)(Object(n.a)({},{code:o}),{icon:"https://farm.army/token/".concat(null===(i=o)||void 0===i?void 0:i.toLowerCase(),".webp")}),a):Object(n.a)(Object(n.a)(Object(n.a)({},{code:o}),{icon:"https://cdn.worldvectorlogo.com/logos/dinosaurio.svg"}),{name:"?",blockchain:["?"]})}},202:function(e,a,i){"use strict";i.d(a,"a",(function(){return t}));var n={ar:{available_cryptos:["BTC","ETH","DAI","USDC","USDT","BUSD","BNB","MATIC","AVAX","SOL","ADA","DOT","LUNA","CAKE","UNI","LTC","LINK","XRP","AXS","SLP","AAVE","BAT","CHZ","MANA","UBI","BCH","DOGE","NUARS"],available_currencies:["ARS","USD"],available_providers:[{id:"argenbtc",name:"ArgenBTC"},{id:"belo",name:"belo"},{id:"binancep2p",name:"Binance P2P"},{id:"bitex",name:"Bitex"},{id:"bitmonedero",name:"Bitmonedero"},{id:"bitso",name:"Bitso"},{id:"buda",name:"Buda Trader"},{id:"buenbit",name:"Buenbit"},{id:"bybitp2p",name:"Bybit P2P"},{id:"calypsop2p",name:"Calypso Exchange"},{id:"coinex",name:"CoinEx"},{id:"copter",name:"Copter"},{id:"criptofacil",name:"CriptoF\xe1cil"},{id:"cryptomkt",name:"CryptoMarket"},{id:"decrypto",name:"Decrypto"},{id:"fiwind",name:"Fiwind"},{id:"ftx",name:"FTX"},{id:"hodlhodlp2p",name:"Hodl Hodl P2P"},{id:"huobip2p",name:"Huobi P2P"},{id:"kucoinp2p",name:"KuCoin P2P"},{id:"latamex",name:"Latamex"},{id:"lemoncash",name:"Lemon Cash"},{id:"letsbit",name:"Let'sBit"},{id:"localbitcoinsp2p",name:"LocalBitcoins P2P"},{id:"localcryptosp2p",name:"LocalCryptos P2P"},{id:"okexp2p",name:"Okex P2P"},{id:"paxfulp2p",name:"Paxful P2P"},{id:"ripio",name:"Ripio"},{id:"ripio-exchange",name:"Ripio Exchange"},{id:"satoshitango",name:"Satoshitango"},{id:"sesocio",name:"SeSocio"},{id:"syklop2p",name:"Syklo P2P"},{id:"tiendacrypto",name:"TiendaCrypto"},{id:"universalcoins",name:"Universal Coins"},{id:"vibrant",name:"Vibrant"}]},br:{available_cryptos:["BTC","ETH","DAI","USDC","USDT","BUSD","LTC","ADA"],available_currencies:["BRL","USD"],available_providers:[{id:"binancep2p",name:"Binance P2P"},{id:"bitcambio",name:"Bitcambio"},{id:"bitcointoyou",name:"BitcoinToYou"},{id:"bitso",name:"Bitso"},{id:"brasilbitcoin",name:"Brasil Bitcoin"},{id:"braziliex",name:"Braziliex"},{id:"bybit",name:"Bybit"},{id:"cryptomkt",name:"CryptoMarket"},{id:"flowbtc",name:"FlowBTC"},{id:"foxbit",name:"Foxbit"},{id:"hodlhodlp2p",name:"Hodl Hodl P2P"},{id:"huobip2p",name:"Huobi P2P"},{id:"kucoinp2p",name:"KuCoin P2P"},{id:"latamex",name:"Latamex"},{id:"localbitcoinsp2p",name:"LocalBitcoins P2P"},{id:"localcryptosp2p",name:"LocalCryptos P2P"},{id:"mercadobitcoin",name:"MercadoBitcoin"},{id:"okexp2p",name:"Okex P2P"},{id:"pagcripto",name:"PagCripto"},{id:"paxfulp2p",name:"Paxful P2P"},{id:"ripio",name:"Ripio"},{id:"ripio-exchange",name:"Ripio Exchange"},{id:"satoshitango",name:"Satoshitango"},{id:"syklop2p",name:"Syklo P2P"}]},cl:{available_cryptos:["BTC","ETH","DAI","USDC","USDT","BUSD","LTC"],available_currencies:["CLP","USD"],available_providers:[{id:"binancep2p",name:"Binance P2P"},{id:"bitex",name:"Bitex"},{id:"buda",name:"Buda Trader"},{id:"bybit",name:"Bybit"},{id:"cryptomkt",name:"CryptoMarket"},{id:"hodlhodlp2p",name:"Hodl Hodl P2P"},{id:"huobip2p",name:"Huobi P2P"},{id:"localbitcoinsp2p",name:"LocalBitcoins P2P"},{id:"localcryptosp2p",name:"LocalCryptos P2P"},{id:"orionx",name:"Orionx"},{id:"paxfulp2p",name:"Paxful P2P"},{id:"satoshitango",name:"Satoshitango"},{id:"sesocio",name:"SeSocio"},{id:"syklop2p",name:"Syklo P2P"},{id:"vitawallet",name:"Vita Wallet"}]},co:{available_cryptos:["BTC","ETH","DAI","USDC","USDT","BUSD","LTC","BCH"],available_currencies:["COP","USD"],available_providers:[{id:"binancep2p",name:"Binance P2P"},{id:"buda",name:"Buda Trader"},{id:"bybit",name:"Bybit"},{id:"coinsenda",name:"Coinsenda"},{id:"hodlhodlp2p",name:"Hodl Hodl P2P"},{id:"huobip2p",name:"Huobi P2P"},{id:"localbitcoinsp2p",name:"LocalBitcoins P2P"},{id:"localcryptosp2p",name:"LocalCryptos P2P"},{id:"okexp2p",name:"Okex P2P"},{id:"pandaexchange",name:"Panda Exchange"},{id:"paxfulp2p",name:"Paxful P2P"},{id:"sesocio",name:"SeSocio"},{id:"syklop2p",name:"Syklo P2P"}]},mx:{available_cryptos:["BTC","ETH","DAI","USDC","USDT","BUSD","BNB","MATIC","LTC","BCH","DOGE"],available_currencies:["MXN","USD"],available_providers:[{id:"binancep2p",name:"Binance P2P"},{id:"bitrus",name:"Bitrus"},{id:"bitso",name:"Bitso"},{id:"bybit",name:"Bybit"},{id:"domitai",name:"Domitai"},{id:"hodlhodlp2p",name:"Hodl Hodl P2P"},{id:"huobip2p",name:"Huobi P2P"},{id:"kucoinp2p",name:"KuCoin P2P"},{id:"latamex",name:"Latamex"},{id:"localbitcoinsp2p",name:"LocalBitcoins P2P"},{id:"localcryptosp2p",name:"LocalCryptos P2P"},{id:"okexp2p",name:"Okex P2P"},{id:"paxfulp2p",name:"Paxful P2P"},{id:"ripio",name:"Ripio"},{id:"satoshitango",name:"Satoshitango"},{id:"syklop2p",name:"Syklo P2P"},{id:"volabit",name:"Volabit"}]},pe:{available_cryptos:["BTC","ETH","DAI","USDC","USDT","BUSD","LTC"],available_currencies:["PEN","USD"],available_providers:[{id:"agentebtc",name:"AgenteBTC"},{id:"binancep2p",name:"Binance P2P"},{id:"buda",name:"Buda Trader"},{id:"bybit",name:"Bybit"},{id:"cryptomkt",name:"CryptoMarket"},{id:"decrypto",name:"Decrypto"},{id:"fluyez",name:"Fluyez"},{id:"hodlhodlp2p",name:"Hodl Hodl P2P"},{id:"huobip2p",name:"Huobi P2P"},{id:"localbitcoinsp2p",name:"LocalBitcoins P2P"},{id:"localcryptosp2p",name:"LocalCryptos P2P"},{id:"okexp2p",name:"Okex P2P"},{id:"paxfulp2p",name:"Paxful P2P"},{id:"satoshitango",name:"Satoshitango"},{id:"sesocio",name:"SeSocio"},{id:"syklop2p",name:"Syklo P2P"}]},ve:{available_cryptos:["BTC","ETH","DAI","USDT","BUSD","BNB"],available_currencies:["VES"],available_providers:[{id:"binancep2p",name:"Binance P2P"},{id:"localcryptosp2p",name:"LocalCryptos P2P"},{id:"syklop2p",name:"Syklo P2P"}]},us:{available_cryptos:[],available_currencies:[],available_providers:[]}};function t(){return n[window.COUNTRY]}},328:function(e,a,i){"use strict";i.r(a);var n=i(12),t=i(0),o=i.n(t),r=i(202),c=i(175),s=i(138),l=i(159),d=i(34),p=i(2);function m(){var e=Object(s.a)().t,a=o.a.useState(!1),i=Object(n.a)(a,2),t=i[0],m=i[1],b=o.a.useState(!1),h=Object(n.a)(b,2),u=h[0],j=h[1],x=o.a.useState(!1),O=Object(n.a)(x,2),P=O[0],y=O[1],C=o.a.useState(!1),f=Object(n.a)(C,2),g=f[0],v=f[1];return Object(p.jsxs)(p.Fragment,{children:["us"!==window.COUNTRY&&Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("div",{className:"grid md:grid-cols-2 md:gap-5 bg-gray-850 text-white overflow-auto",children:[Object(p.jsxs)("div",{className:"border border-gray-600 p-5 m-5",children:[Object(p.jsx)("h4",{className:"text-2xl",children:e("\xbfQu\xe9 es Cryptosaurio?")}),Object(p.jsx)("p",{className:"pt-2",children:e("Cryptosaurio es una herramienta para ayudarte a tomar buenas decisiones a la hora de comprar, vender o invertir criptomonedas. Podr\xe1s comparar precios, rendimientos de Staking y Farming, ver oportunidades de arbitraje y mucho m\xe1s.")})]}),Object(p.jsxs)("div",{className:"border border-gray-600 p-5 m-5",children:[Object(p.jsx)("h4",{className:"text-2xl",children:e("\xbfD\xf3nde comprar criptomonedas?")}),Object(p.jsx)("p",{className:"pt-2",children:e("En Cryptosaurio podr\xe1s ver d\xf3nde comprar Bitcoin, Ethereum y otras criptos a precio final y ver el desgloce para entender qu\xe9 te est\xe1n cobrando. Adem\xe1s, podr\xe1s leer las opiniones que van dejando otros usuarios para aprender de su experiencia.")})]})]}),Object(p.jsxs)("div",{className:"grid grid-flow-row md:grid-cols-4 md:gap-5 bg-gray-850 text-white text-xs",children:[Object(p.jsxs)("div",{className:"grid grid-flow-row border border-gray-600 col-span-1 py-5 m-5",children:[Object(p.jsxs)("div",{className:"cursor-pointer",onClick:function(){j(!u),m(!1),y(!1),v(!1)},children:[Object(p.jsx)(l.r,{className:"mx-auto fill-current text-white h-6 w-6"}),Object(p.jsx)("h4",{className:"text-center pt-2",children:e("\xbfQuieres dejar sugerencias?")})]}),u&&Object(p.jsxs)("p",{className:"text-center pt-2",children:[e("Escr\xedbenos a")," ",Object(p.jsx)("a",{className:"underline",target:"_blank",rel:"noreferrer",href:"mailto:".concat(e("info@cryptosaurio.com")),children:e("info@cryptosaurio.com")})]})]}),Object(p.jsxs)("div",{className:"grid grid-flow-row border border-gray-600 col-span-1 py-5 m-5",children:[Object(p.jsxs)("div",{className:"cursor-pointer",onClick:function(){m(!t),j(!1),y(!1),v(!1)},children:[Object(p.jsx)(l.k,{className:"mx-auto fill-current text-white h-6 w-6"}),Object(p.jsx)("h4",{className:"text-center pt-2",children:e("\xbfQuieres que mostremos tus precios?")})]}),t&&Object(p.jsx)("p",{className:"text-center pt-2",children:Object(p.jsx)("a",{className:"underline",target:"_blank",rel:"noreferrer",href:e("https://forms.gle/udSSAwudd3UBvqxC7"),children:e("Completa este formulario")})})]}),Object(p.jsxs)("div",{className:"grid grid-flow-row border border-gray-600 col-span-1 py-5 m-5",children:[Object(p.jsxs)("div",{className:"cursor-pointer",onClick:function(){y(!P),m(!1),j(!1),v(!1)},children:[Object(p.jsx)(l.y,{className:"mx-auto fill-current text-white h-6 w-6"}),Object(p.jsx)("h4",{className:"text-center pt-2",children:e("\xbfQuieres pautar en Cryptosaurio.com?")})]}),P&&Object(p.jsxs)("p",{className:"text-center pt-2",children:[e("Escr\xedbenos a")," ",Object(p.jsx)("a",{className:"underline",target:"_blank",rel:"noreferrer",href:"mailto:".concat(e("marketing@cryptosaurio.com")),children:e("marketing@cryptosaurio.com")})]})]}),Object(p.jsxs)("div",{className:"grid grid-flow-row border border-gray-600 col-span-1 py-5 m-5",children:[Object(p.jsxs)("div",{className:"cursor-pointer",onClick:function(){v(!g),m(!1),j(!1),y(!1)},children:[Object(p.jsx)(l.x,{className:"mx-auto fill-current text-white h-6 w-6"}),Object(p.jsx)("h4",{className:"text-center pt-2",children:e("\xbfEncontraste un error?")})]}),g&&Object(p.jsxs)("p",{className:"text-center pt-2",children:[e("Reportalo a")," ",Object(p.jsx)("a",{className:"underline",target:"_blank",rel:"noreferrer",href:"mailto:".concat(e("errores@cryptosaurio.com")),children:e("errores@cryptosaurio.com")})]})]})]}),Object(p.jsx)("div",{className:"pb-5 px-5 bg-gray-850 text-white overflow-auto text-sm",children:Object(p.jsxs)("p",{className:"pt-2",children:[e("En {{country}} mostramos los precios de",{country:window.COUNTRY_NAME}),"\xa0",Object(r.a)().available_cryptos.map((function(e,a){return Object(p.jsxs)(o.a.Fragment,{children:[Object(p.jsx)(d.b,{to:"br"!==window.COUNTRY?"/criptomoneda/".concat(Object(c.a)(e).name.split(" ").join("-").toLowerCase()):"/criptomoeda/".concat(Object(c.a)(e).name.split(" ").join("-").toLowerCase()),children:Object(c.a)(e).name}),a<Object(r.a)().available_cryptos.length-2?", ":a<Object(r.a)().available_cryptos.length-1?" y ":""]},a)})),"\xa0",e("de los proveedores"),"\xa0",Object(r.a)().available_providers.map((function(e,a){return Object(p.jsxs)(o.a.Fragment,{children:[Object(p.jsx)("span",{children:e.name}),a<Object(r.a)().available_providers.length-2?", ":a<Object(r.a)().available_providers.length-1?" y ":"."]},a)}))]})})]}),Object(p.jsxs)("div",{className:"flex justify-center",children:[Object(p.jsxs)("div",{className:"flex text-white items-center justify-center pr-5",children:[Object(p.jsx)("a",{target:"_blank",rel:"sponsored noreferrer",href:e("https://twitter.com/cryptosaurioweb"),children:Object(p.jsx)("svg",{className:"fill-current text-white w-7 h-7",viewBox:"0 0 512 512",children:Object(p.jsx)("path",{d:"M459 152l1 13c0 139-106 299-299 299-59 0-115-17-161-47a217 217 0 00156-44c-47-1-85-31-98-72l19 1c10 0 19-1 28-3-48-10-84-52-84-103v-2c14 8 30 13 47 14A105 105 0 0136 67c51 64 129 106 216 110-2-8-2-16-2-24a105 105 0 01181-72c24-4 47-13 67-25-8 24-25 45-46 58 21-3 41-8 60-17-14 21-32 40-53 55z"})})}),Object(p.jsx)("a",{target:"_blank",rel:"sponsored noreferrer",href:e("https://instagram.com/cryptosaurio"),children:Object(p.jsx)("svg",{className:"fill-current text-white w-7 h-7",viewBox:"0 0 448 512",children:Object(p.jsx)("path",{d:"M224 141a115 115 0 100 229 115 115 0 000-229zm0 190a75 75 0 110-150 75 75 0 010 150zm147-195a27 27 0 11-54 0 27 27 0 0154 0zm76 28c-2-36-10-68-37-94-26-27-58-35-93-37-37-2-148-2-185 0-36 2-68 10-94 36S3 129 1 164c-2 37-2 148 0 185 2 36 10 68 37 94s58 35 94 36c37 3 148 3 185 0 35-1 67-9 93-36 27-26 35-58 37-94 2-37 2-147 0-184zm-48 224c-8 20-23 35-43 43-29 11-99 9-132 9s-103 2-132-9c-20-8-35-23-43-43-11-29-9-99-9-132s-2-103 9-132c8-20 23-35 43-43 30-11 100-9 132-9s103-2 132 9c20 8 35 23 43 43 12 29 9 99 9 132s3 103-9 132z"})})}),Object(p.jsx)("a",{target:"_blank",rel:"sponsored noreferrer",href:"https://t.me/cryptosaurio",children:Object(p.jsx)("svg",{className:"fill-current text-white w-7 h-7",viewBox:"0 0 496 512",children:Object(p.jsx)("path",{d:"M248 8a248 248 0 100 496 248 248 0 000-496zm122 170l-41 192c-3 13-11 17-22 10l-62-45-30 28c-3 4-6 6-13 6l5-63 115-103c5-5-1-7-8-3l-142 89-61-19c-14-4-14-13 3-19l239-93c11-4 20 3 17 20z"})})})]}),Object(p.jsxs)("div",{className:"grid grid-rows-2 text-white text-xs pt-5 pb-5",children:[Object(p.jsxs)("p",{children:[e("Cryptosaurio 2020-2022 presente en")," ",Object(p.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://www.cryptosaurio.com/ar",children:"Argentina"}),", ",Object(p.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://www.cryptossauro.com",children:"Brasil"}),", ",Object(p.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://www.cryptosaurio.com/cl",children:"Chile"}),", ",Object(p.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://www.cryptosaurio.com/co",children:"Colombia"}),", ",Object(p.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://www.cryptosaurio.com/mx",children:"M\xe9xico"}),", ",Object(p.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://www.cryptosaurio.com/pe",children:"Per\xfa"})," ",e("y")," ",Object(p.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://www.cryptosaurio.com/ve",children:"Venezuela"}),"."]}),Object(p.jsxs)("div",{className:"text-xs underline grid grid-flow-row sm:grid-flow-col sm:auto-cols-max sm:gap-2 pt-3 sm:pt-0",children:[Object(p.jsx)("a",{href:"".concat("br"!==window.COUNTRY?"/".concat(window.COUNTRY):"","/").concat(e("terminos-y-condiciones")),children:e("Ver t\xe9rminos y condiciones")}),Object(p.jsx)("a",{href:"".concat("br"!==window.COUNTRY?"/".concat(window.COUNTRY):"","/").concat(e("politicas-de-privacidad")),children:e("Ver pol\xedticas de privacidad")})]})]})]})]})}a.default=o.a.memo(m,(function(){return!0}))}}]);