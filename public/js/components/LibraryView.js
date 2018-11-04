import React, { Component } from "react"
import styled from "styled-components"

const Wrapper = styled.select`
  padding: 1em;
  max-width: 25em;
  height: 90vh;
  overflow-y: scroll;
`

class LibraryView extends Component {
  constructor() {
    super()
    this.state = {}
  }
  componentDidMount() {
  }
  render() {
    return (
      <Wrapper size="30">
        {this.props.data.map((artist, i) => 
          <option 
            key={i}
            onClick={() => console.log(artist)}
          >
          {artist.artist}
          </option>
        )}
      </Wrapper>
    )
  }
}

export default LibraryView
