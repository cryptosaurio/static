(this["webpackJsonpfront-in-react"]=this["webpackJsonpfront-in-react"]||[]).push([[12],{213:function(e,a){},530:function(e,a){},532:function(e,a){},543:function(e,a){},545:function(e,a){},559:function(e,a){},561:function(e,a){},562:function(e,a){},649:function(e,a){},651:function(e,a){},719:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return h}));var s=t(4),c=t(0),r=t(6),l=t(129),i=t(32),n=t(2),d=t(414),o=t(659),m=t(381),b=t(380),j=t(379),x=t(55),g=t(1),u=t(658);m.e.register(m.j,m.d,m.b,m.l,m.h,m.i,m.g,m.p);var p=Object(b.a)("".concat(window.FALLBACK_LANGUAGE.toLowerCase(),"-").concat(window.COUNTRY.toUpperCase()));function h(){var e={page:"investments-dashboard",country:window.COUNTRY},a=Object(i.useTracking)(e).trackEvent,t=Object(l.a)().t,m=Object(n.g)(),b=Object(n.h)().address,h=Object(c.useState)(""),O=Object(s.a)(h,2),f=O[0],N=O[1],y=Object(c.useState)(null),w=Object(s.a)(y,2),v=w[0],S=w[1],D=Object(c.useState)(!1),A=Object(s.a)(D,2),T=A[0],U=A[1],Y=Object(c.useRef)(null);return Object(c.useEffect)((function(){var t={event:"pageview"};"production"===window.ENV?a(t):console.log(e,t)}),[]),Object(c.useEffect)((function(){b?N(b):(S(null),N(""))}),[b]),Object(c.useEffect)((function(){if(f&&d.AccAddress.validate(f)){Y.current.click();var t={event:"user_action",event_category:"anchor_protocol_".concat(f.slice(f.length-6,f.length)),event_label:"search"};"production"===window.ENV?a(t):console.log(e,t),U(!0),m("/monitor/anchor-protocol/".concat(f)),fetch("br"!==window.COUNTRY?"".concat(window.BARNEY_API_URL,"/get-anchor-protocol-data-v2/").concat(f):"".concat(window.BARNEY_BR_API_URL,"/get-anchor-protocol-data-v2/").concat(f)).then((function(e){return e.json()})).then((function(e){S(e)})).catch((function(){return S(null)})).finally((function(){return U(!1)}))}}),[f]),Object(x.a)((function(){v&&f&&d.AccAddress.validate(f)&&fetch("br"!==window.COUNTRY?"".concat(window.BARNEY_API_URL,"/get-anchor-protocol-data-v2/").concat(f):"".concat(window.BARNEY_BR_API_URL,"/get-anchor-protocol-data-v2/").concat(f)).then((function(e){return e.json()})).then((function(e){S(e)})).catch((function(){return S(null)})).finally((function(){return U(!1)}))}),6e4,!1),Object(g.jsxs)(g.Fragment,{children:[(v||T)&&Object(g.jsx)("div",{className:"p-5",children:Object(g.jsx)("h1",{className:"text-2xl font-bold",children:"Anchor Protocol Monitor"})}),!v&&!T&&Object(g.jsxs)("div",{className:"flex flex-col justify-center md:w-3/6 mx-auto",children:[Object(g.jsx)("div",{className:"p-5",children:Object(g.jsx)("h1",{className:"text-2xl font-bold",children:"Anchor Protocol Monitor"})}),Object(g.jsxs)("div",{className:"mx-5 mb-5 p-5 bg-gray-700 bg-opacity-70 rounded-lg",children:[Object(g.jsx)("h2",{className:"text-xl font-bold",children:t("Monitorea tus inversiones en Anchor Protocol y anticipa tu ganancia por d\xeda, semana y m\xe1s")}),Object(g.jsxs)("div",{className:"relative mt-5",children:[Object(g.jsx)("span",{className:"h-10 text-gray-600 focus-within:text-gray-400 absolute inset-y-0 left-0 flex items-center pl-2",children:Object(g.jsx)("button",{className:"p-1 focus:outline-none focus:shadow-outline",children:Object(g.jsx)(r.w,{className:"w-5 h-5"})})}),Object(g.jsxs)("div",{className:"grid grid-flow-col justify-between",children:[Object(g.jsx)("iframe",{id:"rememberTerraUserAddress",name:"rememberTerraUserAddress",className:"hidden",src:"about:blank"}),Object(g.jsxs)("div",{className:"flex flex-col",children:[Object(g.jsxs)("form",{target:"rememberTerraUserAddress",method:"post",action:"about:blank",children:[Object(g.jsx)("fieldset",{children:Object(g.jsx)("input",{type:"search",name:"terraUserAddress",id:"terraUserAddress",className:"py-2 h-10 w-72 sm:w-80 lg:w-96 text-sm text-white bg-gray-800 rounded-lg pl-10 focus:outline-none focus:bg-white focus:text-gray-900",placeholder:t("Ingresa tu address p\xfablica para empezar"),value:f,onChange:function(e){return N(e.target.value.toLowerCase())}})}),Object(g.jsx)("button",{type:"submit",className:"hidden",ref:Y})]}),Object(g.jsx)("button",{type:"button",className:"w-max mt-2 p-1 text-xs font-medium text-blue-400 rounded-lg border border-blue-400 hover:bg-gray-600 hover:text-blue-400 focus:z-10 focus:ring-2 focus:ring-blue-400 focus:text-blue-400",onClick:function(){return N("terra13kc0x8kr3sq8226myf4nmanmn2mrk9s5s9wsnz")},children:t("VER UNA DEMO")})]}),Object(g.jsx)("img",{src:"/static/img/blue-dyno.webp",className:"w-44 min-w-max h-52 hidden lg:block"})]})]})]}),Object(g.jsxs)("div",{className:"mb-5 px-5",children:[Object(g.jsxs)("span",{className:"font-bold",children:["\ud83d\udee1\ufe0f",t("Importante:")]})," ",Object(g.jsx)("p",{className:"contents",children:t("\xa1est\xe1s protegido! Tu address p\xfablica no nos permite realizar operaciones por ti. No guardamos tus datos ni informaci\xf3n.")})," ",Object(g.jsx)("a",{className:"underline",target:"_blank",rel:"noreferrer",href:"".concat("br"!==window.COUNTRY?"/".concat(window.COUNTRY):"","/").concat(t("politicas-de-privacidad")),children:t("Ent\xe9rate m\xe1s en nuestras pol\xedticas de privacidad")})]})]}),T&&Object(g.jsxs)(g.Fragment,{children:[Object(g.jsxs)("div",{className:"grid sm:grid-flow-col px-5 pb-5 sm:justify-between text-center gap-1 font-bold",children:[Object(g.jsxs)("div",{className:"grid grid-flow-row justify-items-center",children:[Object(g.jsx)("img",{src:"/static/img/orange-dyno.webp",className:"w-44 h-28 z-10 -mb-3"}),Object(g.jsx)("div",{className:"bg-gray-700 text-2xl p-5 rounded-lg w-80 sm:w-full",children:Object(g.jsx)("div",{className:"animate-pulse bg-gray-600 rounded-lg h-9 sm:w-52"})})]}),Object(g.jsx)("div",{className:"bg-gray-700 text-3xl py-5 px-7 rounded-lg grid grid-flow-col self-end justify-center",children:Object(g.jsxs)("div",{className:"flex sm:w-44 -ml-2 mr-1.5",children:[t("APY"),": ",Object(g.jsx)("div",{className:"animate-pulse bg-gray-600 rounded-lg h-9 w-36 ml-3 -mr-3"})]})})]}),Object(g.jsxs)("div",{className:"grid sm:grid-flow-col gap-2 px-5 text-center pb-2",children:[Object(g.jsxs)("div",{className:"grid grid-flow-row gap-2 bg-gray-700 py-3 rounded-lg col-span-1 border border-blue-400",children:[Object(g.jsx)("p",{className:"text-4xl",children:"\ud83e\udd11"}),Object(g.jsx)("div",{className:"bg-gray-800 w-32 h-4 animate-pulse m-auto mt-1"}),Object(g.jsx)("div",{className:"bg-gray-800 w-16 h-4 animate-pulse m-auto mt-2 mb-1"})]}),Object(g.jsxs)("div",{className:"grid grid-flow-row gap-2 bg-gray-700 py-3 rounded-lg col-span-1",children:[Object(g.jsx)("p",{className:"text-4xl",children:"\ud83e\ude99"}),Object(g.jsx)("div",{className:"bg-gray-800 w-32 h-4 animate-pulse m-auto mt-1"}),Object(g.jsx)("div",{className:"bg-gray-800 w-16 h-4 animate-pulse m-auto mt-2 mb-1"})]}),Object(g.jsxs)("div",{className:"grid grid-flow-row gap-2 bg-gray-700 py-3 rounded-lg col-span-1",children:[Object(g.jsx)("p",{className:"text-4xl",children:"\ud83d\udcb5"}),Object(g.jsx)("div",{className:"bg-gray-800 w-32 h-4 animate-pulse m-auto mt-1"}),Object(g.jsx)("div",{className:"bg-gray-800 w-16 h-4 animate-pulse m-auto mt-2 mb-1"})]})]}),Object(g.jsxs)("div",{className:"grid sm:grid-flow-col gap-2 px-5 text-center pb-5",children:[Object(g.jsxs)("div",{className:"grid grid-flow-row gap-2 bg-gray-700 py-3 rounded-lg col-span-1",children:[Object(g.jsx)("p",{className:"text-4xl",children:"\ud83d\udcb8"}),Object(g.jsx)("div",{className:"bg-gray-800 w-32 h-4 animate-pulse m-auto mt-1"}),Object(g.jsx)("div",{className:"bg-gray-800 w-16 h-4 animate-pulse m-auto mt-2 mb-1"})]}),Object(g.jsxs)("div",{className:"grid grid-flow-row gap-2 bg-gray-700 py-3 rounded-lg col-span-1",children:[Object(g.jsx)("p",{className:"text-4xl",children:"\ud83d\udcb0"}),Object(g.jsx)("div",{className:"bg-gray-800 w-32 h-4 animate-pulse m-auto mt-1"}),Object(g.jsx)("div",{className:"bg-gray-800 w-16 h-4 animate-pulse m-auto mt-2 mb-1"})]}),Object(g.jsxs)("div",{className:"grid grid-flow-row gap-2 bg-gray-700 py-3 rounded-lg col-span-1",children:[Object(g.jsx)("p",{className:"text-4xl",children:"\ud83e\udd73"}),Object(g.jsx)("div",{className:"bg-gray-800 w-32 h-4 animate-pulse m-auto mt-1"}),Object(g.jsx)("div",{className:"bg-gray-800 w-16 h-4 animate-pulse m-auto mt-2 mb-1"})]})]}),Object(g.jsx)("div",{className:"p-5 -mt-3",children:Object(g.jsx)("h2",{className:"text-2xl font-bold",children:t("Evoluci\xf3n de tus ganancias")})}),Object(g.jsx)("div",{className:"h-52 animate-pulse",children:Object(g.jsxs)("div",{className:"flex space-x-4 items-baseline m-4",children:[Object(g.jsx)("div",{className:"flex-1 h-10 bg-gray-400 rounded"}),Object(g.jsx)("div",{className:"flex-1 h-24 bg-gray-400 rounded"}),Object(g.jsx)("div",{className:"flex-1 h-36 bg-gray-400 rounded"}),Object(g.jsx)("div",{className:"flex-1 h-44 bg-gray-500 rounded"}),Object(g.jsx)("div",{className:"flex-1 h-48 bg-gray-400 rounded"}),Object(g.jsx)("div",{className:"flex-1 h-44 bg-gray-500 rounded"}),Object(g.jsx)("div",{className:"flex-1 h-36 bg-gray-400 rounded"}),Object(g.jsx)("div",{className:"flex-1 h-24 bg-gray-400 rounded"}),Object(g.jsx)("div",{className:"flex-1 h-48 bg-gray-500 rounded"}),Object(g.jsx)("div",{className:"flex-1 h-24 bg-gray-400 rounded"}),Object(g.jsx)("div",{className:"flex-1 h-36 bg-gray-400 rounded"}),Object(g.jsx)("div",{className:"flex-1 h-44 bg-gray-500 rounded"}),Object(g.jsx)("div",{className:"flex-1 h-48 bg-gray-400 rounded"}),Object(g.jsx)("div",{className:"flex-1 h-44 bg-gray-500 rounded"}),Object(g.jsx)("div",{className:"flex-1 h-36 bg-gray-400 rounded"}),Object(g.jsx)("div",{className:"flex-1 h-24 bg-gray-400 rounded"}),Object(g.jsx)("div",{className:"flex-1 h-10 bg-gray-400 rounded"})]})})]}),v&&Object(g.jsxs)(g.Fragment,{children:[Object(g.jsxs)("div",{className:"grid sm:grid-flow-col px-5 pb-5 sm:justify-between text-center gap-1 font-bold",children:[Object(g.jsxs)("div",{className:"grid grid-flow-row justify-items-center",children:[Object(g.jsx)("img",{src:"/static/img/orange-dyno.webp",className:"w-44 h-28 z-10 -mb-3"}),Object(g.jsx)("div",{className:"bg-gray-700 text-3xl p-5 rounded-lg",children:Object(g.jsx)("p",{children:Object(g.jsx)(j.a,{thousandSeparator:p.groupDelimiter,decimalSeparator:p.decimalDelimiter||!1,decimalScale:p.maximumFractionDigits,value:parseFloat(v.totalYield.ustHoldings),suffix:" UST",displayType:"text"})})})]}),Object(g.jsx)("div",{className:"bg-gray-700 text-3xl p-5 rounded-lg self-end",children:Object(g.jsxs)("p",{children:[t("APY"),": ",Object(g.jsx)(j.a,{thousandSeparator:p.groupDelimiter,decimalSeparator:p.decimalDelimiter||!1,decimalScale:p.maximumFractionDigits,value:parseFloat(v.currentRate),suffix:" %",displayType:"text"})]})})]}),Object(g.jsxs)("div",{className:"grid sm:grid-cols-3 gap-2 px-5 text-center pb-2",children:[Object(g.jsxs)("div",{className:"grid grid-flow-row gap-2 bg-gray-700 py-3 rounded-lg col-span-1 border border-blue-400",children:[Object(g.jsx)("p",{className:"text-4xl",children:"\ud83e\udd11"}),Object(g.jsx)("h2",{children:t("Ganancia acumulada desde tu primer dep\xf3sito")}),Object(g.jsx)("span",{className:"m-auto flex rounded-lg px-3 bg-gray-700 items-center w-max text-blue-400 font-bold",children:Object(g.jsx)("p",{children:Object(g.jsx)(j.a,{thousandSeparator:p.groupDelimiter,decimalSeparator:p.decimalDelimiter||!1,decimalScale:p.maximumFractionDigits,value:parseFloat(v.totalYield.yield),suffix:" UST",displayType:"text"})})})]}),Object(g.jsxs)("div",{className:"grid grid-flow-row gap-2 bg-gray-700 py-3 rounded-lg col-span-1",children:[Object(g.jsx)("p",{className:"text-4xl",children:"\ud83e\ude99"}),Object(g.jsx)("h2",{children:t("Ganancia estimada por hora")}),Object(g.jsx)("span",{className:"m-auto flex rounded-lg px-3 bg-gray-700 items-center w-max text-blue-400 font-bold",children:Object(g.jsx)("p",{children:Object(g.jsx)(j.a,{thousandSeparator:p.groupDelimiter,decimalSeparator:p.decimalDelimiter||!1,decimalScale:p.maximumFractionDigits,value:parseFloat(v.estimatedYield.perHour),suffix:" UST",displayType:"text"})})})]}),Object(g.jsxs)("div",{className:"grid grid-flow-row gap-2 bg-gray-700 py-3 rounded-lg col-span-1",children:[Object(g.jsx)("p",{className:"text-4xl",children:"\ud83d\udcb5"}),Object(g.jsx)("h2",{children:t("Ganancia estimada por d\xeda")}),Object(g.jsx)("span",{className:"m-auto flex rounded-lg px-3 bg-gray-700 items-center w-max text-blue-400 font-bold",children:Object(g.jsx)("p",{children:Object(g.jsx)(j.a,{thousandSeparator:p.groupDelimiter,decimalSeparator:p.decimalDelimiter||!1,decimalScale:p.maximumFractionDigits,value:parseFloat(v.estimatedYield.perDay),suffix:" UST",displayType:"text"})})})]})]}),Object(g.jsxs)("div",{className:"grid sm:grid-cols-3 gap-2 px-5 text-center pb-2",children:[Object(g.jsxs)("div",{className:"grid grid-flow-row gap-2 bg-gray-700 py-3 rounded-lg col-span-1",children:[Object(g.jsx)("p",{className:"text-4xl",children:"\ud83d\udcb8"}),Object(g.jsx)("h2",{children:t("Ganancia estimada por semana")}),Object(g.jsx)("span",{className:"m-auto flex rounded-lg px-3 bg-gray-700 items-center w-max text-blue-400 font-bold",children:Object(g.jsx)("p",{children:Object(g.jsx)(j.a,{thousandSeparator:p.groupDelimiter,decimalSeparator:p.decimalDelimiter||!1,decimalScale:p.maximumFractionDigits,value:parseFloat(v.estimatedYield.perWeek),suffix:" UST",displayType:"text"})})})]}),Object(g.jsxs)("div",{className:"grid grid-flow-row gap-2 bg-gray-700 py-3 rounded-lg col-span-1",children:[Object(g.jsx)("p",{className:"text-4xl",children:"\ud83d\udcb0"}),Object(g.jsx)("h2",{children:t("Ganancia estimada por mes")}),Object(g.jsx)("span",{className:"m-auto flex rounded-lg px-3 bg-gray-700 items-center w-max text-blue-400 font-bold",children:Object(g.jsx)("p",{children:Object(g.jsx)(j.a,{thousandSeparator:p.groupDelimiter,decimalSeparator:p.decimalDelimiter||!1,decimalScale:p.maximumFractionDigits,value:parseFloat(v.estimatedYield.perMonth),suffix:" UST",displayType:"text"})})})]}),Object(g.jsxs)("div",{className:"grid grid-flow-row gap-2 bg-gray-700 py-3 rounded-lg col-span-1",children:[Object(g.jsx)("p",{className:"text-4xl",children:"\ud83e\udd73"}),Object(g.jsx)("h2",{children:t("Ganancia estimada por a\xf1o")}),Object(g.jsx)("span",{className:"m-auto flex rounded-lg px-3 bg-gray-700 items-center w-max text-blue-400 font-bold",children:Object(g.jsx)("p",{children:Object(g.jsx)(j.a,{thousandSeparator:p.groupDelimiter,decimalSeparator:p.decimalDelimiter||!1,decimalScale:p.maximumFractionDigits,value:parseFloat(v.estimatedYield.perYear),suffix:" UST",displayType:"text"})})})]})]}),v.historicalData&&v.historicalData.length>0&&Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("div",{className:"p-5",children:Object(g.jsx)("h2",{className:"text-2xl font-bold",children:t("Evoluci\xf3n de tus ganancias")})}),Object(g.jsx)("div",{className:"h-64 p-5",children:Object(g.jsx)(o.a,{type:"line",options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1}}},data:{labels:v.historicalData.slice(0).reverse().map((function(e){return u(e.time).format("DD-MM-YYYY").toString()})),datasets:[{type:"line",label:t("Ganancia acumulada"),data:v.historicalData.slice(0).reverse().map((function(e){return e.yield})),borderWidth:2,fill:!1,borderColor:"#60A5FA"}]}})})]})]})]})}}}]);