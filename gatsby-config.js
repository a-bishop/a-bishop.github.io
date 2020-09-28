require(`dotenv`).config({
  path: `.env`,
})

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE

module.exports = {
  siteMetadata: {
    siteTitle: `Andrew Bishop`,
    siteTitleAlt: `Andrew Bishop – Software Developer`,
    siteHeadline: `Andrew Bishop – Software Developer`,
    author: `@andrew_n_bishop`,
    siteDescription: `Portfolio site for software developer Andrew Bishop`,
    siteLanguage: `en`,
    siteImage: `/favicon.ico`,
    siteUrl: `https://andrewnbishop.com`,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      // See the theme's README for all available options
      options: {
        showThemeAuthor: false,
        navigation: [
          {
            title: `Blog`,
            slug: `/blog`,
          },
          {
            title: `Projects`,
            slug: `/projects`,
          },
          {
            title: `About`,
            slug: `/about`,
          },
        ],
        externalLinks: [
          {
            name: `GitHub`,
            url: `https://www.github.com/a-bishop`,
          },
          {
            name: `LinkedIn`,
            url: `https://www.linkedin.com/in/andrew-n-bishop/`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-127544487-1',
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Andrew Bishop, Software Developer`,
        short_name: `andrew-bishop-software-dev`,
        description: `Blog and portfolio for software developer Andrew Bishop`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#6B46C1`,
        display: `standalone`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
    shouldAnalyseBundle && {
      resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
      options: {
        analyzerMode: `static`,
        reportFilename: `_bundle.html`,
        openAnalyzer: false,
      },
    },
  ].filter(Boolean),
};
