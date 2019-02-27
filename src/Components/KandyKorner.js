import React, { Component } from "react"
import CandyList from "./CandyTypes/CandyList"
import EmployeeList from "./Employees/EmployeeList"
import StoreList from "./StoreList/StoreList"

class KandyKorner extends Component {

  storeArray = [
    { id: 1, name: "North Store" },
    { id: 2, name: "South Store" },
    { id: 3, name: "West Store" },
    { id: 4, name: "East Store" }
]


  employeeArray = [
    { id: 1, name: "Ken"},
    { id: 2, name: "Chad"},
    { id: 3, name: "Bob"},
    { id: 4, name: "Parker"},
    { id: 5, name: "Tim"}
  ]

  candyTypeArray = [
    { id: 1, name: "Chocolate"},
    { id: 2, name: "Sour"},
    { id: 3, name: "White Chocolate"},
    { id: 4, name: "Jelly"}

  ]

  candyArray = [
    { id: 1, name: "Snickers", candyTypeId: 1},
    { id: 2, name: "Sour Patch Kids", candyTypeId: 2},
    { id: 3, name: "Zero", candyTypeId: 3},
    { id: 4, name: "Gummi Bears", candyTypeId: 4}
  ]


  state = {
    stores: this.storeArray,
    employees: this.employeeArray,
    candyTypes: this.candyTypeArray,
    candies: this.candyArray
}

  render() {
    return (
        <article className="kandy">
          <CandyList candyTypes={this.state.candyTypes} candy={this.state.candies}/>
          <EmployeeList employees= {this.state.employees}/>
          <StoreList stores= {this.state.stores}/>

        </article>
    )
}
}

export default KandyKorner