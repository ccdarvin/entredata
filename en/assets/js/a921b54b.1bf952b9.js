"use strict";(self.webpackChunkdocsweb=self.webpackChunkdocsweb||[]).push([[165],{876:(e,n,a)=>{a.d(n,{Zo:()=>u,kt:()=>f});var o=a(2784);function t(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function r(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,o)}return a}function l(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?r(Object(a),!0).forEach((function(n){t(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function s(e,n){if(null==e)return{};var a,o,t=function(e,n){if(null==e)return{};var a,o,t={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],n.indexOf(a)>=0||(t[a]=e[a]);return t}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var c=o.createContext({}),i=function(e){var n=o.useContext(c),a=n;return e&&(a="function"==typeof e?e(n):l(l({},n),e)),a},u=function(e){var n=i(e.components);return o.createElement(c.Provider,{value:n},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},p=o.forwardRef((function(e,n){var a=e.components,t=e.mdxType,r=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=i(a),p=t,f=d["".concat(c,".").concat(p)]||d[p]||m[p]||r;return a?o.createElement(f,l(l({ref:n},u),{},{components:a})):o.createElement(f,l({ref:n},u))}));function f(e,n){var a=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var r=a.length,l=new Array(r);l[0]=p;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s[d]="string"==typeof e?e:t,l[1]=s;for(var i=2;i<r;i++)l[i]=a[i];return o.createElement.apply(null,l)}return o.createElement.apply(null,a)}p.displayName="MDXCreateElement"},3171:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>i});var o=a(7896),t=(a(2784),a(876));const r={title:"Modelo funcional usando el API de Keras",description:"Modelo funcional usando el API de Keras",authors:["ccdarvin"],date:new Date("2023-08-07T00:00:00.000Z"),tags:["keras","deep-learning","python"]},l="Crear un modelo funcional usando el APi de keras",s={permalink:"/en/article/modelo-funcional-usando-el-API-de-Keras",source:"@site/blog/modelo-funcional-usando-el-API-de-Keras.md",title:"Modelo funcional usando el API de Keras",description:"Modelo funcional usando el API de Keras",date:"2023-08-07T00:00:00.000Z",formattedDate:"August 7, 2023",tags:[{label:"keras",permalink:"/en/article/tags/keras"},{label:"deep-learning",permalink:"/en/article/tags/deep-learning"},{label:"python",permalink:"/en/article/tags/python"}],readingTime:2.39,hasTruncateMarker:!1,authors:[{name:"Darvin Cotrina",title:"Creador de entredata.org",url:"https://github.com/ccdarvin",imageURL:"https://github.com/ccdarvin.png",key:"ccdarvin"}],frontMatter:{title:"Modelo funcional usando el API de Keras",description:"Modelo funcional usando el API de Keras",authors:["ccdarvin"],date:"2023-08-07T00:00:00.000Z",tags:["keras","deep-learning","python"]},nextItem:{title:"Resampling de series temporales con Pandas",permalink:"/en/article/time-series-resampling-with-pandas"}},c={authorsImageUrls:[void 0]},i=[{value:"1. Importar modulo",id:"importar-modulo",level:2},{value:"2. Modelo Sequencial",id:"modelo-sequencial",level:2},{value:"Modelo con el API funcional",id:"modelo-con-el-api-funcional",level:2},{value:"3. Entrenar nuestro modelo",id:"entrenar-nuestro-modelo",level:2},{value:"4. Evalular el modelo",id:"evalular-el-modelo",level:2}],u={toc:i},d="wrapper";function m(e){let{components:n,...a}=e;return(0,t.kt)(d,(0,o.Z)({},u,a,{components:n,mdxType:"MDXLayout"}),(0,t.kt)("p",null,"Para crear un modelo de deep learning en keras se pueden usar dos API\u2019s:\nla secuencial y la funcional. La secuencial es la m\xe1s sencilla de usar,\npero la funcional es m\xe1s flexible y permite crear modelos m\xe1s complejos.\nEn este notebook se muestra como crear un modelo funcional."),(0,t.kt)("h2",{id:"importar-modulo"},"1. Importar modulo"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-python"},"import tensorflow as tf\n")),(0,t.kt)("h2",{id:"modelo-sequencial"},"2. Modelo Sequencial"),(0,t.kt)("p",null,"Crearemos un modelo secuencial, que es una pila lineal de capas. Para\nello, usaremos la funci\xf3n ",(0,t.kt)("inlineCode",{parentName:"p"},"Sequential()"),", en el que nos basaremos para\ncrear nuestro modelo funcional."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-python"},"def sequential_model():\n    model = tf.keras.models.Sequential([\n        tf.keras.layers.Flatten(input_shape=(28, 28)),\n        tf.keras.layers.Dense(128, activation=tf.nn.relu),\n        tf.keras.layers.Dense(10, activation=tf.nn.softmax)\n    ])\n    return model\n")),(0,t.kt)("h2",{id:"modelo-con-el-api-funcional"},"Modelo con el API funcional"),(0,t.kt)("p",null,"Ahora crearemos un modelo usando el api funcional de Keras. Este modelo\nes un poco m\xe1s flexible que el modelo secuencial, ya que nos permite\ncrear modelos con m\xfaltiples entradas y salidas, y tambi\xe9n nos permite\ncrear modelos con capas compartidas."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-python"},"def functional_model():\n    # creamos nuestra entrada\n    input = tf.keras.Input(shape=(28, 28))\n    # creamos nuestra capas\n    x = tf.keras.layers.Flatten()(input)\n    x = tf.keras.layers.Dense(128, activation='relu')(x)\n    x = tf.keras.layers.Dense(64, activation='softmax')(x)\n    # definimos nuestro modelo\n    model = tf.keras.Model(inputs=input, outputs=x)\n    return model\n\nmodel_func = functional_model()\n")),(0,t.kt)("h2",{id:"entrenar-nuestro-modelo"},"3. Entrenar nuestro modelo"),(0,t.kt)("p",null,"Ahora vamos a entrenar nuestro modelo usando los datos de\n",(0,t.kt)("inlineCode",{parentName:"p"},"fashion_mnist")," que es uno de los datasets de ejemplo que vienen con\ntensorflow."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-python"},"fashion_mnist = tf.keras.datasets.fashion_mnist\n\n(X_train, y_train), (X_test, y_test) = fashion_mnist.load_data()\n\n# normalizar los datos\nX_train = X_train / 255.0\nX_test = X_test / 255.0\n\n# configurar y conpilar nuestro modelo\nmodel_func.compile(optimizer='adam',\n                loss='sparse_categorical_crossentropy',\n                metrics=['accuracy'])\n\n# entrenar el modelo\nmodel_func.fit(X_train, y_train, epochs=5)\n")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-text"},"Epoch 1/5\n1875/1875 [==============================] - 6s 3ms/step - loss: 0.2289 - accuracy: 0.9147\nEpoch 2/5\n1875/1875 [==============================] - 5s 3ms/step - loss: 0.2180 - accuracy: 0.9187\nEpoch 3/5\n1875/1875 [==============================] - 5s 3ms/step - loss: 0.2137 - accuracy: 0.9207\nEpoch 4/5\n1875/1875 [==============================] - 5s 3ms/step - loss: 0.2063 - accuracy: 0.9226\nEpoch 5/5\n1875/1875 [==============================] - 5s 3ms/step - loss: 0.2003 - accuracy: 0.9247\n")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-text"},"<keras.callbacks.History at 0x212d77f6d50>\n")),(0,t.kt)("h2",{id:"evalular-el-modelo"},"4. Evalular el modelo"),(0,t.kt)("p",null,"Por ultimo vamos a evaluar el modelo con el conjunto de test. Para ello\nvamos a utilizar la funci\xf3n ",(0,t.kt)("inlineCode",{parentName:"p"},"evaluate")," del modelo. Esta funci\xf3n nos\ndevuelve el valor de la funci\xf3n de perdida y el valor de la m\xe9trica que\nhemos definido."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-python"},"model_func.evaluate(X_test, y_test)\n")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-text"},"313/313 [==============================] - 1s 2ms/step - loss: 0.3422 - accuracy: 0.8854\n")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-text"},"[0.34223565459251404, 0.8853999972343445]\n")),(0,t.kt)("p",null,"Como hemos visto crear un modelo usando el API funcional de keras, no es\ncomplicado, pero si es un poco m\xe1s complejo que usando el API\nsecuencial. Sin embargo, debemos tener en cuenta que el API funcional\nnos permite crear modelos m\xe1s complejos, con m\xe1s de una entrada y m\xe1s de\nuna salida, lo cual no es posible con el API secuencial."))}m.isMDXComponent=!0}}]);