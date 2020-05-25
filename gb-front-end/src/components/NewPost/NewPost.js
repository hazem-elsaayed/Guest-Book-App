import React, { Component } from 'react';

class NewPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
    };
  }

  //handling title change
  titleChange = (txt) => {
    this.setState({ title: txt.target.value });
  };

  //handling description change
  descriptionChange = (txt) => {
    this.setState({ description: txt.target.value });
  };

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
