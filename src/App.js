
import React, { Component } from 'react'
import NavBar from './components/NavBar.jsx';
import News from './components/News.jsx';
import PropTypes from 'prop-types';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"

export default class App extends Component {
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  }
  static defaultProps = {
    country: 'in',
    pageSize: 20,
    category: 'general',
  }

  render() {
    return (
        <Router>
          <NavBar />
          <Routes>
            <Route exact path="/" element={<News key="general" pageSize={this.props.pageSize} country={this.props.country} category='general' />} />
            <Route exact path="/business" element={<News key="business" pageSize={this.props.pageSize} country={this.props.country} category='business' />} />
            <Route exact path="/entertainment" element={<News key="entertainment" pageSize={this.props.pageSize} country={this.props.country} category='entertainment' />} />
            <Route exact path="/general" element={<News key="general" pageSize={this.props.pageSize} country={this.props.country} category='general' />} />
            <Route exact path="/health" element={<News key="health" pageSize={this.props.pageSize} country={this.props.country} category='health' />} />
            <Route exact path="/science" element={<News key="science" pageSize={this.props.pageSize} country={this.props.country} category='science' />} />
            <Route exact path="/sports" element={<News key="sports" pageSize={this.props.pageSize} country={this.props.country} category='sports' />} />
            <Route exact path="/technology" element={<News key="technology" pageSize={this.props.pageSize} country={this.props.country} category='technology' />} />
          </Routes>
        </Router>
    )
  }
}
