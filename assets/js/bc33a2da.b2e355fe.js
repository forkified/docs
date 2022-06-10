"use strict";(self.webpackChunkhtdocs=self.webpackChunkhtdocs||[]).push([[284],{3905:function(e,t,i){i.d(t,{Zo:function(){return u},kt:function(){return m}});var o=i(7294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,o)}return i}function s(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function a(e,t){if(null==e)return{};var i,o,n=function(e,t){if(null==e)return{};var i,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)i=r[o],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)i=r[o],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var c=o.createContext({}),l=function(e){var t=o.useContext(c),i=t;return e&&(i="function"==typeof e?e(t):s(s({},t),e)),i},u=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var i=e.components,n=e.mdxType,r=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=l(i),m=n,f=p["".concat(c,".").concat(m)]||p[m]||h[m]||r;return i?o.createElement(f,s(s({ref:t},u),{},{components:i})):o.createElement(f,s({ref:t},u))}));function m(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=i.length,s=new Array(r);s[0]=p;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:n,s[1]=a;for(var l=2;l<r;l++)s[l]=i[l];return o.createElement.apply(null,s)}return o.createElement.apply(null,i)}p.displayName="MDXCreateElement"},3650:function(e,t,i){i.r(t),i.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return a},metadata:function(){return l},toc:function(){return h}});var o=i(7462),n=i(3366),r=(i(7294),i(3905)),s=["components"],a={description:"One of the limits PleasantFree imposes is the CPU limit. This article explains what the CPU limit means and how you can control it."},c="What\u2019s The CPU Limit",l={unversionedId:"fair-usage-limits/cpu-limit",id:"fair-usage-limits/cpu-limit",title:"What\u2019s The CPU Limit",description:"One of the limits PleasantFree imposes is the CPU limit. This article explains what the CPU limit means and how you can control it.",source:"@site/docs/fair-usage-limits/cpu-limit.md",sourceDirName:"fair-usage-limits",slug:"/fair-usage-limits/cpu-limit",permalink:"/fair-usage-limits/cpu-limit",draft:!1,tags:[],version:"current",frontMatter:{description:"One of the limits PleasantFree imposes is the CPU limit. This article explains what the CPU limit means and how you can control it."},sidebar:"tutorialSidebar",previous:{title:"What's A BotNet Attack",permalink:"/fair-usage-limits/botnet-attack"},next:{title:"What's The Hit Limit",permalink:"/fair-usage-limits/hit-limit"}},u={},h=[{value:"What Is CPU Consumption?",id:"what-is-cpu-consumption",level:2},{value:"What Are Some Causes to Reaching the CPU Limit?",id:"what-are-some-causes-to-reaching-the-cpu-limit",level:2},{value:"How Do I Decrease This Usage?",id:"how-do-i-decrease-this-usage",level:2},{value:"How Can I Increase This Limit?",id:"how-can-i-increase-this-limit",level:2}],p={toc:h};function m(e){var t=e.components,i=(0,n.Z)(e,s);return(0,r.kt)("wrapper",(0,o.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"whats-the-cpu-limit"},"What\u2019s The CPU Limit"),(0,r.kt)("p",null,"One of the limits PleasantFree imposes is the CPU limit. This article explains what the CPU limit means and how you can control it. This article may contain affiliate links to external websites."),(0,r.kt)("h2",{id:"what-is-cpu-consumption"},"What Is CPU Consumption?"),(0,r.kt)("p",null,"The machine you\u2019re reading this on has a CPU (be it a PC, laptop, tablet, phone, or anything else). This processor, also known as the Central Processing Unit (CPU), does all the calculations for all the programs running on your computer."),(0,r.kt)("p",null,"If these programs consume a lot of processor power, your computer will probably slow down to the point of being idle."),(0,r.kt)("p",null,"A processor is also present on the server hosting your website. These processors are responsible for a variety of tasks, but most of their time is spent running the processes that execute website (PHP) scripts."),(0,r.kt)("p",null,"And, like your own computer\u2019s processor, if the server\u2019s applications consume a lot of processing power, the server will slow down to the point of being unusable."),(0,r.kt)("p",null,"Users want their websites to load quickly, so we don\u2019t want our servers to be slow because their processors are overworked."),(0,r.kt)("p",null,"To avoid this, each hosting account has a limit on the amount of CPU consumption. When this limit is reached, the hosting account is going to be bogged down first. If it continues to consume too much CPU power, the account will be suspended for 24 days to prevent excessive CPU usage."),(0,r.kt)("h2",{id:"what-are-some-causes-to-reaching-the-cpu-limit"},"What Are Some Causes to Reaching the CPU Limit?"),(0,r.kt)("p",null,"There are two major factors that affect the amount of CPU usage your account can receive:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The more code that is executed and the more difficult the task it has to complete, the more CPU power is consumed."),(0,r.kt)("li",{parentName:"ul"},"The more visitors your website gets, the more PHP code must be executed to render their pages, using more CPU power.")),(0,r.kt)("p",null,"You should check your account\u2019s daily hit and login process consumption to know how much each of these factors affects your consumption."),(0,r.kt)("h2",{id:"how-do-i-decrease-this-usage"},"How Do I Decrease This Usage?"),(0,r.kt)("p",null,"There are a few things you can do to reduce your CPU consumption if you keep these two factors in mind."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Scripts and plugins that are no longer needed should be removed. The less code that must be executed, the less CPU will be required."),(0,r.kt)("li",{parentName:"ul"},"Include caching in your website. By duplicating the results of previous requests, caching data on your website can reduce code execution."),(0,r.kt)("li",{parentName:"ul"},"Scripts and websites are being divided into different accounts. If you have multiple domains on the same account, you can split them across different accounts to distribute the server load.")),(0,r.kt)("h2",{id:"how-can-i-increase-this-limit"},"How Can I Increase This Limit?"),(0,r.kt)("p",null,"Free hosting is set to be equal for everyone, so you are no exception to this limitation. You can upgrade to ",(0,r.kt)("a",{parentName:"p",href:"https://pleasantfree.com/go/ifastnet"},"premium hosting (pleasantfree.com)")," which comes with fewer limits."))}m.isMDXComponent=!0}}]);