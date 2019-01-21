import React, { Component } from 'react'

export default class Clock extends Component {
  
  state = { 
    time: new Date(), 
  }

  // function for hours, minutes and seconds??? 
  // How to mke it update every hour, minute, second???
  tick = () => {
    this.setState({
      time: new Date(),
    });

    setInterval(this.tick, 1000);
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  // create props for hours, minutes, seconds???
  // how to apply tick fn's to different props??? 

  render () {
    return (<div>
      <p>
        <span id = "hours">{ this.state.time.getHours() }</span>
        :
        <span id = "minutes">{ this.state.time.getMinutes() }</span>
        :
        <span id = "seconds">{ this.state.time.getSeconds() }</span>
      </p>
    </div>)
  }
}
