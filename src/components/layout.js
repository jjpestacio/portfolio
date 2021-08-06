import { graphql, useStaticQuery } from "gatsby"
import PropTypes from "prop-types"
import * as React from "react"
import { Grid, ThemeProvider } from "theme-ui"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Sidebar from "../components/Sidebar"
import theme from "../theme/index"

const Layout = ({ children, ...props }) => {
  const { sidebarRefs } = props

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <ThemeProvider theme={theme}>
      <Grid variant="grids.layout">
        <Grid variant="grids.header">
          <Header />
        </Grid>
        <Grid variant="grids.footer">
          <Footer />
        </Grid>
        <Grid variant="grids.sidebar">
          <Sidebar items={sidebarRefs} />
        </Grid>
        <Grid variant="grids.page">
          <main>{children}</main>
        </Grid>
      </Grid>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
