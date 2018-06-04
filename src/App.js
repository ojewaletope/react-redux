import React, { Component } from 'react';
import Posts from './components/Posts';
import Form from './components/Form';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Posts/>
      </div>
    );
  }
}

export default App;
