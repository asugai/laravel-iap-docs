"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1066],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=l(r),f=a,m=u["".concat(s,".").concat(f)]||u[f]||d[f]||o;return r?n.createElement(m,i(i({ref:t},c),{},{components:r})):n.createElement(m,i({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},8264:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:1,description:"App Store credentials guide."},i="App Store Credentials",p={unversionedId:"credentials/app-store",id:"credentials/app-store",title:"App Store Credentials",description:"App Store credentials guide.",source:"@site/docs/credentials/app-store.mdx",sourceDirName:"credentials",slug:"/credentials/app-store",permalink:"/laravel-iap-docs/docs/credentials/app-store",draft:!1,editUrl:"https://github.com/imdhemy/laravel-iap-docs/blob/master/docs/credentials/app-store.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,description:"App Store credentials guide."},sidebar:"tutorialSidebar",previous:{title:"Credentials",permalink:"/laravel-iap-docs/docs/category/credentials"},next:{title:"Google PLay Credentials",permalink:"/laravel-iap-docs/docs/credentials/google-play"}},s={},l=[{value:"Generate Shared Secret",id:"generate-shared-secret",level:2},{value:"Add Credentials to the configuration file",id:"add-credentials-to-the-configuration-file",level:2}],c={toc:l};function d(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"app-store-credentials"},"App Store Credentials"),(0,a.kt)("h2",{id:"generate-shared-secret"},"Generate Shared Secret"),(0,a.kt)("p",null,"The application password or secret it used to authenticate LIAP with the App Store."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Go to ",(0,a.kt)("a",{parentName:"li",href:"https://appstoreconnect.apple.com/"},"App Store Connect"),"."),(0,a.kt)("li",{parentName:"ol"},"Log in with your Apple ID."),(0,a.kt)("li",{parentName:"ol"},"Click on the ",(0,a.kt)("strong",{parentName:"li"},"My Apps")," and select the app you want to configure."),(0,a.kt)("li",{parentName:"ol"},"Select ",(0,a.kt)("strong",{parentName:"li"},"Subscriptions")," under the ",(0,a.kt)("strong",{parentName:"li"},"Features")," section from the ",(0,a.kt)("strong",{parentName:"li"},"left")," menu."),(0,a.kt)("li",{parentName:"ol"},"Select ",(0,a.kt)("strong",{parentName:"li"},"Manage")," under the ",(0,a.kt)("strong",{parentName:"li"},"App-Specific Share Secret")," section from the ",(0,a.kt)("strong",{parentName:"li"},"right")," side.\n",(0,a.kt)("img",{src:r(9232).Z,width:"1900",height:"506"})),(0,a.kt)("li",{parentName:"ol"},"Generate and copy your shared secret.\n",(0,a.kt)("img",{src:r(3383).Z,width:"1394",height:"702"}))),(0,a.kt)("h2",{id:"add-credentials-to-the-configuration-file"},"Add Credentials to the configuration file"),(0,a.kt)("p",null,"Once you have your shared secret, you can add it to the configuration file."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="config/liap.php"',title:'"config/liap.php"'},"[\n  // Other configuration options are omitted for brevity.\n  'appstore_password' => '<your shared secret>',\n];\n")))}d.isMDXComponent=!0},9232:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/features-section-9d3d36449b379bd7f8434c5fc3eb88bc.png"},3383:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/shared-secret-718705cfb7433af25aa3ed517c1bbd88.png"}}]);