import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom"
export default class App extends Component {
  myName = "Akshaj";
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<News key="general" pageSize={9} country="in" topic="general"/>} />
            <Route exact path="/business" element={<News key="business" pageSize={9} country="in" topic="business"/>} />
            <Route exact path="/entertainment" element={<News key="entertainment" pageSize={9} country="in" topic="entertainment"/>} />
            <Route exact path="/general" element={<News key="general" pageSize={9} country="in" topic="general"/>} />
            <Route exact path="/health" element={<News key="health" pageSize={9} country="in" topic="health"/>} />
            <Route exact path="/science" element={<News key="science" pageSize={9} country="in" topic="science"/>} />
            <Route exact path="/sports" element={<News key="sports" pageSize={9} country="in" topic="sports"/>} />
            <Route exact path="/technology" element={<News key="technology" pageSize={9} country="in" topic="technology"/>} />
          </Routes>
        </Router>
      </div>
    )
  }
}
