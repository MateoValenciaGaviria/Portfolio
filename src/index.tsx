import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './fonts/consolas/consola.ttf';
import './fonts/consolas/consolab.ttf';
import './index.css';
import App from './containers/App/App';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App></App>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
