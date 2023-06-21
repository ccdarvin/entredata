---
title: Detección de anomalías
date: 2023-06-20
authors: [ccdarvin]
---

# ¿Que es la deteccion de anomalias? {#que-es-la-deteccion-de-anomalias}

La detección de anomalías es el proceso de identificar patrones
inusuales en los datos. Es un problema de aprendizaje no supervisado, lo
que significa que no necesitamos tener etiquetas para entrenar nuestro
modelo. En cambio, nuestro modelo aprenderá a identificar patrones
inusuales en los datos por sí mismo.

La detección de anomalías se puede aplicar a una amplia gama de
dominios, como la detección de fraudes con tarjetas de crédito, la
detección de fallas en equipos de fabricación o la detección de
anomalías médicas.

## Estimación de densidad {#estimación-de-densidad}

La detección de anomalías se puede realizar utilizando un modelo de
estimación de densidad. La idea es que los datos normales se
distribuirán de manera diferente a los datos anormales. Por lo tanto,
podemos estimar la densidad de los datos normales y luego identificar
los puntos de datos que tienen una densidad significativamente menor
como anomalías.

Dado el conjunto de datos de entrenamiento \$ {x^{(1)}, x^{(2)}, ,
x^{(m)} } \$, donde cada ejemplo tiene \$ n \$ características, podemos
estimar la densidad de los datos como:

$$ p(x) = p(x_1; \mu_1, \sigma_1^2) \times p(x_2; \mu_2, \sigma_2^2) \times \ldots \times p(x_n; \mu_n, \sigma_n^2) $$
$$ = \prod_{j=1}^n p(x_j; \mu_j, \sigma_j^2) $$

## Algoritmo de detección de anomalías {#algoritmo-de-detección-de-anomalías}

1.  Elija las características \$ x_i \$ que crea que pueden indicar
    anomalías.

2.  Ajuste los parámetros \$ \_1, , \_n, \_1^2, , \_n^2 \$ en el
    conjunto de entrenamiento \$ {x^{(1)}, x^{(2)}, , x^{(m)} } \$.
    $$ \vec{\mu} = \frac{1}{m} \sum_{i=1}^m \vec{x^{(i)}} $$
    $$ \vec{\sigma^2} = \frac{1}{m} \sum_{i=1}^m (\vec{x^{(i)}} - \vec{\mu})^2 $$

3.  Dado un nuevo ejemplo \$ x \$, compute \$ p(x) \$:

$$ p(x) = \prod_{j=1}^n p(x_j; \mu_j, \sigma_j^2) = \prod_{j=1}^n \frac{1}{\sqrt{2\pi}\sigma_j} \exp \left( - \frac{(x_j - \mu_j)^2}{2\sigma_j^2} \right) $$

1.  Si \$ p(x) \< \$, marque un ejemplo de anomalía.

![image.png](Detecion%20de%20anomalias_files/figure-markdown_strict/6a9854b6-1-image.png)

