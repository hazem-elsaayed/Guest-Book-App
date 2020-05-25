import React, { Component } from 'react';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      password2: '',
    };
  }

  render() {
    return (
      <div>
        <fieldset>
          <legend>Register</legend>
          <label>Name:</label>
          <input type="text"></input>
          <br></br>
          <br></br>
          <label>Email:</label>
          <input type="email"></input>
          <br></br>
          <br></br>
          <label>password:</label>
          <input type="password"></input>
          <br></br>
          <br></br>
          <label>Re-type Password:</label>
          <input type="password"></input>
          <br></br>
          <br></br>
          <button> Register</button>
          <br></br>
          <button>Signin</button>
        </fieldset>
      </div>
    );
  }
}

export default Register;
