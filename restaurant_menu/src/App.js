import React, { Component } from 'react';
import axios from 'axios'
import MenuList from './MenuList'
import './App.css';

class App extends Component {
  state= {
    dishesList: []
  }
componentDidMount() {
  axios.get('http://localhost:3001/dishes')
    .then(response => this.setState({dishesList: response.data}))
}

  render() {
    console.log(this.state.dishesList);
    return (
      <div className="App">
        <MenuList dishesList={this.state.dishesList}/>
      </div>
    );
  }
}

export default App;
