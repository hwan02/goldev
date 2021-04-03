(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{127:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(r),b=n,d=u["".concat(i,".").concat(b)]||u[b]||m[b]||o;return r?a.a.createElement(d,l(l({ref:t},s),{},{components:r})):a.a.createElement(d,l({ref:t},s))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=b;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},87:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return s}));var n=r(3),a=(r(0),r(127));const o={id:"interval",title:"Interval"},i={unversionedId:"algorithms/interval",id:"algorithms/interval",isDocsHomePage:!1,title:"Interval",description:"Notes",source:"@site/docs/algorithms/interval.md",slug:"/algorithms/interval",permalink:"/goldev_tech-interview/docs/algorithms/interval",editUrl:"https://github.com/hwan02/goldev_tech-interview/edit/master/website/docs/algorithms/interval.md",version:"current",sidebar:"docs",previous:{title:"Heap",permalink:"/goldev_tech-interview/docs/algorithms/heap"},next:{title:"Linked List",permalink:"/goldev_tech-interview/docs/algorithms/linked-list"}},l=[{value:"Notes",id:"notes",children:[]},{value:"Corner cases",id:"corner-cases",children:[]},{value:"Recommended LeetCode questions",id:"recommended-leetcode-questions",children:[]}],c={toc:l};function s({components:e,...t}){return Object(a.b)("wrapper",Object(n.a)({},c,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"notes"},"Notes"),Object(a.b)("p",null,"Interval questions are questions where you are given an array of two-element arrays (an interval) and the two values represent a start and an end value. Interval questions are considered part of the array family but they involve some common techniques hence they are extracted out to this special section of their own."),Object(a.b)("p",null,"An example interval array: ",Object(a.b)("inlineCode",{parentName:"p"},"[[1, 2], [4, 7]]"),"."),Object(a.b)("p",null,"Interval questions can be tricky to those who have not tried them before because of the sheer number of cases to consider when they overlap."),Object(a.b)("p",null,"Do clarify with the interviewer whether ",Object(a.b)("inlineCode",{parentName:"p"},"[1, 2]")," and ",Object(a.b)("inlineCode",{parentName:"p"},"[2, 3]")," are considered overlapping intervals as it affects how you will write your equality checks."),Object(a.b)("p",null,"A common routine for interval questions is to sort the array of intervals by each interval's starting value."),Object(a.b)("p",null,"Be familiar with writing code to check if two intervals overlap and merging two overlapping intervals:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-py"},"def is_overlap(a, b):\n  return a[0] < b[1] and b[0] < a[1]\n\ndef merge_overlapping_intervals(a, b):\n  return [min(a[0], b[0]), max(a[1], b[1])]\n")),Object(a.b)("h2",{id:"corner-cases"},"Corner cases"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Single interval"),Object(a.b)("li",{parentName:"ul"},"Non-overlapping intervals"),Object(a.b)("li",{parentName:"ul"},"An interval totally consumed within another interval"),Object(a.b)("li",{parentName:"ul"},"Duplicate intervals")),Object(a.b)("h2",{id:"recommended-leetcode-questions"},"Recommended LeetCode questions"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://leetcode.com/problems/insert-interval/"},"Insert Interval")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://leetcode.com/problems/merge-intervals/"},"Merge Intervals")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://leetcode.com/problems/non-overlapping-intervals/"},"Non-overlapping Intervals")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://leetcode.com/problems/meeting-rooms/"},"Meeting Rooms (LeetCode Premium)")," and ",Object(a.b)("a",{parentName:"li",href:"https://leetcode.com/problems/meeting-rooms-ii/"},"Meeting Rooms II (LeetCode Premium)"))))}s.isMDXComponent=!0}}]);