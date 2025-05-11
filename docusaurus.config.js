import tailwindPlugin from "./plugins/tailwind.cjs";

const myopenSourceWorkItems = [
  {
    to: "autobadger",
    label: "Auto Badger",
  },
  {
    to: "daterangepicker",
    label: "Angular Date Range Picker",
  },
  {
    to: "carousel",
    label: "Carousel Component",
  },
  {
    href: "https://openrtc.vercel.app/",
    label: "OpenRTC",
  },
  {
    href: "https://verifyemail.vercel.app/",
    label: "Verify email - Open API",
  },
  {
    href: "https://diffviewer.vercel.app/",
    label: "Diff viewer",
  },
];

const sponsorMeItems = [
  {
    href: "https://www.buymeacoffee.com/technikhil314",
    label: "Buy me a coffee",
  },
  {
    href: "https://paypal.me/technikhil314",
    label: "PayPal",
  },
  {
    href: "https://github.com/sponsors/technikhil314",
    label: "Github",
  },
];

const followMeItems = [
  {
    label: "Github",
    href: "https://github.com/technikhil314",
  },
  {
    label: "Stack Overflow",
    href: "https://stackoverflow.com/users/2503826/nikhil-mehta",
  },
  {
    label: "Twitter",
    href: "https://twitter.com/technikhil314",
  },
  {
    label: "Linkedin",
    href: "https://www.linkedin.com/in/technikhil314/",
  },
  {
    label: "Youtube",
    href: "https://www.youtube.com/channel/UCgwTt4Vw5Azo8yCr2HUvbYQ",
  },
];

module.exports = {
  title: "Nikhil Mehta",
  tagline: "Nikhil Mehta's Personal website / portfolio / blog.",
  url: "https://technikhil314.netlify.app",
  baseUrl: "/",
  trailingSlash: false,
  favicon: "/favicon.ico",
  organizationName: "technikhil314", // Usually your GitHub org/user name.
  projectName: "Portfolio for technikhil314", // Usually your repo name.
  onBrokenLinks: "warn",
  onDuplicateRoutes: "throw",
  themeConfig: {
    colorMode: {
      defaultMode: "dark",
    },
    announcementBar: {
      id: "currently_working", // Any value that will identify this message.
      content:
        'Currently I am building a no server & privacy focused <a href="https://diffviewer.vercel.app/">text diff viewer</a>. Please check it out <a href="https://github.com/technikhil314/offline-diff-viewer/stargazers">star</a> & share it. You can find the motivation behind this tool <a href="https://github.com/technikhil314/offline-diff-viewer#motivation">here<a/>',
      backgroundColor: "#fafbfc", // Defaults to `#fff`.
      textColor: "#091E42", // Defaults to `#000`.
      isCloseable: true, // Defaults to `true`.
    },
    navbar: {
      hideOnScroll: true,
      title: "TechNikhil",
      logo: {
        alt: "TechNikhil314",
        src: "/logo.png",
      },
      items: [
        {
          label: "My Work",
          position: "left",
          items: myopenSourceWorkItems,
        },
        { to: "blog", label: "Blog", position: "left" },
        {
          to: "about",
          label: "About me",
          position: "left",
        },
        { to: "contactme", label: "Contact me", position: "left" },
        { to: "poems", label: "Poems", position: "right" },
        {
          label: "Sponsor me",
          position: "right",
          items: sponsorMeItems,
        },
        {
          label: "Follow me",
          position: "right",
          items: followMeItems,
        },
        {
          href: `https://technikhil314.netlify.app/Nikhil_Mehta.pdf`,
          label: "My resume",
          position: "right",
        },
      ],
    },
    footer: {
      logo: {
        alt: "technikhil314 logo",
        src: "/brand-430x495.png",
        href: "/",
      },
      links: [
        {
          title: "My Work",
          items: myopenSourceWorkItems,
        },
        {
          title: "Navigation",
          items: [
            {
              label: "Blog",
              to: "blog",
            },
            {
              label: "About me",
              to: "/about",
            },
            {
              label: "Contact me",
              href: "mailto:nikhil.001mehta@gmail.com",
            },
          ],
        },
        {
          title: "Follow me",
          items: followMeItems,
        },
        {
          title: "Sponsor me",
          items: sponsorMeItems,
        },
      ],
      copyright: `Copyright © 2020${
        new Date().getFullYear() === 2020 ? "" : `-${new Date().getFullYear()}`
      } Nikhil Mehta.`,
    },
  },
  plugins: [
    tailwindPlugin,
    "docusaurus2-dotenv",
    [
      "@docusaurus/plugin-content-blog",
      {
        id: "poems",
        path: "poems",
        routeBasePath: "poems",
        editUrl: "https://github.com/technikhil314/www/edit/master/",
        postsPerPage: 1,
      },
    ],
    async function docusaurus() {
      return {
        name: "docusaurus-tailwindcss",
        configurePostCss(postcssOptions) {
          // Appends TailwindCSS and AutoPrefixer.
          postcssOptions.plugins.push(require("tailwindcss"));
          postcssOptions.plugins.push(require("autoprefixer"));
          return postcssOptions;
        },
      };
    },
    [
      "@docusaurus/plugin-pwa",
      {
        debug: process.env.DEBUG === "true",
        offlineModeActivationStrategies: ["appInstalled", "queryString"],
        pwaHead: [
          {
            tagName: "link",
            rel: "manifest",
            href: "/manifest.json",
          },
          {
            tagName: "meta",
            name: "theme-color",
            content: "#58C3A0",
          },
          {
            tagName: "meta",
            name: "apple-mobile-web-app-capable",
            content: "yes",
          },
          {
            tagName: "meta",
            name: "apple-mobile-web-app-status-bar-style",
            content: "#58C3A0",
          },
          {
            tagName: "link",
            rel: "apple-touch-icon",
            href: "/180x180.png",
          },
          {
            tagName: "link",
            rel: "mask-icon",
            href: "/180x180.png",
          },
        ],
      },
    ],
  ],
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        // debug: true,
        gtag: {
          trackingID: "GTM-5HBRZXW",
          anonymizeIP: true,
        },
        googleAnalytics: {
          trackingID: "UA-125781207-2",
          anonymizeIP: true,
        },
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/technikhil314/www/edit/master/",
          sidebarCollapsible: true,
          sidebarCollapsed: false,
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: "all",
            copyright: `Copyright © 2020${
              new Date().getFullYear() === 2020
                ? ""
                : `-${new Date().getFullYear()}`
            } Nikhil Mehta.`,
          },
          editUrl: "https://github.com/technikhil314/www/edit/master/",
          blogPostComponent: require.resolve("./src/components/blogPost.jsx"),
        },
        theme: {
          customCss: [
            require.resolve("./node_modules/gitalk/dist/gitalk.css"),
            require.resolve("./src/css/custom.css"),
          ],
        },
        sitemap: {
          changefreq: "weekly",
          priority: 0.5,
        },
      },
    ],
  ],
};
