import "normalize.css"
import "../css/style.scss"

import React from "react"
import { render } from "react-dom"


import Router from "./components/Router"

render(
  <Router/>,
  document.getElementById("app")
)

