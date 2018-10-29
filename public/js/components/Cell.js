import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  padding: 1em;
  border: 1px solid black;
  &:hover {
    background: black;
    color: white;
  }
`

class Cell extends React.Component {
  constructor() {
    super()
  }
  render() {
    return <Wrapper>{ this.props.data }</Wrapper>
  }
}

export default Cell
