import React, { Component } from 'react';
import EmptyStar from '../logo/star_empty.png';
import YellowStar from '../logo/star.png';
import Lockr from 'lockr';

export default class StarBar extends Component {
  constructor(props) {
    super(props);
    this.firstStarClicked = this.firstStarClicked.bind(this);
    this.secondStarClicked = this.secondStarClicked.bind(this);
    this.thirdStarClicked = this.thirdStarClicked.bind(this);
    this.forthStarClicked = this.forthStarClicked.bind(this);
    this.fifthStarClicked = this.fifthStarClicked.bind(this);
    this.updateStarBarState = this.updateStarBarState.bind(this);
    this.setStatus = this.setStatus.bind(this);
    //alert('stored value: ' + Lockr.get('rate_of_' + this.props.index));
    //Lockr.flush();
    //if(this.props.index ===1) alert(Lockr.getAll());
    if(typeof Lockr.get('status_of_' + this.props.index) === 'undefined') {
       Lockr.set('status_of_' + this.props.index, 0);
     }
    //  if(this.props.index ===1) console.log(Lockr.getAll());
    //  if(this.props.index ===2) console.log(Lockr.getAll());
    //test Lockr
    //Lockr.set('status', 1);
  }
  componentDidMount() {
    this.setStatus();
  }
  setStatus() {
    var status_of_starbar = Lockr.get('status_of_' + this.props.index);
    if(status_of_starbar !== 0) {
        this.updateStarBarState(status_of_starbar);
    }
  }

  firstStarClicked() {
    this.updateStarBarState(1);
  }
  secondStarClicked() {
    this.updateStarBarState(2);
  }
  thirdStarClicked() {
    this.updateStarBarState(3);
  }
  forthStarClicked() {
    this.updateStarBarState(4);
  }
  fifthStarClicked() {
    this.updateStarBarState(5);
  }
  updateStarBarState(index_of_clicked) {
    var i = 0;
    var index = index_of_clicked;
    var StarComponents = [
      this.refs.getStarOneObj,
      this.refs.getStarTwoObj,
      this.refs.getStarThreeObj,
      this.refs.getStarFourObj,
      this.refs.getStarFiveObj
    ];
    for(;i<5;i++){
      if(index>0){
        StarComponents[i].setState({
          switched_on: true
        });
        index--;
      }else {
        StarComponents[i].setState({
          switched_on: false
        });
      }
    }
    Lockr.rm('status_of_' + this.props.index);
    Lockr.set('status_of_' + this.props.index, index_of_clicked);
    // alert('index_of_clicked: ' + index_of_clicked);
    // alert('rate_of_' + this.props.index);
    // alert('stored value: ' + Lockr.get('rate_of_' + this.props.index));
  }

  render() {
    return(
      <div style={StarBarStyle}>
        <ul style={UlStyle}>
          <li><StarBarComponent
            ref='getStarOneObj'
            onClick={this.firstStarClicked}/></li>
          <li><StarBarComponent
            ref='getStarTwoObj'
            onClick={this.secondStarClicked}/></li>
          <li><StarBarComponent
            ref='getStarThreeObj'
            onClick={this.thirdStarClicked}/></li>
          <li><StarBarComponent
            ref='getStarFourObj'
            onClick={this.forthStarClicked}/></li>
          <li><StarBarComponent
            ref='getStarFiveObj'
            onClick={this.fifthStarClicked}/></li>
        </ul>
      </div>
    );
  }
}


class StarBarComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      switched_on: false
    };
  }
  render() {
    if(this.state.switched_on){
      return (<img style={imgStyle}src={YellowStar} onClick={this.props.onClick}/>);
    }else {
      return (<img style={imgStyle}src={EmptyStar} onClick={this.props.onClick}/>);
    }
  }
}
const StarBarStyle = {
  width: '145px',
  height: '29px'
}
const UlStyle = {
  listStyleType: 'none',
  display: 'flex',
  flexDirection: 'row',
  margin: '0 0 0 0',
  padding: '0 0 0 0'

}

const imgStyle = {
  width: '29px',

}
