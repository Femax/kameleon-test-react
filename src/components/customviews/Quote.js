import React, { Component } from 'react';
import '../../css/Quote.css'
class Quote extends Component {

   constructor(props) {
     super(props);
     this.state = { show: props.show };
   }

  handleClick = () => this.props.onClick(this.props.index)

  isActive = (value) => {
     return 'QuoteBlock '+((value===this.state.show) ?'active':'default');
   }

  render() {
    return (
        <div onClick={this.handleClick} className="QuoteBlock" >
          <h1 className="Header">Quote</h1>
          <div className="Counter">{this.props.count}</div>
            <div className={this.props.isActive?'active':'block'} >{this.props.text}</div>
          <div className="Footer">by {this.props.by}</div>
        </div>
    );
  }
}

export default Quote;
