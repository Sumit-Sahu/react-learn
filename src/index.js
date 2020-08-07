import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const cdate = new Date().toLocaleDateString();
const ctime = new Date().toTimeString();
ReactDOM.render(
  <>
  <h1>my name is sumit sahu</h1>
<h1>current date is {cdate} and time is {ctime}</h1>
  </>
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
