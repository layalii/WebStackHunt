import React from "react"
import styled from "styled-components"
import { VerticalLogo } from "../components/Logo"
import { colors } from "../utilities"
import { Form } from "../components/Form"

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

export default () => (
  <Layout>
    <VerticalLogo />
    <TagLine>Hunt the technologies behind a website</TagLine>
    <Form />
  </Layout>
)
