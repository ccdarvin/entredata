"use strict";(self.webpackChunkdocsweb=self.webpackChunkdocsweb||[]).push([[644],{876:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var a=t(2784);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=a.createContext({}),c=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=c(e.components);return a.createElement(i.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},h=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(t),h=o,m=d["".concat(i,".").concat(h)]||d[h]||u[h]||r;return t?a.createElement(m,l(l({ref:n},p),{},{components:t})):a.createElement(m,l({ref:n},p))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,l=new Array(r);l[0]=h;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s[d]="string"==typeof e?e:o,l[1]=s;for(var c=2;c<r;c++)l[c]=t[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}h.displayName="MDXCreateElement"},7025:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var a=t(7896),o=(t(2784),t(876));const r={title:"Scraping web con BeautifulSoup",description:"Scraping web con BeautifulSoup",authors:["ccdarvin"],date:new Date("2023-07-10T00:00:00.000Z"),tags:["python","web","scraping","beautifulsoup"]},l="Scraping web con BeautifulSoup",s={permalink:"/en/article/scraping-with-BeautifulSoup",source:"@site/blog/scraping-with-BeautifulSoup.md",title:"Scraping web con BeautifulSoup",description:"Scraping web con BeautifulSoup",date:"2023-07-10T00:00:00.000Z",formattedDate:"July 10, 2023",tags:[{label:"python",permalink:"/en/article/tags/python"},{label:"web",permalink:"/en/article/tags/web"},{label:"scraping",permalink:"/en/article/tags/scraping"},{label:"beautifulsoup",permalink:"/en/article/tags/beautifulsoup"}],readingTime:8.05,hasTruncateMarker:!1,authors:[{name:"Darvin Cotrina",title:"Creador de entredata.org",url:"https://github.com/ccdarvin",imageURL:"https://github.com/ccdarvin.png",key:"ccdarvin"}],frontMatter:{title:"Scraping web con BeautifulSoup",description:"Scraping web con BeautifulSoup",authors:["ccdarvin"],date:"2023-07-10T00:00:00.000Z",tags:["python","web","scraping","beautifulsoup"]},prevItem:{title:"\xbfComo ver los d\xedas de la semana usando pandas?",permalink:"/en/article/how-to-see-the-days-of-the-week-with-pandas"},nextItem:{title:"Arboles de decisi\xf3n y m\xe9todos de ensamble",permalink:"/en/article/arboles-decision-ensamble"}},i={authorsImageUrls:[void 0]},c=[{value:"1. Requerimientos",id:"requerimientos",level:2},{value:"2. Importar librer\xedas",id:"importar-librer\xedas",level:2},{value:"3. Obtener el contenido de una p\xe1gina web",id:"obtener-el-contenido-de-una-p\xe1gina-web",level:2},{value:"4. Ver el contenido de la p\xe1gina",id:"ver-el-contenido-de-la-p\xe1gina",level:2},{value:"5. Navegar por el contenido",id:"navegar-por-el-contenido",level:2},{value:"6. Conclusiones",id:"conclusiones",level:2}],p={toc:c},d="wrapper";function u(e){let{components:n,...t}=e;return(0,o.kt)(d,(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"En esta secci\xf3n vamos a ver c\xf3mo podemos extraer informaci\xf3n de p\xe1ginas\nweb usando la librer\xeda ",(0,o.kt)("inlineCode",{parentName:"p"},"BeautifulSoup")," de Python, veremos el poder de\nesta librer\xeda y c\xf3mo podemos usarla para extraer informaci\xf3n de p\xe1ginas\nweb."),(0,o.kt)("h2",{id:"requerimientos"},"1. Requerimientos"),(0,o.kt)("p",null,"Antes de empezar, debemos instalar las siguientes librer\xedas:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"pip install requests\npip install beautifulsoup4\n")),(0,o.kt)("h2",{id:"importar-librer\xedas"},"2. Importar librer\xedas"),(0,o.kt)("p",null,"Como en todo codigo de Python, lo primero que debemos hacer es importar\nlas librer\xedas que vamos a usar, en este caso"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from bs4 import BeautifulSoup\nimport requests\n")),(0,o.kt)("h2",{id:"obtener-el-contenido-de-una-p\xe1gina-web"},"3. Obtener el contenido de una p\xe1gina web"),(0,o.kt)("p",null,"BeautifulSoup no puede optener el contenido directamente desde una url,\npor lo que nos vamos ayudar en el m\xf3dulo ",(0,o.kt)("inlineCode",{parentName:"p"},"requests")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"url = 'https://peps.python.org/pep-0020/'\nr = requests.get(url)\nhtml = r.text\n")),(0,o.kt)("h2",{id:"ver-el-contenido-de-la-p\xe1gina"},"4. Ver el contenido de la p\xe1gina"),(0,o.kt)("p",null,"BeautifulSoup nos permite ver el contenido de la p\xe1gina de una forma m\xe1s\namigable, para ello usamos el m\xe9todo ",(0,o.kt)("inlineCode",{parentName:"p"},"prettify()")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"soup = BeautifulSoup(html, 'html')\nprint(soup.prettify())\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},'<!DOCTYPE html>\n<html lang="en">\n <head>\n  <meta charset="utf-8"/>\n  <meta content="width=device-width, initial-scale=1.0" name="viewport"/>\n  <meta content="light dark" name="color-scheme"/>\n  <title>\n   PEP 20 \u2013 The Zen of Python | peps.python.org\n  </title>\n  <link href="../_static/py.png" rel="shortcut icon"/>\n  <link href="https://peps.python.org/pep-0020/" rel="canonical"/>\n  <link href="../_static/style.css" rel="stylesheet" type="text/css"/>\n  <link href="../_static/mq.css" rel="stylesheet" type="text/css"/>\n  <link href="../_static/pygments.css" id="pyg-light" media="(prefers-color-scheme: light)" rel="stylesheet" type="text/css"/>\n  <link href="../_static/pygments_dark.css" id="pyg-dark" media="(prefers-color-scheme: dark)" rel="stylesheet" type="text/css"/>\n  <link href="https://peps.python.org/peps.rss" rel="alternate" title="Latest PEPs" type="application/rss+xml"/>\n  <meta content="Python Enhancement Proposals (PEPs)" name="description"/>\n </head>\n <body>\n  <svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n   <symbol id="svg-sun-half" pointer-events="all" viewbox="0 0 24 24">\n    <title>\n     Following system colour scheme\n    </title>\n    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\n     <circle cx="12" cy="12" r="9">\n     </circle>\n     <path d="M12 3v18m0-12l4.65-4.65M12 14.3l7.37-7.37M12 19.6l8.85-8.85">\n     </path>\n    </svg>\n   </symbol>\n   <symbol id="svg-moon" pointer-events="all" viewbox="0 0 24 24">\n    <title>\n     Selected dark colour scheme\n    </title>\n    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\n     <path d="M0 0h24v24H0z" fill="none" stroke="none">\n     </path>\n     <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z">\n     </path>\n    </svg>\n   </symbol>\n   <symbol id="svg-sun" pointer-events="all" viewbox="0 0 24 24">\n    <title>\n     Selected light colour scheme\n    </title>\n    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\n     <circle cx="12" cy="12" r="5">\n     </circle>\n     <line x1="12" x2="12" y1="1" y2="3">\n     </line>\n     <line x1="12" x2="12" y1="21" y2="23">\n     </line>\n     <line x1="4.22" x2="5.64" y1="4.22" y2="5.64">\n     </line>\n     <line x1="18.36" x2="19.78" y1="18.36" y2="19.78">\n     </line>\n     <line x1="1" x2="3" y1="12" y2="12">\n     </line>\n     <line x1="21" x2="23" y1="12" y2="12">\n     </line>\n     <line x1="4.22" x2="5.64" y1="19.78" y2="18.36">\n     </line>\n     <line x1="18.36" x2="19.78" y1="5.64" y2="4.22">\n     </line>\n    </svg>\n   </symbol>\n  </svg>\n  <script>\n   document.documentElement.dataset.colour_scheme = localStorage.getItem("colour_scheme") || "auto"\n  <\/script>\n  <section id="pep-page-section">\n   <header>\n    <h1>\n     Python Enhancement Proposals\n    </h1>\n    <ul class="breadcrumbs">\n     <li>\n      <a href="https://www.python.org/" title="The Python Programming Language">\n       Python\n      </a>\n      \xbb\n     </li>\n     <li>\n      <a href="../pep-0000/">\n       PEP Index\n      </a>\n      \xbb\n     </li>\n     <li>\n      PEP 20\n     </li>\n    </ul>\n    <button id="colour-scheme-cycler" onclick="setColourScheme(nextColourScheme())">\n     <svg aria-hidden="true" class="colour-scheme-icon-when-auto">\n      <use href="#svg-sun-half">\n      </use>\n     </svg>\n     <svg aria-hidden="true" class="colour-scheme-icon-when-dark">\n      <use href="#svg-moon">\n      </use>\n     </svg>\n     <svg aria-hidden="true" class="colour-scheme-icon-when-light">\n      <use href="#svg-sun">\n      </use>\n     </svg>\n     <span class="visually-hidden">\n      Toggle light / dark / auto colour theme\n     </span>\n    </button>\n   </header>\n   <article>\n    <section id="pep-content">\n     <h1 class="page-title">\n      PEP 20 \u2013 The Zen of Python\n     </h1>\n     <dl class="rfc2822 field-list simple">\n      <dt class="field-odd">\n       Author\n       <span class="colon">\n        :\n       </span>\n      </dt>\n      <dd class="field-odd">\n       Tim Peters &lt;tim.peters at gmail.com&gt;\n      </dd>\n      <dt class="field-even">\n       Status\n       <span class="colon">\n        :\n       </span>\n      </dt>\n      <dd class="field-even">\n       <abbr title="Currently valid informational guidance, or an in-use process">\n        Active\n       </abbr>\n      </dd>\n      <dt class="field-odd">\n       Type\n       <span class="colon">\n        :\n       </span>\n      </dt>\n      <dd class="field-odd">\n       <abbr title="Non-normative PEP containing background, guidelines or other information relevant to the Python ecosystem">\n        Informational\n       </abbr>\n      </dd>\n      <dt class="field-even">\n       Created\n       <span class="colon">\n        :\n       </span>\n      </dt>\n      <dd class="field-even">\n       19-Aug-2004\n      </dd>\n      <dt class="field-odd">\n       Post-History\n       <span class="colon">\n        :\n       </span>\n      </dt>\n      <dd class="field-odd">\n       22-Aug-2004\n      </dd>\n     </dl>\n     <hr class="docutils"/>\n     <section id="contents">\n      <details>\n       <summary>\n        Table of Contents\n       </summary>\n       <ul class="simple">\n        <li>\n         <a class="reference internal" href="#abstract">\n          Abstract\n         </a>\n        </li>\n        <li>\n         <a class="reference internal" href="#the-zen-of-python">\n          The Zen of Python\n         </a>\n        </li>\n        <li>\n         <a class="reference internal" href="#easter-egg">\n          Easter Egg\n         </a>\n        </li>\n        <li>\n         <a class="reference internal" href="#references">\n          References\n         </a>\n        </li>\n        <li>\n         <a class="reference internal" href="#copyright">\n          Copyright\n         </a>\n        </li>\n       </ul>\n      </details>\n     </section>\n     <section id="abstract">\n      <h2>\n       <a class="toc-backref" href="#abstract" role="doc-backlink">\n        Abstract\n       </a>\n      </h2>\n      <p>\n       Long time Pythoneer Tim Peters succinctly channels the BDFL\u2019s guiding\nprinciples for Python\u2019s design into 20 aphorisms, only 19 of which\nhave been written down.\n      </p>\n     </section>\n     <section id="the-zen-of-python">\n      <h2>\n       <a class="toc-backref" href="#the-zen-of-python" role="doc-backlink">\n        The Zen of Python\n       </a>\n      </h2>\n      <div class="highlight-text notranslate">\n       <div class="highlight">\n        <pre><span></span>Beautiful is better than ugly.\nExplicit is better than implicit.\nSimple is better than complex.\nComplex is better than complicated.\nFlat is better than nested.\nSparse is better than dense.\nReadability counts.\nSpecial cases aren\'t special enough to break the rules.\nAlthough practicality beats purity.\nErrors should never pass silently.\nUnless explicitly silenced.\nIn the face of ambiguity, refuse the temptation to guess.\nThere should be one-- and preferably only one --obvious way to do it.\nAlthough that way may not be obvious at first unless you\'re Dutch.\nNow is better than never.\nAlthough never is often better than *right* now.\nIf the implementation is hard to explain, it\'s a bad idea.\nIf the implementation is easy to explain, it may be a good idea.\nNamespaces are one honking great idea -- let\'s do more of those!\n</pre>\n       </div>\n      </div>\n     </section>\n     <section id="easter-egg">\n      <h2>\n       <a class="toc-backref" href="#easter-egg" role="doc-backlink">\n        Easter Egg\n       </a>\n      </h2>\n      <div class="highlight-pycon notranslate">\n       <div class="highlight">\n        <pre><span></span><span class="gp">&gt;&gt;&gt; </span><span class="kn">import</span> <span class="nn">this</span>\n</pre>\n       </div>\n      </div>\n     </section>\n     <section id="references">\n      <h2>\n       <a class="toc-backref" href="#references" role="doc-backlink">\n        References\n       </a>\n      </h2>\n      <p>\n       Originally posted to\n       <a class="reference external" href="mailto:comp.lang.python/python-list%40python.org">\n        comp\n        <span>\n         .\n        </span>\n        lang\n        <span>\n         .\n        </span>\n        python/python-list\n        <span>\n         @\n        </span>\n        python\n        <span>\n         .\n        </span>\n        org\n       </a>\n       under a\nthread called\n       <a class="reference external" href="https://groups.google.com/d/msg/comp.lang.python/B_VxeTBClM0/L8W9KlsiriUJ">\n        \u201cThe Way of Python\u201d\n       </a>\n      </p>\n     </section>\n     <section id="copyright">\n      <h2>\n       <a class="toc-backref" href="#copyright" role="doc-backlink">\n        Copyright\n       </a>\n      </h2>\n      <p>\n       This document has been placed in the public domain.\n      </p>\n     </section>\n    </section>\n    <hr class="docutils"/>\n    <p>\n     Source:\n     <a class="reference external" href="https://github.com/python/peps/blob/main/pep-0020.txt">\n      https://github.com/python/peps/blob/main/pep-0020.txt\n     </a>\n    </p>\n    <p>\n     Last modified:\n     <a class="reference external" href="https://github.com/python/peps/commits/main/pep-0020.txt">\n      2022-03-15 17:40:34+00:00 GMT\n     </a>\n    </p>\n   </article>\n   <nav id="pep-sidebar">\n    <h2>\n     Contents\n    </h2>\n    <ul>\n     <li>\n      <a class="reference internal" href="#abstract">\n       Abstract\n      </a>\n     </li>\n     <li>\n      <a class="reference internal" href="#the-zen-of-python">\n       The Zen of Python\n      </a>\n     </li>\n     <li>\n      <a class="reference internal" href="#easter-egg">\n       Easter Egg\n      </a>\n     </li>\n     <li>\n      <a class="reference internal" href="#references">\n       References\n      </a>\n     </li>\n     <li>\n      <a class="reference internal" href="#copyright">\n       Copyright\n      </a>\n     </li>\n    </ul>\n    <br/>\n    <a href="https://github.com/python/peps/blob/main/pep-0020.txt" id="source">\n     Page Source (GitHub)\n    </a>\n   </nav>\n  </section>\n  <script src="../_static/colour_scheme.js">\n  <\/script>\n  <script src="../_static/wrap_tables.js">\n  <\/script>\n  <script src="../_static/sticky_banner.js">\n  <\/script>\n </body>\n</html>\n')),(0,o.kt)("h2",{id:"navegar-por-el-contenido"},"5. Navegar por el contenido"),(0,o.kt)("p",null,"Una vez que tenemos el contenido de la p\xe1gina, podemos navegar por el\ncontenido usando los m\xe9todos ",(0,o.kt)("inlineCode",{parentName:"p"},"find()")," y ",(0,o.kt)("inlineCode",{parentName:"p"},"find_all()"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"a = soup.find_all('a')\nfor link in a:\n    print(link.get('href'))\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"https://www.python.org/\n../pep-0000/\n#abstract\n#the-zen-of-python\n#easter-egg\n#references\n#copyright\n#abstract\n#the-zen-of-python\n#easter-egg\n#references\nmailto:comp.lang.python/python-list%40python.org\nhttps://groups.google.com/d/msg/comp.lang.python/B_VxeTBClM0/L8W9KlsiriUJ\n#copyright\nhttps://github.com/python/peps/blob/main/pep-0020.txt\nhttps://github.com/python/peps/commits/main/pep-0020.txt\n#abstract\n#the-zen-of-python\n#easter-egg\n#references\n#copyright\nhttps://github.com/python/peps/blob/main/pep-0020.txt\n")),(0,o.kt)("p",null,"Para navegar por el contenido del documento, ",(0,o.kt)("inlineCode",{parentName:"p"},"BeautifulSoup")," tiene\nvarios m\xe9todos que nos permiten navegar por el contenido del documento,\nlos m\xe1s usados son:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"find()"),": Nos permite encontrar el primer elemento que cumpla con\nlas condiciones especificadas."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"find_all()"),": Nos permite encontrar todos los elementos que cumplan\ncon las condiciones especificadas."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"select()"),": Nos permite encontrar todos los elementos que cumplan\ncon las condiciones especificadas usando selectores CSS."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"select_one()"),": Nos permite encontrar el primer elemento que cumpla\ncon las condiciones especificadas usando selectores CSS."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"find_parent()"),": Nos permite encontrar el elemento padre que cumpla\ncon las condiciones especificadas."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"find_parents()"),": Nos permite encontrar todos los elementos padres\nque cumplan con las condiciones especificadas.")),(0,o.kt)("p",null,"Entre otros, para mas informaci\xf3n ir a la\n",(0,o.kt)("a",{parentName:"p",href:"https://www.crummy.com/software/BeautifulSoup/bs4/doc/"},"documentaci\xf3n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"# buscar elementos a por class\nelements = soup.find_all('a', {'class': 'reference internal'})\nfor element in elements:\n    print(element.get('href'))\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"#abstract\n#the-zen-of-python\n#easter-egg\n#references\n#copyright\n#abstract\n#the-zen-of-python\n#easter-egg\n#references\n#copyright\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"# buscar elementos por id\nelements = soup.find_all(id = 'copyright')\nprint(elements)\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},'[<section id="copyright">\n<h2><a class="toc-backref" href="#copyright" role="doc-backlink">Copyright</a></h2>\n<p>This document has been placed in the public domain.</p>\n</section>]\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"# buscar elementos por texto\nelements = soup.find_all(string='PEP 20')\nelements\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"[]\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"# buscar elementos por texto con expresiones regulares\nimport re\nelements = soup.find_all(re.compile('^sy'))\nelements\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},'[<symbol id="svg-sun-half" pointer-events="all" viewbox="0 0 24 24">\n <title>Following system colour scheme</title>\n <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\n <circle cx="12" cy="12" r="9"></circle>\n <path d="M12 3v18m0-12l4.65-4.65M12 14.3l7.37-7.37M12 19.6l8.85-8.85"></path>\n </svg>\n </symbol>,\n <symbol id="svg-moon" pointer-events="all" viewbox="0 0 24 24">\n <title>Selected dark colour scheme</title>\n <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\n <path d="M0 0h24v24H0z" fill="none" stroke="none"></path>\n <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z"></path>\n </svg>\n </symbol>,\n <symbol id="svg-sun" pointer-events="all" viewbox="0 0 24 24">\n <title>Selected light colour scheme</title>\n <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\n <circle cx="12" cy="12" r="5"></circle>\n <line x1="12" x2="12" y1="1" y2="3"></line>\n <line x1="12" x2="12" y1="21" y2="23"></line>\n <line x1="4.22" x2="5.64" y1="4.22" y2="5.64"></line>\n <line x1="18.36" x2="19.78" y1="18.36" y2="19.78"></line>\n <line x1="1" x2="3" y1="12" y2="12"></line>\n <line x1="21" x2="23" y1="12" y2="12"></line>\n <line x1="4.22" x2="5.64" y1="19.78" y2="18.36"></line>\n <line x1="18.36" x2="19.78" y1="5.64" y2="4.22"></line>\n </svg>\n </symbol>]\n')),(0,o.kt)("h2",{id:"conclusiones"},"6. Conclusiones"),(0,o.kt)("p",null,"Como hemos visto, ",(0,o.kt)("inlineCode",{parentName:"p"},"BeautifulSoup")," es una librer\xeda muy poderosa que nos\npermite extraer informaci\xf3n de p\xe1ginas web de una forma rapida y\nsencilla, pero tiene sus limitaciones y no es la mejor opci\xf3n para\nextraer informaci\xf3n de p\xe1ginas web complejas, para ello existen otras\nlibrer\xedas como ",(0,o.kt)("inlineCode",{parentName:"p"},"Scrapy")," que nos permiten extraer informaci\xf3n de p\xe1ginas\nweb de una forma m\xe1s eficiente."),(0,o.kt)("p",null,"Cuando hagamos scraping de p\xe1ginas web, debes de tener en cuenta que\ntienes que respetar las pol\xedticas de privacidad de la p\xe1gina web, para\nello debes de leer los t\xe9rminos y condiciones de la p\xe1gina web, asi como\nel acceso a los robots de b\xfasqueda, del archivo ",(0,o.kt)("inlineCode",{parentName:"p"},"robots.txt")," de la\np\xe1gina web."))}u.isMDXComponent=!0}}]);