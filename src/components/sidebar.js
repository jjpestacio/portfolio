import { useLocation } from "@reach/router"
import PropTypes from "prop-types"
import * as React from "react"
import { Flex, Grid } from "theme-ui"
import { Link, List } from "../components/primitives"

// TODO: add why poetry
// TODO: add thumbnails

const Sidebar = ({ items }) => {
  const path = useLocation().pathname
  console.log(path)

  return (
    <Grid variant="grids.sidebar">
      <Flex variant="flex.center">
        <List variant="lists.sidebar">
          {items &&
            items.map(item => (
              <Link to={`${path}#${item.id}`}>{item.title}</Link>
            ))}
        </List>
      </Flex>
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
