import { graphql, useStaticQuery } from "gatsby"
import PropTypes from "prop-types"
import * as React from "react"
import { Grid, ThemeProvider } from "theme-ui"
import Footer from "../components/Footer"
import Header from "../components/Header"
import { Box } from "../components/primitives"
import theme from "../theme/index"

const Layout = ({ children }) => {
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
        <Box sx={{ gridColumn: "1 / 4", gridRow: "1" }}>
          <Header />
        </Box>
        <Box sx={{ gridColumn: "1 / 4", gridRow: "3", textAlign: "center" }}>
          <Footer />
        </Box>
        <Box sx={{ gridColumn: "3", gridRow: "2" }}>sidebar</Box>
        <Box variant="boxes.page" sx={{ gridColumn: "2", gridRow: "2" }}>
          <main>{children}</main>
        </Box>
      </Grid>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
