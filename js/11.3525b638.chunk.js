/*! For license information please see 11.3525b638.chunk.js.LICENSE.txt */
(this["webpackJsonpfront-in-react"]=this["webpackJsonpfront-in-react"]||[]).push([[11],{141:function(e,t,n){},142:function(e,t,n){"use strict";var r=n(0),c=n.n(r),o=n(1);function a(e){var t=e.active,n=e.onClick;return Object(o.jsx)("li",{className:"inline-block",onClick:function(){return n&&n()},children:Object(o.jsx)("label",{className:["cursor-pointer block text-4xl text-white",t||"text-gray-700"].join(" "),children:"\u2022"})})}var s=function(e,t){return e.active===t.active};t.a=c.a.memo(a,s)},143:function(e,t,n){"use strict";function r(){return{responsive:{desktop:{breakpoint:{max:9999,min:769},items:2},mobile:{breakpoint:{max:768,min:0},items:1}},fixed:{desktop:{breakpoint:{max:9999,min:0},items:1}}}}n.d(t,"a",(function(){return r}))},145:function(e,t,n){"use strict";var r=n(0),c=n.n(r),o=n(48),a=n(149),s=n.n(a),i=(n(150),n(141),n(51)),l=(n(146),n(142)),p=n(143),u=n(1);function d(e){var t=e.location,n={page:t,country:window.COUNTRY},r=Object(o.useTracking)(n),a=(r.Track,r.trackEvent),d=Object(i.a)(window.COUNTRY,t,"opportunityBanner");return"home"===t&&(d=d.slice(0,1)),(d=d.sort((function(){return.5-Math.random()}))).forEach((function(e){var t={event:"system_action",event_category:"".concat(e.provider,"_").concat(e.location,"_").concat(e.type),event_label:"show"};"production"===window.ENV?a(t):console.log(n,t)})),Object(u.jsx)(s.a,{className:"rolls-carousel",responsive:Object(p.a)().fixed,renderDotsOutside:!0,showDots:d.length>1,infinite:d.length>1,autoPlay:d.length>1,autoPlaySpeed:4e3,customDot:Object(u.jsx)(l.a,{}),arrows:!1,children:d.map((function(e,t){var r={event:"user_action",event_category:"".concat(e.provider,"_").concat(e.location,"_").concat(e.type),event_label:"click"};return Object(u.jsxs)(c.a.Fragment,{children:[Object(u.jsx)("img",{onClick:function(){"production"===window.ENV?a(r):console.log(n,r),window.open(e.sponsoredUrl)},className:"cursor-pointer mx-auto my-2 sm:hidden max-w-opportunityBanner-mobile",src:e.mobileImgUrl}),Object(u.jsx)("img",{onClick:function(){"production"===window.ENV?a(r):console.log(n,r),window.open(e.sponsoredUrl)},className:"cursor-pointer mx-auto my-2 hidden sm:block max-w-opportunityBanner-desktop",src:e.desktopImgUrl})]},t)}))})}t.a=c.a.memo(d,(function(){return!0}))},146:function(e,t,n){},212:function(e,t,n){},256:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return W}));var r=n(49),c=n(8),o=n(0),a=n.n(o),s=n(9),i=n(132),l={intl_exchange:[{name:"Binance",icon:"https://graph.facebook.com/binance/picture?type=square",url:"https://www.binance.com/en/register?ref=39537186"},{name:"CEX.IO",icon:"https://graph.facebook.com/cexio/picture?type=square",url:"https://cexio.page.link/NU6Z"},{name:"Coinbase",icon:"https://graph.facebook.com/coinbase/picture?type=square",url:"https://coinbase.com/join/537df5f93bef2f950a000038"},{name:"Crypto.com",icon:"https://graph.facebook.com/cryptocomofficial/picture?type=square",url:"https://crypto.com/exch/w2uwxsynrh"},{name:"Huobi Global",icon:"https://www.huobi.com/favicon.ico",url:"https://www.huobi.com/es-es/topic/invited/?invite_code=hsg57"},{name:"Kraken",icon:"https://graph.facebook.com/KrakenFX/picture?type=square",url:"https://r.kraken.com/c/2546987/744552/10583?u=https%3A%2F%2Fwww.kraken.com/es-es"},{name:"ShapeShift",icon:"https://graph.facebook.com/ShapeShiftPlatform/picture?type=square",url:"https://shapeshift.app.link/share?af=BcN6tWFYwH5njT4E"}],p2p_exchange:[{name:"Binance",icon:"https://graph.facebook.com/binance/picture?type=square",url:"https://www.binance.com/en/register?ref=39537186"},{name:"Hodl Hodl",icon:"https://graph.facebook.com/hhodl/picture?type=square",url:"https://hodlhodl.com/join/R7YQ"},{name:"LocalBitcoins",icon:"https://localbitcoins.com/cached-static/img/touch-icon-144.png",url:"https://localbitcoins.com/?ch=1eq5i"},{name:"LocalCryptos",icon:"https://localcryptos.com/images/favicon-128.png",url:"https://localcryptos.com/r/cryptosaurio"},{name:"Okex",icon:"https://graph.facebook.com/okexofficial/picture?type=square",url:"https://www.okex.com/join/2952709"},{name:"Paxful",icon:"https://graph.facebook.com/paxful/picture?type=square",url:"https://paxful.com/es?r=Dgk4nWx32dJ&track=cryptosaurio"}],swap:[{name:"1inch",icon:"https://1inch.exchange/assets/favicon/apple-touch-icon.png",url:"https://1inch.exchange/#/r/0x4EA94DF39AF882F6160591fe38c001Cc4B683D40"},{name:"Curve",icon:"https://www.curve.fi/apple-touch-icon.png",url:"https://www.curve.fi/"},{name:"FixedFloat",icon:"https://fixedfloat.com/assets/images/favicon.png",url:"https://fixedfloat.com/"},{name:"Kyber",icon:"https://www.kyberswap.com/apple-touch-icon.png",url:"https://www.kyberswap.com/"},{name:"Matcha",icon:"https://matcha.xyz/apple-touch-icon.png",url:"https://matcha.xyz/"},{name:"PancakeSwap",icon:"https://pancakeswap.finance/logo.png",url:"https://pancakeswap.finance/"},{name:"Paraswap",icon:"https://avatars.githubusercontent.com/u/52015910",url:"https://paraswap.io/"},{name:"Uniswap",icon:"https://app.uniswap.org/images/192x192_App_Icon.png",url:"https://app.uniswap.org/"}]};function p(e){return l[e]}var u=n(157),d=n(145);function m(e,t,n,r){return new(n||(n=Promise))((function(c,o){function a(e){try{i(r.next(e))}catch(e){o(e)}}function s(e){try{i(r.throw(e))}catch(e){o(e)}}function i(e){var t;e.done?c(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,s)}i((r=r.apply(e,t||[])).next())}))}function f(e,t){var n,r,c,o,a={label:0,sent:function(){if(1&c[0])throw c[1];return c[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(o){return function(s){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(c=2&o[0]?r.return:o[0]?r.throw||((c=r.return)&&c.call(r),0):r.next)&&!(c=c.call(r,o[1])).done)return c;switch(r=0,c&&(o=[2&o[0],c.value]),o[0]){case 0:case 1:c=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,r=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!((c=(c=a.trys).length>0&&c[c.length-1])||6!==o[0]&&2!==o[0])){a=0;continue}if(3===o[0]&&(!c||o[1]>c[0]&&o[1]<c[3])){a.label=o[1];break}if(6===o[0]&&a.label<c[1]){a.label=c[1],c=o;break}if(c&&a.label<c[2]){a.label=c[2],a.ops.push(o);break}c[2]&&a.ops.pop(),a.trys.pop();continue}o=t.call(e,a)}catch(e){o=[6,e],r=0}finally{n=c=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}}var h,b=function(e){console.warn(e)};(h||(h={})).SCRIPT_NOT_AVAILABLE="Recaptcha script is not available";var j=Object(o.createContext)({executeRecaptcha:function(){throw Error("GoogleReCaptcha Context has not yet been implemented, if you are using useGoogleReCaptcha hook, make sure the hook is called inside component wrapped by GoogleRecaptchaProvider")}});j.Consumer;function g(e){var t=this,n=e.reCaptchaKey,r=e.useEnterprise,c=void 0!==r&&r,s=e.useRecaptchaNet,i=void 0!==s&&s,l=e.scriptProps,p=e.language,u=e.children,d=Object(o.useState)(null),g=d[0],x=d[1];Object(o.useEffect)((function(){if(n){var e=(null==l?void 0:l.id)||"google-recaptcha-v3";return function(e){var t=e.reCaptchaKey,n=e.language,r=e.onLoad,c=e.useRecaptchaNet,o=e.useEnterprise,a=e.scriptProps,s=void 0===a?{}:a,i=s.nonce,l=void 0===i?"":i,p=s.defer,u=void 0!==p&&p,d=s.async,m=void 0!==d&&d,f=s.id,h=void 0===f?"":f,b=s.appendTo,j=void 0===b?void 0:b,g=h||"google-recaptcha-v3";if(function(e){return!!document.querySelector("#"+e)}(g))r();else{var x=function(e){return"https://www."+(e.useRecaptchaNet?"recaptcha.net":"google.com")+"/recaptcha/"+(e.useEnterprise?"enterprise.js":"api.js")}({useEnterprise:o,useRecaptchaNet:c}),w=document.createElement("script");w.id=g,w.src=x+"?render="+t+(n?"&hl="+n:""),l&&(w.nonce=l),w.defer=!!u,w.async=!!m,w.onload=r,("body"===j?document.body:document.getElementsByTagName("head")[0]).appendChild(w)}}({reCaptchaKey:n,useEnterprise:c,useRecaptchaNet:i,scriptProps:l,language:p,onLoad:function(){if(window&&window.grecaptcha){var e=c?window.grecaptcha.enterprise:window.grecaptcha;e.ready((function(){x(e)}))}else b("<GoogleRecaptchaProvider /> "+h.SCRIPT_NOT_AVAILABLE)},onError:function(){b("Error loading google recaptcha script")}}),function(){!function(e){var t=document.querySelector(".grecaptcha-badge");t&&t.parentNode&&document.body.removeChild(t.parentNode);var n=document.querySelector("#"+e);n&&n.remove(),function(){var e=document.querySelector("script[src^='https://www.gstatic.com/recaptcha/releases']");e&&e.remove()}()}(e)}}b("<GoogleReCaptchaProvider /> recaptcha key not provided")}),[c,i,l,p,n]);var w=Object(o.useCallback)((function(e){return m(t,void 0,void 0,(function(){return f(this,(function(t){switch(t.label){case 0:if(!g||!g.execute)throw new Error("<GoogleReCaptchaProvider /> Google Recaptcha has not been loaded");return[4,g.execute(n,{action:e})];case 1:return[2,t.sent()]}}))}))}),[g]),y=Object(o.useMemo)((function(){return{executeRecaptcha:g?w:void 0}}),[w,g]);return a.a.createElement(j.Provider,{value:y},u)}var x=function(){return Object(o.useContext)(j)};function w(e,t){return e(t={exports:{}},t.exports),t.exports}var y="function"==typeof Symbol&&Symbol.for,v=y?Symbol.for("react.element"):60103,O=y?Symbol.for("react.portal"):60106,N=y?Symbol.for("react.fragment"):60107,k=y?Symbol.for("react.strict_mode"):60108,C=y?Symbol.for("react.profiler"):60114,S=y?Symbol.for("react.provider"):60109,_=y?Symbol.for("react.context"):60110,P=y?Symbol.for("react.async_mode"):60111,E=y?Symbol.for("react.concurrent_mode"):60111,R=y?Symbol.for("react.forward_ref"):60112,T=y?Symbol.for("react.suspense"):60113,$=y?Symbol.for("react.suspense_list"):60120,A=y?Symbol.for("react.memo"):60115,M=y?Symbol.for("react.lazy"):60116,F=y?Symbol.for("react.block"):60121,U=y?Symbol.for("react.fundamental"):60117,q=y?Symbol.for("react.responder"):60118,L=y?Symbol.for("react.scope"):60119;function Y(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case v:switch(e=e.type){case P:case E:case N:case C:case k:case T:return e;default:switch(e=e&&e.$$typeof){case _:case R:case M:case A:case S:return e;default:return t}}case O:return t}}}function z(e){return Y(e)===E}var B={AsyncMode:P,ConcurrentMode:E,ContextConsumer:_,ContextProvider:S,Element:v,ForwardRef:R,Fragment:N,Lazy:M,Memo:A,Portal:O,Profiler:C,StrictMode:k,Suspense:T,isAsyncMode:function(e){return z(e)||Y(e)===P},isConcurrentMode:z,isContextConsumer:function(e){return Y(e)===_},isContextProvider:function(e){return Y(e)===S},isElement:function(e){return"object"==typeof e&&null!==e&&e.$$typeof===v},isForwardRef:function(e){return Y(e)===R},isFragment:function(e){return Y(e)===N},isLazy:function(e){return Y(e)===M},isMemo:function(e){return Y(e)===A},isPortal:function(e){return Y(e)===O},isProfiler:function(e){return Y(e)===C},isStrictMode:function(e){return Y(e)===k},isSuspense:function(e){return Y(e)===T},isValidElementType:function(e){return"string"==typeof e||"function"==typeof e||e===N||e===E||e===C||e===k||e===T||e===$||"object"==typeof e&&null!==e&&(e.$$typeof===M||e.$$typeof===A||e.$$typeof===S||e.$$typeof===_||e.$$typeof===R||e.$$typeof===U||e.$$typeof===q||e.$$typeof===L||e.$$typeof===F)},typeOf:Y},G=w((function(e,t){})),I=(G.AsyncMode,G.ConcurrentMode,G.ContextConsumer,G.ContextProvider,G.Element,G.ForwardRef,G.Fragment,G.Lazy,G.Memo,G.Portal,G.Profiler,G.StrictMode,G.Suspense,G.isAsyncMode,G.isConcurrentMode,G.isContextConsumer,G.isContextProvider,G.isElement,G.isForwardRef,G.isFragment,G.isLazy,G.isMemo,G.isPortal,G.isProfiler,G.isStrictMode,G.isSuspense,G.isValidElementType,G.typeOf,w((function(e){e.exports=B}))),D={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},V={};V[I.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},V[I.Memo]=D;Object.defineProperty,Object.getOwnPropertyNames,Object.getOwnPropertySymbols,Object.getOwnPropertyDescriptor,Object.getPrototypeOf,Object.prototype,n(212);var K=n(48),H=n(1);function W(){return Object(H.jsx)(g,{reCaptchaKey:"6Le6vr8ZAAAAAH6G2kvLs-VDT1cKIa_UGepnpMBI",children:Object(H.jsx)(J,{})})}function J(){var e={page:"tools",country:window.COUNTRY},t=Object(K.useTracking)(e).trackEvent,n=Object(i.a)().t,a=x().executeRecaptcha;Object(o.useEffect)((function(){var n={event:"pageview"};"production"===window.ENV?t(n):console.log(e,n)}),[]);var l=Object(o.useState)([]),m=Object(c.a)(l,2),f=m[0],h=m[1],b=Object(o.useState)([]),j=Object(c.a)(b,2),g=j[0],w=j[1],y=Object(o.useState)([]),v=Object(c.a)(y,2),O=v[0],N=v[1];return Object(o.useEffect)((function(){fetch("https://barney.cryptosaurio.com/wallets").then((function(e){return e.json()})).then((function(e){"br"===window.COUNTRY&&(e=e.filter((function(e){return null!==e.content_pt}))),h(e)})).catch((function(){return h([])}))}),[]),Object(o.useEffect)((function(){fetch("br"!==window.COUNTRY?"https://barney.cryptosaurio.com/".concat(window.COUNTRY,"/providers"):"https://barney.cryptossauro.com/".concat(window.COUNTRY,"/providers")).then((function(e){return e.json()})).then((function(e){w(e)})).catch((function(){return w([])}))}),[]),Object(H.jsxs)(H.Fragment,{children:[Object(H.jsx)(d.a,{location:"tools"}),Object(H.jsxs)("div",{className:"mx-5 mt-5",children:[Object(H.jsx)("h1",{className:"text-2xl",children:n("Wallets")}),Object(H.jsx)("h2",{children:n("Guarda tus criptomonedas en una wallet para que est\xe9n seguras.")})]}),Object(H.jsxs)("div",{className:"grid lg:grid-cols-2 md:grid-flow-row pb-10",children:[f.sort((function(e,t){return t.recommended-e.recommended})).map((function(e,t){return Object(H.jsxs)("a",{className:"m-5",target:"_blank",href:e.url,rel:"sponsored noreferrer",children:[Object(H.jsx)("div",{className:"bg-gray-800 text-green-400 inline-block",children:0===t?n("M\xe1s recomendada"):null}),Object(H.jsxs)("div",{className:["bg-gray-900 bg-opacity-30 grid grid-cols-3 h-full border",0===t?"border-green-400":"border-gray-500"].join(" "),children:[Object(H.jsx)("div",{className:"m-auto flex-shrink-0 w-20 hidden sm:block",children:Object(H.jsx)("img",{loading:"lazy",src:e.icon})}),Object(H.jsx)("div",{className:"m-auto col-span-3 sm:col-span-2",children:Object(H.jsxs)("div",{className:"p-5",children:[Object(H.jsx)("h5",{className:"text-xl font-semibold mb-2 inline align-middle",children:e.name}),e.guarded&&Object(H.jsx)(s.v,{"data-tip":!0,"data-for":"guarded-wallet",className:"inline-block fill-current w-5 h-5 align-text-top mx-1 text-blue-600"})||Object(H.jsx)(s.r,{"data-tip":!0,"data-for":"non-guarded-wallet",className:"inline-block fill-current w-5 h-5 align-text-top mx-1 text-blue-600"}),e.recommended>0&&Object(H.jsx)("p",{className:"text-gray-600",children:e.recommended>1?n("Recomendado por {{amount}} personas.",{amount:e.recommended}):n("Recomendado por 1 persona.")}),null!==e.available_cryptos&&Object(H.jsxs)("p",{className:"mb-4",children:[n("Permite almacenar"),": ",e.available_cryptos.join(", ")]}),Object(H.jsx)("p",{className:"mb-4",children:"br"!==window.COUNTRY?e.content_es:e.content_pt||e.content_es})]})})]}),-1===O.indexOf(e.id)&&Object(H.jsx)("p",{className:"m-auto text-right w-full pr-5 text-blue-400 underline -mt-7",onClick:function(t){t.preventDefault(),function(e){e.recommended+=1,h(Object(r.a)(f)),N([].concat(Object(r.a)(O),[e.id])),a&&a("submit_wallet_recommendation").then((function(t){fetch("https://barney.cryptosaurio.com/wallet",{method:"PATCH",headers:{"Content-type":"application/json"},body:JSON.stringify({id:e.id,captcha_response:t})}).then((function(){})).catch((function(){}))}))}(e)},children:n("RECOMENDAR")})]},t)})),f.length>0&&Object(H.jsxs)(H.Fragment,{children:[Object(H.jsxs)(u.a,{place:"right",className:"w-48",effect:"solid",id:"guarded-wallet",children:[Object(H.jsx)("p",{className:"font-bold",children:n("Wallet con custodia")}),Object(H.jsx)("p",{children:n("Un intermediario te facilitar\xe1 el acceso a tus criptomonedas y te ayudar\xe1 a recuperar tu clave si alguna vez te la olvidas.")})]}),Object(H.jsxs)(u.a,{place:"right",className:"w-48",effect:"solid",id:"non-guarded-wallet",children:[Object(H.jsx)("p",{className:"font-bold",children:n("Wallet sin custodia")}),Object(H.jsx)("p",{children:n("No hay intermediarios entre tu y tus criptomonedas. Eres el \xfanico responsable y si pierdes la clave, no podr\xe1s acceder a tus activos.")})]})]}),0===f.length&&Object(r.a)(Array(6)).map((function(e,t){return Object(H.jsx)("div",{className:"m-5 bg-gray-900 bg-opacity-30",children:Object(H.jsxs)("div",{className:"grid grid-cols-3 h-full p-5 border border-gray-500",children:[Object(H.jsx)("div",{className:"m-auto flex-shrink-0 bg-gray-700 h-28 w-28 sm:h-36 sm:w-36 animate-pulse"}),Object(H.jsx)("div",{className:"m-auto col-span-2",children:Object(H.jsxs)("div",{className:"p-5",children:[Object(H.jsx)("p",{className:"mb-2 bg-gray-700 animate-pulse w-32 sm:w-64 h-3"}),Object(H.jsx)("p",{className:"mb-2 bg-gray-700 animate-pulse w-40 sm:w-72 h-3"}),Object(H.jsx)("p",{className:"mb-2 bg-gray-700 animate-pulse w-44 sm:w-80 h-3"}),Object(H.jsx)("p",{className:"mb-2 bg-gray-700 animate-pulse w-44 sm:w-80 h-3"}),Object(H.jsx)("p",{className:"bg-gray-700 animate-pulse w-24 sm:w-64 h-3"})]})})]})},t)}))]}),Object(H.jsxs)("div",{className:"mx-5",children:[Object(H.jsx)("h1",{className:"text-2xl",children:n("Para operaciones en {{country}}",{country:window.COUNTRY_NAME})}),Object(H.jsx)("h2",{children:n("Compra o vende criptomonedas a proveedores en el pa\xeds.")})]}),g.length>0&&Object(H.jsx)("div",{className:"flex flex-row flex-wrap",children:g.filter((function(e){return e.enabled})).map((function(e,t){return Object(H.jsxs)("a",{className:"grid grid-cols-2 w-44 p-4 m-1",rel:"sponsored noreferrer",target:"_blank",href:e.url,children:[Object(H.jsx)("img",{className:"w-12 rounded-full",loading:"lazy",src:e.icon}),Object(H.jsx)("p",{className:"self-center -ml-2 w-24",children:e.name})]},t)}))}),0===g.length&&Object(H.jsx)("div",{className:"flex flex-row flex-wrap",children:Object(r.a)(Array(6)).map((function(e,t){return Object(H.jsxs)("div",{className:"grid grid-cols-2 w-44 h-20 p-4 m-1",children:[Object(H.jsx)("p",{className:"bg-gray-700 animate-pulse w-12 rounded-full"}),Object(H.jsx)("p",{className:"bg-gray-700 animate-pulse self-center -ml-2 w-24 h-8"})]},t)}))}),Object(H.jsxs)("div",{className:"mx-5 mt-5",children:[Object(H.jsx)("h1",{className:"text-2xl",children:n("Para operaciones en el exterior")}),Object(H.jsx)("h2",{children:n("Compra o vende criptomonedas a proveedores fuera de {{country}}.",{country:window.COUNTRY_NAME})})]}),p("intl_exchange").length>0&&Object(H.jsx)("div",{className:"flex flex-row flex-wrap",children:p("intl_exchange").map((function(e,t){return Object(H.jsxs)("a",{className:"grid grid-cols-2 w-44 p-4 m-1",rel:"sponsored noreferrer",target:"_blank",href:e.url,children:[Object(H.jsx)("img",{className:"w-12 rounded-full",loading:"lazy",src:e.icon}),Object(H.jsx)("p",{className:"self-center -ml-2 w-24",children:e.name})]},t)}))}),Object(H.jsxs)("div",{className:"mx-5 mt-5",children:[Object(H.jsx)("h1",{className:"text-2xl",children:n("Para operaciones P2P")}),Object(H.jsx)("h2",{children:n("Compra o vende criptomonedas directamente a otras personas.",{country:window.COUNTRY_NAME})})]}),p("p2p_exchange").length>0&&Object(H.jsx)("div",{className:"flex flex-row flex-wrap",children:p("p2p_exchange").map((function(e,t){return Object(H.jsxs)("a",{className:"grid grid-cols-2 w-44 p-4 m-1",rel:"sponsored noreferrer",target:"_blank",href:e.url,children:[Object(H.jsx)("img",{className:"w-12 rounded-full",loading:"lazy",src:e.icon}),Object(H.jsx)("p",{className:"self-center -ml-2 w-24",children:e.name})]},t)}))}),Object(H.jsxs)("div",{className:"mx-5 mt-5",children:[Object(H.jsx)("h1",{className:"text-2xl",children:n("Para cambiar tus criptomonedas | Swap")}),Object(H.jsx)("h2",{children:n("Intercambia tus criptomonedas por otras al instante.",{country:window.COUNTRY_NAME})})]}),p("swap").length>0&&Object(H.jsx)("div",{className:"flex flex-row flex-wrap",children:p("swap").map((function(e,t){return Object(H.jsxs)("a",{className:"grid grid-cols-2 w-44 p-4 m-1",rel:"sponsored noreferrer",target:"_blank",href:e.url,children:[Object(H.jsx)("img",{className:"w-12 rounded-full",loading:"lazy",src:e.icon}),Object(H.jsx)("p",{className:"self-center -ml-2 w-24",children:e.name})]},t)}))})]})}}}]);