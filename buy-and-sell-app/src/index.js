import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './style.css'
import {BrowserRouter} from 'react-router-dom'
import 'typeface-roboto';

ReactDOM.render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>,
  document.getElementById('root')
);
