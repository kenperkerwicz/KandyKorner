import React, { Component } from 'react'
import IndividualCandy from './IndividualCandy'

export default class CandyList extends Component {
  render() {
    return (
      <section className="candy">
       <h5>Candy List</h5>
      
       <h5>{this.props.candyTypes.map(candyTypes =>
                    <div key={candyTypes.id}>
                        {candyTypes.name}
                    </div>)}</h5>
       <IndividualCandy candies={this.props.candies}/>
      </section>
    )
  }
}