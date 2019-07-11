import React from "react"
import styled from "styled-components"
import { HorizontalLogo } from "../components/Logo"
import { Form } from "../components/Form"
import { colors } from "../utilities"
import { Link } from "gatsby"
import CategoryCard from "../components/CategoryCard"
import SEO from "../components/SEO"

const Layout = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`
const Body = styled.div`
  height: 100%;
  display: flex;
  padding: 20px 30px;
  flex-direction: column;
`
const BreadCrumb = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  a {
    color: ${colors["blue"]};
    text-decoration: none;
  }
  p {
    color: ${colors["gray-500"]};
  }
`
const Header = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 30px;
  justify-content: space-between;
  border-bottom: 1px solid ${colors["gray-100"]};
  background: white;
`
const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`
const Title = styled.h1`
  color: ${colors["gray-500"]};
  font-size: 30px;
  font-weight: 300;
  margin-top: 0;
`

// const Container = styled.div`
//   display: flex;
// `

export default () => (
  <Layout>
    <SEO />
    <Header>
      <HorizontalLogo />
      <Form />
    </Header>
    <Body>
      <BreadCrumb>
        <Link>Home</Link>&nbsp;<p>/ x technology profile</p>
      </BreadCrumb>
      <Title>Producthunt.com</Title>
      <Wrapper>
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
      </Wrapper>
    </Body>
  </Layout>
)
