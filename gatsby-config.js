const dotenv = require("dotenv");

if(process.env.NODE_ENV !=="production"){
  dotenv.config()
}

module.exports = {
  plugins: [
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/layouts/index.js`),
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `kw73zaobt30l`,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    }
  ],
}
