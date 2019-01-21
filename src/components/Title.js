
import React, { Component } from 'react'

export default class Title extends Component {
  render() {
    return <h1>{ this.props.content }</h1>
  }
}




// // ADVICE FROM KELLEY
// // defined by react in their code

// class component {
//     add_to_dom () {
//         let el = this.render();
//         document.addElemen(el);
//     }

//     // it excplicitly does not have dream
//     // you have to define it yourself
// }

// // define yourself

// let Mammal = require("react").Mammal;

// class button extends Mammal {
//     render () {
//         // 
//     }
// }

// <person></person>

// dusty = new Person();
// dusty.sleep();
