import "normalize.css"
import "../css/style.scss"

import React from "react"
import { render } from "react-dom"


import App from "./components/App"

fetch("http://localhost:1993/filter?artist=Felt")
  .then(res => res.json())
  .then(json => console.log(json))
 
/*
  Init: /artists
  Artist selection: /filter?artist=
  Album selection: ^
  Track selection: ^
  Search: /search?key=
*/


render(
  <App />,
  document.getElementById("app")
)

