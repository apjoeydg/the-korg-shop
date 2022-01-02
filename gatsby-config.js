module.exports = {
  siteMetadata: {
    title: "The Korg Shop",
    description: "All about Korg synths!!!",
    author: "Joey De Greef",
    siteUrl: "https://gatsbystarterdefaultsource.gatsbyjs.io/",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-wordpress",
      options: {
        schema:{
            timeout:1000000
        },
        /*
         * De volledige URL van je Headless WordPress site's GraphQL API.
         * Voorbeeld : "https://www.example-site.com/graphql"
         */
        url: "http://the-korg-shop.local/graphql",
      },
    },
  ],
};