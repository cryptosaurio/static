(this["webpackJsonpfront-in-react"]=this["webpackJsonpfront-in-react"]||[]).push([[35],{179:function(e,t,s){"use strict";s.d(t,"a",(function(){return a}));var i=s(171);function a(e,t){if(null==e)return{};var s,a,c=Object(i.a)(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)s=n[a],t.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(c[s]=e[s])}return c}},192:function(e,t,s){"use strict";s.d(t,"a",(function(){return o}));var i=s(143),a=s(179),c=(s(0),s(34)),n=s(2),r=["children","to","condition"];function o(e){var t=e.children,s=e.to,o=e.condition,l=Object(a.a)(e,r);return o&&s?Object(n.jsx)(c.b,Object(i.a)(Object(i.a)({to:s},l),{},{children:t})):Object(n.jsx)("a",Object(i.a)(Object(i.a)({href:s},l),{},{children:t}))}},286:function(e,t,s){"use strict";s.r(t);var i=s(143),a=s(147),c=s(12),n=s(150),r=s(0),o=s.n(r),l=s(135),d=s(172),p=s.n(d),m=s(34),j=s(198),f=s(155),b=s(185),h=s(167),x=s(162),O=s(192),u=s(166),w=s(2);function g(e){var t=e.contextualTrackingData,s=e.crypto,d=e.showCoinStats,g=e.coinStats,v=e.coinStatsCryptos,N=e.pricesData,_=e.selectedCurrency,y=e.showProviderIcon,C=e.providerDataExpandedByType,k=e.setProviderDataExpandedByType,U=e.providersExtraData,T=e.setTempSelectedCurrency,P=e.setTempBlockedCryptos,E=e.setTempBlockedProviders,F=e.setTempBlockedP2PProviders,S=e.setTempBlockedBlockchains,A=e.blockedCryptos,I=e.blockedProviders,D=e.blockedP2PProviders,B=e.blockedBlockchains,V=e.setPreferencesModalIsOpen,R=e.scrollToPriceTable,z=e.showAlwaysMoreOffers,L=Object(l.a)().t,Y=Object(f.useTracking)(t).trackEvent,J=Object(r.useState)({}),M=Object(c.a)(J,2),q=M[0],H=M[1];return Object(w.jsxs)(w.Fragment,{children:[d&&Object(w.jsx)("div",{className:"bg-gray-600",children:Object(w.jsx)("div",{className:"py-3 px-3 sm:px-6 lg:px-8",children:Object(w.jsx)("div",{className:"flex items-center justify-between flex-wrap",children:Object(w.jsxs)("div",{className:"grid grid-flow-row",children:[Object(w.jsxs)("span",{className:"text-white flex items-center",children:[Object(w.jsx)("img",{loading:"lazy",className:"w-5 mr-1",src:Object(x.a)(s.toUpperCase())&&Object(x.a)(s.toUpperCase()).icon||"https://cdn.worldvectorlogo.com/logos/dinosaurio.svg"}),Object(w.jsx)("h2",{className:"text-lg",children:Object(x.a)(s.toUpperCase())&&Object(x.a)(s.toUpperCase()).name||s.toUpperCase()})]}),g[s]&&g[s].price&&Object(w.jsxs)("div",{className:"flex my-1",children:[Object(w.jsx)("p",{className:"font-bold",children:g[s].price}),Object(w.jsx)("span",{className:["self-center mx-3 px-2 shadow-md rounded-full font-semibold text-sm",g[s].price_change_percentage_24h.indexOf("-")>-1?"bg-red-500":"bg-green-500"].join(" "),children:g[s].price_change_percentage_24h}),Object(w.jsx)(m.b,{className:"underline",to:"/".concat("br"!==window.COUNTRY?"criptomoneda":"criptomoeda","/").concat(Object(x.a)(s).name.split(" ").join("-").toLowerCase()),children:L("Ver estad\xedsticas")})]})||v&&v.indexOf(s)>-1&&Object(w.jsxs)("div",{className:"flex my-1",children:[Object(w.jsx)("div",{className:"self-center animate-pulse bg-gray-900 w-24 sm:w-24 h-5"}),Object(w.jsx)("div",{className:"self-center mx-3 px-2 rounded-full animate-pulse bg-gray-900 w-12 sm:w-12 h-6"}),Object(w.jsx)(m.b,{className:"underline",to:"/".concat("br"!==window.COUNTRY?"criptomoneda":"criptomoeda","/").concat(Object(x.a)(s).name.split(" ").join("-").toLowerCase()),children:L("Ver estad\xedsticas")})]})||v&&-1===v.indexOf(s)&&Object(w.jsx)("div",{className:"flex my-1",children:Object(w.jsx)(m.b,{className:"underline",to:"/".concat("br"!==window.COUNTRY?"criptomoneda":"criptomoeda","/").concat(Object(x.a)(s).name.split(" ").join("-").toLowerCase()),children:L("Ver estad\xedsticas")})})]})})})}),N&&(!(s.toUpperCase()in N)||N[s.toUpperCase()]&&"ask"in N[s.toUpperCase()]&&"bid"in N[s.toUpperCase()]&&N[s.toUpperCase()].ask.length>0&&N[s.toUpperCase()].bid.length>0&&N[s.toUpperCase()].ask.filter((function(e){return G(e,s)})).length>0&&N[s.toUpperCase()].bid.filter((function(e){return G(e,s)})).length>0)&&Object(w.jsx)(p.a,{className:"align-middle",responsive:Object(h.a)().responsive,arrows:!1,showDots:!0,customDot:Object(w.jsx)(u.a,{}),children:Object(a.a)(Array("ask","bid")).map((function(e,t){return Object(w.jsx)("div",{className:"py-2 overflow-x-auto no-scrollbar",children:Object(w.jsxs)("table",{className:"mt-1 m-auto",children:[Object(w.jsxs)("thead",{children:[Object(w.jsx)("tr",{children:Object(w.jsx)("th",{children:Object(w.jsx)("span",{className:"px-2 py-1 text-xs font-bold text-blue-50 bg-blue-400 rounded mb-3",children:"ask"===e&&L("COMPRAS A")||L("VENDES A")})})}),Object(w.jsxs)("tr",{children:[Object(w.jsx)("th",{scope:"col",className:"py-1 sm:py-3 text-left text-xs font-medium uppercase tracking-wider"}),Object(w.jsx)("th",{scope:"col",className:"py-1 sm:py-3 text-left text-xs font-medium uppercase tracking-wider",children:L("PRECIO")}),Object(w.jsx)("th",{scope:"col"})]})]}),Object(w.jsx)("tbody",{children:N&&N[s.toUpperCase()]&&N[s.toUpperCase()][e]&&N[s.toUpperCase()][e].filter((function(e){return G(e,s)})).slice(0,z||q[e]?N[s.toUpperCase()][e].length:5).map((function(t,a){var c,r,l,d,p,f,h,u,g,v,N,T,P,E,F,S,A,I,D,B,V,R,z,J,M,q,H;return Object(w.jsxs)(o.a.Fragment,{children:[Object(w.jsxs)("tr",{children:[Object(w.jsxs)("td",{className:"cursor-pointer max-w-44 sm:w-44 pr-3 sm:pr-5 flex",children:[Object(w.jsxs)(O.a,{condition:t.fields.id.indexOf("p2p")>-1&&_&&_ in t.fields&&e in t.fields[_],className:"grid grid-flow-col justify-start",to:t.fields.url,target:-1===t.fields.id.indexOf("p2p")&&_&&_ in t.fields&&e in t.fields[_]?"_blank":"_self",rel:-1===t.fields.id.indexOf("p2p")&&_&&_ in t.fields&&e in t.fields[_]?"sponsored noreferrer":void 0,children:[y&&Object(w.jsx)("img",{loading:"lazy",className:"w-5 sm:w-7 mr-2 self-center",src:t.fields.icon,"data-tip":!0,"data-for":t.fields.name}),Object(w.jsx)("div",{className:"text-md self-center",children:Object(w.jsx)("span",{className:"flex",children:Object(w.jsx)("p",{className:"truncate hover:overflow-clip hover:whitespace-normal hover:break-words",children:t.fields.name})})})]}),t.fields.info_access&&Object(w.jsx)(n.u,{onClick:function(e){Y({event:"user_action",event_category:"".concat(t.fields.id,"_home_info_access"),event_label:"click"}),window.open(t.fields.info_access_url),e.preventDefault()},className:"w-6 h-6 ml-1 cursor-pointer text-blue-500","aria-hidden":"true"},a),t.fields.available_blockchains&&t.fields.available_blockchains.map((function(e,i){return Object(w.jsxs)(o.a.Fragment,{children:[Object(w.jsx)(j.a,{html:!0,place:"right",className:"w-48",effect:"solid",id:"".concat(t.fields.id,"-").concat(s,"-").concat(e),children:L("{{providerName}} te permite operar con la red de {{blockchainName}} haciendo la transacci\xf3n m\xe1s r\xe1pida y barata.",{providerName:t.fields.name,blockchainName:Object(b.a)(e).name})}),Object(w.jsx)("img",{loading:"lazy",src:Object(b.a)(e).icon,className:"ml-1 w-4 h-4 self-center ".concat(e," cursor-pointer"),"data-tip":!0,"data-for":"".concat(t.fields.id,"-").concat(s,"-").concat(e)})]},i)})),("ask"===e&&t.fields.deposits_allowed&&(!1===t.fields.fiat_deposits_operating_now||!1===t.fields.crypto_withdrawals_operating_now)||"bid"===e&&t.fields.withdrawals_allowed&&(!1===t.fields.fiat_withdrawals_operating_now||!1===t.fields.crypto_deposits_operating_now))&&Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(n.x,{className:"text-indigo-500 w-4 h-4 self-center ml-1 cursor-pointer","aria-hidden":"true","data-tip":!0,"data-for":"".concat(t.fields.id,"-").concat(s,"-").concat(e)}),Object(w.jsx)(j.a,{html:!0,place:"right",className:"w-48",effect:"solid",id:"".concat(t.fields.id,"-").concat(s,"-").concat(e),children:"ask"===e&&(!1===t.fields.fiat_deposits_operating_now&&!1===t.fields.crypto_withdrawals_operating_now&&L("En este momento no permite dep\xf3sitos de FIAT ni retiros de criptomonedas.")||!1===t.fields.fiat_deposits_operating_now&&L("En este momento no permite dep\xf3sitos de FIAT.")||!1===t.fields.crypto_withdrawals_operating_now&&L("En este momento no permite retiros de criptomonedas."))||"bid"===e&&(!1===t.fields.fiat_withdrawals_operating_now&&!1===t.fields.crypto_deposits_operating_now&&L("En este momento no permite dep\xf3sitos de criptomonedas ni retiros de FIAT.")||!1===t.fields.fiat_withdrawals_operating_now&&L("En este momento no permite retiros de FIAT.")||!1===t.fields.crypto_deposits_operating_now&&L("En este momento no permite dep\xf3sitos de criptomonedas."))})]}),("ask"===e&&"deposits_allowed"in t.fields&&!t.fields.deposits_allowed||"bid"===e&&"withdrawals_allowed"in t.fields&&!t.fields.withdrawals_allowed)&&Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(n.f,{className:"text-red-400 w-4 h-4 self-center ml-1 cursor-pointer","aria-hidden":"true","data-tip":!0,"data-for":"".concat(t.fields.id,"-").concat(s,"-").concat("ask"===e?"deposits_not_allowed":"withdrawals_not_allowed")}),Object(w.jsx)(j.a,{html:!0,place:"right",className:"w-48",effect:"solid",id:"".concat(t.fields.id,"-").concat(s,"-").concat("ask"===e?"deposits_not_allowed":"withdrawals_not_allowed"),children:L("{{providerName}} no permite {{operation}} {{crypto}}.",{providerName:t.fields.name,operation:"ask"===e&&L("retirar")||L("depositar"),crypto:Object(x.a)(s.toUpperCase()).name})})]}),"operation_type"in t.fields&&t.fields.operation_type.indexOf("in_person")>-1&&"operation_location"in t.fields&&t.fields.operation_location.length>0&&Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(n.H,{className:"text-gray-400 w-4 h-4 self-center ml-1 cursor-pointer","aria-hidden":"true","data-tip":!0,"data-for":"".concat(t.fields.id,"-").concat(s,"-").concat(t.fields.operation_type.length,"-").concat(t.fields.operation_location.length)}),Object(w.jsx)(j.a,{html:!0,place:"right",className:"w-48",effect:"solid",id:"".concat(t.fields.id,"-").concat(s,"-").concat(t.fields.operation_type.length,"-").concat(t.fields.operation_location.length),children:L("{{providerName}} solo opera {{operationType}} en {{operationLocation}}.",{providerName:t.fields.name,operationType:t.fields.operation_type.reduce((function(e,t){return"".concat(e?"".concat(e," ").concat(L("o")," "):"").concat(L(t))}),null),operationLocation:t.fields.operation_location.reduce((function(e,t){return"".concat(e,", ").concat(t)}))})})]})]}),_&&_ in t.fields&&e in t.fields[_]&&Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)("td",{className:"align-top",children:Object(w.jsx)("div",{className:"text-md truncate max-w-40 sm:w-40 pr-3 sm:pr-5",children:Object(w.jsx)("span",{children:_&&t.fields[_][e]})})}),Object(w.jsx)("td",{className:"align-top",children:-1===C[s][e].indexOf(t.fields.id)&&Object(w.jsx)(n.l,{className:"w-5 h-5 ml-2 -mr-1 cursor-pointer","aria-hidden":"true",onClick:function(){C[s][e].indexOf(t.fields.id)>-1?C[s][e].splice(C[s][e].indexOf(t.fields.id),1):C[s][e].push(t.fields.id),k(Object(i.a)({},C))}})||Object(w.jsx)(n.o,{className:"w-5 h-5 ml-2 -mr-1 cursor-pointer","aria-hidden":"true",onClick:function(){C[s][e].indexOf(t.fields.id)>-1?C[s][e].splice(C[s][e].indexOf(t.fields.id),1):C[s][e].push(t.fields.id),k(Object(i.a)({},C))}})})]})]}),Object(w.jsx)("tr",{children:Object(w.jsxs)("td",{className:"text-sm text-gray-500 pb-1 sm:pb-3",colSpan:3,children:[Object(w.jsxs)("span",Object(i.a)(Object(i.a)({},t.fields.score&&t.fields.score.count>0&&t.fields.score.rating<=2&&{"data-tip":"","data-for":"".concat(t.fields.id,"-").concat(s,"-bad-score")}),{},{children:[t.fields.score&&t.fields.score.count>0&&Object(w.jsxs)("p",{className:t.fields.score&&t.fields.score.count>0&&t.fields.score.rating<=2?"inline-flex text-red-400":"inline-flex",children:[t.fields.score.rating,Object(w.jsx)(n.E,{className:"w-5 h-5 mr-1","aria-hidden":"true"})]}),C[s][e].indexOf(t.fields.id)>-1&&Object(w.jsx)(m.b,{className:["underline",t.fields.score&&t.fields.score.count>0?"-ml-1":""].join(" "),to:"".concat(L("/opiniones/")).concat(t.fields.id),target:"_blank",rel:"noreferrer",children:L("Ver opiniones")})]})),t.fields.score&&t.fields.score.count>0&&t.fields.score.rating<=2&&Object(w.jsx)(j.a,{html:!0,place:"right",className:"w-48",effect:"solid",id:"".concat(t.fields.id,"-").concat(s,"-bad-score"),children:L("Atenci\xf3n: te recomendamos que leas atentamente las opiniones de otros usuarios antes de operar.")})]})}),_&&C[s][e].indexOf(t.fields.id)>-1&&Object(w.jsxs)(w.Fragment,{children:[(!(t.fields.id in U)||t.fields.id in U&&("ask"===e&&(null===(c=U[t.fields.id])||void 0===c||null===(r=c.fees)||void 0===r||null===(l=r.fiat)||void 0===l?void 0:l.deposit)||"bid"===e&&(null===(d=U[t.fields.id])||void 0===d||null===(p=d.fees)||void 0===p||null===(f=p.fiat)||void 0===f?void 0:f.withdraw)))&&Object(w.jsxs)("tr",{className:"border-t border-gray-700",children:[Object(w.jsx)("td",{className:"cursor-pointer min-w-min text-gray-500 text-sm",children:!(t.fields.id in U)&&Object(w.jsx)("div",{className:"animate-pulse bg-gray-900 w-24 h-4"})||Object(w.jsx)("p",{children:"ask"===e&&(null===(h=U[t.fields.id])||void 0===h||null===(u=h.fees)||void 0===u||null===(g=u.fiat)||void 0===g?void 0:g.deposit)&&L("Fee de dep\xf3sito")||(null===(v=U[t.fields.id])||void 0===v||null===(N=v.fees)||void 0===N||null===(T=N.fiat)||void 0===T?void 0:T.withdraw)&&L("Fee de retiro")})}),Object(w.jsx)("td",{className:"cursor-pointer min-w-min text-gray-500 text-sm",colSpan:2,children:!(t.fields.id in U)&&Object(w.jsx)("div",{className:"animate-pulse bg-gray-900 w-8 h-4"})||Object(w.jsx)("p",{children:"ask"===e&&(null===(P=U[t.fields.id])||void 0===P||null===(E=P.fees)||void 0===E||null===(F=E.fiat)||void 0===F?void 0:F.deposit)||(null===(S=U[t.fields.id])||void 0===S||null===(A=S.fees)||void 0===A||null===(I=A.fiat)||void 0===I?void 0:I.withdraw)})})]}),t.fields[_]["".concat(e,"_without_fees")]&&Object(w.jsxs)("tr",{className:"border-t border-gray-700",children:[Object(w.jsx)("td",{className:"cursor-pointer min-w-min text-gray-500 text-sm",children:Object(w.jsx)("p",{children:t.fields[_]["".concat(e,"_without_fees")]&&"".concat(L("Precio de")," ").concat(Object(x.a)(s.toUpperCase()).name)})}),Object(w.jsx)("td",{className:"cursor-pointer min-w-min text-gray-500 text-sm",colSpan:2,children:Object(w.jsx)("p",{children:t.fields[_]["".concat(e,"_without_fees")]})})]}),(!(t.fields.id in U)||t.fields.id in U&&(null===(D=U[t.fields.id])||void 0===D||null===(B=D.fees)||void 0===B||null===(V=B.crypto)||void 0===V?void 0:V[e]))&&Object(w.jsxs)("tr",{className:"border-t border-gray-700",children:[Object(w.jsx)("td",{className:"cursor-pointer min-w-min text-gray-500 text-sm",children:!(t.fields.id in U)&&Object(w.jsx)("div",{className:"animate-pulse bg-gray-900 w-20 h-4"})||Object(w.jsx)("p",{children:(null===(R=U[t.fields.id])||void 0===R||null===(z=R.fees)||void 0===z||null===(J=z.crypto)||void 0===J?void 0:J[e])&&("ask"===e&&L("Fee por comprar")||L("Fee por vender"))})}),Object(w.jsx)("td",{className:"cursor-pointer min-w-min text-gray-500 text-sm",colSpan:2,children:!(t.fields.id in U)&&Object(w.jsx)("div",{className:"animate-pulse bg-gray-900 w-10 h-4"})||Object(w.jsx)("p",{children:null===(M=U[t.fields.id])||void 0===M||null===(q=M.fees)||void 0===q||null===(H=q.crypto)||void 0===H?void 0:H[e]})})]}),-1===t.fields.id.indexOf("p2p")&&Object(w.jsx)("tr",{className:"border-t border-gray-700",children:Object(w.jsx)("td",{className:"text-sm py-1 sm:py-3",colSpan:3,children:Object(w.jsx)("a",{className:"underline text-blue-400",target:"_blank",rel:"noreferrer",href:"".concat("br"!==window.COUNTRY?"/".concat(window.COUNTRY):"","/").concat(L("comisiones-y-limites"),"/").concat(t.fields.id),children:L("Ver ficha t\xe9cnica")})})})]})]},a)}))||Object(a.a)(Array(3)).map((function(e,t){return Object(w.jsxs)("tr",{children:[Object(w.jsx)("td",{className:"pb-1 sm:pb-3",children:Object(w.jsxs)("div",{className:"w-44",children:[Object(w.jsx)("div",{className:"animate-pulse bg-gray-900 mb-1 w-24 sm:w-24 h-4"}),Object(w.jsx)("div",{className:"animate-pulse bg-gray-900 w-10 sm:w-10 h-4"})]})}),Object(w.jsx)("td",{className:"mt-1 sm:mt-3 align-top",children:Object(w.jsx)("div",{className:"animate-pulse bg-gray-900 w-32 sm:w-32 h-4"})}),Object(w.jsx)("td",{className:"align-top",children:Object(w.jsx)("div",{className:"animate-pulse bg-gray-900 w-4 sm:w-4 h-4"})})]},t)}))}),!z&&_&&N[s.toUpperCase()]&&e in N[s.toUpperCase()]&&N[s.toUpperCase()][e].length>5&&Object(w.jsx)("tbody",{onClick:function(){q[e]&&R(s),q[e]=!q[e],H(Object(i.a)({},q))},children:Object(w.jsx)("tr",{children:Object(w.jsx)("td",{className:"cursor-pointer max-w-44 sm:w-44 pr-3 sm:pr-5 flex underline text-blue-400",children:!q[e]&&L("Ver m\xe1s")||L("Ver menos")})})})]})},t)}))})||N&&N[s.toUpperCase()]&&"ask"in N[s.toUpperCase()]&&"bid"in N[s.toUpperCase()]&&N[s.toUpperCase()].ask.length>0&&N[s.toUpperCase()].bid.length>0&&Object(w.jsxs)("div",{className:"grid grid-cols-3 pt-2",children:[Object(w.jsxs)("div",{className:"px-4 col-span-3",children:[Object(w.jsx)("p",{className:"font-bold",children:L("Prueba cambiando los filtros")}),Object(w.jsx)("p",{className:"inline",children:L("No encontramos precios de {{crypto}} con los filtros que aplicaste.",{crypto:Object(x.a)(s.toUpperCase()).name})})," ",Object(w.jsx)("p",{className:"cursor-pointer underline inline",onClick:function(){T(null),P(A),E(I),F(D),S(B),V(!0)},children:L("Cambiar filtros")})]}),Object(w.jsx)("img",{loading:"lazy",className:"pr-4 w-24 col-start-4 self-end",src:"https://i.imgur.com/JIgnO8P.png"})]})||Object(w.jsxs)("div",{className:"grid grid-cols-3 pt-2",children:[Object(w.jsxs)("div",{className:"px-4 col-span-3",children:[Object(w.jsx)("p",{className:"font-bold",children:L("Estamos intentando restablecer la conexi\xf3n")}),Object(w.jsx)("p",{children:L("Espera un instante para volver a ver los precios de {{crypto}}.",{crypto:Object(x.a)(s.toUpperCase()).name})})]}),Object(w.jsx)("img",{loading:"lazy",className:"pr-4 w-24 col-start-4 self-end",src:"https://i.imgur.com/JIgnO8P.png"})]})]});function G(e,t){return!!_&&(!I.includes(e.fields.id)&&(!D.includes(e.fields.id)&&(e.fields.available_blockchains?!e.fields.available_blockchains.every((function(e){return B.includes(e)})):!B.includes(Object(x.a)(t.toUpperCase()).blockchain[0]))))}}var v=function(e,t){return!1};t.default=o.a.memo(g,v)}}]);