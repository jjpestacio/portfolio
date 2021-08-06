/** @jsxImportSource theme-ui */
import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"
import { Grid, Text } from "theme-ui"
import { Box, Link, List, ToggleColorMode } from "../components/primitives"

// TODO: style avatar
// - sx prop not working ...

const Header = () => (
  <Grid variant="grids.header">
    <Box sx={{ gridColumn: "1" }}>
      <StaticImage alt="me!" src="../images/avatar.jpg" />
    </Box>
    <Box sx={{ gridColumn: "2" }}>
      <Text>social media</Text>
    </Box>
    <Box sx={{ gridColumn: "3" }}>
      <ToggleColorMode />
    </Box>
    <Box sx={{ gridColumn: "4" }}>
      <List variant="lists.navigation">
        <Link to="/">Home</Link>
        <Link to="/resume">Resume</Link>
        <Link to="/software">Software</Link>
        <Link to="/poetry">Poetry</Link>
        <Link to="/food">Food</Link>
      </List>
    </Box>
  </Grid>
)

export default Header
