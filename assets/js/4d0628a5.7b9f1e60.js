"use strict";(self.webpackChunkhtdocs=self.webpackChunkhtdocs||[]).push([[828],{3905:function(e,t,i){i.d(t,{Zo:function(){return u},kt:function(){return d}});var r=i(7294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function l(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t){if(null==e)return{};var i,r,n=function(e,t){if(null==e)return{};var i,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)i=a[r],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)i=a[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):l(l({},t),e)),i},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var i=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(i),d=n,m=p["".concat(s,".").concat(d)]||p[d]||f[d]||a;return i?r.createElement(m,l(l({ref:t},u),{},{components:i})):r.createElement(m,l({ref:t},u))}));function d(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=i.length,l=new Array(a);l[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var c=2;c<a;c++)l[c]=i[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,i)}p.displayName="MDXCreateElement"},6531:function(e,t,i){i.r(t),i.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return f}});var r=i(7462),n=i(3366),a=(i(7294),i(3905)),l=["components"],o={description:"All PleasantFree servers have file upload limit of 10 MB. It's important to note that this is a upload size limit and not a file size limit."},s="Max Limit For Files",c={unversionedId:"files-and-ftp/file-max-limits",id:"files-and-ftp/file-max-limits",title:"Max Limit For Files",description:"All PleasantFree servers have file upload limit of 10 MB. It's important to note that this is a upload size limit and not a file size limit.",source:"@site/docs/files-and-ftp/file-max-limits.md",sourceDirName:"files-and-ftp",slug:"/files-and-ftp/file-max-limits",permalink:"/files-and-ftp/file-max-limits",draft:!1,tags:[],version:"current",frontMatter:{description:"All PleasantFree servers have file upload limit of 10 MB. It's important to note that this is a upload size limit and not a file size limit."},sidebar:"tutorialSidebar",previous:{title:"Your Disk Quota Is Exceeded",permalink:"/files-and-ftp/disk-quota-exceeded"},next:{title:"Files Deleted After Uploading",permalink:"/files-and-ftp/files-deleted-automatically"}},u={},f=[{value:"Can the limit be increased?",id:"can-the-limit-be-increased",level:2}],p={toc:f};function d(e){var t=e.components,i=(0,n.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"max-limit-for-files"},"Max Limit For Files"),(0,a.kt)("p",null,"All PleasantFree servers have file size limit of 10 MB. We limit the file size on our servers to ensure that everyone's content can load quickly. Files which exceed the upload size are automatically removed."),(0,a.kt)("p",null,"File size restrictions by type are as follows:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"HTML/PHP/plaintext files are limited to 1 MB."),(0,a.kt)("li",{parentName:"ul"},"Expanding on the above, ",(0,a.kt)("inlineCode",{parentName:"li"},".htaccess")," files are limited to 10 kB."),(0,a.kt)("li",{parentName:"ul"},"All other files, such as images, are limited to 10 MB.")),(0,a.kt)("p",null,"These file size restrictions apply to all files, no matter how your site acquires the file. PHP ",(0,a.kt)("inlineCode",{parentName:"p"},"$_FILES")," uploads are also subject to the above regulations."),(0,a.kt)("h2",{id:"can-the-limit-be-increased"},"Can the limit be increased?"),(0,a.kt)("p",null,"The size limit is fixed and cannot be increased in any way. 10 MB is more than enough for regular website files (scripts, images, HTML files, etc.)."),(0,a.kt)("p",null,"If you need to upload a larger script, plugin or theme, you can work around it. If you want to upload large, downloadable files or video files, please use a specialized service for that (e.g. Vimeo for videos or Box for downloadable files)."))}d.isMDXComponent=!0}}]);