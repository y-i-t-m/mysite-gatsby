/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `長谷川 駿のサイト`,
    description: `長谷川 駿のサイト`,
    lang: `ja`,
    siteUrl: `https://hasegawahayato.netlify.app`,
    locale: `ja_JP`,
    fbappid: ``,
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `hayato hasegawa`,
        short_name: `hase`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#333`,
        display: `standalone`,
        icon: `src/images/icon.png`,
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: "sl8u4gxs0och",
        accessToken: "OL8e_oVBioNDbau1N3sRwZS2SZN4BlPeaV41KFm6H3I",
        host: "cdn.contentful.com",
      },
    },
  ],
};
