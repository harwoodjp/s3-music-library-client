import React, { Component } from "react"
import styled from "styled-components"

import ArtistSelect from "./ArtistSelect"

const Wrapper = styled.div`
`

class LibraryView extends Component {
  constructor() {
    super()
    this.state = {
      artistSelect: null,
      albumSelect: null,
      trackSelect: null
    }
  }
  componentDidMount() {
    console.log(this.props.data)
    this.setState({
      artistSelect: <ArtistSelect data={this.props.data}/>
    })
  }
  render() {
    return (
      <Wrapper>
        {this.state.artistSelect}  
      </Wrapper>
    )
  }
}

export default LibraryView
