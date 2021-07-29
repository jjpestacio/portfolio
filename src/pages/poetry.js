import { graphql } from "gatsby"
import * as React from "react"
import Content from "../components/content"
import Layout from "../components/layout"

// TODO: how to do template string for author name

const PoetryPage = ({ data }) => {
  const { directus, images } = data
  const { poetry } = directus

  return (
    <Layout>
      {poetry.map(post => (
        <>
          <Content
            key={post.id}
            title={post.title}
            author={post.user_created.email}
            createdAt={post.date_created}
            body={post.text}
            images={images}
          />
          <br />
        </>
      ))}
    </Layout>
  )
}

export const query = graphql`
  query MyQuery {
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
