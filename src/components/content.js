/** @jsxImportSource theme-ui */
import { GatsbyImage } from "gatsby-plugin-image"
import parse from "html-react-parser"
import * as React from "react"
import { Grid, Paragraph, Text } from "theme-ui"
import { Box } from "../components/primitives"

// TODO: is there a way to classify a component e.g. content-container, metadata, etc.
// - combine id with post.id?

const Content = ({ title, author, createdAt, body, images }) => {
  return (
    <Grid variant="grids.content">
      <Box sx={{ gridColumn: "1 / 3", gridRow: "1 / 2" }}>
        <Text variant="title">{title}</Text>
      </Box>
      <Box sx={{ gridColumn: "1 / 2", gridRow: "2 / 3" }}>
        <Text variant="subtitle">{author}</Text>
      </Box>
      <Box sx={{ gridColumn: "2 / 3", gridRow: "2 / 3" }}>
        <Text variant="subtitle">{createdAt}</Text>
      </Box>
      <Box sx={{ gridColumn: "1 / 3", gridRow: "3 / 4" }}>
        <Paragraph>
          {parse(body, {
            replace: domNode => {
              if (domNode.name === "img") {
                return <GatsbyImage image={domNode.attribs.src} />
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
