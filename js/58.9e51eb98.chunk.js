(this["webpackJsonpfront-in-react"]=this["webpackJsonpfront-in-react"]||[]).push([[58],{312:function(e,t,a){"use strict";a.r(t);var n=a(12),i=a(0),l=a.n(i),s=a(198),c=a(211),r=a(155),o=a(136),d=a(223),u=a(221),m=a(2),b=Object(d.a)("".concat(window.FALLBACK_LANGUAGE.toLowerCase(),"-").concat(window.COUNTRY.toUpperCase()));function j(e){var t=e.simulateInversionModalIsOpen,a=e.setSimulateInversionModalIsOpen,l=e.simulationAmount,d=e.setSimulationAmount,j=e.setSimulationMode,h=Object(o.a)().t,x=Object(i.useState)(l),f=Object(n.a)(x,2),v=f[0],g=f[1];return Object(i.useEffect)((function(){var e=function(e){"Enter"!==e.code&&"NumpadEnter"!==e.code||(e.preventDefault(),v&&v>0&&(j(!0),d(v),a(!1)))};return document.addEventListener("keydown",e),function(){document.removeEventListener("keydown",e)}}),[v]),Object(m.jsx)(s.a,{appear:!0,show:t,as:i.Fragment,children:Object(m.jsx)(c.a,{as:"div",className:"fixed inset-0 z-50 overflow-y-auto",onClose:function(){return a(!1)},children:Object(m.jsxs)("div",{className:"min-h-screen px-4 text-center",children:[Object(m.jsx)(c.a.Overlay,{className:"fixed inset-0 backdrop-filter backdrop-blur-sm"}),Object(m.jsx)("span",{className:"hidden md:inline-block h-screen align-middle","aria-hidden":"true",children:"\u200b"}),Object(m.jsx)(s.a.Child,{as:i.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:Object(m.jsxs)("div",{className:"inline-block w-full max-w-xl p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-gray-900 shadow-xl",children:[Object(m.jsxs)("div",{className:"flex justify-between",children:[Object(m.jsx)(c.a.Title,{as:"h3",className:"text-lg font-medium leading-6 text-white inline-block",children:h("Simulador de Anchor Protocol")}),Object(m.jsx)(r.E,{className:"w-5 h-5 ml-2 -mr-1 cursor-pointer text-gray-600","aria-hidden":"true",onClick:function(){return a(!1)}})]}),Object(m.jsxs)("div",{className:"p-5 mt-3 bg-gray-700 bg-opacity-70 rounded-lg text-white",children:[Object(m.jsx)("h2",{className:"text-xl font-bold",children:h("Calcula cu\xe1nto ganar\xedas seg\xfan tu inversi\xf3n")}),Object(m.jsx)("div",{className:"relative mt-5",children:Object(m.jsxs)("div",{className:"lg:grid lg:grid-flow-col justify-between",children:[Object(m.jsx)("div",{className:"flex lg:w-96",children:Object(m.jsxs)("div",{className:"relative w-full",children:[Object(m.jsx)(u.a,{className:"text-white bg-gray-800 focus:outline-none rounded-lg w-full",onValueChange:function(e){e.value!==l&&g(e.value)},thousandSeparator:b.groupDelimiter,decimalSeparator:b.decimalDelimiter||!1,prefix:"UST ",decimalScale:b.maximumFractionDigits,allowNegative:!1,placeholder:h("Ingresa el monto de UST a invertir"),value:v}),Object(m.jsxs)("div",{className:"pt-2",children:[" ",Object(m.jsx)("button",{onClick:function(){j(!0),d(v),a(!1)},className:"text-xs h-6 w-20 rounded-lg border-blue-400 bg-blue-400 hover:bg-blue-500 hover:text-gray-100 focus:z-10 focus:ring-0 focus:text-white",children:h("CALCULAR")})," "]})]})}),!1]})})]})]})})]})})})}var h=function(e,t){return e.simulationAmount===t.simulationAmount};t.default=l.a.memo(j,h)}}]);