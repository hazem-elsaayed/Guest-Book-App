import React, { Component } from 'react';
import './Post.css';

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      replyText:'',
    };
  }

  //getting intial data from server
  componentDidMount() {
    fetch('http://localhost:5000/')
      .then((response) => response.json())
      .then((data) => this.setState({ data }));
  }

  //handling post deletion
  delete = (post) => {
    let confirm = window.confirm('Are you sure you want to delete this post?');
    if (confirm) {
      fetch(`http://localhost:5000/delete/${post._id}`, {
        method: 'delete',
      })
        .then(this.componentDidMount())
        .catch((err) => console.log(err));
    }
  };

  //handling reply input text change
  txtChange=(e)=>{
    this.setState({replyText:e.target.value})
    console.log(this.state.replyText)
  }

  render() {
    console.log(this.state.data);
    return (
      <div className="container">
        {this.state.data.map((post, i) => {
          return (
            <div className="post">
              <h3>{post.title}</h3>
              <p className="pstTxt">{post.description}</p>
              <p>{post.createdBy} wrote</p>
              {/* <div> */}
              <input
                type="text"
                placeholder="Add a reply"
                className="rplyTxt"
                onChange={(txt)=>this.txtChange(txt)}
              ></input>
              <button>reply</button>
              <button>Edit</button>
              <button onClick={() => this.delete(post)}>Delete</button>
              {/* </div> */}
              {post.replies.map((reply) => {
                return (
                  <div className="reply">
                    <p className="pstTxt">{reply.description}</p>
                    <p>{reply.writtenBy} replied</p>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    );
  }
}

export default Post;
