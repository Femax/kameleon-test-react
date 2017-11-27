import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux'
import {login}  from '../../redux/Store'

class LoginForm extends Component {

   constructor(props) {
     super(props);
     this.state = { loginValue: "",
                    passwordValue: ""
                  };
   }


   onUpdate = () => { this.props.onUpdate()}


   handleClick = () => {
      login()
      this.onUpdate();
   }

   updateLoginValue = (evt) => {
       this.setState({
           loginValue: evt.target.value
       });
   }

   updatePasswordValue = (evt) => {
       this.setState({
           passwordValue: evt.target.value
       });
   }


  render() {
    return ( <div>
      <h1>Login</h1>
      <input type="text" id="fname" name="login" placeholder="login" onChange = {this.updateLoginValue} />
      <input type="text" id="lname" name="password" placeholder="password" onChange = {this.  updatePasswordValue} />
      <button value="Login" onClick={this.handleClick}>Login</button>;
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    handleClick: () => {
      dispatch({})
    }
  }
}

export default connect(
  state =>({
    userStore: state
  })
)(LoginForm) ;
