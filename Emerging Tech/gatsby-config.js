const path = require(`path`)

module.exports = {
    pathPrefix: "/ICS4U0",
    plugins: [
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: path.join(__dirname, `src`, `images`),
            },
        },
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-chakra-ui`,
    ],
}
