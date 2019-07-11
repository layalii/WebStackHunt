import React from "react"
import styled from "styled-components"
import { TechLogo } from "../Logo"
import { colors } from "../../utilities"

const _CategoryCard = styled.div`
  background: #ffffff;
  border: 1px solid #f6f9fc;
  box-shadow: 0 5px 13px -10px rgba(0, 0, 0, 0.5);
  border-radius: 8px;
  // background: white;
  // box-shadow: 0px 5px 17px -6px rgba(0, 0, 0, 0.03);
  h2 {
    color: ${colors["gray-500"]};
    padding-left: 20px;
    font-size: 18px;
    font-weight: 100;
  }
  .appsContainer > div:nth-child(odd) {
    background: ${colors["gray-100"]};
  }
  .appsContainer > div:nth-child(even) {
    background: transparent;
  }
`

const _AppItem = styled.div`
  padding: 18px;
  > div {
    display: flex;
    align-items: center;
    margin-bottom: 16px;
  }
  h3 {
    margin: 0 16px 0 0;
    font-weight: 500;
    font-size: 16px;
  }
  p {
    margin: 0px;
    color: ${colors["gray-600"]};
    font-weight: 100;
  }
  p a {
    margin: 0 8px;
    text-decoration: none;
  }
`

const CategoryCard = ({ categoryName, apps }) => (
  <_CategoryCard>
    <h2>{categoryName}</h2>
    <div className="appsContainer">
      {apps.map(app => (
        <AppItem app={app} key={app.id} />
      ))}
    </div>
  </_CategoryCard>
)

CategoryCard.defaultProps = {
  categoryName: "Marketing",
  apps: [
    {
      id: 1,
      icon: "",
      name: "CDN JS",
      github: "github",
      website: "website",
      description:
        "The best FOSS CDN for web related libraries to speed up your websites!",
    },
    {
      id: 2,
      icon: "",
      name: "CDN JS",
      github: "github",
      website: "website",
      description:
        "The best FOSS CDN for web related libraries to speed up your websites!",
    },
  ],
}

export default CategoryCard

const AppItem = ({ app, key }) => (
  <_AppItem>
    <div>
      <TechLogo />
      <h3>{app.name}</h3>
      <p>
        /<a href="https://google.com">{app.github}</a>-
        <a href="https://google.com">{app.website}</a>
      </p>
    </div>
    <p>{app.description}</p>
  </_AppItem>
)
