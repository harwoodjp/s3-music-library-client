import React, { Component } from "react"
import styled from "styled-components"

const Wrapper = styled.option`
`

class Cell extends Component {
  constructor() {
    super()
  }
  render() {
    return <Wrapper>{ this.props.data }</Wrapper>
  }
}

export default Cell
