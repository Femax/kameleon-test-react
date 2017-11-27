import React, { Component } from 'react';
import Quote from '../customviews/Quote';
import '../../css/QuoteContainer.css'
import axios from 'axios';
import {getQuotes} from '../../redux/Store'
import {connect} from 'react-redux'


class QuoteContainer extends Component {

  constructor(props) {
     super(props);
     this.state = { index: null,
                    data:
                          [{id:0,text:"Lorem Ipsum 1",count:0,by:"Femax"},
                           {id:1,text:"Lorem Ipsum 2",count:0,by:"Jhon"},
                           {id:2,text:"Lorem Ipsum 3",count:0,by:"Doe"}],
                    posts:[]
                  };
    }

  componentDidMount = () => {
      getQuotes()
  }

  handleClick = (index) => this.setState({ activeIndex: index })

  render() {
    return (
      <div className="QuoteContainer">
        {

          this.state.posts.map( (quote,i)=>{
          return (
                  <Quote
                  text={quote.text} index={i}
                  isActive={ this.state.activeIndex===i}
                  count={quote.count} onClick={ this.handleClick }
                  by={quote.by}
                  />
              );
        })}

      </div>
    );
  }
}

export default connect(
  state =>({
    userStore: state
  })
)(QuoteContainer) ;
