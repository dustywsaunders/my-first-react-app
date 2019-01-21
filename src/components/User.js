
import React, { Component } from 'react'

export default class User extends Component {

  state = { active: true }

  toggle = () => {
    this.setState({
      active: !this.state.active
    })
  }

  render () {
    return <div className = 'user'> 
      <p>{ this.props.name } is <b>{ this.state.active ? '' : 'not' }</b> active.</p>
      <button onClick={this.toggle}>Toggle</button>
    </div>
  }

}