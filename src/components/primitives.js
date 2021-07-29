/** @jsxImportSource theme-ui */
import { Link as GatsbyLink } from "gatsby"
import * as React from "react"
import { Box as BaseBox, Link as ThemeLink, useColorMode } from "theme-ui"

const Box = ({ children, variant, ...props }) => (
  <BaseBox variant={variant || "boxes.default"} {...props}>
    {children}
  </BaseBox>
)

const Link = ({ ...props }) => <ThemeLink as={GatsbyLink} {...props} />

const List = ({ children, variant }) => (
  <ul sx={{ variant: variant }}>
    {children.map(child => (
      <li sx={{ variant: `${variant}.items` }}>{child}</li>
    ))}
  </ul>
)

const ToggleColorMode = props => {
  const [colorMode, setColorMode] = useColorMode()
  return (
    <header>
      <button
        onClick={e => {
          setColorMode(colorMode === "default" ? "dark" : "default")
        }}
      >
        Toggle {colorMode === "default" ? "Dark" : "Light"}
      </button>
    </header>
  )
}

export { Box, Link, List, ToggleColorMode }
