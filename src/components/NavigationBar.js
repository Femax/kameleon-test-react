import React, { Component } from 'react';
import '../css/NavigationBar.css'
class NavigationBar extends Component {

   constructor(props) {
     super(props);
     this.state = { show: props.show };
   }

  render() {
    return (
      <div className="Nav">
          <ul >
            {this.props.items().map((item,i)=>{
              return(<li><a class={item.name==="Top 10"?"active":""} href="#home">{item.name}</a></li>);
            })}
          </ul>
      </div>
    );
  }
}

export default NavigationBar;
