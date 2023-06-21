"use strict";(self.webpackChunkdocsweb=self.webpackChunkdocsweb||[]).push([[4037],{3554:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"arboles-decision-ensamble","metadata":{"permalink":"/article/arboles-decision-ensamble","source":"@site/blog/Arboles de desici\xf3n y m\xe9todos de ensamblaje.md","title":"Arboles de decisi\xf3n y m\xe9todos de ensamble","description":"\xbfQue es un \xe1rbol de decisi\xf3n?","date":"2023-06-27T00:00:00.000Z","formattedDate":"27 de junio de 2023","tags":[{"label":"arboles de decisi\xf3n","permalink":"/article/tags/arboles-de-decision"},{"label":"metodos de ensamble","permalink":"/article/tags/metodos-de-ensamble"},{"label":"machine learning","permalink":"/article/tags/machine-learning"}],"readingTime":3.71,"hasTruncateMarker":false,"authors":[{"name":"Darvin Cotrina","title":"Creador de entredata.org","url":"https://github.com/ccdarvin","imageURL":"https://github.com/ccdarvin.png","key":"ccdarvin"}],"frontMatter":{"title":"Arboles de decisi\xf3n y m\xe9todos de ensamble","decription":"Introducci\xf3n a los arboles de decisi\xf3n y m\xe9todos de ensamble","slug":"arboles-decision-ensamble","date":"2023-06-27T00:00:00.000Z","authors":["ccdarvin"],"tags":["arboles de decisi\xf3n","metodos de ensamble","machine learning"]},"nextItem":{"title":"Comando m\xe1gico timeit - jupyter","permalink":"/article/comando-magico-timeit-jupyter"}},"content":"## \xbfQue es un \xe1rbol de decisi\xf3n?\\n\\nUn \xe1rbol de decisi\xf3n es un modelo de predicci\xf3n utilizado en el \xe1mbito de la inteligencia artificial. Dada una base de datos se construye un \xe1rbol de decisi\xf3n para poder llegar a la conclusi\xf3n deseada. Es una herramienta de apoyo para la toma de decisiones.\\n\\n## \xbfQue es un m\xe9todo de ensamblaje?\\n\\nLos m\xe9todos de ensamblaje son m\xe9todos que combinan varios algoritmos de aprendizaje autom\xe1tico para obtener un mejor rendimiento predictivo que un solo algoritmo de aprendizaje autom\xe1tico. Los m\xe9todos de ensamblaje funcionan mejor cuando los predictores individuales est\xe1n correlacionados entre s\xed.\\n\\n\\n### Muestras con reemplazo\\n\\nEn estad\xedstica, el muestreo con reemplazo es un m\xe9todo de muestreo en el que, para cada extracci\xf3n, el elemento elegido se devuelve a la poblaci\xf3n y se mezcla con el resto de elementos. El muestreo con reemplazo es un m\xe9todo de muestreo no exhaustivo.\\n\\n$$P(x_i) = \\\\frac{1}{N}$$\\n\\nEn arboles de decisi\xf3n se utiliza el muestreo con reemplazo para generar los \xe1rboles de decisi\xf3n que se utilizaran para el ensamblaje, es decir, se generan varios \xe1rboles de decisi\xf3n con muestras de la base de datos original, y se combinan para generar un modelo m\xe1s robusto.\\n\\n\\n## Random Forest\\n\\nRandom Forest es un m\xe9todo de ensamblaje que combina varios \xe1rboles de decisi\xf3n, cada uno de los cuales se genera con una muestra de la base de datos original, y se combinan para generar un modelo m\xe1s robusto. esteme metodo usa el muestreo con reemplazo para generar los \xe1rboles de decisi\xf3n.\\n\\nTenemos un datos de entrenamiento de tama\xf1o $m$\\n* para b = 1 hasta B: Utilizamos el muestreo con reemplazo para generar una muestra de tama\xf1o $m$ de la base de datos original. Entrenamos un \xe1rbol de decisi\xf3n $T_b$ con la muestra generada.\\n* Se obtiene el modelo final combinando los $B$ \xe1rboles de decisi\xf3n generados.\\n\\n\\nCuando usamos este algorithmo, muchas veces tenemos la misma divisi\xf3n en el nodo ra\xedz, por lo que podemos modificar un poco el algorithmo para que esto no suceda, y as\xed obtener un mejor modelo.\\n\\n### Elecci\xf3n de caracter\xedsticas aleatorias\\n\\nEn cada nodo, se elige un subconjunto aleatorio de $k$ caracter\xedsticas de todo el conjunto de caracter\xedsticas. si $n$ es el n\xfamero total de caracter\xedsticas, se recomienda $k = \\\\sqrt{n}$ para la regresi\xf3n y $k = \\\\frac{n}{3}$ para la clasificaci\xf3n, debe de tener en cuenta que esto es recomendado para un gran n\xfamero de caracter\xedsticas\\n\\n## XGBoost ( ExTreme Gradient Boosting)\\n\\nXGBoost es un m\xe9todo de ensamblaje que combina varios \xe1rboles de decisi\xf3n, cada uno de los cuales se genera con una muestra de la base de datos original, y se combinan para generar un modelo m\xe1s robusto. este metodo usa el muestreo con reemplazo para generar los \xe1rboles de decisi\xf3n.\\n\\nPero a diferencia de Random Forest, XGBoost utiliza un algorithmo de optimizaci\xf3n para generar los \xe1rboles de decisi\xf3n, En vez de utilizar el muestreo con reemplazo para generar los \xe1rboles de decisi\xf3n con una probabilidad uniforme $1/m$, XGBoost utiliza un algorithmo de optimizaci\xf3n para generar los \xe1rboles de decisi\xf3n con una probabilidad $p_i$ que depende de la p\xe9rdida de la iteraci\xf3n anterior.\\n\\n$$p_i = \\\\frac{e^{\\\\frac{-\\\\Delta L_i}{\\\\lambda}}}{\\\\sum_{i=1}^{m} e^{\\\\frac{-\\\\Delta L_i}{\\\\lambda}}}$$\\n\\nDonde:\\n* $\\\\Delta L_i$ es la p\xe9rdida de la iteraci\xf3n $i$\\n* $\\\\lambda$ es un par\xe1metro de regularizaci\xf3n\\n\\nLa idea de esto es que el algorithmo de optimizaci\xf3n se enfoque en las muestras que tienen una p\xe9rdida mayor, y as\xed generar un mejor modelo.\\n\\n### Ventajas de XGBoost\\n\\n* Implementaci\xf3nes open source en varios lenguajes de programaci\xf3n\\n* Rapidez en el entrenamiento\\n* Buena elecci\xf3n de divisi\xf3nes criticas por defecto y criterio para cuando parar de dividir\\n* Regularizaci\xf3n para evitar el sobreajuste\\n\\n### Implementaci\xf3n en Python\\n\\nPara la implementaci\xf3n en Python, se utilizara la librer\xeda XGBoost, la cual se puede instalar con el comando:\\n\\n```python\\nfrom xgboost import XGBClassifier\\nmodel = XGBClassifier() # XGBRegressor para regresi\xf3n\\nmodel.fit(X_train, y_train)\\ny_pred = model.predict(X_test)\\n```\\n\\n## Cuando usar Arboles de decisi\xf3n y m\xe9todos de ensamblaje\\n\\n* Trabajan bien con datos tabulares (estructurados)\\n* No se recomienda para datos no estructurados (im\xe1genes, texto, audio, etc)\\n* Es muy r\xe1pido en entrenamiento y predicci\xf3n\\n* Peque\xf1os arboles de decisi\xf3n son f\xe1ciles de interpretar (visualizar)\\n\\n## Cuando usar neural networks\\n\\n* Trabaja bien con todo tipo de datos tabulares \\"estructurados\\" y \\"no estructurados\\"\\n* Puede ser lento en entrenamiento y predicci\xf3n\\n* Trabaja con transfer learning\\n* Cuando trabajamos con multiples modelos juntos, puede ser mas sencillo encadenarlos con una red neuronal"},{"id":"comando-magico-timeit-jupyter","metadata":{"permalink":"/article/comando-magico-timeit-jupyter","source":"@site/blog/comando magico timeit - jupyter.md","title":"Comando m\xe1gico timeit - jupyter","description":"El comando m\xe1gico %timeit en Jupyter Lab es una forma conveniente de medir el tiempo de ejecuci\xf3n de una expresi\xf3n o una funci\xf3n directamente en tus celdas de c\xf3digo. Puedes utilizar %timeit para obtener r\xe1pidamente el tiempo promedio de ejecuci\xf3n y comparar diferentes enfoques de implementaci\xf3n.","date":"2023-06-21T05:00:14.000Z","formattedDate":"21 de junio de 2023","tags":[{"label":"jupyter","permalink":"/article/tags/jupyter"},{"label":"python","permalink":"/article/tags/python"},{"label":"timeit","permalink":"/article/tags/timeit"},{"label":"magic command","permalink":"/article/tags/magic-command"}],"readingTime":3.025,"hasTruncateMarker":false,"authors":[{"name":"Darvin Cotrina","title":"Creador de entredata.org","url":"https://github.com/ccdarvin","imageURL":"https://github.com/ccdarvin.png","key":"ccdarvin"}],"frontMatter":{"title":"Comando m\xe1gico timeit - jupyter","description":"El comando m\xe1gico %timeit en Jupyter Lab es una forma conveniente de medir el tiempo de ejecuci\xf3n de una expresi\xf3n o una funci\xf3n directamente en tus celdas de c\xf3digo. Puedes utilizar %timeit para obtener r\xe1pidamente el tiempo promedio de ejecuci\xf3n y comparar diferentes enfoques de implementaci\xf3n.","slug":"comando-magico-timeit-jupyter","authors":["ccdarvin"],"tags":["jupyter","python","timeit","magic command"],"categories":["jupyter"]},"prevItem":{"title":"Arboles de decisi\xf3n y m\xe9todos de ensamble","permalink":"/article/arboles-decision-ensamble"},"nextItem":{"title":"Articulos","permalink":"/article/index"}},"content":"El comando m\xe1gico `%timeit` en Jupyter Lab es una forma conveniente de\\nmedir el tiempo de ejecuci\xf3n de una expresi\xf3n o una funci\xf3n directamente\\nen tus celdas de c\xf3digo. Puedes utilizar `%timeit` para obtener\\nr\xe1pidamente el tiempo promedio de ejecuci\xf3n y comparar diferentes\\nenfoques de implementaci\xf3n.\\n\\n## 1. Uso b\xe1sico de `%timeit` {#uso-b\xe1sico-de-timeit}\\n\\nPara utilizar `%timeit`, simplemente coloca el comando m\xe1gico antes de\\nla expresi\xf3n o funci\xf3n que deseas medir. Por ejemplo, para medir el\\ntiempo de ejecuci\xf3n de la expresi\xf3n `\'1 + 1\'`, puedes usar el siguiente\\nc\xf3digo en una celda de Jupyter Lab:\\n\\n``` python\\n%timeit 1 + 1\\n```\\n\\n``` text\\n10.1 ns \xb1 0.491 ns per loop (mean \xb1 std. dev. of 7 runs, 100,000,000 loops each)\\n```\\n\\nDespu\xe9s de ejecutar la celda, `%timeit` ejecutar\xe1 la expresi\xf3n `\'1 + 1\'`\\nvarias veces y mostrar\xe1 el tiempo promedio de ejecuci\xf3n. En este caso,\\nel tiempo promedio de ejecuci\xf3n en unidades de tiempo\\n\\n## 2. Tabla de tiempos {#tabla-de-tiempos}\\n\\n| Abreviatura | Unidad de tiempo |\\n|-------------|------------------|\\n| ns          | nanosegundos     |\\n| us          | microsegundos    |\\n| ms          | milisegundos     |\\n| s           | segundos         |\\n| m           | minutos          |\\n| h           | horas            |\\n\\n## 3. Especificar el n\xfamero de ejecuciones y repeticiones {#especificar-el-n\xfamero-de-ejecuciones-y-repeticiones}\\n\\nPor defecto, `%timeit` ejecuta la expresi\xf3n o funci\xf3n 100.000 veces y\\nrepite la operaci\xf3n tres veces. Puedes especificar el n\xfamero de\\nejecuciones y repeticiones utilizando la sintaxis\\n`%timeit -r <repeticiones> -n <ejecuciones>`. Por ejemplo, para ejecutar\\nla expresi\xf3n `\'1 + 1\'` 10.000 veces y repetir la operaci\xf3n cinco veces,\\npuedes usar el siguiente c\xf3digo:\\n\\n``` python\\n%timeit -r5 -n50 1 + 1\\n```\\n\\n``` text\\n25.6 ns \xb1 5.28 ns per loop (mean \xb1 std. dev. of 5 runs, 50 loops each)\\n```\\n\\nEn el comando anterior espesificamps que se ejecute 50 veces en 5\\nrepeticiones\\n\\n## 5. Medir el tiempo de ejecuci\xf3n de una funci\xf3n {#medir-el-tiempo-de-ejecuci\xf3n-de-una-funci\xf3n}\\n\\nTambi\xe9n puedes utilizar `%timeit` para medir el tiempo de ejecuci\xf3n de\\nuna funci\xf3n. Por ejemplo, para medir el tiempo de ejecuci\xf3n de la\\nfunci\xf3n `sum()` de Python, puedes usar el siguiente c\xf3digo:\\n\\n``` python\\ndef mi_funcion():\\n    # puedes colocar cualquier c\xf3digo aqu\xed\\n    return 1 + 1\\n```\\n\\nJupyter Lab ejecutara el c\xf3digo y te devolvera el tiempo de ejecuci\xf3n de\\nla funci\xf3n\\n\\n## 6. Medir el tiempo de ejecuci\xf3n de una celda {#medir-el-tiempo-de-ejecuci\xf3n-de-una-celda}\\n\\nTambi\xe9n puedes utilizar `%timeit` para medir el tiempo de ejecuci\xf3n de\\nuna celda completa. Por ejemplo, para medir el tiempo de ejecuci\xf3n de la\\nsiguiente celda, puedes usar el siguiente c\xf3digo:\\n\\n``` python\\n%%timeit\\nx = 1\\nx += 1\\n```\\n\\n``` text\\n36.7 ns \xb1 1.13 ns per loop (mean \xb1 std. dev. of 7 runs, 10,000,000 loops each)\\n```\\n\\n## 7. Obtener el tiempo de ejecuci\xf3n como variable {#obtener-el-tiempo-de-ejecuci\xf3n-como-variable}\\n\\nEn caso de que desees obtener informaci\xf3n m\xe1s detallada sobre el tiempo\\nde ejecuci\xf3n, podrias asignar el resultado de `%timeit` a una variable,\\npara esto utilizaremos las opciones `-o` para almacenar el resultado y\\n-q para silenciar la salida de la celda. Por ejemplo, para obtener el\\ntiempo de ejecuci\xf3n de la expresi\xf3n `\'1 + 1\'` como una variable, puedes\\nusar el siguiente c\xf3digo:\\n\\n``` python\\nresultado = %timeit -o -q 1 + 1\\nprint(f\'El mejor tiempo fue {resultado.best}\')\\nprint(f\'El peor tiempo fue {resultado.worst}\')\\n```\\n\\n``` text\\nEl mejor tiempo fue 9.775258000008763e-09\\nEl peor tiempo fue 1.1235137999756262e-08\\n```\\n\\nHemos visto de forma muy rapida como usar el comando magico `%timeit` en\\nJupyter Lab, con expresiones muy sencillas, pero en la practica se\\nutiliza para medir el tiempo de ejecuci\xf3n de funciones y celdas\\ncompletas, lo cual es muy util para comparar diferentes enfoques de\\nimplementaci\xf3n."},{"id":"/index","metadata":{"permalink":"/article/index","source":"@site/blog/index.md","title":"Articulos","description":"","date":"2023-06-21T05:00:14.000Z","formattedDate":"21 de junio de 2023","tags":[],"readingTime":0,"hasTruncateMarker":false,"authors":[],"frontMatter":{},"prevItem":{"title":"Comando m\xe1gico timeit - jupyter","permalink":"/article/comando-magico-timeit-jupyter"},"nextItem":{"title":"Teorema de limite central","permalink":"/article/teorema-de-limite-central"}},"content":""},{"id":"teorema-de-limite-central","metadata":{"permalink":"/article/teorema-de-limite-central","source":"@site/blog/teorema-de-limite-central.md","title":"Teorema de limite central","description":"El Teorema de l\xedmite central (TLC) es un resultado fundamental en estad\xedstica.","date":"2023-06-21T05:00:14.000Z","formattedDate":"21 de junio de 2023","tags":[{"label":"estad\xedstica","permalink":"/article/tags/estadistica"},{"label":"probabilidad","permalink":"/article/tags/probabilidad"},{"label":"teorema de l\xedmite central","permalink":"/article/tags/teorema-de-limite-central"}],"readingTime":1.46,"hasTruncateMarker":false,"authors":[],"frontMatter":{"title":"Teorema de limite central","description":"El Teorema de l\xedmite central (TLC) es un resultado fundamental en estad\xedstica.","autors":["ccdarvin"],"tags":["estad\xedstica","probabilidad","teorema de l\xedmite central"],"slug":"teorema-de-limite-central"},"prevItem":{"title":"Articulos","permalink":"/article/index"},"nextItem":{"title":"Expresiones regulares en Python","permalink":"/article/expresiones-regulares-python"}},"content":"El teorema del l\xedmite central (TLC) establece que, para una muestra\\naleatoria de tama\xf1o $n$, la distribuci\xf3n de las medias muestrales se\\naproxima a una distribuci\xf3n normal a medida que $n$ aumenta.\\n\\nSean $X_1, X_2, \\\\ldots, X_n$ una muestra aleatoria de tama\xf1o $n$ de una\\npoblaci\xf3n con media $\\\\mu$ y varianza $\\\\sigma^2$. Entonces, para $n$\\nsuficientemente grande, la variable aleatoria es:\\n\\n$$Z_n = \\\\frac{\\\\bar{X} - \\\\mu}{\\\\sigma / \\\\sqrt{n}}$$\\n\\n## En python {#en-python}\\n\\nPara graficar el TLC en python, usaremos un ejemplo de tirar dados.\\n\\n``` python\\nimport numpy as np  \\nimport matplotlib.pyplot as plt\\n# Tiraremos 10 veces los dados y calcularemos la media \\ndados = list(range(1,7))\\nmuestra_10 = np.random.choice(dados, size=10, replace=True)\\nmedia = np.mean(muestra_10)\\nprint(\\"La media de la muestra es: \\", media)\\n```\\n\\n``` text\\nLa media de la muestra es:  3.0\\n```\\n\\nComo podemos ver la Media de esta muestra no es 3.5, hora veamos que\\npasa si hacemos este mismo experimento pero 10 veces.\\n\\n``` python\\nexp_10 = [np.mean(muestra) for muestra in np.random.choice(dados, size=(10, 10), replace=True)]\\n\\n# Graficamos el histograma de las medias\\nplt.hist(exp_10, bins=10, density=True, alpha=0.5)\\nplt.vlines(3.5, 0, 1, color=\'red\', label=\'Media te\xf3rica\')\\nplt.vlines(np.mean(exp_10), 0, 1, color=\'green\', label=\'Media muestral\')\\nplt.show()\\n```\\n\\n![](teorema-de-limite-central_files/figure-markdown_strict/cell-3-output-1.png)\\n\\nAhora veamos que pasa si hacemos este mismo experimento pero 1000 veces.\\n\\n``` python\\nexp_1000 = [np.mean(muestra) for muestra in np.random.choice(dados, size=(1000, 10), replace=True)]\\n# Graficamos\\nplt.hist(exp_1000, bins=10, density=True, alpha=0.5)\\nplt.vlines(3.5, 0, 1, color=\'red\', label=\'Media te\xf3rica\')\\nplt.vlines(np.mean(exp_1000), 0, 1, color=\'green\', label=\'Media muestral\')\\nplt.show()\\n```\\n\\n![](teorema-de-limite-central_files/figure-markdown_strict/cell-4-output-1.png)\\n\\nComo podemos ver, a medida que aumentamos el n\xfamero de experimentos, la\\ndistribuci\xf3n de las medias muestrales se aproxima a una distribuci\xf3n\\nnormal.\\n\\n:::caution\\n\\nSi ejecutas este c\xf3digo en tu computadora, es posible que no obtengas\\nlos mismos resultados que yo, ya que los n\xfameros aleatorios son\\ngenerados de forma aleatoria.\\n\\n:::"},{"id":"expresiones-regulares-python","metadata":{"permalink":"/article/expresiones-regulares-python","source":"@site/blog/Regex en Python.md","title":"Expresiones regulares en Python","description":"Las expresiones regulares son una secuencia de caracteres que forman un","date":"2023-06-08T00:00:00.000Z","formattedDate":"8 de junio de 2023","tags":[{"label":"python","permalink":"/article/tags/python"},{"label":"Expresiones regulares","permalink":"/article/tags/expresiones-regulares"}],"readingTime":3.03,"hasTruncateMarker":false,"authors":[{"name":"Darvin Cotrina","title":"Creador de entredata.org","url":"https://github.com/ccdarvin","imageURL":"https://github.com/ccdarvin.png","key":"ccdarvin"}],"frontMatter":{"title":"Expresiones regulares en Python","slug":"expresiones-regulares-python","date":"2023-06-08T00:00:00.000Z","authors":["ccdarvin"],"tags":["python","Expresiones regulares"]},"prevItem":{"title":"Teorema de limite central","permalink":"/article/teorema-de-limite-central"},"nextItem":{"title":"Vectorize de numpy vs apply de pandas","permalink":"/article/vectorize de numpy vs apply de pandas"}},"content":"Las expresiones regulares son una secuencia de caracteres que forman un\\npatr\xf3n de b\xfasqueda, principalmente utilizadas para la b\xfasqueda de\\npatrones de cadenas de caracteres u operaciones de sustituciones.\\n\\n## Caracteres especiales {#caracteres-especiales}\\n\\nLos caracteres especiales son aquellos que tienen un significado\\nespecial para las expresiones regulares. Por ejemplo, el punto y coma\\n(;) es un caracter especial que se utiliza para separar instrucciones en\\nPython. Sin embargo, en las expresiones regulares, el punto y coma (;)\\nes un caracter especial que se utiliza para indicar que el patr\xf3n de\\nb\xfasqueda debe coincidir con cualquier caracter.\\n\\nA continuaci\xf3n se muestra una lista de los caracteres especiales m\xe1s\\nutilizados en las expresiones regulares:\\n\\n| Caracter                                  | Descripci\xf3n                                                         |\\n|------------------------------------|------------------------------------|\\n| .                                         | Coincide con cualquier caracter                                     |\\n| ^                                         | Coincide con el inicio de una cadena                                |\\n| \\\\$                                        | Coincide con el final de una cadena                                 |\\n| \\\\*                                        | Coincide con 0 o m\xe1s ocurrencias del caracter anterior              |\\n| \\\\+                                        | Coincide con 1 o m\xe1s ocurrencias del caracter anterior              |\\n| ?                                         | Coincide con 0 o 1 ocurrencia del caracter anterior                 |\\n| {n}                                       | Coincide con n ocurrencias del caracter anterior                    |\\n| {n,}                                      | Coincide con n o m\xe1s ocurrencias del caracter anterior              |\\n| {n,m}                                     | Coincide con un rango de ocurrencias del caracter anterior          |\\n| \\\\[\u2026\\\\]                                     | Coincide con cualquier caracter dentro de los corchetes             |\\n| \\\\[^...\\\\]                                  | Coincide con cualquier caracter que no est\xe9 dentro de los corchetes |\\n| (\u2026)                                       | Agrupa una serie de patrones                                        |\\n|                                           | Coincide con un espacio en blanco                                   |\\n|                                           | Coincide con cualquier caracter que no sea un espacio en blanco     |\\n|                                           | Coincide con cualquier caracter alfanum\xe9rico                        |\\n|                                           | Coincide con cualquier caracter que no sea alfanum\xe9rico             |\\n|  Coincide con cualquier caracter num\xe9rico |                                                                     |\\n|                                           | Coincide con cualquier caracter que no sea num\xe9rico                 |\\n\\n## Trabajando en python {#trabajando-en-python}\\n\\npara trabajar con expresiones regulares en python, se debe importar el\\nm\xf3dulo re. A continuaci\xf3n se muestra un ejemplo de como utilizar el\\nm\xf3dulo re para buscar un patr\xf3n en una cadena de caracteres:\\n\\n``` python\\nimport re\\n```\\n\\n### Encontrar todas las coincidencias {#encontrar-todas-las-coincidencias}\\n\\n``` python\\ntext = \\"Hola, mi nombre es Juan y mi n\xfamero de tel\xe9fono es 123456789\\"\\npattern = r\\"mi\\"\\n\\nprint(re.findall(pattern, text))\\npattern = r\\"\\\\d+\\"\\nprint(re.findall(pattern, text))\\n```\\n\\n``` text\\n[\'mi\', \'mi\']\\n[\'123456789\']\\n```\\n\\n### Sustituir un patr\xf3n en una cadena de caracteres {#sustituir-un-patr\xf3n-en-una-cadena-de-caracteres}\\n\\n``` python\\ntext = \\"Hol, mi nombre es Juan y mi nUmero de tel\xe9fono es 123456789\\"\\n\\ntext = re.sub(r\\"Hol\\", \\"Hola\\", text)\\nprint(text)\\ntext = re.sub(r\\"U\\", \\"\xfa\\", text)\\nprint(text)\\n```\\n\\n``` text\\nHola, mi nombre es Juan y mi nUmero de tel\xe9fono es 123456789\\nHola, mi nombre es Juan y mi n\xfamero de tel\xe9fono es 123456789\\n```\\n\\n### Dividir una cadena de caracteres {#dividir-una-cadena-de-caracteres}\\n\\n``` python\\ntext = \\"Hola, mi nombre es Juan y mi n\xfamero de tel\xe9fono es 123456789\\"\\n\\ntext_split = re.split(r\\"y\\", text)\\ntext_split\\n```\\n\\n``` text\\n[\'Hola, mi nombre es Juan \', \' mi n\xfamero de tel\xe9fono es 123456789\']\\n```\\n\\nPython tambien tiene integrado funciones de expresiones regulares en el\\nm\xf3dulo string.\\n\\n``` python\\ntext = \\"Hola, mi nombre es Juan y mi n\xfamero de tel\xe9fono es 123456789\\"\\nprint(text.replace(\\"Juan\\", \\"Darvin\\"))\\nprint(text.split(\',\'))\\n```\\n\\n``` text\\nHola, mi nombre es Darvin y mi n\xfamero de tel\xe9fono es 123456789\\n[\'Hola\', \' mi nombre es Juan y mi n\xfamero de tel\xe9fono es 123456789\']\\n```\\n\\nEstos son solo alguno de todos los metodos que tiene python para\\ntrabajar con expresiones regulares. Para m\xe1s informaci\xf3n, puede\\nconsultar la documentaci\xf3n oficial de python en el siguiente enlace:\\nhttps://docs.python.org/3/library/re.html"},{"id":"/vectorize de numpy vs apply de pandas","metadata":{"permalink":"/article/vectorize de numpy vs apply de pandas","source":"@site/blog/vectorize de numpy vs apply de pandas.md","title":"Vectorize de numpy vs apply de pandas","description":"Tanto numpy como pandas tienen funciones que permiten aplicar una","date":"2023-06-01T00:00:00.000Z","formattedDate":"1 de junio de 2023","tags":[{"label":"python","permalink":"/article/tags/python"},{"label":"pandas","permalink":"/article/tags/pandas"},{"label":"numpy","permalink":"/article/tags/numpy"},{"label":"vectorize","permalink":"/article/tags/vectorize"},{"label":"apply","permalink":"/article/tags/apply"}],"readingTime":0.945,"hasTruncateMarker":false,"authors":[{"name":"Darvin Cotrina","title":"Creador de entredata.org","url":"https://github.com/ccdarvin","imageURL":"https://github.com/ccdarvin.png","key":"ccdarvin"}],"frontMatter":{"title":"Vectorize de numpy vs apply de pandas","date":"2023-06-01T00:00:00.000Z","deescription":"Cual es la diferencia entre vectorize de numpy y apply de pandas","authors":["ccdarvin"],"tags":["python","pandas","numpy","vectorize","apply"]},"prevItem":{"title":"Expresiones regulares en Python","permalink":"/article/expresiones-regulares-python"},"nextItem":{"title":"\xbfComo perfilar c\xf3digo con line_profiler?","permalink":"/article/perfilar-codigo-con-line-profiler"}},"content":"Tanto numpy como pandas tienen funciones que permiten aplicar una\\nfuncion a un array o dataframe, respectivamente, de forma vectorizada.\\nEsto significa que la funcion se aplica a todos los elementos del array\\no dataframe, sin necesidad de iterar sobre ellos. Esto es mucho mas\\neficiente que iterar sobre los elementos, ya que no se necesita hacer un\\nloop en python, sino que la funcion se aplica en C.\\n\\n``` python\\nimport numpy as np\\nimport pandas as pd\\n\\n# comparaci\xf3n de vectorize de numpy vs apply de pandas\\n\\n# vectorize de numpy\\ndef f(x):\\n    return x**2 + 1\\n\\narray = np.arange(100000, dtype=np.int16)\\n\\n%timeit np.vectorize(f)(array)\\n# pandas apply\\ndf = pd.DataFrame({\'x\': array})\\n%timeit df[\'x\'].apply(f)\\n```\\n\\n``` text\\n24.2 ms \xb1 1.56 ms per loop (mean \xb1 std. dev. of 7 runs, 10 loops each)\\n40.7 ms \xb1 1.01 ms per loop (mean \xb1 std. dev. of 7 runs, 10 loops each)\\n```\\n\\nEsta es una comparaci\xf3n muy simple entre ambas formas de aplicar una\\nfuncion, pero nos da una idea bastante clara de la diferencia de\\nperformance entre ambas, como podemos ver vectorize fue mucho mas rapido\\nque apply."},{"id":"perfilar-codigo-con-line-profiler","metadata":{"permalink":"/article/perfilar-codigo-con-line-profiler","source":"@site/blog/perfilar codigo con line_profiler.md","title":"\xbfComo perfilar c\xf3digo con line_profiler?","description":"Perfilar c\xf3digo nos permite identificar las partes de nuestro c\xf3digo que son m\xe1s lentas y optimizarlas.","date":"2023-05-03T00:00:00.000Z","formattedDate":"3 de mayo de 2023","tags":[{"label":"python","permalink":"/article/tags/python"},{"label":"perfilar","permalink":"/article/tags/perfilar"},{"label":"line_profiler","permalink":"/article/tags/line-profiler"},{"label":"optimizar c\xf3digo","permalink":"/article/tags/optimizar-codigo"}],"readingTime":1.665,"hasTruncateMarker":false,"authors":[{"name":"Darvin Cotrina","title":"Creador de entredata.org","url":"https://github.com/ccdarvin","imageURL":"https://github.com/ccdarvin.png","key":"ccdarvin"}],"frontMatter":{"title":"\xbfComo perfilar c\xf3digo con line_profiler?","description":"Perfilar c\xf3digo nos permite identificar las partes de nuestro c\xf3digo que son m\xe1s lentas y optimizarlas.","lang":"es","authors":["ccdarvin"],"slug":"perfilar-codigo-con-line-profiler","date":"2023-05-03T00:00:00.000Z","tags":["python","perfilar","line_profiler","optimizar c\xf3digo"]},"prevItem":{"title":"Vectorize de numpy vs apply de pandas","permalink":"/article/vectorize de numpy vs apply de pandas"}},"content":"\xbfAlguna vez has tenido que optimizar el c\xf3digo de un programa?\\n`line_profiler` es una herramienta que te permite perfilar el c\xf3digo de\\nun programa para encontrar las partes que m\xe1s tiempo consumen. En este\\nnotebook veremos c\xf3mo usarla.\\n\\n## Instalaci\xf3n {#instalaci\xf3n}\\n\\nComo `line_profiler` no viene instalado por defecto en Anaconda, lo\\ninstalaremos con `conda`:\\n\\nEn la terminal:\\n\\n``` bash\\npip install line_profiler\\n```\\n\\nEn el notebook:\\n\\n``` python\\n! pip install line_profiler\\n```\\n\\n## \xbfC\xf3mo funciona en Jupyter? {#c\xf3mo-funciona-en-jupyter}\\n\\n`line_profiler` es una herramienta que permite perfilar el c\xf3digo de un\\nprograma. Esto significa que nos permite ver cu\xe1nto tiempo se tarda en\\nejecutar cada l\xednea de c\xf3digo. Para ello, `line_profiler` nos permite\\nusar el comando `%lprun` en Jupyter. Este comando nos permite perfilar\\nuna funci\xf3n. Para ello, debemos a\xf1adir el decorador `@profile` a la\\nfunci\xf3n que queremos perfilar.\\n\\ncargar el m\xf3dulo `line_profiler` en el notebook:\\n\\n``` python\\n%load_ext line_profiler\\n```\\n\\n``` text\\nThe line_profiler extension is already loaded. To reload it, use:\\n  %reload_ext line_profiler\\n```\\n\\n## Perfilando una funci\xf3n {#perfilando-una-funci\xf3n}\\n\\nPerfilar una funcion en en jupyter lab ees muy sencillo con el comando\\n`%lprun`. Para ello vamos a crear una funcion de prueba que calcule el\\ndoble de una lista de n\xfameros:\\n\\n``` python\\n\\ndef funcion_prueba():\\n    data = [1, 2, 3, 4, 5, 6, 7, 8, 9]\\n    doble = []\\n    for item in data:\\n        doble.append(item * 2)\\n    \\n    return doble    \\n```\\n\\n``` python\\n%lprun -f funcion_prueba funcion_prueba()\\n```\\n\\n``` text\\nTimer unit: 1e-07 s\\n\\nTotal time: 8e-06 s\\n\\nCould not find file C:\\\\Users\\\\WillyCotrina\\\\AppData\\\\Local\\\\Temp\\\\ipykernel_14792\\\\1026023441.py\\nAre you sure you are running this program from the same directory\\nthat you ran the profiler from?\\nContinuing without the function\'s contents.\\n\\nLine #      Hits         Time  Per Hit   % Time  Line Contents\\n==============================================================\\n     1                                           \\n     2         1          7.0      7.0      8.8  \\n     3         1          3.0      3.0      3.8  \\n     4         9         24.0      2.7     30.0  \\n     5         9         43.0      4.8     53.8  \\n     6                                           \\n     7         1          3.0      3.0      3.8\\n```\\n\\nComo pudimos notar pefilar una funcion es muy sencillo y extremaente\\nutil para optimizar el codigo de un programa."}]}')}}]);