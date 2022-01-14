(this["webpackJsonpfront-in-react"]=this["webpackJsonpfront-in-react"]||[]).push([[29],{270:function(e,a,s){"use strict";s.r(a);var i=s(18),l=s(0),r=s.n(l),n=s(122),c=s(153),t=s(6),o=s(228),d=s(17),u=s(209),m=s(123),b=s(145),p=s(1),j=Object(o.a)(window.COUNTRY),x={BTC:7,ETH:7,DAI:2,USDC:2,USDT:2,UST:2,BNB:7,ADA:7,LTC:7,CAKE:3,UNI:3,MATIC:7,SOL:7,DOT:7,LINK:7,XRP:7,BCH:7,DOGE:7};function g(e){var a=e.calculatorModalIsOpen,s=e.setCalculatorModalIsOpen,r=e.calculatorData,o=e.setCalculatorData,g=e.selectedCurrency,h=Object(m.a)().t;return Object(p.jsx)(n.a,{appear:!0,show:a,as:l.Fragment,children:Object(p.jsx)(c.a,{as:"div",className:"fixed inset-0 z-10 overflow-y-auto",onClose:function(){return s(!1)},children:Object(p.jsxs)("div",{className:"min-h-screen px-4 text-center",children:[Object(p.jsx)(c.a.Overlay,{className:"fixed inset-0 backdrop-filter backdrop-blur-sm"}),Object(p.jsx)("span",{className:"hidden md:inline-block h-screen align-middle","aria-hidden":"true",children:"\u200b"}),Object(p.jsx)(n.a.Child,{as:l.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:Object(p.jsxs)("div",{className:"inline-block w-full max-w-5xl p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-gray-900 shadow-xl",children:[Object(p.jsxs)("div",{className:"flex justify-between",children:[Object(p.jsx)(c.a.Title,{as:"h3",className:"text-lg font-medium leading-6 text-white inline-block",children:h("Calcula tu ganancia")}),Object(p.jsx)(t.F,{className:"w-5 h-5 ml-2 -mr-1 cursor-pointer text-gray-600","aria-hidden":"true",onClick:function(){return s(!1)}})]}),(r.opportunityUnavailable||r.opportunityChanged)&&Object(p.jsxs)("div",{className:"relative my-3 py-3 px-4 leading-normal text-red-700 bg-red-100 rounded-lg",role:"alert",children:[r.opportunityUnavailable&&Object(p.jsx)("p",{children:h("Esta oportunidad ya no est\xe1 disponible.")}),r.opportunityChanged&&Object(p.jsxs)("div",{className:"grid grid-cols-4",children:[Object(p.jsx)("p",{className:"col-span-full",children:h("Los precios que est\xe1s viendo est\xe1n desactualizados.")}),Object(p.jsx)("p",{className:"col-end-8 underline cursor-pointer",onClick:function(){o(Object(i.a)(Object(i.a)({},{userInversion:r.opportunityUpdatedData.rawMinimumInversion}),r.opportunityUpdatedData))},children:h("ACTUALIZAR")})]}),Object(p.jsx)("span",{className:"absolute inset-y-0 right-0 flex items-center mr-4"})]}),Object(p.jsxs)("div",{className:"mt-2 flex flex-col gap-3 text-white",children:[Object(p.jsxs)("div",{className:"my-4",children:[Object(p.jsx)("label",{className:"block text-sm mb-2","data-for":"username",children:"USD"===g&&h("D\xf3lares a invertir")||h("Pesos a invertir")}),Object(p.jsx)(u.a,{className:"bg-gray-900 focus:border-gray-600 focus:ring-1 focus:ring-gray-600 border-gray-700",onValueChange:function(e){e.value!==r.userInversion&&o((function(a){return Object(i.a)(Object(i.a)({},a),{},{userInversion:e.value})}))},thousandSeparator:j.groupDelimiter,decimalSeparator:j.decimalDelimiter||!1,prefix:"".concat(r.currencyMask," "),decimalScale:j.maximumFractionDigits,allowNegative:!1,defaultValue:r.rawMinimumInversion,value:r.userInversion})]}),Object(p.jsxs)("div",{className:"md:grid md:grid-cols-8",children:[Object(p.jsxs)("span",{className:"md:col-span-3",children:[h("Compr\xe1s en")," ",r.buy.fields.name,r.buy.fields.score&&r.buy.fields.score.count>0&&Object(p.jsxs)("span",{className:"hidden md:flex items-center text-gray-500",children:[r.buy.fields.score.rating,Object(p.jsx)(t.B,{className:"w-5 h-5 -mr-1","aria-hidden":"true"})]})]}),Object(p.jsxs)("span",{className:"pl-1 md:pl-0 md:col-span-2",children:[g&&r.userInversion>0&&(r.userInversion/r.buy.fields[g].original_ask).toFixed(x[r.coin])," ",r.userInversion>0&&r.coin]}),Object(p.jsx)("span",{className:"md:col-span-2 hidden md:block",children:Object(p.jsx)(u.a,{thousandSeparator:j.groupDelimiter,decimalSeparator:j.decimalDelimiter||!1,prefix:"".concat(r.currencyMask," "),decimalScale:j.maximumFractionDigits,value:r.userInversion,displayType:"text"})}),Object(p.jsx)("span",{children:!r.buyDataExpanded&&Object(p.jsx)(t.j,{className:"w-5 h-5 ml-2 -mr-1 cursor-pointer float-right","aria-hidden":"true",onClick:function(){o((function(e){return Object(i.a)(Object(i.a)({},e),{},{buyDataExpanded:!0})}))}})||Object(p.jsx)(t.m,{className:"w-5 h-5 ml-2 -mr-1 cursor-pointer float-right","aria-hidden":"true",onClick:function(){o((function(e){return Object(i.a)(Object(i.a)({},e),{},{buyDataExpanded:!1})}))}})})]}),r.buyDataExpanded&&g&&Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("div",{className:"md:grid md:grid-cols-8 text-gray-500",children:[Object(p.jsxs)("span",{className:"col-span-3",children:[Object(d.a)(r.coin).name,Object(p.jsx)("span",{className:"md:hidden",children:":"})]}),Object(p.jsx)("span",{className:"col-start-4 pl-1 md:pl-0 md:col-start-6 col-span-5",children:r.userInversion>0&&Object(p.jsx)(u.a,{thousandSeparator:j.groupDelimiter,decimalSeparator:j.decimalDelimiter||!1,prefix:"".concat(r.currencyMask," "),decimalScale:j.maximumFractionDigits,value:0===r.buy.fields[g].original_ask_without_fees?r.userInversion:r.buy.fields[g].original_ask_without_fees*(r.userInversion/r.buy.fields[g].original_ask),displayType:"text"})||"-"})]}),Object(p.jsxs)("div",{className:"md:grid md:grid-cols-8 text-gray-500",children:[Object(p.jsxs)("span",{className:"col-span-3",children:[h("Comisiones"),Object(p.jsx)("span",{className:"md:hidden",children:":"})]}),Object(p.jsx)("span",{className:"col-start-4 pl-1 md:pl-0 md:col-start-6 col-span-5",children:r.userInversion>0&&Object(p.jsx)(u.a,{thousandSeparator:j.groupDelimiter,decimalSeparator:j.decimalDelimiter||!1,prefix:"".concat(r.currencyMask," "),decimalScale:j.maximumFractionDigits,value:0===r.buy.fields[g].original_ask_without_fees?r.buy.fields[g].original_ask_without_fees:r.userInversion-r.buy.fields[g].original_ask_without_fees*(r.userInversion/r.buy.fields[g].original_ask),displayType:"text"})||"-"})]}),Object(p.jsxs)("div",{className:"md:grid md:grid-cols-8 text-gray-500",children:[Object(p.jsxs)("span",{className:"col-span-3",children:[h("Fees de la red de {{blockchain}} de prioridad alta",{blockchain:Object(b.a)(Object(d.a)(r.coin).blockchain[0]).name}),Object(p.jsx)("span",{className:"md:hidden",children:":"})]}),Object(p.jsxs)("span",{className:"col-span-5 pl-1 md:pl-0",children:[parseFloat(r.brute_gas_costs).toFixed(x[r.coin])," ",r.coin]})]})]}),Object(p.jsxs)("div",{className:"md:grid md:grid-cols-8",children:[Object(p.jsxs)("span",{className:"col-span-3",children:[h("Vend\xe9s en")," ",r.sell.fields.name,r.sell.fields.score&&r.sell.fields.score.count>0&&Object(p.jsxs)("span",{className:"hidden md:flex items-center text-gray-500",children:[r.sell.fields.score.rating,Object(p.jsx)(t.B,{className:"w-5 h-5 -mr-1","aria-hidden":"true"})]})]}),Object(p.jsxs)("span",{className:"col-span-2 hidden md:block",children:[g&&r.userInversion>0&&(r.userInversion/r.buy.fields[g].original_ask-r.brute_gas_costs)*r.sell.fields[g].original_bid-r.userInversion>0&&(r.userInversion/r.buy.fields[g].original_ask-r.gas_costs/r.buy.fields[g].original_ask).toFixed(x[r.coin])||"-"," ",g&&r.userInversion>0&&(r.userInversion/r.buy.fields[g].original_ask-r.brute_gas_costs)*r.sell.fields[g].original_bid-r.userInversion>0&&r.coin]}),Object(p.jsx)("span",{className:"pl-1 md:pl-0 md:col-span-2 col-span-4",children:g&&r.userInversion>0&&(r.userInversion/r.buy.fields[g].original_ask-r.brute_gas_costs)*r.sell.fields[g].original_bid-r.userInversion>0&&Object(p.jsx)(u.a,{thousandSeparator:j.groupDelimiter,decimalSeparator:j.decimalDelimiter||!1,prefix:"".concat(r.currencyMask," "),decimalScale:j.maximumFractionDigits,value:(r.userInversion/r.buy.fields[g].original_ask-r.brute_gas_costs)*r.sell.fields[g].original_bid,displayType:"text"})||"-"}),Object(p.jsx)("span",{children:!r.sellDataExpanded&&Object(p.jsx)(t.j,{className:"w-5 h-5 ml-2 -mr-1 cursor-pointer float-right","aria-hidden":"true",onClick:function(){o((function(e){return Object(i.a)(Object(i.a)({},e),{},{sellDataExpanded:!0})}))}})||Object(p.jsx)(t.m,{className:"w-5 h-5 ml-2 -mr-1 cursor-pointer float-right","aria-hidden":"true",onClick:function(){o((function(e){return Object(i.a)(Object(i.a)({},e),{},{sellDataExpanded:!1})}))}})})]}),g&&r.sellDataExpanded&&Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("div",{className:"md:grid md:grid-cols-8 text-gray-500",children:[Object(p.jsxs)("span",{className:"col-span-3",children:[Object(d.a)(r.coin).name,Object(p.jsx)("span",{className:"md:hidden",children:":"})]}),Object(p.jsx)("span",{className:"col-start-4 pl-1 md:pl-0 md:col-start-6 col-span-5",children:g&&r.userInversion>0&&(r.userInversion/r.buy.fields[g].original_ask-r.brute_gas_costs)*r.sell.fields[g].original_bid-r.userInversion>0&&Object(p.jsx)(u.a,{thousandSeparator:j.groupDelimiter,decimalSeparator:j.decimalDelimiter||!1,prefix:"".concat(r.currencyMask," "),decimalScale:j.maximumFractionDigits,value:0===r.sell.fields[g].original_bid_without_fees?(r.userInversion/r.buy.fields[g].original_ask-r.gas_costs/r.buy.fields[g].original_ask)*r.sell.fields[g].original_bid:(r.userInversion/r.buy.fields[g].original_ask-r.gas_costs/r.buy.fields[g].original_ask)*r.sell.fields[g].original_bid_without_fees,displayType:"text"})||"-"})]}),Object(p.jsxs)("div",{className:"flex md:grid md:grid-cols-8 text-gray-500",children:[Object(p.jsxs)("span",{className:"col-span-3",children:[h("Comisiones"),Object(p.jsx)("span",{className:"md:hidden",children:":"})]}),Object(p.jsx)("span",{className:"col-start-4 pl-1 md:pl-0 md:col-start-6 col-span-5",children:g&&r.userInversion>0&&(r.userInversion/r.buy.fields[g].original_ask-r.brute_gas_costs)*r.sell.fields[g].original_bid-r.userInversion>0&&Object(p.jsx)(u.a,{thousandSeparator:j.groupDelimiter,decimalSeparator:j.decimalDelimiter||!1,prefix:"".concat(r.currencyMask," "),decimalScale:j.maximumFractionDigits,value:0===r.sell.fields[g].original_bid_without_fees?r.sell.fields[g].original_bid_without_fees:(r.userInversion/r.buy.fields[g].original_ask-r.brute_gas_costs)*r.sell.fields[g].original_bid_without_fees-(r.userInversion/r.buy.fields[g].original_ask-r.brute_gas_costs)*r.sell.fields[g].original_bid,displayType:"text"})||"-"})]})]}),Object(p.jsxs)("div",{className:"flex md:grid md:grid-cols-8",children:[Object(p.jsxs)("span",{className:"col-span-3",children:[h("Ganancia estimada"),Object(p.jsx)("span",{className:"md:hidden",children:":"})]}),Object(p.jsx)("span",{className:["col-start-4 pl-1 md:pl-0 md:col-start-6 col-span-5","".concat(g&&r.userInversion>0&&(r.userInversion/r.buy.fields[g].original_ask-r.brute_gas_costs)*r.sell.fields[g].original_bid-r.userInversion>0?"text-green-500":"")].join(" "),children:g&&r.userInversion>0&&(r.userInversion/r.buy.fields[g].original_ask-r.brute_gas_costs)*r.sell.fields[g].original_bid-r.userInversion>0&&Object(p.jsx)(u.a,{thousandSeparator:j.groupDelimiter,decimalSeparator:j.decimalDelimiter||!1,prefix:"".concat(r.currencyMask," "),decimalScale:j.maximumFractionDigits,value:(r.userInversion/r.buy.fields[g].original_ask-r.brute_gas_costs)*r.sell.fields[g].original_bid-r.userInversion,displayType:"text"})||"-"})]})]})]})})]})})})}var h=function(e,a){return e.calculatorData.userInversion===a.calculatorData.userInversion&&e.calculatorData.buyDataExpanded===a.calculatorData.buyDataExpanded&&e.calculatorData.sellDataExpanded===a.calculatorData.sellDataExpanded&&e.calculatorData.brute_gas_costs===a.calculatorData.brute_gas_costs&&e.calculatorData.difference===a.calculatorData.difference&&e.calculatorData.rawMinimumInversion===a.calculatorData.rawMinimumInversion};a.default=r.a.memo(g,h)}}]);