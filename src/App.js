import React, {Component} from 'react';
import "./App.css"
import { Link } from 'react-router';

class App extends Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
      <div>
        <h1>My practice projects</h1>
        <ul role="nav">
          <li><Link to="/signup">Sign Up</Link></li>
          <li><Link to="/posts">Posts</Link></li>
          <li><Link to="/chat">Chat</Link></li>
        </ul>
      </div>
    );
  }
}


export default App;
