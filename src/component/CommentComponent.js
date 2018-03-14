import React, { Component } from 'react';

export default class CommentComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div style={PostComponentCommentItemStyle}>
        <div style={PostComponentCommentItemBodyStyle}>{this.props.data.body}</div>
        <div style={PostComponentCommentItemBarStyle}>
          <div style={PostComponentCommentItemBarElementOneStyle}>
            {this.props.data.name}
          </div>
          <div style={PostComponentCommentItemBarElementTwoStyle}>
            {this.props.data.email}}
          </div>
        </div>
      </div>
    );
  }

}
const PostComponentCommentItemStyle = {
  border: '2px solid #cccccc',
  display: 'flex',
  flexDirection: 'column',
  marginTop: '45px'
}
const PostComponentCommentItemBodyStyle = {
  padding: '35px 36px 40px 36px'
}
const PostComponentCommentItemBarStyle ={
  display: 'flex',
  flexDirection: 'row',
  backgroundColor: '#cccccc',
  height: '45px',
  //width: '100%'
  alignSelf: 'stretch',
  width: '1040px',
  marginLeft: '-2px'
}

const PostComponentCommentItemBarElementOneStyle = {
  paddingLeft: '36px',
  display: 'flex',
  alignItems: 'center',
  width: '70%',
  borderRight: '2px solid black',

  overflow: 'hidden',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',


}
const PostComponentCommentItemBarElementTwoStyle = {
  display: 'flex',
  alignItems: 'center',
  paddingLeft: '36px',
  width: '30%',

  overflow: 'hidden',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',


}
