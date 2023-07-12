"use strict";(self.webpackChunkdocsweb=self.webpackChunkdocsweb||[]).push([[829],{876:(a,t,e)=>{e.d(t,{Zo:()=>o,kt:()=>N});var n=e(2784);function r(a,t,e){return t in a?Object.defineProperty(a,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):a[t]=e,a}function l(a,t){var e=Object.keys(a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable}))),e.push.apply(e,n)}return e}function s(a){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?l(Object(e),!0).forEach((function(t){r(a,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(e)):l(Object(e)).forEach((function(t){Object.defineProperty(a,t,Object.getOwnPropertyDescriptor(e,t))}))}return a}function p(a,t){if(null==a)return{};var e,n,r=function(a,t){if(null==a)return{};var e,n,r={},l=Object.keys(a);for(n=0;n<l.length;n++)e=l[n],t.indexOf(e)>=0||(r[e]=a[e]);return r}(a,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(a);for(n=0;n<l.length;n++)e=l[n],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(a,e)&&(r[e]=a[e])}return r}var m=n.createContext({}),i=function(a){var t=n.useContext(m),e=t;return a&&(e="function"==typeof a?a(t):s(s({},t),a)),e},o=function(a){var t=i(a.components);return n.createElement(m.Provider,{value:t},a.children)},d="mdxType",c={inlineCode:"code",wrapper:function(a){var t=a.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(a,t){var e=a.components,r=a.mdxType,l=a.originalType,m=a.parentName,o=p(a,["components","mdxType","originalType","parentName"]),d=i(e),k=r,N=d["".concat(m,".").concat(k)]||d[k]||c[k]||l;return e?n.createElement(N,s(s({ref:t},o),{},{components:e})):n.createElement(N,s({ref:t},o))}));function N(a,t){var e=arguments,r=t&&t.mdxType;if("string"==typeof a||r){var l=e.length,s=new Array(l);s[0]=k;var p={};for(var m in t)hasOwnProperty.call(t,m)&&(p[m]=t[m]);p.originalType=a,p[d]="string"==typeof a?a:r,s[1]=p;for(var i=2;i<l;i++)s[i]=e[i];return n.createElement.apply(null,s)}return n.createElement.apply(null,e)}k.displayName="MDXCreateElement"},1034:(a,t,e)=>{e.r(t),e.d(t,{assets:()=>m,contentTitle:()=>s,default:()=>k,frontMatter:()=>l,metadata:()=>p,quartoRawHtml:()=>o,toc:()=>i});var n=e(7896),r=(e(2784),e(876));const l={title:"Comparar series de tiempo",description:"Comparar series de tiempo con pandas y matplotlib, usando datos de acciones.",date:new Date("2023-07-12T00:00:00.000Z"),authors:["ccdarvin"],tags:["python","pandas","matplotlib","series de tiempo","finanzas"]},s=void 0,p={permalink:"/en/article/Compare-time-series-growth-rates",source:"@site/blog/Compare-time-series-growth-rates.md",title:"Comparar series de tiempo",description:"Comparar series de tiempo con pandas y matplotlib, usando datos de acciones.",date:"2023-07-12T00:00:00.000Z",formattedDate:"July 12, 2023",tags:[{label:"python",permalink:"/en/article/tags/python"},{label:"pandas",permalink:"/en/article/tags/pandas"},{label:"matplotlib",permalink:"/en/article/tags/matplotlib"},{label:"series de tiempo",permalink:"/en/article/tags/series-de-tiempo"},{label:"finanzas",permalink:"/en/article/tags/finanzas"}],readingTime:2.72,hasTruncateMarker:!1,authors:[{name:"Darvin Cotrina",title:"Creador de entredata.org",url:"https://github.com/ccdarvin",imageURL:"https://github.com/ccdarvin.png",key:"ccdarvin"}],frontMatter:{title:"Comparar series de tiempo",description:"Comparar series de tiempo con pandas y matplotlib, usando datos de acciones.",date:"2023-07-12T00:00:00.000Z",authors:["ccdarvin"],tags:["python","pandas","matplotlib","series de tiempo","finanzas"]},nextItem:{title:"\xbfComo ver los d\xedas de la semana usando pandas?",permalink:"/en/article/how-to-see-the-days-of-the-week-with-pandas"}},m={authorsImageUrls:[void 0]},i=[{value:"1. Importar librer\xedas",id:"importar-librer\xedas",level:2},{value:"2. Obtener datos",id:"obtener-datos",level:2},{value:"3. Normalizar datos",id:"normalizar-datos",level:2},{value:"4. Graficar datos",id:"graficar-datos",level:2},{value:"5. Conclusiones",id:"conclusiones",level:2}],o=["<div>\n<style scoped>\n    .dataframe tbody tr th:only-of-type {\n        vertical-align: middle;\n    }\n    .dataframe tbody tr th {\n        vertical-align: top;\n    }\n    .dataframe thead th {\n        text-align: right;\n    }\n</style>\n","\n</div>","<div>\n<style scoped>\n    .dataframe tbody tr th:only-of-type {\n        vertical-align: middle;\n    }\n    .dataframe tbody tr th {\n        vertical-align: top;\n    }\n    .dataframe thead th {\n        text-align: right;\n    }\n</style>\n","\n</div>"],d={toc:i,quartoRawHtml:o},c="wrapper";function k(a){let{components:t,...l}=a;return(0,r.kt)(c,(0,n.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"comparar-series-de-tiempo-con-pandas"},"Comparar series de tiempo con pandas"),(0,r.kt)("p",null,"Comparar series de tiempo con pandas, de algunas acciones de las\nprincipales empresas tecnol\xf3gicas."),(0,r.kt)("h2",{id:"importar-librer\xedas"},"1. Importar librer\xedas"),(0,r.kt)("p",null,"Para este ejercicio, se necesitara de las siguientes librer\xedas:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pip install pandas\npip install matplotlib\npip install yfinance\n")),(0,r.kt)("p",null,"Usaremos la librer\xeda ",(0,r.kt)("inlineCode",{parentName:"p"},"yfinance")," para obtener los datos de las acciones\nde las empresas tecnol\xf3gicas, hay otras librear\xedas que tambi\xe9n pueden\nayudar con esta tarea como ",(0,r.kt)("inlineCode",{parentName:"p"},"pandas_datareader")," o ",(0,r.kt)("inlineCode",{parentName:"p"},"quandl"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"import pandas as pd\nimport matplotlib.pyplot as plt\nimport yfinance as yf\n")),(0,r.kt)("h2",{id:"obtener-datos"},"2. Obtener datos"),(0,r.kt)("p",null,"Para este ejemplo, se obtendr\xe1n los datos de las acciones de las\nempresas tecnol\xf3gicas desde el 2015 de google, amazon, facebook, apple y\nmicrosoft."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"tickets = ['GOOG', 'AMZN', 'META', 'AAPL', 'MSFT']\nstart_date = '2015-01-01'\nend_date = '2023-01-01'\n\ndf = yf.download(tickets, start=start_date, end=end_date)['Adj Close']\ndf.head()\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"[*********************100%***********************]  5 of 5 completed\n")),(0,r.kt)("div",{dangerouslySetInnerHTML:{__html:o[0]}}),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null},"AAPL"),(0,r.kt)("th",{parentName:"tr",align:null},"AMZN"),(0,r.kt)("th",{parentName:"tr",align:null},"GOOG"),(0,r.kt)("th",{parentName:"tr",align:null},"META"),(0,r.kt)("th",{parentName:"tr",align:null},"MSFT"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Date"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2015-01-02"),(0,r.kt)("td",{parentName:"tr",align:null},"24.531763"),(0,r.kt)("td",{parentName:"tr",align:null},"15.4260"),(0,r.kt)("td",{parentName:"tr",align:null},"26.168653"),(0,r.kt)("td",{parentName:"tr",align:null},"78.449997"),(0,r.kt)("td",{parentName:"tr",align:null},"40.620667")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2015-01-05"),(0,r.kt)("td",{parentName:"tr",align:null},"23.840666"),(0,r.kt)("td",{parentName:"tr",align:null},"15.1095"),(0,r.kt)("td",{parentName:"tr",align:null},"25.623152"),(0,r.kt)("td",{parentName:"tr",align:null},"77.190002"),(0,r.kt)("td",{parentName:"tr",align:null},"40.247116")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2015-01-06"),(0,r.kt)("td",{parentName:"tr",align:null},"23.842913"),(0,r.kt)("td",{parentName:"tr",align:null},"14.7645"),(0,r.kt)("td",{parentName:"tr",align:null},"25.029282"),(0,r.kt)("td",{parentName:"tr",align:null},"76.150002"),(0,r.kt)("td",{parentName:"tr",align:null},"39.656406")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2015-01-07"),(0,r.kt)("td",{parentName:"tr",align:null},"24.177238"),(0,r.kt)("td",{parentName:"tr",align:null},"14.9210"),(0,r.kt)("td",{parentName:"tr",align:null},"24.986401"),(0,r.kt)("td",{parentName:"tr",align:null},"76.150002"),(0,r.kt)("td",{parentName:"tr",align:null},"40.160259")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2015-01-08"),(0,r.kt)("td",{parentName:"tr",align:null},"25.106184"),(0,r.kt)("td",{parentName:"tr",align:null},"15.0230"),(0,r.kt)("td",{parentName:"tr",align:null},"25.065184"),(0,r.kt)("td",{parentName:"tr",align:null},"78.180000"),(0,r.kt)("td",{parentName:"tr",align:null},"41.341694")))),(0,r.kt)("div",{dangerouslySetInnerHTML:{__html:o[1]}}),(0,r.kt)("h2",{id:"normalizar-datos"},"3. Normalizar datos"),(0,r.kt)("p",null,"Para poder comparar los datos vamos a normalizarlos, para esto se usar\xe1\nla siguiente f\xf3rmula:"),(0,r.kt)("p",null,"$$ \\frac{P_t}{P_0} * 100 $$ Donde ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("msub",{parentName:"mrow"},(0,r.kt)("mi",{parentName:"msub"},"P"),(0,r.kt)("mi",{parentName:"msub"},"t"))),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"P_t")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8333em",verticalAlign:"-0.15em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.13889em"}},"P"),(0,r.kt)("span",{parentName:"span",className:"msupsub"},(0,r.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,r.kt)("span",{parentName:"span",className:"vlist-r"},(0,r.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.2806em"}},(0,r.kt)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"-0.1389em",marginRight:"0.05em"}},(0,r.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,r.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,r.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"t")))),(0,r.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,r.kt)("span",{parentName:"span",className:"vlist-r"},(0,r.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,r.kt)("span",{parentName:"span"}))))))))))," es el precio en el tiempo ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"t")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"t")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6151em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"t")))))," y\n",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("msub",{parentName:"mrow"},(0,r.kt)("mi",{parentName:"msub"},"P"),(0,r.kt)("mn",{parentName:"msub"},"0"))),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"P_0")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8333em",verticalAlign:"-0.15em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.13889em"}},"P"),(0,r.kt)("span",{parentName:"span",className:"msupsub"},(0,r.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,r.kt)("span",{parentName:"span",className:"vlist-r"},(0,r.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.3011em"}},(0,r.kt)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"-0.1389em",marginRight:"0.05em"}},(0,r.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,r.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,r.kt)("span",{parentName:"span",className:"mord mtight"},"0")))),(0,r.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,r.kt)("span",{parentName:"span",className:"vlist-r"},(0,r.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,r.kt)("span",{parentName:"span"}))))))))))," es el precio inicial."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"normalized_df = df / df.iloc[0] * 100\nnormalized_df.head()\n")),(0,r.kt)("div",{dangerouslySetInnerHTML:{__html:o[2]}}),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null},"AAPL"),(0,r.kt)("th",{parentName:"tr",align:null},"AMZN"),(0,r.kt)("th",{parentName:"tr",align:null},"GOOG"),(0,r.kt)("th",{parentName:"tr",align:null},"META"),(0,r.kt)("th",{parentName:"tr",align:null},"MSFT"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Date"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2015-01-02"),(0,r.kt)("td",{parentName:"tr",align:null},"100.000000"),(0,r.kt)("td",{parentName:"tr",align:null},"100.000000"),(0,r.kt)("td",{parentName:"tr",align:null},"100.000000"),(0,r.kt)("td",{parentName:"tr",align:null},"100.000000"),(0,r.kt)("td",{parentName:"tr",align:null},"100.000000")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2015-01-05"),(0,r.kt)("td",{parentName:"tr",align:null},"97.182847"),(0,r.kt)("td",{parentName:"tr",align:null},"97.948271"),(0,r.kt)("td",{parentName:"tr",align:null},"97.915438"),(0,r.kt)("td",{parentName:"tr",align:null},"98.393888"),(0,r.kt)("td",{parentName:"tr",align:null},"99.080393")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2015-01-06"),(0,r.kt)("td",{parentName:"tr",align:null},"97.192006"),(0,r.kt)("td",{parentName:"tr",align:null},"95.711785"),(0,r.kt)("td",{parentName:"tr",align:null},"95.646043"),(0,r.kt)("td",{parentName:"tr",align:null},"97.068202"),(0,r.kt)("td",{parentName:"tr",align:null},"97.626183")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2015-01-07"),(0,r.kt)("td",{parentName:"tr",align:null},"98.554834"),(0,r.kt)("td",{parentName:"tr",align:null},"96.726305"),(0,r.kt)("td",{parentName:"tr",align:null},"95.482179"),(0,r.kt)("td",{parentName:"tr",align:null},"97.068202"),(0,r.kt)("td",{parentName:"tr",align:null},"98.866569")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2015-01-08"),(0,r.kt)("td",{parentName:"tr",align:null},"102.341540"),(0,r.kt)("td",{parentName:"tr",align:null},"97.387528"),(0,r.kt)("td",{parentName:"tr",align:null},"95.783238"),(0,r.kt)("td",{parentName:"tr",align:null},"99.655836"),(0,r.kt)("td",{parentName:"tr",align:null},"101.775026")))),(0,r.kt)("div",{dangerouslySetInnerHTML:{__html:o[3]}}),(0,r.kt)("h2",{id:"graficar-datos"},"4. Graficar datos"),(0,r.kt)("p",null,"Por ultimo grafiaremos los datos para poder compararlos y ver como se\nhan comportado en el tiempo."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"normalized_df.plot(figsize=(15, 10))\nplt.show()\n")),(0,r.kt)("p",null,(0,r.kt)("img",{src:e(9015).Z,width:"1227",height:"759"})),(0,r.kt)("h2",{id:"conclusiones"},"5. Conclusiones"),(0,r.kt)("p",null,"Como hemos podido ver hacer una comparaci\xf3n de series de tiempo es muy\nsencillo con pandas, y nos permite ver como se han comportado las\nacciones de las empresas tecnol\xf3gicas en los \xfaltimos a\xf1os, las\nconcluciones respecto al comportamiento de las acciones de las empresas\ntecnol\xf3gicas se las dejo a ustedes."))}k.isMDXComponent=!0},9015:(a,t,e)=>{e.d(t,{Z:()=>n});const n=e.p+"assets/images/cell-5-output-1-3c00437a1b1c477bb20d54c8d7b19a76.png"}}]);