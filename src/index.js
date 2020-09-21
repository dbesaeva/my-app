import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let posts = [
  { likesCount: 12, message: 'hi, how are you' },
  { likesCount: 19, message: 'its my first post' },
]

let dialogsData = [
  { id: 1, name: 'Lo' },
  { id: 1, name: 'Helena' },
  { id: 1, name: 'Ann' },
  { id: 1, name: 'Tom' },
]

let messagesData = [
  { id: 1, message: 'Hi' },
  { id: 1, message: 'How are you' },
]

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogsData={dialogsData} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
