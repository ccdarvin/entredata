"use strict";(self.webpackChunkdocsweb=self.webpackChunkdocsweb||[]).push([[3686],{876:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>u});var n=a(2784);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),i=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=i(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=i(a),h=r,u=d["".concat(p,".").concat(h)]||d[h]||m[h]||o;return a?n.createElement(u,s(s({ref:t},c),{},{components:a})):n.createElement(u,s({ref:t},c))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=h;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:r,s[1]=l;for(var i=2;i<o;i++)s[i]=a[i];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},6278:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>p,toc:()=>c});var n=a(7896),r=(a(2784),a(876)),o=a(9067);const s={title:"Importar datos de diferentes fuentes con Python",description:"Cheatsheet para importar datos de diferentes fuentes con Python",authors:["ccdarvin"],tags:["python","pandas","data"],date:new Date("2023-07-07T00:00:00.000Z")},l="Importar datos de diferentes fuentes con Python",p={permalink:"/en/cheat-sheets/importing-data-python",source:"@site/cheat-sheets/importing-data-python.mdx",title:"Importar datos de diferentes fuentes con Python",description:"Cheatsheet para importar datos de diferentes fuentes con Python",date:"2023-07-07T00:00:00.000Z",formattedDate:"July 7, 2023",tags:[{label:"python",permalink:"/en/cheat-sheets/tags/python"},{label:"pandas",permalink:"/en/cheat-sheets/tags/pandas"},{label:"data",permalink:"/en/cheat-sheets/tags/data"}],readingTime:1.16,hasTruncateMarker:!1,authors:[{name:"Darvin Cotrina",title:"Creador de entredata.org",url:"https://github.com/ccdarvin",imageURL:"https://github.com/ccdarvin.png",key:"ccdarvin"}],frontMatter:{title:"Importar datos de diferentes fuentes con Python",description:"Cheatsheet para importar datos de diferentes fuentes con Python",authors:["ccdarvin"],tags:["python","pandas","data"],date:"2023-07-07T00:00:00.000Z"},prevItem:{title:"Linear models in scikit-learn",permalink:"/en/cheat-sheets/sklearn-linear-model"},nextItem:{title:"Preprocesamiento de datos para machine learning",permalink:"/en/cheat-sheets/preprocessing-data"}},i={authorsImageUrls:[void 0]},c=[{value:"CSV",id:"csv",level:2},{value:"Con Pandas",id:"con-pandas",level:2}],d={toc:c},m="wrapper";function h(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(o.Z,{header:"Flat files",mdxType:"CheatSheet"},(0,r.kt)("h2",{id:"csv"},"CSV"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"import pandas as pd\npd.read_csv('file.csv')\npd.read_csv('file.txt', sep='\\t')\n"))),(0,r.kt)(o.Z,{header:"Excel",mdxType:"CheatSheet"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"import pandas as pd\nwb = pd.ExcelFile('file.xlsx')\nwb.sheet_names # Nombre de las hojas\ndf = wb.parse('Sheet1') # Leer hoja\n"))),(0,r.kt)(o.Z,{header:"SAS",mdxType:"CheatSheet"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"from sas7bdat import SAS7BDAT\nwith SAS7BDAT('file.sas7bdat') as file:\n    df_sas = file.to_data_frame()\n"))),(0,r.kt)(o.Z,{header:"Stata",mdxType:"CheatSheet"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"import pandas as pd\ndf = pd.read_stata('file.dta')\n"))),(0,r.kt)(o.Z,{header:"HDF5",mdxType:"CheatSheet"},(0,r.kt)("p",null,"Los archivos HDF5 son una buena opci\xf3n para guardar grandes cantidades de datos. Se pueden leer con la librer\xeda ",(0,r.kt)("inlineCode",{parentName:"p"},"h5py")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"import h5py\ndata = h5py.File('file.hdf5', 'r')\ndata.keys() # Nombre de los grupos\n\ngroup = data['group'] # Leer grupo\ngroup.keys() # Nombre de los datasets\n\ndataset = group['dataset'] # Leer dataset\ndataset.shape # Dimensiones\ndataset.value # Valores\n"))),(0,r.kt)(o.Z,{header:"Matlab",mdxType:"CheatSheet"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"import scipy.io\nmat = scipy.io.loadmat('file.mat')\n"))),(0,r.kt)(o.Z,{header:"Pickled files",mdxType:"CheatSheet"},(0,r.kt)("p",null,"Los archivos pickled son archivos binarios de Python. Se pueden leer con la librer\xeda ",(0,r.kt)("inlineCode",{parentName:"p"},"pickle")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"import pickle\nwith open('file.pkl', 'rb') as file:\n    data = pickle.load(file)\n"))),(0,r.kt)(o.Z,{header:"SQL",mdxType:"CheatSheet"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"from sqlalchemy import create_engine\nengine = create_engine('sqlite:///file.sqlite')\ntable_names = engine.table_names() # Nombre de las tablas\n\nwith engine.connect() as con:\n    rs = con.execute('SELECT * FROM table')\n    df = pd.DataFrame(rs.fetchall())\n    df.columns = rs.keys()\n")),(0,r.kt)("h2",{id:"con-pandas"},"Con Pandas"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"import pandas as pd\nfrom sqlalchemy import create_engine\nengine = create_engine('sqlite:///file.sqlite')\n\ndf = pd.read_sql_query('SELECT * FROM table', engine)\n"))))}h.isMDXComponent=!0},9067:(e,t,a)=>{a.d(t,{Z:()=>p});var n=a(2784),r=a(6277);const o={header:"header_IlGg",content:"content_dNeI",item:"item_POdj","theme-code-block":"theme-code-block_RO5K",katex:"katex_Njz2","frac-line":"frac-line_skDA"};function s(e){let{children:t}=e;return n.createElement("h2",{className:(0,r.Z)(o.header)},t)}function l(e){let{children:t}=e;return n.createElement("div",{className:(0,r.Z)(o.content)},t)}function p(e){let{children:t,header:a}=e;return n.createElement("div",{className:(0,r.Z)(o.item)},a&&n.createElement(s,null,a),n.createElement(l,null,t))}}}]);