import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Tom Lam\'s Blog',
  tagline: 'Sharing knowledge and experiences in software development',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
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
  trailingSlash: false,

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
    path: 'i18n',
    localeConfigs: {
      en: {
        label: 'English',
        direction: 'ltr',
        htmlLang: 'en-US',
        calendar: 'gregory',
        path: 'en',
      },
    },
  },

  presets: [
    [
      'classic',
      {
        docs: {
          path: 'docs',
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          routeBasePath: 'blog',
          blogTitle: 'Tom\'s Blog',
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
            title: "Tom Lam's Blog",
            description: 'A blog about software development and technology',
            copyright: `Copyright © ${new Date().getFullYear()} Tom Lam`,
            createFeedItems: async (params) => {
              const {blogPosts, defaultCreateFeedItems, ...rest} = params;
              return defaultCreateFeedItems({
                blogPosts: blogPosts.filter((item, index) => index < 20),
                ...rest,
              });
            },
          },
          editUrl: 'https://github.com/ShigureDD/blog/tree/main/',
          authorsMapPath: 'blog/authors.yml',
          truncateMarker: /<!--truncate-->/,
          onInlineTags: 'warn',
          onInlineAuthors: 'ignore',  // Suppress warning about inline authors
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Tom Lam',
      logo: {
        alt: 'Tom Lam Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Tutorial',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          to: '/about',
          position: 'left',
          label: 'About',
        },
        {
          to: '/projects',
          position: 'left',
          label: 'Projects',
        },
        {
          href: 'https://github.com/ShigureDD',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Explore',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'About',
              to: '/about',
            },
            {
              label: 'Projects',
              to: '/projects',
            },
          ],
        },
        {
          title: 'Connect',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/ShigureDD',
            },
            {
              label: 'LinkedIn',
              href: 'https://linkedin.com/in/tom-l-8a8b641a5',
            }
          ],
        },
        // {
        //   title: 'More',
        //   items: [
        //     {
        //       label: 'RSS Feed',
        //       to: '/blog/rss.xml',
        //     },
        //     {
        //       label: 'Sitemap',
        //       to: '/sitemap.xml',
        //     },
        //   ],
        // },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Tom Lam. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
