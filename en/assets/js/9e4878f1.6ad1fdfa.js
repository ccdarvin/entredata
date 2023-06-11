"use strict";(self.webpackChunkdocsweb=self.webpackChunkdocsweb||[]).push([[3885],{876:(e,n,r)=>{r.d(n,{Zo:()=>u,kt:()=>f});var t=r(2784);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=t.createContext({}),c=function(e){var n=t.useContext(p),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},u=function(e){var n=c(e.components);return t.createElement(p.Provider,{value:n},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=c(r),m=a,f=s["".concat(p,".").concat(m)]||s[m]||d[m]||i;return r?t.createElement(f,o(o({ref:n},u),{},{components:r})):t.createElement(f,o({ref:n},u))}));function f(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[s]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return t.createElement.apply(null,o)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7128:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var t=r(7896),a=(r(2784),r(876));const i={title:"\xbfComo perfilar c\xf3digo con line_profiler?",description:"Perfilar c\xf3digo nos permite identificar las partes de nuestro c\xf3digo que son m\xe1s lentas y optimizarlas.",lang:"es",authors:["ccdarvin"],slug:"perfilar-codigo-con-line-profiler",date:new Date("2023-05-03T00:00:00.000Z"),tags:["python","perfilar","line_profiler","optimizar c\xf3digo"]},o="Perfilar c\xf3digo con line_profiler {#perfilar-c\xf3digo-con-line_profiler}",l={permalink:"/en/article/perfilar-codigo-con-line-profiler",source:"@site/blog/perfilar codigo con line_profiler.md",title:"\xbfComo perfilar c\xf3digo con line_profiler?",description:"Perfilar c\xf3digo nos permite identificar las partes de nuestro c\xf3digo que son m\xe1s lentas y optimizarlas.",date:"2023-05-03T00:00:00.000Z",formattedDate:"May 3, 2023",tags:[{label:"python",permalink:"/en/article/tags/python"},{label:"perfilar",permalink:"/en/article/tags/perfilar"},{label:"line_profiler",permalink:"/en/article/tags/line-profiler"},{label:"optimizar c\xf3digo",permalink:"/en/article/tags/optimizar-codigo"}],readingTime:1.665,hasTruncateMarker:!1,authors:[{name:"Darvin Cotrina",title:"Creador de entredata.org",url:"https://github.com/ccdarvin",imageURL:"https://github.com/ccdarvin.png",key:"ccdarvin"}],frontMatter:{title:"\xbfComo perfilar c\xf3digo con line_profiler?",description:"Perfilar c\xf3digo nos permite identificar las partes de nuestro c\xf3digo que son m\xe1s lentas y optimizarlas.",lang:"es",authors:["ccdarvin"],slug:"perfilar-codigo-con-line-profiler",date:"2023-05-03T00:00:00.000Z",tags:["python","perfilar","line_profiler","optimizar c\xf3digo"]},prevItem:{title:"Distribuci\xf3n binomial - python",permalink:"/en/article/distribucion-binomial-python"},nextItem:{title:"Arbol de Desici\xf3n, conceptos b\xe1sicos",permalink:"/en/article/arbol-decision-conceptos-basicos"}},p={authorsImageUrls:[void 0]},c=[{value:"Instalaci\xf3n",id:"instalaci\xf3n",level:2},{value:"\xbfC\xf3mo funciona en Jupyter?",id:"c\xf3mo-funciona-en-jupyter",level:2},{value:"Perfilando una funci\xf3n",id:"perfilando-una-funci\xf3n",level:2}],u={toc:c},s="wrapper";function d(e){let{components:n,...r}=e;return(0,a.kt)(s,(0,t.Z)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\xbfAlguna vez has tenido que optimizar el c\xf3digo de un programa?\n",(0,a.kt)("inlineCode",{parentName:"p"},"line_profiler")," es una herramienta que te permite perfilar el c\xf3digo de\nun programa para encontrar las partes que m\xe1s tiempo consumen. En este\nnotebook veremos c\xf3mo usarla."),(0,a.kt)("h2",{id:"instalaci\xf3n"},"Instalaci\xf3n"),(0,a.kt)("p",null,"Como ",(0,a.kt)("inlineCode",{parentName:"p"},"line_profiler")," no viene instalado por defecto en Anaconda, lo\ninstalaremos con ",(0,a.kt)("inlineCode",{parentName:"p"},"conda"),":"),(0,a.kt)("p",null,"En la terminal:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"pip install line_profiler\n")),(0,a.kt)("p",null,"En el notebook:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"! pip install line_profiler\n")),(0,a.kt)("h2",{id:"c\xf3mo-funciona-en-jupyter"},"\xbfC\xf3mo funciona en Jupyter?"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"line_profiler")," es una herramienta que permite perfilar el c\xf3digo de un\nprograma. Esto significa que nos permite ver cu\xe1nto tiempo se tarda en\nejecutar cada l\xednea de c\xf3digo. Para ello, ",(0,a.kt)("inlineCode",{parentName:"p"},"line_profiler")," nos permite\nusar el comando ",(0,a.kt)("inlineCode",{parentName:"p"},"%lprun")," en Jupyter. Este comando nos permite perfilar\nuna funci\xf3n. Para ello, debemos a\xf1adir el decorador ",(0,a.kt)("inlineCode",{parentName:"p"},"@profile")," a la\nfunci\xf3n que queremos perfilar."),(0,a.kt)("p",null,"cargar el m\xf3dulo ",(0,a.kt)("inlineCode",{parentName:"p"},"line_profiler")," en el notebook:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"%load_ext line_profiler\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"The line_profiler extension is already loaded. To reload it, use:\n  %reload_ext line_profiler\n")),(0,a.kt)("h2",{id:"perfilando-una-funci\xf3n"},"Perfilando una funci\xf3n"),(0,a.kt)("p",null,"Perfilar una funcion en en jupyter lab ees muy sencillo con el comando\n",(0,a.kt)("inlineCode",{parentName:"p"},"%lprun"),". Para ello vamos a crear una funcion de prueba que calcule el\ndoble de una lista de n\xfameros:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"\ndef funcion_prueba():\n    data = [1, 2, 3, 4, 5, 6, 7, 8, 9]\n    doble = []\n    for item in data:\n        doble.append(item * 2)\n    \n    return doble    \n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"%lprun -f funcion_prueba funcion_prueba()\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"Timer unit: 1e-07 s\n\nTotal time: 8e-06 s\n\nCould not find file C:\\Users\\WillyCotrina\\AppData\\Local\\Temp\\ipykernel_14792\\1026023441.py\nAre you sure you are running this program from the same directory\nthat you ran the profiler from?\nContinuing without the function's contents.\n\nLine #      Hits         Time  Per Hit   % Time  Line Contents\n==============================================================\n     1                                           \n     2         1          7.0      7.0      8.8  \n     3         1          3.0      3.0      3.8  \n     4         9         24.0      2.7     30.0  \n     5         9         43.0      4.8     53.8  \n     6                                           \n     7         1          3.0      3.0      3.8\n")),(0,a.kt)("p",null,"Como pudimos notar pefilar una funcion es muy sencillo y extremaente\nutil para optimizar el codigo de un programa."))}d.isMDXComponent=!0}}]);