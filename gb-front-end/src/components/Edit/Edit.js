import React, { Component } from 'react';

class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.editedPost.title,
      description: this.props.editedPost.description,
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
    const { routeChange, editedPost } = this.props;
    return (
      <div className="edit">
        <fieldset>
          <legend>Edit Your Post</legend>
          <label>Title:</label>
          <input
            type="text"
            defaultValue={editedPost.title}
            onChange={(txt) => this.titleChange(txt)}
          ></input>
          <br></br>
          <br></br>
          <label>Description:</label>
          <textarea
            defaultValue={editedPost.description}
            onChange={(txt) => this.descriptionChange(txt)}
          ></textarea>
          <br></br>
          <br></br>
          <button>Submit</button>
          <button onClick={() => routeChange('home')}>Cancel</button>
        </fieldset>
      </div>
    );
  }
}

export default Edit;
