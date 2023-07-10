"use strict";(self.webpackChunkdocsweb=self.webpackChunkdocsweb||[]).push([[8971],{6142:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"/python-pandas-reshape","metadata":{"permalink":"/cheat-sheets/python-pandas-reshape","source":"@site/cheat-sheets/python-pandas-reshape.md","title":"Cheat Sheets de Pandas reshaping","description":"Cheat Sheets de Pandas reshaping","date":"2023-07-10T21:44:22.000Z","formattedDate":"10 de julio de 2023","tags":[{"label":"pandas","permalink":"/cheat-sheets/tags/pandas"},{"label":"python","permalink":"/cheat-sheets/tags/python"}],"readingTime":0.305,"hasTruncateMarker":false,"authors":[],"frontMatter":{"title":"Cheat Sheets de Pandas reshaping","description":"Cheat Sheets de Pandas reshaping","tags":["pandas","python"]},"nextItem":{"title":"Cheat Sheets","permalink":"/cheat-sheets/index"}},"content":"import CheatSheet from \'@site/src/components/CheatSheet\';\\n\\n\\n<CheatSheet header=\\"pivot\\">\\n\\n![Alt text](images/pd-pivot.png)\\n\\n```python\\ndf.pivot(index=\'foo\', columns=\'bar\', values=\'baz\')\\n```\\n\\n```python\\ndf.pivot_table(index=\'foo\', columns=\'bar\', values=\'baz\', aggfunc=\'sum\')\\n```\\n</CheatSheet>\\n\\n<CheatSheet header=\\"melt\\">\\n\\n![Alt text](images/pd-melt.png)\\n\\n```python\\ndf3.melt(id_vars=[\'first\', \'last\'], var_name=\'variable\', \\n        value_name=\'value\')\\ndf3.melt(id_vars=[\'first\', \'last\'], var_name=\'variable\', \\n        value_name=\'value\', value_vars=[\'height\', \'weight\'])\\n```\\n</CheatSheet>\\n\\n<CheatSheet header=\\"Wide to long\\">\\n\\n![Alt text](images/pd-wide-to-long.png)\\n\\n```python\\npd.wide_to_long(df, stubnames=[\'age\', \'weight\'], i=[\'name\'], \\n                j=\'year\')\\n# format age_2019\\npd.wide_to_long(df, stubnames=[\'age\', \'weight\'], i=[\'name\'], \\n                j=\'year\', sep=\'_\', suffix=\'\\\\w+\')\\n```\\n</CheatSheet>"},{"id":"/index","metadata":{"permalink":"/cheat-sheets/index","source":"@site/cheat-sheets/index.mdx","title":"Cheat Sheets","description":"Probando el componente CheatSheet con diferentes lenguajes de programaci\xf3n y latex.","date":"2023-07-10T21:44:22.000Z","formattedDate":"10 de julio de 2023","tags":[],"readingTime":0.67,"hasTruncateMarker":false,"authors":[],"frontMatter":{},"prevItem":{"title":"Cheat Sheets de Pandas reshaping","permalink":"/cheat-sheets/python-pandas-reshape"},"nextItem":{"title":"Linear models in scikit-learn","permalink":"/cheat-sheets/sklearn-linear-model"}},"content":"import CheatSheet from \'@site/src/components/CheatSheet\';\\n\\n\\nProbando el componente CheatSheet con diferentes lenguajes de programaci\xf3n y latex.\\n\\n<CheatSheet header=\'Titulo\'>\\n\\nContenido de la cheat sheet\\n\\n```tsx\\nimport CheatSheet from \'@site/src/components/CheatSheet\';\\n<CheatSheet header=\'Titulo\'>\\n    Contenido de la cheat sheet\\n</CheatSheet>\\n```\\n</CheatSheet>\\n\\n\\n<CheatSheet header=\'Contenido de latext\'>\\n\\nFormula en latex\\n$$\\\\int_{a}^{b} x^2 dx$$\\n\\n```latex\\n$$\\\\int_{a}^{b} x^2 dx$$\\n```\\n</CheatSheet>\\n\\n\\n<CheatSheet header=\'Multiples lenguajes\'>\\n\\nContenido de la cheat sheet\\n\\n```python\\ndef foo():\\n    print(\'Hello world!\')\\n```\\n\\n```r\\nfoo <- function() {\\n    print(\'Hello world!\')\\n}\\n```\\n</CheatSheet>\\n\\n<CheatSheet header=\'Fomulas y codigo\'>\\n\\nFormula en latex\\n$$\\\\int_{a}^{b} x^2 dx$$\\n\\n```python\\ndef foo():\\n    print(\'Hello world!\')\\n```\\n\\n</CheatSheet>\\n\\n<CheatSheet header=\'Imagenes\'>\\n\\n![Alt text](images/image.png)\\n\\n</CheatSheet>\\n\\n<CheatSheet>\\n\\nSin titulo \\n\\n```tsx\\n<CheatSheet>\\n    Sin titulo\\n</CheatSheet>\\n```\\n</CheatSheet>\\n\\n<CheatSheet header={\'Header\'}>\\n\\nTexto en latex\\n```latex\\n\\\\int_{a}^{b} x^2 dx\\n```\\n</CheatSheet>\\n\\n$$\\\\int_{a}^{b} x^2 dx$$\\n\\n<CheatSheet header={\'Header\'}>\\n\\nC\xf3digo python\\n\\n```python\\ndef foo():\\n    print(\'Hello world!\')\\n```\\n</CheatSheet>"},{"id":"/sklearn-linear-model","metadata":{"permalink":"/cheat-sheets/sklearn-linear-model","source":"@site/cheat-sheets/sklearn-linear-model.mdx","title":"Linear models in scikit-learn","description":"cheat sheet for linear models in scikit-learn","date":"2023-07-10T21:44:22.000Z","formattedDate":"10 de julio de 2023","tags":[{"label":"scikit-learn","permalink":"/cheat-sheets/tags/scikit-learn"},{"label":"linear-models","permalink":"/cheat-sheets/tags/linear-models"}],"readingTime":2.915,"hasTruncateMarker":false,"authors":[{"name":"Darvin Cotrina","title":"Creador de entredata.org","url":"https://github.com/ccdarvin","imageURL":"https://github.com/ccdarvin.png","key":"ccdarvin"}],"frontMatter":{"title":"Linear models in scikit-learn","description":"cheat sheet for linear models in scikit-learn","authors":["ccdarvin"],"data":"2023-06-08T00:00:00.000Z","tags":["scikit-learn","linear-models"]},"prevItem":{"title":"Cheat Sheets","permalink":"/cheat-sheets/index"},"nextItem":{"title":"Muestreo con python","permalink":"/cheat-sheets/sampling-python"}},"content":"import CheatSheet from \'@site/src/components/CheatSheet\'\\n\\n\\n\\n<CheatSheet header=\\"Linear Model\\">\\n\\n> The following linear models are available in scikit-learn for regression and classification tasks, if $y$ is the target variable, $x$ is the feature vector, and $w$ is the weight vector\\n> - $y = w_0 + w_1x_1 + w_2x_2 + ... + w_px_p$\\n\\n- $w_0$ is the `intercept_`\\n- $w_1, w_2, ..., w_p$ are the `coef_`\\n\\n\\n</CheatSheet>\\n\\n<CheatSheet header=\\"Linear Regression\\">\\n\\n> Fits a linear model with coefficients $w = (w1, \u2026, wp)$ to minimize the residual sum of squares between the observed targets in the dataset, and the targets predicted by the linear approximation.\\n> - $\\\\min_{w} || X w - y||_2^2$\\n\\n```python\\nfrom sklearn.linear_model import LinearRegression\\nlr = LinearRegression()\\n```\\n\\n</CheatSheet>\\n\\n<CheatSheet header=\\"Ridge Regression\\">\\n\\n> Applies L2 regularization to reduce the complexity of the model and prevent overfitting.\\n> - $\\\\min_{w} || X w - y||_2^2 + \\\\alpha ||w||_2^2$\\n> - Hyperparameter $\\\\alpha$\\n\\n* if $\\\\alpha = 0$, then the model is the same as Linear Regression\\n\\n```python\\nfrom sklearn.linear_model import Ridge\\nridge = Ridge(alpha=1.0)\\n\\nfrom sklearn.linear_model import RidgeCV \\n```\\n\\n</CheatSheet>\\n\\n<CheatSheet header=\\"Lasso Regression\\">\\n\\n> Applies L1 regularization to reduce the complexity of the model and prevent overfitting.\\n> - $\\\\min_{w} || X w - y||_2^2 + \\\\alpha ||w||_1$\\n> - Hyperparameter $\\\\alpha$\\n\\n* if $\\\\alpha = 0$, then the model is the same as Linear Regression\\n\\n\\n```python\\nfrom sklearn.linear_model import Lasso\\nlasso = Lasso(alpha=1.0)\\n```\\n\\n</CheatSheet>\\n\\n<CheatSheet header=\\"Elastic Net Regression\\">\\n\\n> Applies both L1 and L2 regularization to reduce the complexity of the model and prevent overfitting.\\n> - $\\\\min_{w} || X w - y||_2^2 + \\\\alpha \\\\rho ||w||_1 + \\\\frac{\\\\alpha(1-\\\\rho)}{2} ||w||_2^2$\\n> - Hyperparameter $\\\\alpha$ and $l1\\\\_ratio$\\n\\n* if $\\\\alpha = 0$, and $l1\\\\_ratio = 0$, then the model is the same as Linear Regression\\n\\n```python\\nfrom sklearn.linear_model import ElasticNet\\nelastic_net = ElasticNet(alpha=1.0, l1_ratio=0.5)\\n```\\n\\n</CheatSheet>\\n\\n<CheatSheet header=\\"Polynomial Regression\\">\\n\\n> Generates polynomial features and fits a linear model to the transformed data.\\n> - $y = w_0 + w_1x_1 + w_2x_2 + w_3x_1^2 + w_4x_1x_2 + w_5x_2^2 + ...$\\n> - Hyperparameter `degree`\\n\\n\\n```python\\nfrom sklearn.preprocessing import PolynomialFeatures\\nfrom sklearn.linear_model import LinearRegression\\nfrom sklearn.pipeline import make_pipeline\\n\\npoly = PolynomialFeatures(degree=2)\\npoly_reg = make_pipeline(poly, LinearRegression())\\n```\\n\\n</CheatSheet>\\n\\n<CheatSheet header=\\"Logistic Regression\\">\\n\\n> Use when you want to predict a binary outcome (0 or 1, yes or no, true or false) given a set of independent variables.\\n> - $y = \\\\frac{1}{1 + e^{-(w_0 + w_1x_1 + w_2x_2 + ... + w_px_p)}}$\\n\\n\\n```python\\nfrom sklearn.linear_model import LogisticRegression\\nlog_reg = LogisticRegression()\\n```\\n\\n</CheatSheet>\\n\\n<CheatSheet header=\\"Stocastic Gradient Descent\\">\\n\\n> Use when you want to train large datasets.\\n> - $w_{t+1} = w_t - \\\\eta \\\\nabla Q_i(w_t)$\\n> - Hyperparameter `eta0` is the learning rate\\n\\n```python\\nfrom sklearn.linear_model import SGDClassifier, SGDRegressor\\nsgd_clf = SGDClassifier()\\nsgd_reg = SGDRegressor()\\n```\\n</CheatSheet>\\n\\n<CheatSheet header=\'Bayesian Ridge Regression\'>\\n\\n> Bayesian Ridge Regression is similar to Ridge Regression, but it introduces a prior on the weights $w$.\\n> - Original Algorithm is detailed in the book `Bayesian learning for neural networks`\\n> - Hyperparameter `alpha_1`, `alpha_2`, `lambda_1`, `lambda_2`\\n\\n```python\\nfrom sklearn.linear_model import BayesianRidge\\nbayesian_ridge = BayesianRidge()\\n```\\n\\n</CheatSheet>\\n\\n<CheatSheet header=\'Passive Aggressive\'>\\n\\n> Passive Aggressive algorithms are a family of algorithms for large-scale learning\\n\\n```python\\nfrom sklearn.linear_model import PassiveAggressiveClassifier, PassiveAggressiveRegressor\\npassive_aggressive_clf = PassiveAggressiveClassifier()\\npassive_aggressive_reg = PassiveAggressiveRegressor()\\n```\\n\\n</CheatSheet>\\n\\n<CheatSheet header=\'RANSAC Regression\'>\\n\\n> RANSAC (RANdom SAmple Consensus) is an iterative algorithm for the robust estimation of parameters from a subset of inliers from the complete data set.\\n\\n```python\\nfrom sklearn.linear_model import RANSACRegressor\\nransac_reg = RANSACRegressor()\\n```\\n\\n</CheatSheet>"},{"id":"/sampling-python","metadata":{"permalink":"/cheat-sheets/sampling-python","source":"@site/cheat-sheets/sampling-python.mdx","title":"Muestreo con python","description":"Cheatsheet de muestreo con python","date":"2023-07-09T00:00:00.000Z","formattedDate":"9 de julio de 2023","tags":[{"label":"python","permalink":"/cheat-sheets/tags/python"},{"label":"muestreo","permalink":"/cheat-sheets/tags/muestreo"},{"label":"numpy","permalink":"/cheat-sheets/tags/numpy"},{"label":"pandas","permalink":"/cheat-sheets/tags/pandas"},{"label":"scipy","permalink":"/cheat-sheets/tags/scipy"}],"readingTime":1.18,"hasTruncateMarker":false,"authors":[{"name":"Darvin Cotrina","title":"Creador de entredata.org","url":"https://github.com/ccdarvin","imageURL":"https://github.com/ccdarvin.png","key":"ccdarvin"}],"frontMatter":{"title":"Muestreo con python","description":"Cheatsheet de muestreo con python","authors":["ccdarvin"],"date":"2023-07-09T00:00:00.000Z","tags":["python","muestreo","numpy","pandas","scipy"]},"prevItem":{"title":"Linear models in scikit-learn","permalink":"/cheat-sheets/sklearn-linear-model"},"nextItem":{"title":"Importar datos de diferentes fuentes con Python","permalink":"/cheat-sheets/importing-data-python"}},"content":"import CheatSheet from \'@site/src/components/CheatSheet\';\\n\\n<CheatSheet>\\n\\n```python\\nimport numpy as np\\nimport pandas as pd\\nfrom scipy import stats\\n```\\n\\n</CheatSheet>\\n\\n\\n<CheatSheet header=\\"Muestreo aleatorio\\">\\n\\n```python\\nnp.random.random(10)\\nnp.random.randint(0, 100, 10)\\ncolors = [\'red\', \'blue\', \'green\']\\nnp.random.choice(colors, 10)\\n```\\n## Con reemplazo\\n\\n```python\\nnp.random.choice(colors, 10, replace=True)\\n```\\n\\n</CheatSheet>\\n\\n<CheatSheet header=\\"Distribucion normal\\">\\n\\nparametros: $\\\\mu$ media, $\\\\sigma$ desviacion estandar y $n$ tama\xf1o de la muestra\\n\\n```python\\nnp.random.normal(0, 1, 10)\\n```\\n\\n```python\\nstats.norm.rvs(0, 1, 10)\\n```\\n\\n</CheatSheet>\\n\\n<CheatSheet header=\\"Distribucion uniforme\\">\\n\\nparametros: $a$ minimo, $b$ maximo y $n$ tama\xf1o de la muestra\\n\\n```python\\nnp.random.uniform(0, 1, 10)\\n```\\n\\n```python\\nstats.uniform.rvs(0, 1, 10)\\n```\\n\\n</CheatSheet>\\n\\n\\n<CheatSheet header=\\"Distribucion binomial\\">\\n\\nparametros: $n$ numero de ensayos, $p$ probabilidad de exito y $n$ tama\xf1o de la muestra\\n\\n```python\\nnp.random.binomial(10, 0.5, 10)\\n```\\n\\n```python\\nstats.binom.rvs(10, 0.5, 10)\\n```\\n\\n</CheatSheet>\\n\\n<CheatSheet header=\\"Distribucion poisson\\">\\n\\nparametros: $\\\\lambda$ tasa de ocurrencia y $n$ tama\xf1o de la muestra\\n\\n```python\\nnp.random.poisson(10, 10)\\n```\\n\\n```python\\nstats.poisson.rvs(10, 10)\\n```\\n\\n</CheatSheet>\\n\\n<CheatSheet header=\\"Distribucion exponencial\\">\\n\\nparametros: $\\\\lambda$ tasa de ocurrencia y $n$ tama\xf1o de la muestra\\n\\n```python\\nnp.random.exponential(10, 10)\\n```\\n\\n```python\\nstats.expon.rvs(10, 10)\\n```\\n\\n</CheatSheet>\\n\\n<CheatSheet header=\\"Muestreo estratificado\\">\\n\\n```python\\ndf = pd.DataFrame({\\n    \'sexo\': np.random.choice([\'M\', \'F\'], 100),\\n    \'edad\': np.random.randint(18, 65, 100),\\n    \'estado_civil\': np.random.choice([\'S\', \'C\', \'D\', \'V\'], 100),\\n    \'ingreso\': np.random.randint(1000, 10000, 100)\\n})\\n\\ndf.groupby(\'sexo\').apply(lambda x: x.sample(10))\\n```\\n\\n</CheatSheet>\\n\\n<CheatSheet header=\\"Muestreo sistematico\\">\\n\\n```python\\ndf = pd.DataFrame({\\n    \'sexo\': np.random.choice([\'M\', \'F\'], 100),\\n    \'edad\': np.random.randint(18, 65, 100),\\n    \'estado_civil\': np.random.choice([\'S\', \'C\', \'D\', \'V\'], 100),\\n    \'ingreso\': np.random.randint(1000, 10000, 100)\\n})\\n\\ndf.iloc[::10] # selecciona cada 10 filas\\n```\\n\\n</CheatSheet>"},{"id":"/importing-data-python","metadata":{"permalink":"/cheat-sheets/importing-data-python","source":"@site/cheat-sheets/importing-data-python.mdx","title":"Importar datos de diferentes fuentes con Python","description":"Cheatsheet para importar datos de diferentes fuentes con Python","date":"2023-07-07T00:00:00.000Z","formattedDate":"7 de julio de 2023","tags":[{"label":"python","permalink":"/cheat-sheets/tags/python"},{"label":"pandas","permalink":"/cheat-sheets/tags/pandas"},{"label":"data","permalink":"/cheat-sheets/tags/data"}],"readingTime":1.37,"hasTruncateMarker":false,"authors":[{"name":"Darvin Cotrina","title":"Creador de entredata.org","url":"https://github.com/ccdarvin","imageURL":"https://github.com/ccdarvin.png","key":"ccdarvin"}],"frontMatter":{"title":"Importar datos de diferentes fuentes con Python","description":"Cheatsheet para importar datos de diferentes fuentes con Python","authors":["ccdarvin"],"tags":["python","pandas","data"],"date":"2023-07-07T00:00:00.000Z"},"prevItem":{"title":"Muestreo con python","permalink":"/cheat-sheets/sampling-python"},"nextItem":{"title":"Preprocesamiento de datos para machine learning","permalink":"/cheat-sheets/preprocessing-data"}},"content":"import CheatSheet from \'@site/src/components/CheatSheet\';\\n\\n<CheatSheet header=\\"Flat files\\">\\n\\n## CSV\\n\\n```python\\nimport pandas as pd\\n# puede ser un file o una url\\npd.read_csv(\'file.csv\') \\npd.read_csv(\'file.txt\', sep=\'\\\\t\')\\n```\\n\\n\\n</CheatSheet>\\n\\n<CheatSheet header=\\"Excel\\">\\n\\n```python\\nimport pandas as pd\\n# puede ser un file o una url\\n# en caso de que sheetname, no este asignado, se lee la primera hoja\\nxls = pd.ExcelFile(\'file.xlsx\', sheetname=None) # Leer todas las hojas\\nxls.keys() # Nombre de las hojas\\nxls[\'sheet\'] # Leer hoja\\n```\\n\\n</CheatSheet>\\n\\n<CheatSheet header=\\"SAS\\">\\n\\n```python\\nfrom sas7bdat import SAS7BDAT\\nwith SAS7BDAT(\'file.sas7bdat\') as file:\\n    df_sas = file.to_data_frame()\\n```\\n</CheatSheet>\\n\\n<CheatSheet header=\\"Stata\\">\\n\\n```python\\nimport pandas as pd\\n# puede ser un file o una url\\ndf = pd.read_stata(\'file.dta\')\\n```\\n\\n</CheatSheet>\\n\\n<CheatSheet header=\\"HDF5\\">\\n\\nLos archivos HDF5 son una buena opci\xf3n para guardar grandes cantidades de datos. Se pueden leer con la librer\xeda `h5py`\\n\\n```python\\nimport h5py\\ndata = h5py.File(\'file.hdf5\', \'r\')\\ndata.keys() # Nombre de los grupos\\n\\ngroup = data[\'group\'] # Leer grupo\\ngroup.keys() # Nombre de los datasets\\n\\ndataset = group[\'dataset\'] # Leer dataset\\ndataset.shape # Dimensiones\\ndataset.value # Valores\\n```\\n\\n</CheatSheet>\\n\\n<CheatSheet header=\\"Matlab\\">\\n\\n```python\\nimport scipy.io\\nmat = scipy.io.loadmat(\'file.mat\')\\n```\\n\\n</CheatSheet>\\n\\n<CheatSheet header=\\"Pickled files\\">\\n\\nLos archivos pickled son archivos binarios de Python. Se pueden leer con la librer\xeda `pickle`\\n\\n```python\\nimport pickle\\nwith open(\'file.pkl\', \'rb\') as file:\\n    data = pickle.load(file)\\n```\\n\\n</CheatSheet>\\n\\n<CheatSheet header=\\"SQL\\">\\n\\n```python\\nfrom sqlalchemy import create_engine\\nengine = create_engine(\'sqlite:///file.sqlite\')\\ntable_names = engine.table_names() # Nombre de las tablas\\n\\nwith engine.connect() as con:\\n    rs = con.execute(\'SELECT * FROM table\')\\n    df = pd.DataFrame(rs.fetchall())\\n    df.columns = rs.keys()\\n```\\n## Con Pandas\\n\\n```python\\nimport pandas as pd\\nfrom sqlalchemy import create_engine\\nengine = create_engine(\'sqlite:///file.sqlite\')\\n\\ndf = pd.read_sql_query(\'SELECT * FROM table\', engine)\\n```\\n</CheatSheet>"},{"id":"/preprocessing-data","metadata":{"permalink":"/cheat-sheets/preprocessing-data","source":"@site/cheat-sheets/preprocessing-data.mdx","title":"Preprocesamiento de datos para machine learning","description":"Cheat Sheet de preprocesamiento de datos para machine learning con scikit-learn","date":"2023-07-05T00:00:00.000Z","formattedDate":"5 de julio de 2023","tags":[{"label":"machine learning","permalink":"/cheat-sheets/tags/machine-learning"},{"label":"scikit-learn","permalink":"/cheat-sheets/tags/scikit-learn"},{"label":"preprocessing","permalink":"/cheat-sheets/tags/preprocessing"}],"readingTime":2.05,"hasTruncateMarker":false,"authors":[{"name":"Darvin Cotrina","title":"Creador de entredata.org","url":"https://github.com/ccdarvin","imageURL":"https://github.com/ccdarvin.png","key":"ccdarvin"}],"frontMatter":{"title":"Preprocesamiento de datos para machine learning","description":"Cheat Sheet de preprocesamiento de datos para machine learning con scikit-learn","date":"2023-07-05T00:00:00.000Z","tags":["machine learning","scikit-learn","preprocessing"],"authors":["ccdarvin"]},"prevItem":{"title":"Importar datos de diferentes fuentes con Python","permalink":"/cheat-sheets/importing-data-python"},"nextItem":{"title":"Metricas para evaluar un modelo en machine learning","permalink":"/cheat-sheets/metrics-to-evaluate-a-machine-learning-model"}},"content":"import CheatSheet from \'@site/src/components/CheatSheet\';\\n\\n<CheatSheet header=\\"Missing data\\">\\n\\nEs importante tener en cuenta que los modelos de machine learning no pueden trabajar con valores nulos, por lo que es necesario reemplazarlos por alg\xfan valor.\\n\\n## Eliminar\\n\\nSi hay muchos valores nulos, se puede eliminar la columna o fila, tener en cuenta que se puede perder informaci\xf3n importante.\\n\\n```python\\ndf.dropna()\\n```\\n\\n## Imputar\\n\\n```python\\nfrom sklearn.impute import SimpleImputer\\nimputer = SimpleImputer(strategy=\'mean\')\\nimputer.fit_transform(X)\\n```\\n\\n# crear columna indicadora\\n\\n```python\\nfrom sklearn.impute import MissingIndicator\\nindicator = MissingIndicator()\\nindicator.fit_transform(X)\\n```\\n\\n</CheatSheet>\\n\\n<CheatSheet header=\\"Encoder data\\">\\n\\n## Dummy \\n\\n<table>\\n    <thead>\\n        <tr>\\n            <th>Variable</th>\\n            <th colspan=\\"3\\">Dummy</th>\\n        </tr>\\n        <tr>\\n            <th>color</th>\\n            <th>color_rojo</th>\\n            <th>color_verde</th>\\n            <th>color_azul</th>\\n        </tr>\\n    </thead>\\n    <tbody>\\n        <tr>\\n            <td>rojo</td>\\n            <td>1</td>\\n            <td>0</td>\\n            <td>0</td>\\n        </tr>\\n        <tr>\\n            <td>verde</td>\\n            <td>0</td>\\n            <td>1</td>\\n            <td>0</td>\\n        </tr>\\n        <tr>\\n            <td>azul</td>\\n            <td>0</td>\\n            <td>0</td>\\n            <td>1</td>\\n        </tr>\\n    </tbody>\\n</table>\\n\\n```python\\nfrom sklearn.preprocessing import OneHotEncoder\\nencoder = OneHotEncoder()\\nencoder.fit_transform(X)\\n```\\n\\n```python\\nimport pandas as pd\\npd.get_dummies(X)\\n```\\n\\n## Label\\n\\n<table>\\n    <thead>\\n        <tr>\\n            <th>Variable</th>\\n            <th>Label</th>\\n        </tr>\\n    </thead>\\n    <tbody>\\n        <tr>\\n            <td>rojo</td>\\n            <td>0</td>\\n        </tr>\\n        <tr>\\n            <td>verde</td>\\n            <td>1</td>\\n        </tr>\\n        <tr>\\n            <td>azul</td>\\n            <td>2</td>\\n        </tr>\\n    </tbody>\\n</table>\\n    \\n```python\\nfrom sklearn.preprocessing import LabelEncoder\\nencoder = LabelEncoder()\\nencoder.fit_transform(X)\\n```\\n\\n```python\\nimport pandas as pd\\ndf = pd.DataFrame({\'color\': [\'rojo\', \'verde\', \'azul\']})\\ndf[\'color\'].astype(\'category\').cat.codes\\n```\\n\\n</CheatSheet>\\n\\n<CheatSheet header=\\"Scaling and Centering Data\\">\\n\\n## StandardScaler\\n\\n* $\\\\frac{x - \\\\mu}{\\\\sigma}$\\n\\n```python\\nfrom sklearn.preprocessing import StandardScaler\\nscaler = StandardScaler()\\nscaler.fit_transform(X)\\n```\\n\\n## MinMaxScaler\\n\\n* $\\\\frac{x - min}{max - min}$\\n\\n```python\\nfrom sklearn.preprocessing import MinMaxScaler\\nscaler = MinMaxScaler()\\nscaler.fit_transform(X)\\n```\\n\\n## RobustScaler\\n\\n* $\\\\frac{x - Q_1}{Q_3 - Q_1}$\\n\\n```python\\nfrom sklearn.preprocessing import RobustScaler\\nscaler = RobustScaler()\\nscaler.fit_transform(X)\\n```\\n\\n## Normalizer\\n\\n* L1: $\\\\frac{x}{\\\\sum_{i=1}^n |x_i|}$\\n* L2: $\\\\frac{x}{\\\\sqrt{\\\\sum_{i=1}^n x_i^2}}$\\n* max: $\\\\frac{x}{max(x)}$\\n\\n```python\\n\\nfrom sklearn.preprocessing import Normalizer\\n# L1, L2, max\\nscaler = Normalizer(norm=\'l2\')\\nscaler.fit_transform(X)\\n```\\n\\n</CheatSheet>\\n\\n<CheatSheet header=\\"Feature engineering\\">\\n\\n## PolynomialFeatures\\n\\n* $x_1, x_2 \\\\rightarrow x_1^2, x_1x_2, x_2^2$\\n\\n```python\\nfrom sklearn.preprocessing import PolynomialFeatures\\npoly = PolynomialFeatures(degree=2)\\npoly.fit_transform(X)\\n```\\n\\n## Binning\\n\\nEste proceso se utiliza para discretizar variables continuas, es decir, convertir variables continuas en variables categ\xf3ricas, agrupando los valores en intervalos.\\n\\n\\n* $x \\\\rightarrow \\\\{0, 1, 2,..., n\\\\}$\\n\\n```python\\nfrom sklearn.preprocessing import KBinsDiscretizer\\ndiscretizer = KBinsDiscretizer(n_bins=3, encode=\'ordinal\', strategy=\'uniform\')\\ndiscretizer.fit_transform(X)\\n```\\n\\n</CheatSheet>\\n\\n<CheatSheet header=\\"Feature selection\\">\\n\\n## VarianceThreshold\\n\\n\\n```python\\n\\nfrom sklearn.feature_selection import VarianceThreshold\\nselector = VarianceThreshold(threshold=0.1)\\nselector.fit_transform(X)\\n```\\n\\n## SelectKBest\\n\\n```python\\nfrom sklearn.feature_selection import SelectKBest\\nfrom sklearn.feature_selection import chi2\\nselector = SelectKBest(chi2, k=2)\\nselector.fit_transform(X, y)\\n```\\n\\n## SelectFromModel\\n\\n```python\\nfrom sklearn.feature_selection import SelectFromModel\\nfrom sklearn.linear_model import LogisticRegression\\nselector = SelectFromModel(estimator=LogisticRegression())\\nselector.fit_transform(X, y)\\n```\\n\\n## RFE\\n\\n```python\\n\\nfrom sklearn.feature_selection import RFE\\nfrom sklearn.linear_model import LogisticRegression\\nselector = RFE(estimator=LogisticRegression(), n_features_to_select=2)\\nselector.fit_transform(X, y)\\n```\\n\\n</CheatSheet>"},{"id":"/metrics-to-evaluate-a-machine-learning-model","metadata":{"permalink":"/cheat-sheets/metrics-to-evaluate-a-machine-learning-model","source":"@site/cheat-sheets/metrics-to-evaluate-a-machine-learning-model.mdx","title":"Metricas para evaluar un modelo en machine learning","description":"Cheat Sheet de Metricas para evaluar un modelo en machine learning","date":"2023-07-03T00:00:00.000Z","formattedDate":"3 de julio de 2023","tags":[],"readingTime":2.835,"hasTruncateMarker":false,"authors":[{"name":"Darvin Cotrina","title":"Creador de entredata.org","url":"https://github.com/ccdarvin","imageURL":"https://github.com/ccdarvin.png","key":"ccdarvin"}],"frontMatter":{"title":"Metricas para evaluar un modelo en machine learning","description":"Cheat Sheet de Metricas para evaluar un modelo en machine learning","authors":"ccdarvin","date":"2023-07-03T00:00:00.000Z"},"prevItem":{"title":"Preprocesamiento de datos para machine learning","permalink":"/cheat-sheets/preprocessing-data"}},"content":"import CheatSheet from \'@site/src/components/CheatSheet\';\\n\\n\\n\\n## Classification Metrics\\n\\n<CheatSheet header=\\"Confusion Matrix\\">\\n<table width=\\"100%\\">\\n    <thead>\\n        <tr>\\n            <th></th>\\n            <th colspan=\\"2\\">Predicted</th>\\n        </tr>\\n        <tr>\\n            <th>Actual class</th>\\n            <th>Positive</th>\\n            <th>Negative</th>\\n        </tr>\\n    </thead>\\n    <tbody>\\n        <tr>\\n            <th>Positive</th>\\n            <td>True Positive (TP)</td>\\n            <td>False Negative (FN)</td>\\n        </tr>\\n        <tr>\\n            <th>Negative</th>\\n            <td>False Positive (FP)</td>\\n            <td>True Negative (TN)</td>\\n        </tr>\\n    </tbody>\\n</table>\\n\\n```python\\t\\nfrom sklearn.metrics import confusion_matrix\\nconfusion_matrix(y_true, y_pred)\\n```\\n</CheatSheet>\\n\\n<CheatSheet header=\\"Accuaracy\\">\\n\\nUsar Accuaracy cuando quieres medir la performance de un modelo de clasificacion. Es la proporcion de predicciones correctas sobre el total de predicciones realizadas.\\n\\n* Accuracy = $\\\\frac{TP + TN}{TP + TN + FP + FN}$\\n\\n```python\\t\\nfrom sklearn.metrics import accuracy_score\\naccuracy_score(y_true, y_pred)\\n```\\n\\n</CheatSheet>\\n<CheatSheet header=\\"Precision\\">\\n\\nUsar Precision cuanto quieres minimizar los falsos positivos (Errores de tipo I). Es la proporcion de predicciones correctas sobre el total de predicciones realizadas.\\n* Precision = $\\\\frac{TP}{TP + FP}$\\n\\n```python\\nfrom sklearn.metrics import precision_score\\nprecision_score(y_true, y_pred)\\n```\\n\\n</CheatSheet>\\n\\n<CheatSheet header=\\"Recall\\">\\n\\nUsar Recall cuando quieres minimizar los falsos negativos (Errores de tipo II). Es la proporcion de predicciones correctas sobre el total de predicciones realizadas.\\n\\n* Recall = $\\\\frac{TP}{TP + FN}$\\n\\n```python\\nfrom sklearn.metrics import recall_score\\nrecall_score(y_true, y_pred)\\n```\\n\\n</CheatSheet>\\n\\n<CheatSheet header=\\"F1 Score\\">\\n\\nUsar F1 Score cuando quieres minimizar los falsos negativos y falsos positivos. Es la media armonica entre Precision y Recall.\\n\\n* F1 Score = $\\\\frac{2 * Precision * Recall}{Precision + Recall}$\\n\\n```python\\nfrom sklearn.metrics import f1_score\\nf1_score(y_true, y_pred)\\n```\\n\\n</CheatSheet>\\n\\n<CheatSheet header=\\"ROC Curve\\">\\n\\nUsar ROC Curve cuando quieres evaluar el rendimiento de un modelo de clasificacion binaria. Es una grafica de la tasa de verdaderos positivos (TPR) frente a la tasa de falsos positivos (FPR) para diferentes umbrales de probabilidad de clasificacion.\\n\\n* TPR = $\\\\frac{TP}{TP + FN}$\\n* FPR = $\\\\frac{FP}{FP + TN}$\\n\\n```python\\nfrom sklearn.metrics import roc_curve, roc_auc_score\\nimport matplotlib.pyplot as plt\\n\\nfpr, tpr, thresholds = roc_curve(y_true, y_pred)\\nauc = roc_auc_score(y_true, y_pred)\\n\\nplt.plot(fpr, tpr, label=\'ROC curve (area = %0.2f)\' % auc)\\nplt.plot([0, 1], [0, 1], \'k--\')\\nplt.xlabel(\'False Positive Rate\')\\nplt.ylabel(\'True Positive Rate\')\\nplt.title(\'ROC Curve\')\\nplt.show()\\n```\\n\\n</CheatSheet>\\n\\n<CheatSheet header=\\"Classification Report\\">\\n\\nUsar Classification Report cuando quieres evaluar el rendimiento de un modelo de clasificacion. Es un resumen de las metricas de clasificacion para cada clase del problema.\\n\\n```python\\nfrom sklearn.metrics import classification_report\\nprint(classification_report(y_true, y_pred))\\n```\\n\\n</CheatSheet>\\n\\n## Regression Metrics\\n\\n<CheatSheet header=\\"Mean Absolute Error (MAE)\\">\\n\\nUsar MAE cuando quieres medir el error medio de un modelo de regresion. Es la media de la diferencia absoluta entre las predicciones y los valores reales.\\n\\n* MAE = $\\\\frac{1}{n} \\\\sum_{i=1}^{n} |y_{i} - \\\\hat{y}_{i}|$\\n\\n```python\\nfrom sklearn.metrics import mean_absolute_error\\nmean_absolute_error(y_true, y_pred)\\n```\\n\\n</CheatSheet>\\n\\n<CheatSheet header=\\"Mean Squared Error (MSE)\\">\\n\\nUsar MSE cuando quieres penalizar los errores mas grandes. Es la mejor metrica cuando le preocupa las grandes desviaciones en los errores.\\n\\n* MSE = $\\\\frac{1}{n} \\\\sum_{i=1}^{n} (y_{i} - \\\\hat{y}_{i})^{2}$\\n\\n```python\\nfrom sklearn.metrics import mean_squared_error\\nmean_squared_error(y_true, y_pred)\\n```\\n\\n</CheatSheet>\\n\\n<CheatSheet header=\\"Root Mean Squared Error (RMSE)\\">\\n\\nUsar RMSE cuando quieres penalizar los errores mas grandes. Es la mejor metrica cuando desea una medida que sea menos sensible a los valores atipicos.\\n\\n* RMSE = $\\\\sqrt{\\\\frac{1}{n} \\\\sum_{i=1}^{n} (y_{i} - \\\\hat{y}_{i})^{2}}$\\n\\n```python\\nfrom sklearn.metrics import mean_squared_error\\nmean_squared_error(y_true, y_pred, squared=False)\\n# or\\nimport numpy as np\\nnp.sqrt(mean_squared_error(y_true, y_pred))\\n```\\n\\n</CheatSheet>\\n\\n<CheatSheet header=\\"R-Squared (R2)\\">\\nUsar R2 cuando quieres medir la varianza de los errores. Es la proporcion de la varianza de los errores y la varianza de los valores reales\\n\\n* R2 = $1 - \\\\frac{\\\\sum_{i=1}^{n} (y_{i} - \\\\hat{y}_{i})^{2}}{\\\\sum_{i=1}^{n} (y_{i} - \\\\bar{y}_{i})^{2}}$\\n\\n```python\\nfrom sklearn.metrics import r2_score\\nr2_score(y_true, y_pred)\\n```\\n\\n</CheatSheet>"}]}')}}]);