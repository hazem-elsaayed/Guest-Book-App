import React, { Component } from 'react';
import Post from './components/Post/Post';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state={
      route:'home'
    }
  }

  //Routing functions to handle renered components
  Routing=(route)=>{
    this.setState({route:route})
  }

  render() {
    return (
      <div className="App">
        {this.state.route==='home'?(
          <div>
            <Post />
          </div>
        ) : (
          <div></div>
        )

        }
      </div>
    );
  }
}

export default App;
