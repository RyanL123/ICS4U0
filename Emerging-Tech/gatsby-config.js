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
        {
            resolve: `gatsby-plugin-chakra-ui`,
            options: {
                isResettingCSS: true,
            },
        },
        {
            resolve: `gatsby-plugin-web-font-loader`,
            options: {
                custom: {
                    families: [`Metropolis`],
                    urls: [`/fonts/fonts.css`],
                },
            },
        },
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-preload-fonts`,
    ],
}
