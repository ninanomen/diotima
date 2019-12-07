import React from "react"
import { Link, graphql } from "gatsby"

import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

class CardContentfulTemplate extends React.Component {
  render() {
    const card = this.props.data.contentfulCard
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext

    return ( 
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={card.title}
        />
        <article>
          <header>
            <h1>
              {card.title}
            </h1>
            <p>
              {card.date}
            </p>
          </header>
          {documentToReactComponents(card.content.json)}
          <hr/>
          <footer>
            <Bio />
          </footer>
        </article>

        <nav>
          <ul>
            <li>
              {previous && (
                <Link to={previous.slug} rel="prev">
                  ← {previous.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={next.slug} rel="next">
                  {next.title} →
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </Layout>
    )
  }
}

export default CardContentfulTemplate

export const pageQuery = graphql`
  query CardsQuery($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    contentfulCard( slug: { eq: $slug }) {
      title
      subtitle
      slug
      content {
          json
        }
    }
  }
`
