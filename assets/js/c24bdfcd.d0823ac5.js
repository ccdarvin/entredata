"use strict";(self.webpackChunkdocsweb=self.webpackChunkdocsweb||[]).push([[3394],{876:(e,n,a)=>{a.d(n,{Zo:()=>s,kt:()=>y});var t=a(2784);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function o(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function p(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?o(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function i(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=t.createContext({}),l=function(e){var n=t.useContext(c),a=n;return e&&(a="function"==typeof e?e(n):p(p({},n),e)),a},s=function(e){var n=l(e.components);return t.createElement(c.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=l(a),m=r,y=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return a?t.createElement(y,p(p({ref:n},s),{},{components:a})):t.createElement(y,p({ref:n},s))}));function y(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=a.length,p=new Array(o);p[0]=m;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i[u]="string"==typeof e?e:r,p[1]=i;for(var l=2;l<o;l++)p[l]=a[l];return t.createElement.apply(null,p)}return t.createElement.apply(null,a)}m.displayName="MDXCreateElement"},7508:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>p,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var t=a(7896),r=(a(2784),a(876));const o={title:"Vectorize de numpy vs apply de pandas",date:new Date("2023-06-01T00:00:00.000Z"),deescription:"Cual es la diferencia entre vectorize de numpy y apply de pandas",authors:["ccdarvin"],slug:"vectorize-numpy-vs-apply-pandas",tags:["python","pandas","numpy","vectorize","apply"]},p="\xbfCual es la diferencia entre vectorizar una funcion y aplicarla a un dataframe?",i={permalink:"/article/vectorize-numpy-vs-apply-pandas",source:"@site/blog/vectorize de numpy vs apply de pandas.md",title:"Vectorize de numpy vs apply de pandas",description:"Tanto numpy como pandas tienen funciones que permiten aplicar una",date:"2023-06-01T00:00:00.000Z",formattedDate:"1 de junio de 2023",tags:[{label:"python",permalink:"/article/tags/python"},{label:"pandas",permalink:"/article/tags/pandas"},{label:"numpy",permalink:"/article/tags/numpy"},{label:"vectorize",permalink:"/article/tags/vectorize"},{label:"apply",permalink:"/article/tags/apply"}],readingTime:.945,hasTruncateMarker:!1,authors:[{name:"Darvin Cotrina",title:"Creador de entredata.org",url:"https://github.com/ccdarvin",imageURL:"https://github.com/ccdarvin.png",key:"ccdarvin"}],frontMatter:{title:"Vectorize de numpy vs apply de pandas",date:"2023-06-01T00:00:00.000Z",deescription:"Cual es la diferencia entre vectorize de numpy y apply de pandas",authors:["ccdarvin"],slug:"vectorize-numpy-vs-apply-pandas",tags:["python","pandas","numpy","vectorize","apply"]},prevItem:{title:"Clustering",permalink:"/article/introduccion-a-los-algoritmos-de-clustering"},nextItem:{title:"\xbfComo perfilar c\xf3digo con line_profiler?",permalink:"/article/perfilar-codigo-con-line-profiler"}},c={authorsImageUrls:[void 0]},l=[],s={toc:l},u="wrapper";function d(e){let{components:n,...a}=e;return(0,r.kt)(u,(0,t.Z)({},s,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Tanto numpy como pandas tienen funciones que permiten aplicar una\nfuncion a un array o dataframe, respectivamente, de forma vectorizada.\nEsto significa que la funcion se aplica a todos los elementos del array\no dataframe, sin necesidad de iterar sobre ellos. Esto es mucho mas\neficiente que iterar sobre los elementos, ya que no se necesita hacer un\nloop en python, sino que la funcion se aplica en C."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"import numpy as np\nimport pandas as pd\n\n# comparaci\xf3n de vectorize de numpy vs apply de pandas\n\n# vectorize de numpy\ndef f(x):\n    return x**2 + 1\n\narray = np.arange(100000, dtype=np.int16)\n\n%timeit np.vectorize(f)(array)\n# pandas apply\ndf = pd.DataFrame({'x': array})\n%timeit df['x'].apply(f)\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"24.2 ms \xb1 1.56 ms per loop (mean \xb1 std. dev. of 7 runs, 10 loops each)\n40.7 ms \xb1 1.01 ms per loop (mean \xb1 std. dev. of 7 runs, 10 loops each)\n")),(0,r.kt)("p",null,"Esta es una comparaci\xf3n muy simple entre ambas formas de aplicar una\nfuncion, pero nos da una idea bastante clara de la diferencia de\nperformance entre ambas, como podemos ver vectorize fue mucho mas rapido\nque apply."))}d.isMDXComponent=!0}}]);