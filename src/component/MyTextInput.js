/** Customized Text Input
 *
 *Props
 * - placeHolder
 * - inputRef
 * - type
 */

import React, { Component } from 'react';
class MyTextInput extends Component {
  constructor(props) {
    super(props);
    this.state = {is_error: false,
    value: ''};
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    
    this.setState({
      value: event.target.value
    });
  }


  render() {
    var value = this.state.value;
    var type = this.props.type;
    return(
      <div>
        <input
          placeholder={this.props.placeHolder}
          style={this.state.is_error? style.bad:style.good}
          ref={this.props.inputRef}
          onChange={this.handleChange}
          value={value}
          type={type}
        />
        <div style={this.state.is_error? errorMsg.bad:errorMsg.good}>Error</div>
      </div>

    );
  }
}

const style = {
  good: {
    borderStyle: 'none',
    borderBottom: '1px solid #707070',
    marginBottom: '15px',
    marginTop: '15px',
    width: '304px',
    height: '30px'},
  bad: {
    borderStyle: 'none',
    borderBottom: '1px solid #ff0000',
    marginBottom: '15px',
    marginTop: '15px',
    width: '304px',
    height: '30px'
  }
};
const errorMsg = {
  good: {
    display: 'none',
    marginTop: '-15px',
    paddingTop: '15px'
  },
  bad: {
    fontSize: '10px',
    color: '#ff0000',
    marginTop: '-15px'
  }

}


export default MyTextInput;
