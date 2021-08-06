import { graphql } from "gatsby"
import * as React from "react"
import Content from "../components/content"
import Layout from "../components/layout"

// TODO: how to do template string for author name

const PoetryPage = ({ data }) => {
  const { directus, allFile } = data
  const { poetry } = directus
  const imageEdges = allFile.edges

  const sidebarRefs = poetry.map(poem => ({ id: poem.id, title: poem.title }))

  return (
    <Layout sidebarRefs={sidebarRefs}>
      {poetry.map(post => (
        <Content
          key={post.id}
          id={post.id}
          title={post.title}
          author={post.user_created.email}
          createdAt={post.date_created}
          body={post.text}
          imageEdges={imageEdges}
        />
      ))}
    </Layout>
  )
}

export const query = graphql`
  query MyQuery {
    allFile(
      filter: {
        sourceInstanceName: { eq: "content" }
        extension: { regex: "/(jpg)|(png)|(jpeg)/" }
      }
    ) {
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
      poetry {
        id
        title
        text
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

export default PoetryPage
