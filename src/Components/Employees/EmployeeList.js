import React, { Component } from 'react'

export default class EmployeeList extends Component {
  render() {
    return (
      <section className="employee">
      <h5>Employees</h5>
       {this.props.employees.map(employees =>
                    <div key={employees.id}>
                        {employees.name}
                    </div>) }
      </section>
    )
  }
}