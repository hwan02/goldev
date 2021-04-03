(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{107:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return o})),r.d(t,"toc",(function(){return u})),r.d(t,"default",(function(){return s}));var n=r(3),a=(r(0),r(127));const i={title:"Getting Started",slug:"/"},o={unversionedId:"tutorial/getting-started",id:"tutorial/getting-started",isDocsHomePage:!1,title:"Getting Started",description:"Step 1: Generate a new Docusaurus site",source:"@site/docs/tutorial/getting-started.md",slug:"/",permalink:"/goldev_tech-interview/docs/",editUrl:"https://github.com/hwan02/goldev_tech-interview/edit/master/website/docs/tutorial/getting-started.md",version:"current",sidebar:"docs",previous:{title:"Trie",permalink:"/goldev_tech-interview/docs/algorithms/trie"},next:{title:"Create a Page",permalink:"/goldev_tech-interview/docs/tutorial/create-a-page"}},u=[{value:"Step 1: Generate a new Docusaurus site",id:"step-1-generate-a-new-docusaurus-site",children:[]},{value:"Step 2: Start your Docusaurus site",id:"step-2-start-your-docusaurus-site",children:[]},{value:"That&#39;s it!",id:"thats-it",children:[]}],c={toc:u};function s({components:e,...t}){return Object(a.b)("wrapper",Object(n.a)({},c,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"step-1-generate-a-new-docusaurus-site"},"Step 1: Generate a new Docusaurus site"),Object(a.b)("p",null,"If you haven't already, generate a new Docusaurus site using the classic template:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-shell"},"npx @docusaurus/init@latest init my-website classic\n")),Object(a.b)("h2",{id:"step-2-start-your-docusaurus-site"},"Step 2: Start your Docusaurus site"),Object(a.b)("p",null,"Run the development server in the newly created ",Object(a.b)("inlineCode",{parentName:"p"},"my-website")," folder:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-shell"},"cd my-website\n\nnpx docusaurus start\n")),Object(a.b)("p",null,"Open ",Object(a.b)("inlineCode",{parentName:"p"},"docs/getting-started.md")," and edit some lines. The site reloads automatically and display your changes."),Object(a.b)("h2",{id:"thats-it"},"That's it!"),Object(a.b)("p",null,"Congratulations! You've successfully run and modified your Docusaurus project."))}s.isMDXComponent=!0},127:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),l=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},p=function(e){var t=l(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=l(r),b=n,f=p["".concat(o,".").concat(b)]||p[b]||d[b]||i;return r?a.a.createElement(f,u(u({ref:t},s),{},{components:r})):a.a.createElement(f,u({ref:t},s))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=b;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:n,o[1]=u;for(var s=2;s<i;s++)o[s]=r[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);