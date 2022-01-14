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
import "./fonts/Doyle-Black.ttf"
import { HelmetProvider } from 'react-helmet-async';



ReactDOM.render(
  <BrowserRouter>
  <HelmetProvider>
    <App />
  </HelmetProvider>
    </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
