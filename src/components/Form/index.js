import React, { useState } from "react"
import styled from "styled-components"
import { colors } from "../../utilities"
import { Link, navigate } from "gatsby"

const _Form = styled.form`
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
  margin-left: -50px;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`

const StyledLink = styled(props => (
  <Link
    {...props}
    to={{
      pathname: "/",
      search: "?url=https://producthunt.com",
    }}
  />
))`
  text-decoration: none;
  color: white;
`

export const Form = () => {
  const [url, setUrl] = useState("")
  return (
    <_Form
      onSubmit={e => {
        e.preventDefault()
        if (!url) return
        navigate(`/hunt?url=${url}`)
      }}
    >
      <Input
        placeholder="tap here your url"
        value={url}
        onChange={e => {
          setUrl(e.target.value)
        }}
      />
      <Button type="submit">HUNT</Button>
    </_Form>
  )
}
