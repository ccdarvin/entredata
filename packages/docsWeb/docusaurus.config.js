// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const math = require('remark-math');
const katex = require('rehype-katex');


/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Entredata.org',
  tagline: 'Entredata',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.entredata.org/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'ccdarvin', // Usually your GitHub org/user name.
  projectName: 'entredata', // Usually your repo name.
  deploymentBranch: 'gh-pages', // The branch of your docs repo that you are publishing to GitHub pages
  trailingSlash: false,

  onBrokenLinks: 'warn', //'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    localeConfigs: {
      en: {
        label: 'English',
      },
      es: {
        label: 'Español',
      },
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          routeBasePath: '/tutorial',
          remarkPlugins: [math],
          rehypePlugins: [katex],
          sidebarPath: require.resolve('./sidebars.js'),
        },

        blog: {
          showReadingTime: true,
          blogTitle: 'Artículos',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          routeBasePath: '/article',
          remarkPlugins: [math],
          rehypePlugins: [katex],
          include: ['*.md', '*.mdx'],
          blogSidebarCount: 100,
          blogSidebarTitle: 'Artículos recientes',
          feedOptions: {
            type: 'all',
            title: 'Articulos en entredata.org',
            description: 'Articulos sobre programación, machine learning, inteligencia artificial, ciencia de datos, etc.',
            copyright: `Copyright © ${new Date().getFullYear()} entredata.org`,
          }
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: {
          trackingID: 'G-42P22Y3S58',
          anonymizeIP: true,
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          filename: 'sitemap.xml'
        }
      }),
    ],
  ],
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],
  plugins: [
    [
      '@docusaurus/plugin-content-blog',
      {
        id: 'cheat-sheets',
        routeBasePath: 'cheat-sheets',
        path: './cheat-sheets',
        blogTitle: 'Cheat Sheets',
        blogSidebarTitle: 'Cheat Sheets',
        remarkPlugins: [math],
        rehypePlugins: [katex],
        include: ['*.md', '*.mdx'],
        blogSidebarCount: 100,
      }
    ],
    [ 
      require.resolve('docusaurus-lunr-search'), {
        languages: ['es', 'en'] // language codes
      }
   ]
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Entredata.org',
        logo: {
          alt: 'Entredata.org',
          src: 'img/logo.svg',
        },
        items: [
          {to: '/article', label: 'Artículos', position: 'left'},
          {to: '/cheat-sheets', label: 'Cheat Sheets', position: 'left'},
          {to: '/tutorial', label: 'Tutoriales', position: 'left'},
          {
            type: 'localeDropdown',
            position: 'right',
          },
          {
            href: 'https://github.com/facebook/docusaurus',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'comunidad',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'Recursos',
            items: [
              {
                label: 'Tutoriales',
                to: '/tutorial',
              },
              {
                label: 'Artículos',
                to: '/article',
              },
              {
                label: 'Cheat Sheets',
                to: '/cheat-sheets',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} entredata.org`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['r', 'java']
      },
      metadata: [
        {name: 'keywords', content: 'entredata, ciencia de datos, machine learning, inteligencia artificial, programación'},
      ]
    }),
};

module.exports = config;
