"use strict";(self.webpackChunkhtdocs=self.webpackChunkhtdocs||[]).push([[652],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(r),f=o,y=d["".concat(s,".").concat(f)]||d[f]||p[f]||a;return r?n.createElement(y,i(i({ref:t},u),{},{components:r})):n.createElement(y,i({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5214:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const a={description:"Now at this point, you may/should install the certificate on your account to secure your website from hackers ASAP!"},i="Installing Free SSL Certificate",l={unversionedId:"ssl-and-security/install-ssl-certificate",id:"ssl-and-security/install-ssl-certificate",title:"Installing Free SSL Certificate",description:"Now at this point, you may/should install the certificate on your account to secure your website from hackers ASAP!",source:"@site/docs/ssl-and-security/install-ssl-certificate.md",sourceDirName:"ssl-and-security",slug:"/ssl-and-security/install-ssl-certificate",permalink:"/ssl-and-security/install-ssl-certificate",draft:!1,tags:[],version:"current",frontMatter:{description:"Now at this point, you may/should install the certificate on your account to secure your website from hackers ASAP!"},sidebar:"tutorialSidebar",previous:{title:"Forcing Web Traffic To Use HTTPS",permalink:"/ssl-and-security/force-https-traffic"},next:{title:"Verify In Google Search Console",permalink:"/websites-and-php/google-search-console"}},s={},c=[],u={toc:c};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"installing-free-ssl-certificate"},"Installing Free SSL Certificate"),(0,o.kt)("p",null,"So just got your SSL certificate from our ",(0,o.kt)("a",{parentName:"p",href:"https://app.pleasantfree.com/sslCerts"},"Free SSL Tool")," ? That sounds cool and we\u2019d love to get feedback on our tool to constantly improve our product for you!"),(0,o.kt)("p",null,"Now at this point, you may/should install the certificate on your account to secure your website from hackers ASAP! This guide walks you through the steps to get it done, like literally in a jiffy."),(0,o.kt)("p",null,"To do this, you need to log in to your client area and get into your control panel. Then hover over to the ",(0,o.kt)("kbd",null,"SSL/TLS")," section and choose your domain. And then note these things when uploading the keys."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"When uploading the certificate and private key, there are lines at the top and bottom like ",(0,o.kt)("inlineCode",{parentName:"li"},"--- BEGIN PRIVATE KEY ---")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"--- BEGIN CERTIFICATE ---")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"--- END PRIVATE KEY ---")," OR ",(0,o.kt)("inlineCode",{parentName:"li"},"--- END CERTIFICATE ---"),". These lines must also be included when uploading the private key and certificate."),(0,o.kt)("li",{parentName:"ul"},"The SSL/TLS tool only supports uploading 2048 bits private keys. Some tools may generate 4096 bits of private keys, but those cannot be uploaded here. If you have 4096 bits key, you will have to generate a new private key and certificate."),(0,o.kt)("li",{parentName:"ul"},"The CSR box may be empty or contain old data. The CSR is only used to get the SSL certificate and is useless afterwards. You don\u2019t need to create or upload a CSR to get SSL on your site.")))}p.isMDXComponent=!0}}]);