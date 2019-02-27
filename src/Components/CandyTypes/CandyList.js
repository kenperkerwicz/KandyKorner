import React, { Component } from 'react'
import IndividualCandy from './IndividualCandy'

export default class CandyList extends Component {
  render() {
    return (
      <section className="candy">
       <h5>Candy List</h5>
       <IndividualCandy candy={this.props.candies}/>
      </section>
    )
  }
}