import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux'
import {createQuote} from '../../redux/Store'
import '../../css/LoginContainer.css'


class NewQuoteContainer extends Component {

   constructor(props) {
     super(props);
     this.state = { show: props.show };
   }

   handleClick = () => {
      createQuote(this.state.quoteValue, 0, this.props.userStore[0])
   }
   updateInputValue = (evt) => {
     this.setState({
       quoteValue: evt.target.value
     });
   }

  render() {
    return (
      <div className="LoginContainer LoginBlock">
        <h1>New Quote</h1>
        <input type="text" id="fname"
        className="QuoteValue" name="quote"
        onChange={evt => this.updateInputValue(evt)}
        placeholder="quote"/>
        <button value="New Quote"   onClick = {this.handleClick}>New Quote</button>
      </div>
    );
  }
}


export default connect(
  state =>({
    userStore: state
  }),
  dispatch =>({})
)(NewQuoteContainer) ;
