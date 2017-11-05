import React, { Component } from 'react';
import QuoteContainer from './components/QuoteContainer';
import LoginContainer from './components/LoginContainer';
import Nav from './components/NavigationBar';
import './css/App.css';

class App extends Component {

  getNavItems=()=>{
    var NavItems = [{name:'Profile'},{name:'Top 10'},{name:'Flop 10'},{name:'Last'}];
    return NavItems;
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        <Nav items={this.getNavItems}/>
        </header>
        <div className="Left">
          <QuoteContainer/>
        </div>
        <div className="Right">
          <LoginContainer/>
        </div>
      </div>
    );
  }
}

export default App;
