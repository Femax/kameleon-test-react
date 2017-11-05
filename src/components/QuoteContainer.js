import React, { Component } from 'react';
import Quote from './Quote';
import '../css/QuoteContainer.css'
import axios from 'axios';

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
    axios.get(`http://localhost:8090/quotes`)
          .then(res => {
            console.log(res);
            const posts = res.data._embedded.quotes.map(obj => obj);
            console.log(posts);
            this.setState({ posts })
            }).catch(error =>{
                  console.log(error);
    });
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
                  isActive={ this.state.activeIndex===i} by="Login"
                  count={quote.count} onClick={ this.handleClick }
                  by={quote.by}
                  />
              );
        })}

      </div>
    );
  }
}
//
// {
//   this.state.data.map( (quote,i)=>{
//   return (
//           <Quote
//           text={quote.text} index={i}
//           isActive={ this.state.activeIndex===i} by="Login"
//           count={quote.count} onClick={ this.handleClick }
//           by={quote.by}
//           />
//       );
// })}
export default QuoteContainer;
