import React, { Component } from 'react'


export default class IndividualCandy extends Component {
  render() {
    return (
      <section className="candy">
      <h5>Candy</h5>
      {this.props.candies.map(candies =>
                    <div key={candies.id}>
                        {candies.name}
                    </div>) }
      </section>
    )
  }
}