const myopenSourceWork = [{
  to: "autobadger",
  label: "Auto Badger",
}, {
  to: "daterangepicker",
  label: "Angular Date Range Picker",
}, {
  to: "carousel",
  label: "Carousel Component",
}, {
  href: "https://openrtc.vercel.app/",
  label: "OpenRTC",
}];

module.exports = {
  title: "Nikhil Mehta",
  tagline: "Nikhil Mehta's Personal website / portfolio / blog.",
  url: 'https://technikhil314.netlify.app',
  baseUrl: '/',
  favicon: '/favicon.ico',
  organizationName: 'technikhil314', // Usually your GitHub org/user name.
  projectName: 'Portfolio for technikhil314', // Usually your repo name.
  onBrokenLinks: 'warn',
  onDuplicateRoutes: 'error',
  themeConfig: {
    googleAnalytics: {
      trackingID: 'UA-125781207-2',
    },
    gtag: {
      trackingID: 'GTM-5HBRZXW',
    },
    colorMode: {
      defaultMode: 'dark'
    },
    sidebarCollapsible: true,
    hideableSidebar: true,
    announcementBar: {
      id: 'support_us', // Any value that will identify this message.
      content:
        '<p class="padding-left--sm margin--none text--center">If you like my work. Please star the repo. Also consider <a target="_blank" rel="noopener noreferrer" href="https://www.paypal.com/paypalme/technikhil314">sponsoring</a></p>',
      backgroundColor: '#fafbfc', // Defaults to `#fff`.
      textColor: '#091E42', // Defaults to `#000`.
      isCloseable: true, // Defaults to `true`.
    },
    navbar: {
      hideOnScroll: true,
      title: 'TechNikhil',
      logo: {
        alt: 'TechNikhil314',
        src: '/logo.png',
      },
      items: [
        {
          label: 'My Work',
          position: 'left',
          items: myopenSourceWork
        },
        { to: 'blog', label: 'Blog', position: 'left' },
        {
          to: 'about', label: 'About me', position: 'right'
        },
        { to: 'contactme', label: 'Contact me', position: 'right' },
        {
          href: 'https://www.buymeacoffee.com/technikhil314',
          label: 'Buy me a coffee',
          position: 'right'
        },
        { href: `https://technikhil314.netlify.app/Nikhil_Mehta.pdf`, label: 'My resume', position: 'right' },
      ],
    },
    footer: {
      logo: {
        alt: 'technikhil314 logo',
        src: '/brand-430x495.png',
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
              label: 'My Poems',
              href: 'http://kavi-nikhil.blogspot.com',
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
      copyright: `Copyright © 2020${new Date().getFullYear() === 2020 ? '' : `-${new Date().getFullYear()}`} Nikhil Mehta.`
    },
  },
  plugins: [
    'docusaurus2-dotenv',
    [
      '@docusaurus/plugin-pwa',
      {
        debug: process.env.DEBUG === 'true',
        offlineModeActivationStrategies: ['appInstalled', 'queryString'],
        pwaHead: [
          {
            tagName: 'link',
            rel: 'manifest',
            href: '/manifest.json'
          },
          {
            tagName: 'meta',
            name: 'theme-color',
            content: '#58C3A0'
          },
          {
            tagName: 'meta',
            name: 'apple-mobile-web-app-capable',
            content: 'yes'
          },
          {
            tagName: 'meta',
            name: 'apple-mobile-web-app-status-bar-style',
            content: '#58C3A0'
          },
          {
            tagName: 'link',
            rel: 'apple-touch-icon',
            href: '/180x180.png'
          },
          {
            tagName: 'link',
            rel: 'mask-icon',
            href: '/180x180.png'
          }
        ],
      },
    ],
    [
      require.resolve('docusaurus-gtm-plugin'),
      {
        id: "GTM-5HBRZXW"
      }
    ]
  ],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/technikhil314/www/edit/master/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: 'all',
            copyright: `Copyright © 2020${new Date().getFullYear() === 2020 ? '' : `-${new Date().getFullYear()}`} Nikhil Mehta.`
          },
          editUrl: 'https://github.com/technikhil314/www/edit/master/',
          blogPostComponent: require.resolve("./src/components/blogPost.jsx"),
        },
        theme: {
          customCss: [
            require.resolve('./node_modules/gitalk/dist/gitalk.css'),
            require.resolve('./src/css/custom.css'),
          ]
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          trailingSlash: false,
        }
      }
    ]
  ]
};
