import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
     <BrowserRouter>
      <App />
      <ToastContainer theme="dark" />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);