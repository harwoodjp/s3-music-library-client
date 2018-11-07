import React, { Component } from "react"
import styled from "styled-components"

import ArtistSelect from "./ArtistSelect"
import AlbumSelect from "./AlbumSelect"
import TrackSelect from "./TrackSelect"

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
    this.methods = {
      setTrackSelect: albumData => {
        console.log(`#setTrackSelect`)
        console.log(albumData)
        this.setState({
          trackSelect: <TrackSelect
            data={albumData}
          />
        })
      },
      setAlbumSelect: artistData => {
        this.setState({
          albumSelect: <AlbumSelect
            data={artistData}
            setTrackSelect={this.methods.setTrackSelect}
          />,
          trackSelect: null
        })
      }
    }
  }
  componentDidMount() {
    this.setState({
      artistSelect: <ArtistSelect 
        data={this.props.data}
        setAlbumSelect={this.methods.setAlbumSelect}
      />
    })
  }
  render() {
    return (
      <Wrapper>
        {this.state.artistSelect}  
        {this.state.albumSelect} 
        {this.state.trackSelect}
      </Wrapper>
    )
  }
}

export default LibraryView
