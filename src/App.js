import React, { Component } from 'react';
import QuoteContainer from './components/containers/QuoteContainer';
import NewQuoteContainer from './components/containers/NewQuoteContainer';
import LoginContainer from './components/containers/LoginContainer';
import Nav from './components/customviews/NavigationBar';
import {connect} from 'react-redux'
import './css/App.css';

class App extends Component {

  getNavItems=()=>{
    var NavItems = [{name:'Profile'},{name:'Top 10'},{name:'Flop 10'},{name:'Last'}];
    return NavItems;
  }

  render() {
    return (
      <div className="App">
        {this.props.userStore}
        <header className="App-header">
        <Nav items={this.getNavItems}/>
        </header>
        <div className="Left">
          <NewQuoteContainer/>
          <QuoteContainer/>
        </div>
        <div className="Right">
          <LoginContainer/>
        </div>
      </div>
    );
  }
}

export default connect(
  state =>({
    userStore: state
  }),
  dispatch =>({})
)(App) ;
