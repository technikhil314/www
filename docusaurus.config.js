const myopenSourceWork = [{
  to: "autobadger",
  label: "Auto Badger",
}, {
  to: "daterangepicker",
  label: "Angular Date Range Picker",
}, {
  to: "carousel",
  label: "Carousel Component",
}]

module.exports = {
  title: "technikhil314",
  tagline: "A self taught web developer from india. I am mathematician, drummer, failed singer who likes to work on open source projects and believe in free education. I am also a proud lefty.",
  url: 'https://technikhil314.netlify.app',
  baseUrl: '/',
  favicon: 'img/logo.png',
  organizationName: 'technikhil314', // Usually your GitHub org/user name.
  projectName: 'Portfolio for technikhil314', // Usually your repo name.
  onBrokenLinks: 'warn',
  onDuplicateRoutes: 'error',
  themeConfig: {
    googleAnalytics: {
      trackingID: 'UA-171436787-1',
    },
    gtag: {
      trackingID: 'UA-171436787-1',
    },
    colorMode: {
      defaultMode: 'dark'
    },
    sidebarCollapsible: true,
    hideableSidebar: true,
    navbar: {
      hideOnScroll: true,
      title: 'TechNikhil',
      logo: {
        alt: 'TechNikhil314',
        src: 'img/logo.png',
      },
      items: [
        {
          label: 'My Work',
          position: 'left',
          items: myopenSourceWork
        },
        { to: 'blog', label: 'Blog', position: 'left' },
        {
          href: 'https://www.buymeacoffee.com/technikhil314',
          label: 'Buy me a coffee',
          position: 'right'
        },
        { href: '/Nikhil%20Mehta.pdf', label: 'My resume', position: 'right' },
        { to: 'contactme', label: 'Contact me', position: 'right' }
      ],
    },
    footer: {
      logo: {
        alt: 'technikhil314 logo',
        src: 'img/brand.png',
        href: '/',
      },
      links: [
        {
          title: 'My Work',
          items: myopenSourceWork
        },
        {
          title: 'Follow me',
          items: [
            {
              label: 'Github',
              href: 'https://github.com/technikhil314',
            },
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/users/2503826/nikhil-mehta',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/technikhil314',
            },
            {
              label: 'Linkedin',
              href: 'https://www.linkedin.com/in/technikhil314/',
            }
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'My Music Work',
              href: 'https://www.youtube.com/user/nikhil7868',
            },
            {
              label: 'My Portfolio',
              to: 'portfolio',
            },
            {
              label: 'Download my resume',
              href: '/Nikhil%20Mehta.pdf',
            }
          ],
        },
        {
          title: 'Contact me',
          items: [
            {
              label: 'Email',
              href: 'mailto:nikhil.001mehta@gmail.com',
            },
          ],
        },
      ],
      copyright: `Copyright © 2020${new Date().getFullYear() === 2020 ? '' : `-${new Date().getFullYear()}`} Nikhil Mehta. Built with  <big><b>&#9825;</b></big>  using Docusaurus.`
    },
  },
  plugins: [
    'docusaurus2-dotenv',
    [
      '@docusaurus/plugin-pwa',
      {
        debug: true,
        offlineModeActivationStrategies: ['appInstalled', 'queryString'],
        pwaHead: [
          {
            tagName: 'link',
            rel: 'icon',
            href: '/img/192x192.png',
          },
          {
            tagName: 'link',
            rel: 'manifest',
            href: '/manifest.json', // your PWA manifest
          },
          {
            tagName: 'meta',
            name: 'theme-color',
            content: 'rgb(37, 194, 160)',
          },
        ],
      },
    ]
  ],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: 'all',
            copyright: `Copyright © 2020${new Date().getFullYear() === 2020 ? '' : `-${new Date().getFullYear()}`} Nikhil Mehta.`
          }
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
