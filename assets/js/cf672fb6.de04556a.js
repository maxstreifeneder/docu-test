"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8994],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||i;return n?o.createElement(f,a(a({ref:t},u),{},{components:n})):o.createElement(f,a({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1499:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var o=n(7462),r=(n(7294),n(3905));const i={sidebar_position:2},a="Identify APIs in SAP API Business Hub",l={unversionedId:"custom-folder/tutorial",id:"custom-folder/tutorial",title:"Identify APIs in SAP API Business Hub",description:"Introduction",source:"@site/docs/custom-folder/tutorial.md",sourceDirName:"custom-folder",slug:"/custom-folder/tutorial",permalink:"/docu-test/docs/custom-folder/tutorial",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/docu-test/docs/custom-folder/tutorial1"},next:{title:"Test Application Autoscaler",permalink:"/docu-test/docs/custom-folder/code_tutorial"}},s={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Find and download API",id:"find-and-download-api",level:3}],u={toc:c};function p(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,o.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"identify-apis-in-sap-api-business-hub"},"Identify APIs in SAP API Business Hub"),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"Learn how to figure out available out-of-the-box APIs using the SAP API Business Hub and how to further use them in applications like SAP Cloud Application Programming Model."),(0,r.kt)("h3",{id:"find-and-download-api"},"Find and download API"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Open ",(0,r.kt)("a",{parentName:"li",href:"http://api.sap.com"},"http://api.sap.com")),(0,r.kt)("li",{parentName:"ol"},"Enter Business Partner in the Search Tab."),(0,r.kt)("li",{parentName:"ol"},"Click on the Search Button"),(0,r.kt)("li",{parentName:"ol"},"Click on Business Partner (A2X)")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"API Business Hub",src:n(6198).Z,width:"1230",height:"620"})),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Click on Details Tab")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Optionally if you want to use the API in another SAP Cloud Application Programming Model application"),":"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The GitHub repository including source code you will later on clone already has the OData metadata specification incorporated. 6. Click on Download API Specification 7. Select EDMX in the Pop Up")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"API Business Hub",src:n(2799).Z,width:"1204",height:"642"})),(0,r.kt)("ol",{start:8},(0,r.kt)("li",{parentName:"ol"},"Log On to Download the EDMX file")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Logon Required",src:n(8621).Z,width:"978",height:"594"})),(0,r.kt)("ol",{start:9},(0,r.kt)("li",{parentName:"ol"},"Download the EDMX file to your machine so you could later on use it while developing the SAP Cloud Application Programming Model application. Find out more: ","[How to import EDMX files into SAP Cloud Application Programming Model applications]","(",(0,r.kt)("a",{parentName:"li",href:"https://blogs.sap.com/2021/05/19/importing-external-edmx-files-using-the-cds-graphical-modeler/"},"https://blogs.sap.com/2021/05/19/importing-external-edmx-files-using-the-cds-graphical-modeler/"))))}p.isMDXComponent=!0},6198:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/APIBusinessHub1-b36d0b98d38055b83cb9397cdd6747de.png"},2799:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/APIBusinessHub2-59d16ba81fc0c79f3bbb7676dd0afd0c.png"},8621:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/APIBusinessHub3-55638a436059f5ed256fd0033a63c976.png"}}]);