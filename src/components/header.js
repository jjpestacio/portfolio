/** @jsxImportSource theme-ui */
import * as React from "react"
import { Grid, Text } from "theme-ui"
import { Box, Link, List, ToggleColorMode } from "../components/primitives"

// TODO: display page links inline

const Header = () => (
  <Grid variant="grids.header">
    <Box sx={{ gridColumn: "1" }}>
      <Text>avatar</Text>
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
