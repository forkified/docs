"use strict";(self.webpackChunkhtdocs=self.webpackChunkhtdocs||[]).push([[108],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),y=l(n),m=a,f=y["".concat(s,".").concat(m)]||y[m]||p[m]||o;return n?r.createElement(f,c(c({ref:t},u),{},{components:n})):r.createElement(f,c({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=y;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var l=2;l<o;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},3712:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return p}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),c=["components"],i={},s="Connect To MySQL Externally",l={unversionedId:"mysql-databases/external-mysql-connect",id:"mysql-databases/external-mysql-connect",title:"Connect To MySQL Externally",description:"Once in a while, you may want to connect with your MySQL database on free hosting from external applications such as third-party software, for a mobile application or hosting even hosting an MC server!",source:"@site/docs/mysql-databases/external-mysql-connect.md",sourceDirName:"mysql-databases",slug:"/mysql-databases/external-mysql-connect",permalink:"/mysql-databases/external-mysql-connect",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Connecting With MySQL",permalink:"/mysql-databases/connect-mysql"},next:{title:"Import A MySQL Database",permalink:"/mysql-databases/import-mysql-db"}},u={},p=[],y={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"connect-to-mysql-externally"},"Connect To MySQL Externally"),(0,o.kt)("p",null,"Once in a while, you may want to connect with your MySQL database on free hosting from external applications such as third-party software, for a mobile application or hosting even hosting an MC server!"),(0,o.kt)("p",null,"But the sad truth is that the database servers only connect when the request comes from the free hosting account it is assigned to"),(0,o.kt)("p",null,"This means, only scripts uploaded on your account are eligible to connect to the MySQL database and take leverage."),(0,o.kt)("p",null,"But none of these limitations is available on ",(0,o.kt)("a",{parentName:"p",href:"https://pleasantfree.com/go/ifastnet"},"premium hosting"),"! You can upgrade to a premium account and connect external applications to your database using Remote Conenctions."))}m.isMDXComponent=!0}}]);