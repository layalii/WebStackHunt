import React from "react"
import styled from "styled-components"
const Layout = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const Title = styled.h1`
  margin: 0;
`

export default () => (
  <Layout>
    <Title>Coming soon...</Title>
  </Layout>
)
