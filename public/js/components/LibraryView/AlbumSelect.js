import React, { Component } from "react"
import styled from "styled-components"

const Wrapper = styled.select`
  margin-left: 1em;
  margin-right: 1em;
  padding: 1em;
  width: 25%;
  height: 90vh;
  overflow-y: scroll;
`

class AlbumSelect extends Component {
  constructor() {
    super()
    this.state = {
      data: []
    }
    this.handleChange = this.handleChange.bind(this)
  }
  componentDidMount() {
    this.setState({
      data: this.props.data[0].albums
    })
  }
  handleChange(e) {
    const clickedAlbum = e.target.value
    const clickedAlbumData = this.state.data.filter(data => data.album === e.target.value)
    console.log(clickedAlbumData)
    this.props.setTrackSelect(clickedAlbumData)
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      data: nextProps.data[0].albums
    })
  }
  render() {
    return (
      <Wrapper size="30" onChange={e => this.handleChange(e)}>
        {this.state.data.map((album, i) => 
          <option 
            key={i}
          >
          {album.album}
          </option>
        )}
      </Wrapper>
    )
  }
}

export default AlbumSelect
