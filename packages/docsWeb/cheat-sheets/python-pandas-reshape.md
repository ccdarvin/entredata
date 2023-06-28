---
title: Cheat Sheets de Pandas reshaping
description: Cheat Sheets de Pandas reshaping
tags: [pandas, python]
---

import CheatSheet from '@site/src/components/CheatSheet';

# Cheat Sheets de Pandas reshaping

<CheatSheet header="pivot">

![Alt text](images/pd-pivot.png)

```python
df.pivot(index='foo', columns='bar', values='baz')
```

```python
df.pivot_table(index='foo', columns='bar', values='baz', aggfunc='sum')
```
</CheatSheet>

<CheatSheet header="melt">

![Alt text](images/pd-melt.png)

```python
df3.melt(id_vars=['first', 'last'], var_name='variable', 
        value_name='value')
df3.melt(id_vars=['first', 'last'], var_name='variable', 
        value_name='value', value_vars=['height', 'weight'])
```
</CheatSheet>

<CheatSheet header="Wide to long">

![Alt text](images/pd-wide-to-long.png)

```python
pd.wide_to_long(df, stubnames=['age', 'weight'], i=['name'], 
                j='year')
# format age_2019
pd.wide_to_long(df, stubnames=['age', 'weight'], i=['name'], 
                j='year', sep='_', suffix='\w+')
```
</CheatSheet>