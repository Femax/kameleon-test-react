import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux'

class LoggedInForm extends Component {

   constructor(props) {
     super(props);
   }

  render() {
    return (
    <h1>Hello {this.props.userStore[0]}</h1>
    );
  }
}

export default connect(
  state =>({
    userStore: state
  }),
  dispatch =>({})
)(LoggedInForm) ;
