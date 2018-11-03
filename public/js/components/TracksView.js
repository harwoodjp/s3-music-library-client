import React, { Component } from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  max-height: 90vh;
  overflow-y: scroll;
`
const TrackTable = styled.table``
const TrackHeading = styled.th``
const TrackRow = styled.tr``

class TracksView extends Component {
  constructor() {
    super()
  }
  render() {
    return <Wrapper>
        <TrackTable>
          <thead>
            <TrackRow>
              <TrackHeading>Artist</TrackHeading>
              <TrackHeading>Album</TrackHeading>
              <TrackHeading>Track</TrackHeading>
            </TrackRow>
          </thead>
          <tbody>
            {this.props.data.map((track, i) => (
              <TrackRow key={i} >
                <td>{track.artist}</td>
                <td>{track.album}</td>
                <td>{track.track}</td>
              </TrackRow>
            ))}
          </tbody>
        </TrackTable>
    </Wrapper>
  }
}

export default TracksView
