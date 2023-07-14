"use strict";(self.webpackChunkyun=self.webpackChunkyun||[]).push([[7214],{4137:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>y});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=u(n),d=a,y=c["".concat(p,".").concat(d)]||c[d]||m[d]||o;return n?r.createElement(y,i(i({ref:t},s),{},{components:n})):r.createElement(y,i({ref:t},s))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7990:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=n(7462),a=(n(7294),n(4137));const o={title:"Argument vs. Parameter, what is the difference?",last_update:{date:"07/09/2023",author:"Yun Ji"}},i=void 0,l={unversionedId:"basics/argument-vs-parameter",id:"basics/argument-vs-parameter",title:"Argument vs. Parameter, what is the difference?",description:"People (including me) often use them interchangeablly.",source:"@site/docs/basics/argument-vs-parameter.md",sourceDirName:"basics",slug:"/basics/argument-vs-parameter",permalink:"/docs/basics/argument-vs-parameter",draft:!1,editUrl:"https://github.com/actuallyyun/blog/docs/basics/argument-vs-parameter.md",tags:[],version:"current",lastUpdatedBy:"Yun Ji",lastUpdatedAt:1688860800,formattedLastUpdatedAt:"Jul 9, 2023",frontMatter:{title:"Argument vs. Parameter, what is the difference?",last_update:{date:"07/09/2023",author:"Yun Ji"}},sidebar:"tutorialSidebar",previous:{title:"Coding Basics",permalink:"/docs/category/coding-basics"},next:{title:"TypeScript",permalink:"/docs/category/typescript"}},p={},u=[],s={toc:u},c="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"People (including me) often use them interchangeablly."),(0,a.kt)("p",null,"However, there is a difference between these two."),(0,a.kt)("p",null,"A parameter is a piece of data that a function needs to run. It is often declared while declaring a function."),(0,a.kt)("p",null,"For example,"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"const alwaysSunny=(day)=>{\n    return `${day}'s weather is sunny!`\n}\n")),(0,a.kt)("p",null,"Here ",(0,a.kt)("inlineCode",{parentName:"p"},"day")," is the parameter of the function ",(0,a.kt)("inlineCode",{parentName:"p"},"alwaysSunny"),"."),(0,a.kt)("p",null,"An arugument, on the other hand, is the piece of data you pass to a function when you call it. So it is the actual data."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"alwaysSunny('Wednesday')")),(0,a.kt)("p",null,"Here the string ",(0,a.kt)("inlineCode",{parentName:"p"},"Wednesday")," is the argument."),(0,a.kt)("p",null,"In JavaScript and TypeScript, you could mark a parameter as Optional by using ",(0,a.kt)("inlineCode",{parentName:"p"},"?"),"."),(0,a.kt)("p",null,"Let's modify our ",(0,a.kt)("inlineCode",{parentName:"p"},"alwaysSunny")," function:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"const alwaysSunny=(day:string,location?:string)=>{\n    \n    return `${day}'s weather in ${location||'Barcelona'} is sunny!`\n}\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"location")," is optional parameter, if not provided, the function will fall back to the default value 'Barcelona'."),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"In TypeScript, optional parameter needs to be at the end of your parameter list.")),(0,a.kt)("p",null,"One cool and very useful feature is the ",(0,a.kt)("strong",{parentName:"p"},"rest parameter"),"."),(0,a.kt)("p",null,"Imagine you don't know how many arguments are going to be passed to a function, you could potentially save all arguments to an array and then pass the array. But there's a better way to do it."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"const sum(...numbers)=>{\n    return numbers.reduce((total,n)=>total+n,0)\n}\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"sum() // zero parameter returns 0")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"sum(1)  // returns 1")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"sum(1,2,3) //returns 6")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"To make it type safe, you could simplly annotate the parameter type ",(0,a.kt)("inlineCode",{parentName:"p"},"...numbers:numbers[]"))))}m.isMDXComponent=!0}}]);