/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: '기술 면접북',
  tagline: '🙌 개발자 지식 & 유용한 정보',
  url: 'https://hwan02.github.io',
  baseUrl: '/goldev_tech-interview/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'hwan02', // Usually your GitHub org/user name.
  projectName: 'goldev_tech-interview', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: '기술 면접북',
      logo: {
        alt: '기술 면접북 로고',
        src: 'img/logo.svg',
      },
       items: [
        {to: 'blog', label: 'Blog', position: 'right'},
        {
          href: 'https://github.com/hwan02/goldev_tech-interview',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} Goldev_tech-interview, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/hwan02/goldev_tech-interview/edit/master/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
