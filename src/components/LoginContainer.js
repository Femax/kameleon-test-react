import React, { Component } from 'react';
import '../css/LoginContainer.css'
class LoginContainer extends Component {

   constructor(props) {
     super(props);
     this.state = { show: props.show };
   }

  render() {
    return (
      <div className="LoginContainer LoginBlock">
        <h1>Login</h1>
        <input type="text" id="fname" name="login" placeholder="login"/>
        <input type="text" id="lname" name="password" placeholder="password"/>
        <button value="Login">Login</button>
      </div>
    );
  }
}

export default LoginContainer;
