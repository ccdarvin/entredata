"use strict";(self.webpackChunkdocsweb=self.webpackChunkdocsweb||[]).push([[4150],{876:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>c});var n=a(2784);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),p=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",_={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(a),m=r,c=u["".concat(i,".").concat(m)]||u[m]||_[m]||l;return a?n.createElement(c,o(o({ref:t},d),{},{components:a})):n.createElement(c,o({ref:t},d))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[u]="string"==typeof e?e:r,o[1]=s;for(var p=2;p<l;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},224:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>s,quartoRawHtml:()=>d,toc:()=>p});var n=a(7896),r=(a(2784),a(876));const l={title:"Modelo con mutiples salidas",authors:["ccdarvin"],date:new Date("2023-07-20T00:00:00.000Z")},o=void 0,s={permalink:"/en/article/modelo-con-mutiples-salidas",source:"@site/blog/modelo-con-mutiples-salidas.md",title:"Modelo con mutiples salidas",description:"modelo-con-mutiples-salidas}",date:"2023-07-20T00:00:00.000Z",formattedDate:"July 20, 2023",tags:[],readingTime:3.645,hasTruncateMarker:!1,authors:[{name:"Darvin Cotrina",title:"Creador de entredata.org",url:"https://github.com/ccdarvin",imageURL:"https://github.com/ccdarvin.png",key:"ccdarvin"}],frontMatter:{title:"Modelo con mutiples salidas",authors:["ccdarvin"],date:"2023-07-20T00:00:00.000Z"},prevItem:{title:"Modelo funcional usando el API de Keras",permalink:"/en/article/modelo-funcional-usando-el-API-de-Keras"},nextItem:{title:"Resampling de series temporales con Pandas",permalink:"/en/article/time-series-resampling-with-pandas"}},i={authorsImageUrls:[void 0]},p=[{value:"Importar modulos",id:"importar-modulos",level:2},{value:"Preparar los datos",id:"preparar-los-datos",level:2},{value:"El modelo",id:"el-modelo",level:2},{value:"Graficar nuestro modelo",id:"graficar-nuestro-modelo",level:2},{value:"Configurar parametros",id:"configurar-parametros",level:2},{value:"Evaluar el modelo",id:"evaluar-el-modelo",level:2},{value:"Comparar datos reales y predichos",id:"comparar-datos-reales-y-predichos",level:2}],d=["<div>\n<style scoped>\n    .dataframe tbody tr th:only-of-type {\n        vertical-align: middle;\n    }\n    .dataframe tbody tr th {\n        vertical-align: top;\n    }\n    .dataframe thead th {\n        text-align: right;\n    }\n</style>\n","\n</div>"],u={toc:p,quartoRawHtml:d},_="wrapper";function m(e){let{components:t,...l}=e;return(0,r.kt)(_,(0,n.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"modelo-con-mutiples-salidas"},"Modelo con mutiples salidas"),(0,r.kt)("p",null,"En este notebook, crearemos un modelo con multiples salidas usando el\nAPI funcional de keras."),(0,r.kt)("p",null,"Para el modelo usaremos lo datos de ",(0,r.kt)("a",{parentName:"p",href:"https://archive.ics.uci.edu/dataset/242/energy+efficiency"},"Energy\nefficiency")),(0,r.kt)("h2",{id:"importar-modulos"},"Importar modulos"),(0,r.kt)("p",null,"::: {.cell ","_","cell_guid=\u2018bc1c482a-3443-4deb-bfbe-35775986216c\u2019\n","_","uuid=\u20183869d47c-4312-4dae-8587-4c76fe28cb21\u2019\nexecution=\u2018{\u201ciopub.execute_input\u201d:\u201c2023-08-11T20:34:57.287840Z\u201d,\u201ciopub.status.busy\u201d:\u201c2023-08-11T20:34:57.286929Z\u201d,\u201ciopub.status.idle\u201d:\u201c2023-08-11T20:34:57.295622Z\u201d,\u201cshell.execute_reply\u201d:\u201c2023-08-11T20:34:57.293802Z\u201d,\u201cshell.execute_reply.started\u201d:\u201c2023-08-11T20:34:57.287795Z\u201d}\u2019\njupyter=\u2018{\u201coutputs_hidden\u201d:false}\u2019 trusted=\u2018true\u2019 execution_count=1}"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"import tensorflow as tf\nimport numpy as np\nimport pandas as pd\nimport matplotlib.pyplot as plt\nfrom sklearn.model_selection import train_test_split\nfrom sklearn import preprocessing\nimport requests\nfrom io import BytesIO\nimport zipfile\n")),(0,r.kt)("p",null,":::"),(0,r.kt)("h2",{id:"preparar-los-datos"},"Preparar los datos"),(0,r.kt)("p",null,"Descargamos el dataset y preparamos nuestros datos de entrenamiento y\npruebas"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# download file\nurl = 'https://archive.ics.uci.edu/static/public/242/energy+efficiency.zip'\nr = requests.get(url)\nzip_data = BytesIO(r.content)\n\n# unzip\nwith zipfile.ZipFile(zip_data, 'r') as zip_file:\n    with zip_file.open('ENB2012_data.xlsx') as excel_file:\n        df = pd.read_excel(excel_file)\n\n# random sort\ndf = df.sample(frac=1)\n\ndf.head()\n")),(0,r.kt)("div",{dangerouslySetInnerHTML:{__html:d[0]}}),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null},"X1"),(0,r.kt)("th",{parentName:"tr",align:null},"X2"),(0,r.kt)("th",{parentName:"tr",align:null},"X3"),(0,r.kt)("th",{parentName:"tr",align:null},"X4"),(0,r.kt)("th",{parentName:"tr",align:null},"X5"),(0,r.kt)("th",{parentName:"tr",align:null},"X6"),(0,r.kt)("th",{parentName:"tr",align:null},"X7"),(0,r.kt)("th",{parentName:"tr",align:null},"X8"),(0,r.kt)("th",{parentName:"tr",align:null},"Y1"),(0,r.kt)("th",{parentName:"tr",align:null},"Y2"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"470"),(0,r.kt)("td",{parentName:"tr",align:null},"0.66"),(0,r.kt)("td",{parentName:"tr",align:null},"759.5"),(0,r.kt)("td",{parentName:"tr",align:null},"318.5"),(0,r.kt)("td",{parentName:"tr",align:null},"220.5"),(0,r.kt)("td",{parentName:"tr",align:null},"3.5"),(0,r.kt)("td",{parentName:"tr",align:null},"4"),(0,r.kt)("td",{parentName:"tr",align:null},"0.25"),(0,r.kt)("td",{parentName:"tr",align:null},"4"),(0,r.kt)("td",{parentName:"tr",align:null},"12.86"),(0,r.kt)("td",{parentName:"tr",align:null},"16.17")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"379"),(0,r.kt)("td",{parentName:"tr",align:null},"0.64"),(0,r.kt)("td",{parentName:"tr",align:null},"784.0"),(0,r.kt)("td",{parentName:"tr",align:null},"343.0"),(0,r.kt)("td",{parentName:"tr",align:null},"220.5"),(0,r.kt)("td",{parentName:"tr",align:null},"3.5"),(0,r.kt)("td",{parentName:"tr",align:null},"5"),(0,r.kt)("td",{parentName:"tr",align:null},"0.25"),(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:null},"17.11"),(0,r.kt)("td",{parentName:"tr",align:null},"20.43")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"31"),(0,r.kt)("td",{parentName:"tr",align:null},"0.71"),(0,r.kt)("td",{parentName:"tr",align:null},"710.5"),(0,r.kt)("td",{parentName:"tr",align:null},"269.5"),(0,r.kt)("td",{parentName:"tr",align:null},"220.5"),(0,r.kt)("td",{parentName:"tr",align:null},"3.5"),(0,r.kt)("td",{parentName:"tr",align:null},"5"),(0,r.kt)("td",{parentName:"tr",align:null},"0.00"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"6.40"),(0,r.kt)("td",{parentName:"tr",align:null},"11.67")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"747"),(0,r.kt)("td",{parentName:"tr",align:null},"0.74"),(0,r.kt)("td",{parentName:"tr",align:null},"686.0"),(0,r.kt)("td",{parentName:"tr",align:null},"245.0"),(0,r.kt)("td",{parentName:"tr",align:null},"220.5"),(0,r.kt)("td",{parentName:"tr",align:null},"3.5"),(0,r.kt)("td",{parentName:"tr",align:null},"5"),(0,r.kt)("td",{parentName:"tr",align:null},"0.40"),(0,r.kt)("td",{parentName:"tr",align:null},"5"),(0,r.kt)("td",{parentName:"tr",align:null},"14.39"),(0,r.kt)("td",{parentName:"tr",align:null},"16.70")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"737"),(0,r.kt)("td",{parentName:"tr",align:null},"0.79"),(0,r.kt)("td",{parentName:"tr",align:null},"637.0"),(0,r.kt)("td",{parentName:"tr",align:null},"343.0"),(0,r.kt)("td",{parentName:"tr",align:null},"147.0"),(0,r.kt)("td",{parentName:"tr",align:null},"7.0"),(0,r.kt)("td",{parentName:"tr",align:null},"3"),(0,r.kt)("td",{parentName:"tr",align:null},"0.40"),(0,r.kt)("td",{parentName:"tr",align:null},"5"),(0,r.kt)("td",{parentName:"tr",align:null},"41.96"),(0,r.kt)("td",{parentName:"tr",align:null},"37.70")))),(0,r.kt)("div",{dangerouslySetInnerHTML:{__html:d[1]}}),(0,r.kt)("p",null,"::: {.cell ","_","cell_guid=\u2018966384d2-52f6-43fe-a9a7-30a34005525c\u2019\n","_","uuid=\u2018246e7b03-c479-425e-b12e-0d31b6caa74c\u2019\nexecution=\u2018{\u201ciopub.execute_input\u201d:\u201c2023-08-11T20:35:01.995196Z\u201d,\u201ciopub.status.busy\u201d:\u201c2023-08-11T20:35:01.994656Z\u201d,\u201ciopub.status.idle\u201d:\u201c2023-08-11T20:35:02.010268Z\u201d,\u201cshell.execute_reply\u201d:\u201c2023-08-11T20:35:02.008886Z\u201d,\u201cshell.execute_reply.started\u201d:\u201c2023-08-11T20:35:01.995155Z\u201d}\u2019\njupyter=\u2018{\u201coutputs_hidden\u201d:false}\u2019 trusted=\u2018true\u2019 execution_count=3}"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# split data\ntrain, test = train_test_split(df, test_size=0.2)\n\ndef format_data(df: pd.DataFrame):\n    y1 = df['Y1'].values\n    y2 = df['Y2'].values\n    X = df.drop(['Y1', 'Y2'], axis=1)\n    return X, (y1, y2)\n\nX_train, Y_train = format_data(train)\nX_test, Y_test = format_data(test)\n")),(0,r.kt)("p",null,":::"),(0,r.kt)("p",null,"::: {.cell ","_","cell_guid=\u2018f867a2c3-849d-476b-8068-deea62ff3ea8\u2019\n","_","uuid=\u20183717aebb-1951-47bc-aeb9-ef1ee7af3ced\u2019\nexecution=\u2018{\u201ciopub.execute_input\u201d:\u201c2023-08-11T20:35:06.917556Z\u201d,\u201ciopub.status.busy\u201d:\u201c2023-08-11T20:35:06.917099Z\u201d,\u201ciopub.status.idle\u201d:\u201c2023-08-11T20:35:06.925773Z\u201d,\u201cshell.execute_reply\u201d:\u201c2023-08-11T20:35:06.924386Z\u201d,\u201cshell.execute_reply.started\u201d:\u201c2023-08-11T20:35:06.917524Z\u201d}\u2019\njupyter=\u2018{\u201coutputs_hidden\u201d:false}\u2019 trusted=\u2018true\u2019 execution_count=4}"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# normalize data\nscaler = preprocessing.StandardScaler()\nX_train_norm = scaler.fit_transform(X_train)\nX_test_norm = scaler.transform(X_test)\n")),(0,r.kt)("p",null,":::"),(0,r.kt)("h2",{id:"el-modelo"},"El modelo"),(0,r.kt)("p",null,"Ahora construiremos nuestro modelo teniendo en cuenta que va a tener dos\nsalidas"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"def build_model():\n    input_layer = tf.keras.layers.Input(shape=(8,))\n    hidden_layer = tf.keras.layers.Dense(128, activation='relu')(input_layer)\n    hidden_layer = tf.keras.layers.Dense(128, activation='relu')(hidden_layer)\n\n    # ouput 1\n    y1 = tf.keras.layers.Dense(1, name='y1')(hidden_layer)\n\n    # output 2\n    hidden_layer = tf.keras.layers.Dense(64, activation='relu')(hidden_layer)\n\n    y2 = tf.keras.layers.Dense(1, name='y2')(hidden_layer)\n\n    return tf.keras.models.Model(inputs=input_layer, outputs=[y1, y2])\n")),(0,r.kt)("h2",{id:"graficar-nuestro-modelo"},"Graficar nuestro modelo"),(0,r.kt)("p",null,"Vamos a graficar nuestro modelo donde podemos observar de forma mas\nsimple nuestras dos salidas ",(0,r.kt)("inlineCode",{parentName:"p"},"y1")," y ",(0,r.kt)("inlineCode",{parentName:"p"},"y2"),", tambien podemos ver que ",(0,r.kt)("inlineCode",{parentName:"p"},"y2"),"\ntiene una capa extra, esta es la de\n",(0,r.kt)("inlineCode",{parentName:"p"},"tf.keras.layers.Dense(units=1, name='y2', activation='linear')(X)")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"model = build_model()\nmodel.summary()\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"Model: \"model\"\n__________________________________________________________________________________________________\n Layer (type)                   Output Shape         Param #     Connected to                     \n==================================================================================================\n input_1 (InputLayer)           [(None, 8)]          0           []                               \n                                                                                                  \n dense (Dense)                  (None, 128)          1152        ['input_1[0][0]']                \n                                                                                                  \n dense_1 (Dense)                (None, 128)          16512       ['dense[0][0]']                  \n                                                                                                  \n dense_2 (Dense)                (None, 64)           8256        ['dense_1[0][0]']                \n                                                                                                  \n y1 (Dense)                     (None, 1)            129         ['dense_1[0][0]']                \n                                                                                                  \n y2 (Dense)                     (None, 1)            65          ['dense_2[0][0]']                \n                                                                                                  \n==================================================================================================\nTotal params: 26,114\nTrainable params: 26,114\nNon-trainable params: 0\n__________________________________________________________________________________________________\n")),(0,r.kt)("h2",{id:"configurar-parametros"},"Configurar parametros"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"model.compile(\n    optimizer=tf.optimizers.SGD(learning_rate=0.001),\n    loss={\n        'y1': tf.keras.losses.MeanSquaredError(),\n        'y2': tf.keras.losses.MeanSquaredError(),\n    },\n    metrics={\n        'y1': tf.keras.metrics.RootMeanSquaredError(),\n        'y2': tf.keras.metrics.RootMeanSquaredError(),\n    }\n)\n")),(0,r.kt)("h1",{id:"entrenar-el-modelo"},"Entrenar el modelo"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"model.fit(\n    X_train_norm, Y_train,\n    epochs=500, batch_size=10,\n    validation_data=(X_test_norm, Y_test),\n    verbose=0\n)\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"<keras.callbacks.History at 0x1e161d1ed10>\n")),(0,r.kt)("h2",{id:"evaluar-el-modelo"},"Evaluar el modelo"),(0,r.kt)("p",null,"Ahora vamos a evaluar el modelo y graficar los datos para tener una\nmejor idea de lo que esta pasando"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"model.evaluate(X_test_norm, Y_test)\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"5/5 [==============================] - 0s 2ms/step - loss: 0.9150 - y1_loss: 0.2067 - y2_loss: 0.7082 - y1_root_mean_squared_error: 0.4547 - y2_root_mean_squared_error: 0.8416\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"[0.9149883389472961,\n 0.2067471146583557,\n 0.7082412838935852,\n 0.454694539308548,\n 0.8415707349777222]\n")),(0,r.kt)("h2",{id:"comparar-datos-reales-y-predichos"},"Comparar datos reales y predichos"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"pred = model.predict(X_test_norm)\nprint(pred[0][:5])\nY_test[0][:5]\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"5/5 [==============================] - 0s 1ms/step\n[[33.359097]\n [37.002422]\n [23.915794]\n [35.689697]\n [24.020735]]\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"array([33.16, 37.26, 24.03, 35.94, 24.24])\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"def plot_values(ax, y_true, y_pred, title):\n    ax.scatter(y_true, y_pred, alpha=0.5)\n    ax.plot([y_true.min(), y_true.max()], [y_true.min(), y_true.max()], '--')\n    ax.set_xlabel('True value')\n    ax.set_ylabel('Predicted value')\n    ax.set_title(title)\n\n# Y1 vs pred\nfig, ax = plt.subplots(1, 2, figsize=(15, 5))\nplot_values(ax[0], Y_test[0], pred[0], 'Y1')\nplot_values(ax[1], Y_test[1], pred[1], 'Y2')\n")),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(3644).Z,width:"1229",height:"470"})))}m.isMDXComponent=!0},3644:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/cell-12-output-1-2f0ecff750d5fa5bc84a866af4557ede.png"}}]);