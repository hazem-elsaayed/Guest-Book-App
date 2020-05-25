import React, { Component } from 'react';

class NewPost extends Component {
  constructor(props) {
    super(props);
    this.state={
      title:'',
      description:''
    }
  }

  render() {
    return (
      <div>
        <fieldset>
          <legend>Add New Post</legend>
          <label>Title:</label>
          <input type="text"></input>
          <br></br>
          <br></br>
          <label>Description:</label>
          <textarea></textarea>
          <br></br>
          <br></br>
          <button>Submit</button>
          <button>Cancel</button>
        </fieldset>
      </div>
    );
  }
}

export default NewPost;
