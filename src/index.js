import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Router, Route, browserHistory} from 'react-router';
import registerServiceWorker from './registerServiceWorker';
import App from './App';
import MySignUpPage from './MySignUpPage.js';
import Posts from './Posts';
import Chat from './Chat';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route exact path="/" component={App}/>
    <Route path="/signup" component={MySignUpPage}/>
    <Route path="/posts" component={Posts}/>
    <Route path="/chat" component={Chat}/>
  </Router>,
  document.getElementById('root'));
registerServiceWorker();
