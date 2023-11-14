/**
 * @type {import('gatsby').GatsbyConfig}
 */
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `EUGEM`,
    description: `EUGEM - European Ultimate Gender Equity Manual`,
    lang: `en`,
    mainSite: process.env.mainsite,
    facebook: process.env.facebook,
    twitter: process.env.twitter,
    instagram: process.env.instagram,
    ultical: process.env.ultical,
    author: `@gabrieles`,
    contactEmail: process.env.contactEmail,
    contactUrl1: process.env.contactUrl1,
    contactUrl2: process.env.contactUrl2,
    homeId: process.env.confluenceHomepageId,
    siteUrl: `http://eugem.ultimatefederation.eu`
  },
  plugins: [
    "gatsby-plugin-image", 
    "gatsby-plugin-sitemap", 
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        "icon": "src/images/euf-icon.png"
      }
    }, 
    "gatsby-plugin-sharp", 
    "gatsby-transformer-sharp", 
    {
      resolve: 'gatsby-source-filesystem',
        options: {
          "name": "images",
          "path": "./src/images/"
        },
      __key: "images"
    },
    {
      resolve: "gatsby-confluence-euf",
      options: {
        limit: 50,
        hostname: process.env.confluenceHost,
        auth: process.env.confluenceAuth,
        cql: process.env.confluenceCQL   
      }
    },
    {
      resolve: `gatsby-plugin-remote-images`,
      options: {
        nodeType: 'ConfluencePage',
        name: 'localImages',
        imagePath: 'images',
        type: 'array',
        auth: { htaccess_user: process.env.confluenceHtaccess_user, htaccess_pass: process.env.confluenceHtaccess_pass }
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /svg/
        }
      }
    }
]
};