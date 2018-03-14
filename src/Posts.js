import React, { Component } from 'react';
import StarBar from './component/StarBar';
import axios from 'axios';
import PostComponent from './component/PostComponent';
export default class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: undefined
    };
    this.getDataFromInternet =
      this.getDataFromInternet.bind(this);
    this.generatePosts = this.generatePosts.bind(this);
  }

  getDataFromInternet() {
    var root = 'https://jsonplaceholder.typicode.com';
    axios({
      method:'get',
      url: root + '/posts',
      responseType:'stream'
    })
    .then(function(response) {
      this.setState({
        data: response.data
      });
    }.bind(this));
  }


  componentWillMount() {
    this.getDataFromInternet();
  }

  generatePosts() {
    var length = this.state.data.length;
    var PostComponentArr = new Array(length);
    var i = 0;
    for(;i<length;i++) {
      PostComponentArr[i] = <PostComponent
        data={this.state.data[i]}
        key={i}
        index={i}/>;
    }
    return PostComponentArr;
  }

  render() {
    if(this.state.data){
      return(
        //loop through the response.data array and get multiple
        //<PostComponent/>
        <div>{this.generatePosts()}</div>

      );
    }else {
      return(<div></div>);
    }

  }
}
