import React from "react"
import styled from "styled-components"

import Cell from "./Cell"
import LibraryView from "./LibraryView"
import TracksView from "./TracksView"

class Controller extends React.Component {
  constructor() {
    super()
    this.state = {
      view: "",
      data: {
        artists: "",
        albums: "",
        tracks: ""
      }
    }
  }
  setView() {
    switch (this.props.match.path) {
      case "/tracks":
        this.setState({view: <TracksView data={this.state.data.tracks} />})
        break;
      default:
        this.setState({view: <LibraryView data={this.state.data.artists} />})
    }
  }
  componentDidMount() {
    Promise.all([
      fetch(`http://localhost:1993/artists`),
      fetch(`http://localhost:1993/albums`),
      fetch(`http://localhost:1993/tracks`)
    ])
      .then(([res1, res2, res3]) => 
            Promise.all([res1.json(), res2.json(), res3.json()]))
      .then(([json1, json2, json3]) => {
        let state = this.state
        state.data.artists = json1
        state.data.albums = json2
        state.data.tracks = json3
        this.setState(state)
        this.setView()
      })
  }
  render() {
    return this.state.view
  }

}

export default Controller
