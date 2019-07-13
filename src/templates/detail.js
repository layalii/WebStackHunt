import React, { useState } from "react"
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
  > .row {
    flex-grow: 1;
    align-items: center;
  }
  @media only screen and (max-width: 824px) {
    > .row > div {
      display: flex;
      justify-content: center;
      padding: 22px 0;
    }
  }
`

const Title = styled.h1`
  color: ${colors["gray-500"]};
  font-size: 30px;
  font-weight: 300;
  margin-top: 0;
`

const _form = styled.div`
  display: flex;
  justify-content: flex-end;
`

// const Container = styled.div`
//   display: flex;
// `

export default ({ url }) => {
  const [data, setData] = useState([])
  return (
    <Layout>
      <SEO />
      <Header>
        <div className="row">
          <div className="col-s-12 col-lg-6 x">
            <HorizontalLogo />
          </div>
          <_form className="col-s-12 col-lg-6 y">
            <Form />
          </_form>
        </div>
      </Header>
      <Body>
        <BreadCrumb>
          <Link>Home</Link>&nbsp;<p>/ x technology profile</p>
        </BreadCrumb>
        <Title>Producthunt.com</Title>
        <div className="row">
          <div className="col-s-12 col-lg-6 mb-4">
            <CategoryCard />
          </div>
          <div className="col-s-12 col-lg-6 mb-4">
            <CategoryCard />
          </div>
          <div className="col-s-12 col-lg-6 mb-4">
            <CategoryCard />
          </div>
          <div className="col-s-12 col-lg-6 mb-4">
            <CategoryCard />
          </div>
        </div>
      </Body>
    </Layout>
  )
}
