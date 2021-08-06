/** @jsxImportSource theme-ui */
import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"
import { Grid, Link, List, ToggleColorMode } from "../components/primitives"
import { SocialMedia } from "../components/social"

// TODO: style avatar
// - sx prop not working ...

const Header = () => (
  <>
    <Grid variant="grids.header.avatar">
      <StaticImage alt="me!" src="../images/avatar.jpg" />
    </Grid>
    <Grid variant="grids.header.social">
      <SocialMedia />
    </Grid>
    <Grid variant="grids.header.empty">
      <ToggleColorMode />
    </Grid>
    <Grid variant="grids.header.navigation">
      <List variant="lists.navigation">
        <Link to="/">Home</Link>
        <Link to="/resume">Resume</Link>
        <Link to="/software">Software</Link>
        <Link to="/poetry">Poetry</Link>
        <Link to="/food">Food</Link>
      </List>
    </Grid>
  </>
)

export default Header
