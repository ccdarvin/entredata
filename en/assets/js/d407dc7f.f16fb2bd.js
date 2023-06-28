"use strict";(self.webpackChunkdocsweb=self.webpackChunkdocsweb||[]).push([[6287],{6628:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"/python-pandas-reshape","metadata":{"permalink":"/en/cheat-sheets/python-pandas-reshape","source":"@site/cheat-sheets/python-pandas-reshape.md","title":"Cheat Sheets de Pandas reshaping","description":"Cheat Sheets de Pandas reshaping","date":"2023-06-28T04:12:29.000Z","formattedDate":"June 28, 2023","tags":[{"label":"pandas","permalink":"/en/cheat-sheets/tags/pandas"},{"label":"python","permalink":"/en/cheat-sheets/tags/python"}],"readingTime":0.305,"hasTruncateMarker":false,"authors":[],"frontMatter":{"title":"Cheat Sheets de Pandas reshaping","description":"Cheat Sheets de Pandas reshaping","tags":["pandas","python"]},"nextItem":{"title":"Cheat Sheets","permalink":"/en/cheat-sheets/index"}},"content":"import CheatSheet from \'@site/src/components/CheatSheet\';\\n\\n\\n<CheatSheet header=\\"pivot\\">\\n\\n![Alt text](images/pd-pivot.png)\\n\\n```python\\ndf.pivot(index=\'foo\', columns=\'bar\', values=\'baz\')\\n```\\n\\n```python\\ndf.pivot_table(index=\'foo\', columns=\'bar\', values=\'baz\', aggfunc=\'sum\')\\n```\\n</CheatSheet>\\n\\n<CheatSheet header=\\"melt\\">\\n\\n![Alt text](images/pd-melt.png)\\n\\n```python\\ndf3.melt(id_vars=[\'first\', \'last\'], var_name=\'variable\', \\n        value_name=\'value\')\\ndf3.melt(id_vars=[\'first\', \'last\'], var_name=\'variable\', \\n        value_name=\'value\', value_vars=[\'height\', \'weight\'])\\n```\\n</CheatSheet>\\n\\n<CheatSheet header=\\"Wide to long\\">\\n\\n![Alt text](images/pd-wide-to-long.png)\\n\\n```python\\npd.wide_to_long(df, stubnames=[\'age\', \'weight\'], i=[\'name\'], \\n                j=\'year\')\\n# format age_2019\\npd.wide_to_long(df, stubnames=[\'age\', \'weight\'], i=[\'name\'], \\n                j=\'year\', sep=\'_\', suffix=\'\\\\w+\')\\n```\\n</CheatSheet>"},{"id":"/index","metadata":{"permalink":"/en/cheat-sheets/index","source":"@site/cheat-sheets/index.mdx","title":"Cheat Sheets","description":"Probando el componente CheatSheet con diferentes lenguajes de programaci\xf3n y latex.","date":"2023-06-28T04:12:29.000Z","formattedDate":"June 28, 2023","tags":[],"readingTime":0.67,"hasTruncateMarker":false,"authors":[],"frontMatter":{},"prevItem":{"title":"Cheat Sheets de Pandas reshaping","permalink":"/en/cheat-sheets/python-pandas-reshape"}},"content":"import CheatSheet from \'@site/src/components/CheatSheet\';\\n\\n\\nProbando el componente CheatSheet con diferentes lenguajes de programaci\xf3n y latex.\\n\\n<CheatSheet header=\'Titulo\'>\\n\\nContenido de la cheat sheet\\n\\n```tsx\\nimport CheatSheet from \'@site/src/components/CheatSheet\';\\n<CheatSheet header=\'Titulo\'>\\n    Contenido de la cheat sheet\\n</CheatSheet>\\n```\\n</CheatSheet>\\n\\n\\n<CheatSheet header=\'Contenido de latext\'>\\n\\nFormula en latex\\n$$\\\\int_{a}^{b} x^2 dx$$\\n\\n```latex\\n$$\\\\int_{a}^{b} x^2 dx$$\\n```\\n</CheatSheet>\\n\\n\\n<CheatSheet header=\'Multiples lenguajes\'>\\n\\nContenido de la cheat sheet\\n\\n```python\\ndef foo():\\n    print(\'Hello world!\')\\n```\\n\\n```r\\nfoo <- function() {\\n    print(\'Hello world!\')\\n}\\n```\\n</CheatSheet>\\n\\n<CheatSheet header=\'Fomulas y codigo\'>\\n\\nFormula en latex\\n$$\\\\int_{a}^{b} x^2 dx$$\\n\\n```python\\ndef foo():\\n    print(\'Hello world!\')\\n```\\n\\n</CheatSheet>\\n\\n<CheatSheet header=\'Imagenes\'>\\n\\n![Alt text](images/image.png)\\n\\n</CheatSheet>\\n\\n<CheatSheet>\\n\\nSin titulo \\n\\n```tsx\\n<CheatSheet>\\n    Sin titulo\\n</CheatSheet>\\n```\\n</CheatSheet>\\n\\n<CheatSheet header={\'Header\'}>\\n\\nTexto en latex\\n```latex\\n\\\\int_{a}^{b} x^2 dx\\n```\\n</CheatSheet>\\n\\n$$\\\\int_{a}^{b} x^2 dx$$\\n\\n<CheatSheet header={\'Header\'}>\\n\\nC\xf3digo python\\n\\n```python\\ndef foo():\\n    print(\'Hello world!\')\\n```\\n</CheatSheet>"}]}')}}]);