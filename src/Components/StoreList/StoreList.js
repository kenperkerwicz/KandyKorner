import React, { Component } from 'react'

export default class StoreList extends Component {
  render() {
    return (
      <section className="store">
      <h5>Stores</h5>
        {this.props.stores.map(stores =>
                    <div key={stores.id}>
                        {stores.name}
                    </div>) }
      </section>
    )
  }
}