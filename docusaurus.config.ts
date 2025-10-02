import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import type * as Redocusaurus from 'redocusaurus';
import 'dotenv/config';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'ShigureDD\'s Blog',
  tagline: 'Sharing knowledge and experiences in software development',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: {
      removeLegacyPostBuildHeadAttribute: false,
      useCssCascadeLayers: false,
    },
    experimental_faster: {
      rspackBundler: false,
      rspackPersistentCache: false,
    },

  },

  // Set the production url of your site here
  url: 'https://ShigureDD.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  organizationName: 'ShigureDD', // Usually your GitHub org/user name.
  projectName: 'shiguredd.github.io', // Usually your repo name.
  deploymentBranch: 'gh-pages', // Branch that GitHub Pages will deploy from
  //trailingSlash: true,

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  //plugins: ['@docusaurus/theme-live-codeblock'],
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: 'sidebars.ts',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/ShigureDD/shiguredd.github.io/tree/master/',
        },
        blog: {
          blogTitle: 'ShigureDD\'s Blog',
          blogDescription: 'A blog about software development and technology',
          postsPerPage: 5,
          showReadingTime: true,
          // Enable tags functionality (use YAML file)
          tags: 'tags.yml',
          // Custom components
          blogListComponent: '@theme/BlogListPage',
          blogPostComponent: '@theme/BlogPostPage',
          blogTagsListComponent: '@theme/BlogTagsListPage',
          blogTagsPostsComponent: '@theme/BlogTagsPostsPage',
          blogArchiveComponent: '@theme/BlogArchivePage',
          readingTime: ({content, defaultReadingTime, locale}) =>
            defaultReadingTime({content, options: {wordsPerMinute: 300}, locale}),
          feedOptions: {
            title: "ShigureDD's Blog",
            description: 'A blog about software development and technology',
            copyright: `Copyright © ${new Date().getFullYear()} ShigureDD`,
            createFeedItems: async (params) => {
              const {blogPosts, defaultCreateFeedItems, ...rest} = params;
              return defaultCreateFeedItems({
                blogPosts: blogPosts.filter((item, index) => index < 20),
                ...rest,
              });
            },
          },
          editUrl: 'https://github.com/ShigureDD/shiguredd.github.io/tree/master/',
          authorsMapPath: 'blog/authors.yml',
          onInlineTags: 'warn',
          onInlineAuthors: 'ignore',  // Suppress warning about inline authors
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
    [
      'redocusaurus',
      {
        openapi: {
          // Folder to scan for *.openapi.yaml files
          path: 'openapi',
          routeBasePath: '/api',
        },
        specs: [
         // Optionally provide individual files/urls to load
          // {
          //   // Pass it a path to a local OpenAPI YAML file
          //   spec: 'openapi/using-single-yaml.openapi.yaml',
          //   id: 'from-manual-file',
          // },
          // You can also pass it an OpenAPI spec URL
          {
            spec: 'https://redocly.github.io/redoc/openapi.yaml',
            id: 'from-remote-file',
            route: '/api/from-remote-file/',
          },
        ],
        // Theme Options for modifying how redoc renders them
        theme: {
          // Change with your site colors
          primaryColor: '#1890ff',
        },
      },
    ] satisfies Redocusaurus.PresetEntry,
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: true,
      },
    },
    navbar: {
      title: 'ShigureDD',
      logo: {
        alt: 'ShigureDD Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          id: 'docs',
          docId: 'intro',
          position: 'left',
          label: 'Learn',
        },
        { to: '/blog', label: 'Blog', position: 'left'},
        {
          to: '/about',
          label: 'About',
          position: 'left',
        },
        {
          label: 'Redoc',
          position: 'left',
          items: [
            {
              label: 'Using Single YAML',
              to: '/api/using-single-yaml/',
            },
            {
              label: 'Using Remote URL',
              to: '/api/from-remote-file/',
            },
          ],
        },
        {
          href: 'https://github.com/ShigureDD',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    liveCodeBlock: {
      /**
       * The position of the live playground, above or under the editor
       * Possible values: "top" | "bottom"
       */
      playgroundPosition: 'bottom',
    },
    footer: {
      style: 'dark',
      // links: [
      //   {
      //     title: 'Explore',
      //     items: [
      //       {
      //         label: 'Blog',
      //         to: '/blog',
      //       },
      //       {
      //         label: 'About',
      //         to: '/about',
      //       }
      //     ],
      //   },
      //   {
      //     title: 'Connect',
      //     items: [
      //       {
      //         label: 'GitHub',
      //         href: 'https://github.com/ShigureDD',
      //       },
      //       {
      //         label: 'LinkedIn',
      //         href: 'https://linkedin.com/in/tom-l-8a8b641a5',
      //       }
      //     ],
      //   },
      //   // {
      //   //   title: 'More',
      //   //   items: [
      //   //     {
      //   //       label: 'RSS Feed',
      //   //       to: '/blog/rss.xml',
      //   //     },
      //   //     {
      //   //       label: 'Sitemap',
      //   //       to: '/sitemap.xml',
      //   //     },
      //   //   ],
      //   // },
      // ],
      copyright: `Copyright © ${new Date().getFullYear()} ShigureDD. Built with Docusaurus.`,
    },
    prism: {
      additionalLanguages: ["markup","jsx","tsx","swift","kotlin","objectivec","js-extras","reason","rust","graphql","yaml","go","cpp","markdown","python","json"],
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
    algolia: {
      apiKey: process.env.API_KEY,
      indexName: "docusaurus-github-io",
      appId: process.env.APPLICATION_ID,
      contextualSearch: true,
    }
    
  } satisfies Preset.ThemeConfig,
  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid', '@docusaurus/theme-live-codeblock'],
  clientModules: [require.resolve('./src/scripts/mermaid_icons.js')],
  plugins: [
    "./src/plugins/tailwind-config.js",
    "./src/plugins/alias-config.js", 
    [
    '@docusaurus/plugin-google-gtag',
      {
      trackingID: 'G-JE0YTYV6Y9', // Replace with your Google Analytics Measurement ID
      anonymizeIP: true,
      },
    ],
  ],
};

export default config;
