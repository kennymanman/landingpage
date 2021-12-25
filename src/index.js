import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from "react-router-dom";
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./fonts/Recoleta-Medium.ttf"
import "./fonts/Recoleta-Bold.ttf"
import "./fonts/Recoleta-Light.ttf"
import "./fonts/RecoletaAlt-Bold.ttf"
import "./fonts/RecoletaAlt-Medium.ttf"
import "./fonts/RecoletaAlt-Light.ttf"



ReactDOM.render(
  <BrowserRouter>
    <App />
    </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();