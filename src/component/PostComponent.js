/**
 *
 *
 *props:
 * - data
 * - index
 *
 *
 *
 *
 */
import React, { Component } from 'react';
import StarBar from './StarBar';
import UpArrow from '../logo/up-arrow.png';
import DownArrow from '../logo/download.png';
import axios from 'axios';
import CommentComponent from './CommentComponent';

export default class PostComponent extends Component {
  constructor(props) {
    super(props);
    this.state= {
      showComment: false,
      comment: undefined
    };
    this.toggleComment = this.toggleComment.bind(this);
    this.getCommentFromInternet = this.getCommentFromInternet.bind(this);
    this.generateComments = this.generateComments.bind(this);
  }

  toggleComment() {

    if(this.state.comment == undefined){
      this.getCommentFromInternet();
    }else {
      this.setState({
        showComment: !this.state.showComment
      });
    }
  }
  //get comment for this post component
  getCommentFromInternet() {
    var root = 'https://jsonplaceholder.typicode.com';
    axios({
      method:'get',
      url: root + '/posts/' + (this.props.index + 1) +'/comments',
      responseType:'stream'
    }).then(function(response) {
      console.log(JSON.stringify(response.data));
      this.setState({
        comment: response.data,
        showComment: true
      });}.bind(this));
  }
  generateComments() {
    var length = this.state.comment.length;

    var CommentArr = new Array(length);
    var i = 0;
    for(;i<length;i++) {
      CommentArr[i] = <CommentComponent
        data={this.state.comment[i]}
        key={i}
        index={i}/>;
    }
    return CommentArr;
  }


  render() {

      return(
        <div style={PostComponentStyle}>
          <div style={PostComponentTitleStyle}><div>{this.props.data.title}</div></div>
          <div style={PostComponentBodyStyle}>{this.props.data.body}</div>
          <div style={StarBarStyle}><StarBar index={this.props.index}/></div>
          <div style={PostComponentCommentStyle}>
            <div>{this.state.showComment? 'Hide Comments':'Show Comments'}</div>
            <div>{this.state.showComment?
              <img onClick={this.toggleComment}style={ImgStyle}src={UpArrow}/>:
              <img onClick={this.toggleComment}style={ImgStyle}src={DownArrow}/>}
            </div>
          </div>
          {this.state.comment?
            <div style={this.state.showComment? PostComponentToggleStyle.show:PostComponentToggleStyle.hidden}>
              {// generate multiple comments
                this.generateComments()
              }
            </div>:
            <div></div>}
        </div>
      );

  }
}

const PostComponentStyle = {
  marginTop: '30px',
  width: '1113px',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  border: '2px solid #cccccc'
}
const PostComponentTitleStyle = {
  width: '100%',
  height: '45px',
  backgroundColor: '#cccccc',
  textAlign: 'center',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}
const PostComponentBodyStyle = {
  padding: '35px 37px 40px 36px',
  backgroundColor: '#ffffff'
}
const StarBarStyle = {
  display: 'flex',
  flexDirection: 'row-reverse',
  paddingRight: '36px',
  marginBottom: '10px'
}

const PostComponentCommentStyle = {
  backgroundColor: '#cccccc',
  height: '45px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingLeft: '35px',
  paddingRight: '36px',
  //marginBottom: '-2px'
}
const ImgStyle = {
  width: '30px',
  height: '30px'
}
const PostComponentToggleStyle = {
  hidden: {
    display: 'none'
  },
  show: {
    padding: '0 37px 40px 36px'
  }
}
