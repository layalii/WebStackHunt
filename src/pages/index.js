import React from "react"
import styled from "styled-components"
import queryString from "query-string"
import { VerticalLogo } from "../components/Logo"
import { colors } from "../utilities"
import { Form } from "../components/Form"
import SEO from "../components/SEO"

import DetailsPage from "../templates/detail"

const Layout = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const TagLine = styled.p`
  color: ${colors["gray-600"]};
  font-weight: 100;
  font-size: 24px;
`

export default ({ location }) => {
  if (location.search) {
    const searchObject = queryString.parse(location.search)
    const { url } = searchObject
    return <DetailsPage url={url} />
  }
  return <HomePage />
}

const HomePage = () => (
  <Layout>
    <SEO />
    <VerticalLogo />
    <TagLine>Hunt the technologies behind a website</TagLine>
    <Form />
  </Layout>
)
