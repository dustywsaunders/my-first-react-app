
import React, { Component } from 'react';
import User from './User';

export default class UserBoard extends Component {
  render() {
    return <div className = 'board'>
      <h1>User Board</h1>
      <User name="Alice"/>
      <User name="Beth"/>
      <User name="Candice"/>
    </div>
  }
};

