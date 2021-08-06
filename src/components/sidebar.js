import { useLocation } from "@reach/router"
import PropTypes from "prop-types"
import * as React from "react"
import { Grid } from "theme-ui"
import { Box, Link, List } from "../components/primitives"

// TODO: add why poetry
// TODO: add thumbnails

const Sidebar = ({ items }) => {
  const path = useLocation().pathname
  console.log(path)

  return (
    <Grid variant="grids.sidebar">
      <Box>
        <List variant="lists.sidebar">
          {items &&
            items.map(item => (
              <Link to={`${path}#${item.id}`}>{item.title}</Link>
            ))}
        </List>
      </Box>
    </Grid>
  )
}

Sidebar.propTypes = {
  items: PropTypes.arrayOf({
    id: PropTypes.string,
    title: PropTypes.string,
  }),
}

export default Sidebar
