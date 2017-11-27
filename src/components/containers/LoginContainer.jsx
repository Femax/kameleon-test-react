import React, { Component } from 'react';
import LoginForm from '../customviews/LoginForm'
import LoggedInForm from '../customviews/LoggedInForm'
import {connect} from 'react-redux'
import '../../css/LoginContainer.css'

class LoginContainer extends Component {

   constructor(props) {
     super(props);
     var isLoggedInV = this.props.userStore.length >0;
     console.log(isLoggedInV)
     this.state = {isLoggedIn: isLoggedInV};
   }

   onLogin = () => {
     this.state.isLoggedIn = true;
     this.forceUpdate()
   }

  render() {
    var content;
    if (this.state.isLoggedIn){
        console.log(this.props.userStore)
        content = <LoggedInForm />;
      }else{
        content =<LoginForm
          onUpdate = {this.onLogin}
          name = {this.props.userStore[0]} />;
      }
    return (
      <div className="LoginContainer LoginBlock">
          {content}
      </div>
    );
  }



}

export default connect(
  state =>({
    userStore: state
  })
)(LoginContainer) ;
