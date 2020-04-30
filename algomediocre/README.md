<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<p align="center">
  <a href="https://code-caines.io">
    <img alt="YveVestalTitan" src="./static/images/angel-lines.png" width="100" />
  </a>
</p>

<div align="center">
  <a href="">
    <img src="" alt="license" />
  </a>
  <a href="">
    <img src="" alt="netlify" />
  </a>
  <a href="">
    <img src="7" alt="algomediocre" />
  </a>
</div>

<h1 align="center">
</h1>


 » [AlgoMediocre](https://code-caine.io)

<a href=""><img src="" alt="Deploy to Netlify"></a>

## ⛩ Features

- React Hooks
- Theme Toggle(light/dark)

|        Light        |        Dark        |
| :-----------------: | :----------------: |
| ![](docs/light.png) | ![](docs/dark.png) |

- Pagination
- SEO(Sitemap, Schema.org, OpenGraph tags, Twitter tags)
- Web application manifest and offline support
- Google analytics
- Tags
- Categories
- Posts in Markdown
- Disqus comments
- RSS feeds
- Development tools
  - ESLint(Airbnb) for linting
  - Prettier code formatting
  - gh-pages for deploying to GitHub pages
- Netlify CMS
  - gatsby-plugin-netlify-cms
  - custom Previews

![](docs/editor-preview.png)

## 🚀 Getting Start

1. **Create a Gatsby site.**

Use the [Gatsby CLI](https://www.gatsbyjs.org/docs/gatsby-cli/) to create a new site.

```sh
gatsby new YOUR-PROJECT-NAME url-template
```

1. **Start developing.**

Navigate into your new site’s directory and start it up.

```sh
cd YOUR-PROJECT-NAME
npm run develop
```

1.  **Open the source code and start editing!**

Your site is now running at `http://localhost:8000`!

_Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using thitool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._

Or

```sh

rm -rf .git
npm install
npm run develop
```

## ⚙️ Configuration

Edit the confing in config/siteConfig.js:

```js
const config = {
  author: "angiechangpagne", // Site owner
  siteTitle: "AlgoMediocre", // Site title.
  siteTitleShort: "AlgoMediocre", // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: "Becoming the E-Leet: AlgoEtro", // Alternative site title for SEO.
  siteLanguage: "en", // Site language.
  siteDescription:
    "AlgoMediocre Blog - The Journey to becoming th E-Leet", // Website description used for RSS feeds/meta description tag.
  siteLogo: "static/images/angel-lines.jpg", // Logo used for manifest.
  siteUrl: "https://code-caine.io", // Domain of your website without pathPrefix.
  pathPrefix: "/", // Prefixes all links. For cases when deployed to example.github.io/gatsby-material-starter/.
  siteRss: "/rss.xml", // Path to the RSS file.
  siteFBAppID: "yourmom", // FB Application ID for using app insights
  siteGATrackingID: "yourmom", // Tracking code ID for google analytics.
  disqusShortname: "algoMediocre-PWA", // Disqus shortname.
  twitterUserName: "", // twitter creator for SEO
  datePublished: "2020-04-08", // for SEO
  copyrightYear: "2020", // for SEO
  postsPerPage: 4, // posts per page used in gatsby-node.js
  // Links to social profiles you want to display in the footer.
  rrssb: [
    {
      label: "github",
      url: "https://github.com/angiechangpagne",
      iconClassName: "fab fa-github"
    },
    {
      label: "mail",
      url: "mailto:yvevestal@gmail.com",
      iconClassName: "fa fa-envelope"
    },
    {
      label: "facebbok",
      url: "https://www.facebook.com/angiechangpagne",
      iconClassName: "fab fa-facebook"
    },
    {
      label: "instagram",
      url: "https://www.instagram.com/angiechangpagne",
      iconClassName: "fab fa-instagram"
    }
  ],
  // Links to pages you want to display in the navigation bar.
  navbarLinks: [
    {
      label: "AireFeed",
      url: "/savage",
      iconClassName: "fa fa-book-open"
    },
    {
      label: "Categories",
      url: "/categories",
      iconClassName: "fa fa-list-alt"
    },
    {
      label: "About",
      url: "/about",
      iconClassName: "fa fa-address-card"
    }
  ]
};
config.copyright = `Copyright © ${config.copyrightYear}. ${config.author}`;
```
