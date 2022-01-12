/*! For license information please see 13.083c1868.chunk.js.LICENSE.txt */
(this["webpackJsonpfront-in-react"]=this["webpackJsonpfront-in-react"]||[]).push([[13],{229:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return u}));var n=r(0),c=r.n(n);function a(e,t,r,n){return new(r||(r=Promise))((function(c,a){function o(e){try{i(n.next(e))}catch(e){a(e)}}function s(e){try{i(n.throw(e))}catch(e){a(e)}}function i(e){var t;e.done?c(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(o,s)}i((n=n.apply(e,t||[])).next())}))}function o(e,t){var r,n,c,a,o={label:0,sent:function(){if(1&c[0])throw c[1];return c[1]},trys:[],ops:[]};return a={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function s(a){return function(s){return function(a){if(r)throw new TypeError("Generator is already executing.");for(;o;)try{if(r=1,n&&(c=2&a[0]?n.return:a[0]?n.throw||((c=n.return)&&c.call(n),0):n.next)&&!(c=c.call(n,a[1])).done)return c;switch(n=0,c&&(a=[2&a[0],c.value]),a[0]){case 0:case 1:c=a;break;case 4:return o.label++,{value:a[1],done:!1};case 5:o.label++,n=a[1],a=[0];continue;case 7:a=o.ops.pop(),o.trys.pop();continue;default:if(!((c=(c=o.trys).length>0&&c[c.length-1])||6!==a[0]&&2!==a[0])){o=0;continue}if(3===a[0]&&(!c||a[1]>c[0]&&a[1]<c[3])){o.label=a[1];break}if(6===a[0]&&o.label<c[1]){o.label=c[1],c=a;break}if(c&&o.label<c[2]){o.label=c[2],o.ops.push(a);break}c[2]&&o.ops.pop(),o.trys.pop();continue}a=t.call(e,o)}catch(e){a=[6,e],n=0}finally{r=c=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,s])}}}var s,i=function(e){console.warn(e)};(s||(s={})).SCRIPT_NOT_AVAILABLE="Recaptcha script is not available";var l=Object(n.createContext)({executeRecaptcha:function(){throw Error("GoogleReCaptcha Context has not yet been implemented, if you are using useGoogleReCaptcha hook, make sure the hook is called inside component wrapped by GoogleRecaptchaProvider")}});l.Consumer;function p(e){var t=this,r=e.reCaptchaKey,p=e.useEnterprise,u=void 0!==p&&p,d=e.useRecaptchaNet,m=void 0!==d&&d,f=e.scriptProps,h=e.language,b=e.children,j=Object(n.useState)(null),g=j[0],y=j[1];Object(n.useEffect)((function(){if(r){var e=(null==f?void 0:f.id)||"google-recaptcha-v3";return function(e){var t=e.reCaptchaKey,r=e.language,n=e.onLoad,c=e.useRecaptchaNet,a=e.useEnterprise,o=e.scriptProps,s=void 0===o?{}:o,i=s.nonce,l=void 0===i?"":i,p=s.defer,u=void 0!==p&&p,d=s.async,m=void 0!==d&&d,f=s.id,h=void 0===f?"":f,b=s.appendTo,j=void 0===b?void 0:b,g=h||"google-recaptcha-v3";if(function(e){return!!document.querySelector("#"+e)}(g))n();else{var y=function(e){return"https://www."+(e.useRecaptchaNet?"recaptcha.net":"google.com")+"/recaptcha/"+(e.useEnterprise?"enterprise.js":"api.js")}({useEnterprise:a,useRecaptchaNet:c}),x=document.createElement("script");x.id=g,x.src=y+"?render="+t+(r?"&hl="+r:""),l&&(x.nonce=l),x.defer=!!u,x.async=!!m,x.onload=n,("body"===j?document.body:document.getElementsByTagName("head")[0]).appendChild(x)}}({reCaptchaKey:r,useEnterprise:u,useRecaptchaNet:m,scriptProps:f,language:h,onLoad:function(){if(window&&window.grecaptcha){var e=u?window.grecaptcha.enterprise:window.grecaptcha;e.ready((function(){y(e)}))}else i("<GoogleRecaptchaProvider /> "+s.SCRIPT_NOT_AVAILABLE)},onError:function(){i("Error loading google recaptcha script")}}),function(){!function(e){var t=document.querySelector(".grecaptcha-badge");t&&t.parentNode&&document.body.removeChild(t.parentNode);var r=document.querySelector("#"+e);r&&r.remove(),function(){var e=document.querySelector("script[src^='https://www.gstatic.com/recaptcha/releases']");e&&e.remove()}()}(e)}}i("<GoogleReCaptchaProvider /> recaptcha key not provided")}),[u,m,f,h,r]);var x=Object(n.useCallback)((function(e){return a(t,void 0,void 0,(function(){return o(this,(function(t){switch(t.label){case 0:if(!g||!g.execute)throw new Error("<GoogleReCaptchaProvider /> Google Recaptcha has not been loaded");return[4,g.execute(r,{action:e})];case 1:return[2,t.sent()]}}))}))}),[g]),w=Object(n.useMemo)((function(){return{executeRecaptcha:g?x:void 0}}),[x,g]);return c.a.createElement(l.Provider,{value:w},b)}var u=function(){return Object(n.useContext)(l)};function d(e,t){return e(t={exports:{}},t.exports),t.exports}var m="function"==typeof Symbol&&Symbol.for,f=m?Symbol.for("react.element"):60103,h=m?Symbol.for("react.portal"):60106,b=m?Symbol.for("react.fragment"):60107,j=m?Symbol.for("react.strict_mode"):60108,g=m?Symbol.for("react.profiler"):60114,y=m?Symbol.for("react.provider"):60109,x=m?Symbol.for("react.context"):60110,w=m?Symbol.for("react.async_mode"):60111,O=m?Symbol.for("react.concurrent_mode"):60111,v=m?Symbol.for("react.forward_ref"):60112,N=m?Symbol.for("react.suspense"):60113,C=m?Symbol.for("react.suspense_list"):60120,k=m?Symbol.for("react.memo"):60115,S=m?Symbol.for("react.lazy"):60116,P=m?Symbol.for("react.block"):60121,R=m?Symbol.for("react.fundamental"):60117,E=m?Symbol.for("react.responder"):60118,_=m?Symbol.for("react.scope"):60119;function $(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case f:switch(e=e.type){case w:case O:case b:case g:case j:case N:return e;default:switch(e=e&&e.$$typeof){case x:case v:case S:case k:case y:return e;default:return t}}case h:return t}}}function A(e){return $(e)===O}var M={AsyncMode:w,ConcurrentMode:O,ContextConsumer:x,ContextProvider:y,Element:f,ForwardRef:v,Fragment:b,Lazy:S,Memo:k,Portal:h,Profiler:g,StrictMode:j,Suspense:N,isAsyncMode:function(e){return A(e)||$(e)===w},isConcurrentMode:A,isContextConsumer:function(e){return $(e)===x},isContextProvider:function(e){return $(e)===y},isElement:function(e){return"object"==typeof e&&null!==e&&e.$$typeof===f},isForwardRef:function(e){return $(e)===v},isFragment:function(e){return $(e)===b},isLazy:function(e){return $(e)===S},isMemo:function(e){return $(e)===k},isPortal:function(e){return $(e)===h},isProfiler:function(e){return $(e)===g},isStrictMode:function(e){return $(e)===j},isSuspense:function(e){return $(e)===N},isValidElementType:function(e){return"string"==typeof e||"function"==typeof e||e===b||e===O||e===g||e===j||e===N||e===C||"object"==typeof e&&null!==e&&(e.$$typeof===S||e.$$typeof===k||e.$$typeof===y||e.$$typeof===x||e.$$typeof===v||e.$$typeof===R||e.$$typeof===E||e.$$typeof===_||e.$$typeof===P)},typeOf:$},T=d((function(e,t){})),F=(T.AsyncMode,T.ConcurrentMode,T.ContextConsumer,T.ContextProvider,T.Element,T.ForwardRef,T.Fragment,T.Lazy,T.Memo,T.Portal,T.Profiler,T.StrictMode,T.Suspense,T.isAsyncMode,T.isConcurrentMode,T.isContextConsumer,T.isContextProvider,T.isElement,T.isForwardRef,T.isFragment,T.isLazy,T.isMemo,T.isPortal,T.isProfiler,T.isStrictMode,T.isSuspense,T.isValidElementType,T.typeOf,d((function(e){e.exports=M}))),q={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},L={};L[F.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},L[F.Memo]=q;Object.defineProperty,Object.getOwnPropertyNames,Object.getOwnPropertySymbols,Object.getOwnPropertyDescriptor,Object.getPrototypeOf,Object.prototype},283:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return h}));var n=r(20),c=r(4),a=r(0),o=r(11),s=r(207),i={intl_exchange:[{name:"Binance",icon:"https://graph.facebook.com/binance/picture?type=square",url:"https://www.binance.com/en/register?ref=39537186"},{name:"CEX.IO",icon:"https://graph.facebook.com/cexio/picture?type=square",url:"https://cexio.page.link/NU6Z"},{name:"Coinbase",icon:"https://graph.facebook.com/coinbase/picture?type=square",url:"https://coinbase.com/join/537df5f93bef2f950a000038"},{name:"Crypto.com",icon:"https://graph.facebook.com/cryptocomofficial/picture?type=square",url:"https://crypto.com/exch/w2uwxsynrh"},{name:"Huobi Global",icon:"https://www.huobi.com/favicon.ico",url:"https://www.huobi.com/es-es/topic/invited/?invite_code=hsg57"},{name:"Kraken",icon:"https://graph.facebook.com/KrakenFX/picture?type=square",url:"https://r.kraken.com/c/2546987/744552/10583?u=https%3A%2F%2Fwww.kraken.com/es-es"},{name:"ShapeShift",icon:"https://graph.facebook.com/ShapeShiftPlatform/picture?type=square",url:"https://shapeshift.app.link/share?af=BcN6tWFYwH5njT4E"}],p2p_exchange:[{name:"Binance",icon:"https://graph.facebook.com/binance/picture?type=square",url:"https://www.binance.com/en/register?ref=39537186"},{name:"Hodl Hodl",icon:"https://graph.facebook.com/hhodl/picture?type=square",url:"https://hodlhodl.com/join/R7YQ"},{name:"LocalBitcoins",icon:"https://localbitcoins.com/cached-static/img/touch-icon-144.png",url:"https://localbitcoins.com/?ch=1eq5i"},{name:"LocalCryptos",icon:"https://localcryptos.com/images/favicon-128.png",url:"https://localcryptos.com/r/cryptosaurio"},{name:"Okex",icon:"https://graph.facebook.com/okexofficial/picture?type=square",url:"https://www.okex.com/join/2952709"},{name:"Paxful",icon:"https://graph.facebook.com/paxful/picture?type=square",url:"https://paxful.com/es?r=Dgk4nWx32dJ&track=cryptosaurio"}],swap:[{name:"1inch",icon:"https://1inch.exchange/assets/favicon/apple-touch-icon.png",url:"https://1inch.exchange/#/r/0x4EA94DF39AF882F6160591fe38c001Cc4B683D40"},{name:"Curve",icon:"https://www.curve.fi/apple-touch-icon.png",url:"https://www.curve.fi/"},{name:"FixedFloat",icon:"https://fixedfloat.com/assets/images/favicon.png",url:"https://fixedfloat.com/"},{name:"Kyber",icon:"https://www.kyberswap.com/apple-touch-icon.png",url:"https://www.kyberswap.com/"},{name:"Matcha",icon:"https://matcha.xyz/apple-touch-icon.png",url:"https://matcha.xyz/"},{name:"PancakeSwap",icon:"https://pancakeswap.finance/logo.png",url:"https://pancakeswap.finance/"},{name:"Paraswap",icon:"https://avatars.githubusercontent.com/u/52015910",url:"https://paraswap.io/"},{name:"Uniswap",icon:"https://app.uniswap.org/images/192x192_App_Icon.png",url:"https://app.uniswap.org/"}]};function l(e){return i[e]}var p=r(51),u=r(49),d=r(229),m=r(32),f=r(1);function h(){return Object(f.jsx)(d.a,{reCaptchaKey:"6Le6vr8ZAAAAAH6G2kvLs-VDT1cKIa_UGepnpMBI",children:Object(f.jsx)(b,{})})}function b(){var e={page:"tools",country:window.COUNTRY},t=Object(m.useTracking)(e).trackEvent,r=Object(s.a)().t,i=Object(d.b)().executeRecaptcha;Object(a.useEffect)((function(){var r={event:"pageview"};"production"===window.ENV?t(r):console.log(e,r)}),[]);var h=Object(a.useState)([]),b=Object(c.a)(h,2),j=b[0],g=b[1],y=Object(a.useState)([]),x=Object(c.a)(y,2),w=x[0],O=x[1],v=Object(a.useState)([]),N=Object(c.a)(v,2),C=N[0],k=N[1];return Object(a.useEffect)((function(){fetch("https://barney.cryptosaurio.com/wallets").then((function(e){return e.json()})).then((function(e){"br"===window.COUNTRY&&(e=e.filter((function(e){return null!==e.content_pt}))),g(e)})).catch((function(){return g([])}))}),[]),Object(a.useEffect)((function(){fetch("br"!==window.COUNTRY?"https://barney.cryptosaurio.com/".concat(window.COUNTRY,"/providers"):"https://barney.cryptossauro.com/".concat(window.COUNTRY,"/providers")).then((function(e){return e.json()})).then((function(e){O(e)})).catch((function(){return O([])}))}),[]),Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(u.a,{location:"tools"}),Object(f.jsxs)("div",{className:"mx-5 mt-5",children:[Object(f.jsx)("h1",{className:"text-2xl",children:r("Wallets")}),Object(f.jsx)("h2",{children:r("Guarda tus criptomonedas en una wallet para que est\xe9n seguras.")})]}),Object(f.jsxs)("div",{className:"grid lg:grid-cols-2 md:grid-flow-row pb-10",children:[j.sort((function(e,t){return t.recommended-e.recommended})).map((function(e,t){return Object(f.jsxs)("a",{className:"m-5",target:"_blank",href:e.url,rel:"sponsored noreferrer",children:[Object(f.jsx)("div",{className:"bg-gray-800 text-green-400 inline-block",children:0===t?r("M\xe1s recomendada"):null}),Object(f.jsxs)("div",{className:["bg-gray-900 bg-opacity-30 grid grid-cols-3 h-full border",0===t?"border-green-400":"border-gray-500"].join(" "),children:[Object(f.jsx)("div",{className:"m-auto flex-shrink-0 w-20 hidden sm:block",children:Object(f.jsx)("img",{loading:"lazy",src:e.icon})}),Object(f.jsx)("div",{className:"m-auto col-span-3 sm:col-span-2",children:Object(f.jsxs)("div",{className:"p-5",children:[Object(f.jsx)("h5",{className:"text-xl font-semibold mb-2 inline align-middle",children:e.name}),e.guarded&&Object(f.jsx)(o.y,{"data-tip":!0,"data-for":"guarded-wallet",className:"inline-block fill-current w-5 h-5 align-text-top mx-1 text-blue-600"})||Object(f.jsx)(o.t,{"data-tip":!0,"data-for":"non-guarded-wallet",className:"inline-block fill-current w-5 h-5 align-text-top mx-1 text-blue-600"}),e.recommended>0&&Object(f.jsx)("p",{className:"text-gray-600",children:e.recommended>1?r("Recomendado por {{amount}} personas.",{amount:e.recommended}):r("Recomendado por 1 persona.")}),null!==e.available_cryptos&&Object(f.jsxs)("p",{className:"mb-4",children:[r("Permite almacenar"),": ",e.available_cryptos.join(", ")]}),Object(f.jsx)("p",{className:"mb-4",children:"br"!==window.COUNTRY?e.content_es:e.content_pt||e.content_es})]})})]}),-1===C.indexOf(e.id)&&Object(f.jsx)("p",{className:"m-auto text-right w-full pr-5 text-blue-400 underline -mt-7",onClick:function(t){t.preventDefault(),function(e){e.recommended+=1,g(Object(n.a)(j)),k([].concat(Object(n.a)(C),[e.id])),i&&i("submit_wallet_recommendation").then((function(t){fetch("https://barney.cryptosaurio.com/wallet",{method:"PATCH",headers:{"Content-type":"application/json"},body:JSON.stringify({id:e.id,captcha_response:t})}).then((function(){})).catch((function(){}))}))}(e)},children:r("RECOMENDAR")})]},t)})),j.length>0&&Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)(p.a,{place:"right",className:"w-48",effect:"solid",id:"guarded-wallet",children:[Object(f.jsx)("p",{className:"font-bold",children:r("Wallet con custodia")}),Object(f.jsx)("p",{children:r("Un intermediario te facilitar\xe1 el acceso a tus criptomonedas y te ayudar\xe1 a recuperar tu clave si alguna vez te la olvidas.")})]}),Object(f.jsxs)(p.a,{place:"right",className:"w-48",effect:"solid",id:"non-guarded-wallet",children:[Object(f.jsx)("p",{className:"font-bold",children:r("Wallet sin custodia")}),Object(f.jsx)("p",{children:r("No hay intermediarios entre tu y tus criptomonedas. Eres el \xfanico responsable y si pierdes la clave, no podr\xe1s acceder a tus activos.")})]})]}),0===j.length&&Object(n.a)(Array(6)).map((function(e,t){return Object(f.jsx)("div",{className:"m-5 bg-gray-900 bg-opacity-30",children:Object(f.jsxs)("div",{className:"grid grid-cols-3 h-full p-5 border border-gray-500",children:[Object(f.jsx)("div",{className:"m-auto flex-shrink-0 bg-gray-700 h-28 w-28 sm:h-36 sm:w-36 animate-pulse"}),Object(f.jsx)("div",{className:"m-auto col-span-2",children:Object(f.jsxs)("div",{className:"p-5",children:[Object(f.jsx)("p",{className:"mb-2 bg-gray-700 animate-pulse w-32 sm:w-64 h-3"}),Object(f.jsx)("p",{className:"mb-2 bg-gray-700 animate-pulse w-40 sm:w-72 h-3"}),Object(f.jsx)("p",{className:"mb-2 bg-gray-700 animate-pulse w-44 sm:w-80 h-3"}),Object(f.jsx)("p",{className:"mb-2 bg-gray-700 animate-pulse w-44 sm:w-80 h-3"}),Object(f.jsx)("p",{className:"bg-gray-700 animate-pulse w-24 sm:w-64 h-3"})]})})]})},t)}))]}),Object(f.jsxs)("div",{className:"mx-5",children:[Object(f.jsx)("h1",{className:"text-2xl",children:r("Para operaciones en {{country}}",{country:window.COUNTRY_NAME})}),Object(f.jsx)("h2",{children:r("Compra o vende criptomonedas a proveedores en el pa\xeds.")})]}),w.length>0&&Object(f.jsx)("div",{className:"flex flex-row flex-wrap",children:w.filter((function(e){return e.enabled})).map((function(e,t){return Object(f.jsxs)("a",{className:"grid grid-cols-2 w-44 p-4 m-1",rel:"sponsored noreferrer",target:"_blank",href:e.url,children:[Object(f.jsx)("img",{className:"w-12 rounded-full",loading:"lazy",src:e.icon}),Object(f.jsx)("p",{className:"self-center -ml-2 w-24",children:e.name})]},t)}))}),0===w.length&&Object(f.jsx)("div",{className:"flex flex-row flex-wrap",children:Object(n.a)(Array(6)).map((function(e,t){return Object(f.jsxs)("div",{className:"grid grid-cols-2 w-44 h-20 p-4 m-1",children:[Object(f.jsx)("p",{className:"bg-gray-700 animate-pulse w-12 rounded-full"}),Object(f.jsx)("p",{className:"bg-gray-700 animate-pulse self-center -ml-2 w-24 h-8"})]},t)}))}),Object(f.jsxs)("div",{className:"mx-5 mt-5",children:[Object(f.jsx)("h1",{className:"text-2xl",children:r("Para operaciones en el exterior")}),Object(f.jsx)("h2",{children:r("Compra o vende criptomonedas a proveedores fuera de {{country}}.",{country:window.COUNTRY_NAME})})]}),l("intl_exchange").length>0&&Object(f.jsx)("div",{className:"flex flex-row flex-wrap",children:l("intl_exchange").map((function(e,t){return Object(f.jsxs)("a",{className:"grid grid-cols-2 w-44 p-4 m-1",rel:"sponsored noreferrer",target:"_blank",href:e.url,children:[Object(f.jsx)("img",{className:"w-12 rounded-full",loading:"lazy",src:e.icon}),Object(f.jsx)("p",{className:"self-center -ml-2 w-24",children:e.name})]},t)}))}),Object(f.jsxs)("div",{className:"mx-5 mt-5",children:[Object(f.jsx)("h1",{className:"text-2xl",children:r("Para operaciones P2P")}),Object(f.jsx)("h2",{children:r("Compra o vende criptomonedas directamente a otras personas.",{country:window.COUNTRY_NAME})})]}),l("p2p_exchange").length>0&&Object(f.jsx)("div",{className:"flex flex-row flex-wrap",children:l("p2p_exchange").map((function(e,t){return Object(f.jsxs)("a",{className:"grid grid-cols-2 w-44 p-4 m-1",rel:"sponsored noreferrer",target:"_blank",href:e.url,children:[Object(f.jsx)("img",{className:"w-12 rounded-full",loading:"lazy",src:e.icon}),Object(f.jsx)("p",{className:"self-center -ml-2 w-24",children:e.name})]},t)}))}),Object(f.jsxs)("div",{className:"mx-5 mt-5",children:[Object(f.jsx)("h1",{className:"text-2xl",children:r("Para cambiar tus criptomonedas | Swap")}),Object(f.jsx)("h2",{children:r("Intercambia tus criptomonedas por otras al instante.",{country:window.COUNTRY_NAME})})]}),l("swap").length>0&&Object(f.jsx)("div",{className:"flex flex-row flex-wrap",children:l("swap").map((function(e,t){return Object(f.jsxs)("a",{className:"grid grid-cols-2 w-44 p-4 m-1",rel:"sponsored noreferrer",target:"_blank",href:e.url,children:[Object(f.jsx)("img",{className:"w-12 rounded-full",loading:"lazy",src:e.icon}),Object(f.jsx)("p",{className:"self-center -ml-2 w-24",children:e.name})]},t)}))})]})}}}]);