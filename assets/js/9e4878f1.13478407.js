"use strict";(self.webpackChunkdocsweb=self.webpackChunkdocsweb||[]).push([[3885],{876:(e,n,r)=>{r.d(n,{Zo:()=>u,kt:()=>f});var a=r(2784);function t(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){t(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,a,t=function(e,n){if(null==e)return{};var r,a,t={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],n.indexOf(r)>=0||(t[r]=e[r]);return t}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var p=a.createContext({}),c=function(e){var n=a.useContext(p),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},u=function(e){var n=c(e.components);return a.createElement(p.Provider,{value:n},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=c(r),m=t,f=s["".concat(p,".").concat(m)]||s[m]||d[m]||o;return r?a.createElement(f,i(i({ref:n},u),{},{components:r})):a.createElement(f,i({ref:n},u))}));function f(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[s]="string"==typeof e?e:t,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7128:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=r(7896),t=(r(2784),r(876));const o={title:"\xbfComo perfilar c\xf3digo con line_profiler?",description:"Perfilar c\xf3digo nos permite identificar las partes de nuestro c\xf3digo que son m\xe1s lentas y optimizarlas.",lang:"es",authors:["ccdarvin"],slug:"perfilar-codigo-con-line-profiler",date:new Date("2023-05-03T00:00:00.000Z"),tags:["python","perfilar","line_profiler","optimizar c\xf3digo"]},i="Perfilar c\xf3digo con line_profiler {#perfilar-c\xf3digo-con-line_profiler}",l={permalink:"/article/perfilar-codigo-con-line-profiler",source:"@site/blog/perfilar codigo con line_profiler.md",title:"\xbfComo perfilar c\xf3digo con line_profiler?",description:"Perfilar c\xf3digo nos permite identificar las partes de nuestro c\xf3digo que son m\xe1s lentas y optimizarlas.",date:"2023-05-03T00:00:00.000Z",formattedDate:"3 de mayo de 2023",tags:[{label:"python",permalink:"/article/tags/python"},{label:"perfilar",permalink:"/article/tags/perfilar"},{label:"line_profiler",permalink:"/article/tags/line-profiler"},{label:"optimizar c\xf3digo",permalink:"/article/tags/optimizar-codigo"}],readingTime:1.665,hasTruncateMarker:!1,authors:[{name:"Darvin Cotrina",title:"Creador de entredata.org",url:"https://github.com/ccdarvin",imageURL:"https://github.com/ccdarvin.png",key:"ccdarvin"}],frontMatter:{title:"\xbfComo perfilar c\xf3digo con line_profiler?",description:"Perfilar c\xf3digo nos permite identificar las partes de nuestro c\xf3digo que son m\xe1s lentas y optimizarlas.",lang:"es",authors:["ccdarvin"],slug:"perfilar-codigo-con-line-profiler",date:"2023-05-03T00:00:00.000Z",tags:["python","perfilar","line_profiler","optimizar c\xf3digo"]},prevItem:{title:"Vectorize de numpy vs apply de pandas",permalink:"/article/vectorize de numpy vs apply de pandas"}},p={authorsImageUrls:[void 0]},c=[{value:"Instalaci\xf3n",id:"instalaci\xf3n",level:2},{value:"\xbfC\xf3mo funciona en Jupyter?",id:"c\xf3mo-funciona-en-jupyter",level:2},{value:"Perfilando una funci\xf3n",id:"perfilando-una-funci\xf3n",level:2}],u={toc:c},s="wrapper";function d(e){let{components:n,...r}=e;return(0,t.kt)(s,(0,a.Z)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,t.kt)("p",null,"\xbfAlguna vez has tenido que optimizar el c\xf3digo de un programa?\n",(0,t.kt)("inlineCode",{parentName:"p"},"line_profiler")," es una herramienta que te permite perfilar el c\xf3digo de\nun programa para encontrar las partes que m\xe1s tiempo consumen. En este\nnotebook veremos c\xf3mo usarla."),(0,t.kt)("h2",{id:"instalaci\xf3n"},"Instalaci\xf3n"),(0,t.kt)("p",null,"Como ",(0,t.kt)("inlineCode",{parentName:"p"},"line_profiler")," no viene instalado por defecto en Anaconda, lo\ninstalaremos con ",(0,t.kt)("inlineCode",{parentName:"p"},"conda"),":"),(0,t.kt)("p",null,"En la terminal:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-bash"},"pip install line_profiler\n")),(0,t.kt)("p",null,"En el notebook:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-python"},"! pip install line_profiler\n")),(0,t.kt)("h2",{id:"c\xf3mo-funciona-en-jupyter"},"\xbfC\xf3mo funciona en Jupyter?"),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"line_profiler")," es una herramienta que permite perfilar el c\xf3digo de un\nprograma. Esto significa que nos permite ver cu\xe1nto tiempo se tarda en\nejecutar cada l\xednea de c\xf3digo. Para ello, ",(0,t.kt)("inlineCode",{parentName:"p"},"line_profiler")," nos permite\nusar el comando ",(0,t.kt)("inlineCode",{parentName:"p"},"%lprun")," en Jupyter. Este comando nos permite perfilar\nuna funci\xf3n. Para ello, debemos a\xf1adir el decorador ",(0,t.kt)("inlineCode",{parentName:"p"},"@profile")," a la\nfunci\xf3n que queremos perfilar."),(0,t.kt)("p",null,"cargar el m\xf3dulo ",(0,t.kt)("inlineCode",{parentName:"p"},"line_profiler")," en el notebook:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-python"},"%load_ext line_profiler\n")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-text"},"The line_profiler extension is already loaded. To reload it, use:\n  %reload_ext line_profiler\n")),(0,t.kt)("h2",{id:"perfilando-una-funci\xf3n"},"Perfilando una funci\xf3n"),(0,t.kt)("p",null,"Perfilar una funcion en en jupyter lab ees muy sencillo con el comando\n",(0,t.kt)("inlineCode",{parentName:"p"},"%lprun"),". Para ello vamos a crear una funcion de prueba que calcule el\ndoble de una lista de n\xfameros:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-python"},"\ndef funcion_prueba():\n    data = [1, 2, 3, 4, 5, 6, 7, 8, 9]\n    doble = []\n    for item in data:\n        doble.append(item * 2)\n    \n    return doble    \n")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-python"},"%lprun -f funcion_prueba funcion_prueba()\n")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-text"},"Timer unit: 1e-07 s\n\nTotal time: 8e-06 s\n\nCould not find file C:\\Users\\WillyCotrina\\AppData\\Local\\Temp\\ipykernel_14792\\1026023441.py\nAre you sure you are running this program from the same directory\nthat you ran the profiler from?\nContinuing without the function's contents.\n\nLine #      Hits         Time  Per Hit   % Time  Line Contents\n==============================================================\n     1                                           \n     2         1          7.0      7.0      8.8  \n     3         1          3.0      3.0      3.8  \n     4         9         24.0      2.7     30.0  \n     5         9         43.0      4.8     53.8  \n     6                                           \n     7         1          3.0      3.0      3.8\n")),(0,t.kt)("p",null,"Como pudimos notar pefilar una funcion es muy sencillo y extremaente\nutil para optimizar el codigo de un programa."))}d.isMDXComponent=!0}}]);