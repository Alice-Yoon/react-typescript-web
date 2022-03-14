import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom'
import ResponsiveStore from './store/responsive';

ReactDOM.render(
  <React.StrictMode>
    <ResponsiveStore>
      <Router>
        <App />
      </Router>
    </ResponsiveStore>
  </React.StrictMode>,
  document.getElementById('root')
);

