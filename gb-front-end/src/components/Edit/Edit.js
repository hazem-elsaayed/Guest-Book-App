import React, { Component } from 'react';

class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.editedPost.title,
      description: this.props.editedPost.description,
    };
  }

  render() {
    return <div></div>;
  }
}

export default Edit;
