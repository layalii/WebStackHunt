import React from "react"
import Helmet from "react-helmet"

const SEO = ({ title = "WebStackHunt", description = "" }) => (
  <React.Fragment>
    <Helmet>
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
    </Helmet>
  </React.Fragment>
)

export default SEO
