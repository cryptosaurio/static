(this["webpackJsonpfront-in-react"]=this["webpackJsonpfront-in-react"]||[]).push([[37],{112:function(n,e,c){"use strict";c.r(e),c.d(e,"default",(function(){return o}));c(0);var a=c(163),t=c(2);function o(n){var e=n.match;return Object(t.jsxs)(t.Fragment,{children:[Object(a.a)(e.params.coin).name," (",Object(a.a)(e.params.coin).code,")"]})}},130:function(n,e,c){"use strict";function a(n,e,c){return e in n?Object.defineProperty(n,e,{value:c,enumerable:!0,configurable:!0,writable:!0}):n[e]=c,n}c.d(e,"a",(function(){return a}))},132:function(n,e,c){"use strict";c.d(e,"a",(function(){return o}));var a=c(130);function t(n,e){var c=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),c.push.apply(c,a)}return c}function o(n){for(var e=1;e<arguments.length;e++){var c=null!=arguments[e]?arguments[e]:{};e%2?t(Object(c),!0).forEach((function(e){Object(a.a)(n,e,c[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(c)):t(Object(c)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(c,e))}))}return n}},163:function(n,e,c){"use strict";c.d(e,"a",(function(){return o}));var a=c(132),t={BTC:{name:"Bitcoin",blockchain:["BITCOIN","LIGHTNING_NETWORK","BSC"]},ETH:{name:"Ethereum",blockchain:["ETHEREUM","BSC"]},DAI:{name:"DAI",blockchain:["ETHEREUM","BSC"]},USDC:{name:"USDC",blockchain:["ETHEREUM","BSC"]},USDT:{name:"USDT",blockchain:["ETHEREUM","BSC","TRON"]},UST:{name:"UST",blockchain:["TERRA"]},BNB:{name:"Binance Coin",blockchain:["BSC"]},BUSD:{name:"Binance USD",blockchain:["BSC"]},MATIC:{name:"Matic",blockchain:["POLYGON","BSC"]},UNI:{name:"UNI",blockchain:["ETHEREUM","BSC"]},CAKE:{name:"Cake",blockchain:["BSC"]},LUNA:{name:"Luna",blockchain:["TERRA"],icon:"https://www.cryptosaurio.com/static/img/coins/luna2.webp"},ADA:{name:"Ada",blockchain:["CARDANO","BSC"]},LTC:{name:"Litecoin",blockchain:["LITECOIN"]},SOL:{name:"Sol",blockchain:["SOLANA","BSC"]},DOT:{name:"Polkadot",blockchain:["POLKADOT"]},LINK:{name:"Chainlink",blockchain:["ETHEREUM"]},XRP:{name:"XRP",blockchain:["RIPPLE"]},AXS:{name:"Axie Infinity",blockchain:["ETHEREUM"]},SLP:{name:"Smooth Love Potion",blockchain:["ETHEREUM"]},BCH:{name:"Bitcoin Cash",blockchain:["BITCOINCASH"]},DOGE:{name:"Dogecoin",blockchain:["DOGECOIN"]},NUARS:{name:"nuARS",blockchain:["BSC"],icon:"https://www.cryptosaurio.com/static/img/coins/numars.webp"},AAVE:{name:"AAVE",blockchain:["ETHEREUM"]},BAT:{name:"Basic Attention Token",blockchain:["ETHEREUM"]},CHZ:{name:"Chiliz",blockchain:["CHZ"],icon:"https://svgarchive.com/wp-content/uploads/chiliz-chz-coin.svg"},MANA:{name:"Decentraland",blockchain:["ETHEREUM"]},UBI:{name:"Universal Basic Income",blockchain:["ETHEREUM"],icon:"https://blog.kleros.io/content/images/2021/03/image-3.png"},AVAX:{name:"Avalanche",blockchain:["AVALANCHE"]}};function o(n){var e,c,o="?";if(n&&n.length>2)if(Object.keys(t).indexOf(n.toUpperCase())>-1)e=t[n.toUpperCase()],o=n.toUpperCase();else{var i=n.toLowerCase().split("-").join(" "),r=Object.keys(t).filter((function(n){return t[n].name.toUpperCase()===i.toUpperCase()}));r.length>0&&Object.keys(t).indexOf(r[0].toUpperCase())>-1&&(e=t[r[0]],o=r[0].toUpperCase())}return e?Object(a.a)(Object(a.a)(Object(a.a)({},{code:o}),{icon:"https://images.weserv.nl/?url=farm.army/token/".concat(null===(c=o)||void 0===c?void 0:c.toLowerCase(),".webp")}),e):Object(a.a)(Object(a.a)(Object(a.a)({},{code:o}),{icon:"https://cdn.worldvectorlogo.com/logos/dinosaurio.svg"}),{name:"?",blockchain:["?"]})}}}]);