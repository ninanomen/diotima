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
        <a target="_blank" href={`https://ninanomen.netlify.app/`}>
        <strong>{author}</strong>.
        </a>
      </p>
    </div>
  )
}

export default Bio
