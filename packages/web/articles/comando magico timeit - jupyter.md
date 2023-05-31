---
title: Comando mágico timeit - jupyter
description: El comando mágico %timeit en Jupyter Lab es una forma conveniente de medir el tiempo de ejecución de una expresión o una función directamente en tus celdas de código. Puedes utilizar %timeit para obtener rápidamente el tiempo promedio de ejecución y comparar diferentes enfoques de implementación.
slug: comando-magico-timeit-jupyter
authors: [ccdarvin]
tags: [jupyter, python, timeit, magic command]
categories: [jupyter]
---

# Como usar el %timeit {#como-usar-el-timeit}

El comando mágico `%timeit` en Jupyter Lab es una forma conveniente de
medir el tiempo de ejecución de una expresión o una función directamente
en tus celdas de código. Puedes utilizar `%timeit` para obtener
rápidamente el tiempo promedio de ejecución y comparar diferentes
enfoques de implementación.

## 1. Uso básico de `%timeit` {#uso-básico-de-timeit}

Para utilizar `%timeit`, simplemente coloca el comando mágico antes de
la expresión o función que deseas medir. Por ejemplo, para medir el
tiempo de ejecución de la expresión `'1 + 1'`, puedes usar el siguiente
código en una celda de Jupyter Lab:

<details>
<summary>Code</summary>

``` python
%timeit 1 + 1
```

</details>

``` text
10.1 ns ± 0.491 ns per loop (mean ± std. dev. of 7 runs, 100,000,000 loops each)
```

Después de ejecutar la celda, `%timeit` ejecutará la expresión `'1 + 1'`
varias veces y mostrará el tiempo promedio de ejecución. En este caso,
el tiempo promedio de ejecución en unidades de tiempo

## 2. Tabla de tiempos {#tabla-de-tiempos}

| Abreviatura | Unidad de tiempo |
|-------------|------------------|
| ns          | nanosegundos     |
| us          | microsegundos    |
| ms          | milisegundos     |
| s           | segundos         |
| m           | minutos          |
| h           | horas            |

## 3. Especificar el número de ejecuciones y repeticiones {#especificar-el-número-de-ejecuciones-y-repeticiones}

Por defecto, `%timeit` ejecuta la expresión o función 100.000 veces y
repite la operación tres veces. Puedes especificar el número de
ejecuciones y repeticiones utilizando la sintaxis
`%timeit -r <repeticiones> -n <ejecuciones>`. Por ejemplo, para ejecutar
la expresión `'1 + 1'` 10.000 veces y repetir la operación cinco veces,
puedes usar el siguiente código:

<details>
<summary>Code</summary>

``` python
%timeit -r5 -n50 1 + 1
```

</details>

``` text
25.6 ns ± 5.28 ns per loop (mean ± std. dev. of 5 runs, 50 loops each)
```

En el comando anterior espesificamps que se ejecute 50 veces en 5
repeticiones

## 5. Medir el tiempo de ejecución de una función {#medir-el-tiempo-de-ejecución-de-una-función}

También puedes utilizar `%timeit` para medir el tiempo de ejecución de
una función. Por ejemplo, para medir el tiempo de ejecución de la
función `sum()` de Python, puedes usar el siguiente código:

<details>
<summary>Code</summary>

``` python
def mi_funcion():
    # puedes colocar cualquier código aquí
    return 1 + 1
```

</details>

Jupyter Lab ejecutara el código y te devolvera el tiempo de ejecución de
la función

## 6. Medir el tiempo de ejecución de una celda {#medir-el-tiempo-de-ejecución-de-una-celda}

También puedes utilizar `%timeit` para medir el tiempo de ejecución de
una celda completa. Por ejemplo, para medir el tiempo de ejecución de la
siguiente celda, puedes usar el siguiente código:

<details>
<summary>Code</summary>

``` python
%%timeit
x = 1
x += 1
```

</details>

``` text
36.7 ns ± 1.13 ns per loop (mean ± std. dev. of 7 runs, 10,000,000 loops each)
```

## 7. Obtener el tiempo de ejecución como variable {#obtener-el-tiempo-de-ejecución-como-variable}

En caso de que desees obtener información más detallada sobre el tiempo
de ejecución, podrias asignar el resultado de `%timeit` a una variable,
para esto utilizaremos las opciones `-o` para almacenar el resultado y
-q para silenciar la salida de la celda. Por ejemplo, para obtener el
tiempo de ejecución de la expresión `'1 + 1'` como una variable, puedes
usar el siguiente código:

<details>
<summary>Code</summary>

``` python
resultado = %timeit -o -q 1 + 1
print(f'El mejor tiempo fue {resultado.best}')
print(f'El peor tiempo fue {resultado.worst}')
```

</details>

``` text
El mejor tiempo fue 9.775258000008763e-09
El peor tiempo fue 1.1235137999756262e-08
```

Hemos visto de forma muy rapida como usar el comando magico `%timeit` en
Jupyter Lab, con expresiones muy sencillas, pero en la practica se
utiliza para medir el tiempo de ejecución de funciones y celdas
completas, lo cual es muy util para comparar diferentes enfoques de
implementación.

