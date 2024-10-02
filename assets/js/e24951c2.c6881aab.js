"use strict";(self.webpackChunkyun=self.webpackChunkyun||[]).push([[5510],{4137:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),d=a,m=p["".concat(c,".").concat(d)]||p[d]||f[d]||o;return n?r.createElement(m,i(i({ref:t},l),{},{components:n})):r.createElement(m,i({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},564:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var r=n(7462),a=(n(7294),n(4137));const o={title:"Five ways to declare a function in JavaScript",last_update:{date:"07/09/2023",author:"Yun Ji"}},i=void 0,s={unversionedId:"java-script/ways-to-declare-a-function",id:"java-script/ways-to-declare-a-function",title:"Five ways to declare a function in JavaScript",description:"JavaScript treats functions as first-class objects, meaning you could use functions as objects:",source:"@site/docs/java-script/5-ways-to-declare-a-function.md",sourceDirName:"java-script",slug:"/java-script/ways-to-declare-a-function",permalink:"/docs/java-script/ways-to-declare-a-function",draft:!1,editUrl:"https://github.com/actuallyyun/blog/docs/java-script/5-ways-to-declare-a-function.md",tags:[],version:"current",lastUpdatedBy:"Yun Ji",lastUpdatedAt:1688860800,formattedLastUpdatedAt:"Jul 9, 2023",sidebarPosition:5,frontMatter:{title:"Five ways to declare a function in JavaScript",last_update:{date:"07/09/2023",author:"Yun Ji"}},sidebar:"tutorialSidebar",previous:{title:"JavaScript",permalink:"/docs/category/javascript"},next:{title:"What the f**k is this in JavaScript?",permalink:"/docs/java-script/the-notorious-this-variable"}},c={},u=[{value:"1. Use named function",id:"1-use-named-function",level:3},{value:"2. Assign function to a variable(function expression)",id:"2-assign-function-to-a-variablefunction-expression",level:3},{value:"3. Use arrow function expression",id:"3-use-arrow-function-expression",level:3},{value:"4.Use shorthand arrow function",id:"4use-shorthand-arrow-function",level:3},{value:"5.Use function constructer",id:"5use-function-constructer",level:3}],l={toc:u},p="wrapper";function f(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"JavaScript treats functions as first-class objects, meaning you could use functions as objects:\nassign them to variables, pass them to functions,return them from funvtions, assgin them to objects..."),(0,a.kt)("p",null,"There are five ways to declare a JavaScripy function:"),(0,a.kt)("h3",{id:"1-use-named-function"},"1. Use named function"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"function greet(name){\n    return 'Hello'+name\n}\n")),(0,a.kt)("h3",{id:"2-assign-function-to-a-variablefunction-expression"},"2. Assign function to a variable(function expression)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"const greet2= function(name){\n    return 'Hello'+name\n}\n")),(0,a.kt)("h3",{id:"3-use-arrow-function-expression"},"3. Use arrow function expression"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"const greet3=(name)=>{\n    return 'Hello'+name\n}\n")),(0,a.kt)("h3",{id:"4use-shorthand-arrow-function"},"4.Use shorthand arrow function"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"const greet4=(name)=>'Hello'+name\n")),(0,a.kt)("p",null,"JS people seem to be obessed with one line codes, and shorthand arror function is a good way to do it."),(0,a.kt)("h3",{id:"5use-function-constructer"},"5.Use function constructer"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"const greet5=new Function('name,'return \"hello\"+name)\n")),(0,a.kt)("p",null,"This is an perfect example that function is treated as an object in JS. Though I don't remember seeing this syntax in real code."),(0,a.kt)("p",null,"Apparently this is also an unsafe way to declare a function in the eyes of TypeScript, so don't use it."))}f.isMDXComponent=!0}}]);