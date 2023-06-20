---
title: Reshape Data con pandas
description: Redimencionar datos con pandas
date: 2023-06-23 00:00:00
authors: ["ccdarvin"]
tags: [pandas, python, data science, reshape]
---

# Reshape Data con pandas - Cheat Sheet

## Metodos

### pivot and pivot_table

| date       | variable | value |
| ---------- | -------- | ----- |
| 2023-06-23 | A        | 1     |
| 2023-06-23 | B        | 2     |
| 2023-06-23 | C        | 3     |
| 2023-06-24 | A        | 4     |
| 2023-06-24 | B        | 5     |

| date       | A   | B   | C   |
| ---------- | --- | --- | --- |
| 2023-06-23 | 1   | 2   | 3   |
| 2023-06-24 | 4   | 5   | NaN |


```python
df.pivot(index='date', columns='variable', values='value')
df.pivot_table(index='date', columns='variable', values='value', aggfunc='sum', fill_value=0, margins=True)
```


La diferencia entre pivot y pivot_table es que pivot_table puede manejar multiples valores para la misma combinacion de index y columns usando funciones de agregacion.


## Melt

![Melt](image.png)