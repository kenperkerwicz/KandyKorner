import { Route } from 'react-router-dom'
import React, { Component } from "react"
import CandyList from "./CandyTypes/CandyList"
import EmployeeList from "./Employees/EmployeeList"
import StoreList from "./StoreList/StoreList"

class KandyKorner extends Component {

  state = {
    storeArray: [],
    employeeArray: [],
    candyTypeArray: [],
    candyArray: []
  }

  componentDidMount () {
    console.log("componentDidUpdate -- KandyKorner")

    const newState = {}

    fetch("http://localhost:5002/storeArray")
            .then(r => r.json())
            .then(storeArray => newState.storeArray = storeArray)
            .then(() => fetch("http://localhost:5002/employeeArray")
            .then(r => r.json()))
            .then(employeeArray => newState.employeeArray = employeeArray)
            .then(() => fetch("http://localhost:5002/candyTypeArray")
            .then(r => r.json()))
            .then(candyTypeArray => newState.candyTypeArray = candyTypeArray)
            .then(() => fetch("http://localhost:5002/candyArray")
            .then(r => r.json()))
            .then(candyArray => newState.candyArray = candyArray)
            .then(() => this.setState(newState))

}

  render() {
    // console.log(this.state)
    return (
      <React.Fragment>
                <Route exact path="/" render={(props) => {
                  
                    return <CandyList candyTypes={this.state.candyTypeArray} candies={this.state.candyArray}/>

                }} />

                <Route exact path="/employeeArray" render={(props) => {
                  return <EmployeeList employees= {this.state.employeeArray}/>

                } }/>

                <Route path="/storeArray" render={(props) => {
                    return  <StoreList stores= {this.state.storeArray}/>
                }} />
            </React.Fragment>

    )
}
}

export default KandyKorner