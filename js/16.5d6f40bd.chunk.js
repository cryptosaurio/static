/*! For license information please see 16.5d6f40bd.chunk.js.LICENSE.txt */
(this["webpackJsonpfront-in-react"]=this["webpackJsonpfront-in-react"]||[]).push([[16],{151:function(e,t,n){},152:function(e,t,n){"use strict";var r=n(0),c=n.n(r),a=n(1);function o(e){var t=e.active,n=e.onClick;return Object(a.jsx)("li",{className:"inline-block",onClick:function(){return n&&n()},children:Object(a.jsx)("label",{className:["cursor-pointer block text-4xl text-white",t||"text-gray-700"].join(" "),children:"\u2022"})})}var s=function(e,t){return e.active===t.active};t.a=c.a.memo(o,s)},153:function(e,t,n){"use strict";function r(){return{responsive:{desktop:{breakpoint:{max:9999,min:769},items:2},mobile:{breakpoint:{max:768,min:0},items:1}},fixed:{desktop:{breakpoint:{max:9999,min:0},items:1}}}}n.d(t,"a",(function(){return r}))},159:function(e,t,n){"use strict";var r=n(0),c=n.n(r),a=n(26),o=n(162),s=n.n(o),i=(n(163),n(151),n(28)),l=n(152),p=n(153),u=n(1);function d(e){var t=e.location,n={page:t,country:window.COUNTRY},r=Object(a.useTracking)(n),c=(r.Track,r.trackEvent),o=Object(i.a)(window.COUNTRY,t,"opportunityBanner");return"home"===t&&(o=o.slice(0,1)),(o=o.sort((function(){return.5-Math.random()}))).forEach((function(e){var t={event:"system_action",event_category:"".concat(e.provider,"_").concat(e.location,"_").concat(e.type),event_label:"show"};"production"===window.ENV?c(t):console.log(n,t)})),Object(u.jsx)(s.a,{className:"rolls-carousel",responsive:Object(p.a)().fixed,renderDotsOutside:!0,showDots:o.length>1,infinite:o.length>1,autoPlay:o.length>1,autoPlaySpeed:4e3,customDot:Object(u.jsx)(l.a,{}),arrows:!1,children:o.map((function(e,t){var r={event:"user_action",event_category:"".concat(e.provider,"_").concat(e.location,"_").concat(e.type),event_label:"click"};return Object(u.jsxs)("picture",{onClick:function(){"production"===window.ENV?c(r):console.log(n,r),window.open(e.sponsoredUrl)},children:[Object(u.jsx)("source",{srcSet:e.mobileImgUrl,media:"(max-width: 639px)",width:"400",height:e.mobileImgHeightOverride||"100"}),Object(u.jsx)("source",{srcSet:e.desktopImgUrl,media:"(min-width: 640px)",width:"820",height:e.desktopImgHeightOverride||"100"}),Object(u.jsx)("img",{className:"cursor-pointer mx-auto my-2",src:e.desktopImgUrl,width:"820",height:e.desktopImgHeightOverride||"100"})]},t)}))})}t.a=c.a.memo(d,(function(e,t){return e.location===t.location}))},168:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return u}));var r=n(0),c=n.n(r);function a(e,t,n,r){return new(n||(n=Promise))((function(c,a){function o(e){try{i(r.next(e))}catch(e){a(e)}}function s(e){try{i(r.throw(e))}catch(e){a(e)}}function i(e){var t;e.done?c(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,s)}i((r=r.apply(e,t||[])).next())}))}function o(e,t){var n,r,c,a,o={label:0,sent:function(){if(1&c[0])throw c[1];return c[1]},trys:[],ops:[]};return a={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function s(a){return function(s){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,r&&(c=2&a[0]?r.return:a[0]?r.throw||((c=r.return)&&c.call(r),0):r.next)&&!(c=c.call(r,a[1])).done)return c;switch(r=0,c&&(a=[2&a[0],c.value]),a[0]){case 0:case 1:c=a;break;case 4:return o.label++,{value:a[1],done:!1};case 5:o.label++,r=a[1],a=[0];continue;case 7:a=o.ops.pop(),o.trys.pop();continue;default:if(!((c=(c=o.trys).length>0&&c[c.length-1])||6!==a[0]&&2!==a[0])){o=0;continue}if(3===a[0]&&(!c||a[1]>c[0]&&a[1]<c[3])){o.label=a[1];break}if(6===a[0]&&o.label<c[1]){o.label=c[1],c=a;break}if(c&&o.label<c[2]){o.label=c[2],o.ops.push(a);break}c[2]&&o.ops.pop(),o.trys.pop();continue}a=t.call(e,o)}catch(e){a=[6,e],r=0}finally{n=c=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,s])}}}var s,i=function(e){console.warn(e)};(s||(s={})).SCRIPT_NOT_AVAILABLE="Recaptcha script is not available";var l=Object(r.createContext)({executeRecaptcha:function(){throw Error("GoogleReCaptcha Context has not yet been implemented, if you are using useGoogleReCaptcha hook, make sure the hook is called inside component wrapped by GoogleRecaptchaProvider")}});l.Consumer;function p(e){var t=this,n=e.reCaptchaKey,p=e.useEnterprise,u=void 0!==p&&p,d=e.useRecaptchaNet,m=void 0!==d&&d,h=e.scriptProps,f=e.language,b=e.children,j=Object(r.useState)(null),w=j[0],g=j[1];Object(r.useEffect)((function(){if(n){var e=(null==h?void 0:h.id)||"google-recaptcha-v3";return function(e){var t=e.reCaptchaKey,n=e.language,r=e.onLoad,c=e.useRecaptchaNet,a=e.useEnterprise,o=e.scriptProps,s=void 0===o?{}:o,i=s.nonce,l=void 0===i?"":i,p=s.defer,u=void 0!==p&&p,d=s.async,m=void 0!==d&&d,h=s.id,f=void 0===h?"":h,b=s.appendTo,j=void 0===b?void 0:b,w=f||"google-recaptcha-v3";if(function(e){return!!document.querySelector("#"+e)}(w))r();else{var g=function(e){return"https://www."+(e.useRecaptchaNet?"recaptcha.net":"google.com")+"/recaptcha/"+(e.useEnterprise?"enterprise.js":"api.js")}({useEnterprise:a,useRecaptchaNet:c}),x=document.createElement("script");x.id=w,x.src=g+"?render="+t+(n?"&hl="+n:""),l&&(x.nonce=l),x.defer=!!u,x.async=!!m,x.onload=r,("body"===j?document.body:document.getElementsByTagName("head")[0]).appendChild(x)}}({reCaptchaKey:n,useEnterprise:u,useRecaptchaNet:m,scriptProps:h,language:f,onLoad:function(){if(window&&window.grecaptcha){var e=u?window.grecaptcha.enterprise:window.grecaptcha;e.ready((function(){g(e)}))}else i("<GoogleRecaptchaProvider /> "+s.SCRIPT_NOT_AVAILABLE)},onError:function(){i("Error loading google recaptcha script")}}),function(){!function(e){var t=document.querySelector(".grecaptcha-badge");t&&t.parentNode&&document.body.removeChild(t.parentNode);var n=document.querySelector("#"+e);n&&n.remove(),function(){var e=document.querySelector("script[src^='https://www.gstatic.com/recaptcha/releases']");e&&e.remove()}()}(e)}}i("<GoogleReCaptchaProvider /> recaptcha key not provided")}),[u,m,h,f,n]);var x=Object(r.useCallback)((function(e){return a(t,void 0,void 0,(function(){return o(this,(function(t){switch(t.label){case 0:if(!w||!w.execute)throw new Error("<GoogleReCaptchaProvider /> Google Recaptcha has not been loaded");return[4,w.execute(n,{action:e})];case 1:return[2,t.sent()]}}))}))}),[w]),y=Object(r.useMemo)((function(){return{executeRecaptcha:w?x:void 0}}),[x,w]);return c.a.createElement(l.Provider,{value:y},b)}var u=function(){return Object(r.useContext)(l)};function d(e,t){return e(t={exports:{}},t.exports),t.exports}var m="function"==typeof Symbol&&Symbol.for,h=m?Symbol.for("react.element"):60103,f=m?Symbol.for("react.portal"):60106,b=m?Symbol.for("react.fragment"):60107,j=m?Symbol.for("react.strict_mode"):60108,w=m?Symbol.for("react.profiler"):60114,g=m?Symbol.for("react.provider"):60109,x=m?Symbol.for("react.context"):60110,y=m?Symbol.for("react.async_mode"):60111,O=m?Symbol.for("react.concurrent_mode"):60111,v=m?Symbol.for("react.forward_ref"):60112,N=m?Symbol.for("react.suspense"):60113,k=m?Symbol.for("react.suspense_list"):60120,C=m?Symbol.for("react.memo"):60115,_=m?Symbol.for("react.lazy"):60116,R=m?Symbol.for("react.block"):60121,S=m?Symbol.for("react.fundamental"):60117,P=m?Symbol.for("react.responder"):60118,E=m?Symbol.for("react.scope"):60119;function A(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case h:switch(e=e.type){case y:case O:case b:case w:case j:case N:return e;default:switch(e=e&&e.$$typeof){case x:case v:case _:case C:case g:return e;default:return t}}case f:return t}}}function T(e){return A(e)===O}var U={AsyncMode:y,ConcurrentMode:O,ContextConsumer:x,ContextProvider:g,Element:h,ForwardRef:v,Fragment:b,Lazy:_,Memo:C,Portal:f,Profiler:w,StrictMode:j,Suspense:N,isAsyncMode:function(e){return T(e)||A(e)===y},isConcurrentMode:T,isContextConsumer:function(e){return A(e)===x},isContextProvider:function(e){return A(e)===g},isElement:function(e){return"object"==typeof e&&null!==e&&e.$$typeof===h},isForwardRef:function(e){return A(e)===v},isFragment:function(e){return A(e)===b},isLazy:function(e){return A(e)===_},isMemo:function(e){return A(e)===C},isPortal:function(e){return A(e)===f},isProfiler:function(e){return A(e)===w},isStrictMode:function(e){return A(e)===j},isSuspense:function(e){return A(e)===N},isValidElementType:function(e){return"string"==typeof e||"function"==typeof e||e===b||e===O||e===w||e===j||e===N||e===k||"object"==typeof e&&null!==e&&(e.$$typeof===_||e.$$typeof===C||e.$$typeof===g||e.$$typeof===x||e.$$typeof===v||e.$$typeof===S||e.$$typeof===P||e.$$typeof===E||e.$$typeof===R)},typeOf:A},$=d((function(e,t){})),M=($.AsyncMode,$.ConcurrentMode,$.ContextConsumer,$.ContextProvider,$.Element,$.ForwardRef,$.Fragment,$.Lazy,$.Memo,$.Portal,$.Profiler,$.StrictMode,$.Suspense,$.isAsyncMode,$.isConcurrentMode,$.isContextConsumer,$.isContextProvider,$.isElement,$.isForwardRef,$.isFragment,$.isLazy,$.isMemo,$.isPortal,$.isProfiler,$.isStrictMode,$.isSuspense,$.isValidElementType,$.typeOf,d((function(e){e.exports=U}))),Y={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},I={};I[M.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},I[M.Memo]=Y;Object.defineProperty,Object.getOwnPropertyNames,Object.getOwnPropertySymbols,Object.getOwnPropertyDescriptor,Object.getPrototypeOf,Object.prototype},722:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return f}));var r=n(43),c=n(4),a=n(0),o=n(6),s=n(123),i={intl_exchange:[{name:"Binance",icon:"https://graph.facebook.com/binance/picture?type=square",url:"https://www.binance.com/en/register?ref=39537186"},{name:"CEX.IO",icon:"https://graph.facebook.com/cexio/picture?type=square",url:"https://cexio.page.link/NU6Z"},{name:"Coinbase",icon:"https://graph.facebook.com/coinbase/picture?type=square",url:"https://coinbase.com/join/537df5f93bef2f950a000038"},{name:"Crypto.com",icon:"https://graph.facebook.com/cryptocomofficial/picture?type=square",url:"https://crypto.com/exch/w2uwxsynrh"},{name:"Huobi Global",icon:"https://www.huobi.com/favicon.ico",url:"https://www.huobi.com/es-es/topic/invited/?invite_code=hsg57"},{name:"Kraken",icon:"https://graph.facebook.com/KrakenFX/picture?type=square",url:"https://r.kraken.com/c/2546987/744552/10583?u=https%3A%2F%2Fwww.kraken.com/es-es"},{name:"ShapeShift",icon:"https://graph.facebook.com/ShapeShiftPlatform/picture?type=square",url:"https://shapeshift.app.link/share?af=BcN6tWFYwH5njT4E"}],p2p_exchange:[{name:"Binance",icon:"https://graph.facebook.com/binance/picture?type=square",url:"https://www.binance.com/en/register?ref=39537186"},{name:"Hodl Hodl",icon:"https://graph.facebook.com/hhodl/picture?type=square",url:"https://hodlhodl.com/join/R7YQ"},{name:"LocalBitcoins",icon:"https://localbitcoins.com/cached-static/img/touch-icon-144.png",url:"https://localbitcoins.com/?ch=1eq5i"},{name:"LocalCryptos",icon:"https://localcryptos.com/images/favicon-128.png",url:"https://localcryptos.com/r/cryptosaurio"},{name:"Okex",icon:"https://graph.facebook.com/okexofficial/picture?type=square",url:"https://www.okex.com/join/2952709"},{name:"Paxful",icon:"https://graph.facebook.com/paxful/picture?type=square",url:"https://paxful.com/es?r=Dgk4nWx32dJ&track=cryptosaurio"}],swap:[{name:"1inch",icon:"https://1inch.exchange/assets/favicon/apple-touch-icon.png",url:"https://1inch.exchange/#/r/0x4EA94DF39AF882F6160591fe38c001Cc4B683D40"},{name:"Curve",icon:"https://www.curve.fi/apple-touch-icon.png",url:"https://www.curve.fi/"},{name:"FixedFloat",icon:"https://fixedfloat.com/assets/images/favicon.png",url:"https://fixedfloat.com/"},{name:"Kyber",icon:"https://kyberswap.com/favicon.png?version=v",url:"https://www.kyberswap.com/"},{name:"Matcha",icon:"https://matcha.xyz/apple-touch-icon.png",url:"https://matcha.xyz/"},{name:"PancakeSwap",icon:"https://pancakeswap.finance/logo.png",url:"https://pancakeswap.finance/"},{name:"Paraswap",icon:"https://avatars.githubusercontent.com/u/52015910",url:"https://paraswap.io/"},{name:"Uniswap",icon:"https://app.uniswap.org/images/192x192_App_Icon.png",url:"https://app.uniswap.org/"}]};function l(e){return i[e]}var p=n(191),u=n(159),d=n(168),m=n(26),h=n(1);function f(){return Object(h.jsx)(d.a,{reCaptchaKey:"6Le6vr8ZAAAAAH6G2kvLs-VDT1cKIa_UGepnpMBI",children:Object(h.jsx)(b,{})})}function b(){var e={page:"tools",country:window.COUNTRY},t=Object(m.useTracking)(e).trackEvent,n=Object(s.a)().t,i=Object(d.b)().executeRecaptcha;Object(a.useEffect)((function(){var n={event:"pageview"};"production"===window.ENV?t(n):console.log(e,n)}),[]);var f=Object(a.useState)([]),b=Object(c.a)(f,2),j=b[0],w=b[1],g=Object(a.useState)([]),x=Object(c.a)(g,2),y=x[0],O=x[1],v=Object(a.useState)([]),N=Object(c.a)(v,2),k=N[0],C=N[1];return Object(a.useEffect)((function(){fetch("br"!==window.COUNTRY?"".concat(window.BARNEY_API_URL,"/wallets"):"".concat(window.BARNEY_BR_API_URL,"/wallets")).then((function(e){return e.json()})).then((function(e){"br"===window.COUNTRY&&(e=e.filter((function(e){return null!==e.content_pt}))),w(e)})).catch((function(){return w([])}))}),[]),Object(a.useEffect)((function(){fetch("br"!==window.COUNTRY?"".concat(window.BARNEY_API_URL,"/").concat(window.COUNTRY,"/providers"):"".concat(window.BARNEY_BR_API_URL,"/providers")).then((function(e){return e.json()})).then((function(e){O(e)})).catch((function(){return O([])}))}),[]),Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(u.a,{location:"tools"}),Object(h.jsxs)("div",{className:"mx-5 mt-5",children:[Object(h.jsx)("h1",{className:"text-2xl",children:n("Wallets")}),Object(h.jsx)("h2",{children:n("Guarda tus criptomonedas en una wallet para que est\xe9n seguras.")})]}),Object(h.jsxs)("div",{className:"grid lg:grid-cols-2 md:grid-flow-row pb-10",children:[j.sort((function(e,t){return t.recommended-e.recommended})).map((function(e,t){return Object(h.jsxs)("a",{className:"m-5",target:"_blank",href:e.url,rel:"sponsored noreferrer",children:[Object(h.jsx)("div",{className:"bg-gray-800 text-green-400 inline-block",children:0===t?n("M\xe1s recomendada"):null}),Object(h.jsxs)("div",{className:["bg-gray-900 bg-opacity-30 grid grid-cols-3 h-full border",0===t?"border-green-400":"border-gray-500"].join(" "),children:[Object(h.jsx)("div",{className:"m-auto flex-shrink-0 w-20 hidden sm:block",children:Object(h.jsx)("img",{loading:"lazy",src:e.icon})}),Object(h.jsx)("div",{className:"m-auto col-span-3 sm:col-span-2",children:Object(h.jsxs)("div",{className:"p-5",children:[Object(h.jsx)("h5",{className:"text-xl font-semibold mb-2 inline align-middle",children:e.name}),e.guarded&&Object(h.jsx)(o.y,{"data-tip":!0,"data-for":"guarded-wallet",className:"inline-block fill-current w-5 h-5 align-text-top mx-1 text-blue-600"})||Object(h.jsx)(o.t,{"data-tip":!0,"data-for":"non-guarded-wallet",className:"inline-block fill-current w-5 h-5 align-text-top mx-1 text-blue-600"}),e.recommended>0&&Object(h.jsx)("p",{className:"text-gray-600",children:e.recommended>1?n("Recomendado por {{amount}} personas.",{amount:e.recommended}):n("Recomendado por 1 persona.")}),null!==e.available_cryptos&&Object(h.jsxs)("p",{className:"mb-4",children:[n("Permite almacenar"),": ",e.available_cryptos.join(", ")]}),Object(h.jsx)("p",{className:"mb-4",children:"br"!==window.COUNTRY?e.content_es:e.content_pt||e.content_es})]})})]}),-1===k.indexOf(e.id)&&Object(h.jsx)("p",{className:"m-auto text-right w-full pr-5 text-blue-400 underline -mt-7",onClick:function(t){t.preventDefault(),function(e){e.recommended+=1,w(Object(r.a)(j)),C([].concat(Object(r.a)(k),[e.id])),i&&i("submit_wallet_recommendation").then((function(t){fetch("br"!==window.COUNTRY?"".concat(window.BARNEY_API_URL,"/").concat(window.COUNTRY,"/wallet"):"".concat(window.BARNEY_BR_API_URL,"/wallet"),{method:"PATCH",headers:{"Content-type":"application/json"},body:JSON.stringify({id:e.id,captcha_response:t})}).then((function(){})).catch((function(){}))}))}(e)},children:n("RECOMENDAR")})]},t)})),j.length>0&&Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)(p.a,{place:"right",className:"w-48",effect:"solid",id:"guarded-wallet",children:[Object(h.jsx)("p",{className:"font-bold",children:n("Wallet con custodia")}),Object(h.jsx)("p",{children:n("Un intermediario te facilitar\xe1 el acceso a tus criptomonedas y te ayudar\xe1 a recuperar tu clave si alguna vez te la olvidas.")})]}),Object(h.jsxs)(p.a,{place:"right",className:"w-48",effect:"solid",id:"non-guarded-wallet",children:[Object(h.jsx)("p",{className:"font-bold",children:n("Wallet sin custodia")}),Object(h.jsx)("p",{children:n("No hay intermediarios entre tu y tus criptomonedas. Eres el \xfanico responsable y si pierdes la clave, no podr\xe1s acceder a tus activos.")})]})]}),0===j.length&&Object(r.a)(Array(6)).map((function(e,t){return Object(h.jsxs)("div",{className:"m-5",children:[Object(h.jsx)("div",{className:"mb-1 w-32 h-5 animate-pulse bg-gray-700"}),Object(h.jsxs)("div",{className:"grid grid-cols-3 h-full p-5 border border-gray-500 bg-gray-900 bg-opacity-30",children:[Object(h.jsx)("div",{className:"m-auto flex-shrink-0 bg-gray-700 h-20 w-20 animate-pulse"}),Object(h.jsx)("div",{className:"m-auto col-span-2 p-0.5",children:Object(h.jsxs)("div",{className:"p-5",children:[Object(h.jsx)("p",{className:"mb-2 bg-gray-700 animate-pulse w-28 sm:w-64 h-3"}),Object(h.jsx)("p",{className:"mb-2 bg-gray-700 animate-pulse w-36 sm:w-72 h-3"}),Object(h.jsx)("p",{className:"mb-2 bg-gray-700 animate-pulse w-40 sm:w-80 h-3"}),Object(h.jsx)("p",{className:"mb-2 bg-gray-700 animate-pulse w-40 sm:w-80 h-3"}),Object(h.jsx)("p",{className:"bg-gray-700 animate-pulse w-24 sm:w-64 h-3"})]})})]})]},t)}))]}),Object(h.jsxs)("div",{className:"mx-5",children:[Object(h.jsx)("h1",{className:"text-2xl",children:n("Para operaciones en {{country}}",{country:window.COUNTRY_NAME})}),Object(h.jsx)("h2",{children:n("Compra o vende criptomonedas a proveedores en el pa\xeds.")})]}),y.length>0&&Object(h.jsx)("div",{className:"flex flex-row flex-wrap",children:y.filter((function(e){return e.enabled})).map((function(e,t){return Object(h.jsxs)("a",{className:"grid grid-cols-2 w-44 p-4 m-1",rel:"sponsored noreferrer",target:"_blank",href:e.url,children:[Object(h.jsx)("img",{className:"w-12 h-12 rounded-full",loading:"lazy",src:e.icon}),Object(h.jsx)("p",{className:"self-center -ml-2 w-24",children:e.name})]},t)}))}),0===y.length&&Object(h.jsx)("div",{className:"flex flex-row flex-wrap",children:Object(r.a)(Array(6)).map((function(e,t){return Object(h.jsxs)("div",{className:"grid grid-cols-2 w-44 h-20 p-4 m-1",children:[Object(h.jsx)("p",{className:"bg-gray-700 animate-pulse w-12 rounded-full"}),Object(h.jsx)("p",{className:"bg-gray-700 animate-pulse self-center -ml-2 w-24 h-8"})]},t)}))}),Object(h.jsxs)("div",{className:"mx-5 mt-5",children:[Object(h.jsx)("h1",{className:"text-2xl",children:n("Para operaciones en el exterior")}),Object(h.jsx)("h2",{children:n("Compra o vende criptomonedas a proveedores fuera de {{country}}.",{country:window.COUNTRY_NAME})})]}),l("intl_exchange").length>0&&Object(h.jsx)("div",{className:"flex flex-row flex-wrap",children:l("intl_exchange").map((function(e,t){return Object(h.jsxs)("a",{className:"grid grid-cols-2 w-44 p-4 m-1",rel:"sponsored noreferrer",target:"_blank",href:e.url,children:[Object(h.jsx)("img",{className:"w-12 h-12 rounded-full",loading:"lazy",src:e.icon}),Object(h.jsx)("p",{className:"self-center -ml-2 w-24",children:e.name})]},t)}))}),Object(h.jsxs)("div",{className:"mx-5 mt-5",children:[Object(h.jsx)("h1",{className:"text-2xl",children:n("Para operaciones P2P")}),Object(h.jsx)("h2",{children:n("Compra o vende criptomonedas directamente a otras personas.",{country:window.COUNTRY_NAME})})]}),l("p2p_exchange").length>0&&Object(h.jsx)("div",{className:"flex flex-row flex-wrap",children:l("p2p_exchange").map((function(e,t){return Object(h.jsxs)("a",{className:"grid grid-cols-2 w-44 p-4 m-1",rel:"sponsored noreferrer",target:"_blank",href:e.url,children:[Object(h.jsx)("img",{className:"w-12 h-12 rounded-full",loading:"lazy",src:e.icon}),Object(h.jsx)("p",{className:"self-center -ml-2 w-24",children:e.name})]},t)}))}),Object(h.jsxs)("div",{className:"mx-5 mt-5",children:[Object(h.jsx)("h1",{className:"text-2xl",children:n("Para cambiar tus criptomonedas | Swap")}),Object(h.jsx)("h2",{children:n("Intercambia tus criptomonedas por otras al instante.",{country:window.COUNTRY_NAME})})]}),l("swap").length>0&&Object(h.jsx)("div",{className:"flex flex-row flex-wrap",children:l("swap").map((function(e,t){return Object(h.jsxs)("a",{className:"grid grid-cols-2 w-44 p-4 m-1",rel:"sponsored noreferrer",target:"_blank",href:e.url,children:[Object(h.jsx)("img",{className:"w-12 h-12 rounded-full",loading:"lazy",src:e.icon}),Object(h.jsx)("p",{className:"self-center -ml-2 w-24",children:e.name})]},t)}))})]})}}}]);