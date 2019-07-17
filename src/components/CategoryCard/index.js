import React from "react"
import styled from "styled-components"
import { colors } from "../../utilities"

const _CategoryCard = styled.div`
  background: #ffffff;
  border: 1px solid #f6f9fc;
  box-shadow: 0 5px 13px -10px rgba(0, 0, 0, 0.5);
  border-radius: 8px;
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

const _TechLogo = styled.div`
  height: 20px;
  width: 20px;
  margin-right: 10px;
  background: transparent url(${props => props.icon}) 20px 20px;
  background-size: contain;
`

const CategoryCard = ({ categoryName, apps }) => (
  <_CategoryCard>
    <h2>{categoryName}</h2>
    <div className="appsContainer">
      {apps.map(app => (
        <AppItem key={app.id} app={app} />
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
      name: "",
      github: "",
      website: "",
      description: "",
    },
  ],
}

export default CategoryCard

const AppItem = ({ app }) => (
  <_AppItem>
    <div>
      <_TechLogo icon={`https://www.wappalyzer.com/images/icons/${app.icon}`} />
      <h3>{app.name}</h3>
      <p>
        /<a href={app.github}>github</a>-<a href={app.website}>website</a>
      </p>
    </div>
    <p>{app.description}</p>
  </_AppItem>
)
