"use strict";(self.webpackChunkdocsweb=self.webpackChunkdocsweb||[]).push([[3890],{876:(e,a,t)=>{t.d(a,{Zo:()=>m,kt:()=>g});var n=t(2784);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=n.createContext({}),p=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},m=function(e){var a=p(e.components);return n.createElement(s.Provider,{value:a},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),c=p(t),u=r,g=c["".concat(s,".").concat(u)]||c[u]||d[u]||l;return t?n.createElement(g,o(o({ref:a},m),{},{components:t})):n.createElement(g,o({ref:a},m))}));function g(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=u;var i={};for(var s in a)hasOwnProperty.call(a,s)&&(i[s]=a[s]);i.originalType=e,i[c]="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=t[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},9622:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var n=t(7896),r=(t(2784),t(876));const l={title:"Resampling de series temporales con Pandas",date:new Date("2023-07-18T00:00:00.000Z"),authors:["ccdarvin"],tags:["pandas","series temporales","resampling"]},o="Resampling series de tiempo con pandas",i={permalink:"/article/time-series-resampling-with-pandas",source:"@site/blog/time-series-resampling-with-pandas.md",title:"Resampling de series temporales con Pandas",description:"En este articulo vamos a ver como hacer resampling de series de tiempo",date:"2023-07-18T00:00:00.000Z",formattedDate:"18 de julio de 2023",tags:[{label:"pandas",permalink:"/article/tags/pandas"},{label:"series temporales",permalink:"/article/tags/series-temporales"},{label:"resampling",permalink:"/article/tags/resampling"}],readingTime:2.805,hasTruncateMarker:!1,authors:[{name:"Darvin Cotrina",title:"Creador de entredata.org",url:"https://github.com/ccdarvin",imageURL:"https://github.com/ccdarvin.png",key:"ccdarvin"}],frontMatter:{title:"Resampling de series temporales con Pandas",date:"2023-07-18T00:00:00.000Z",authors:["ccdarvin"],tags:["pandas","series temporales","resampling"]},prevItem:{title:"Modelo con mutiples salidas",permalink:"/article/modelo-con-mutiples-salidas"},nextItem:{title:"Comparar series de tiempo",permalink:"/article/Compare-time-series-growth-rates"}},s={authorsImageUrls:[void 0]},p=[{value:"1. Frecuencias de series de tiempo",id:"frecuencias-de-series-de-tiempo",level:2},{value:"2. Importar librer\xedas",id:"importar-librer\xedas",level:2},{value:"3. Cagar y preparar los datos",id:"cagar-y-preparar-los-datos",level:2},{value:"4. Resampling a una frecuencia mas baja (downsampling)",id:"resampling-a-una-frecuencia-mas-baja-downsampling",level:2},{value:"5. Resampling a una frecuencia mas alta (upsampling)",id:"resampling-a-una-frecuencia-mas-alta-upsampling",level:2},{value:"6. Manejar los datos faltantes",id:"manejar-los-datos-faltantes",level:2},{value:"7. Resampling con multiples metodos de agregaci\xf3n",id:"resampling-con-multiples-metodos-de-agregaci\xf3n",level:2}],m={toc:p},c="wrapper";function d(e){let{components:a,...l}=e;return(0,r.kt)(c,(0,n.Z)({},m,l,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"En este articulo vamos a ver como hacer resampling de series de tiempo\ncon pandas. El resampling es un proceso de conversi\xf3n de series de\ntiempo de una frecuencia a otra. La frecuencia puede ser diaria,\nmensual, trimestral, anual, etc. Por ejemplo, podemos convertir una\nserie de tiempo con frecuencia diaria a una serie de tiempo con\nfrecuencia mensual. Tambi\xe9n podemos convertir una serie de tiempo con\nfrecuencia mensual a una serie de tiempo con frecuencia anual."),(0,r.kt)("h2",{id:"frecuencias-de-series-de-tiempo"},"1. Frecuencias de series de tiempo"),(0,r.kt)("p",null,"Las series de tiempo pueden tener diferentes frecuencias, ahora vamos a\nver las frecuencias que podemos encontrar en pandas."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"C\xf3digo"),(0,r.kt)("th",{parentName:"tr",align:null},"Descripci\xf3n"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"B"),(0,r.kt)("td",{parentName:"tr",align:null},"Frecuencia de negocios")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"C"),(0,r.kt)("td",{parentName:"tr",align:null},"Frecuencia personalizada")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"D"),(0,r.kt)("td",{parentName:"tr",align:null},"Frecuencia diaria")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"W"),(0,r.kt)("td",{parentName:"tr",align:null},"Frecuencia semanal")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"M"),(0,r.kt)("td",{parentName:"tr",align:null},"Frecuencia mensual")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Q"),(0,r.kt)("td",{parentName:"tr",align:null},"Frecuencia trimestral")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"A"),(0,r.kt)("td",{parentName:"tr",align:null},"Frecuencia anual")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"H"),(0,r.kt)("td",{parentName:"tr",align:null},"Frecuencia horaria")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"T"),(0,r.kt)("td",{parentName:"tr",align:null},"Frecuencia minutal")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"S"),(0,r.kt)("td",{parentName:"tr",align:null},"Frecuencia segundal")))),(0,r.kt)("h2",{id:"importar-librer\xedas"},"2. Importar librer\xedas"),(0,r.kt)("p",null,"Primero empesaremos importando las librer\xedas que vamos a utilizar."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"import pandas as pd\nimport numpy as np\nimport matplotlib.pyplot as plt\n")),(0,r.kt)("h2",{id:"cagar-y-preparar-los-datos"},"3. Cagar y preparar los datos"),(0,r.kt)("p",null,"Ahora vamos a crear un DataFrame con datos usando una frecuencia diaria."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"date_range = pd.date_range('01/01/2020', periods=365, freq='D')\n# crearemos datos para la demostraci\xf3n\ndata = np.random.randn(len(date_range))\ndf = pd.DataFrame(data, index=date_range, columns=['Value'])\n# graficamos los datos\ndf.plot()\nplt.show()\n")),(0,r.kt)("p",null,(0,r.kt)("img",{src:t(4394).Z,width:"546",height:"429"})),(0,r.kt)("h2",{id:"resampling-a-una-frecuencia-mas-baja-downsampling"},"4. Resampling a una frecuencia mas baja (downsampling)"),(0,r.kt)("p",null,"Ahora vamos a convertir la serie de tiempo con frecuencia diaria a una\nserie de tiempo con frecuencia mensual. Para hacer esto vamos a usar el\nm\xe9todo ",(0,r.kt)("inlineCode",{parentName:"p"},"resample()"),", al tener una frecuencia mas baja tenemos que\nespecificar como queremos que se agreguen los datos, vamos a tener que\ningresar una funci\xf3n de agregaci\xf3n. En este caso vamos a usar la funci\xf3n\n",(0,r.kt)("inlineCode",{parentName:"p"},"mean()")," para calcular el promedio de los datos, peru tu puedes usar\ncualquier funci\xf3n de agregaci\xf3n que necesites."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"df_monthly_mean = df.resample('M').mean()\ndf_monthly_mean.head(5)\n# graficamos los datos\ndf_monthly_mean.plot()\nplt.show()\n")),(0,r.kt)("p",null,(0,r.kt)("img",{src:t(1278).Z,width:"572",height:"429"})),(0,r.kt)("h2",{id:"resampling-a-una-frecuencia-mas-alta-upsampling"},"5. Resampling a una frecuencia mas alta (upsampling)"),(0,r.kt)("p",null,"Ya vimos como disminuir la frecuencia, ahora veremos como aumentar la\nfrecuencia. Para hacer esto vamos a usar el m\xe9todo ",(0,r.kt)("inlineCode",{parentName:"p"},"resample()")," y\nespecificar la frecuencia que queremos. En este caso vamos a aumentar la\nfrecuencia de diaria a horaria, para esto vamos a usar el c\xf3digo ",(0,r.kt)("inlineCode",{parentName:"p"},"H")," que\nsignifica frecuencia horaria."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"df_hourly = df.resample('H').ffill() # otros metodos: bfill, interpolate\n")),(0,r.kt)("p",null,"Para poder ver con mas detalle los datos haremos un acercamiento a un\nperiodo de tiempo especifico."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"df_hourly.loc['2020-01-01':'2020-01-30'].plot()\nplt.show()\n")),(0,r.kt)("p",null,(0,r.kt)("img",{src:t(1885).Z,width:"546",height:"461"})),(0,r.kt)("h2",{id:"manejar-los-datos-faltantes"},"6. Manejar los datos faltantes"),(0,r.kt)("p",null,"Como pudimos ver en el ejemplo anterior cuando aumentamos la frecuenc\xeda\nde diaria a horaria, muchos valores se convirtieron en ",(0,r.kt)("inlineCode",{parentName:"p"},"NaN"),". Para\nsolucionar esto vamos a usar el m\xe9todo ",(0,r.kt)("inlineCode",{parentName:"p"},"interpolate()")," para interpolar\nlos valores faltantes."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"df_hourly = df.resample('H').interpolate()\ndf_hourly.loc['2020-01-01':'2020-01-30'].plot()\nplt.show()\n")),(0,r.kt)("p",null,(0,r.kt)("img",{src:t(3882).Z,width:"546",height:"461"})),(0,r.kt)("h2",{id:"resampling-con-multiples-metodos-de-agregaci\xf3n"},"7. Resampling con multiples metodos de agregaci\xf3n"),(0,r.kt)("p",null,"Tambien podemos hacer un resampling con multiples m\xe9todos de agregaci\xf3n.\nPara hacer esto vamos a usar el m\xe9todo ",(0,r.kt)("inlineCode",{parentName:"p"},"agg()")," y especificar los m\xe9todos\nde agregaci\xf3n que queremos usar."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"df_weekly = df.resample('W').agg(['mean', 'std', 'min', 'max'])\ndf_weekly.plot()\nplt.show()\n")),(0,r.kt)("p",null,(0,r.kt)("img",{src:t(6148).Z,width:"563",height:"429"})),(0,r.kt)("p",null,"Eso es todo por ahora, espero que este articulo te haya sido de ayuda"))}d.isMDXComponent=!0},4394:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/cell-3-output-1-6d242e1eec29d15d29b6aa4e9f4a8d57.png"},1278:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/cell-4-output-1-04dd4c41f94ed929003c647c50579c88.png"},1885:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/cell-6-output-1-eb6f38d92a6aa6840b3d43d6ee0c36de.png"},3882:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/cell-7-output-1-3e66e73aa423e3bdadb31b71011c7022.png"},6148:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/cell-8-output-1-3e35295ee3ec63c9b34f677191d45b67.png"}}]);