import React from "react"
import styled from "styled-components"
import VerticalLogoImg from "./logo-vertical.png"
import HorizontalLogoImg from "./logo-horizontal.png"
import TechLogoImg from "./Rectangle.png"
import { Link } from "gatsby"

const _VerticalLogo = styled.h1`
  width: 300px;
  height: 130px;
  background: transparent url(${VerticalLogoImg}) 300px 130px;
  text-indent: -99999999px;
  overflow: hidden;
`
const _HorizontalLogo = styled(props => <Link {...props} to="/" />)`
  height: 35px;
  width: 291px;
  display: inline-block;
  background: transparent url(${HorizontalLogoImg}) 291px 35px;
`

const _TechLogo = styled.div`
  height: 20px;
  width: 20px;
  margin-right:10px;
  background: transparent url(${TechLogoImg}) 20px 20px;
`

export const VerticalLogo = () => <_VerticalLogo>Web Stack Hunt</_VerticalLogo>
export const HorizontalLogo = () => <_HorizontalLogo />
export const TechLogo = () => <_TechLogo />
