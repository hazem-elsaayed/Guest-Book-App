import React, { Component } from 'react';
import Post from './components/Post/Post';
import './App.css';

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="App">
        <Post />
      </div>
    );
  }
}

export default App;
