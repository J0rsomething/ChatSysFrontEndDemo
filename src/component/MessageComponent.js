/**
 *
 *props
 * - data
 *
 *
 */

import React, { Component } from 'react';


export default class MessageComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div style={this.props.client === this.props.data.username?
        MessageBoxContainerStyle.self:
        MessageBoxContainerStyle.others}>
        <div style={this.props.client === this.props.data.username?
          MessageBoxStyle.self:
          MessageBoxStyle.others}>
          <div style={MessageBodyStyle}>
            {this.props.data.message}
          </div>
          <div style={MessageSenderStyle}>
            {this.props.data.username}
          </div>
        </div>
    </div>
    );
  }
}

const MessageBoxContainerStyle = {
  self:{
    display: 'flex',
    flexDirection: 'row-reverse'
  },
  others: {
    display: 'flex',
    flexDirection: 'row',
  }
}
const MessageBoxStyle = {
  self: {
    display: 'flex',
    flexDirection: 'column',
    width: '500px',
    boxShadow: '2px 2px 5px #8c8c8c',
    margin: '45px 45px 45px 45px',
    backgroundColor: '#c92828'
  },
  others: {
    display: 'flex',
    flexDirection: 'column',
    width: '500px',
    boxShadow: '2px 2px 5px #8c8c8c',
    margin: '45px 45px 45px 45px',

  }
}
const MessageBodyStyle = {
  width: '100%',
  padding: '20px',
  fontSize: '25px',
}
const MessageSenderStyle = {
  width: '100%',
  paddingLeft: '20px',
  paddingRight: '20px',
  paddingBottom: '20px',
  color: '#8c8c8c'
}
