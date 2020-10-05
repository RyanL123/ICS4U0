const path = require(`path`)

module.exports = {
    pathPrefix: "/ICS4U0/Emerging-Tech",
    plugins: [
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: path.join(__dirname, `src`, `images`),
            },
        },
        {
            resolve: `gatsby-plugin-chakra-ui`,
            options: {
                isResettingCSS: true,
            },
        },
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
    ],
}
