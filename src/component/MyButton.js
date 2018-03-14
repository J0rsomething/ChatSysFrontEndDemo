import React, { Component } from 'react';
import "./MyButton.css";

class MyButton extends Component {
  render(){
    return(
      <button style={ButtonStyle}onClick={this.props.onClick}>{this.props.text}</button>
    );
  }
}

const ButtonStyle = {
  fontSize: '30px'
}
export default MyButton;
