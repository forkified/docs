"use strict";(self.webpackChunkhtdocs=self.webpackChunkhtdocs||[]).push([[828],{3905:function(e,t,i){i.d(t,{Zo:function(){return f},kt:function(){return d}});var n=i(7294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},f=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var i=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,f=l(e,["components","mdxType","originalType","parentName"]),c=p(i),d=r,m=c["".concat(s,".").concat(d)]||c[d]||u[d]||a;return i?n.createElement(m,o(o({ref:t},f),{},{components:i})):n.createElement(m,o({ref:t},f))}));function d(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=i.length,o=new Array(a);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<a;p++)o[p]=i[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,i)}c.displayName="MDXCreateElement"},6531:function(e,t,i){i.r(t),i.d(t,{assets:function(){return f},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var n=i(7462),r=i(3366),a=(i(7294),i(3905)),o=["components"],l={description:"All PleasantFree servers have file upload limit of 10 MB. It's important to note that this is a upload size limit and not a file size limit."},s="Max Limit For Files/Uploads",p={unversionedId:"files-and-ftp/file-max-limits",id:"files-and-ftp/file-max-limits",title:"Max Limit For Files/Uploads",description:"All PleasantFree servers have file upload limit of 10 MB. It's important to note that this is a upload size limit and not a file size limit.",source:"@site/docs/files-and-ftp/file-max-limits.md",sourceDirName:"files-and-ftp",slug:"/files-and-ftp/file-max-limits",permalink:"/files-and-ftp/file-max-limits",draft:!1,tags:[],version:"current",frontMatter:{description:"All PleasantFree servers have file upload limit of 10 MB. It's important to note that this is a upload size limit and not a file size limit."},sidebar:"tutorialSidebar",previous:{title:"Your Disk Quota Is Exceeded",permalink:"/files-and-ftp/disk-quota-exceeded"},next:{title:"Files Deleted After Uploading",permalink:"/files-and-ftp/files-deleted-automatically"}},f={},u=[{value:"Can the limit be increased?",id:"can-the-limit-be-increased",level:2}],c={toc:u};function d(e){var t=e.components,i=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"max-limit-for-filesuploads"},"Max Limit For Files/Uploads"),(0,a.kt)("p",null,"All PleasantFree servers have file upload limit of 10 MB. It\u2019s important to note that ",(0,a.kt)("strong",{parentName:"p"},"this is a upload size limit and not a file size limit"),"."),(0,a.kt)("p",null,"An upload limit can be set through PHP or ",(0,a.kt)("inlineCode",{parentName:"p"},".htaccess")," settings, but we enforce this limit at the file system level. No configuration can override it and applies to files uploaded through FTP or the file manager as well."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},".html")," files are limited to their max-size of 1 MB. Same goes with other extensions like ",(0,a.kt)("inlineCode",{parentName:"p"},".php")," etc."),(0,a.kt)("h2",{id:"can-the-limit-be-increased"},"Can the limit be increased?"),(0,a.kt)("p",null,"No. The size limit is fixed and cannot be increased in any way. 10 MB is more than enough for regular website files (scripts, images, HTML files, etc.)."),(0,a.kt)("p",null,"If you need to upload a larger script, plugin or theme, you can work around it. If you want to upload large, downloadable files or video files, please use a specialized service for that (e.g. YouTube for video or Google Drive for downloadable files)."))}d.isMDXComponent=!0}}]);