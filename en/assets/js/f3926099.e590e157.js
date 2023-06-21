"use strict";(self.webpackChunkdocsweb=self.webpackChunkdocsweb||[]).push([[6893],{876:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var a=n(2784);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(n),m=r,g=p["".concat(c,".").concat(m)]||p[m]||d[m]||l;return n?a.createElement(g,o(o({ref:t},u),{},{components:n})):a.createElement(g,o({ref:t},u))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3971:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var a=n(7896),r=(n(2784),n(876));const l={title:"Expresiones regulares en Python",slug:"expresiones-regulares-python",date:new Date("2023-06-08T00:00:00.000Z"),authors:["ccdarvin"],tags:["python","Expresiones regulares"]},o="Expresiones Regulares en Python",i={permalink:"/en/article/expresiones-regulares-python",source:"@site/blog/Regex en Python.md",title:"Expresiones regulares en Python",description:"Las expresiones regulares son una secuencia de caracteres que forman un",date:"2023-06-08T00:00:00.000Z",formattedDate:"June 8, 2023",tags:[{label:"python",permalink:"/en/article/tags/python"},{label:"Expresiones regulares",permalink:"/en/article/tags/expresiones-regulares"}],readingTime:3.03,hasTruncateMarker:!1,authors:[{name:"Darvin Cotrina",title:"Creador de entredata.org",url:"https://github.com/ccdarvin",imageURL:"https://github.com/ccdarvin.png",key:"ccdarvin"}],frontMatter:{title:"Expresiones regulares en Python",slug:"expresiones-regulares-python",date:"2023-06-08T00:00:00.000Z",authors:["ccdarvin"],tags:["python","Expresiones regulares"]},prevItem:{title:"Teorema de limite central",permalink:"/en/article/teorema-de-limite-central"},nextItem:{title:"Distribuci\xf3n de poisson - python",permalink:"/en/article/distribucion-de-poisson-python"}},c={authorsImageUrls:[void 0]},s=[{value:"Caracteres especiales",id:"caracteres-especiales",level:2},{value:"Trabajando en python",id:"trabajando-en-python",level:2},{value:"Encontrar todas las coincidencias",id:"encontrar-todas-las-coincidencias",level:3},{value:"Sustituir un patr\xf3n en una cadena de caracteres",id:"sustituir-un-patr\xf3n-en-una-cadena-de-caracteres",level:3},{value:"Dividir una cadena de caracteres",id:"dividir-una-cadena-de-caracteres",level:3}],u={toc:s},p="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Las expresiones regulares son una secuencia de caracteres que forman un\npatr\xf3n de b\xfasqueda, principalmente utilizadas para la b\xfasqueda de\npatrones de cadenas de caracteres u operaciones de sustituciones."),(0,r.kt)("h2",{id:"caracteres-especiales"},"Caracteres especiales"),(0,r.kt)("p",null,"Los caracteres especiales son aquellos que tienen un significado\nespecial para las expresiones regulares. Por ejemplo, el punto y coma\n(;) es un caracter especial que se utiliza para separar instrucciones en\nPython. Sin embargo, en las expresiones regulares, el punto y coma (;)\nes un caracter especial que se utiliza para indicar que el patr\xf3n de\nb\xfasqueda debe coincidir con cualquier caracter."),(0,r.kt)("p",null,"A continuaci\xf3n se muestra una lista de los caracteres especiales m\xe1s\nutilizados en las expresiones regulares:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Caracter"),(0,r.kt)("th",{parentName:"tr",align:null},"Descripci\xf3n"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"."),(0,r.kt)("td",{parentName:"tr",align:null},"Coincide con cualquier caracter")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"^"),(0,r.kt)("td",{parentName:"tr",align:null},"Coincide con el inicio de una cadena")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"$"),(0,r.kt)("td",{parentName:"tr",align:null},"Coincide con el final de una cadena")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"*"),(0,r.kt)("td",{parentName:"tr",align:null},"Coincide con 0 o m\xe1s ocurrencias del caracter anterior")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"+"),(0,r.kt)("td",{parentName:"tr",align:null},"Coincide con 1 o m\xe1s ocurrencias del caracter anterior")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"?"),(0,r.kt)("td",{parentName:"tr",align:null},"Coincide con 0 o 1 ocurrencia del caracter anterior")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"{n}"),(0,r.kt)("td",{parentName:"tr",align:null},"Coincide con n ocurrencias del caracter anterior")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"{n,}"),(0,r.kt)("td",{parentName:"tr",align:null},"Coincide con n o m\xe1s ocurrencias del caracter anterior")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"{n,m}"),(0,r.kt)("td",{parentName:"tr",align:null},"Coincide con un rango de ocurrencias del caracter anterior")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"[","\u2026","]"),(0,r.kt)("td",{parentName:"tr",align:null},"Coincide con cualquier caracter dentro de los corchetes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"[","^...","]"),(0,r.kt)("td",{parentName:"tr",align:null},"Coincide con cualquier caracter que no est\xe9 dentro de los corchetes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"(\u2026)"),(0,r.kt)("td",{parentName:"tr",align:null},"Agrupa una serie de patrones")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Coincide con un espacio en blanco")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Coincide con cualquier caracter que no sea un espacio en blanco")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Coincide con cualquier caracter alfanum\xe9rico")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Coincide con cualquier caracter que no sea alfanum\xe9rico")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Coincide con cualquier caracter num\xe9rico"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Coincide con cualquier caracter que no sea num\xe9rico")))),(0,r.kt)("h2",{id:"trabajando-en-python"},"Trabajando en python"),(0,r.kt)("p",null,"para trabajar con expresiones regulares en python, se debe importar el\nm\xf3dulo re. A continuaci\xf3n se muestra un ejemplo de como utilizar el\nm\xf3dulo re para buscar un patr\xf3n en una cadena de caracteres:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"import re\n")),(0,r.kt)("h3",{id:"encontrar-todas-las-coincidencias"},"Encontrar todas las coincidencias"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'text = "Hola, mi nombre es Juan y mi n\xfamero de tel\xe9fono es 123456789"\npattern = r"mi"\n\nprint(re.findall(pattern, text))\npattern = r"\\d+"\nprint(re.findall(pattern, text))\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"['mi', 'mi']\n['123456789']\n")),(0,r.kt)("h3",{id:"sustituir-un-patr\xf3n-en-una-cadena-de-caracteres"},"Sustituir un patr\xf3n en una cadena de caracteres"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'text = "Hol, mi nombre es Juan y mi nUmero de tel\xe9fono es 123456789"\n\ntext = re.sub(r"Hol", "Hola", text)\nprint(text)\ntext = re.sub(r"U", "\xfa", text)\nprint(text)\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"Hola, mi nombre es Juan y mi nUmero de tel\xe9fono es 123456789\nHola, mi nombre es Juan y mi n\xfamero de tel\xe9fono es 123456789\n")),(0,r.kt)("h3",{id:"dividir-una-cadena-de-caracteres"},"Dividir una cadena de caracteres"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'text = "Hola, mi nombre es Juan y mi n\xfamero de tel\xe9fono es 123456789"\n\ntext_split = re.split(r"y", text)\ntext_split\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"['Hola, mi nombre es Juan ', ' mi n\xfamero de tel\xe9fono es 123456789']\n")),(0,r.kt)("p",null,"Python tambien tiene integrado funciones de expresiones regulares en el\nm\xf3dulo string."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'text = "Hola, mi nombre es Juan y mi n\xfamero de tel\xe9fono es 123456789"\nprint(text.replace("Juan", "Darvin"))\nprint(text.split(\',\'))\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"Hola, mi nombre es Darvin y mi n\xfamero de tel\xe9fono es 123456789\n['Hola', ' mi nombre es Juan y mi n\xfamero de tel\xe9fono es 123456789']\n")),(0,r.kt)("p",null,"Estos son solo alguno de todos los metodos que tiene python para\ntrabajar con expresiones regulares. Para m\xe1s informaci\xf3n, puede\nconsultar la documentaci\xf3n oficial de python en el siguiente enlace:\n",(0,r.kt)("a",{parentName:"p",href:"https://docs.python.org/3/library/re.html"},"https://docs.python.org/3/library/re.html")))}d.isMDXComponent=!0}}]);