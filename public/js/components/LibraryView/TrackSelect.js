import React, { Component } from "react"

import styled from "styled-components"

const Wrapper = styled.select`
  padding: 1em;
  width: 25%;
  height: 90vh;
  overflow-y: scroll;
`

class TrackSelect extends Component {
  constructor() {
    super()
    this.state = {
      data: []
    }
  }
  componentDidMount() {
    console.log("TrackSelect#componentDidMount")
    this.setState({data: this.props.data[0].tracks})
  }
  componentWillReceiveProps(nextProps) {
    console.log("TrackSelect#componentWillReceiveProps")
  }
  render() {
    return (
      <Wrapper size="30">
        {this.state.data.map((track, i) => 
          <option 
            key={i}
          >
          {track.title}
          </option>
        )}
      </Wrapper>
    )
  }
}

export default TrackSelect
