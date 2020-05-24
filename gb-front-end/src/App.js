import React, { Component } from 'react';
import Post from './components/Post/Post';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      route: 'home',
      editedPost:null,
    };
  }

  //Routing functions to handle renered components
  Routing = (route) => {
    this.setState({ route: route });
  };

  //To save data from post component and pass it to the Edit component
  editedPost=(post)=>{
    this.setState({editedPost:post});
  }

  render() {
    return (
      <div className="App">
        {this.state.route === 'home' ? (
          <div>
            <Post routeChange={this.Routing} />
          </div>
        ) : (
          <div></div>
        )}
      </div>
    );
  }
}

export default App;
