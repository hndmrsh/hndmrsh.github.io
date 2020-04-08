module.exports = {
  siteMetadata: {
    title: `Sam Hindmarsh`,
    description: `Personal website of Sam Hindmarsh.`,
    author: `@hndmrsh`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Sam Hindmarsh`,
        short_name: `Sam Hindmarsh`,
        start_url: `/`,
        background_color: `#3B0D11`,
        theme_color: `#3B0D11`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
