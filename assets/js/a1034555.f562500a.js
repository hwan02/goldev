(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{101:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return a})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return s}));var n=r(3),i=(r(0),r(127));const o={id:"trie",title:"Trie"},a={unversionedId:"algorithms/trie",id:"algorithms/trie",isDocsHomePage:!1,title:"Trie",description:"Study links",source:"@site/docs/algorithms/trie.md",slug:"/algorithms/trie",permalink:"/goldev_tech-interview/docs/algorithms/trie",editUrl:"https://github.com/hwan02/goldev_tech-interview/edit/master/website/docs/algorithms/trie.md",version:"current",sidebar:"docs",previous:{title:"Tree",permalink:"/goldev_tech-interview/docs/algorithms/tree"},next:{title:"Getting Started",permalink:"/goldev_tech-interview/docs/"}},c=[{value:"Study links",id:"study-links",children:[]},{value:"Notes",id:"notes",children:[]},{value:"Recommended LeetCode questions",id:"recommended-leetcode-questions",children:[]}],l={toc:c};function s({components:e,...t}){return Object(i.b)("wrapper",Object(n.a)({},l,t,{components:e,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"study-links"},"Study links"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://medium.com/basecs/trying-to-understand-tries-3ec6bede0014"},"Trying to Understand Tries")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://leetcode.com/articles/implement-trie-prefix-tree/"},"Implement Trie (Prefix Tree)"))),Object(i.b)("h2",{id:"notes"},"Notes"),Object(i.b)("p",null,"Tries are special trees (prefix trees) that make searching and storing strings more efficient. Tries have many practical applications, such as conducting searches and providing autocomplete. It is helpful to know these common applications so that you can easily identify when a problem can be efficiently solved using a trie."),Object(i.b)("p",null,"Sometimes preprocessing a dictionary of words (given in a list) into a trie, will improve the efficiency of searching for a word of length k, among n words. Searching becomes O(k) instead of O(n)."),Object(i.b)("p",null,"Be familiar with implementing, from scratch, a ",Object(i.b)("inlineCode",{parentName:"p"},"Trie")," class and its ",Object(i.b)("inlineCode",{parentName:"p"},"add"),", ",Object(i.b)("inlineCode",{parentName:"p"},"remove")," and ",Object(i.b)("inlineCode",{parentName:"p"},"search")," methods."),Object(i.b)("h2",{id:"recommended-leetcode-questions"},"Recommended LeetCode questions"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://leetcode.com/problems/implement-trie-prefix-tree"},"Implement Trie (Prefix Tree)")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://leetcode.com/problems/add-and-search-word-data-structure-design"},"Add and Search Word")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://leetcode.com/problems/word-search-ii/"},"Word Search II"))))}s.isMDXComponent=!0},127:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return b}));var n=r(0),i=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=i.a.createContext({}),d=function(e){var t=i.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=d(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=i.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,a=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=d(r),u=n,b=p["".concat(a,".").concat(u)]||p[u]||m[u]||o;return r?i.a.createElement(b,c(c({ref:t},s),{},{components:r})):i.a.createElement(b,c({ref:t},s))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,a=new Array(o);a[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,a[1]=c;for(var s=2;s<o;s++)a[s]=r[s];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"}}]);