"use strict";(self.webpackChunkdocsweb=self.webpackChunkdocsweb||[]).push([[4037],{3554:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"teorema-de-limite-central","metadata":{"permalink":"/article/teorema-de-limite-central","source":"@site/blog/teorema-de-limite-central.md","title":"Teorema de limite central","description":"El Teorema de l\xedmite central (TLC) es un resultado fundamental en estad\xedstica.","date":"2023-06-11T02:51:38.535Z","formattedDate":"11 de junio de 2023","tags":[{"label":"estad\xedstica","permalink":"/article/tags/estadistica"},{"label":"probabilidad","permalink":"/article/tags/probabilidad"},{"label":"teorema de l\xedmite central","permalink":"/article/tags/teorema-de-limite-central"}],"readingTime":1.46,"hasTruncateMarker":false,"authors":[],"frontMatter":{"title":"Teorema de limite central","description":"El Teorema de l\xedmite central (TLC) es un resultado fundamental en estad\xedstica.","autors":["ccdarvin"],"tags":["estad\xedstica","probabilidad","teorema de l\xedmite central"],"slug":"teorema-de-limite-central"},"nextItem":{"title":"Comando m\xe1gico timeit - jupyter","permalink":"/article/comando-magico-timeit-jupyter"}},"content":"El teorema del l\xedmite central (TLC) establece que, para una muestra\\naleatoria de tama\xf1o $n$, la distribuci\xf3n de las medias muestrales se\\naproxima a una distribuci\xf3n normal a medida que $n$ aumenta.\\n\\nSean $X_1, X_2, \\\\ldots, X_n$ una muestra aleatoria de tama\xf1o $n$ de una\\npoblaci\xf3n con media $\\\\mu$ y varianza $\\\\sigma^2$. Entonces, para $n$\\nsuficientemente grande, la variable aleatoria es:\\n\\n$$Z_n = \\\\frac{\\\\bar{X} - \\\\mu}{\\\\sigma / \\\\sqrt{n}}$$\\n\\n## En python {#en-python}\\n\\nPara graficar el TLC en python, usaremos un ejemplo de tirar dados.\\n\\n``` python\\nimport numpy as np  \\nimport matplotlib.pyplot as plt\\n# Tiraremos 10 veces los dados y calcularemos la media \\ndados = list(range(1,7))\\nmuestra_10 = np.random.choice(dados, size=10, replace=True)\\nmedia = np.mean(muestra_10)\\nprint(\\"La media de la muestra es: \\", media)\\n```\\n\\n``` text\\nLa media de la muestra es:  3.0\\n```\\n\\nComo podemos ver la Media de esta muestra no es 3.5, hora veamos que\\npasa si hacemos este mismo experimento pero 10 veces.\\n\\n``` python\\nexp_10 = [np.mean(muestra) for muestra in np.random.choice(dados, size=(10, 10), replace=True)]\\n\\n# Graficamos el histograma de las medias\\nplt.hist(exp_10, bins=10, density=True, alpha=0.5)\\nplt.vlines(3.5, 0, 1, color=\'red\', label=\'Media te\xf3rica\')\\nplt.vlines(np.mean(exp_10), 0, 1, color=\'green\', label=\'Media muestral\')\\nplt.show()\\n```\\n\\n![](teorema-de-limite-central_files/figure-markdown_strict/cell-3-output-1.png)\\n\\nAhora veamos que pasa si hacemos este mismo experimento pero 1000 veces.\\n\\n``` python\\nexp_1000 = [np.mean(muestra) for muestra in np.random.choice(dados, size=(1000, 10), replace=True)]\\n# Graficamos\\nplt.hist(exp_1000, bins=10, density=True, alpha=0.5)\\nplt.vlines(3.5, 0, 1, color=\'red\', label=\'Media te\xf3rica\')\\nplt.vlines(np.mean(exp_1000), 0, 1, color=\'green\', label=\'Media muestral\')\\nplt.show()\\n```\\n\\n![](teorema-de-limite-central_files/figure-markdown_strict/cell-4-output-1.png)\\n\\nComo podemos ver, a medida que aumentamos el n\xfamero de experimentos, la\\ndistribuci\xf3n de las medias muestrales se aproxima a una distribuci\xf3n\\nnormal.\\n\\n:::caution\\n\\nSi ejecutas este c\xf3digo en tu computadora, es posible que no obtengas\\nlos mismos resultados que yo, ya que los n\xfameros aleatorios son\\ngenerados de forma aleatoria.\\n\\n:::"},{"id":"comando-magico-timeit-jupyter","metadata":{"permalink":"/article/comando-magico-timeit-jupyter","source":"@site/blog/comando magico timeit - jupyter.md","title":"Comando m\xe1gico timeit - jupyter","description":"El comando m\xe1gico %timeit en Jupyter Lab es una forma conveniente de medir el tiempo de ejecuci\xf3n de una expresi\xf3n o una funci\xf3n directamente en tus celdas de c\xf3digo. Puedes utilizar %timeit para obtener r\xe1pidamente el tiempo promedio de ejecuci\xf3n y comparar diferentes enfoques de implementaci\xf3n.","date":"2023-06-11T02:51:37.631Z","formattedDate":"11 de junio de 2023","tags":[{"label":"jupyter","permalink":"/article/tags/jupyter"},{"label":"python","permalink":"/article/tags/python"},{"label":"timeit","permalink":"/article/tags/timeit"},{"label":"magic command","permalink":"/article/tags/magic-command"}],"readingTime":3.025,"hasTruncateMarker":false,"authors":[{"name":"Darvin Cotrina","title":"Creador de entredata.org","url":"https://github.com/ccdarvin","imageURL":"https://github.com/ccdarvin.png","key":"ccdarvin"}],"frontMatter":{"title":"Comando m\xe1gico timeit - jupyter","description":"El comando m\xe1gico %timeit en Jupyter Lab es una forma conveniente de medir el tiempo de ejecuci\xf3n de una expresi\xf3n o una funci\xf3n directamente en tus celdas de c\xf3digo. Puedes utilizar %timeit para obtener r\xe1pidamente el tiempo promedio de ejecuci\xf3n y comparar diferentes enfoques de implementaci\xf3n.","slug":"comando-magico-timeit-jupyter","authors":["ccdarvin"],"tags":["jupyter","python","timeit","magic command"],"categories":["jupyter"]},"prevItem":{"title":"Teorema de limite central","permalink":"/article/teorema-de-limite-central"},"nextItem":{"title":"Articulos","permalink":"/article/index"}},"content":"El comando m\xe1gico `%timeit` en Jupyter Lab es una forma conveniente de\\nmedir el tiempo de ejecuci\xf3n de una expresi\xf3n o una funci\xf3n directamente\\nen tus celdas de c\xf3digo. Puedes utilizar `%timeit` para obtener\\nr\xe1pidamente el tiempo promedio de ejecuci\xf3n y comparar diferentes\\nenfoques de implementaci\xf3n.\\n\\n## 1. Uso b\xe1sico de `%timeit` {#uso-b\xe1sico-de-timeit}\\n\\nPara utilizar `%timeit`, simplemente coloca el comando m\xe1gico antes de\\nla expresi\xf3n o funci\xf3n que deseas medir. Por ejemplo, para medir el\\ntiempo de ejecuci\xf3n de la expresi\xf3n `\'1 + 1\'`, puedes usar el siguiente\\nc\xf3digo en una celda de Jupyter Lab:\\n\\n``` python\\n%timeit 1 + 1\\n```\\n\\n``` text\\n10.1 ns \xb1 0.491 ns per loop (mean \xb1 std. dev. of 7 runs, 100,000,000 loops each)\\n```\\n\\nDespu\xe9s de ejecutar la celda, `%timeit` ejecutar\xe1 la expresi\xf3n `\'1 + 1\'`\\nvarias veces y mostrar\xe1 el tiempo promedio de ejecuci\xf3n. En este caso,\\nel tiempo promedio de ejecuci\xf3n en unidades de tiempo\\n\\n## 2. Tabla de tiempos {#tabla-de-tiempos}\\n\\n| Abreviatura | Unidad de tiempo |\\n|-------------|------------------|\\n| ns          | nanosegundos     |\\n| us          | microsegundos    |\\n| ms          | milisegundos     |\\n| s           | segundos         |\\n| m           | minutos          |\\n| h           | horas            |\\n\\n## 3. Especificar el n\xfamero de ejecuciones y repeticiones {#especificar-el-n\xfamero-de-ejecuciones-y-repeticiones}\\n\\nPor defecto, `%timeit` ejecuta la expresi\xf3n o funci\xf3n 100.000 veces y\\nrepite la operaci\xf3n tres veces. Puedes especificar el n\xfamero de\\nejecuciones y repeticiones utilizando la sintaxis\\n`%timeit -r <repeticiones> -n <ejecuciones>`. Por ejemplo, para ejecutar\\nla expresi\xf3n `\'1 + 1\'` 10.000 veces y repetir la operaci\xf3n cinco veces,\\npuedes usar el siguiente c\xf3digo:\\n\\n``` python\\n%timeit -r5 -n50 1 + 1\\n```\\n\\n``` text\\n25.6 ns \xb1 5.28 ns per loop (mean \xb1 std. dev. of 5 runs, 50 loops each)\\n```\\n\\nEn el comando anterior espesificamps que se ejecute 50 veces en 5\\nrepeticiones\\n\\n## 5. Medir el tiempo de ejecuci\xf3n de una funci\xf3n {#medir-el-tiempo-de-ejecuci\xf3n-de-una-funci\xf3n}\\n\\nTambi\xe9n puedes utilizar `%timeit` para medir el tiempo de ejecuci\xf3n de\\nuna funci\xf3n. Por ejemplo, para medir el tiempo de ejecuci\xf3n de la\\nfunci\xf3n `sum()` de Python, puedes usar el siguiente c\xf3digo:\\n\\n``` python\\ndef mi_funcion():\\n    # puedes colocar cualquier c\xf3digo aqu\xed\\n    return 1 + 1\\n```\\n\\nJupyter Lab ejecutara el c\xf3digo y te devolvera el tiempo de ejecuci\xf3n de\\nla funci\xf3n\\n\\n## 6. Medir el tiempo de ejecuci\xf3n de una celda {#medir-el-tiempo-de-ejecuci\xf3n-de-una-celda}\\n\\nTambi\xe9n puedes utilizar `%timeit` para medir el tiempo de ejecuci\xf3n de\\nuna celda completa. Por ejemplo, para medir el tiempo de ejecuci\xf3n de la\\nsiguiente celda, puedes usar el siguiente c\xf3digo:\\n\\n``` python\\n%%timeit\\nx = 1\\nx += 1\\n```\\n\\n``` text\\n36.7 ns \xb1 1.13 ns per loop (mean \xb1 std. dev. of 7 runs, 10,000,000 loops each)\\n```\\n\\n## 7. Obtener el tiempo de ejecuci\xf3n como variable {#obtener-el-tiempo-de-ejecuci\xf3n-como-variable}\\n\\nEn caso de que desees obtener informaci\xf3n m\xe1s detallada sobre el tiempo\\nde ejecuci\xf3n, podrias asignar el resultado de `%timeit` a una variable,\\npara esto utilizaremos las opciones `-o` para almacenar el resultado y\\n-q para silenciar la salida de la celda. Por ejemplo, para obtener el\\ntiempo de ejecuci\xf3n de la expresi\xf3n `\'1 + 1\'` como una variable, puedes\\nusar el siguiente c\xf3digo:\\n\\n``` python\\nresultado = %timeit -o -q 1 + 1\\nprint(f\'El mejor tiempo fue {resultado.best}\')\\nprint(f\'El peor tiempo fue {resultado.worst}\')\\n```\\n\\n``` text\\nEl mejor tiempo fue 9.775258000008763e-09\\nEl peor tiempo fue 1.1235137999756262e-08\\n```\\n\\nHemos visto de forma muy rapida como usar el comando magico `%timeit` en\\nJupyter Lab, con expresiones muy sencillas, pero en la practica se\\nutiliza para medir el tiempo de ejecuci\xf3n de funciones y celdas\\ncompletas, lo cual es muy util para comparar diferentes enfoques de\\nimplementaci\xf3n."},{"id":"/index","metadata":{"permalink":"/article/index","source":"@site/blog/index.md","title":"Articulos","description":"","date":"2023-06-11T01:12:01.000Z","formattedDate":"11 de junio de 2023","tags":[],"readingTime":0,"hasTruncateMarker":false,"authors":[],"frontMatter":{},"prevItem":{"title":"Comando m\xe1gico timeit - jupyter","permalink":"/article/comando-magico-timeit-jupyter"},"nextItem":{"title":"Distribuci\xf3n de probabilidad","permalink":"/article/Cheat Cheet/Distribuci\xf3n de probabilidad"}},"content":""},{"id":"/Cheat Cheet/Distribuci\xf3n de probabilidad","metadata":{"permalink":"/article/Cheat Cheet/Distribuci\xf3n de probabilidad","source":"@site/blog/Cheat Cheet/Distribuci\xf3n de probabilidad.mdx","title":"Distribuci\xf3n de probabilidad","description":"Tabla","date":"2023-06-11T01:12:01.000Z","formattedDate":"11 de junio de 2023","tags":[],"readingTime":0.59,"hasTruncateMarker":false,"authors":[],"frontMatter":{},"prevItem":{"title":"Articulos","permalink":"/article/index"},"nextItem":{"title":"Expresiones regulares en Python","permalink":"/article/expresiones-regulares-python"}},"content":"## Tabla\\n\\n| Tipo | Nombre | Notaci\xf3n | Par\xe1metros | Media | Varianza | Funci\xf3n de densidad | Funci\xf3n de distribuci\xf3n |\\n|------|--------|----------|------------|-------|----------|---------------------|-------------------------|\\n| Discreta | Bernoulli | $Ber(p)$ | $p \\\\in [0,1]$ | $p$ | $p(1-p)$ | $p^x(1-p)^{1-x}$ | $F(x) = \\\\begin{cases} 0 & \\\\text{si } x < 0 \\\\\\\\ 1-p & \\\\text{si } 0 \\\\leq x < 1 \\\\\\\\ 1 & \\\\text{si } x \\\\geq 1 \\\\end{cases}$ |\\n| Discreta | Binomial | $Bin(n,p)$ | $n \\\\in \\\\mathbb{N}$, $p \\\\in [0,1]$ | $np$ | $np(1-p)$ | $\\\\binom{n}{x}p^x(1-p)^{n-x}$ | $F(x) = \\\\sum_{i=0}^x \\\\binom{n}{i}p^i(1-p)^{n-i}$ |\\n| Discreta | Poisson | $Poi(\\\\lambda)$ | $\\\\lambda > 0$ | $\\\\lambda$ | $\\\\lambda$ | $\\\\frac{\\\\lambda^x}{x!}e^{-\\\\lambda}$ | $F(x) = \\\\sum_{i=0}^x \\\\frac{\\\\lambda^i}{i!}e^{-\\\\lambda}$ |"},{"id":"expresiones-regulares-python","metadata":{"permalink":"/article/expresiones-regulares-python","source":"@site/blog/Regex en Python.md","title":"Expresiones regulares en Python","description":"Las expresiones regulares son una secuencia de caracteres que forman un","date":"2023-06-08T00:00:00.000Z","formattedDate":"8 de junio de 2023","tags":[{"label":"python","permalink":"/article/tags/python"},{"label":"Expresiones regulares","permalink":"/article/tags/expresiones-regulares"}],"readingTime":3.03,"hasTruncateMarker":false,"authors":[{"name":"Darvin Cotrina","title":"Creador de entredata.org","url":"https://github.com/ccdarvin","imageURL":"https://github.com/ccdarvin.png","key":"ccdarvin"}],"frontMatter":{"title":"Expresiones regulares en Python","slug":"expresiones-regulares-python","date":"2023-06-08T00:00:00.000Z","authors":["ccdarvin"],"tags":["python","Expresiones regulares"]},"prevItem":{"title":"Distribuci\xf3n de probabilidad","permalink":"/article/Cheat Cheet/Distribuci\xf3n de probabilidad"},"nextItem":{"title":"Distribuci\xf3n de poisson - python","permalink":"/article/distribucion-de-poisson-python"}},"content":"Las expresiones regulares son una secuencia de caracteres que forman un\\npatr\xf3n de b\xfasqueda, principalmente utilizadas para la b\xfasqueda de\\npatrones de cadenas de caracteres u operaciones de sustituciones.\\n\\n## Caracteres especiales {#caracteres-especiales}\\n\\nLos caracteres especiales son aquellos que tienen un significado\\nespecial para las expresiones regulares. Por ejemplo, el punto y coma\\n(;) es un caracter especial que se utiliza para separar instrucciones en\\nPython. Sin embargo, en las expresiones regulares, el punto y coma (;)\\nes un caracter especial que se utiliza para indicar que el patr\xf3n de\\nb\xfasqueda debe coincidir con cualquier caracter.\\n\\nA continuaci\xf3n se muestra una lista de los caracteres especiales m\xe1s\\nutilizados en las expresiones regulares:\\n\\n| Caracter                                  | Descripci\xf3n                                                         |\\n|------------------------------------|------------------------------------|\\n| .                                         | Coincide con cualquier caracter                                     |\\n| ^                                         | Coincide con el inicio de una cadena                                |\\n| \\\\$                                        | Coincide con el final de una cadena                                 |\\n| \\\\*                                        | Coincide con 0 o m\xe1s ocurrencias del caracter anterior              |\\n| \\\\+                                        | Coincide con 1 o m\xe1s ocurrencias del caracter anterior              |\\n| ?                                         | Coincide con 0 o 1 ocurrencia del caracter anterior                 |\\n| {n}                                       | Coincide con n ocurrencias del caracter anterior                    |\\n| {n,}                                      | Coincide con n o m\xe1s ocurrencias del caracter anterior              |\\n| {n,m}                                     | Coincide con un rango de ocurrencias del caracter anterior          |\\n| \\\\[\u2026\\\\]                                     | Coincide con cualquier caracter dentro de los corchetes             |\\n| \\\\[^...\\\\]                                  | Coincide con cualquier caracter que no est\xe9 dentro de los corchetes |\\n| (\u2026)                                       | Agrupa una serie de patrones                                        |\\n|                                           | Coincide con un espacio en blanco                                   |\\n|                                           | Coincide con cualquier caracter que no sea un espacio en blanco     |\\n|                                           | Coincide con cualquier caracter alfanum\xe9rico                        |\\n|                                           | Coincide con cualquier caracter que no sea alfanum\xe9rico             |\\n|  Coincide con cualquier caracter num\xe9rico |                                                                     |\\n|                                           | Coincide con cualquier caracter que no sea num\xe9rico                 |\\n\\n## Trabajando en python {#trabajando-en-python}\\n\\npara trabajar con expresiones regulares en python, se debe importar el\\nm\xf3dulo re. A continuaci\xf3n se muestra un ejemplo de como utilizar el\\nm\xf3dulo re para buscar un patr\xf3n en una cadena de caracteres:\\n\\n``` python\\nimport re\\n```\\n\\n### Encontrar todas las coincidencias {#encontrar-todas-las-coincidencias}\\n\\n``` python\\ntext = \\"Hola, mi nombre es Juan y mi n\xfamero de tel\xe9fono es 123456789\\"\\npattern = r\\"mi\\"\\n\\nprint(re.findall(pattern, text))\\npattern = r\\"\\\\d+\\"\\nprint(re.findall(pattern, text))\\n```\\n\\n``` text\\n[\'mi\', \'mi\']\\n[\'123456789\']\\n```\\n\\n### Sustituir un patr\xf3n en una cadena de caracteres {#sustituir-un-patr\xf3n-en-una-cadena-de-caracteres}\\n\\n``` python\\ntext = \\"Hol, mi nombre es Juan y mi nUmero de tel\xe9fono es 123456789\\"\\n\\ntext = re.sub(r\\"Hol\\", \\"Hola\\", text)\\nprint(text)\\ntext = re.sub(r\\"U\\", \\"\xfa\\", text)\\nprint(text)\\n```\\n\\n``` text\\nHola, mi nombre es Juan y mi nUmero de tel\xe9fono es 123456789\\nHola, mi nombre es Juan y mi n\xfamero de tel\xe9fono es 123456789\\n```\\n\\n### Dividir una cadena de caracteres {#dividir-una-cadena-de-caracteres}\\n\\n``` python\\ntext = \\"Hola, mi nombre es Juan y mi n\xfamero de tel\xe9fono es 123456789\\"\\n\\ntext_split = re.split(r\\"y\\", text)\\ntext_split\\n```\\n\\n``` text\\n[\'Hola, mi nombre es Juan \', \' mi n\xfamero de tel\xe9fono es 123456789\']\\n```\\n\\nPython tambien tiene integrado funciones de expresiones regulares en el\\nm\xf3dulo string.\\n\\n``` python\\ntext = \\"Hola, mi nombre es Juan y mi n\xfamero de tel\xe9fono es 123456789\\"\\nprint(text.replace(\\"Juan\\", \\"Darvin\\"))\\nprint(text.split(\',\'))\\n```\\n\\n``` text\\nHola, mi nombre es Darvin y mi n\xfamero de tel\xe9fono es 123456789\\n[\'Hola\', \' mi nombre es Juan y mi n\xfamero de tel\xe9fono es 123456789\']\\n```\\n\\nEstos son solo alguno de todos los metodos que tiene python para\\ntrabajar con expresiones regulares. Para m\xe1s informaci\xf3n, puede\\nconsultar la documentaci\xf3n oficial de python en el siguiente enlace:\\nhttps://docs.python.org/3/library/re.html"},{"id":"distribucion-de-poisson-python","metadata":{"permalink":"/article/distribucion-de-poisson-python","source":"@site/blog/distribucion-de-poisson-python.md","title":"Distribuci\xf3n de poisson - python","description":"la Distribuci\xf3n de poisson es una distribuci\xf3n de probabilidad discreta que expresa la probabilidad de un n\xfamero de eventos ocurridos en un intervalo de tiempo fijo si estos ocurren con una frecuencia media conocida e independientemente del tiempo transcurrido desde el evento anterior.","date":"2023-06-07T00:00:00.000Z","formattedDate":"7 de junio de 2023","tags":[{"label":"probabilidad","permalink":"/article/tags/probabilidad"},{"label":"python","permalink":"/article/tags/python"},{"label":"poisson","permalink":"/article/tags/poisson"}],"readingTime":0,"hasTruncateMarker":false,"authors":[],"frontMatter":{"title":"Distribuci\xf3n de poisson - python","description":"la Distribuci\xf3n de poisson es una distribuci\xf3n de probabilidad discreta que expresa la probabilidad de un n\xfamero de eventos ocurridos en un intervalo de tiempo fijo si estos ocurren con una frecuencia media conocida e independientemente del tiempo transcurrido desde el evento anterior.","date":"2023-06-07T00:00:00.000Z","autors":["ccdarvin"],"slug":"distribucion-de-poisson-python","tags":["probabilidad","python","poisson"]},"prevItem":{"title":"Expresiones regulares en Python","permalink":"/article/expresiones-regulares-python"},"nextItem":{"title":"Distribuci\xf3n binomial - python","permalink":"/article/distribucion-binomial-python"}},"content":""},{"id":"distribucion-binomial-python","metadata":{"permalink":"/article/distribucion-binomial-python","source":"@site/blog/distribucion-binomial-python.md","title":"Distribuci\xf3n binomial - python","description":"Distribuci\xf3n binomial en python","date":"2023-06-05T00:00:00.000Z","formattedDate":"5 de junio de 2023","tags":[{"label":"estad\xedstica","permalink":"/article/tags/estadistica"},{"label":"python","permalink":"/article/tags/python"},{"label":"scipy","permalink":"/article/tags/scipy"},{"label":"distribuci\xf3n estad\xedstica","permalink":"/article/tags/distribucion-estadistica"}],"readingTime":3.22,"hasTruncateMarker":false,"authors":[],"frontMatter":{"title":"Distribuci\xf3n binomial - python","description":"Distribuci\xf3n binomial en python","tags":["estad\xedstica","python","scipy","distribuci\xf3n estad\xedstica"],"autors":["ccdarvin"],"date":"2023-06-05T00:00:00.000Z","slug":"distribucion-binomial-python"},"prevItem":{"title":"Distribuci\xf3n de poisson - python","permalink":"/article/distribucion-de-poisson-python"},"nextItem":{"title":"\xbfComo perfilar c\xf3digo con line_profiler?","permalink":"/article/perfilar-codigo-con-line-profiler"}},"content":"La distribuci\xf3n binomial es un modelo de probabilidad discreta que\\ncuenta el n\xfamero de \xe9xitos en una secuencia de $n$ ensayos de Bernoulli\\nindependientes entre s\xed, con una probabilidad fija $p$ de ocurrencia del\\n\xe9xito entre los ensayos. Un experimento de Bernoulli se caracteriza por\\nser dicot\xf3mico, esto es, s\xf3lo son posibles dos resultados. A uno de\\nestos se denomina \xe9xito y tiene una probabilidad de ocurrencia $p$ y al\\notro, fracaso, con una probabilidad $q = 1 - p$, de ocurrencia.\\n\\n## Funci\xf3n de probabilidad {#funci\xf3n-de-probabilidad}\\n\\nLa funci\xf3n de probabilidad de una distribuci\xf3n binomial es:\\n\\n$$f(k,n,p) = P(X = k) = \\\\binom{n}{k} p^k (1-p)^{n-k}$$\\n\\ndonde: \\\\* $n$ es el n\xfamero de ensayos \\\\* $k$ es el n\xfamero de \xe9xitos \\\\*\\n$p$ es la probabilidad de \xe9xito en cada ensayo \\\\*\\n$\\\\binom{n}{k} = \\\\frac{n!}{k!(n-k)!}$ es el coeficiente binomial\\n\\n**El coeficiente binomial** $\\\\binom{n}{k}$ es el n\xfamero de formas de\\nescoger un subconjunto de $k$ elementos, sin importar el orden, de un\\nconjunto de $n$ elementos. Se lee \u201cn sobre k\u201d.\\n\\n## Optener la distribuci\xf3n binomial con python {#optener-la-distribuci\xf3n-binomial-con-python}\\n\\nAhora usaremos python para obtener la distribuci\xf3n binomial de un\\nexperimento. Para ello usaremos la funci\xf3n `binom` de la librer\xeda\\n`scipy.stats`. Esta funci\xf3n recibe como par\xe1metros el n\xfamero de ensayos\\n$n$ y la probabilidad de ocurrencia del \xe9xito $p$.\\n\\n``` bash\\npip install scipy\\n```\\n\\n``` python\\nfrom scipy.stats import binom\\nfrom matplotlib import pyplot as plt\\nimport warnings\\nwarnings.filterwarnings(\\"ignore\\")\\n# Definimos los par\xe1metros de la distribuci\xf3n\\nn = 10\\np = 0.5\\n\\n# Obtenemos los valores de la distribuci\xf3n\\nx = list(range(0, n+1))\\npmf_5 = binom.pmf(x, n, p)\\n\\n# sesgada a la derecha\\np = 0.2\\npmf_2 = binom.pmf(x, n, p)\\n\\n# sesgada a la izquierda\\np = 0.8\\npmf_8 = binom.pmf(x, n, p)\\n\\n# subplots\\nfig, axs = plt.subplots(1, 3, figsize=(15, 5))\\n\\n# Graficamos\\naxs[0].plot(x, pmf_5, \'og\', ms=8, c=\'b\')\\naxs[0].vlines(x, 0, pmf_5, colors=\'b\', lw=2, alpha=0.5, label=\'p=0.5\')\\naxs[1].plot(x, pmf_2, \'og\', ms=8, c=\'g\')\\naxs[1].vlines(x, 0, pmf_2, colors=\'g\', lw=2, alpha=0.5, label=\'p=0.2\')\\naxs[2].plot(x, pmf_8, \'og\', ms=8, c=\'r\')\\naxs[2].vlines(x, 0, pmf_8, colors=\'r\', lw=2, alpha=0.5, label=\'p=0.8\')\\nfig.legend()\\nfig.show()\\n```\\n\\n![](distribucion-binomial-python_files/figure-markdown_strict/cell-2-output-1.png)\\n\\nCopo podemos ver en el grafico si usamos una probabilidad de ocurrencia\\ndel \xe9xito de 0.5, la distribuci\xf3n es sim\xe9trica y si usamos una\\nprobabilidad de ocurrencia del \xe9xito mayor a 0.5, la distribuci\xf3n se\\nsesga hacia la derecha y si usamos una probabilidad de ocurrencia del\\n\xe9xito menor a 0.5, la distribuci\xf3n se sesga hacia la izquierda.\\n\\n## Funci\xf3n de distribuci\xf3n acumulada {#funci\xf3n-de-distribuci\xf3n-acumulada}\\n\\nLa funci\xf3n de distribuci\xf3n acumulada de una distribuci\xf3n binomial es:\\n\\n$$F(k,n,p) = P(X \\\\leq k) = \\\\sum_{i=0}^k \\\\binom{n}{i} p^i (1-p)^{n-i}$$\\n\\nEn terminos simples, la funci\xf3n de distribuci\xf3n acumulada es la\\nprobabilidad de que la variable aleatoria $X$ sea menor o igual que $k$.\\nla suma de las probabilidades de todos los valores de $X$ menores o\\niguales que $k$.\\n\\nEn python ser\xeda\\n\\n``` python\\n# Definimos los par\xe1metros de la distribuci\xf3n\\nn = 10\\np = 0.5\\n\\n# Obtenemos los valores de la distribuci\xf3n\\nx = list(range(0, n+1))\\ncdf_5 = binom.cdf(x, n, p)\\n\\n# sesgada a la derecha\\np = 0.2\\ncdf_2 = binom.cdf(x, n, p)\\n\\n# sesgada a la izquierda\\np = 0.8\\ncdf_8 = binom.cdf(x, n, p)\\n\\n# Graficamos\\nplt.plot(x, cdf_5, \'o-\', label=\'p=0.5\')\\nplt.plot(x, cdf_2, \'o-\', label=\'p=0.2\')\\nplt.plot(x, cdf_8, \'o-\', label=\'p=0.8\')\\nplt.legend()\\nplt.show()\\n```\\n\\n![](distribucion-binomial-python_files/figure-markdown_strict/cell-3-output-1.png)\\n\\n## Como generar n\xfameros aleatorios con distribuci\xf3n binomial {#como-generar-n\xfameros-aleatorios-con-distribuci\xf3n-binomial}\\n\\nPara generar n\xfameros aleatorios con distribuci\xf3n binomial usaremos la\\nfunci\xf3n `binom.rvs` de la librer\xeda `scipy.stats`. Esta funci\xf3n recibe\\ncomo par\xe1metros el n\xfamero de ensayos $n$, la probabilidad de ocurrencia\\ndel \xe9xito $p$ y el tama\xf1o de la muestra.\\n\\n``` python\\n# generamos una muestra aleatoria\\nn = 10\\np = 0.5\\nmuestra = binom.rvs(n, p, size=1000)\\n\\n# Graficamos\\nplt.hist(muestra, bins=11, density=True)\\nplt.plot(x, pmf_5, \'o-\', label=\'p=0.5\')\\nplt.show()\\n```\\n\\n![](distribucion-binomial-python_files/figure-markdown_strict/cell-4-output-1.png)\\n\\nComo hemos podido ver trabajar con distribuciones binomiales en python\\nes muy sencillo y nos puede ayudar a resolver muchos problemas de\\nprobabilidad."},{"id":"perfilar-codigo-con-line-profiler","metadata":{"permalink":"/article/perfilar-codigo-con-line-profiler","source":"@site/blog/perfilar codigo con line_profiler.md","title":"\xbfComo perfilar c\xf3digo con line_profiler?","description":"Perfilar c\xf3digo nos permite identificar las partes de nuestro c\xf3digo que son m\xe1s lentas y optimizarlas.","date":"2023-05-03T00:00:00.000Z","formattedDate":"3 de mayo de 2023","tags":[{"label":"python","permalink":"/article/tags/python"},{"label":"perfilar","permalink":"/article/tags/perfilar"},{"label":"line_profiler","permalink":"/article/tags/line-profiler"},{"label":"optimizar c\xf3digo","permalink":"/article/tags/optimizar-codigo"}],"readingTime":1.665,"hasTruncateMarker":false,"authors":[{"name":"Darvin Cotrina","title":"Creador de entredata.org","url":"https://github.com/ccdarvin","imageURL":"https://github.com/ccdarvin.png","key":"ccdarvin"}],"frontMatter":{"title":"\xbfComo perfilar c\xf3digo con line_profiler?","description":"Perfilar c\xf3digo nos permite identificar las partes de nuestro c\xf3digo que son m\xe1s lentas y optimizarlas.","lang":"es","authors":["ccdarvin"],"slug":"perfilar-codigo-con-line-profiler","date":"2023-05-03T00:00:00.000Z","tags":["python","perfilar","line_profiler","optimizar c\xf3digo"]},"prevItem":{"title":"Distribuci\xf3n binomial - python","permalink":"/article/distribucion-binomial-python"},"nextItem":{"title":"Arbol de Desici\xf3n, conceptos b\xe1sicos","permalink":"/article/arbol-decision-conceptos-basicos"}},"content":"\xbfAlguna vez has tenido que optimizar el c\xf3digo de un programa?\\n`line_profiler` es una herramienta que te permite perfilar el c\xf3digo de\\nun programa para encontrar las partes que m\xe1s tiempo consumen. En este\\nnotebook veremos c\xf3mo usarla.\\n\\n## Instalaci\xf3n {#instalaci\xf3n}\\n\\nComo `line_profiler` no viene instalado por defecto en Anaconda, lo\\ninstalaremos con `conda`:\\n\\nEn la terminal:\\n\\n``` bash\\npip install line_profiler\\n```\\n\\nEn el notebook:\\n\\n``` python\\n! pip install line_profiler\\n```\\n\\n## \xbfC\xf3mo funciona en Jupyter? {#c\xf3mo-funciona-en-jupyter}\\n\\n`line_profiler` es una herramienta que permite perfilar el c\xf3digo de un\\nprograma. Esto significa que nos permite ver cu\xe1nto tiempo se tarda en\\nejecutar cada l\xednea de c\xf3digo. Para ello, `line_profiler` nos permite\\nusar el comando `%lprun` en Jupyter. Este comando nos permite perfilar\\nuna funci\xf3n. Para ello, debemos a\xf1adir el decorador `@profile` a la\\nfunci\xf3n que queremos perfilar.\\n\\ncargar el m\xf3dulo `line_profiler` en el notebook:\\n\\n``` python\\n%load_ext line_profiler\\n```\\n\\n``` text\\nThe line_profiler extension is already loaded. To reload it, use:\\n  %reload_ext line_profiler\\n```\\n\\n## Perfilando una funci\xf3n {#perfilando-una-funci\xf3n}\\n\\nPerfilar una funcion en en jupyter lab ees muy sencillo con el comando\\n`%lprun`. Para ello vamos a crear una funcion de prueba que calcule el\\ndoble de una lista de n\xfameros:\\n\\n``` python\\n\\ndef funcion_prueba():\\n    data = [1, 2, 3, 4, 5, 6, 7, 8, 9]\\n    doble = []\\n    for item in data:\\n        doble.append(item * 2)\\n    \\n    return doble    \\n```\\n\\n``` python\\n%lprun -f funcion_prueba funcion_prueba()\\n```\\n\\n``` text\\nTimer unit: 1e-07 s\\n\\nTotal time: 8e-06 s\\n\\nCould not find file C:\\\\Users\\\\WillyCotrina\\\\AppData\\\\Local\\\\Temp\\\\ipykernel_14792\\\\1026023441.py\\nAre you sure you are running this program from the same directory\\nthat you ran the profiler from?\\nContinuing without the function\'s contents.\\n\\nLine #      Hits         Time  Per Hit   % Time  Line Contents\\n==============================================================\\n     1                                           \\n     2         1          7.0      7.0      8.8  \\n     3         1          3.0      3.0      3.8  \\n     4         9         24.0      2.7     30.0  \\n     5         9         43.0      4.8     53.8  \\n     6                                           \\n     7         1          3.0      3.0      3.8\\n```\\n\\nComo pudimos notar pefilar una funcion es muy sencillo y extremaente\\nutil para optimizar el codigo de un programa."},{"id":"arbol-decision-conceptos-basicos","metadata":{"permalink":"/article/arbol-decision-conceptos-basicos","source":"@site/blog/Arbol de Desici\xf3n, conceptos b\xe1sicos/index.mdx","title":"Arbol de Desici\xf3n, conceptos b\xe1sicos","description":"Modelo de arbol de desici\xf3n","date":"2022-05-20T10:00:00.000Z","formattedDate":"20 de mayo de 2022","tags":[{"label":"Machine Learning","permalink":"/article/tags/machine-learning"},{"label":"Python","permalink":"/article/tags/python"},{"label":"Arbol de Desici\xf3n","permalink":"/article/tags/arbol-de-desicion"}],"readingTime":2.59,"hasTruncateMarker":false,"authors":[{"name":"Darvin Cotrina","title":"Creador de entredata.org","url":"https://github.com/ccdarvin","imageURL":"https://github.com/ccdarvin.png","key":"ccdarvin"}],"frontMatter":{"title":"Arbol de Desici\xf3n, conceptos b\xe1sicos","slug":"arbol-decision-conceptos-basicos","date":"2022-05-20T10:00:00.000Z","authors":["ccdarvin"],"tags":["Machine Learning","Python","Arbol de Desici\xf3n"]},"prevItem":{"title":"\xbfComo perfilar c\xf3digo con line_profiler?","permalink":"/article/perfilar-codigo-con-line-profiler"}},"content":"## Modelo de arbol de desici\xf3n\\n\\nUn \xe1rbol de decisi\xf3n es un modelo de predicci\xf3n utilizado en el \xe1mbito de la inteligencia artificial, que utiliza un \xe1rbol de estructura similar a los diagramas de flujo en donde cada nodo representa una caracter\xedstica (o atributo), cada rama representa una regla de decisi\xf3n y cada hoja representa el resultado de una decisi\xf3n. Los \xe1rboles de decisi\xf3n son utilizados com\xfanmente en miner\xeda de datos con el fin de resolver problemas de clasificaci\xf3n.\\n\\nEjemplo de un arbol de desici\xf3n y su estructura:\\n\\n![Arbol de desici\xf3n](https://static.javatpoint.com/tutorial/machine-learning/images/decision-tree-classification-algorithm.png)\\n\\n\\n## Entrop\xeda\\n\\n### \xbfQu\xe9 es la entrop\xeda?\\n\\nLa entrop\xeda es una medida de incertidumbre. En el contexto de la toma de decisiones, la entrop\xeda mide la impureza de un conjunto de ejemplos S. Si S solo contiene ejemplos de una clase, entonces la entrop\xeda es 0. Si S contiene una cantidad uniforme de ejemplos de cada clase, entonces la entrop\xeda es 1. La entrop\xeda de un conjunto S se denota por H (S).\\n\\n\\n### \xbfC\xf3mo se calcula la entrop\xeda?\\n\\nLa entrop\xeda de un conjunto S se calcula como:\\n\\n$$H(S) = -\\\\sum_{i=1}^{c} p_i log_2 p_i$$\\n\\nDonde:\\n* $c$ es el n\xfamero de clases\\n* $p_i$ es la proporci\xf3n de ejemplos de clase $i$ en $S$\\n* $log_2$ es el logaritmo en base 2\\n\\n\\n### Ejemplo de c\xe1lculo de entrop\xeda\\n\\nSupongamos que tenemos un conjunto de ejemplos $S$ con 14 ejemplos de clase 1 y 6 ejemplos de clase 2. La entrop\xeda de $S$ es:\\n\\n$P_1 = 14/20$ y \\n$P_2 = 6/20$\\n\\nEntonces, la entrop\xeda de $S$ ser\xeda: $H(S) = - \\\\left(\\\\frac{14}{20} \\\\log_2 \\\\frac{14}{20} + \\\\frac{6}{20} \\\\log_2 \\\\frac{6}{20}\\\\right) \\\\approx 0.88$.\\n\\n\\n## Ganancia de informaci\xf3n\\n\\nLa ganancia de informaci\xf3n(IG) se utiliza para decidir qu\xe9 atributo se utilizar\xe1 para dividir el conjunto de datos en subconjuntos homog\xe9neos. La ganancia de informaci\xf3n se define como la diferencia entre la entrop\xeda antes de la divisi\xf3n y la entrop\xeda despu\xe9s de la divisi\xf3n por un atributo. La ganancia de informaci\xf3n se denota por IG (S, A) y se calcula como:\\n\\n$$IG(S, A) = H(S) - \\\\sum_{v \\\\in Values(A)} \\\\frac{|S_v|}{|S|} H(S_v)$$\\n\\n\\nDonde:\\n* $S$ es el conjunto de ejemplos\\n* $A$ es el atributo utilizado para dividir $S$ en subconjuntos\\n* $Values(A)$ es el conjunto de valores que puede tomar el atributo $A$\\n* $S_v$ es el subconjunto de $S$ en el que el atributo $A$ tiene el valor $v$\\n\\n\\n## Indice Gini\\n\\nEl \xedndice de Gini es una medida de impureza utilizada en los \xe1rboles de decisi\xf3n para decidir qu\xe9 atributo dividir un nodo en dos o m\xe1s subnodos. El \xedndice de Gini se define como:\\n\\n$$Gini(S) = 1 - \\\\sum_{i=1}^{c} p_i^2$$\\n\\nDonde:\\n* $c$ es el n\xfamero de clases\\n* $p_i$ es la proporci\xf3n de ejemplos de clase $i$ en $S$\\n\\n## Pros y contras de los \xe1rboles de decisi\xf3n\\n\\n### Pros\\n\\n* F\xe1cil de entender e interpretar. Los \xe1rboles se pueden visualizar.\\n* Puede ser muy util para solucionar problemas relacionados con decisiones.\\n* Hay menos requisitos de limpieza de datos\\n\\n### Contras\\n\\n* Los \xe1rboles de decisi\xf3n pueden ser poco precisos. Pueden ser muy sensibles a peque\xf1os cambios en los datos."}]}')}}]);