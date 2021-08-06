/** @jsxImportSource theme-ui */
import { Link as GatsbyLink } from "gatsby"
import * as React from "react"
import { Grid as BaseGrid, Link as ThemeLink, useColorMode } from "theme-ui"

const Anchor = ({ id }) => <div id={id} />

const Article = ({ children, variant, ...props }) => (
  <article variant={variant || "styles.article"} {...props}>
    {children}
  </article>
)

const Grid = ({ children, variant, ...props }) => (
  <BaseGrid variant={variant || "grids.default"} {...props}>
    {children}
  </BaseGrid>
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

export { Anchor, Article, Grid, Link, List, ToggleColorMode }
