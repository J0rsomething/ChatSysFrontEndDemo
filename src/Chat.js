import React, { Component } from 'react';
import * as firebase from "firebase";
import MyTextInput from './component/MyTextInput';
import MyButton from './component/MyButton';
import Image from './logo/picture.png';
import MessageComponent from './component/MessageComponent';
import axios from 'axios';
import ImageMessageComponent from './component/ImageMessageComponent';
export default class Chat extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.onSend = this.onSend.bind(this);
    this.handleEnterPressed = this.handleEnterPressed.bind(this);
    this.onImageSend = this.onImageSend.bind(this);
    this.state = {
      inputValue: '',
      messagesCache: []
    };
    //psudo user name
    this.userName = "Jiawei";
  }
  componentWillMount() {
    var config = {
      apiKey: "AIzaSyAMS5ccOKZWktetVKAlbaLeIQoncG2uD04",
      authDomain: "wookochatpracticebyjiaweixing.firebaseapp.com",
      databaseURL: "https://wookochatpracticebyjiaweixing.firebaseio.com",
      projectId: "wookochatpracticebyjiaweixing",
      storageBucket: "gs://wookochatpracticebyjiaweixing.appspot.com/",
      messagingSenderId: "919446585754"
    };
    firebase.initializeApp(config);

    this.messagesRef = firebase.database().ref('messages');
    this.storageRef = firebase.storage().ref();
    //this.imagesRef = this.storageRef.child('image');

    this.messagesRef.on('child_added', function(data) {
      console.log(data.val());
      //detect the new message is a message or an image_ref
      if( typeof data.val().message !== 'undefined') {
        var messagesCacheArr = this.state.messagesCache;
        messagesCacheArr.push(<MessageComponent
          data={data.val()}
          client={this.userName}/>);
        this.setState({
          messagesCache: messagesCacheArr,
          inputValue: ''
        },function() {
          this.messageArea.scrollTop = this.messageArea.scrollHeight - this.messageArea.clientHeight;
        });
        //if this new message is an image
      }else {
        var messagesCacheArr = this.state.messagesCache;
        let  index = messagesCacheArr.length;
        messagesCacheArr.push(<ImageMessageComponent
          src={data.val().image_ref}
          key={index}
          client={this.userName}
          data={data.val()}/>);
          this.setState({
            messagesCache: messagesCacheArr
          },function() {
            this.messageArea.scrollTop = this.messageArea.scrollHeight - this.messageArea.clientHeight;
          });
        //get image url from storageRef using data.val().image_ref

        //
        ///////////////////////////////////////////////
        // messagesCacheArr.push(<ImageMessageComponent
        //   src={url}
        //   client={this.userName}
        //   data={data.val()}/>);
        // this.setState({
        //   messagesCache: messagesCacheArr
        // },function() {
        //   this.messageArea.scrollTop = this.messageArea.scrollHeight - this.messageArea.clientHeight;
        // });
      }


    }.bind(this));

  }
  getDataFromInternet(url, ) {
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



  onSend() {
    if(this.state.inputValue !== '') {
      var newMessage = this.messagesRef.push({
        username: this.userName,
        message : this.state.inputValue
      });
    }

  }
  onImageSend() {
    console.log(this.send_image.files[0]);
    var random_id_by_system_time = new Date();
    var random_id = random_id_by_system_time.getTime().toString();
    this.storageRef.child(random_id).put(this.send_image.files[0]).then(function(snapshot) {
    this.storageRef.child(random_id).getDownloadURL()
      .then(url => {
        this.messagesRef.push({
          username: this.userName,
          image_ref : url
        });

      });


    }.bind(this));
  }

  handleChange(event) {
    this.setState({
      inputValue: event.target.value
    });
  }

  handleEnterPressed(event) {
    if(event.key === 'Enter') {
      this.onSend();
    }
  }


  render() {
    return(
      <div style={BackgroundStyle}>
        <div style={TopBar}>
          <h1>Chat</h1>
        </div>
        <div style={ChatBodyContainerStyle}>
          <div style={ChatBodyStyle}>
            <div ref={el=>{this.messageArea=el}} style={MessageAreaStyle}>
              {this.state.messagesCache}
            </div>
            <div style={InputAreaStyle}>
              <input
                type='text'
                style={InputTextStyle}
                placeholder='Type Message Here...'
                onChange={this.handleChange}
                value={this.state.inputValue}
                onKeyDown={this.handleEnterPressed}/>
              <MyButton
                onClick={this.onSend}
                text='Send'/>

                <label htmlFor="sendimage">
                  <img style ={ImageStyle}
                    src={Image}
                    alt='picture selection'/>
                </label>
                <input
                  id="sendimage"
                  type="file"
                  style={{display: 'none'}}
                  ref={el=>{this.send_image = el}}
                  onChange={this.onImageSend}
                  />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const BackgroundStyle = {
  width: '100%',
  height: 'auto',
  backgroundColor: '#e7e7e7',
  justifyContent: 'center'
}
const TopBar = {
  width: '100%',
  height: '88px',
  boxShadow: '2px 2px 5px #8c8c8c',
  textAlign: 'center',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#ffffff'
}
const ChatBodyContainerStyle = {
  display: 'flex',
  justifyContent: 'center'
}

const ChatBodyStyle = {
  marginTop: '45px',
  width: '975px',
  height: '1100px',
  backgroundColor: '#ffffff',
  boxShadow: '2px 2px 5px #8c8c8c',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column'
}

const MessageAreaStyle = {
  width: '100%',
  height: '1000px',
  overflow: 'scroll'
}
const InputAreaStyle = {
  width: '100%',
  height: '100px',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center'
}
const ImageStyle = {
  width: '50px',
  height: 'auto',
  marginRight: '20px'
}
const InputTextStyle = {
  width: '600px',
  height: '50px',
  border: '2px solid #868483',
  borderRadius: '5px',
  marginLeft: '20px',
  fontSize: '30px',
  paddingLeft: '10px'
}
