// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Everything I know",
  tagline: "Everything I know",
  url: "https://wiki.dmytrolitvinov.com",
  baseUrl: "/",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "dmytrolitvinov", // Usually your GitHub org/user name.
  projectName: "knowledge", // Usually your repo name.

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          routeBasePath: "/",
          // Please change this to your repo.
          editUrl:
            "https://github.com/DmytroLitvinov/knowledge/tree/main/",
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        respectPrefersColorScheme: true,
        disableSwitch: true,
      },
      navbar: {
        title: "Everything I Know",
        logo: {
          alt: "My Site Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            href: "https://www.instagram.com/dmytro.litvinov/",
            position: "right",
            label: "📷",
          },
          {
            href: "https://twitter.com/DmytroLitvinov",
            position: "right",
            label: "🐦",
          },
          {
            href: "https://github.com/DmytroLitvinov",
            position: "right",
            label: "🐙",
          },
          {
            href: "https://DmytroLitvinov.com",
            position: "right",
            label: "🏡",
          },
          {
            href: "https://github.com/DmytroLitvinov/knowledge",
            position: "right",
            className: "header-github-link",
            "aria-label": "GitHub repository",
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      algolia: {
        // Application ID provided by Algolia
        appId: "LH81A7W5TI",
        // Public API key
        apiKey: "172054f817aafe55bf75d05501a183b8",
        indexName: "dmytrolitvinov",
      },
    }),
};

module.exports = config;
