import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `StaticQuery`: https://gatsby.dev/staticquery
 */

export default ({ imagePath, className }) => (
    <StaticQuery    
        query={
            graphql`
                query {
                  allFile {
                    edges {
                      node {
                        childImageSharp {
                          fixed(width: 150, height: 100) {
                          ...GatsbyImageSharpFixed
                          originalName
                        }
                      }
                   }
                }
              }
            }`
        }
        render={
            data => {
                const image = data.allFile.edges.map(edge => edge.node.childImageSharp).find(image => image.fixed.originalName === imagePath);
                return (
                    <Img fixed={image.fixed} className={ className } />
                )
            }
        }
    />
);



