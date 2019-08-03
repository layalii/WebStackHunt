import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { HorizontalLogo } from "../components/Logo"
import { Form } from "../components/Form"
import { colors } from "../utilities"
import { Link } from "gatsby"
import axios from "axios"
import CategoryCard from "../components/CategoryCard"
import SEO from "../components/SEO"
import _ from "lodash"
import uid from "uid"
import Masonry from "react-masonry-component"

const Layout = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`

const Error = styled.p`
  color: #8a2dec;
  font-size: 20px;
  align-self: center;
  margin-top: 100px;
`

const Body = styled.div`
  height: 100%;
  display: flex;
  padding: 20px 30px;
  flex-direction: column;
  ${"" /* align-items: center;
  justify-content: center; */}
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

const transformServerData = data => {
  // work here
  const _categories = _.values(data.categories)
  const _applications = data.applications

  const preparedData = _categories
    .map(cat => {
      let obj = { categoryName: cat.name }
      obj.apps = _applications
        .map(app => {
          let isAppFound = false
          app.categories.forEach(c => {
            const catName = _.values(c)[0]
            if (catName === cat.name) {
              isAppFound = true
            }
          })
          if (isAppFound) {
            return {
              id: uid(),
              icon: encodeURIComponent(app.icon),
              name: app.name,
              github: app.website,
              website: app.website,
              description: "",
            }
          }
          return null
        })
        .filter(app => app !== null)
      return obj
    })
    .filter(obj => obj.apps.length > 0)
  return preparedData

  // const data = [
  //   {
  //     categoryName: "Marketing",
  //     apps: [
  //       {
  //         id: 1,
  //         icon: "",
  //         name: "CDN JS",
  //         github: "github",
  //         website: "website",
  //         description:
  //           "The best FOSS CDN for web related libraries to speed up your websites!",
  //       },
  //       {
  //         id: 2,
  //         icon: "",
  //         name: "CDN JS",
  //         github: "github",
  //         website: "website",
  //         description:
  //           "The best FOSS CDN for web related libraries to speed up your apps!",
  //       },
  //     ],
  //   },
  // ]
  //return data
}

export default ({ url }) => {
  const [data, setData] = useState([])
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    axios
      .post("https://webstack-hunt-api.herokuapp.com/api", {
        url,
      })
      .then(response => {
        setIsLoading(false)
        const _data = response.data
        if (_data.action) {
          const _preparedData = transformServerData(_data.data)
          setData(_preparedData)
        } else {
          setError(_data.msg)
        }
      })
      .catch(error => {
        setIsLoading(false)
        setError("Something went wrong!")
      })
  }, [])

  if (isLoading) {
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
          <Error>Loading ..</Error>
        </Body>
      </Layout>
    )
  }

  if (error) {
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
          <Error>{error}</Error>
        </Body>
      </Layout>
    )
  }

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
          <Link to="/">Home</Link>&nbsp;<p>/ technology stack</p>
        </BreadCrumb>
        <Title>{url}</Title>
        <div className="row">
          <Masonry
            style={{ width: "100%" }}
            elementType={"div"} // default 'div'
          >
            {data.map((dataItem, i) => (
              <div key={i} className="col-s-12 col-lg-6 mb-4">
                <CategoryCard {...dataItem} />
              </div>
            ))}
          </Masonry>
        </div>
      </Body>
    </Layout>
  )
}
