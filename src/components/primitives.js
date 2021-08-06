/** @jsxImportSource theme-ui */
import { Link as GatsbyLink } from "gatsby"
import * as React from "react"
import {
  Box as BaseBox,
  Grid as BaseGrid,
  Link as ThemeLink,
  useColorMode,
} from "theme-ui"

const Grid = ({ children, variant, ...props }) => (
  <BaseGrid variant={variant || "boxes.default"} {...props}>
    {children}
  </BaseGrid>
)
const Box = ({ children, variant, ...props }) => (
  <BaseBox variant={variant || "boxes.default"} {...props}>
    {children}
  </BaseBox>
)

const Link = ({ ...props }) => <ThemeLink as={GatsbyLink} {...props} />

const List = ({ children, variant }) => (
  <ul sx={{ variant: variant }}>
    {children &&
      children.map(child => (
        <li sx={{ variant: `${variant}.items` }}>{child}</li>
      ))}
  </ul>
)

const ToggleColorMode = props => {
  const [colorMode, setColorMode] = useColorMode()
  return (
    <button
      onClick={e => {
        setColorMode(colorMode === "default" ? "dark" : "default")
      }}
    >
      Toggle {colorMode === "default" ? "Dark" : "Light"}
    </button>
  )
}

export { Box, Grid, Link, List, ToggleColorMode }
