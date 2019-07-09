import React from "react"
import styled from "styled-components"
import VerticalLogoImg from "./logo-vertical.png"

const _VerticalLogo = styled.h1`
  width: 300px;
  height: 130px;
  background: transparent url(${VerticalLogoImg}) 300px 130px;
  text-indent: -99999999px;
  overflow: hidden;
`

export const VerticalLogo = () => <_VerticalLogo>Web Stack Hunt</_VerticalLogo>
