---
title: Expresiones regulares en Python
slug: expresiones-regulares-python
date: 2023-06-08
authors: [ccdarvin]
tags: [python, Expresiones regulares]
---

# Expresiones Regulares en Python {#expresiones-regulares-en-python}

Las expresiones regulares son una secuencia de caracteres que forman un
patrón de búsqueda, principalmente utilizadas para la búsqueda de
patrones de cadenas de caracteres u operaciones de sustituciones.

## Caracteres especiales {#caracteres-especiales}

Los caracteres especiales son aquellos que tienen un significado
especial para las expresiones regulares. Por ejemplo, el punto y coma
(;) es un caracter especial que se utiliza para separar instrucciones en
Python. Sin embargo, en las expresiones regulares, el punto y coma (;)
es un caracter especial que se utiliza para indicar que el patrón de
búsqueda debe coincidir con cualquier caracter.

A continuación se muestra una lista de los caracteres especiales más
utilizados en las expresiones regulares:

| Caracter                                  | Descripción                                                         |
|------------------------------------|------------------------------------|
| .                                         | Coincide con cualquier caracter                                     |
| ^                                         | Coincide con el inicio de una cadena                                |
| \$                                        | Coincide con el final de una cadena                                 |
| \*                                        | Coincide con 0 o más ocurrencias del caracter anterior              |
| \+                                        | Coincide con 1 o más ocurrencias del caracter anterior              |
| ?                                         | Coincide con 0 o 1 ocurrencia del caracter anterior                 |
| {n}                                       | Coincide con n ocurrencias del caracter anterior                    |
| {n,}                                      | Coincide con n o más ocurrencias del caracter anterior              |
| {n,m}                                     | Coincide con un rango de ocurrencias del caracter anterior          |
| \[…\]                                     | Coincide con cualquier caracter dentro de los corchetes             |
| \[^...\]                                  | Coincide con cualquier caracter que no esté dentro de los corchetes |
| (…)                                       | Agrupa una serie de patrones                                        |
|                                           | Coincide con un espacio en blanco                                   |
|                                           | Coincide con cualquier caracter que no sea un espacio en blanco     |
|                                           | Coincide con cualquier caracter alfanumérico                        |
|                                           | Coincide con cualquier caracter que no sea alfanumérico             |
|  Coincide con cualquier caracter numérico |                                                                     |
|                                           | Coincide con cualquier caracter que no sea numérico                 |

## Trabajando en python {#trabajando-en-python}

para trabajar con expresiones regulares en python, se debe importar el
módulo re. A continuación se muestra un ejemplo de como utilizar el
módulo re para buscar un patrón en una cadena de caracteres:

``` python
import re
```

### Encontrar todas las coincidencias {#encontrar-todas-las-coincidencias}

``` python
text = "Hola, mi nombre es Juan y mi número de teléfono es 123456789"
pattern = r"mi"

print(re.findall(pattern, text))
pattern = r"\d+"
print(re.findall(pattern, text))
```

``` text
['mi', 'mi']
['123456789']
```

### Sustituir un patrón en una cadena de caracteres {#sustituir-un-patrón-en-una-cadena-de-caracteres}

``` python
text = "Hol, mi nombre es Juan y mi nUmero de teléfono es 123456789"

text = re.sub(r"Hol", "Hola", text)
print(text)
text = re.sub(r"U", "ú", text)
print(text)
```

``` text
Hola, mi nombre es Juan y mi nUmero de teléfono es 123456789
Hola, mi nombre es Juan y mi número de teléfono es 123456789
```

### Dividir una cadena de caracteres {#dividir-una-cadena-de-caracteres}

``` python
text = "Hola, mi nombre es Juan y mi número de teléfono es 123456789"

text_split = re.split(r"y", text)
text_split
```

``` text
['Hola, mi nombre es Juan ', ' mi número de teléfono es 123456789']
```

Python tambien tiene integrado funciones de expresiones regulares en el
módulo string.

``` python
text = "Hola, mi nombre es Juan y mi número de teléfono es 123456789"
print(text.replace("Juan", "Darvin"))
print(text.split(','))
```

``` text
Hola, mi nombre es Darvin y mi número de teléfono es 123456789
['Hola', ' mi nombre es Juan y mi número de teléfono es 123456789']
```

Estos son solo alguno de todos los metodos que tiene python para
trabajar con expresiones regulares. Para más información, puede
consultar la documentación oficial de python en el siguiente enlace:
https://docs.python.org/3/library/re.html

