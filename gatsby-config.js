const d3TimeFormat = require('d3-time-format');
const uuid = require('uuid/v4');

const formatTime = d3TimeFormat.timeFormat("%m/%Y")

module.exports = {
    siteMetadata: {
        title: `Brett Fouss`,
        description: `Personal website for Brett Fouss. Includes bio, contact information, and links to portfolio pieces. Made with Gatsby.`,
        author: `@brettfouss`,
        portfolio: ([
            {
                name: "chinese-vis",
                type: "visualization",
                link: "https://brettfouss.github.io/chinese-vis",
                imagePath: "chinese-vis-portfolio-image.png",
                title: "Visualizing the Chinese Language",
                description: "A narrative visualization piece that examines various properties and relationships within Chinese characters and words. Contains custom parallel set and force-directed graph visualizations implemented using D3",
                tags: ["visualization", "narrative"],
                date: formatTime(new Date())
            },
            {
                name: "net-set-poster-abstract",
                type: "abstract",
                link: "https://vizsec.org/files/2018/Fouss_Poster.pdf",
                imagePath: "net-set-poster-abstract-portfolio-image.png",
                title: "NetSet Poster Abstract",
                description: "An abstract for a poster presented at the IEEE Symposium on Visualization for Cyber Security at the 2018 IEEE VIS conference in Berlin, Germany, discussing a network metadata exploration tool that uses novel set visualization techniques.",
                tags: ["academic", "poster", "abstract", "visualization"],
                date: formatTime(new Date(2018, 9, 22))
            },
            {
                name: "flavor-map",
                type: "visualization",
                link: "https://food.tools",
                imagePath: "flavor-map-portfolio-image.png",
                title: "The Flavor Map",
                description: "*CURRENTLY UNDER CONSTRUCTION* An exploration of ingredients and favorable flavor pairings, as documented in the Flavor Bible.",
                tags: ["visualization", "narrative"],
                date: formatTime(new Date())
            }
        ]).map(
            entry => ({
                ...entry,
                id: uuid()
            })
        )
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
                name: `gatsby-starter-default`,
                short_name: `starter`,
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `src/images/favicon.png`, // This path is relative to the root of the site.
            },
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // 'gatsby-plugin-offline',
    ],
}
