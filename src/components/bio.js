import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author
          social {
            twitter
          }
        }
      }
    }
  `)

  const { author, social } = data.site.siteMetadata
  return (
    <div>
      <p>
        Diseñado y desarrollado con 💛por 
        {` `}
        <a href={`https://twitter.com/${social.twitter}`}>
        <strong>{author}</strong>.
        </a>
      </p>
    </div>
  )
}

export default Bio
