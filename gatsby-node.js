const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const blogCard = path.resolve(`./src/templates/card-contentful.js`)
  const result = await graphql(
    `
      {
        allContentfulCard {
          edges {
            node {
              slug
              title
              subtitle
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    throw result.errors
  }

  // Create cards pages.
  const cards = result.data.allContentfulCard.edges

  cards.forEach((card, index) => {
    const previous = index === cards.length - 1 ? null : cards[index + 1].node
    const next = index === 0 ? null : cards[index - 1].node

    createPage({
      path: card.node.slug,
      component: blogCard,
      context: {
        slug: card.node.slug,
        previous,
        next,
      },
    })
  })
}