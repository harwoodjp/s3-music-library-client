import "normalize.css"
import "../css/style.scss"

import React from "react"
import { render } from "react-dom"


import App from "./components/App"

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

