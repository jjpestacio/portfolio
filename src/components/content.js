/** @jsxImportSource theme-ui */
import parse from "html-react-parser"
import * as React from "react"
import { Heading, Paragraph } from "theme-ui"
import { formatDateTime, renderImage } from "../utils"

// TODO: is there a way to classify a component e.g. content-container, metadata, etc.
// - combine id with post.id?

const Content = ({ id, title, author, createdAt, body, imageEdges }) => {
  // TODO: add anchor point
  return (
    <article sx={{ variant: "styles.article" }}>
      <div id={id} />
      <Heading as="h1">{title}</Heading>
      <Heading as="h4">{author}</Heading>
      <Heading as="h5">{formatDateTime(createdAt)}</Heading>
      <Paragraph>
        {parse(body, {
          replace: domNode => {
            if (domNode.name == "img") {
              return renderImage(domNode.attribs.src, imageEdges)
            }
          },
        })}
      </Paragraph>
    </article>
  )
}

Content.propTypes = {}

export default Content
