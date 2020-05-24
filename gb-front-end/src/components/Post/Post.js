import React, { Component } from 'react';

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  //getting intial data from server
  componentDidMount() {
    fetch('http://localhost:5000/')
      .then((response) => response.json())
      .then((data) => this.setState({ data }));
  }

  render() {
    console.log(this.state.data);
    return (
      <div className="container">
        {this.state.data.map((post, i) => {
          return (
            <div className="post">
              <h3>{post.title}</h3>
              <p>{post.description}</p>
              <p>{post.createdBy} wrote</p>
              {/* <div> */}
              <input type='text'></input>
              <button>reply</button>
              <button>Edit</button>
              <button>Delete</button>
              {/* </div> */}
            </div>
          );
        })}
      </div>
    );
  }
}

export default Post;
