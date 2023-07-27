import './App.css';

import React, { Component } from 'react'

export default class App extends Component {
  myName = "Akshaj";
  render() {
    return (
      <div>Hello my first class based component {this.myName}</div>
    )
  }
}
