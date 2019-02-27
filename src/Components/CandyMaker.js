import React, { Component } from "react"
import NavBar from "./nav/NavBar"
import KandyKorner from "./KandyKorner"



class CandyMaker extends Component {
  render() {
      return (
          <React.Fragment>
              <NavBar />

              <KandyKorner />
          </React.Fragment>
      )
  }
}

export default CandyMaker