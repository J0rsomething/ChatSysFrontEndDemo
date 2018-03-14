import React, { Component } from 'react';
import logo from './logo/logo.JPG';
import MyTextInput from "./component/MyTextInput.js";
import MyButton from "./component/MyButton.js";


class MySignUpPage extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validateData = this.validateData.bind(this);
    this.validateData = this.validateData.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
    //valudate four inputs
    this.validateData();


    //sent POST request with JSON data
    if(true) { // execute only if data pass the validateData() above
      var dataJSON = {
        data: {
          'email': this.email.value,
          'password': this.password.value,
          'name': this.name.value
        }
      }
      var jsonString= JSON.stringify(dataJSON);

    }
  }

  validateData() {
    var counter = 0;
    //Email
    if(String(this.email.value).search (
      /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/
    ) === -1) {
      this.refs.getEmailObj.setState({
        is_error: true,
        value: ''
      });
    }else {
      this.refs.getEmailObj.setState({
        is_error: false
      });
    }


    //passcode
    if(this.password.value.length<6) {
      //set password error
      counter++;
      this.refs.getPasswordObj.setState({
        is_error: true,
        value: ''
        //change color

      });
    }else {
      this.refs.getPasswordObj.setState({
        is_error: false,
      });
    }
    if(this.password_confirmation.value !== this.password.value) {
      counter++;
      this.refs.getPasswordConfirmationObj.setState({
        is_error: true,
        value: ''
        //change color
      });
    }else {
      this.refs.getPasswordConfirmationObj.setState({
        is_error: false,
        //change color
      });
    }
    if(this.name.value.length>20 || this.name.value.length === 0) {
      counter++;
      this.refs.getNameObj.setState({
        is_error: true,
        value: ''
      });
    }else {
      this.refs.getNameObj.setState({
        is_error: false,
      });
    }

  }





  render() {
    return (
      <div style={signUpBlock}>
        <div style={logoDivStyle}>
          <img style={logoImageStyle}src={logo} />
        </div>
        <form style={signUpForm}>
          <MyTextInput placeHolder="Email"
            ref="getEmailObj"
            inputRef={el=>{this.email = el;}}
            type="email"/>
          <MyTextInput placeHolder="Password"
            ref="getPasswordObj"
            inputRef={el=>{this.password = el;}}
            type="password"/>
          <MyTextInput placeHolder="Password Confirmation"
            ref="getPasswordConfirmationObj"
            inputRef={el=>{this.password_confirmation = el;}}
            type="password"/>
          <MyTextInput placeHolder="Name"
            ref="getNameObj"
            inputRef={el=>{this.name = el;}}
            type="text"/>
            <br/><br/><br/><br/><br/>
          <MyButton
            onClick={this.handleSubmit}
            text='Signup'/>
        </form>

      </div>

    );
  }
}
const signUpBlock = {
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  marginTop: '60px',
  width: '466px',
  height: '623px',
  boxShadow: '2px 2px 5px #8c8c8c',
  borderRadius: '15px'
}
const signUpForm = {
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  marginLeft: 'auto',
  marginRight: 'auto'
}
const logoDivStyle = {
  width: '108px',
  height: '108px',
  display: 'flex',
  overflow: 'hidden',
  alignItems: 'center',
  boxShadow: '2px 2px 5px #8c8c8c',
  borderRadius: '80%',
  marginLeft: 'auto',
  marginRight: 'auto',
  marginButton: '10px'
}
const logoImageStyle = {
  width: '108px'
}


export default MySignUpPage;
