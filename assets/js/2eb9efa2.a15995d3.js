"use strict";(self.webpackChunkdocsweb=self.webpackChunkdocsweb||[]).push([[9694],{876:(o,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>h});var e=n(2784);function l(o,t,n){return t in o?Object.defineProperty(o,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):o[t]=n,o}function a(o,t){var n=Object.keys(o);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(o);t&&(e=e.filter((function(t){return Object.getOwnPropertyDescriptor(o,t).enumerable}))),n.push.apply(n,e)}return n}function s(o){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(o,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(o,t,Object.getOwnPropertyDescriptor(n,t))}))}return o}function r(o,t){if(null==o)return{};var n,e,l=function(o,t){if(null==o)return{};var n,e,l={},a=Object.keys(o);for(e=0;e<a.length;e++)n=a[e],t.indexOf(n)>=0||(l[n]=o[n]);return l}(o,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(o);for(e=0;e<a.length;e++)n=a[e],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(o,n)&&(l[n]=o[n])}return l}var c=e.createContext({}),p=function(o){var t=e.useContext(c),n=t;return o&&(n="function"==typeof o?o(t):s(s({},t),o)),n},i=function(o){var t=p(o.components);return e.createElement(c.Provider,{value:t},o.children)},d="mdxType",g={inlineCode:"code",wrapper:function(o){var t=o.children;return e.createElement(e.Fragment,{},t)}},y=e.forwardRef((function(o,t){var n=o.components,l=o.mdxType,a=o.originalType,c=o.parentName,i=r(o,["components","mdxType","originalType","parentName"]),d=p(n),y=l,h=d["".concat(c,".").concat(y)]||d[y]||g[y]||a;return n?e.createElement(h,s(s({ref:t},i),{},{components:n})):e.createElement(h,s({ref:t},i))}));function h(o,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof o||l){var a=n.length,s=new Array(a);s[0]=y;var r={};for(var c in t)hasOwnProperty.call(t,c)&&(r[c]=t[c]);r.originalType=o,r[d]="string"==typeof o?o:l,s[1]=r;for(var p=2;p<a;p++)s[p]=n[p];return e.createElement.apply(null,s)}return e.createElement.apply(null,n)}y.displayName="MDXCreateElement"},4207:(o,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>y,frontMatter:()=>a,metadata:()=>r,quartoRawHtml:()=>i,toc:()=>p});var e=n(7896),l=(n(2784),n(876));const a={title:"Brocasting con Numpy",slug:"brocasting-con-numpy",authors:["ccdarvin"],tags:["numpy","broadcasting","python"],date:new Date("2023-06-20T00:00:00.000Z")},s=void 0,r={permalink:"/article/brocasting-con-numpy",source:"@site/blog/broadcasting-con-numpy.md",title:"Brocasting con Numpy",description:"broadcasting-con-numpy}",date:"2023-06-20T00:00:00.000Z",formattedDate:"20 de junio de 2023",tags:[{label:"numpy",permalink:"/article/tags/numpy"},{label:"broadcasting",permalink:"/article/tags/broadcasting"},{label:"python",permalink:"/article/tags/python"}],readingTime:10.35,hasTruncateMarker:!1,authors:[{name:"Darvin Cotrina",title:"Creador de entredata.org",url:"https://github.com/ccdarvin",imageURL:"https://github.com/ccdarvin.png",key:"ccdarvin"}],frontMatter:{title:"Brocasting con Numpy",slug:"brocasting-con-numpy",authors:["ccdarvin"],tags:["numpy","broadcasting","python"],date:"2023-06-20T00:00:00.000Z"},prevItem:{title:"Arboles de decisi\xf3n y m\xe9todos de ensamble",permalink:"/article/arboles-decision-ensamble"},nextItem:{title:"Detecci\xf3n de anomal\xedas",permalink:"/article/ml-deteccion-de-anomalias"}},c={authorsImageUrls:[void 0]},p=[{value:"Ejemplos de broadcasting",id:"ejemplos-de-broadcasting",level:2},{value:"Ejemplos de no broadcasting",id:"ejemplos-de-no-broadcasting",level:2}],i=["<pre style=\"white-space:pre;overflow-x:auto;line-height:normal;font-family:Menlo,'DejaVu Sans Mono',consolas,'Courier New',monospace\">Broadcasting de 1<span style=\"color: #008080; text-decoration-color: #008080; font-weight: bold\">0x5</span> + 1x5\n</pre>",'<pre style="white-space:pre;overflow-x:auto;line-height:normal;font-family:Menlo,\'DejaVu Sans Mono\',consolas,\'Courier New\',monospace"><span style="font-weight: bold">[[</span> <span style="color: #008080; text-decoration-color: #008080; font-weight: bold">9</span>  <span style="color: #008080; text-decoration-color: #008080; font-weight: bold">2</span>  <span style="color: #008080; text-decoration-color: #008080; font-weight: bold">6</span>  <span style="color: #008080; text-decoration-color: #008080; font-weight: bold">5</span>  <span style="color: #008080; text-decoration-color: #008080; font-weight: bold">1</span><span style="font-weight: bold">]</span>\n <span style="font-weight: bold">[</span> <span style="color: #008080; text-decoration-color: #008080; font-weight: bold">5</span>  <span style="color: #008080; text-decoration-color: #008080; font-weight: bold">9</span> <span style="color: #008080; text-decoration-color: #008080; font-weight: bold">10</span> <span style="color: #008080; text-decoration-color: #008080; font-weight: bold">10</span>  <span style="color: #008080; text-decoration-color: #008080; font-weight: bold">8</span><span style="font-weight: bold">]</span>\n <span style="font-weight: bold">[</span> <span style="color: #008080; text-decoration-color: #008080; font-weight: bold">6</span>  <span style="color: #008080; text-decoration-color: #008080; font-weight: bold">9</span>  <span style="color: #008080; text-decoration-color: #008080; font-weight: bold">3</span> <span style="color: #008080; text-decoration-color: #008080; font-weight: bold">10</span>  <span style="color: #008080; text-decoration-color: #008080; font-weight: bold">3</span><span style="font-weight: bold">]</span>\n <span style="font-weight: bold">[</span> <span style="color: #008080; text-decoration-color: #008080; font-weight: bold">8</span>  <span style="color: #008080; text-decoration-color: #008080; font-weight: bold">8</span>  <span style="color: #008080; text-decoration-color: #008080; font-weight: bold">7</span>  <span style="color: #008080; text-decoration-color: #008080; font-weight: bold">4</span>  <span style="color: #008080; text-decoration-color: #008080; font-weight: bold">8</span><span style="font-weight: bold">]</span>\n <span style="font-weight: bold">[</span> <span style="color: #008080; text-decoration-color: #008080; font-weight: bold">5</span>  <span style="color: #008080; text-decoration-color: #008080; font-weight: bold">2</span>  <span style="color: #008080; text-decoration-color: #008080; font-weight: bold">6</span> <span style="color: #008080; text-decoration-color: #008080; font-weight: bold">10</span>  <span style="color: #008080; text-decoration-color: #008080; font-weight: bold">5</span><span style="font-weight: bold">]</span>\n <span style="font-weight: bold">[</span> <span style="color: #008080; text-decoration-color: #008080; font-weight: bold">7</span>  <span style="color: #008080; text-decoration-color: #008080; font-weight: bold">9</span>  <span style="color: #008080; text-decoration-color: #008080; font-weight: bold">9</span>  <span style="color: #008080; text-decoration-color: #008080; font-weight: bold">8</span>  <span style="color: #008080; text-decoration-color: #008080; font-weight: bold">3</span><span style="font-weight: bold">]</span>\n <span style="font-weight: bold">[</span> <span style="color: #008080; text-decoration-color: #008080; font-weight: bold">7</span>  <span style="color: #008080; text-decoration-color: #008080; font-weight: bold">5</span>  <span style="color: #008080; text-decoration-color: #008080; font-weight: bold">3</span>  <span style="color: #008080; text-decoration-color: #008080; font-weight: bold">5</span>  <span style="color: #008080; text-decoration-color: #008080; font-weight: bold">7</span><span style="font-weight: bold">]</span>\n <span style="font-weight: bold">[</span> <span style="color: #008080; text-decoration-color: #008080; font-weight: bold">4</span>  <span style="color: #008080; text-decoration-color: #008080; font-weight: bold">7</span>  <span style="color: #008080; text-decoration-color: #008080; font-weight: bold">7</span>  <span style="color: #008080; text-decoration-color: #008080; font-weight: bold">3</span>  <span style="color: #008080; text-decoration-color: #008080; font-weight: bold">1</span><span style="font-weight: bold">]</span>\n <span style="font-weight: bold">[</span> <span style="color: #008080; text-decoration-color: #008080; font-weight: bold">2</span>  <span style="color: #008080; text-decoration-color: #008080; font-weight: bold">8</span>  <span style="color: #008080; text-decoration-color: #008080; font-weight: bold">6</span> <span style="color: #008080; text-decoration-color: #008080; font-weight: bold">12</span>  <span style="color: #008080; text-decoration-color: #008080; font-weight: bold">7</span><span style="font-weight: bold">]</span>\n <span style="font-weight: bold">[</span> <span style="color: #008080; text-decoration-color: #008080; font-weight: bold">9</span>  <span style="color: #008080; text-decoration-color: #008080; font-weight: bold">9</span> <span style="color: #008080; text-decoration-color: #008080; font-weight: bold">12</span> <span style="color: #008080; text-decoration-color: #008080; font-weight: bold">10</span> <span style="color: #008080; text-decoration-color: #008080; font-weight: bold">10</span><span style="font-weight: bold">]]</span>\n</pre>','<pre style="white-space:pre;overflow-x:auto;line-height:normal;font-family:Menlo,\'DejaVu Sans Mono\',consolas,\'Courier New\',monospace">Broadcasting de 1<span style="color: #008080; text-decoration-color: #008080; font-weight: bold">0x5</span> + <span style="color: #008080; text-decoration-color: #008080; font-weight: bold">5</span>\n</pre>','<pre style="white-space:pre;overflow-x:auto;line-height:normal;font-family:Menlo,\'DejaVu Sans Mono\',consolas,\'Courier New\',monospace"><span style="font-weight: bold">[[</span> <span style="color: #008080; text-decoration-color: #008080; font-weight: bold">7</span> <span style="color: #008080; text-decoration-color: #008080; font-weight: bold">11</span>  <span style="color: #008080; text-decoration-color: #008080; font-weight: bold">9</span>  <span style="color: #008080; text-decoration-color: #008080; font-weight: bold">2</span>  <span style="color: #008080; text-decoration-color: #008080; font-weight: bold">5</span><span style="font-weight: bold">]</span>\n <span style="font-weight: bold">[</span> <span style="color: #008080; text-decoration-color: #008080; font-weight: bold">3</span> <span style="color: #008080; text-decoration-color: #008080; font-weight: bold">18</span> <span style="color: #008080; text-decoration-color: #008080; font-weight: bold">13</span>  <span style="color: #008080; text-decoration-color: #008080; font-weight: bold">7</span> <span style="color: #008080; text-decoration-color: #008080; font-weight: bold">12</span><span style="font-weight: bold">]</span>\n <span style="font-weight: bold">[</span> <span style="color: #008080; text-decoration-color: #008080; font-weight: bold">4</span> <span style="color: #008080; text-decoration-color: #008080; font-weight: bold">18</span>  <span style="color: #008080; text-decoration-color: #008080; font-weight: bold">6</span>  <span style="color: #008080; text-decoration-color: #008080; font-weight: bold">7</span>  <span style="color: #008080; text-decoration-color: #008080; font-weight: bold">7</span><span style="font-weight: bold">]</span>\n <span style="font-weight: bold">[</span> <span style="color: #008080; text-decoration-color: #008080; font-weight: bold">6</span> <span style="color: #008080; text-decoration-color: #008080; font-weight: bold">17</span> <span style="color: #008080; text-decoration-color: #008080; font-weight: bold">10</span>  <span style="color: #008080; text-decoration-color: #008080; font-weight: bold">1</span> <span style="color: #008080; text-decoration-color: #008080; font-weight: bold">12</span><span style="font-weight: bold">]</span>\n <span style="font-weight: bold">[</span> <span style="color: #008080; text-decoration-color: #008080; font-weight: bold">3</span> <span style="color: #008080; text-decoration-color: #008080; font-weight: bold">11</span>  <span style="color: #008080; text-decoration-color: #008080; font-weight: bold">9</span>  <span style="color: #008080; text-decoration-color: #008080; font-weight: bold">7</span>  <span style="color: #008080; text-decoration-color: #008080; font-weight: bold">9</span><span style="font-weight: bold">]</span>\n <span style="font-weight: bold">[</span> <span style="color: #008080; text-decoration-color: #008080; font-weight: bold">5</span> <span style="color: #008080; text-decoration-color: #008080; font-weight: bold">18</span> <span style="color: #008080; text-decoration-color: #008080; font-weight: bold">12</span>  <span style="color: #008080; text-decoration-color: #008080; font-weight: bold">5</span>  <span style="color: #008080; text-decoration-color: #008080; font-weight: bold">7</span><span style="font-weight: bold">]</span>\n <span style="font-weight: bold">[</span> <span style="color: #008080; text-decoration-color: #008080; font-weight: bold">5</span> <span style="color: #008080; text-decoration-color: #008080; font-weight: bold">14</span>  <span style="color: #008080; text-decoration-color: #008080; font-weight: bold">6</span>  <span style="color: #008080; text-decoration-color: #008080; font-weight: bold">2</span> <span style="color: #008080; text-decoration-color: #008080; font-weight: bold">11</span><span style="font-weight: bold">]</span>\n <span style="font-weight: bold">[</span> <span style="color: #008080; text-decoration-color: #008080; font-weight: bold">2</span> <span style="color: #008080; text-decoration-color: #008080; font-weight: bold">16</span> <span style="color: #008080; text-decoration-color: #008080; font-weight: bold">10</span>  <span style="color: #008080; text-decoration-color: #008080; font-weight: bold">0</span>  <span style="color: #008080; text-decoration-color: #008080; font-weight: bold">5</span><span style="font-weight: bold">]</span>\n <span style="font-weight: bold">[</span> <span style="color: #008080; text-decoration-color: #008080; font-weight: bold">0</span> <span style="color: #008080; text-decoration-color: #008080; font-weight: bold">17</span>  <span style="color: #008080; text-decoration-color: #008080; font-weight: bold">9</span>  <span style="color: #008080; text-decoration-color: #008080; font-weight: bold">9</span> <span style="color: #008080; text-decoration-color: #008080; font-weight: bold">11</span><span style="font-weight: bold">]</span>\n <span style="font-weight: bold">[</span> <span style="color: #008080; text-decoration-color: #008080; font-weight: bold">7</span> <span style="color: #008080; text-decoration-color: #008080; font-weight: bold">18</span> <span style="color: #008080; text-decoration-color: #008080; font-weight: bold">15</span>  <span style="color: #008080; text-decoration-color: #008080; font-weight: bold">7</span> <span style="color: #008080; text-decoration-color: #008080; font-weight: bold">14</span><span style="font-weight: bold">]]</span>\n</pre>','<pre style="white-space:pre;overflow-x:auto;line-height:normal;font-family:Menlo,\'DejaVu Sans Mono\',consolas,\'Courier New\',monospace">Broadcasting de 1<span style="color: #008080; text-decoration-color: #008080; font-weight: bold">0x5</span> + 1<span style="color: #008080; text-decoration-color: #008080; font-weight: bold">0x1</span>\n</pre>','<pre style="white-space:pre;overflow-x:auto;line-height:normal;font-family:Menlo,\'DejaVu Sans Mono\',consolas,\'Courier New\',monospace"><span style="font-weight: bold">[[</span><span style="color: #008080; text-decoration-color: #008080; font-weight: bold">14</span>  <span style="color: #008080; text-decoration-color: #008080; font-weight: bold">9</span> <span style="color: #008080; text-decoration-color: #008080; font-weight: bold">10</span>  <span style="color: #008080; text-decoration-color: #008080; font-weight: bold">9</span>  <span style="color: #008080; text-decoration-color: #008080; font-weight: bold">7</span><span style="font-weight: bold">]</span>\n <span style="font-weight: bold">[</span> <span style="color: #008080; text-decoration-color: #008080; font-weight: bold">5</span> <span style="color: #008080; text-decoration-color: #008080; font-weight: bold">11</span>  <span style="color: #008080; text-decoration-color: #008080; font-weight: bold">9</span>  <span style="color: #008080; text-decoration-color: #008080; font-weight: bold">9</span>  <span style="color: #008080; text-decoration-color: #008080; font-weight: bold">9</span><span style="font-weight: bold">]</span>\n <span style="font-weight: bold">[</span> <span style="color: #008080; text-decoration-color: #008080; font-weight: bold">5</span> <span style="color: #008080; text-decoration-color: #008080; font-weight: bold">10</span>  <span style="color: #008080; text-decoration-color: #008080; font-weight: bold">1</span>  <span style="color: #008080; text-decoration-color: #008080; font-weight: bold">8</span>  <span style="color: #008080; text-decoration-color: #008080; font-weight: bold">3</span><span style="font-weight: bold">]</span>\n <span style="font-weight: bold">[</span><span style="color: #008080; text-decoration-color: #008080; font-weight: bold">11</span> <span style="color: #008080; text-decoration-color: #008080; font-weight: bold">13</span>  <span style="color: #008080; text-decoration-color: #008080; font-weight: bold">9</span>  <span style="color: #008080; text-decoration-color: #008080; font-weight: bold">6</span> <span style="color: #008080; text-decoration-color: #008080; font-weight: bold">12</span><span style="font-weight: bold">]</span>\n <span style="font-weight: bold">[</span> <span style="color: #008080; text-decoration-color: #008080; font-weight: bold">9</span>  <span style="color: #008080; text-decoration-color: #008080; font-weight: bold">8</span>  <span style="color: #008080; text-decoration-color: #008080; font-weight: bold">9</span> <span style="color: #008080; text-decoration-color: #008080; font-weight: bold">13</span> <span style="color: #008080; text-decoration-color: #008080; font-weight: bold">10</span><span style="font-weight: bold">]</span>\n <span style="font-weight: bold">[</span><span style="color: #008080; text-decoration-color: #008080; font-weight: bold">11</span> <span style="color: #008080; text-decoration-color: #008080; font-weight: bold">15</span> <span style="color: #008080; text-decoration-color: #008080; font-weight: bold">12</span> <span style="color: #008080; text-decoration-color: #008080; font-weight: bold">11</span>  <span style="color: #008080; text-decoration-color: #008080; font-weight: bold">8</span><span style="font-weight: bold">]</span>\n <span style="font-weight: bold">[</span> <span style="color: #008080; text-decoration-color: #008080; font-weight: bold">6</span>  <span style="color: #008080; text-decoration-color: #008080; font-weight: bold">6</span>  <span style="color: #008080; text-decoration-color: #008080; font-weight: bold">1</span>  <span style="color: #008080; text-decoration-color: #008080; font-weight: bold">3</span>  <span style="color: #008080; text-decoration-color: #008080; font-weight: bold">7</span><span style="font-weight: bold">]</span>\n <span style="font-weight: bold">[</span> <span style="color: #008080; text-decoration-color: #008080; font-weight: bold">3</span>  <span style="color: #008080; text-decoration-color: #008080; font-weight: bold">8</span>  <span style="color: #008080; text-decoration-color: #008080; font-weight: bold">5</span>  <span style="color: #008080; text-decoration-color: #008080; font-weight: bold">1</span>  <span style="color: #008080; text-decoration-color: #008080; font-weight: bold">1</span><span style="font-weight: bold">]</span>\n <span style="font-weight: bold">[</span> <span style="color: #008080; text-decoration-color: #008080; font-weight: bold">8</span> <span style="color: #008080; text-decoration-color: #008080; font-weight: bold">16</span> <span style="color: #008080; text-decoration-color: #008080; font-weight: bold">11</span> <span style="color: #008080; text-decoration-color: #008080; font-weight: bold">17</span> <span style="color: #008080; text-decoration-color: #008080; font-weight: bold">14</span><span style="font-weight: bold">]</span>\n <span style="font-weight: bold">[</span> <span style="color: #008080; text-decoration-color: #008080; font-weight: bold">7</span>  <span style="color: #008080; text-decoration-color: #008080; font-weight: bold">9</span>  <span style="color: #008080; text-decoration-color: #008080; font-weight: bold">9</span>  <span style="color: #008080; text-decoration-color: #008080; font-weight: bold">7</span>  <span style="color: #008080; text-decoration-color: #008080; font-weight: bold">9</span><span style="font-weight: bold">]]</span>\n</pre>','<pre style="white-space:pre;overflow-x:auto;line-height:normal;font-family:Menlo,\'DejaVu Sans Mono\',consolas,\'Courier New\',monospace"><span style="font-weight: bold">[[</span><span style="color: #008080; text-decoration-color: #008080; font-weight: bold">12</span>  <span style="color: #008080; text-decoration-color: #008080; font-weight: bold">7</span>  <span style="color: #008080; text-decoration-color: #008080; font-weight: bold">8</span>  <span style="color: #008080; text-decoration-color: #008080; font-weight: bold">7</span>  <span style="color: #008080; text-decoration-color: #008080; font-weight: bold">5</span><span style="font-weight: bold">]</span>\n <span style="font-weight: bold">[</span> <span style="color: #008080; text-decoration-color: #008080; font-weight: bold">8</span> <span style="color: #008080; text-decoration-color: #008080; font-weight: bold">14</span> <span style="color: #008080; text-decoration-color: #008080; font-weight: bold">12</span> <span style="color: #008080; text-decoration-color: #008080; font-weight: bold">12</span> <span style="color: #008080; text-decoration-color: #008080; font-weight: bold">12</span><span style="font-weight: bold">]</span>\n <span style="font-weight: bold">[</span> <span style="color: #008080; text-decoration-color: #008080; font-weight: bold">9</span> <span style="color: #008080; text-decoration-color: #008080; font-weight: bold">14</span>  <span style="color: #008080; text-decoration-color: #008080; font-weight: bold">5</span> <span style="color: #008080; text-decoration-color: #008080; font-weight: bold">12</span>  <span style="color: #008080; text-decoration-color: #008080; font-weight: bold">7</span><span style="font-weight: bold">]</span>\n <span style="font-weight: bold">[</span><span style="color: #008080; text-decoration-color: #008080; font-weight: bold">11</span> <span style="color: #008080; text-decoration-color: #008080; font-weight: bold">13</span>  <span style="color: #008080; text-decoration-color: #008080; font-weight: bold">9</span>  <span style="color: #008080; text-decoration-color: #008080; font-weight: bold">6</span> <span style="color: #008080; text-decoration-color: #008080; font-weight: bold">12</span><span style="font-weight: bold">]</span>\n <span style="font-weight: bold">[</span> <span style="color: #008080; text-decoration-color: #008080; font-weight: bold">8</span>  <span style="color: #008080; text-decoration-color: #008080; font-weight: bold">7</span>  <span style="color: #008080; text-decoration-color: #008080; font-weight: bold">8</span> <span style="color: #008080; text-decoration-color: #008080; font-weight: bold">12</span>  <span style="color: #008080; text-decoration-color: #008080; font-weight: bold">9</span><span style="font-weight: bold">]</span>\n <span style="font-weight: bold">[</span><span style="color: #008080; text-decoration-color: #008080; font-weight: bold">10</span> <span style="color: #008080; text-decoration-color: #008080; font-weight: bold">14</span> <span style="color: #008080; text-decoration-color: #008080; font-weight: bold">11</span> <span style="color: #008080; text-decoration-color: #008080; font-weight: bold">10</span>  <span style="color: #008080; text-decoration-color: #008080; font-weight: bold">7</span><span style="font-weight: bold">]</span>\n <span style="font-weight: bold">[</span><span style="color: #008080; text-decoration-color: #008080; font-weight: bold">10</span> <span style="color: #008080; text-decoration-color: #008080; font-weight: bold">10</span>  <span style="color: #008080; text-decoration-color: #008080; font-weight: bold">5</span>  <span style="color: #008080; text-decoration-color: #008080; font-weight: bold">7</span> <span style="color: #008080; text-decoration-color: #008080; font-weight: bold">11</span><span style="font-weight: bold">]</span>\n <span style="font-weight: bold">[</span> <span style="color: #008080; text-decoration-color: #008080; font-weight: bold">7</span> <span style="color: #008080; text-decoration-color: #008080; font-weight: bold">12</span>  <span style="color: #008080; text-decoration-color: #008080; font-weight: bold">9</span>  <span style="color: #008080; text-decoration-color: #008080; font-weight: bold">5</span>  <span style="color: #008080; text-decoration-color: #008080; font-weight: bold">5</span><span style="font-weight: bold">]</span>\n <span style="font-weight: bold">[</span> <span style="color: #008080; text-decoration-color: #008080; font-weight: bold">5</span> <span style="color: #008080; text-decoration-color: #008080; font-weight: bold">13</span>  <span style="color: #008080; text-decoration-color: #008080; font-weight: bold">8</span> <span style="color: #008080; text-decoration-color: #008080; font-weight: bold">14</span> <span style="color: #008080; text-decoration-color: #008080; font-weight: bold">11</span><span style="font-weight: bold">]</span>\n <span style="font-weight: bold">[</span><span style="color: #008080; text-decoration-color: #008080; font-weight: bold">12</span> <span style="color: #008080; text-decoration-color: #008080; font-weight: bold">14</span> <span style="color: #008080; text-decoration-color: #008080; font-weight: bold">14</span> <span style="color: #008080; text-decoration-color: #008080; font-weight: bold">12</span> <span style="color: #008080; text-decoration-color: #008080; font-weight: bold">14</span><span style="font-weight: bold">]]</span>\n</pre>',"<pre style=\"white-space:pre;overflow-x:auto;line-height:normal;font-family:Menlo,'DejaVu Sans Mono',consolas,'Courier New',monospace\">Broadcasting de 1<span style=\"color: #008080; text-decoration-color: #008080; font-weight: bold\">0x5</span> + 5x10\n</pre>",'<pre style="white-space:pre;overflow-x:auto;line-height:normal;font-family:Menlo,\'DejaVu Sans Mono\',consolas,\'Courier New\',monospace">Broadcasting de 1<span style="color: #008080; text-decoration-color: #008080; font-weight: bold">0x5</span> + <span style="color: #008080; text-decoration-color: #008080; font-weight: bold">10</span>\n</pre>'],d={toc:p,quartoRawHtml:i},g="wrapper";function y(o){let{components:t,...a}=o;return(0,l.kt)(g,(0,e.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"broadcasting-con-numpy"},"Broadcasting con NumPy"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image.png",src:n(4534).Z,width:"1024",height:"543"})),(0,l.kt)("p",null,"El broadcasting es una forma de hacer operaciones entre arrays de\ndiferentes tama\xf1os, que usualmente no son compatibles. El broadcasting\nes posible cuando se cumplen ciertas reglas."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"El tama\xf1o de cada dimensi\xf3n es igual."),(0,l.kt)("li",{parentName:"ul"},"Una de las dimensiones es 1.")),(0,l.kt)("p",null,"El broadcasting se realiza en la dimensi\xf3n que tiene tama\xf1o 1. El array\ncon tama\xf1o 1 se extiende para que tenga el mismo tama\xf1o que el otro\narray."),(0,l.kt)("h2",{id:"ejemplos-de-broadcasting"},"Ejemplos de broadcasting"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Array 1"),(0,l.kt)("th",{parentName:"tr",align:null},"Array 2"),(0,l.kt)("th",{parentName:"tr",align:null},"Resultado"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"10 x 5"),(0,l.kt)("td",{parentName:"tr",align:null},"1 x 5"),(0,l.kt)("td",{parentName:"tr",align:null},"10 x 5")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"10 x 5"),(0,l.kt)("td",{parentName:"tr",align:null},"5"),(0,l.kt)("td",{parentName:"tr",align:null},"10 x 5")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"10 x 5"),(0,l.kt)("td",{parentName:"tr",align:null},"10 x 1"),(0,l.kt)("td",{parentName:"tr",align:null},"10 x 5")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"10 x 5"),(0,l.kt)("td",{parentName:"tr",align:null},"scalar"),(0,l.kt)("td",{parentName:"tr",align:null},"10 x 5")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"import numpy as np\nfrom rich import print\n# matris de 10x5 \nm10_5 = np.random.randint(0, 10, (10, 5))\nm1_5 = np.random.randint(0, 10, (1, 5))\nm5 = np.random.randint(0, 10, (5))\nm10_1 = np.random.randint(0, 10, (10, 1))\nscalar = 5\n\nprint('Broadcasting de 10x5 + 1x5')\nprint(m10_5 + m1_5)\nprint('Broadcasting de 10x5 + 5')\nprint(m10_5 + m5)\nprint('Broadcasting de 10x5 + 10x1')\nprint(m10_5 + m10_1)\nprint(m10_5 + scalar)\n")),(0,l.kt)("div",{dangerouslySetInnerHTML:{__html:i[0]}}),(0,l.kt)("div",{dangerouslySetInnerHTML:{__html:i[1]}}),(0,l.kt)("div",{dangerouslySetInnerHTML:{__html:i[2]}}),(0,l.kt)("div",{dangerouslySetInnerHTML:{__html:i[3]}}),(0,l.kt)("div",{dangerouslySetInnerHTML:{__html:i[4]}}),(0,l.kt)("div",{dangerouslySetInnerHTML:{__html:i[5]}}),(0,l.kt)("div",{dangerouslySetInnerHTML:{__html:i[6]}}),(0,l.kt)("h2",{id:"ejemplos-de-no-broadcasting"},"Ejemplos de no broadcasting"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Array 1"),(0,l.kt)("th",{parentName:"tr",align:null},"Array 2"),(0,l.kt)("th",{parentName:"tr",align:null},"Resultado"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"10 x 5"),(0,l.kt)("td",{parentName:"tr",align:null},"5 x 10"),(0,l.kt)("td",{parentName:"tr",align:null},"Error")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"10 x 5"),(0,l.kt)("td",{parentName:"tr",align:null},"10"),(0,l.kt)("td",{parentName:"tr",align:null},"Error")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"m10_5 = np.random.randint(0, 10, (10, 5))\nm5_10 = np.random.randint(0, 10, (5, 10))\nm10 = np.random.randint(0, 10, (10))\n\nprint('Broadcasting de 10x5 + 5x10')\nprint(m10_5 + m5_10)\n")),(0,l.kt)("div",{dangerouslySetInnerHTML:{__html:i[7]}}),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"ValueError: operands could not be broadcast together with shapes (10,5) (5,10) \n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"print('Broadcasting de 10x5 + 10')\nprint(m10_5 + m10)\n")),(0,l.kt)("div",{dangerouslySetInnerHTML:{__html:i[8]}}),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"ValueError: operands could not be broadcast together with shapes (10,5) (10,) \n")))}y.isMDXComponent=!0},4534:(o,t,n)=>{n.d(t,{Z:()=>e});const e=n.p+"assets/images/2aae0de9-1-image-a2b2df8de962a3686fdf5a55f2a762d4.png"}}]);