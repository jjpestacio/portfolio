/** @jsxImportSource theme-ui */
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { DateTime } from "luxon"
import * as React from "react"

const formatDateTime = dateTime =>
  DateTime.fromISO(dateTime).toLocaleString(DateTime.DATE_FULL)

const getImageNode = (imageEdges, fileName) => {
  for (let edge of imageEdges) {
    if (fileName === edge.node.base.split(".")[0]) {
      return edge.node
    }
  }

  throw `Couldn't find image with name ${fileName}`
}

const renderImage = (src, imageEdges) => {
  const fileName = src.split("/").pop()
  const imageNode = getImageNode(imageEdges, fileName)

  return (
    <GatsbyImage
      alt="TODO"
      image={getImage(imageNode)}
      objectFit="contain"
      sx={{ variant: "images.content" }}
    />
  )
}

export { formatDateTime, getImageNode, renderImage }
