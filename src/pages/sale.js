import { graphql } from "gatsby"
import * as React from "react"
import Content from "../components/content"
import Layout from "../components/layout"

// TODO: how to do template string for author name

const SalePage = ({ data }) => {
  const { directus, allFile } = data
  const { sale } = directus
  const imageEdges = allFile.edges

  const sidebarRefs = sale.map(item => ({ id: item.id, title: item.title }))

  return (
    <Layout sidebarRefs={sidebarRefs}>
      {sale.map(item => (
        <Content
          key={item.id}
          id={item.id}
          title={item.title}
          author={item.user_created.email}
          createdAt={item.date_created}
          body={item.description}
          imageEdges={imageEdges}
        />
      ))}
    </Layout>
  )
}

export const query = graphql`
  query GetSaleCollection {
    allFile(filter: { extension: { regex: "/(jpg)|(png)|(jpeg)/" } }) {
      edges {
        node {
          base
          childImageSharp {
            gatsbyImageData(
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
              layout: CONSTRAINED
            )
          }
        }
      }
    }
    directus {
      sale {
        id
        status
        title
        price
        description
        date_created
        user_created {
          email
          first_name
          last_name
        }
      }
    }
  }
`

export default SalePage
