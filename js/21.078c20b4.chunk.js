/*! For license information please see 21.078c20b4.chunk.js.LICENSE.txt */
(this["webpackJsonpfront-in-react"]=this["webpackJsonpfront-in-react"]||[]).push([[21],{133:function(e,t,o){"use strict";o.r(t),o.d(t,"default",(function(){return b}));var r=o(145),n=o(12),i=o(0),a=o(150),s=o(134),c={intl_exchange:[{name:"Binance",icon:"https://graph.facebook.com/binance/picture?type=square",url:"https://www.binance.com/en/register?ref=39537186"},{name:"CEX.IO",icon:"https://graph.facebook.com/cexio/picture?type=square",url:"https://cexio.page.link/NU6Z"},{name:"Coinbase",icon:"https://graph.facebook.com/coinbase/picture?type=square",url:"https://coinbase.com/join/537df5f93bef2f950a000038"},{name:"Crypto.com",icon:"https://graph.facebook.com/cryptocomofficial/picture?type=square",url:"https://crypto.com/exch/w2uwxsynrh"},{name:"Huobi Global",icon:"https://www.huobi.com/favicon.ico",url:"https://www.huobi.com/es-es/topic/invited/?invite_code=hsg57"},{name:"Kraken",icon:"https://graph.facebook.com/KrakenFX/picture?type=square",url:"https://r.kraken.com/c/2546987/744552/10583?u=https%3A%2F%2Fwww.kraken.com/es-es"},{name:"ShapeShift",icon:"https://graph.facebook.com/ShapeShiftPlatform/picture?type=square",url:"https://shapeshift.app.link/share?af=BcN6tWFYwH5njT4E"}],p2p_exchange:[{name:"Binance",icon:"https://graph.facebook.com/binance/picture?type=square",url:"https://www.binance.com/en/register?ref=39537186"},{name:"Hodl Hodl",icon:"https://graph.facebook.com/hhodl/picture?type=square",url:"https://hodlhodl.com/join/R7YQ"},{name:"LocalBitcoins",icon:"https://localbitcoins.com/cached-static/img/touch-icon-144.png",url:"https://localbitcoins.com/?ch=1eq5i"},{name:"LocalCryptos",icon:"https://localcryptos.com/images/favicon-128.png",url:"https://localcryptos.com/r/cryptosaurio"},{name:"Okex",icon:"https://graph.facebook.com/okxofficial/picture?type=square",url:"https://www.okex.com/join/2952709"},{name:"Paxful",icon:"https://graph.facebook.com/paxful/picture?type=square",url:"https://paxful.com/es?r=Dgk4nWx32dJ&track=cryptosaurio"}],swap:[{name:"1inch",icon:"https://1inch.exchange/assets/favicon/apple-touch-icon.png",url:"https://1inch.exchange/#/r/0x4EA94DF39AF882F6160591fe38c001Cc4B683D40"},{name:"Curve",icon:"https://www.curve.fi/apple-touch-icon.png",url:"https://www.curve.fi/"},{name:"FixedFloat",icon:"https://fixedfloat.com/assets/images/favicon.png",url:"https://fixedfloat.com/"},{name:"Kyber",icon:"https://kyberswap.com/favicon.png?version=v",url:"https://www.kyberswap.com/"},{name:"Matcha",icon:"https://matcha.xyz/apple-touch-icon.png",url:"https://matcha.xyz/"},{name:"PancakeSwap",icon:"https://pancakeswap.finance/logo.png",url:"https://pancakeswap.finance/"},{name:"Paraswap",icon:"https://avatars.githubusercontent.com/u/52015910",url:"https://paraswap.io/"},{name:"Uniswap",icon:"https://app.uniswap.org/images/192x192_App_Icon.png",url:"https://app.uniswap.org/"}]};function p(e){return c[e]}var l=o(196),m=o(177),d=o(186),u=o(151),h=o(225),w=o(2);function b(){return Object(w.jsx)(d.a,{reCaptchaKey:"6Le6vr8ZAAAAAH6G2kvLs-VDT1cKIa_UGepnpMBI",children:Object(w.jsx)(g,{})})}function g(){var e={page:"tools",country:window.COUNTRY},t=Object(u.useTracking)(e).trackEvent,o=Object(s.a)().t,c=Object(d.b)().executeRecaptcha;Object(i.useEffect)((function(){var o={event:"pageview"};"production"===window.ENV?t(o):console.log(e,o)}),[]);var b=Object(i.useState)([]),g=Object(n.a)(b,2),y=g[0],f=g[1],v=Object(i.useState)([]),j=Object(n.a)(v,2),x=j[0],N=j[1],O=Object(i.useState)([]),_=Object(n.a)(O,2),k=_[0],U=_[1];return Object(i.useEffect)((function(){fetch("br"!==window.COUNTRY?"".concat(window.BARNEY_API_URL,"/wallets"):"".concat(window.BARNEY_BR_API_URL,"/wallets")).then((function(e){return e.json()})).then((function(e){"br"===window.COUNTRY&&(e=e.filter((function(e){return null!==e.content_pt}))),f(e)})).catch((function(){return f([])}))}),[]),Object(i.useEffect)((function(){fetch("br"!==window.COUNTRY?"".concat(window.BARNEY_API_URL,"/").concat(window.COUNTRY,"/providers"):"".concat(window.BARNEY_BR_API_URL,"/providers")).then((function(e){return e.json()})).then((function(e){N(e)})).catch((function(){return N([])}))}),[]),Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(h.a,{page:"tools"}),Object(w.jsx)(m.a,{location:"tools"}),Object(w.jsxs)("div",{className:"mx-5 mt-5",children:[Object(w.jsx)("h1",{className:"text-2xl",children:o("Wallets")}),Object(w.jsx)("h2",{children:o("Guarda tus criptomonedas en una wallet para que est\xe9n seguras.")})]}),Object(w.jsxs)("div",{className:"grid lg:grid-cols-2 md:grid-flow-row pb-10",children:[y.sort((function(e,t){return t.recommended-e.recommended})).map((function(e,t){return Object(w.jsxs)("a",{className:"m-5",target:"_blank",href:e.url,rel:"sponsored noreferrer",children:[Object(w.jsx)("div",{className:"bg-gray-800 text-green-400 inline-block",children:0===t?o("M\xe1s recomendada"):null}),Object(w.jsxs)("div",{className:["bg-gray-900 bg-opacity-30 grid grid-cols-3 h-full border",0===t?"border-green-400":"border-gray-500"].join(" "),children:[Object(w.jsx)("div",{className:"m-auto flex-shrink-0 w-20 hidden sm:block",children:Object(w.jsx)("img",{loading:"lazy",src:e.icon})}),Object(w.jsx)("div",{className:"m-auto col-span-3 sm:col-span-2",children:Object(w.jsxs)("div",{className:"p-5",children:[Object(w.jsx)("h5",{className:"text-xl font-semibold mb-2 inline align-middle",children:e.name}),e.guarded&&Object(w.jsx)(a.A,{"data-tip":!0,"data-for":"guarded-wallet",className:"inline-block fill-current w-5 h-5 align-text-top mx-1 text-blue-600"})||Object(w.jsx)(a.v,{"data-tip":!0,"data-for":"non-guarded-wallet",className:"inline-block fill-current w-5 h-5 align-text-top mx-1 text-blue-600"}),e.recommended>0&&Object(w.jsx)("p",{className:"text-gray-600",children:e.recommended>1?o("Recomendado por {{amount}} personas.",{amount:e.recommended}):o("Recomendado por 1 persona.")}),null!==e.available_cryptos&&Object(w.jsxs)("p",{className:"mb-4",children:[o("Permite almacenar"),": ",e.available_cryptos.join(", ")]}),Object(w.jsx)("p",{className:"mb-4",children:"br"!==window.COUNTRY?e.content_es:e.content_pt||e.content_es})]})})]}),-1===k.indexOf(e.id)&&Object(w.jsx)("p",{className:"m-auto text-right w-full pr-5 text-blue-400 underline -mt-7",onClick:function(t){t.preventDefault(),function(e){e.recommended+=1,f(Object(r.a)(y)),U([].concat(Object(r.a)(k),[e.id])),c&&c("submit_wallet_recommendation").then((function(t){fetch("br"!==window.COUNTRY?"".concat(window.BARNEY_API_URL,"/").concat(window.COUNTRY,"/wallet"):"".concat(window.BARNEY_BR_API_URL,"/wallet"),{method:"PATCH",headers:{"Content-type":"application/json"},body:JSON.stringify({id:e.id,captcha_response:t})}).then((function(){})).catch((function(){}))}))}(e)},children:o("RECOMENDAR")})]},t)})),y.length>0&&Object(w.jsxs)(w.Fragment,{children:[Object(w.jsxs)(l.a,{html:!0,place:"right",className:"w-48",effect:"solid",id:"guarded-wallet",children:[Object(w.jsx)("p",{className:"font-bold",children:o("Wallet con custodia")}),Object(w.jsx)("p",{children:o("Un intermediario te facilitar\xe1 el acceso a tus criptomonedas y te ayudar\xe1 a recuperar tu clave si alguna vez te la olvidas.")})]}),Object(w.jsxs)(l.a,{html:!0,place:"right",className:"w-48",effect:"solid",id:"non-guarded-wallet",children:[Object(w.jsx)("p",{className:"font-bold",children:o("Wallet sin custodia")}),Object(w.jsx)("p",{children:o("No hay intermediarios entre tu y tus criptomonedas. Eres el \xfanico responsable y si pierdes la clave, no podr\xe1s acceder a tus activos.")})]})]}),0===y.length&&Object(r.a)(Array(6)).map((function(e,t){return Object(w.jsxs)("div",{className:"m-5",children:[Object(w.jsx)("div",{className:"mb-1 w-32 h-5 animate-pulse bg-gray-700"}),Object(w.jsxs)("div",{className:"grid grid-cols-3 h-full p-5 border border-gray-500 bg-gray-850",children:[Object(w.jsx)("div",{className:"m-auto flex-shrink-0 bg-gray-700 h-20 w-20 animate-pulse"}),Object(w.jsx)("div",{className:"m-auto col-span-2 p-0.5",children:Object(w.jsxs)("div",{className:"p-5",children:[Object(w.jsx)("p",{className:"mb-2 bg-gray-700 animate-pulse w-28 sm:w-64 h-3"}),Object(w.jsx)("p",{className:"mb-2 bg-gray-700 animate-pulse w-36 sm:w-72 h-3"}),Object(w.jsx)("p",{className:"mb-2 bg-gray-700 animate-pulse w-40 sm:w-80 h-3"}),Object(w.jsx)("p",{className:"mb-2 bg-gray-700 animate-pulse w-40 sm:w-80 h-3"}),Object(w.jsx)("p",{className:"bg-gray-700 animate-pulse w-24 sm:w-64 h-3"})]})})]})]},t)}))]}),Object(w.jsxs)("div",{className:"mx-5",children:[Object(w.jsx)("h1",{className:"text-2xl",children:o("Para operaciones en {{country}}",{country:window.COUNTRY_NAME})}),Object(w.jsx)("h2",{children:o("Compra o vende criptomonedas a proveedores en el pa\xeds.")})]}),x.length>0&&Object(w.jsx)("div",{className:"flex flex-row flex-wrap",children:x.filter((function(e){return e.enabled})).map((function(e,t){return Object(w.jsxs)("a",{className:"grid grid-cols-2 w-44 p-4 m-1",rel:"sponsored noreferrer",target:"_blank",href:e.url,children:[Object(w.jsx)("img",{className:"w-12 h-12 rounded-full",loading:"lazy",src:e.icon}),Object(w.jsx)("p",{className:"self-center -ml-2 w-24",children:e.name})]},t)}))}),0===x.length&&Object(w.jsx)("div",{className:"flex flex-row flex-wrap",children:Object(r.a)(Array(6)).map((function(e,t){return Object(w.jsxs)("div",{className:"grid grid-cols-2 w-44 h-20 p-4 m-1",children:[Object(w.jsx)("p",{className:"bg-gray-700 animate-pulse w-12 rounded-full"}),Object(w.jsx)("p",{className:"bg-gray-700 animate-pulse self-center -ml-2 w-24 h-8"})]},t)}))}),Object(w.jsxs)("div",{className:"mx-5 mt-5",children:[Object(w.jsx)("h1",{className:"text-2xl",children:o("Para operaciones en el exterior")}),Object(w.jsx)("h2",{children:o("Compra o vende criptomonedas a proveedores fuera de {{country}}.",{country:window.COUNTRY_NAME})})]}),p("intl_exchange").length>0&&Object(w.jsx)("div",{className:"flex flex-row flex-wrap",children:p("intl_exchange").map((function(e,t){return Object(w.jsxs)("a",{className:"grid grid-cols-2 w-44 p-4 m-1",rel:"sponsored noreferrer",target:"_blank",href:e.url,children:[Object(w.jsx)("img",{className:"w-12 h-12 rounded-full",loading:"lazy",src:e.icon}),Object(w.jsx)("p",{className:"self-center -ml-2 w-24",children:e.name})]},t)}))}),Object(w.jsxs)("div",{className:"mx-5 mt-5",children:[Object(w.jsx)("h1",{className:"text-2xl",children:o("Para operaciones P2P")}),Object(w.jsx)("h2",{children:o("Compra o vende criptomonedas directamente a otras personas.",{country:window.COUNTRY_NAME})})]}),p("p2p_exchange").length>0&&Object(w.jsx)("div",{className:"flex flex-row flex-wrap",children:p("p2p_exchange").map((function(e,t){return Object(w.jsxs)("a",{className:"grid grid-cols-2 w-44 p-4 m-1",rel:"sponsored noreferrer",target:"_blank",href:e.url,children:[Object(w.jsx)("img",{className:"w-12 h-12 rounded-full",loading:"lazy",src:e.icon}),Object(w.jsx)("p",{className:"self-center -ml-2 w-24",children:e.name})]},t)}))}),Object(w.jsxs)("div",{className:"mx-5 mt-5",children:[Object(w.jsx)("h1",{className:"text-2xl",children:o("Para cambiar tus criptomonedas | Swap")}),Object(w.jsx)("h2",{children:o("Intercambia tus criptomonedas por otras al instante.",{country:window.COUNTRY_NAME})})]}),p("swap").length>0&&Object(w.jsx)("div",{className:"flex flex-row flex-wrap",children:p("swap").map((function(e,t){return Object(w.jsxs)("a",{className:"grid grid-cols-2 w-44 p-4 m-1",rel:"sponsored noreferrer",target:"_blank",href:e.url,children:[Object(w.jsx)("img",{className:"w-12 h-12 rounded-full",loading:"lazy",src:e.icon}),Object(w.jsx)("p",{className:"self-center -ml-2 w-24",children:e.name})]},t)}))})]})}},163:function(e,t,o){"use strict";o.d(t,"a",(function(){return n}));var r={ar:[{type:"infoAccess",location:"home",provider:"satoshitango",providerName:"Satoshitango",directUrl:"https://www.satoshitango.com/gift/40OTRX9K",sponsoredUrl:"https://www.satoshitango.com/blog/como-comprar-bitcoins-con-satoshitango/",availableInCryptos:["BTC","ETH","DAI","USDC","USDT","LTC","ADA","SOL","DOT","UNI","LINK","XRP","BCH","DOGE"]},{type:"infoAccess",location:"home",provider:"coinex",providerName:"CoinEx",directUrl:"https://www.coinex.com/register?refer_code=82yur",sponsoredUrl:"https://spanish-marketing.medium.com/",availableInCryptos:["BTC","ETH","LTC","BNB","ADA","MATIC","UNI"]},{type:"opportunityBanner",location:"home",provider:"lemoncash",providerName:"LemonCash",desktopImgUrl:"https://www.cryptosaurio.com/static/img/sponsored/lemoncash-opportunity-desktop.webp",mobileImgUrl:"https://www.cryptosaurio.com/static/img/sponsored/lemoncash-opportunity-mobile.webp",sponsoredUrl:"https://www.lemon.me/?utm_source=Cryptosaurio&utm_medium=OpportunityBanner&utm_campaign=branding"},{type:"opportunityBanner",location:"home",provider:"satoshitango",providerName:"Satoshitango",desktopImgUrl:"https://www.cryptosaurio.com/static/img/sponsored/satoshitango-opportunity-desktop.webp",mobileImgUrl:"https://www.cryptosaurio.com/static/img/sponsored/satoshitango-opportunity-mobile.webp",sponsoredUrl:"https://www.satoshitango.com/register?utm_source=BANNER-CRYPTOSAURIO-YA&utm_medium=BANNER-REFERIDO&utm_campaign=BANNER-CRYPTOSAURIO-REGISTRO&utm_id=CRYPTOSAURIO-REGISTRO&utm_term=BANNER-CS&utm_content=BANNER"},{type:"topBanner",location:"home",provider:"letsbit",providerName:"Let'sBit",desktopImgUrl:"https://www.cryptosaurio.com/static/img/sponsored/letsbit7-desktop.webp",mobileImgUrl:"https://www.cryptosaurio.com/static/img/sponsored/letsbit7-mobile.webp",sponsoredUrl:"https://letsbit.io/register/IDF37AE929E9?utm_source=cryptosaurio&utm_medium=banner&utm_campaign=rendimientos",weight:0},{type:"topBanner",location:"home",provider:"lemoncash",providerName:"LemonCash",desktopImgUrl:"https://www.cryptosaurio.com/static/img/sponsored/lemoncash-desktop7.webp",mobileImgUrl:"https://www.cryptosaurio.com/static/img/sponsored/lemoncash-mobile6.webp",sponsoredUrl:"https://www.lemon.me/?utm_source=Cryptosaurio&utm_medium=Banner&utm_campaign=branding",weight:1},{type:"topBanner",location:"home",provider:"cryptomkt",providerName:"CryptoMarket",desktopImgUrl:"https://www.cryptosaurio.com/static/img/sponsored/cryptomkt-desktop3.webp",mobileImgUrl:"https://www.cryptosaurio.com/static/img/sponsored/cryptomkt-mobile3.webp",sponsoredUrl:"https://www.cryptomkt.com/es/argentina",weight:2},{type:"topBanner",location:"home",provider:"fiwind",providerName:"Fiwind",desktopImgUrl:"https://www.cryptosaurio.com/static/img/sponsored/fiwind-desktop.webp",mobileImgUrl:"https://www.cryptosaurio.com/static/img/sponsored/fiwind-mobile.webp",sponsoredUrl:"https://fiwind.io/",weight:5},{type:"topBanner",location:"home",provider:"calypsop2p",providerName:"Calypso Exchange",desktopImgUrl:"https://www.cryptosaurio.com/static/img/sponsored/calypsop2p-desktop.webp",mobileImgUrl:"https://www.cryptosaurio.com/static/img/sponsored/calypsop2p-mobile.webp",sponsoredUrl:"https://calypso.exchange/#contactohash",weight:6},{type:"middleBanner",location:"home",provider:"copter",providerName:"Copter",desktopImgUrl:"https://www.cryptosaurio.com/static/img/sponsored/copter-desktop5.webp",mobileImgUrl:"https://www.cryptosaurio.com/static/img/sponsored/copter-mobile3.webp",sponsoredUrl:"https://www.exchangecopter.com/",weight:0},{type:"middleBanner",location:"home",provider:"quantia",providerName:"Quantia",desktopImgUrl:"https://www.cryptosaurio.com/static/img/sponsored/quantiacapital4-desktop.webp",mobileImgUrl:"https://www.cryptosaurio.com/static/img/sponsored/quantiacapital4-mobile.webp",sponsoredUrl:"https://bit.ly/QUANTIA--CAPITAL",weight:1},{type:"middleBanner",location:"home",provider:"coinex",providerName:"CoinEx",desktopImgUrl:"https://www.cryptosaurio.com/static/img/sponsored/coinex-desktop3.webp",mobileImgUrl:"https://www.cryptosaurio.com/static/img/sponsored/coinex-mobile3.webp",sponsoredUrl:"https://www.coinex.com/register/?channel=cryptosaurio",weight:2},{type:"middleBanner",location:"home",provider:"syklo",providerName:"Syklo P2P",desktopImgUrl:"https://www.cryptosaurio.com/static/img/sponsored/syklo-desktop.webp",mobileImgUrl:"https://www.cryptosaurio.com/static/img/sponsored/syklo-mobile.webp",sponsoredUrl:"https://syklo.io/",weight:3},{type:"middleBanner",location:"home",provider:"cryptoavisos",providerName:"Cryptoavisos",desktopImgUrl:"https://www.cryptosaurio.com/static/img/sponsored/cryptoavisos-desktop.webp",mobileImgUrl:"https://www.cryptosaurio.com/static/img/sponsored/cryptoavisos-mobile.webp",sponsoredUrl:"https://cryptoavisos.com/?utm_source=cryptosaurio&utm_medium=middle_home_banner&utm_campaign=partnership",weight:6},{type:"opportunityBanner",location:"BTC-stats",provider:"cryptomkt",providerName:"CryptoMarket",desktopImgUrl:"https://www.cryptosaurio.com/static/img/sponsored/cryptomkt-desktop3.webp",mobileImgUrl:"https://www.cryptosaurio.com/static/img/sponsored/cryptomkt-mobile3.webp",sponsoredUrl:"https://www.cryptomkt.com/account/register?ref=215813"},{type:"opportunityBanner",location:"staking",provider:"lemoncash",providerName:"LemonCash",desktopImgUrl:"https://www.cryptosaurio.com/static/img/sponsored/lemoncash-desktop7.webp",mobileImgUrl:"https://www.cryptosaurio.com/static/img/sponsored/lemoncash-mobile6.webp",sponsoredUrl:"https://www.lemon.me/?utm_source=Cryptosaurio&utm_medium=BannerStaking&utm_campaign=branding"},{type:"opportunityBanner",location:"staking",provider:"quantia",providerName:"Quantia",desktopImgUrl:"https://www.cryptosaurio.com/static/img/sponsored/quantiacapital4-desktop.webp",mobileImgUrl:"https://www.cryptosaurio.com/static/img/sponsored/quantiacapital4-mobile.webp",sponsoredUrl:"https://bit.ly/QUANTIA--CAPITAL"},{type:"opportunityBanner",location:"staking",provider:"letsbit",providerName:"Let'sBit",desktopImgUrl:"https://www.cryptosaurio.com/static/img/sponsored/letsbit7-desktop.webp",mobileImgUrl:"https://www.cryptosaurio.com/static/img/sponsored/letsbit7-mobile.webp",sponsoredUrl:"https://letsbit.io/register/IDF37AE929E9?utm_source=cryptosaurio_inversiones&utm_medium=banner&utm_campaign=rendimientos"},{type:"opportunityBanner",location:"tools",provider:"syklo",providerName:"Syklo P2P",desktopImgUrl:"https://www.cryptosaurio.com/static/img/sponsored/syklo-desktop.webp",mobileImgUrl:"https://www.cryptosaurio.com/static/img/sponsored/syklo-mobile.webp",sponsoredUrl:"https://syklo.io/"},{type:"middleBanner",location:"home",provider:"vibrant",providerName:"Vibrant",desktopImgUrl:"https://www.cryptosaurio.com/static/img/sponsored/vibrant-home-desktop.webp",mobileImgUrl:"https://www.cryptosaurio.com/static/img/sponsored/vibrant-home-mobile.webp",sponsoredUrl:"http://vibrantapp.com/?utm_medium=display&utm_source=cryptosaurus&utm_campaign=listing_web_hp&utm_content=0_202112_cryptosaurio_na",weight:5},{type:"infoAccess",location:"home",provider:"vibrant",providerName:"Vibrant",directUrl:"https://vibrantapp.com/",sponsoredUrl:"http://vibrantapp.com/?utm_medium=display&utm_source=cryptosaurus&utm_campaign=listing_web_hp&utm_content=0_202112_cryptosaurio_na",availableInCryptos:["USDC"]},{type:"opportunityBanner",location:"p2p",provider:"vibrant",providerName:"Vibrant",desktopImgUrl:"https://www.cryptosaurio.com/static/img/sponsored/vibrant-p2p-desktop.webp",mobileImgUrl:"https://www.cryptosaurio.com/static/img/sponsored/vibrant-p2p-mobile.webp",sponsoredUrl:"http://vibrantapp.com/?utm_medium=display&utm_source=cryptosaurus&utm_campaign=listing_web_hp&utm_content=0_202112_cryptosaurio_na"},{type:"opportunityBanner",location:"p2p",provider:"calypsop2p",providerName:"Calypso Exchange",desktopImgUrl:"https://www.cryptosaurio.com/static/img/sponsored/calypsop2p-desktop.webp",mobileImgUrl:"https://www.cryptosaurio.com/static/img/sponsored/calypsop2p-mobile.webp",sponsoredUrl:"https://calypso.exchange/#contactohash"},{type:"opportunityBanner",location:"staking",provider:"vibrant",providerName:"Vibrant",desktopImgUrl:"https://www.cryptosaurio.com/static/img/sponsored/vibrant-staking-desktop.webp",mobileImgUrl:"https://www.cryptosaurio.com/static/img/sponsored/vibrant-staking-mobile.webp",sponsoredUrl:"http://vibrantapp.com/?utm_medium=display&utm_source=cryptosaurus&utm_campaign=listing_web_hp&utm_content=0_202112_cryptosaurio_na"},{type:"opportunityBanner",location:"tools",provider:"vibrant",providerName:"Vibrant",desktopImgUrl:"https://www.cryptosaurio.com/static/img/sponsored/vibrant-tools-desktop.webp",mobileImgUrl:"https://www.cryptosaurio.com/static/img/sponsored/vibrant-tools-mobile.webp",sponsoredUrl:"http://vibrantapp.com/?utm_medium=display&utm_source=cryptosaurus&utm_campaign=listing_web_hp&utm_content=0_202112_cryptosaurio_na"},{type:"premiumNotification",location:"home",provider:"huobi",providerName:"Huobi P2P",title:"Huobi",description:"Compr\xe1 tokens antes de su lanzamiento",imgUrl:"https://www.cryptosaurio.com/static/img/sponsored/huobi-logo.webp",sponsoredUrl:"https://www.huobi.com/es-la/v/register-2?utm_source=Cryptosaurio_LATAM&utm_medium=Banner&utm_campaign=WB300_40_Doge&inviter_id=11337270"}],br:[{type:"infoAccess",location:"home",provider:"bybit",providerName:"Bybit",directUrl:"https://www.bybit.com/es-ES/invite?ref=PW7M2%230",sponsoredUrl:"https://go.bybit.com/e/uM1yN8Mh7hb",availableInCryptos:["BTC","ETH","LTC","BNB","ADA","MATIC","UNI"]}],any:[{type:"infoAccess",location:"home",provider:"bybit",providerName:"Bybit",directUrl:"https://www.bybit.com/es-ES/invite?ref=PW7M2%230",sponsoredUrl:"https://go.bybit.com/e/BTx6M9uu5hb",availableInCryptos:["BTC","ETH","LTC","BNB","ADA","MATIC","UNI"]},{type:"infoAccess",location:"home",provider:"huobi",providerName:"Huobi P2P",directUrl:"https://www.huobi.com/register/?invite_code=yrbt5",sponsoredUrl:"https://www.youtube.com/watch?v=A4fqsKbcWT4&list=PL5-p5W5hHZ5jcPOI0WKNFSedZzI02PZSe",availableInCryptos:["BTC","ETH","USDT","UNI"]},{type:"premiumNotification",location:"home",provider:"huobi",providerName:"Huobi P2P",title:"Huobi",description:"Compra tokens antes de su lanzamiento",imgUrl:"https://www.cryptosaurio.com/static/img/sponsored/huobi-logo.webp",sponsoredUrl:"https://www.huobi.com/es-la/v/register-2?utm_source=Cryptosaurio_LATAM&utm_medium=Banner&utm_campaign=WB300_40_Doge&inviter_id=11337270",excludedCountries:["ar","br","us"]}]};function n(e,t,o,n){return o=o.charAt(0).toLowerCase()+o.slice(1),(r[e]||[]).filter((function(e){return e.location===t})).filter((function(e){return e.type===o})).filter((function(e){return e.availableInCryptos&&e.availableInCryptos.includes(n)||!0})).concat(r.any.filter((function(t){return!(t.excludedCountries&&t.excludedCountries.includes(e))})).filter((function(e){return e.location===t})).filter((function(e){return e.type===o})).filter((function(e){return e.availableInCryptos&&e.availableInCryptos.includes(n)||!0})).filter((function(e,t,o){return t===o.findIndex((function(t){return t.provider===e.provider}))}))).filter((function(e,t,o){return o.findIndex((function(t){return t.provider===e.provider}))===t})).sort((function(e,t){return(e.weight||0)-(t.weight||0)}))}},164:function(e,t,o){},165:function(e,t,o){"use strict";var r=o(0),n=o.n(r),i=o(2);function a(e){var t=e.active,o=e.onClick;return Object(i.jsx)("li",{className:"inline-block",onClick:function(){return o&&o()},children:Object(i.jsx)("label",{className:["cursor-pointer block text-4xl text-white",t||"text-gray-700"].join(" "),children:"\u2022"})})}var s=function(e,t){return e.active===t.active};t.a=n.a.memo(a,s)},166:function(e,t,o){"use strict";function r(){return{responsive:{desktop:{breakpoint:{max:9999,min:769},items:2},mobile:{breakpoint:{max:768,min:0},items:1}},fixed:{desktop:{breakpoint:{max:9999,min:0},items:1}}}}o.d(t,"a",(function(){return r}))},177:function(e,t,o){"use strict";var r=o(12),n=o(0),i=o.n(n),a=o(151),s=o(170),c=o.n(s),p=(o(176),o(164),o(163)),l=o(165),m=o(166),d=o(2);function u(e){var t=e.location,o={page:t,country:window.COUNTRY},i=Object(a.useTracking)(o).trackEvent,s=Object(p.a)(window.COUNTRY,t,"opportunityBanner"),u=!1,h=Object(n.useState)([]),w=Object(r.a)(h,2),b=w[0],g=w[1];return Object(n.useEffect)((function(){u&&g(s.map((function(e,t){var r={event:"user_action",event_category:"".concat(e.provider,"_").concat(e.location,"_").concat(e.type),event_label:"click"};return Object(d.jsxs)("picture",{onClick:function(){"production"===window.ENV?i(r):console.log(o,r),window.open(e.sponsoredUrl)},children:[Object(d.jsx)("source",{srcSet:e.mobileImgUrl,media:"(max-width: 639px)",width:"400",height:e.mobileImgHeightOverride||"100"}),Object(d.jsx)("source",{srcSet:e.desktopImgUrl,media:"(min-width: 640px)",width:"820",height:e.desktopImgHeightOverride||"100"}),Object(d.jsx)("img",{className:["cursor-pointer mx-auto",1===s.index?"my-2":""].join(" "),src:e.desktopImgUrl,width:"820",height:e.desktopImgHeightOverride||"100"})]},t)})))}),[u]),s.length>0?(s=s.sort((function(){return.5-Math.random()})),u=!0,s.forEach((function(e){var t={event:"system_action",event_category:"".concat(e.provider,"_").concat(e.location,"_").concat(e.type),event_label:"show"};"production"===window.ENV?i(t):console.log(o,t)})),Object(d.jsx)(c.a,{className:"rolls-carousel",responsive:Object(m.a)().fixed,renderDotsOutside:!0,showDots:s.length>1,infinite:s.length>1,autoPlay:s.length>1,autoPlaySpeed:4e3,customDot:Object(d.jsx)(l.a,{}),arrows:!1,children:b})):null}t.a=i.a.memo(u,(function(e,t){return e.location===t.location}))},186:function(e,t,o){"use strict";o.d(t,"a",(function(){return l})),o.d(t,"b",(function(){return m}));var r=o(0),n=o.n(r);function i(e,t,o,r){return new(o||(o=Promise))((function(n,i){function a(e){try{c(r.next(e))}catch(e){i(e)}}function s(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?n(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(a,s)}c((r=r.apply(e,t||[])).next())}))}function a(e,t){var o,r,n,i,a={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(o)throw new TypeError("Generator is already executing.");for(;a;)try{if(o=1,r&&(n=2&i[0]?r.return:i[0]?r.throw||((n=r.return)&&n.call(r),0):r.next)&&!(n=n.call(r,i[1])).done)return n;switch(r=0,n&&(i=[2&i[0],n.value]),i[0]){case 0:case 1:n=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((n=(n=a.trys).length>0&&n[n.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!n||i[1]>n[0]&&i[1]<n[3])){a.label=i[1];break}if(6===i[0]&&a.label<n[1]){a.label=n[1],n=i;break}if(n&&a.label<n[2]){a.label=n[2],a.ops.push(i);break}n[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],r=0}finally{o=n=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}}var s,c=function(e){console.warn(e)};(s||(s={})).SCRIPT_NOT_AVAILABLE="Recaptcha script is not available";var p=Object(r.createContext)({executeRecaptcha:function(){throw Error("GoogleReCaptcha Context has not yet been implemented, if you are using useGoogleReCaptcha hook, make sure the hook is called inside component wrapped by GoogleRecaptchaProvider")}});p.Consumer;function l(e){var t=this,o=e.reCaptchaKey,l=e.useEnterprise,m=void 0!==l&&l,d=e.useRecaptchaNet,u=void 0!==d&&d,h=e.scriptProps,w=e.language,b=e.children,g=Object(r.useState)(null),y=g[0],f=g[1];Object(r.useEffect)((function(){if(o){var e=(null==h?void 0:h.id)||"google-recaptcha-v3";return function(e){var t=e.reCaptchaKey,o=e.language,r=e.onLoad,n=e.useRecaptchaNet,i=e.useEnterprise,a=e.scriptProps,s=void 0===a?{}:a,c=s.nonce,p=void 0===c?"":c,l=s.defer,m=void 0!==l&&l,d=s.async,u=void 0!==d&&d,h=s.id,w=void 0===h?"":h,b=s.appendTo,g=void 0===b?void 0:b,y=w||"google-recaptcha-v3";if(function(e){return!!document.querySelector("#"+e)}(y))r();else{var f=function(e){return"https://www."+(e.useRecaptchaNet?"recaptcha.net":"google.com")+"/recaptcha/"+(e.useEnterprise?"enterprise.js":"api.js")}({useEnterprise:i,useRecaptchaNet:n}),v=document.createElement("script");v.id=y,v.src=f+"?render="+t+(o?"&hl="+o:""),p&&(v.nonce=p),v.defer=!!m,v.async=!!u,v.onload=r,("body"===g?document.body:document.getElementsByTagName("head")[0]).appendChild(v)}}({reCaptchaKey:o,useEnterprise:m,useRecaptchaNet:u,scriptProps:h,language:w,onLoad:function(){if(window&&window.grecaptcha){var e=m?window.grecaptcha.enterprise:window.grecaptcha;e.ready((function(){f(e)}))}else c("<GoogleRecaptchaProvider /> "+s.SCRIPT_NOT_AVAILABLE)},onError:function(){c("Error loading google recaptcha script")}}),function(){!function(e){var t=document.querySelector(".grecaptcha-badge");t&&t.parentNode&&document.body.removeChild(t.parentNode);var o=document.querySelector("#"+e);o&&o.remove(),function(){var e=document.querySelector("script[src^='https://www.gstatic.com/recaptcha/releases']");e&&e.remove()}()}(e)}}c("<GoogleReCaptchaProvider /> recaptcha key not provided")}),[m,u,h,w,o]);var v=Object(r.useCallback)((function(e){return i(t,void 0,void 0,(function(){return a(this,(function(t){switch(t.label){case 0:if(!y||!y.execute)throw new Error("<GoogleReCaptchaProvider /> Google Recaptcha has not been loaded");return[4,y.execute(o,{action:e})];case 1:return[2,t.sent()]}}))}))}),[y]),j=Object(r.useMemo)((function(){return{executeRecaptcha:y?v:void 0}}),[v,y]);return n.a.createElement(p.Provider,{value:j},b)}var m=function(){return Object(r.useContext)(p)};function d(e,t){return e(t={exports:{}},t.exports),t.exports}var u="function"==typeof Symbol&&Symbol.for,h=u?Symbol.for("react.element"):60103,w=u?Symbol.for("react.portal"):60106,b=u?Symbol.for("react.fragment"):60107,g=u?Symbol.for("react.strict_mode"):60108,y=u?Symbol.for("react.profiler"):60114,f=u?Symbol.for("react.provider"):60109,v=u?Symbol.for("react.context"):60110,j=u?Symbol.for("react.async_mode"):60111,x=u?Symbol.for("react.concurrent_mode"):60111,N=u?Symbol.for("react.forward_ref"):60112,O=u?Symbol.for("react.suspense"):60113,_=u?Symbol.for("react.suspense_list"):60120,k=u?Symbol.for("react.memo"):60115,U=u?Symbol.for("react.lazy"):60116,C=u?Symbol.for("react.block"):60121,I=u?Symbol.for("react.fundamental"):60117,R=u?Symbol.for("react.responder"):60118,A=u?Symbol.for("react.scope"):60119;function E(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case h:switch(e=e.type){case j:case x:case b:case y:case g:case O:return e;default:switch(e=e&&e.$$typeof){case v:case N:case U:case k:case f:return e;default:return t}}case w:return t}}}function S(e){return E(e)===x}var B={AsyncMode:j,ConcurrentMode:x,ContextConsumer:v,ContextProvider:f,Element:h,ForwardRef:N,Fragment:b,Lazy:U,Memo:k,Portal:w,Profiler:y,StrictMode:g,Suspense:O,isAsyncMode:function(e){return S(e)||E(e)===j},isConcurrentMode:S,isContextConsumer:function(e){return E(e)===v},isContextProvider:function(e){return E(e)===f},isElement:function(e){return"object"==typeof e&&null!==e&&e.$$typeof===h},isForwardRef:function(e){return E(e)===N},isFragment:function(e){return E(e)===b},isLazy:function(e){return E(e)===U},isMemo:function(e){return E(e)===k},isPortal:function(e){return E(e)===w},isProfiler:function(e){return E(e)===y},isStrictMode:function(e){return E(e)===g},isSuspense:function(e){return E(e)===O},isValidElementType:function(e){return"string"==typeof e||"function"==typeof e||e===b||e===x||e===y||e===g||e===O||e===_||"object"==typeof e&&null!==e&&(e.$$typeof===U||e.$$typeof===k||e.$$typeof===f||e.$$typeof===v||e.$$typeof===N||e.$$typeof===I||e.$$typeof===R||e.$$typeof===A||e.$$typeof===C)},typeOf:E},T=d((function(e,t){})),P=(T.AsyncMode,T.ConcurrentMode,T.ContextConsumer,T.ContextProvider,T.Element,T.ForwardRef,T.Fragment,T.Lazy,T.Memo,T.Portal,T.Profiler,T.StrictMode,T.Suspense,T.isAsyncMode,T.isConcurrentMode,T.isContextConsumer,T.isContextProvider,T.isElement,T.isForwardRef,T.isFragment,T.isLazy,T.isMemo,T.isPortal,T.isProfiler,T.isStrictMode,T.isSuspense,T.isValidElementType,T.typeOf,d((function(e){e.exports=B}))),D={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},L={};L[P.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},L[P.Memo]=D;Object.defineProperty,Object.getOwnPropertyNames,Object.getOwnPropertySymbols,Object.getOwnPropertyDescriptor,Object.getPrototypeOf,Object.prototype},225:function(e,t,o){"use strict";var r=o(12),n=o(0),i=o.n(n),a=o(150),s=o(151),c={ar:{sesocio:{title:"Gan\xe1 con nuestro referido",description:"Registrate con nuestro referido, carg\xe1 saldo y particip\xe1 de un sorteo mensual.",url:"https://www.sesocio.com/referrals/Y3J5cHRvc2F1cmlvMDBAZ21haWwuY29t?s=c"},buenbit:{title:"Gan\xe1 con nuestro referido",description:"Registrate con nuestro c\xf3digo IQNKVKP, invert\xed desde 50 USD por 30 d\xedas y gan\xe1 15 DAI.",url:"https://www.buenbit.com/"},letsbit:{title:"Gan\xe1 con nuestro referido",description:"Registrate con nuestro referido, verific\xe1 tu cuenta a nivel 3 y particip\xe1 de un sorteo mensual.",url:"https://letsbit.io/register/IDF37AE929E9"},cryptomkt:{title:"Gan\xe1 con nuestro referido",description:"Registrate con nuestro referido, compr\xe1 criptomonedas por ARS $ 10.000 y gan\xe1 0,0002 BTC.",url:"https://www.cryptomkt.com/account/register?ref=215813"},satoshitango:{title:"Gan\xe1 con nuestro referido",description:"Registrate con nuestro referido y obten\xe9 10 d\xedas para operar criptomonedas sin comisi\xf3n.",url:"https://www.satoshitango.com/gift/40OTRX9K"}}},p={ar:{tools:{title:"20% OFF para comprar tu Ledger",description:"Us\xe1 nuestro c\xf3digo FRIEND-XDNVBSR al momento de hacer la compra y disfrut\xe1 el descuento.",url:"https://go.referralcandy.com/recommend/XDNVBSR"}},br:{tools:{title:"20% DE DESCONTO para comprar seu Ledger",description:"Use nosso c\xf3digo FRIEND-XDNVBSR na hora da compra e aproveite o desconto.",url:"https://go.referralcandy.com/recommend/XDNVBSR"}},any:{tools:{title:"20% OFF para comprar tu Ledger",description:"Usa nuestro c\xf3digo FRIEND-XDNVBSR al momento de hacer la compra y disfruta el descuento.",url:"https://go.referralcandy.com/recommend/XDNVBSR"}}};var l=o(2);function m(e){var t,o=e.page,i=e.providerId,m={page:"provider-reviews",country:window.COUNTRY},d=Object(s.useTracking)(m).trackEvent,u={event:"user_action",event_category:"".concat(o,"_").concat(i?"".concat(i,"_"):"","referalNotification"),event_label:"click"},h={event:"user_action",event_category:"".concat(o,"_").concat(i?"".concat(i,"_"):"","referalNotification"),event_label:"close"},w=Object(n.useState)(!1),b=Object(r.a)(w,2),g=b[0],y=b[1];return(t=i?function(e){return window.COUNTRY in c&&Object.keys(c[window.COUNTRY]).length>0?c[window.COUNTRY][e]:null}(i):function(e){return window.COUNTRY in p&&Object.keys(p[window.COUNTRY]).length>0?p[window.COUNTRY][e]:"any"in p&&Object.keys(p.any).length>0?p.any[e]:null}(o))&&!g&&t&&Object(l.jsxs)("div",{className:"bg-white rounded-lg border-gray-300 border p-3 shadow-lg absolute top-5 right-5 cursor-pointer z-30",children:[Object(l.jsxs)("div",{className:"grid grid-flow-col items-center",onClick:function(){"production"===window.ENV?d(u):console.log(m,u),window.open(t.url)},children:[Object(l.jsx)("p",{className:"text-4xl",children:"\ud83c\udf81"}),Object(l.jsxs)("div",{className:"ml-2 mr-6 text-xs w-44",children:[Object(l.jsx)("p",{className:"font-semibold text-black",children:t.title}),Object(l.jsx)("p",{className:"block text-gray-500",children:t.description})]})]}),Object(l.jsx)(a.I,{className:"w-5 h-5 absolute top-2 right-2 cursor-pointer text-gray-600","aria-hidden":"true",onClick:function(e){e.preventDefault(),"production"===window.ENV?d(h):console.log(m,h),y(!0)}})]})||null}var d=function(e,t){return e.providerId===t.providerId};t.a=i.a.memo(m,d)}}]);