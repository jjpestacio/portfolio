require("dotenv").config({
  path: `.env`,
})

/* TODO: configure web app manifest
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
*/

// TODO: optimize site metadata for SEO
module.exports = {
  siteMetadata: {
    title: `JJ Estacio's Portfolio`,
    description: `My personal website and portfolio.`,
    author: `Johnathan Estacio`,
    // siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-plugin-theme-ui'`,
    {
      resolve: "@directus/gatsby-source-directus",
      options: {
        url: process.env.DIRECTUS_URL,
        auth: {
          token: process.env.DIRECTUS_API_KEY,
        },
      },
    },
  ],
}
