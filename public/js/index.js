import "normalize.css"
import "../css/style.scss"

import React from "react"
import { render } from "react-dom"


import Router from "./components/Router"

/*
  Init: /artists
  Artist selection: /filter?artist=
  Album selection: ^
  Track selection: ^
  Search: /search?key=
*/


render(
  <Router/>,
  document.getElementById("app")
)

