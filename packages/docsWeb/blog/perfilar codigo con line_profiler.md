---
title: ¿Como perfilar código con line_profiler?
description: Perfilar código nos permite identificar las partes de nuestro código que son más lentas y optimizarlas.
lang: es
authors: [ccdarvin]
slug: perfilar-codigo-con-line-profiler
date: 2023-05-03
tags: [python, perfilar, line_profiler, optimizar código]
---

# Perfilar código con line_profiler {#perfilar-código-con-line_profiler}

¿Alguna vez has tenido que optimizar el código de un programa?
`line_profiler` es una herramienta que te permite perfilar el código de
un programa para encontrar las partes que más tiempo consumen. En este
notebook veremos cómo usarla.

## Instalación {#instalación}

Como `line_profiler` no viene instalado por defecto en Anaconda, lo
instalaremos con `conda`:

En la terminal:

``` bash
pip install line_profiler
```

En el notebook:

``` python
! pip install line_profiler
```

## ¿Cómo funciona en Jupyter? {#cómo-funciona-en-jupyter}

`line_profiler` es una herramienta que permite perfilar el código de un
programa. Esto significa que nos permite ver cuánto tiempo se tarda en
ejecutar cada línea de código. Para ello, `line_profiler` nos permite
usar el comando `%lprun` en Jupyter. Este comando nos permite perfilar
una función. Para ello, debemos añadir el decorador `@profile` a la
función que queremos perfilar.

cargar el módulo `line_profiler` en el notebook:

``` python
%load_ext line_profiler
```

``` text
The line_profiler extension is already loaded. To reload it, use:
  %reload_ext line_profiler
```

## Perfilando una función {#perfilando-una-función}

Perfilar una funcion en en jupyter lab ees muy sencillo con el comando
`%lprun`. Para ello vamos a crear una funcion de prueba que calcule el
doble de una lista de números:

``` python

def funcion_prueba():
    data = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    doble = []
    for item in data:
        doble.append(item * 2)
    
    return doble    
```

``` python
%lprun -f funcion_prueba funcion_prueba()
```

``` text
Timer unit: 1e-07 s

Total time: 8e-06 s

Could not find file C:\Users\WillyCotrina\AppData\Local\Temp\ipykernel_14792\1026023441.py
Are you sure you are running this program from the same directory
that you ran the profiler from?
Continuing without the function's contents.

Line #      Hits         Time  Per Hit   % Time  Line Contents
==============================================================
     1                                           
     2         1          7.0      7.0      8.8  
     3         1          3.0      3.0      3.8  
     4         9         24.0      2.7     30.0  
     5         9         43.0      4.8     53.8  
     6                                           
     7         1          3.0      3.0      3.8
```

Como pudimos notar pefilar una funcion es muy sencillo y extremaente
util para optimizar el codigo de un programa.

