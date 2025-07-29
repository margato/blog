// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'Proof of Concepts, Articles and more...',
    tagline: '',
    favicon: 'img/logo.svg',
    headTags: [
        {
            tagName: 'link',
            attributes: {
                rel: 'mask-icon',
                href: '/img/logo-safari.png',
                color: '#bbb3ff',
            },
        },
        {
            tagName: 'link',
            attributes: {
                rel: 'apple-touch-icon',
                href: '/img/logo.png',
            },
        },
    ],

    future: {
        v4: true,
    },

    url: 'https://osvaldomargato.com',
    baseUrl: '/',

    organizationName: 'margato',
    projectName: 'blog',

    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',

    plugins: [],

    i18n: {
        defaultLocale: 'en',
        locales: ['pt', 'en'],
        localeConfigs: {
            'pt': {
                label: 'Português',
                htmlLang: "pt-BR"
            },
            en: {
                label: 'English',
                htmlLang: "en-US"
            },
        },
    },

    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: false,
                blog: {
                    showReadingTime: true,
                    feedOptions: {
                        type: ['rss', 'atom'],
                        xslt: true,
                    },
                    onInlineTags: 'warn',
                    onInlineAuthors: 'warn',
                    onUntruncatedBlogPosts: 'warn',
                },
                theme: {
                    customCss: './src/css/custom.css',
                },
                gtag: {
                    trackingID: 'G-5T0TTYC21F',
                    anonymizeIP: true,
                },
            }),

        ],
    ],

    themeConfig:
        ({
            colorMode: {
                disableSwitch: true,
            },
            image: 'img/docusaurus-social-card.jpg',
            navbar: {
                title: "Osvaldo Margato",
                logo: {
                    alt: 'Osvaldo Margato Logo',
                    src: 'img/logo.svg',
                },
                items: [
                    {
                        to: '/blog',
                        label: 'Blog',
                        position: 'left'
                    },
                ],
            },
            footer: {
                style: 'light',
                links: [
                    {
                        title: 'Discover more',
                        items: [
                            {
                                label: 'Linkedin',
                                href: 'https://linkedin.com/in/margato',
                            },
                            {
                                label: 'GitHub',
                                href: 'https://github.com/margato',
                            },
                            {
                                label: 'This website is open source',
                                href: 'https://github.com/margato/blog',
                            },
                        ],
                    },
                ],
                copyright: `This is a space for studies and knowledge sharing. © ${new Date().getFullYear()} Osvaldo Margato.`,
            },
            prism: {
                theme: prismThemes.github,
                darkTheme: prismThemes.dracula,
            },
        }),
};

export default config;
