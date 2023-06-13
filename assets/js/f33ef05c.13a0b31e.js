"use strict";(self.webpackChunkdocsweb=self.webpackChunkdocsweb||[]).push([[1547],{876:(a,e,n)=>{n.d(e,{Zo:()=>l,kt:()=>k});var t=n(2784);function s(a,e,n){return e in a?Object.defineProperty(a,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):a[e]=n,a}function m(a,e){var n=Object.keys(a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(a);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),n.push.apply(n,t)}return n}function r(a){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?m(Object(n),!0).forEach((function(e){s(a,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(n,e))}))}return a}function p(a,e){if(null==a)return{};var n,t,s=function(a,e){if(null==a)return{};var n,t,s={},m=Object.keys(a);for(t=0;t<m.length;t++)n=m[t],e.indexOf(n)>=0||(s[n]=a[n]);return s}(a,e);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(a);for(t=0;t<m.length;t++)n=m[t],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(a,n)&&(s[n]=a[n])}return s}var o=t.createContext({}),i=function(a){var e=t.useContext(o),n=e;return a&&(n="function"==typeof a?a(e):r(r({},e),a)),n},l=function(a){var e=i(a.components);return t.createElement(o.Provider,{value:e},a.children)},c="mdxType",N={inlineCode:"code",wrapper:function(a){var e=a.children;return t.createElement(t.Fragment,{},e)}},d=t.forwardRef((function(a,e){var n=a.components,s=a.mdxType,m=a.originalType,o=a.parentName,l=p(a,["components","mdxType","originalType","parentName"]),c=i(n),d=s,k=c["".concat(o,".").concat(d)]||c[d]||N[d]||m;return n?t.createElement(k,r(r({ref:e},l),{},{components:n})):t.createElement(k,r({ref:e},l))}));function k(a,e){var n=arguments,s=e&&e.mdxType;if("string"==typeof a||s){var m=n.length,r=new Array(m);r[0]=d;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=a,p[c]="string"==typeof a?a:s,r[1]=p;for(var i=2;i<m;i++)r[i]=n[i];return t.createElement.apply(null,r)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9427:(a,e,n)=>{n.r(e),n.d(e,{assets:()=>o,contentTitle:()=>r,default:()=>N,frontMatter:()=>m,metadata:()=>p,toc:()=>i});var t=n(7896),s=(n(2784),n(876));const m={},r=void 0,p={permalink:"/article/Arboles de desici\xf3n y m\xe9todos de ensamblaje",source:"@site/blog/Arboles de desici\xf3n y m\xe9todos de ensamblaje.md",title:"Arboles de desici\xf3n y m\xe9todos de ensamblaje",description:"{",date:"2023-06-13T02:48:22.000Z",formattedDate:"13 de junio de 2023",tags:[],readingTime:4.285,hasTruncateMarker:!1,authors:[],frontMatter:{},prevItem:{title:"Comando m\xe1gico timeit - jupyter",permalink:"/article/comando-magico-timeit-jupyter"},nextItem:{title:"Articulos",permalink:"/article/index"}},o={authorsImageUrls:[]},i=[],l={toc:i},c="wrapper";function N(a){let{components:e,...n}=a;return(0,s.kt)(c,(0,t.Z)({},l,n,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("p",null,'{\n"cells": [\n{\n"cell',(0,s.kt)("em",{parentName:"p"},'type": "raw",\n"metadata": {},\n"source": [\n"---\\n",\n"title: Arboles de decisi\xf3n y m\xe9todos de ensamble\\n",\n"decription: Introducci\xf3n a los arboles de decisi\xf3n y m\xe9todos de ensamble\\n",\n"slug: arboles-decision-ensamble\\n",\n"date: 2023-06-27\\n",\n"authors: ',"[ccdarvin]",'\\n",\n"tags: ',"[arboles de decisi\xf3n, metodos de ensamble, machine learning]",'\\n",\n"---"\n]\n},\n{\n"attachments": {},\n"cell_type": "markdown",\n"metadata": {},\n"source": [\n"# \xc1rboles de decisi\xf3n y m\xe9todos de ensamblaje\\n",\n"\\n",\n"## \xbfQue es un \xe1rbol de decisi\xf3n?\\n",\n"\\n",\n"Un \xe1rbol de decisi\xf3n es un modelo de predicci\xf3n utilizado en el \xe1mbito de la inteligencia artificial. Dada una base de datos se construye un \xe1rbol de decisi\xf3n para poder llegar a la conclusi\xf3n deseada. Es una herramienta de apoyo para la toma de decisiones.\\n",\n"\\n",\n"## \xbfQue es un m\xe9todo de ensamblaje?\\n",\n"\\n",\n"Los m\xe9todos de ensamblaje son m\xe9todos que combinan varios algoritmos de aprendizaje autom\xe1tico para obtener un mejor rendimiento predictivo que un solo algoritmo de aprendizaje autom\xe1tico. Los m\xe9todos de ensamblaje funcionan mejor cuando los predictores individuales est\xe1n correlacionados entre s\xed.\\n",\n"\\n",\n"\\n",\n"### Muestras con reemplazo\\n",\n"\\n",\n"En estad\xedstica, el muestreo con reemplazo es un m\xe9todo de muestreo en el que, para cada extracci\xf3n, el elemento elegido se devuelve a la poblaci\xf3n y se mezcla con el resto de elementos. El muestreo con reemplazo es un m\xe9todo de muestreo no exhaustivo.\\n",\n"\\n",\n"',(0,s.kt)("span",{parentName:"em",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"P"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("msub",{parentName:"mrow"},(0,s.kt)("mi",{parentName:"msub"},"x"),(0,s.kt)("mi",{parentName:"msub"},"i")),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")"),(0,s.kt)("mo",{parentName:"mrow"},"="),(0,s.kt)("mspace",{parentName:"mrow",linebreak:"newline"}),(0,s.kt)("mi",{parentName:"mrow"},"f"),(0,s.kt)("mi",{parentName:"mrow"},"r"),(0,s.kt)("mi",{parentName:"mrow"},"a"),(0,s.kt)("mi",{parentName:"mrow"},"c"),(0,s.kt)("mn",{parentName:"mrow"},"1"),(0,s.kt)("mi",{parentName:"mrow"},"N")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"P(x_i) = \\\\frac{1}{N}")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.13889em"}},"P"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"),(0,s.kt)("span",{parentName:"span",className:"msupsub"},(0,s.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.3117em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"i")))),(0,s.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,s.kt)("span",{parentName:"span"})))))),(0,s.kt)("span",{parentName:"span",className:"mclose"},")"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,s.kt)("span",{parentName:"span",className:"mrel"},"=")),(0,s.kt)("span",{parentName:"span",className:"mspace newline"}),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10764em"}},"f"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"r"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"c"),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord"},"1")),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10903em"}},"N")))))),'\\n",\n"\\n",\n"En arboles de decisi\xf3n se utiliza el muestreo con reemplazo para generar los \xe1rboles de decisi\xf3n que se utilizaran para el ensamblaje, es decir, se generan varios \xe1rboles de decisi\xf3n con muestras de la base de datos original, y se combinan para generar un modelo m\xe1s robusto.\\n",\n"\\n",\n"\\n",\n"## Random Forest\\n",\n"\\n",\n"Random Forest es un m\xe9todo de ensamblaje que combina varios \xe1rboles de decisi\xf3n, cada uno de los cuales se genera con una muestra de la base de datos original, y se combinan para generar un modelo m\xe1s robusto. esteme metodo usa el muestreo con reemplazo para generar los \xe1rboles de decisi\xf3n.\\n",\n"\\n",\n"Tenemos un datos de entrenamiento de tama\xf1o ',(0,s.kt)("span",{parentName:"em",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"m")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"m")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"m"))))),'\\n",\n"',(0,s.kt)("em",{parentName:"em"}," para b = 1 hasta B: Utilizamos el muestreo con reemplazo para generar una muestra de tama\xf1o ",(0,s.kt)("span",{parentName:"em",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"m")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"m")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"m")))))," de la base de datos original. Entrenamos un \xe1rbol de decisi\xf3n ",(0,s.kt)("span",{parentName:"em",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("msub",{parentName:"mrow"},(0,s.kt)("mi",{parentName:"msub"},"T"),(0,s.kt)("mi",{parentName:"msub"},"b"))),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"T_b")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8333em",verticalAlign:"-0.15em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.13889em"}},"T"),(0,s.kt)("span",{parentName:"span",className:"msupsub"},(0,s.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.3361em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"-0.1389em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"b")))),(0,s.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,s.kt)("span",{parentName:"span"})))))))))),' con la muestra generada.\\n",\n"')," Se obtiene el modelo final combinando los ",(0,s.kt)("span",{parentName:"em",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"B")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"B")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6833em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.05017em"}},"B"))))),' \xe1rboles de decisi\xf3n generados.\\n",\n"\\n",\n"\\n",\n"Cuando usamos este algorithmo, muchas veces tenemos la misma divisi\xf3n en el nodo ra\xedz, por lo que podemos modificar un poco el algorithmo para que esto no suceda, y as\xed obtener un mejor modelo.\\n",\n"\\n",\n"### Elecci\xf3n de caracter\xedsticas aleatorias\\n",\n"\\n",\n"En cada nodo, se elige un subconjunto aleatorio de ',(0,s.kt)("span",{parentName:"em",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"k")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"k")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6944em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03148em"}},"k")))))," caracter\xedsticas de todo el conjunto de caracter\xedsticas. si ",(0,s.kt)("span",{parentName:"em",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"n")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"n")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n")))))," es el n\xfamero total de caracter\xedsticas, se recomienda ",(0,s.kt)("span",{parentName:"em",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"k"),(0,s.kt)("mo",{parentName:"mrow"},"="),(0,s.kt)("mspace",{parentName:"mrow",linebreak:"newline"}),(0,s.kt)("mi",{parentName:"mrow"},"s"),(0,s.kt)("mi",{parentName:"mrow"},"q"),(0,s.kt)("mi",{parentName:"mrow"},"r"),(0,s.kt)("mi",{parentName:"mrow"},"t"),(0,s.kt)("mi",{parentName:"mrow"},"n")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"k = \\\\sqrt{n}")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6944em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03148em"}},"k"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,s.kt)("span",{parentName:"span",className:"mrel"},"=")),(0,s.kt)("span",{parentName:"span",className:"mspace newline"}),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8095em",verticalAlign:"-0.1944em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"s"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"q"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"r"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"))))))," para la regresi\xf3n y ",(0,s.kt)("span",{parentName:"em",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"k"),(0,s.kt)("mo",{parentName:"mrow"},"="),(0,s.kt)("mspace",{parentName:"mrow",linebreak:"newline"}),(0,s.kt)("mi",{parentName:"mrow"},"f"),(0,s.kt)("mi",{parentName:"mrow"},"r"),(0,s.kt)("mi",{parentName:"mrow"},"a"),(0,s.kt)("mi",{parentName:"mrow"},"c"),(0,s.kt)("mi",{parentName:"mrow"},"n"),(0,s.kt)("mn",{parentName:"mrow"},"3")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"k = \\\\frac{n}{3}")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6944em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03148em"}},"k"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,s.kt)("span",{parentName:"span",className:"mrel"},"=")),(0,s.kt)("span",{parentName:"span",className:"mspace newline"}),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10764em"}},"f"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"r"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"c"),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n")),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord"},"3")))))),' para la clasificaci\xf3n, debe de tener en cuenta que esto es recomendado para un gran n\xfamero de caracter\xedsticas\\n",\n"\\n",\n"## XGBoost ( ExTreme Gradient Boosting)\\n",\n"\\n",\n"XGBoost es un m\xe9todo de ensamblaje que combina varios \xe1rboles de decisi\xf3n, cada uno de los cuales se genera con una muestra de la base de datos original, y se combinan para generar un modelo m\xe1s robusto. este metodo usa el muestreo con reemplazo para generar los \xe1rboles de decisi\xf3n.\\n",\n"\\n",\n"Pero a diferencia de Random Forest, XGBoost utiliza un algorithmo de optimizaci\xf3n para generar los \xe1rboles de decisi\xf3n, En vez de utilizar el muestreo con reemplazo para generar los \xe1rboles de decisi\xf3n con una probabilidad uniforme ',(0,s.kt)("span",{parentName:"em",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mn",{parentName:"mrow"},"1"),(0,s.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"/"),(0,s.kt)("mi",{parentName:"mrow"},"m")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"1/m")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"1/"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"m"))))),", XGBoost utiliza un algorithmo de optimizaci\xf3n para generar los \xe1rboles de decisi\xf3n con una probabilidad ",(0,s.kt)("span",{parentName:"em",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("msub",{parentName:"mrow"},(0,s.kt)("mi",{parentName:"msub"},"p"),(0,s.kt)("mi",{parentName:"msub"},"i"))),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"p_i")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.625em",verticalAlign:"-0.1944em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"p"),(0,s.kt)("span",{parentName:"span",className:"msupsub"},(0,s.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.3117em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"i")))),(0,s.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,s.kt)("span",{parentName:"span"})))))))))),' que depende de la p\xe9rdida de la iteraci\xf3n anterior.\\n",\n"\\n",\n"$$p_i = ',"\\","frac{e^{","\\","frac{-","\\","Delta L_i}{","\\","lambda}}}{","\\","sum"),"{i=1}^{m} e^{","\\","frac{-","\\","Delta L_i}{","\\","lambda}}}$",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex-error",title:"ParseError: KaTeX parse error: Can't use function '$' in math mode at position 30: \u2026Donde:\\n\",  \"* $\u0332\\\\Delta L_i",style:{color:"#cc0000"}},'\\n",  "\\n",  "Donde:\\n",  "* $\\\\Delta L_i'))," es la p\xe9rdida de la iteraci\xf3n ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"i")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"i")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6595em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"i"))))),'\\n",\n"',(0,s.kt)("em",{parentName:"p"}," ",(0,s.kt)("span",{parentName:"em",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mspace",{parentName:"mrow",linebreak:"newline"}),(0,s.kt)("mi",{parentName:"mrow"},"l"),(0,s.kt)("mi",{parentName:"mrow"},"a"),(0,s.kt)("mi",{parentName:"mrow"},"m"),(0,s.kt)("mi",{parentName:"mrow"},"b"),(0,s.kt)("mi",{parentName:"mrow"},"d"),(0,s.kt)("mi",{parentName:"mrow"},"a")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\\\lambda")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"mspace newline"}),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6944em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.01968em"}},"l"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"amb"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"d"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"a"))))),' es un par\xe1metro de regularizaci\xf3n\\n",\n"\\n",\n"La idea de esto es que el algorithmo de optimizaci\xf3n se enfoque en las muestras que tienen una p\xe9rdida mayor, y as\xed generar un mejor modelo.\\n",\n"\\n",\n"### Ventajas de XGBoost\\n",\n"\\n",\n"'),' Implementaci\xf3nes open source en varios lenguajes de programaci\xf3n\\n",\n"',(0,s.kt)("em",{parentName:"p"},' Rapidez en el entrenamiento\\n",\n"'),' Buena elecci\xf3n de divisi\xf3nes criticas por defecto y criterio para cuando parar de dividir\\n",\n"',(0,s.kt)("em",{parentName:"p"},' Regularizaci\xf3n para evitar el sobreajuste\\n",\n"\\n",\n"### Implementaci\xf3n en Python\\n",\n"\\n",\n"Para la implementaci\xf3n en Python, se utilizara la librer\xeda XGBoost, la cual se puede instalar con el comando:\\n",\n"\\n",\n"',(0,s.kt)("inlineCode",{parentName:"em"},'python\\n",\n    "from xgboost import XGBClassifier\\n",\n    "model = XGBClassifier() # XGBRegressor para regresi\xf3n\\n",\n    "model.fit(X_train, y_train)\\n",\n    "y_pred = model.predict(X_test)\\n",\n    "'),'\\n",\n"\\n",\n"## Cuando usar Arboles de decisi\xf3n y m\xe9todos de ensamblaje\\n",\n"\\n",\n"'),' Trabajan bien con datos tabulares (estructurados)\\n",\n"',(0,s.kt)("em",{parentName:"p"},' No se recomienda para datos no estructurados (im\xe1genes, texto, audio, etc)\\n",\n"'),' Es muy r\xe1pido en entrenamiento y predicci\xf3n\\n",\n"',(0,s.kt)("em",{parentName:"p"},' Peque\xf1os arboles de decisi\xf3n son f\xe1ciles de interpretar (visualizar)\\n",\n"\\n",\n"## Cuando usar neural networks\\n",\n"\\n",\n"'),' Trabaja bien con todo tipo de datos tabulares \\"estructurados\\" y \\"no estructurados\\"\\n",\n"',(0,s.kt)("em",{parentName:"p"},' Puede ser lento en entrenamiento y predicci\xf3n\\n",\n"'),' Trabaja con transfer learning\\n",\n"* Cuando trabajamos con multiples modelos juntos, puede ser mas sencillo encadenarlos con una red neuronal"\n]\n}\n],\n"metadata": {\n"language_info": {\n"name": "python"\n},\n"orig_nbformat": 4\n},\n"nbformat": 4,\n"nbformat_minor": 2\n}'))}N.isMDXComponent=!0}}]);