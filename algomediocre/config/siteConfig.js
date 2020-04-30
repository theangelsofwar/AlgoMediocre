const config = {
  author: 'Angie Chang', // Site owner
  siteTitle: 'Algomediocre: For the E-Leet', // Site title.
  siteTitleShort: 'AlgoMediocre', // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: 'AlgoMediocre', // Alternative site title for SEO.
  siteLanguage: 'en', // Site language.
  siteDescription: 'A decentralized Algorithms, System Design Blog for the E-Leet', // Website description used for RSS feeds/meta description tag.
  siteLogo: 'static/images/angel-lines.jpg', // Logo used for manifest.
  siteUrl: 'http://code-caine.io', // Domain of your website without pathPrefix.
  pathPrefix: '/', // Prefixes all links. For cases when deployed to example.github.io/gatsby-material-starter/.
  siteRss: '/rss.xml', // Path to the RSS file.
  siteFBAppID: '', // FB Application ID for using app insights
  siteGATrackingID: '', // Tracking code ID for google analytics.
  disqusShortname: 'AlgoMediocre', // Disqus shortname.
  twitterUserName: 'angiechangpagne', // twitter creator for SEO
  datePublished: '2020-01-01', // for SEO
  copyrightYear: '2020', // for SEO
  postsPerPage: 6, // posts per page used in gatsby-node.js
  // Links to social profiles you want to display in the footer.
  rrssb: [
    {
      label: 'github',
      url: 'https://github.com/angiechangpagne',
      iconClassName: 'fab fa-github',
    },
    {
      label: 'mail',
      url: 'mailto:angiechangpagne@gmail.com',
      iconClassName: 'fa fa-envelope',
    },
    {
      label: 'facebbok',
      url: 'https://www.facebook.com/angiechangpagne',
      iconClassName: 'fab fa-facebook',
    },
    {
      label: 'instagram',
      url: 'https://www.instagram.com/angiechangpagne',
      iconClassName: 'fab fa-instagram',
    },
  ],
  // Links to pages you want to display in the navigation bar.
  navbarLinks: [
    {
      label: 'AireFeed',
      url: '/savage',
      iconClassName: 'fa fa-book-open',
    },
    {
      label: 'Categories',
      url: '/categories',
      iconClassName: 'fa fa-list-alt',
    },
    {
      label: 'About',
      url: '/about',
      iconClassName: 'fa fa-address-card',
    },
  ],
};
config.copyright = `Copyright © ${config.copyrightYear}. ${config.author}`;

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === '/') {
  config.pathPrefix = '';
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, '')}`;
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === '/') config.siteUrl = config.siteUrl.slice(0, -1);

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== '/') config.siteRss = `/${config.siteRss}`;

module.exports = config;
