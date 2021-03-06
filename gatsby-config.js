module.exports = {
  siteMetadata: {
    title: "The Korg Shop",
    description: "All about Korg synths!!!",
    author: "Joey De Greef",
    siteUrl: "http://the-korg-shop.local/",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-transformer-sharp",
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