import React, { Component } from 'react';

export default class ImageMessageComponent extends Component {
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


            <img style={ImageStyle}src={this.props.src} alt='chat_image'/>




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
const MessageSenderStyle = {
  width: '100%',
  paddingLeft: '20px',
  paddingRight: '20px',
  paddingBottom: '20px',
  color: '#8c8c8c',
  display:'flex',
  alignItems:'center'
}

const ImageStyle = {
  width: '100%',
  height: 'auto'
}
