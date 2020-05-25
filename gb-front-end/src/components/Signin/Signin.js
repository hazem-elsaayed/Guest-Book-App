import React, { Component } from 'react';

class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  //handle email change
  emailChange = (txt) => {
    this.setState({ email: txt.target.value });
  };

  //handle password change
  passwordChange = (txt) => {
    this.setState({ password: txt.target.value });
  };

  render() {
    return (
      <div>
        <h1>Welcome to the Geust Book App</h1>
        <h4>Please Sign in or Register to get to the App</h4>
        <fieldset>
          <legend>Sign In</legend>
          <label>Email:</label>
          <input type="text" autoComplete="on"></input>
          <br></br>
          <br></br>
          <label>Password:</label>
          <input type="password"></input>
          <br></br>
          <br></br>
          <button>Submit</button>
          <br></br>
          <br></br>
          <button>Register</button>
        </fieldset>
      </div>
    );
  }
}

export default Signin;
