(this["webpackJsonpfront-in-react"]=this["webpackJsonpfront-in-react"]||[]).push([[38],{216:function(e,t,s){"use strict";s.d(t,"a",(function(){return l}));var i=s(152),a=s(208),c=(s(0),s(34)),n=s(2),r=["children","to","condition"];function l(e){var t=e.children,s=e.to,l=e.condition,o=Object(a.a)(e,r);return l&&s?Object(n.jsx)(c.b,Object(i.a)(Object(i.a)({to:s},o),{},{children:t})):Object(n.jsx)("a",Object(i.a)(Object(i.a)({href:s},o),{},{children:t}))}},296:function(e,t,s){"use strict";s.r(t);var i=s(152),a=s(147),c=s(12),n=s(156),r=s(0),l=s.n(r),o=s(138),d=s(34),p=s(205),m=s(160),j=s(199),b=s(170),f=s(216),h=s(200),x=(s(197),s(185),s(186)),O=(s(181),s(2));function u(e){var t=e.contextualTrackingData,s=e.crypto,u=e.showCoinStats,g=e.coinStats,w=e.coinStatsCryptos,N=e.pricesData,_=e.selectedCurrency,y=e.showProviderIcon,v=e.providerDataExpandedByType,C=e.setProviderDataExpandedByType,k=e.providersExtraData,U=e.setTempSelectedCurrency,T=e.setTempBlockedCryptos,P=e.setTempBlockedProviders,E=e.setTempBlockedP2PProviders,F=e.setTempBlockedBlockchains,S=e.blockedCryptos,A=e.blockedProviders,D=e.blockedP2PProviders,I=e.blockedBlockchains,V=e.setPreferencesModalIsOpen,B=e.scrollToPriceTable,R=e.showAlwaysMoreOffers,M=e.rollsData,q=e.notificationsEnabled,z=e.selectedPercentageForNotifications,L=e.setNotificationSettingsModalIsOpen,Y=e.selectedCryptosForNotifications,J=e.setRollsModalIsOpen,H=e.setRollsModalCoin,G=e.isMobile,K=e.isVisible,Q=Object(o.a)().t,W=Object(m.useTracking)(t).trackEvent,X=Object(r.useState)({}),Z=Object(c.a)(X,2),$=Z[0],ee=Z[1];return Object(O.jsxs)(O.Fragment,{children:[u&&Object(O.jsxs)("div",{className:"bg-gray-600",children:[Object(O.jsxs)("div",{className:"py-3 px-3 sm:px-6 lg:px-8 flex flex-row justify-between items-center",children:[Object(O.jsx)("div",{className:"flex items-center justify-between flex-wrap",children:Object(O.jsxs)("div",{className:"grid grid-flow-row",children:[Object(O.jsxs)("span",{className:"text-white flex items-center",children:[Object(O.jsx)("img",{loading:"lazy",className:"w-5 mr-1",src:Object(b.a)(s.toUpperCase())&&Object(b.a)(s.toUpperCase()).icon||"https://cdn.worldvectorlogo.com/logos/dinosaurio.svg"}),Object(O.jsx)("h2",{className:"text-lg",children:Object(b.a)(s.toUpperCase())&&Object(b.a)(s.toUpperCase()).name||s.toUpperCase()})]}),g[s]&&g[s].price&&Object(O.jsxs)("div",{className:"flex my-1",children:[Object(O.jsx)("p",{className:"font-bold",children:g[s].price}),Object(O.jsx)("span",{className:["self-center mx-3 px-2 shadow-md rounded-full font-semibold text-sm",g[s].price_change_percentage_24h.indexOf("-")>-1?"bg-red-500":"bg-green-500"].join(" "),children:g[s].price_change_percentage_24h}),Object(O.jsx)(d.b,{className:"underline",to:"/".concat("br"!==window.COUNTRY?"criptomoneda":"criptomoeda","/").concat(Object(b.a)(s).name.split(" ").join("-").toLowerCase()),children:Q("Ver estad\xedsticas")})]})||w&&w.indexOf(s)>-1&&Object(O.jsxs)("div",{className:"flex my-1",children:[Object(O.jsx)("div",{className:["self-center bg-gray-900 w-24 sm:w-24 h-5",K?"animate-pulse":""].join(" ")}),Object(O.jsx)("div",{className:["self-center mx-3 px-2 rounded-full bg-gray-900 w-12 sm:w-12 h-6",K?"animate-pulse":""].join(" ")}),Object(O.jsx)(d.b,{className:"underline",to:"/".concat("br"!==window.COUNTRY?"criptomoneda":"criptomoeda","/").concat(Object(b.a)(s).name.split(" ").join("-").toLowerCase()),children:Q("Ver estad\xedsticas")})]})||w&&-1===w.indexOf(s)&&Object(O.jsx)("div",{className:"flex my-1",children:Object(O.jsx)(d.b,{className:"underline",to:"/".concat("br"!==window.COUNTRY?"criptomoneda":"criptomoeda","/").concat(Object(b.a)(s).name.split(" ").join("-").toLowerCase()),children:Q("Ver estad\xedsticas")})})]})}),!G&&["BTC","ETH","DAI","USDC","USDT"].indexOf(s)>-1&&Object(O.jsx)("div",{className:"flex bg-gray-500 p-2",children:M&&Object.keys(M).filter((function(e){return!S.includes(e.toUpperCase())})).filter((function(e){return e===s})).length>0&&M[s].length>0&&M[s].filter((function(e){return!A.includes(e.buy.fields.id)&&!A.includes(e.sell.fields.id)})).length>0&&Object(O.jsxs)("div",{className:"flex items-center cursor-pointer",onClick:function(){W({event:"user_action",event_category:"".concat(s.toUpperCase(),"_rolls_modal_open"),event_label:"click"}),H(s.toUpperCase()),J(!0)},children:["\ud83d\udd25",1===M[s].length&&Object(O.jsx)("p",{className:"pl-1",children:Q("1 arbitraje disponible")}),M[s].length>1&&Object(O.jsx)("p",{className:"pl-1",children:Q("{{amount}} arbitrajes disponibles",{amount:M[s].length})})]})||!G&&Object(O.jsxs)("div",{className:"flex items-center cursor-pointer",onClick:function(){return L(!0)},children:["\ud83d\udd14",(!q||!Y.includes(s.toUpperCase()))&&Object(O.jsx)(O.Fragment,{children:Object(O.jsx)("p",{className:"text-sm pl-1",children:Q("Crea una alerta de arbitraje")})})||Object(O.jsx)(O.Fragment,{children:Object(O.jsx)("p",{className:"text-sm pl-1",children:Q("Tienes una alerta de arbitraje desde {{percentage}}%",{percentage:z})})})]})})]}),G&&["BTC","ETH","DAI","USDC","USDT"].indexOf(s)>-1&&M&&Object.keys(M).filter((function(e){return!S.includes(e.toUpperCase())})).filter((function(e){return e===s})).length>0&&M[s].length>0&&M[s].filter((function(e){return!A.includes(e.buy.fields.id)&&!A.includes(e.sell.fields.id)})).length>0&&Object(O.jsxs)("div",{className:"flex items-center cursor-pointer bg-gray-500 px-3 py-1.5 font-bold",onClick:function(){W({event:"user_action",event_category:"".concat(s.toUpperCase(),"_rolls_modal_open"),event_label:"click"}),H(s.toUpperCase()),J(!0)},children:["\ud83d\udd25",1===M[s].length&&Object(O.jsx)("p",{className:"pl-1",children:Q("1 arbitraje disponible")}),M[s].length>1&&Object(O.jsx)("p",{className:"pl-1",children:Q("{{amount}} arbitrajes disponibles",{amount:M[s].length})})]})]}),N&&(!(s.toUpperCase()in N)||N[s.toUpperCase()]&&"ask"in N[s.toUpperCase()]&&"bid"in N[s.toUpperCase()]&&N[s.toUpperCase()].ask.length>0&&N[s.toUpperCase()].bid.length>0&&N[s.toUpperCase()].ask.filter((function(e){return te(e,s)})).length>0&&N[s.toUpperCase()].bid.filter((function(e){return te(e,s)})).length>0)&&Object(O.jsx)(h.a,{className:"w-full align-middle",breakpoints:{0:{slidesPerView:1},769:{slidesPerView:2}},pagination:{clickable:!0},modules:[x.d],children:Object(a.a)(Array("ask","bid")).map((function(e,t){return Object(O.jsx)(h.b,{className:"pb-6",children:Object(O.jsx)("div",{className:"py-2",children:Object(O.jsxs)("table",{className:"mt-1 m-auto",children:[Object(O.jsxs)("thead",{children:[Object(O.jsx)("tr",{children:Object(O.jsx)("th",{className:"text-left",children:Object(O.jsx)("span",{className:"px-2 py-1 text-xs font-bold text-blue-50 bg-blue-400 rounded mb-3",children:"ask"===e&&Q("COMPRAS A")||Q("VENDES A")})})}),Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{scope:"col",className:"py-1 sm:py-3 text-left text-xs font-medium uppercase tracking-wider"}),Object(O.jsx)("th",{scope:"col",className:"py-1 sm:py-3 text-left text-xs font-medium uppercase tracking-wider",children:Q("PRECIO")}),Object(O.jsx)("th",{scope:"col"})]})]}),Object(O.jsx)("tbody",{children:N&&N[s.toUpperCase()]&&N[s.toUpperCase()][e]&&N[s.toUpperCase()][e].filter((function(e){return te(e,s)})).slice(0,R||$[e]?N[s.toUpperCase()][e].length:5).map((function(t,c){return Object(O.jsxs)(l.a.Fragment,{children:[Object(O.jsxs)("tr",{children:[Object(O.jsxs)("td",{className:"cursor-pointer max-w-44 sm:w-44 pr-3 sm:pr-5 flex",children:[Object(O.jsxs)(f.a,{condition:t.fields.id.indexOf("p2p")>-1&&_&&_ in t.fields&&e in t.fields[_],className:"grid grid-flow-col justify-start",to:t.fields.url,target:-1===t.fields.id.indexOf("p2p")&&_&&_ in t.fields&&e in t.fields[_]?"_blank":"_self",rel:-1===t.fields.id.indexOf("p2p")&&_&&_ in t.fields&&e in t.fields[_]?"sponsored noreferrer":void 0,children:[y&&Object(O.jsx)("img",{loading:"lazy",className:"w-5 sm:w-7 mr-2 self-center",src:t.fields.icon,alt:t.fields.name}),Object(O.jsx)("div",{className:"text-md self-center",children:Object(O.jsx)("p",{className:"truncate hover:overflow-clip hover:whitespace-normal hover:break-words",children:t.fields.name})})]}),t.fields.info_access&&Object(O.jsx)(n.p,{onClick:function(e){W({event:"user_action",event_category:"".concat(t.fields.id,"_home_info_access"),event_label:"click"}),window.open(t.fields.info_access_url),e.preventDefault()},className:"w-6 h-6 ml-1 cursor-pointer text-blue-500","aria-hidden":"true"},c),t.fields.available_blockchains&&t.fields.available_blockchains.map((function(e,i){return Object(O.jsxs)(l.a.Fragment,{children:[Object(O.jsx)(p.a,{html:!0,place:"right",className:"w-48",effect:"solid",id:"".concat(t.fields.id,"-").concat(s,"-").concat(e),children:Q("{{providerName}} te permite operar con la red de {{blockchainName}} haciendo la transacci\xf3n m\xe1s r\xe1pida y barata.",{providerName:t.fields.name,blockchainName:Object(j.a)(e).name})}),Object(O.jsx)("img",{loading:"lazy",src:Object(j.a)(e).icon,className:"ml-1 w-4 h-4 self-center ".concat(e," cursor-pointer"),alt:Object(j.a)(e).name,"data-tip":!0,"data-for":"".concat(t.fields.id,"-").concat(s,"-").concat(e)})]},i)})),("ask"===e&&t.fields.deposits_allowed&&(!1===t.fields.fiat_deposits_operating_now||!1===t.fields.crypto_withdrawals_operating_now)||"bid"===e&&t.fields.withdrawals_allowed&&(!1===t.fields.fiat_withdrawals_operating_now||!1===t.fields.crypto_deposits_operating_now))&&Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(n.s,{className:"text-indigo-500 w-4 h-4 self-center ml-1 cursor-pointer","aria-hidden":"true","data-tip":!0,"data-for":"".concat(t.fields.id,"-").concat(s,"-").concat(e)}),Object(O.jsx)(p.a,{html:!0,place:"right",className:"w-48",effect:"solid",id:"".concat(t.fields.id,"-").concat(s,"-").concat(e),children:"ask"===e&&(!1===t.fields.fiat_deposits_operating_now&&!1===t.fields.crypto_withdrawals_operating_now&&Q("En este momento no permite dep\xf3sitos de FIAT ni retiros de criptomonedas.")||!1===t.fields.fiat_deposits_operating_now&&Q("En este momento no permite dep\xf3sitos de FIAT.")||!1===t.fields.crypto_withdrawals_operating_now&&Q("En este momento no permite retiros de criptomonedas."))||"bid"===e&&(!1===t.fields.fiat_withdrawals_operating_now&&!1===t.fields.crypto_deposits_operating_now&&Q("En este momento no permite dep\xf3sitos de criptomonedas ni retiros de FIAT.")||!1===t.fields.fiat_withdrawals_operating_now&&Q("En este momento no permite retiros de FIAT.")||!1===t.fields.crypto_deposits_operating_now&&Q("En este momento no permite dep\xf3sitos de criptomonedas."))})]}),("ask"===e&&"deposits_allowed"in t.fields&&!t.fields.deposits_allowed||"bid"===e&&"withdrawals_allowed"in t.fields&&!t.fields.withdrawals_allowed)&&Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(n.d,{className:"text-red-400 w-4 h-4 self-center ml-1 cursor-pointer","aria-hidden":"true","data-tip":!0,"data-for":"".concat(t.fields.id,"-").concat(s,"-").concat("ask"===e?"deposits_not_allowed":"withdrawals_not_allowed")}),Object(O.jsx)(p.a,{html:!0,place:"right",className:"w-48",effect:"solid",id:"".concat(t.fields.id,"-").concat(s,"-").concat("ask"===e?"deposits_not_allowed":"withdrawals_not_allowed"),children:Q("{{providerName}} no permite {{operation}} {{crypto}}.",{providerName:t.fields.name,operation:"ask"===e&&Q("retirar")||Q("depositar"),crypto:Object(b.a)(s.toUpperCase()).name})})]}),"operation_type"in t.fields&&t.fields.operation_type.indexOf("in_person")>-1&&"operation_location"in t.fields&&t.fields.operation_location.length>0&&Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(n.C,{className:"text-gray-400 w-4 h-4 self-center ml-1 cursor-pointer","aria-hidden":"true","data-tip":!0,"data-for":"".concat(t.fields.id,"-").concat(s,"-").concat(t.fields.operation_type.length,"-").concat(t.fields.operation_location.length)}),Object(O.jsx)(p.a,{html:!0,place:"right",className:"w-48",effect:"solid",id:"".concat(t.fields.id,"-").concat(s,"-").concat(t.fields.operation_type.length,"-").concat(t.fields.operation_location.length),children:Q("{{providerName}} solo opera {{operationType}} en {{operationLocation}}.",{providerName:t.fields.name,operationType:t.fields.operation_type.reduce((function(e,t){return"".concat(e?"".concat(e," ").concat(Q("o")," "):"").concat(Q(t))}),null),operationLocation:t.fields.operation_location.reduce((function(e,t){return"".concat(e,", ").concat(t)}))})})]})]}),_&&_ in t.fields&&e in t.fields[_]&&Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("td",{className:"align-top",children:[Object(O.jsxs)("div",{className:"text-md truncate w-44 grid grid-flow-col justify-between",children:[Object(O.jsx)("span",{children:_&&t.fields[_][e]}),Object(O.jsx)("span",{className:"self-center text-xs text-gray-600","data-tip":!0,"data-for":"".concat(t.fields.id,"-").concat(s,"-").concat(e,"-spread"),children:_&&t.fields[_]["".concat(e,"_spread")]})]}),Object(O.jsx)(p.a,{html:!0,place:G?"left":"ask"===e?"right":"left",className:"w-40",effect:"solid",id:"".concat(t.fields.id,"-").concat(s,"-").concat(e,"-spread"),children:"#1"===t.fields[_]["".concat(e,"_spread")]?Q("ask"===e?"{{providerName}} tiene el mejor precio para comprar.":"{{providerName}} tiene el mejor precio para vender.",{providerName:t.fields.name}):Q("ask"===e?"{{spread}} m\xe1s caro que comprar en {{providerName}}, quien tiene el mejor precio.":"{{spread}} m\xe1s barato que vender en {{providerName}}, quien tiene el mejor precio.",{spread:t.fields[_]["".concat(e,"_spread")].replace(/-|\+/g,""),providerName:t.fields[_]["".concat(e,"_best_price_provider_name")]})})]}),Object(O.jsx)("td",{className:"align-top",children:-1===v[s][e].indexOf(t.fields.id)&&Object(O.jsx)(n.i,{className:"w-5 h-5 ml-2 -mr-1 cursor-pointer","aria-hidden":"true",onClick:function(){v[s][e].indexOf(t.fields.id)>-1?v[s][e].splice(v[s][e].indexOf(t.fields.id),1):v[s][e].push(t.fields.id),C(Object(i.a)({},v))}})||Object(O.jsx)(n.j,{className:"w-5 h-5 ml-2 -mr-1 cursor-pointer","aria-hidden":"true",onClick:function(){v[s][e].indexOf(t.fields.id)>-1?v[s][e].splice(v[s][e].indexOf(t.fields.id),1):v[s][e].push(t.fields.id),C(Object(i.a)({},v))}})})]})]}),Object(O.jsx)("tr",{children:Object(O.jsxs)("td",{className:"text-sm text-gray-500 pb-1 sm:pb-3",colSpan:3,children:[Object(O.jsxs)("span",Object(i.a)(Object(i.a)({},t.fields.score&&t.fields.score.count>0&&t.fields.score.rating<=2&&{"data-tip":"","data-for":"".concat(t.fields.id,"-").concat(s,"-bad-score")}),{},{children:[t.fields.score&&t.fields.score.count>0&&Object(O.jsxs)("p",{className:t.fields.score&&t.fields.score.count>0&&t.fields.score.rating<=2?"inline-flex text-red-400":"inline-flex",children:[t.fields.score.rating,Object(O.jsx)(n.z,{className:"w-5 h-5 mr-1","aria-hidden":"true"})]}),v[s][e].indexOf(t.fields.id)>-1&&Object(O.jsx)(d.b,{className:["underline",t.fields.score&&t.fields.score.count>0?"-ml-1":""].join(" "),to:"".concat(Q("/opiniones/")).concat(t.fields.id),target:"_blank",rel:"noreferrer",children:Q("Ver opiniones")})]})),t.fields.score&&t.fields.score.count>0&&t.fields.score.rating<=2&&Object(O.jsx)(p.a,{html:!0,place:"right",className:"w-48",effect:"solid",id:"".concat(t.fields.id,"-").concat(s,"-bad-score"),children:Q("Atenci\xf3n: te recomendamos que leas atentamente las opiniones de otros usuarios antes de operar.")})]})}),_&&v[s][e].indexOf(t.fields.id)>-1&&Object(O.jsxs)(O.Fragment,{children:[-1===t.fields.id.indexOf("p2p")&&t.fields.id in k&&k[t.fields.id]&&Object(O.jsx)(O.Fragment,{children:k[t.fields.id].map((function(e,t){return Object(O.jsxs)("tr",{className:"border-t border-gray-700",children:[Object(O.jsx)("td",{className:"cursor-pointer min-w-min text-gray-500 text-sm",children:Object(O.jsx)("p",{children:e.title})}),Object(O.jsx)("td",{className:"cursor-pointer text-gray-500 text-sm max-w-0",children:Object(O.jsx)("p",{className:"truncate hover:overflow-clip hover:whitespace-normal hover:overflow-visible",children:e.content})})]},t)}))})||!(t.fields.id in k)&&-1===t.fields.id.indexOf("p2p")&&Object(a.a)(Array(5)).map((function(e,t){return Object(O.jsxs)("tr",{className:"border-t border-gray-700",children:[Object(O.jsx)("td",{className:"cursor-pointer min-w-min text-gray-500 text-sm",children:Object(O.jsx)("div",{className:"bg-gray-900 w-24 h-4 my-0.5 animate-pulse"})}),Object(O.jsx)("td",{className:"cursor-pointer min-w-min text-gray-500 text-sm",colSpan:2,children:Object(O.jsx)("div",{className:"bg-gray-900 w-8 h-4 my-0.5 animate-pulse"})})]},t)})),t.fields[_]["".concat(e,"_without_fees")]&&Object(O.jsxs)("tr",{className:"border-t border-gray-700",children:[Object(O.jsx)("td",{className:"cursor-pointer min-w-min text-gray-500 text-sm",children:Object(O.jsx)("p",{children:t.fields[_]["".concat(e,"_without_fees")]&&"".concat(Q("Precio de")," ").concat(Object(b.a)(s.toUpperCase()).name)})}),Object(O.jsx)("td",{className:"cursor-pointer min-w-min text-gray-500 text-sm",colSpan:2,children:Object(O.jsx)("p",{children:t.fields[_]["".concat(e,"_without_fees")]})})]}),-1===t.fields.id.indexOf("p2p")&&Object(O.jsx)("tr",{className:"border-t border-gray-700",children:Object(O.jsx)("td",{className:"text-sm py-1 sm:py-3",colSpan:3,children:Object(O.jsx)("a",{className:"underline text-blue-400",target:"_blank",rel:"noreferrer",href:"".concat("br"!==window.COUNTRY?"/".concat(window.COUNTRY):"","/").concat(Q("comisiones-y-limites"),"/").concat(t.fields.id),children:Q("Ver ficha t\xe9cnica")})})})]})]},c)}))||Object(a.a)(Array(5)).map((function(e,t){return Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{children:Object(O.jsxs)("div",{className:["max-w-44 sm:w-44 pr-3 sm:pr-5 pb-1 sm:pb-3.5 mb-2",0===t?"pt-1":""].join(" "),children:[Object(O.jsx)("div",{className:["bg-gray-900 mb-1 w-24 sm:w-24 h-4",K?"animate-pulse":""].join(" ")}),Object(O.jsx)("div",{className:["bg-gray-900 w-10 sm:w-10 h-4",K?"animate-pulse":""].join(" ")})]})}),Object(O.jsx)("td",{className:"align-top",children:Object(O.jsx)("div",{className:["max-w-40 sm:w-40 pr-3 sm:pr-11",0===t?"pt-1":""].join(" "),children:Object(O.jsx)("div",{className:["bg-gray-900 w-32 h-4",K?"animate-pulse":""].join(" ")})})}),Object(O.jsx)("td",{className:"align-top",children:Object(O.jsx)("div",{className:["w-5 h-5 ml-3 -mr-2.5",0===t?"pt-1":""].join(" "),children:Object(O.jsx)("div",{className:["bg-gray-900 w-4 h-4",K?"animate-pulse":""].join(" ")})})})]},t)}))}),!R&&_&&N[s.toUpperCase()]&&e in N[s.toUpperCase()]&&N[s.toUpperCase()][e].length>5&&Object(O.jsx)("tbody",{onClick:function(){$[e]&&B(s),$[e]=!$[e],ee(Object(i.a)({},$))},children:Object(O.jsx)("tr",{children:Object(O.jsx)("td",{className:"cursor-pointer max-w-44 sm:w-44 pr-3 sm:pr-5 flex underline text-blue-400",children:!$[e]&&Q("Ver m\xe1s")||Q("Ver menos")})})})]})})},t)}))})||N&&N[s.toUpperCase()]&&"ask"in N[s.toUpperCase()]&&"bid"in N[s.toUpperCase()]&&N[s.toUpperCase()].ask.length>0&&N[s.toUpperCase()].bid.length>0&&Object(O.jsxs)("div",{className:"grid grid-cols-3 pt-2",children:[Object(O.jsxs)("div",{className:"px-4 col-span-3",children:[Object(O.jsx)("p",{className:"font-bold",children:Q("Prueba cambiando los filtros")}),Object(O.jsx)("p",{className:"inline",children:Q("No encontramos precios de {{crypto}} con los filtros que aplicaste.",{crypto:Object(b.a)(s.toUpperCase()).name})})," ",Object(O.jsx)("p",{className:"cursor-pointer underline inline",onClick:function(){U(null),T(S),P(A),E(D),F(I),V(!0)},children:Q("Cambiar filtros")})]}),Object(O.jsx)("img",{loading:"lazy",className:"pr-4 w-24 col-start-4 self-end",src:"https://i.imgur.com/JIgnO8P.png"})]})||Object(O.jsxs)("div",{className:"grid grid-cols-3 pt-2",children:[Object(O.jsxs)("div",{className:"px-4 col-span-3",children:[Object(O.jsx)("p",{className:"font-bold",children:Q("Estamos intentando restablecer la conexi\xf3n")}),Object(O.jsx)("p",{children:Q("Espera un instante para volver a ver los precios de {{crypto}}.",{crypto:Object(b.a)(s.toUpperCase()).name})})]}),Object(O.jsx)("img",{loading:"lazy",className:"pr-4 w-24 col-start-4 self-end",src:"https://i.imgur.com/JIgnO8P.png"})]})]});function te(e,t){return!!_&&(!A.includes(e.fields.id)&&(!D.includes(e.fields.id)&&(e.fields.available_blockchains?!e.fields.available_blockchains.every((function(e){return I.includes(e)})):!I.includes(Object(b.a)(t.toUpperCase()).blockchain[0]))))}}var g=function(e,t){return!1};t.default=l.a.memo(u,g)}}]);