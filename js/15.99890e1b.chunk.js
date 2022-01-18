(this["webpackJsonpfront-in-react"]=this["webpackJsonpfront-in-react"]||[]).push([[15],{151:function(e,t,n){},152:function(e,t,n){"use strict";var r=n(0),c=n.n(r),a=n(1);function i(e){var t=e.active,n=e.onClick;return Object(a.jsx)("li",{className:"inline-block",onClick:function(){return n&&n()},children:Object(a.jsx)("label",{className:["cursor-pointer block text-4xl text-white",t||"text-gray-700"].join(" "),children:"\u2022"})})}var s=function(e,t){return e.active===t.active};t.a=c.a.memo(i,s)},153:function(e,t,n){"use strict";function r(){return{responsive:{desktop:{breakpoint:{max:9999,min:769},items:2},mobile:{breakpoint:{max:768,min:0},items:1}},fixed:{desktop:{breakpoint:{max:9999,min:0},items:1}}}}n.d(t,"a",(function(){return r}))},159:function(e,t,n){"use strict";var r=n(0),c=n.n(r),a=n(26),i=n(162),s=n.n(i),o=(n(163),n(151),n(28)),l=n(152),d=n(153),u=n(1);function b(e){var t=e.location,n={page:t,country:window.COUNTRY},r=Object(a.useTracking)(n),c=(r.Track,r.trackEvent),i=Object(o.a)(window.COUNTRY,t,"opportunityBanner");return"home"===t&&(i=i.slice(0,1)),(i=i.sort((function(){return.5-Math.random()}))).forEach((function(e){var t={event:"system_action",event_category:"".concat(e.provider,"_").concat(e.location,"_").concat(e.type),event_label:"show"};"production"===window.ENV?c(t):console.log(n,t)})),Object(u.jsx)(s.a,{className:"rolls-carousel",responsive:Object(d.a)().fixed,renderDotsOutside:!0,showDots:i.length>1,infinite:i.length>1,autoPlay:i.length>1,autoPlaySpeed:4e3,customDot:Object(u.jsx)(l.a,{}),arrows:!1,children:i.map((function(e,t){var r={event:"user_action",event_category:"".concat(e.provider,"_").concat(e.location,"_").concat(e.type),event_label:"click"};return Object(u.jsxs)("picture",{onClick:function(){"production"===window.ENV?c(r):console.log(n,r),window.open(e.sponsoredUrl)},children:[Object(u.jsx)("source",{srcSet:e.mobileImgUrl,media:"(max-width: 639px)",width:"400",height:e.mobileImgHeightOverride||"100"}),Object(u.jsx)("source",{srcSet:e.desktopImgUrl,media:"(min-width: 640px)",width:"820",height:e.desktopImgHeightOverride||"100"}),Object(u.jsx)("img",{className:"cursor-pointer mx-auto my-2",src:e.desktopImgUrl,width:"820",height:e.desktopImgHeightOverride||"100"})]},t)}))})}t.a=c.a.memo(b,(function(e,t){return e.location===t.location}))},269:function(e,t,n){"use strict";n.d(t,"a",(function(){return w}));var r,c,a=n(3),i=n(0),s=n.n(i),o=n(11),l=n(5),d=n(36),u=n(7),b=n(8),j=n(21),p=n(35),m=n(47);!function(e){e[e.SetSelectedIndex=0]="SetSelectedIndex",e[e.SetOrientation=1]="SetOrientation",e[e.SetActivation=2]="SetActivation",e[e.RegisterTab=3]="RegisterTab",e[e.UnregisterTab=4]="UnregisterTab",e[e.RegisterPanel=5]="RegisterPanel",e[e.UnregisterPanel=6]="UnregisterPanel",e[e.ForceRerender=7]="ForceRerender"}(c||(c={}));var f=((r={})[c.SetSelectedIndex]=function(e,t){return e.selectedIndex===t.index?e:Object(a.b)({},e,{selectedIndex:t.index})},r[c.SetOrientation]=function(e,t){return e.orientation===t.orientation?e:Object(a.b)({},e,{orientation:t.orientation})},r[c.SetActivation]=function(e,t){return e.activation===t.activation?e:Object(a.b)({},e,{activation:t.activation})},r[c.RegisterTab]=function(e,t){return e.tabs.includes(t.tab)?e:Object(a.b)({},e,{tabs:[].concat(e.tabs,[t.tab])})},r[c.UnregisterTab]=function(e,t){return Object(a.b)({},e,{tabs:e.tabs.filter((function(e){return e!==t.tab}))})},r[c.RegisterPanel]=function(e,t){return e.panels.includes(t.panel)?e:Object(a.b)({},e,{panels:[].concat(e.panels,[t.panel])})},r[c.UnregisterPanel]=function(e,t){return Object(a.b)({},e,{panels:e.panels.filter((function(e){return e!==t.panel}))})},r[c.ForceRerender]=function(e){return Object(a.b)({},e)},r),O=Object(i.createContext)(null);function x(e){var t=Object(i.useContext)(O);if(null===t){var n=new Error("<"+e+" /> is missing a parent <Tab.Group /> component.");throw Error.captureStackTrace&&Error.captureStackTrace(n,x),n}return t}function h(e,t){return Object(o.a)(t.type,f,e,t)}O.displayName="TabsContext";var v=i.Fragment;function w(e){var t,n,r="headlessui-tabs-tab-"+Object(j.a)(),s=x(w.name),f=s[0],O=f.selectedIndex,h=f.tabs,v=f.panels,g=f.orientation,y=f.activation,N=s[1],C=N.dispatch,k=N.change,S=Object(i.useRef)(null),T=Object(d.a)(S,(function(e){e&&C({type:c.ForceRerender})}));Object(b.a)((function(){return C({type:c.RegisterTab,tab:S}),function(){return C({type:c.UnregisterTab,tab:S})}}),[C,S]);var U=h.indexOf(S),P=U===O,R=Object(i.useCallback)((function(e){var t=h.map((function(e){return e.current})).filter(Boolean);if(e.key===u.a.Space||e.key===u.a.Enter)return e.preventDefault(),e.stopPropagation(),void k(U);switch(e.key){case u.a.Home:case u.a.PageUp:return e.preventDefault(),e.stopPropagation(),Object(p.e)(t,p.a.First);case u.a.End:case u.a.PageDown:return e.preventDefault(),e.stopPropagation(),Object(p.e)(t,p.a.Last)}return Object(o.a)(g,{vertical:function(){return e.key===u.a.ArrowUp?Object(p.e)(t,p.a.Previous|p.a.WrapAround):e.key===u.a.ArrowDown?Object(p.e)(t,p.a.Next|p.a.WrapAround):void 0},horizontal:function(){return e.key===u.a.ArrowLeft?Object(p.e)(t,p.a.Previous|p.a.WrapAround):e.key===u.a.ArrowRight?Object(p.e)(t,p.a.Next|p.a.WrapAround):void 0}})}),[h,g,U,k]),I=Object(i.useCallback)((function(){var e;null==(e=S.current)||e.focus()}),[S]),_=Object(i.useCallback)((function(){var e;null==(e=S.current)||e.focus(),k(U)}),[k,U,S]),E=Object(i.useMemo)((function(){return{selected:P}}),[P]),D={ref:T,onKeyDown:R,onFocus:"manual"===y?I:_,onClick:_,id:r,role:"tab",type:Object(m.a)(e,S),"aria-controls":null==(t=v[U])||null==(n=t.current)?void 0:n.id,"aria-selected":P,tabIndex:P?0:-1},A=e;return Object(l.d)({props:Object(a.b)({},A,D),slot:E,defaultTag:"button",name:"Tabs.Tab"})}var g=l.a.RenderStrategy|l.a.Static;w.Group=function(e){var t=e.defaultIndex,n=void 0===t?0:t,r=e.vertical,o=void 0!==r&&r,d=e.manual,u=void 0!==d&&d,b=e.onChange,j=e.selectedIndex,p=void 0===j?null:j,m=Object(a.c)(e,["defaultIndex","vertical","manual","onChange","selectedIndex"]),f=o?"vertical":"horizontal",x=u?"manual":"auto",w=Object(i.useReducer)(h,{selectedIndex:null,tabs:[],panels:[],orientation:f,activation:x}),g=w[0],y=w[1],N=Object(i.useMemo)((function(){return{selectedIndex:g.selectedIndex}}),[g.selectedIndex]),C=Object(i.useRef)((function(){}));Object(i.useEffect)((function(){y({type:c.SetOrientation,orientation:f})}),[f]),Object(i.useEffect)((function(){y({type:c.SetActivation,activation:x})}),[x]),Object(i.useEffect)((function(){"function"===typeof b&&(C.current=b)}),[b]),Object(i.useEffect)((function(){if(!(g.tabs.length<=0)&&(null!==p||null===g.selectedIndex)){var e=g.tabs.map((function(e){return e.current})).filter(Boolean),t=e.filter((function(e){return!e.hasAttribute("disabled")})),r=null!=p?p:n;if(r<0)y({type:c.SetSelectedIndex,index:e.indexOf(t[0])});else if(r>g.tabs.length)y({type:c.SetSelectedIndex,index:e.indexOf(t[t.length-1])});else{var a=e.slice(0,r),i=e.slice(r),s=[].concat(i,a).find((function(e){return t.includes(e)}));if(!s)return;y({type:c.SetSelectedIndex,index:e.indexOf(s)})}}}),[n,p,g.tabs,g.selectedIndex]);var k=Object(i.useRef)(g.selectedIndex),S=Object(i.useMemo)((function(){return[g,{dispatch:y,change:function(e){k.current!==e&&C.current(e),k.current=e,y({type:c.SetSelectedIndex,index:e})}}]}),[g,y]);return s.a.createElement(O.Provider,{value:S},Object(l.d)({props:Object(a.b)({},m),slot:N,defaultTag:v,name:"Tabs"}))},w.List=function e(t){var n=x([w.name,e.name].join("."))[0],r={selectedIndex:n.selectedIndex},c={role:"tablist","aria-orientation":n.orientation},i=t;return Object(l.d)({props:Object(a.b)({},i,c),slot:r,defaultTag:"div",name:"Tabs.List"})},w.Panels=function e(t){var n=x([w.name,e.name].join("."))[0].selectedIndex,r=Object(i.useMemo)((function(){return{selectedIndex:n}}),[n]);return Object(l.d)({props:t,slot:r,defaultTag:"div",name:"Tabs.Panels"})},w.Panel=function e(t){var n,r,s=x([w.name,e.name].join(".")),o=s[0],u=o.selectedIndex,p=o.tabs,m=o.panels,f=s[1].dispatch,O="headlessui-tabs-panel-"+Object(j.a)(),h=Object(i.useRef)(null),v=Object(d.a)(h,(function(e){e&&f({type:c.ForceRerender})}));Object(b.a)((function(){return f({type:c.RegisterPanel,panel:h}),function(){return f({type:c.UnregisterPanel,panel:h})}}),[f,h]);var y=m.indexOf(h),N=y===u,C=Object(i.useMemo)((function(){return{selected:N}}),[N]),k={ref:v,id:O,role:"tabpanel","aria-labelledby":null==(n=p[y])||null==(r=n.current)?void 0:r.id,tabIndex:N?0:-1},S=t;return Object(l.d)({props:Object(a.b)({},S,k),slot:C,defaultTag:"div",features:g,visible:N,name:"Tabs.Panel"})}},721:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return E}));var r,c,a=n(43),i=n(18),s=n(25),o=n(4),l=n(0),d=n.n(l),u=n(2),b=n(13),j=n(123),p=n(49),m=n(269),f=n(162),O=n.n(f),x=n(6),h=n(191),v=n(159),w=(n(163),n(153)),g=(n(151),["title","titleId"]);function y(){return(y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function N(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}function C(e,t){var n=e.title,a=e.titleId,i=N(e,g);return l.createElement("svg",y({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 640 512",ref:t,"aria-labelledby":a},i),n?l.createElement("title",{id:a},n):null,r||(r=l.createElement("defs",null)),c||(c=l.createElement("path",{d:"M519 128l-47-48a56 56 0 00-40-16H205c-15 0-29 6-39 16l-48 48H0v256h64c18 0 32-15 32-32h9l85 76c30 25 73 26 105 4a61 61 0 0090-8c22 9 48 3 64-17l26-32c6-7 9-15 11-23h58c0 17 15 32 32 32h64V128H519zM48 352c-9 0-16-8-16-16s7-16 16-16 16 7 16 16-7 16-16 16zm390-7l-26 32c-3 3-8 4-11 1l-24-19-30 36c-6 8-15 5-18 3l-37-32-16 19a40 40 0 01-55 7l-97-88H96V176h42l62-62 5-2h57l-39 35a72 72 0 00-4 102c15 16 61 41 101 4l9-7 108 87c3 3 4 8 1 12zm106-41h-69l-8-8-103-83 13-12c6-6 7-16 1-22l-11-12c-6-6-16-7-23-1l-55 51c-9 8-26 9-34 0-10-10-9-25 1-34l65-60c8-7 17-11 27-11h84l6 2 61 62h45v128zm48 48c-9 0-16-8-16-16s7-16 16-16 16 7 16 16-7 16-16 16z"})))}var k,S=l.forwardRef(C),T=(n.p,n(19)),U=n(17),P=n(152),R=n(26),I=n(1),_=d.a.lazy((function(){return n.e(21).then(n.bind(null,713))}));function E(){var e={page:"p2p",country:window.COUNTRY},t=Object(R.useTracking)(e),n=(t.Track,t.trackEvent),r=Object(j.a)().t,c=Object(u.h)().coin;Object(l.useEffect)((function(){var t={event:"pageview"};"production"===window.ENV?n(t):console.log(e,t)}),[]);var d=Object(l.useState)({}),f=Object(o.a)(d,2),g=f[0],y=f[1],N=Object(l.useState)({}),C=Object(o.a)(N,2),E=C[0],D=C[1],A=Object(l.useState)({}),B=Object(o.a)(A,2),L=B[0],Y=B[1],M=Object(l.useState)([]),V=Object(o.a)(M,2),z=V[0],F=V[1],H=Object(l.useState)(""),J=Object(o.a)(H,2),W=J[0],G=J[1],K=Object(l.useState)(Object(U.a)(c).code.toLowerCase()||""),q=Object(o.a)(K,2),Q=q[0],X=q[1],Z=Object(l.useState)({}),$=Object(o.a)(Z,2),ee=$[0],te=$[1],ne=Object(l.useState)(10),re=Object(o.a)(ne,2),ce=re[0],ae=re[1],ie=Object(l.useState)(k.ByCoin),se=Object(o.a)(ie,2),oe=se[0],le=se[1],de=Object(l.useState)([]),ue=Object(o.a)(de,2),be=ue[0],je=ue[1],pe=Object(l.useState)([]),me=Object(o.a)(pe,2),fe=me[0],Oe=me[1],xe=Object(l.useState)([]),he=Object(o.a)(xe,2),ve=he[0],we=he[1],ge=Object(l.useState)(!1),ye=Object(o.a)(ge,2),Ne=ye[0],Ce=ye[1];return Object(l.useEffect)((function(){var e=Object(T.a)();F(e.available_currencies);var t=e.available_currencies[0];G(t)}),[]),Object(p.a)((function(){fetch("br"!==window.COUNTRY?"".concat(window.API_URL,"/").concat(window.COUNTRY,"/p2p-data?viewType=").concat(k[oe]):"".concat(window.BR_API_URL,"/p2p-data?viewType=").concat(k[oe])).then((function(e){return e.json()})).then((function(e){(!Q||Q&&-1===e.coins.indexOf(Object(U.a)(Q).code.toLowerCase()))&&(X(e.coins[0]),history.pushState({},document.title,"br"!==window.COUNTRY?"/".concat(window.COUNTRY,"/comparador-p2p/"):"/comparador-p2p/")),Oe(e.coins),je(e.providers),y(e.offers)})).catch((function(){return D({})}))}),6e4,!1,oe),Object(l.useEffect)((function(){Object.values(g).length>0&&D(function(e){var t=JSON.parse(JSON.stringify(e));if(oe===k.ByCoin)for(var n in t)W&&n in t&&t[n]&&t[n].offers&&W in t[n].offers.fields.providers&&(t[n].offers.fields.providers=Object(s.a)({},W,{ask:(t[n].offers.fields.providers[W].ask||[]).filter((function(e){return-1===ve.indexOf(e.provider_id)})),bid:(t[n].offers.fields.providers[W].bid||"bid").filter((function(e){return-1===ve.indexOf(e.provider_id)}))}));else if(oe===k.ByProvider)for(var r in t)for(var c in t[r])ve.indexOf("".concat(c,"p2p"))>-1&&delete t[r][c];for(var a in t)t[a]=Object.values(t[a]);return Object(i.a)({},t)}(g))}),[g,W,ve]),Object(p.a)((function(){oe===k.ByCoin&&Q&&-1===["?","DAI","USDC","USDT","BUSD"].indexOf(Q.toUpperCase())?fetch("".concat(window.API_URL,"/").concat(window.COUNTRY,"/coin-stats/").concat(Q,"?simple=true")).then((function(e){return e.json()})).then((function(e){return Y((function(t){return Object(i.a)(Object(i.a)({},t),{},Object(s.a)({},Q,e))}))})).catch((function(){return Y({})})):Y({})}),6e4,!1,oe,Q),Object(l.useEffect)((function(){ae(oe===k.ByCoin?10:4)}),[oe]),Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)(v.a,{location:"p2p"}),Object(I.jsxs)(m.a.Group,{defaultIndex:fe.indexOf(Q),onChange:function(e){X(fe[e]),history.pushState({},document.title,"br"!==window.COUNTRY?"/".concat(window.COUNTRY,"/comparador-p2p/").concat(Object(U.a)(fe[e].toUpperCase()).name.split(" ").join("-").toLowerCase()):"/comparador-p2p/".concat(Object(U.a)(fe[e].toUpperCase()).name.split(" ").join("-").toLowerCase()))},children:[Object(I.jsxs)(m.a.List,{className:"flex p-1 space-x-1 xl:ml-52 xl:mr-52 bg-gray-800 sticky top-0 z-10 overflow-x-auto no-scrollbar",children:[fe.map((function(e,t){return Object(I.jsx)(m.a,{className:function(e){return["min-w-max p-2.5 sm:w-full text-sm font-medium flex justify-center",e.selected&&"border-b-2 border-blue-400"].join(" ")},children:Object(I.jsxs)("h2",{className:"flex",children:[Object(I.jsx)("img",{src:Object(U.a)(e).icon,className:"w-5 mr-1"}),Object(I.jsx)("a",{target:"_blank",rel:"noreferrer",href:"br"!==window.COUNTRY?"/".concat(window.COUNTRY,"/comparador-p2p/").concat(Object(U.a)(e).name.split(" ").join("-").toLowerCase()):"/comparador-p2p/".concat(Object(U.a)(e).name.split(" ").join("-").toLowerCase()),onClick:function(e){return e.preventDefault()},children:Object(U.a)(e).name})]})},t)})),0===Object.keys(E).length&&Object(a.a)(Array(5)).map((function(e,t){return Object(I.jsx)("div",{className:"animate-pulse w-screen h-10 mb-0.5 bg-gray-700"},t)}))]}),Q&&Object(I.jsxs)("h2",{className:"px-5 pt-5 xl:px-0 xl:pt-5 xl:mx-52",children:[r("Compara f\xe1cilmente anuncios P2P de {{coin}} en distintas plataformas y elige el m\xe1s conveniente. Para tener una mejor experiencia,",{coin:Object(U.a)(Q.toUpperCase()).name})," ",Object(I.jsx)("a",{target:"_blank",rel:"noreferrer",className:"underline text-blue-400 hover:text-blue-600",href:"".concat("br"!==window.COUNTRY?"/".concat(window.COUNTRY):"","/blog/").concat(r("tips-para-operar-p2p")),children:r("te acercamos algunos consejos para operar P2P")}),"."]}),Object(I.jsxs)("p",{onClick:function(){return Ce(!0)},className:"mt-8 pl-5 xl:pl-0 xl:ml-52 cursor-pointer inline-flex items-center",children:[Object(I.jsx)(x.b,{className:"inline-block fill-current w-5 h-5 align-text-top mr-1"}),r("Preferencias")]}),Ne&&Object(I.jsx)(l.Suspense,{fallback:Object(I.jsx)("div",{className:"fixed inset-0 z-10 overflow-y-auto",children:Object(I.jsx)("div",{className:"min-h-screen px-4",children:Object(I.jsx)("div",{className:"fixed inset-0 backdrop-filter backdrop-blur-sm"})})}),children:Object(I.jsx)(_,{preferencesModalIsOpen:Ne,setPreferencesModalIsOpen:Ce,providerList:be,setP2PData:D,viewType:oe,setViewType:le,blockedProviders:ve,setBlockedProviders:we,selectedCurrency:W,setSelectedCurrency:G,availableCurrencies:z})}),Object(I.jsxs)(m.a.Panels,{className:"mt-2 pb-5",children:[fe.map((function(e,t){return Object(I.jsx)(m.a.Panel,{children:e in E&&E[e].map((function(e,t){return Object(I.jsxs)("div",{className:["flex flex-col xl:ml-52 xl:mr-52 border-2 border-gray-600 overflow-x-auto",t>0?"mt-8":"mt-1"].join(" "),children:[Object(I.jsx)("div",{className:"bg-gray-600",children:Object(I.jsx)("div",{className:"py-3 px-3 sm:px-6 lg:px-8",children:oe===k.ByProvider&&Object(I.jsxs)("span",{className:"text-white flex items-center",children:[Object(I.jsx)("img",{className:"w-5 mr-1",src:e.fields.icon}),Object(I.jsx)("a",{className:"font-medium",href:e.fields.url,target:"_blank",rel:"sponsored noreferrer",children:e.fields.name&&e.fields.name.replace(/ P2P/,"")}),Object(I.jsxs)("p",{className:"ml-1 font-light text-gray-400",children:[e.fields.score&&e.fields.score.count>0&&Object(I.jsxs)(I.Fragment,{children:[e.fields.score.rating,Object(I.jsx)(x.B,{className:"inline-block fill-current w-5 h-5 align-text-top mr-1"})]}),Object(I.jsx)("a",{className:"underline",href:"".concat("br"!==window.COUNTRY?"/".concat(window.COUNTRY):"").concat(r("/opiniones/")).concat(e.fields.id),children:r("Ver opiniones")})]})]})||Object(I.jsxs)("div",{className:"grid grid-flow-row",children:[Object(I.jsxs)("span",{className:"text-white flex items-center",children:[Object(I.jsx)("img",{className:"w-5 mr-1",src:Object(U.a)(e.fields.coin).icon}),Object(I.jsx)("h3",{className:"text-lg",children:Object(U.a)(e.fields.coin).name})]}),L[Q]&&L[Q].price&&Object(I.jsxs)("div",{className:"flex my-1",children:[Object(I.jsx)("p",{className:"font-bold",children:L[Q].price}),Object(I.jsx)("span",{className:["self-center mx-3 px-2 shadow-md rounded-full font-semibold text-sm",L[Q].price_change_percentage_24h.indexOf("-")>-1?"bg-red-500":"bg-green-500"].join(" "),children:L[Q].price_change_percentage_24h}),Object(I.jsx)(b.b,{className:"underline",to:"/".concat("br"!==window.COUNTRY?"criptomoneda":"criptomoeda","/").concat(Object(U.a)(Q).name.split(" ").join("-").toLowerCase()),children:r("Ver estad\xedsticas")})]})||-1===["DAI","USDC","USDT","BUSD","UST"].indexOf(Q.toUpperCase())&&Object(I.jsxs)("div",{className:"flex my-1",children:[Object(I.jsx)("div",{className:"self-center animate-pulse bg-gray-900 w-24 sm:w-24 h-5"}),Object(I.jsx)("div",{className:"self-center mx-3 px-2 rounded-full animate-pulse bg-gray-900 w-12 sm:w-12 h-6"}),Object(I.jsx)(b.b,{className:"underline",to:"/".concat("br"!==window.COUNTRY?"criptomoneda":"criptomoeda","/").concat(Object(U.a)(Q).name.split(" ").join("-").toLowerCase()),children:r("Ver estad\xedsticas")})]})||["DAI","USDC","USDT","BUSD","UST"].indexOf(Q.toUpperCase())>-1&&Object(I.jsx)("div",{className:"flex my-1",children:Object(I.jsx)(b.b,{className:"underline",to:"/".concat("br"!==window.COUNTRY?"criptomoneda":"criptomoeda","/").concat(Object(U.a)(Q).name.split(" ").join("-").toLowerCase()),children:r("Ver estad\xedsticas")})})]})})}),Object(I.jsx)("div",{className:"py-2 align-middle inline-block",children:Object(I.jsx)("div",{className:"border-gray-200",children:Object(I.jsx)(O.a,{responsive:Object(w.a)().responsive,arrows:!1,showDots:!0,customDot:Object(I.jsx)(P.a,{}),children:Object(a.a)(Array("ask","bid")).map((function(t,n){return Object(I.jsx)("div",{className:"overflow-x-auto no-scrollbar",children:Object(I.jsxs)("table",{className:["mt-1 m-auto",W&&W in e.fields.providers&&(!(t in e.fields.providers[W])||0===e.fields.providers[W][t].length)&&"flex items-center justify-center mt-5"].join(" "),children:[W&&W in e.fields.providers&&t in e.fields.providers[W]&&e.fields.providers[W][t].length>0&&Object(I.jsxs)("thead",{children:[Object(I.jsx)("tr",{children:Object(I.jsx)("th",{children:Object(I.jsx)("span",{className:"ml-1 sm:ml-4 px-2 py-1 text-xs font-bold text-blue-50 bg-blue-400 rounded mb-3",children:"ask"===t&&r("VENDEDORES")||r("COMPRADORES")})})}),Object(I.jsxs)("tr",{children:[Object(I.jsx)("th",{scope:"col",className:"px-1 py-1 sm:px-5 sm:py-3 text-left text-xs font-medium uppercase tracking-wider"}),Object(I.jsx)("th",{scope:"col",className:"px-1 py-1 sm:px-5 sm:py-3 text-left text-xs font-medium uppercase tracking-wider",children:r("PRECIO")}),e.fields.providers[W][t].filter((function(e){return e.limit})).length>0&&Object(I.jsx)("th",{scope:"col",className:"px-1 py-1 sm:px-5 sm:py-3 text-left text-xs font-medium uppercase tracking-wider",children:r("VOLUMEN")})]})]})||Object(I.jsx)("tbody",{children:Object(I.jsx)("tr",{children:Object(I.jsx)("td",{children:Object(I.jsx)("p",{children:r("No hay ".concat("ask"===t?"vendedores":"compradores"," en este momento..."))})})})}),W&&(W in e.fields.providers&&e.fields.providers[W][t]||[]).slice(0,!ee["".concat(Q,"-").concat(e.fields.id,"-").concat(t)]&&ce||W&&(W in e.fields.providers&&e.fields.providers[W][t]||[]).length).map((function(e,t){return Object(I.jsx)("tbody",{children:Object(I.jsxs)("tr",{children:[Object(I.jsx)("td",{className:"px-1 py-1 sm:px-5 sm:py-3 cursor-pointer min-w-min",children:Object(I.jsxs)("a",{className:"grid grid-flow-col",href:e.url,target:"_blank",rel:"sponsored noreferrer",children:[oe===k.ByCoin&&Object(I.jsx)("img",{className:"w-5 sm:w-7 mr-2 self-center",src:e.provider_icon,"data-tip":!0,"data-for":e.provider_name}),Object(I.jsx)(h.a,{effect:"solid",id:e.provider_name,children:e.provider_name.replace(/ P2P/,"")}),Object(I.jsxs)("div",{className:"w-24 text-sm self-center",children:[Object(I.jsxs)("span",{className:"flex",children:[Object(I.jsx)("p",{className:"truncate hover:overflow-clip hover:whitespace-normal hover:break-words",children:e.name}),e.pro_user&&Object(I.jsx)(x.c,{className:"inline-block fill-current text-yellow-400 w-5 h-5 align-bottom flex-shrink-0"})]}),0!=e.amount_of_orders&&Object(I.jsxs)("span",{className:"text-xs text-gray-400",children:[e.amount_of_orders," ",Object(I.jsx)(S,{className:"w-4 inline-block fill-current"})," ",e.success_rate&&"".concat(e.success_rate,"%")]})]})]})}),Object(I.jsx)("td",{className:"px-1 py-1 sm:px-5 sm:py-3",children:Object(I.jsxs)("div",{className:"text-sm truncate w-32 grid grid-flow-row",children:[Object(I.jsx)("span",{children:e.price}),Object(I.jsx)("span",{className:"grid grid-flow-col gap-2 justify-start cursor-pointer text-gray-400 text-xs",children:Object(I.jsx)("p",{className:"truncate hover:overflow-clip hover:whitespace-normal hover:break-words",children:e.payment_methods.map((function(e){return e.name})).join(", ")})})]})}),e.limit&&Object(I.jsxs)("td",{className:"px-1 py-1 sm:px-5 sm:py-3 grid grid-flow-row",children:[Object(I.jsxs)("span",{className:"text-sm truncate w-24",children:[e.limit," ",Q.toUpperCase()]}),(e.limit_min||e.limit_max)&&Object(I.jsxs)("span",{className:"text-xs truncate hover:overflow-clip hover:whitespace-normal hover:overflow-visible w-24 text-gray-400 cursor-pointer",children:[e.limit_min&&r("M\xedn")+":"+String.fromCharCode(8239)+e.limit_min+" ",e.limit_max&&r("M\xe1x")+":"+String.fromCharCode(8239)+e.limit_max]})]})]})},t)})),W&&W in e.fields.providers&&t in e.fields.providers[W]&&e.fields.providers[W][t].length>ce&&Object(I.jsx)("tbody",{onClick:function(){ee["".concat(Q,"-").concat(e.fields.id,"-").concat(t)]=!ee["".concat(Q,"-").concat(e.fields.id,"-").concat(t)],te(Object(i.a)({},ee))},children:Object(I.jsx)("tr",{children:Object(I.jsx)("td",{className:"px-1 py-1 sm:px-5 sm:py-3 cursor-pointer underline",children:!ee["".concat(Q,"-").concat(e.fields.id,"-").concat(t)]&&r("Ver m\xe1s")||r("Ver menos")})})})]})},n)}))})})})]},t)}))},t)})),0===Object.keys(E).length&&Object(a.a)(Array(3)).map((function(e,t){return Object(I.jsxs)("div",{className:["animate-pulse justify-between flex flex-row xl:ml-52 xl:mr-52 bg-gray-700 overflow-x-auto h-80",t>0?"mt-8":"mt-1"].join(" "),children:[Object(I.jsxs)("div",{children:[Object(I.jsx)("div",{className:"animate-pulse bg-gray-900 w-32 sm:w-96 h-14 ml-12 mt-16"}),Object(I.jsx)("div",{className:"animate-pulse bg-gray-900 w-32 sm:w-96 h-14 ml-12 mt-4"}),Object(I.jsx)("div",{className:"animate-pulse bg-gray-900 w-32 sm:w-96 h-14 ml-12 mt-4"})]}),Object(I.jsxs)("div",{children:[Object(I.jsx)("div",{className:"animate-pulse bg-gray-900 w-32 sm:w-96 h-14 ml-12 mr-12 mt-16"}),Object(I.jsx)("div",{className:"animate-pulse bg-gray-900 w-32 sm:w-96 h-14 ml-12 mr-12 mt-4"}),Object(I.jsx)("div",{className:"animate-pulse bg-gray-900 w-32 sm:w-96 h-14 ml-12 mr-12 mt-4"})]})]},t)}))]})]})]})}!function(e){e.ByProvider="ByProvider",e.ByCoin="ByCoin"}(k||(k={}))}}]);