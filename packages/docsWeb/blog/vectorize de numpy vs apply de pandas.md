---
title: Vectorize de numpy vs apply de pandas
date: 2023-06-01
deescription: Cual es la diferencia entre vectorize de numpy y apply de pandas
authors: [ccdarvin]
tags: [python, pandas, numpy, vectorize, apply]
---

# ¿Cual es la diferencia entre vectorizar una funcion y aplicarla a un dataframe? {#cual-es-la-diferencia-entre-vectorizar-una-funcion-y-aplicarla-a-un-dataframe}

Tanto numpy como pandas tienen funciones que permiten aplicar una
funcion a un array o dataframe, respectivamente, de forma vectorizada.
Esto significa que la funcion se aplica a todos los elementos del array
o dataframe, sin necesidad de iterar sobre ellos. Esto es mucho mas
eficiente que iterar sobre los elementos, ya que no se necesita hacer un
loop en python, sino que la funcion se aplica en C.

``` python
import numpy as np
import pandas as pd

# comparación de vectorize de numpy vs apply de pandas

# vectorize de numpy
def f(x):
    return x**2 + 1

array = np.arange(100000, dtype=np.int16)

%timeit np.vectorize(f)(array)
# pandas apply
df = pd.DataFrame({'x': array})
%timeit df['x'].apply(f)
```

``` text
24.2 ms ± 1.56 ms per loop (mean ± std. dev. of 7 runs, 10 loops each)
40.7 ms ± 1.01 ms per loop (mean ± std. dev. of 7 runs, 10 loops each)
```

Esta es una comparación muy simple entre ambas formas de aplicar una
funcion, pero nos da una idea bastante clara de la diferencia de
performance entre ambas, como podemos ver vectorize fue mucho mas rapido
que apply.

