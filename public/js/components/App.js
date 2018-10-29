import React from "react"
import styled from "styled-components"

import Cell from "./Cell"

const Wrapper = styled.div`
  max-width: 25em;
  margin: 0 auto;
  height: 80vh;
  overflow-y: scroll;
`

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      cells: []
    }
  }
  componentDidMount() {
    fetch("http://localhost:1993/artists")
      .then(res => res.json())
      .then(json => {
        const map = json.map(artist => (
          <Cell
            key={artist.artist}
            data={artist.artist}
          />
        ))
        this.setState({cells: map})
      })
  }
  render() {
    return <Wrapper>{ this.state.cells }</Wrapper>
  }

}

export default App
