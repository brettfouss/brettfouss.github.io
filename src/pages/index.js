import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Card from "../components/card"
import { CardGrid, CardRow, CardColumn } from "../components/card.module.css"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`brett`, `fouss`, `brett fouss`, `brettfouss`]} />
    <br />
    <div className="Fluid">
        <p>
            I am a data visualization practitioner and web developer based in Cambridge, Massachussets. Currently, I research and develop visual analytics tools for operational cyber security at MIT Lincoln Laboratory. Outside of work, I am interested in exploring data related to food and culture. I wish to use data science and visualization to analyze food and eating in innovative ways, as well as create tools to help home cooks.
        </p>
        <br />
        <h1>Portfolio</h1>
        <p>
            Please find a sampling of my work below.
            <br />
            <br />
            <em>Click on a card to view a project page.</em>
        </p>
    </div>
    <div className={ CardGrid }>
        <div className={ CardRow }>
            <div className={ CardColumn } key={ 0 }>
                <Card { ...data.site.siteMetadata.portfolio[0] } />
            </div>
            <div className={ CardColumn } key={ 1 }>
                <Card { ...data.site.siteMetadata.portfolio[1] } />
            </div>
        </div>
        <div className={ CardRow }>
            <div className={ CardColumn } key={ 2 }>
                <Card { ...data.site.siteMetadata.portfolio[2] } />
            </div>
        </div>
    </div>
    <br />
  </Layout>
)

export default IndexPage

export const query = graphql`
    query {
        site {
            siteMetadata {
                portfolio {
                    name
                    type
                    link
                    title
                    imagePath
                    description
                    tags
                    date
                }
            }
        }
    }
`
