/** @jsxImportSource theme-ui */
import parse from "html-react-parser"
import * as React from "react"
import { Grid, Paragraph, Text } from "theme-ui"
import { Box } from "../components/primitives"
import { formatDateTime, renderImage } from "../utils"

// TODO: is there a way to classify a component e.g. content-container, metadata, etc.
// - combine id with post.id?

const Content = ({ id, title, author, createdAt, body, imageEdges }) => {
  // TODO: add anchor point
  return (
    <Grid variant="grids.content">
      <Box sx={{ gridColumn: "1 / 3", gridRow: "1 / 2" }}>
        <div id={id} />
        <Text variant="title">{title}</Text>
      </Box>
      <Box sx={{ gridColumn: "1 / 2", gridRow: "2 / 3" }}>
        <Text variant="subtitle">{author}</Text>
      </Box>
      <Box sx={{ gridColumn: "2 / 3", gridRow: "2 / 3" }}>
        <Text variant="subtitle">{formatDateTime(createdAt)}</Text>
      </Box>
      <Box sx={{ gridColumn: "1 / 3", gridRow: "3 / 4" }}>
        <Paragraph>
          {parse(body, {
            replace: domNode => {
              if (domNode.name == "img") {
                return renderImage(domNode.attribs.src, imageEdges)
              }
            },
          })}
        </Paragraph>
      </Box>
    </Grid>
  )
}

Content.propTypes = {}

export default Content
