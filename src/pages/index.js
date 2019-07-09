import React from "react"
import styled from "styled-components"
import { VerticalLogo } from "../components/Logo"
import { colors } from "../utilities"

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

const Form = styled.form`
  display: flex;
  width: 460px;
  font-size: 14px;
`
const Input = styled.input`
  background-color: #f6f9fc;
  padding: 18px 22px;
  border: 0;
  border-radius: 100px;
  flex-grow: 1;
  &:focus {
    outline: none;
  }
`
const Button = styled.button`
  background-color: ${colors["gray-600"]};
  color: white;
  border-radius: 100px;
  border: 0px;
  padding: 0px 30px;
  margin-left: -37px;
  cursor: pointer;
  &:hover {
  }
`

export default () => (
  <Layout>
    <VerticalLogo />
    <TagLine>Hunt the technologies behind a website</TagLine>
    <Form>
      <Input placeholder="https://producthunt.com" />
      <Button>HUNT</Button>
    </Form>
  </Layout>
)
