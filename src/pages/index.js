import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const cards = data.allContentfulCard.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Todos" />
        {cards.map(({ node }) => {
          const title = node.title || node.slug
          return (
            <article key={node.slug}>
              <Link to="/modal" className="card">
                <img src={node.image.resize.src} alt={node.image.title} />
                <h3>{title}</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              </Link>
            </article>
          )
        })}
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulCard {
      edges {
        node {
          title
          subtitle
          slug
          image {
            resize {
              src
            }
            title
          }
        }
      }
    }
  }
`
