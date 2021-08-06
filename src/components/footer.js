import * as React from "react"
import { Grid, Text } from "theme-ui"
import { Box } from "../components/primitives"

const Footer = () => (
  <Grid variant="grids.footer">
    <Box sx={{ textAlign: "center" }}>
      <Text variant="text.eyebrow">JJ Estacio</Text>
    </Box>
  </Grid>
)

export default Footer
