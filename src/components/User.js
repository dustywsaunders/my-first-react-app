
import React, { Component } from 'react'

export default class User extends Component {
  render() {
    return <div className = 'user'><p><b>{ this.props.name }</b></p></div>
  }
}