(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{108:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return s}));var r=n(3),o=(n(0),n(127));const a={id:"math",title:"Math"},i={unversionedId:"algorithms/math",id:"algorithms/math",isDocsHomePage:!1,title:"Math",description:"Notes",source:"@site/docs/algorithms/math.md",slug:"/algorithms/math",permalink:"/goldev_tech-interview/docs/algorithms/math",editUrl:"https://github.com/hwan02/goldev_tech-interview/edit/master/website/docs/algorithms/math.md",version:"current",sidebar:"docs",previous:{title:"Linked List",permalink:"/goldev_tech-interview/docs/algorithms/linked-list"},next:{title:"Matrix",permalink:"/goldev_tech-interview/docs/algorithms/matrix"}},l=[{value:"Notes",id:"notes",children:[]},{value:"Recommended LeetCode questions",id:"recommended-leetcode-questions",children:[]}],c={toc:l};function s({components:e,...t}){return Object(o.b)("wrapper",Object(r.a)({},c,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"notes"},"Notes"),Object(o.b)("p",null,"If code involves division or modulo, remember to check for division or modulo by 0 case."),Object(o.b)("p",null,'When a question involves "a multiple of a number", perhaps modulo might be useful.'),Object(o.b)("p",null,"Check for and handle overflow/underflow if you are using a typed language like Java and C++. At the very least, mention that overflow/underflow is possible and ask whether you need to handle it."),Object(o.b)("p",null,"Consider negative numbers and floating point numbers. This may sound obvious, but under interview pressure, many obvious cases go unnoticed."),Object(o.b)("p",null,"If the question asks to implement an operator such as power, squareroot or division and want it to be faster than O(n), binary search is usually the approach to go."),Object(o.b)("h4",{id:"some-common-formulas"},"Some common formulas:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Sum of 1 to N = (n+1) ","*"," n/2"),Object(o.b)("li",{parentName:"ul"},"Sum of GP = 2",Object(o.b)("sup",null,"0")," + 2",Object(o.b)("sup",null,"1")," + 2",Object(o.b)("sup",null,"2")," + 2",Object(o.b)("sup",null,"3")," + ... 2",Object(o.b)("sup",null,"n")," = 2",Object(o.b)("sup",null,"n+1")," - 1"),Object(o.b)("li",{parentName:"ul"},"Permutations of N = N! / (N-K)!"),Object(o.b)("li",{parentName:"ul"},"Combinations of N = N! / (K! ","*"," (N-K)!)")),Object(o.b)("h2",{id:"recommended-leetcode-questions"},"Recommended LeetCode questions"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://leetcode.com/problems/powx-n/"},"Pow(x, n)")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://leetcode.com/problems/sqrtx/"},"Sqrt(x)")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://leetcode.com/problems/integer-to-english-words/"},"Integer to English Words"))))}s.isMDXComponent=!0},127:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),u=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=u(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=u(n),b=r,d=m["".concat(i,".").concat(b)]||m[b]||p[b]||a;return n?o.a.createElement(d,l(l({ref:t},s),{},{components:n})):o.a.createElement(d,l({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=b;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);