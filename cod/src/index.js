import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
// import Quiz from './components/Quiz'
import Microwave from './microwave/Microwave'
import * as firebase from 'firebase'
import './index.css';

var config = {
    apiKey: "AIzaSyCtQjVUYkc5DHWncnCoFnN6xEjIRlQs8F0",
    authDomain: "testapp-e1b08.firebaseapp.com",
    databaseURL: "https://testapp-e1b08.firebaseio.com",
    projectId: "testapp-e1b08",
    storageBucket: "testapp-e1b08.appspot.com",
    messagingSenderId: "309716805772"
};
firebase.initializeApp(config);

const rootEl = document.getElementById('root')

const render = () => ReactDOM.render(
  <Microwave />,
  rootEl
)

render()