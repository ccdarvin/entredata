"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[246],{876:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>g});var a=n(2784);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=p(n),s=i,g=d["".concat(c,".").concat(s)]||d[s]||u[s]||r;return n?a.createElement(g,o(o({ref:t},m),{},{components:n})):a.createElement(g,o({ref:t},m))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=s;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[d]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},3182:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=n(7896),i=(n(2784),n(876));const r={title:"Comando m\xe1gico timeit - jupyter",description:"El comando m\xe1gico %timeit en Jupyter Lab es una forma conveniente de medir el tiempo de ejecuci\xf3n de una expresi\xf3n o una funci\xf3n directamente en tus celdas de c\xf3digo. Puedes utilizar %timeit para obtener r\xe1pidamente el tiempo promedio de ejecuci\xf3n y comparar diferentes enfoques de implementaci\xf3n.",slug:"comando-magico-timeit-jupyter",authors:["ccdarvin"],tags:["jupyter","python","timeit","magic command"],categories:["jupyter"]},o="Como usar el %timeit",l={permalink:"/comando-magico-timeit-jupyter",source:"@site/articles/tutorials/comando magico timeit - jupyter.md",title:"Comando m\xe1gico timeit - jupyter",description:"El comando m\xe1gico %timeit en Jupyter Lab es una forma conveniente de medir el tiempo de ejecuci\xf3n de una expresi\xf3n o una funci\xf3n directamente en tus celdas de c\xf3digo. Puedes utilizar %timeit para obtener r\xe1pidamente el tiempo promedio de ejecuci\xf3n y comparar diferentes enfoques de implementaci\xf3n.",date:"2023-05-31T21:10:17.292Z",formattedDate:"31 de mayo de 2023",tags:[{label:"jupyter",permalink:"/tags/jupyter"},{label:"python",permalink:"/tags/python"},{label:"timeit",permalink:"/tags/timeit"},{label:"magic command",permalink:"/tags/magic-command"}],readingTime:3.025,hasTruncateMarker:!1,authors:[{name:"Darvin Cotrina",title:"Creador de entredata.org",url:"https://github.com/ccdarvin",imageURL:"https://github.com/ccdarvin.png",key:"ccdarvin"}],frontMatter:{title:"Comando m\xe1gico timeit - jupyter",description:"El comando m\xe1gico %timeit en Jupyter Lab es una forma conveniente de medir el tiempo de ejecuci\xf3n de una expresi\xf3n o una funci\xf3n directamente en tus celdas de c\xf3digo. Puedes utilizar %timeit para obtener r\xe1pidamente el tiempo promedio de ejecuci\xf3n y comparar diferentes enfoques de implementaci\xf3n.",slug:"comando-magico-timeit-jupyter",authors:["ccdarvin"],tags:["jupyter","python","timeit","magic command"],categories:["jupyter"]},prevItem:{title:"\xbfComo perfilar c\xf3digo con line_profiler?",permalink:"/perfilar-codigo-con-line-profiler"},nextItem:{title:"tutorials",permalink:"/tutorials"}},c={authorsImageUrls:[void 0]},p=[{value:"1. Uso b\xe1sico de <code>%timeit</code>",id:"uso-b\xe1sico-de-timeit",level:2},{value:"2. Tabla de tiempos",id:"tabla-de-tiempos",level:2},{value:"3. Especificar el n\xfamero de ejecuciones y repeticiones",id:"especificar-el-n\xfamero-de-ejecuciones-y-repeticiones",level:2},{value:"5. Medir el tiempo de ejecuci\xf3n de una funci\xf3n",id:"medir-el-tiempo-de-ejecuci\xf3n-de-una-funci\xf3n",level:2},{value:"6. Medir el tiempo de ejecuci\xf3n de una celda",id:"medir-el-tiempo-de-ejecuci\xf3n-de-una-celda",level:2},{value:"7. Obtener el tiempo de ejecuci\xf3n como variable",id:"obtener-el-tiempo-de-ejecuci\xf3n-como-variable",level:2}],m={toc:p},d="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"El comando m\xe1gico ",(0,i.kt)("inlineCode",{parentName:"p"},"%timeit")," en Jupyter Lab es una forma conveniente de\nmedir el tiempo de ejecuci\xf3n de una expresi\xf3n o una funci\xf3n directamente\nen tus celdas de c\xf3digo. Puedes utilizar ",(0,i.kt)("inlineCode",{parentName:"p"},"%timeit")," para obtener\nr\xe1pidamente el tiempo promedio de ejecuci\xf3n y comparar diferentes\nenfoques de implementaci\xf3n."),(0,i.kt)("h2",{id:"uso-b\xe1sico-de-timeit"},"1. Uso b\xe1sico de ",(0,i.kt)("inlineCode",{parentName:"h2"},"%timeit")),(0,i.kt)("p",null,"Para utilizar ",(0,i.kt)("inlineCode",{parentName:"p"},"%timeit"),", simplemente coloca el comando m\xe1gico antes de\nla expresi\xf3n o funci\xf3n que deseas medir. Por ejemplo, para medir el\ntiempo de ejecuci\xf3n de la expresi\xf3n ",(0,i.kt)("inlineCode",{parentName:"p"},"'1 + 1'"),", puedes usar el siguiente\nc\xf3digo en una celda de Jupyter Lab:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"%timeit 1 + 1\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"10.1 ns \xb1 0.491 ns per loop (mean \xb1 std. dev. of 7 runs, 100,000,000 loops each)\n")),(0,i.kt)("p",null,"Despu\xe9s de ejecutar la celda, ",(0,i.kt)("inlineCode",{parentName:"p"},"%timeit")," ejecutar\xe1 la expresi\xf3n ",(0,i.kt)("inlineCode",{parentName:"p"},"'1 + 1'"),"\nvarias veces y mostrar\xe1 el tiempo promedio de ejecuci\xf3n. En este caso,\nel tiempo promedio de ejecuci\xf3n en unidades de tiempo"),(0,i.kt)("h2",{id:"tabla-de-tiempos"},"2. Tabla de tiempos"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Abreviatura"),(0,i.kt)("th",{parentName:"tr",align:null},"Unidad de tiempo"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"ns"),(0,i.kt)("td",{parentName:"tr",align:null},"nanosegundos")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"us"),(0,i.kt)("td",{parentName:"tr",align:null},"microsegundos")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"ms"),(0,i.kt)("td",{parentName:"tr",align:null},"milisegundos")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"s"),(0,i.kt)("td",{parentName:"tr",align:null},"segundos")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"m"),(0,i.kt)("td",{parentName:"tr",align:null},"minutos")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"h"),(0,i.kt)("td",{parentName:"tr",align:null},"horas")))),(0,i.kt)("h2",{id:"especificar-el-n\xfamero-de-ejecuciones-y-repeticiones"},"3. Especificar el n\xfamero de ejecuciones y repeticiones"),(0,i.kt)("p",null,"Por defecto, ",(0,i.kt)("inlineCode",{parentName:"p"},"%timeit")," ejecuta la expresi\xf3n o funci\xf3n 100.000 veces y\nrepite la operaci\xf3n tres veces. Puedes especificar el n\xfamero de\nejecuciones y repeticiones utilizando la sintaxis\n",(0,i.kt)("inlineCode",{parentName:"p"},"%timeit -r <repeticiones> -n <ejecuciones>"),". Por ejemplo, para ejecutar\nla expresi\xf3n ",(0,i.kt)("inlineCode",{parentName:"p"},"'1 + 1'")," 10.000 veces y repetir la operaci\xf3n cinco veces,\npuedes usar el siguiente c\xf3digo:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"%timeit -r5 -n50 1 + 1\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"25.6 ns \xb1 5.28 ns per loop (mean \xb1 std. dev. of 5 runs, 50 loops each)\n")),(0,i.kt)("p",null,"En el comando anterior espesificamps que se ejecute 50 veces en 5\nrepeticiones"),(0,i.kt)("h2",{id:"medir-el-tiempo-de-ejecuci\xf3n-de-una-funci\xf3n"},"5. Medir el tiempo de ejecuci\xf3n de una funci\xf3n"),(0,i.kt)("p",null,"Tambi\xe9n puedes utilizar ",(0,i.kt)("inlineCode",{parentName:"p"},"%timeit")," para medir el tiempo de ejecuci\xf3n de\nuna funci\xf3n. Por ejemplo, para medir el tiempo de ejecuci\xf3n de la\nfunci\xf3n ",(0,i.kt)("inlineCode",{parentName:"p"},"sum()")," de Python, puedes usar el siguiente c\xf3digo:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"def mi_funcion():\n    # puedes colocar cualquier c\xf3digo aqu\xed\n    return 1 + 1\n")),(0,i.kt)("p",null,"Jupyter Lab ejecutara el c\xf3digo y te devolvera el tiempo de ejecuci\xf3n de\nla funci\xf3n"),(0,i.kt)("h2",{id:"medir-el-tiempo-de-ejecuci\xf3n-de-una-celda"},"6. Medir el tiempo de ejecuci\xf3n de una celda"),(0,i.kt)("p",null,"Tambi\xe9n puedes utilizar ",(0,i.kt)("inlineCode",{parentName:"p"},"%timeit")," para medir el tiempo de ejecuci\xf3n de\nuna celda completa. Por ejemplo, para medir el tiempo de ejecuci\xf3n de la\nsiguiente celda, puedes usar el siguiente c\xf3digo:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"%%timeit\nx = 1\nx += 1\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"36.7 ns \xb1 1.13 ns per loop (mean \xb1 std. dev. of 7 runs, 10,000,000 loops each)\n")),(0,i.kt)("h2",{id:"obtener-el-tiempo-de-ejecuci\xf3n-como-variable"},"7. Obtener el tiempo de ejecuci\xf3n como variable"),(0,i.kt)("p",null,"En caso de que desees obtener informaci\xf3n m\xe1s detallada sobre el tiempo\nde ejecuci\xf3n, podrias asignar el resultado de ",(0,i.kt)("inlineCode",{parentName:"p"},"%timeit")," a una variable,\npara esto utilizaremos las opciones ",(0,i.kt)("inlineCode",{parentName:"p"},"-o")," para almacenar el resultado y\n-q para silenciar la salida de la celda. Por ejemplo, para obtener el\ntiempo de ejecuci\xf3n de la expresi\xf3n ",(0,i.kt)("inlineCode",{parentName:"p"},"'1 + 1'")," como una variable, puedes\nusar el siguiente c\xf3digo:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"resultado = %timeit -o -q 1 + 1\nprint(f'El mejor tiempo fue {resultado.best}')\nprint(f'El peor tiempo fue {resultado.worst}')\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"El mejor tiempo fue 9.775258000008763e-09\nEl peor tiempo fue 1.1235137999756262e-08\n")),(0,i.kt)("p",null,"Hemos visto de forma muy rapida como usar el comando magico ",(0,i.kt)("inlineCode",{parentName:"p"},"%timeit")," en\nJupyter Lab, con expresiones muy sencillas, pero en la practica se\nutiliza para medir el tiempo de ejecuci\xf3n de funciones y celdas\ncompletas, lo cual es muy util para comparar diferentes enfoques de\nimplementaci\xf3n."))}u.isMDXComponent=!0}}]);