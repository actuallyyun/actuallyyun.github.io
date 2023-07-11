"use strict";(self.webpackChunkyun=self.webpackChunkyun||[]).push([[9927],{4137:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(n),f=r,m=u["".concat(l,".").concat(f)]||u[f]||d[f]||i;return n?a.createElement(m,o(o({ref:t},p),{},{components:n})):a.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:r,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},3788:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var a=n(7462),r=(n(7294),n(4137));const i={title:"What the f**k is this in JavaScript?",last_update:{date:"07/09/2023",author:"Yun Ji"}},o=void 0,c={unversionedId:"java-script/the-notorious-this-variable",id:"java-script/the-notorious-this-variable",title:"What the f**k is this in JavaScript?",description:"Do you know that this is defined for every function in JS?",source:"@site/docs/java-script/the-notorious-this-variable.md",sourceDirName:"java-script",slug:"/java-script/the-notorious-this-variable",permalink:"/docs/java-script/the-notorious-this-variable",draft:!1,editUrl:"https://github.com/actuallyyun/blog/docs/java-script/the-notorious-this-variable.md",tags:[],version:"current",lastUpdatedBy:"Yun Ji",lastUpdatedAt:168885e4,formattedLastUpdatedAt:"Jul 8, 2023",frontMatter:{title:"What the f**k is this in JavaScript?",last_update:{date:"07/09/2023",author:"Yun Ji"}},sidebar:"tutorialSidebar",previous:{title:"Five ways to declare a function in JavaScript",permalink:"/docs/java-script/ways-to-declare-a-function"},next:{title:"Linux/CLI",permalink:"/docs/category/linuxcli"}},l={},s=[],p={toc:s},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Do you know that ",(0,r.kt)("inlineCode",{parentName:"p"},"this")," is defined for every function in JS?"),(0,r.kt)("p",null,"And, the value of ",(0,r.kt)("inlineCode",{parentName:"p"},"this")," changes depending on the way you call a function, not the way you declare it."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"const cat = {\n  name: 'Nancy',\n  getName() {\n    return this.name\n  }\n}\n\nconsole.log(cat.getName()) // Nancy\n\n//this: { name: 'Nancy', trick: [Function: trick] }\n\nconst getName = cat.getName\n\nconsole.log(getName())\n// undefinied\n\n// this: Object [global] \n")),(0,r.kt)("p",null,"We have a ",(0,r.kt)("inlineCode",{parentName:"p"},"cat")," object/function with the property ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," of Nancy, and a function to get the name.\nWhhen we call ",(0,r.kt)("inlineCode",{parentName:"p"},"cat.getName()"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"this")," is evaluated as the object as declared and ",(0,r.kt)("inlineCode",{parentName:"p"},"getName()")," returns desired result."),(0,r.kt)("p",null,"However, if we assign ",(0,r.kt)("inlineCode",{parentName:"p"},"getName")," to a function and call it, it returns ",(0,r.kt)("inlineCode",{parentName:"p"},"undefinied"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"this")," is evaluated as ",(0,r.kt)("inlineCode",{parentName:"p"},"Object [global] "),"."),(0,r.kt)("p",null,"The point it, ",(0,r.kt)("inlineCode",{parentName:"p"},"this")," is not consistent and reliable in JS, so be careful when you use it in your function."))}d.isMDXComponent=!0}}]);