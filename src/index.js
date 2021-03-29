import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import firebase from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyByrju5RxoCC2wSsHOYQa83861PNqAhT94",
  authDomain: "react-loan-calculator-17770.firebaseapp.com",
  projectId: "react-loan-calculator-17770",
  storageBucket: "react-loan-calculator-17770.appspot.com",
  messagingSenderId: "1020521279542",
  appId: "1:1020521279542:web:e799666bfdb42d7611e897"
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
