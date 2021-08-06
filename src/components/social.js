import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"
import { Flex, Grid } from "theme-ui"
import {} from "../components/primitives"

// TODO: vertically align icons in parent container
// TODO: theme icons via theme
// TODO: dynamically resize icons

const type = "guache"
const src = `../images/social/${type}`
const style = { height: 32, width: 32 }

const SocialMedia = () => (
  <Grid variant="grids.social">
    <Flex variant="flex.center">
      <StaticImage alt="gmail" src={`${src}/gmail.png`} style={style} />
      <StaticImage alt="linkedin" src={`${src}/linkedin.png`} style={style} />
      <StaticImage alt="github" src={`${src}/github.png`} style={style} />
      <StaticImage alt="goodreads" src={`${src}/goodreads.png`} style={style} />
      <StaticImage alt="twitter" src={`${src}/twitter.png`} style={style} />
    </Flex>
  </Grid>
)

export { SocialMedia }
